/*
ol_table( specs );

    - change a <ol><li><li>...</ol> tag into a table tag where each
      <li> becomes a table cell
    - the grid spec lets you arrange the cells into columns.
    - the attributes of the <ol> tag become those of the <table> tag
    - the attributes of each <li> tag become those of the <td> tag
    - if bullets, the id and class attributes are given to the bullet
      cells with the suffix '-bullet'
    - rows are not given any attributes

'specs' is a JSON object:

{olid}: id of the ol tag to replace with a new table (table gets this id)
{grid}: the 'grid' value: how many columns in the new table
    - 0, "", or null: 1 column
    - otherwise: that number of columns
{orien}: the 'orientation' value: horizontal or vertical
    - "", null, 'h' or 'horizontal': orient the cells horizontally in the grid, e.g.,
      a b c
      d e f
      g h i
    - 'v' or 'vertical': orient the cells vertically in the grid, e.g.,
      a d g
      b e h
      c f i
{usebull}: index of child element to use in a bullet cell
        (in addition to the above bullet cell, if any)
    - "", or null: no additional bullet cell
    - otherwise: index of bullet element
{bullet}: the 'bullet' value:  how (or whether) to display "bullet cells"
    - "", or null: no bullet cells
    - otherwise: character(s) to use for bullet (may be img tag)
{number}: the 'number' value:  how (or whether) to display "number cells"
    - "", or null: no number cells
    - otherwise: type of numbering to use for number
{prefix}: id prefix for cells and bullet cells
        note: if an <li> tag already has an id, it will be used as-is alone
        for the cell and suffixed with '-bullet' for the bullet cells;
        if not, the id prefix suffixed with an sequence number will be used
        for the cell, and that will be suffexed with '-bullet' for bullet cells;
        e.g.,
            <li id="abc"> => <td id="abc-bullet">&bull;</td><td id="abc">...
            <li>          => <td id="id1-bullet">&bull;</td><td id="id1">...
    - "", or null: no additional ids added to cells
    - otherwise: prefix used as described above

Examples:
    var ol1 = { "olid" : "ol1" };     // use defaults for everything else
    var ol2 = { "olid" : "ol2", "grid" : 3 };  // 3 columns
    var ol1 = {
        "olid"   : "ol1",
        "grid"   : 2,
        "orien"  : "vertical",
        "bullet" : "&bull;",
        "prefix" : "id"
    };

*/

// repeat method
String.prototype.repeat = function ( iNumber ) {
   var sRet = "", sToRepeat = this.toString();
   while (--iNumber >= 0) { sRet += sToRepeat }
   return sRet;
}

// numbering functions
var numberAs = {
    "arabic"      : function ( iNumber ) { return iNumber },
    "lower-alpha" : function ( iNumber ) {
        var sLcAlpha = ".abcdefghijklmnopqrstuvwxyz";
        var sChar = sLcAlpha.charAt( iNumber );
        var iRepeat = iNumber > 26? 1 + iNumber % 26: 1;
        return sChar.repeat( iRepeat );
    },
    "upper-alpha" : function ( iNumber ) {
        var sUcAlpha = ".ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var sChar = sUcAlpha.charAt( iNumber );
        var iRepeat = iNumber > 26? 1 + iNumber % 26: 1;
        return sChar.repeat( iRepeat );
    },
    // http://blog.stevenlevithan.com/archives/javascript-roman-numeral-converter
    "lower-roman" : function (N,s,b,a,o,t) {
        t=N/1e3|0;N%=1e3;
        for(s=b='',a=5;N;b++,a^=7)
            for(o=N%a,N=N/a^0;o--;)
                s='ivxlcdm'.charAt(o>2?b+N-(N&=~1)+(o=1):b)+s;
        return Array(t+1).join('M')+s;
    },
    "upper-roman" : function (N,s,b,a,o,t) {
        t=N/1e3|0;N%=1e3;
        for(s=b='',a=5;N;b++,a^=7)
            for(o=N%a,N=N/a^0;o--;)
                s='IVXLCDM'.charAt(o>2?b+N-(N&=~1)+(o=1):b)+s;
        return Array(t+1).join('M')+s;
    }
};

function ol_table( oSpecs ) {

    var sID      = oSpecs.olid;
    var iGrid    = oSpecs.grid;  if( !iGrid  ) iGrid  = 1;
    var sOrien   = oSpecs.orien; if( !sOrien ) sOrien = 'h';
    var iUseBull = oSpecs.usebull;
    var sBullet  = oSpecs.bullet;
    var sPrefix  = oSpecs.prefix;
    var sNumber  = oSpecs.number; if( !sNumber ) sNumber = 'arabic';
    var fNum     = numberAs[sNumber];
    var iDelta   = 0;

    var makeCells = function ( eRow, aLis, iChild ) {
        var eCell = document.createElement( "TD" );
        var aAttributes = aLis[ iChild ].attributes;
        var sCellID;
        var sClass;
        var iValue;
        for( var iAttr = 0; iAttr < aAttributes.length; iAttr++ ) {
            eCell.setAttribute( aAttributes[iAttr].name, aAttributes[iAttr].value );
            if(      aAttributes[iAttr].name == "id"    ) sCellID =  aAttributes[iAttr].value;
            else if( aAttributes[iAttr].name == "class" ) sClass  =  aAttributes[iAttr].value;
            else if( aAttributes[iAttr].name == "value" ) iValue  = +aAttributes[iAttr].value;
        }
        if( !sCellID && sPrefix ) {
            sCellID = sPrefix+(iChild+1);
            eCell.setAttribute( "id", sCellID );
        }
        if( typeof( iUseBull ) == 'number' ) {
            var eUseBulletCell = document.createElement( "TD" );
            eUseBulletCell.appendChild( aLis[ iChild ].childNodes[ iUseBull ] );
            if( sCellID ) eUseBulletCell.setAttribute( "id",    sCellID + "-usebull" );
            if( sClass  ) eUseBulletCell.setAttribute( "class", sClass  + "-usebull" );
            eRow.appendChild( eUseBulletCell );
        }
        if( sBullet ) {
            var eBulletCell = document.createElement( "TD" );
            eBulletCell.innerHTML = sBullet;
            if( sCellID ) eBulletCell.setAttribute( "id",    sCellID + "-bullet" );
            if( sClass  ) eBulletCell.setAttribute( "class", sClass  + "-bullet" );
            eRow.appendChild( eBulletCell );
        }
        if( fNum ) {
            if( typeof( iValue ) == "number" ) iDelta = iValue - iChild - 1; 
            var eNumberCell = document.createElement( "TD" );
            eNumberCell.innerHTML = fNum( iChild + 1 + iDelta )+".";
            if( sCellID ) eNumberCell.setAttribute( "id",    sCellID + "-number" );
            if( sClass  ) eNumberCell.setAttribute( "class", sClass  + "-number" );
            eRow.appendChild( eNumberCell );
        }
        var iLen = aLis[ iChild ].childNodes.length;
        for( var iLiChild = 0; iLiChild < iLen; iLiChild++ ) {
            eCell.appendChild( aLis[ iChild ].childNodes[ 0 ] ); // nodes are shifted off
        }
        eRow.appendChild( eCell );
    };

    // table
    var eTable = document.createElement( "TABLE" );

    // tbody
    var eTBody = document.createElement( "TBODY" );
    eTable.appendChild( eTBody);

    // <ol> tag to convert to rows & cells
    var eOl = document.getElementById( sID );
    if( eOl ) {
        var eRow = document.createElement( "TR" );
        eRow.setAttribute( "valign", "top" );  // for everybody
        var aLis = eOl.getElementsByTagName( "LI" );

        if( sOrien == 'h' ) {
            for( var iChild = 0; iChild < aLis.length; ) {
                makeCells( eRow, aLis, iChild );
                if( ++iChild % iGrid == 0 ) {
                    eTBody.appendChild( eRow );
                    eRow = document.createElement( "TR" );
                    eRow.setAttribute( "valign", "top" );  // for everybody
                }
            } 
            if( iChild % iGrid > 0 ) {
                eTBody.appendChild( eRow );
            }
        }
        else {
            var iRows = Math.ceil( aLis.length / iGrid );
            for( var iFact1 = 0; iFact1 < iRows; iFact1++ ) {
                for( var iFact2 = 0; iFact2 < iGrid; iFact2++ ) {
                    var iChild = iFact1 + ( iRows * iFact2 );
                    if( iChild < aLis.length ) makeCells( eRow, aLis, iChild );
                }
                eTBody.appendChild( eRow );
                eRow = document.createElement( "TR" );
                eRow.setAttribute( "valign", "top" );  // for everybody
            } 
            if( eRow.childNodes ) {
                eTBody.appendChild( eRow );
            }
        }

        // replace ol with table and ID the table
        eOl.parentNode.replaceChild( eTable, eOl );
        var aAttributes = eOl.attributes;
        for( var iAttr = 0; iAttr < aAttributes.length; iAttr++ ) {
            eTable.setAttribute( aAttributes[iAttr].name, aAttributes[iAttr].value );
        }
    }
}
