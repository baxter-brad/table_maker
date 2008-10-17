/*
dl_table( specs );

    - change a <dl><dt><dd>...</dl> tag into a table tag where each
      <dt> and <dd> become a table cells
    - the attributes of the <dl> tag become those of the <table> tag
    - the attributes of each <dt/dd> tag become those of the <td> tag
    - if bullets, the id and class attributes are given to the bullet
      cells with the suffix '-bullet'
    - similarly for usebull and number
    - rows are not given any attributes
    - (note, no grid or orientation available for dl tables)

'specs' is a JSON object:

{dlid}: id of the dl tag to replace with a new table (table gets this id)
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
    var dl1 = { "dlid" : "dl1" };     // use defaults for everything else
    var dl1 = {
        "dlid"   : "dl1",
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

function dl_table( oSpecs ) {

    var sID      = oSpecs.dlid;
    var iUseBull = oSpecs.usebull;
    var sBullet  = oSpecs.bullet;
    var sPrefix  = oSpecs.prefix;
    var sNumber  = oSpecs.number;
    var fNum     = numberAs[sNumber];
    var iDelta   = 0;

    /*
        aRow:   array of row elements (initially just one) to add cells (and rows) to
        aDdts:  array of dts and dd (dl children)
        iChild: index into aDdts array (should be a dt)
        aDds:   array of indexes into aDdts array (should be dd's)
    */
    var makeCells = function ( aRow, aDdts, iChild, aDds, iNumber ) {
        var eRow     = aRow[ 0 ];
        var iDdCount = aDds.length;
        var eCell = document.createElement( "TD" );
        if( iDdCount > 1 ) eCell.setAttribute( "rowSpan", iDdCount );
        var sCellID;
        var sClass;
        var iValue;
        var aAttributes = aDdts[ iChild ].attributes;
        if( aAttributes ) {
            for( var iAttr = 0; iAttr < aAttributes.length; iAttr++ ) {
                eCell.setAttribute( aAttributes[iAttr].name, aAttributes[iAttr].value );
                if(      aAttributes[iAttr].name == "id"    ) sCellID =  aAttributes[iAttr].value;
                else if( aAttributes[iAttr].name == "class" ) sClass  =  aAttributes[iAttr].value;
                else if( aAttributes[iAttr].name == "value" ) iValue  = +aAttributes[iAttr].value;
            }
        }
        if( !sCellID && sPrefix ) {
            sCellID = sPrefix+(iNumber);
            eCell.setAttribute( "id", sCellID );
        }
        if( typeof( iUseBull ) == 'number' ) {
            var eUseBulletCell = document.createElement( "TD" );
            if( iDdCount > 1 ) eUseBulletCell.setAttribute( "rowSpan", iDdCount );
            eUseBulletCell.appendChild( aDdts[ iChild ].childNodes[ iUseBull ] );
            if( sCellID ) eUseBulletCell.setAttribute( "id",    sCellID + "-usebull" );
            if( sClass  ) eUseBulletCell.setAttribute( "class", sClass  + "-usebull" );
            eRow.appendChild( eUseBulletCell );
        }
        if( sBullet ) {
            var eBulletCell = document.createElement( "TD" );
            if( iDdCount > 1 ) eBulletCell.setAttribute( "rowSpan", iDdCount );
            eBulletCell.innerHTML = sBullet;
            if( sCellID ) eBulletCell.setAttribute( "id",    sCellID + "-bullet" );
            if( sClass  ) eBulletCell.setAttribute( "class", sClass  + "-bullet" );
            eRow.appendChild( eBulletCell );
        }
        if( fNum ) {
            if( typeof( iValue ) == "number" ) iDelta = iValue - iNumber; 
            var eNumberCell = document.createElement( "TD" );
            if( iDdCount > 1 ) eNumberCell.setAttribute( "rowSpan", iDdCount );
            eNumberCell.innerHTML = fNum( iNumber + iDelta )+".";
            if( sCellID ) eNumberCell.setAttribute( "id",    sCellID + "-number" );
            if( sClass  ) eNumberCell.setAttribute( "class", sClass  + "-number" );
            eRow.appendChild( eNumberCell );
        }
        var iLen = aDdts[ iChild ].childNodes.length;
        for( var iDdtChild = 0; iDdtChild < iLen; iDdtChild++ ) {
            eCell.appendChild( aDdts[ iChild ].childNodes[ 0 ] ); // nodes are shifted off
        }
        eRow.appendChild( eCell );

        if( iDdCount ) {

            // first dd goes on current row
            var eCell = document.createElement( "TD" );
            var sCellID;
            var sClass;
            var iValue;
            var iDd = 0;
            var iChild = aDds[ iDd ];
            var aAttributes = aDdts[ iChild ].attributes;
            if( aAttributes ) {
                for( var iAttr = 0; iAttr < aAttributes.length; iAttr++ ) {
                    eCell.setAttribute( aAttributes[iAttr].name, aAttributes[iAttr].value );
                    if(      aAttributes[iAttr].name == "id"    ) sCellID =  aAttributes[iAttr].value;
                    else if( aAttributes[iAttr].name == "class" ) sClass  =  aAttributes[iAttr].value;
                    else if( aAttributes[iAttr].name == "value" ) iValue  = +aAttributes[iAttr].value;
                }
            }
            if( !sCellID && sPrefix ) {
                sCellID = sPrefix+iNumber+"-"+( iDd + 1 );
                eCell.setAttribute( "id", sCellID );
            }
            var iLen = aDdts[ iChild ].childNodes.length;
            for( var iDdtChild = 0; iDdtChild < iLen; iDdtChild++ ) {
                eCell.appendChild( aDdts[ iChild ].childNodes[ 0 ] ); // nodes are shifted off
            }
            eRow.appendChild( eCell );

            // next dd's go on new rows
            for( var iDd = 1; iDd < iDdCount; iDd++ ) {
                var eCell = document.createElement( "TD" );
                aRows[ iDd ] = document.createElement( "TR" );
                aRows[ iDd ].setAttribute( "valign", "top" );  // for everybody
                var sCellID;
                var sClass;
                var iValue;
                var iChild = aDds[ iDd ];
                var aAttributes = aDdts[ iChild ].attributes;
                if( aAttributes ) {
                    for( var iAttr = 0; iAttr < aAttributes.length; iAttr++ ) {
                        eCell.setAttribute( aAttributes[iAttr].name, aAttributes[iAttr].value );
                        if(      aAttributes[iAttr].name == "id"    ) sCellID =  aAttributes[iAttr].value;
                        else if( aAttributes[iAttr].name == "class" ) sClass  =  aAttributes[iAttr].value;
                        else if( aAttributes[iAttr].name == "value" ) iValue  = +aAttributes[iAttr].value;
                    }
                }
                if( !sCellID && sPrefix ) {
                    sCellID = sPrefix+iNumber+"-"+( iDd + 1 );
                    eCell.setAttribute( "id", sCellID );
                }
                var iLen = aDdts[ iChild ].childNodes.length;
                for( var iDdtChild = 0; iDdtChild < iLen; iDdtChild++ ) {
                    eCell.appendChild( aDdts[ iChild ].childNodes[ 0 ] ); // nodes are shifted off
                }
                aRows[ iDd ].appendChild( eCell );
            }
        }
    };

    // table
    var eTable = document.createElement( "TABLE" );

    // tbody
    var eTBody = document.createElement( "TBODY" );
    eTable.appendChild( eTBody);

    // <dl> tag to convert to rows & cells
    var eDl = document.getElementById( sID );
    if( eDl ) {

        var aDdts = eDl.childNodes;

        /*
            each pair of elements in this array represents one <dt>
            the first value is the index of the dt
            the second value is an array of the indexes of the dd's
            (the dots represent text nodes--i.e., white space)
            e.g., <dl>..<dt>..<dt>..<dd>..<dd>..<dt>..<dd>..</dl> =>
                  [   0  1  2  3  4  5  6  7  8  9  10 11 12   ]
                  [ 1, [], 3, [5,7], 9, [11] ]
        */ 
        var aDts = new Array;
        var iDts = -1;  // because we want the first ++iDts to be 0
        var iDds = -1;
        for( var iDdts = 0; iDdts < aDdts.length; iDdts++ ) {
            var sTag = aDdts[ iDdts ].tagName
            if( !sTag ) continue;  // skip text nodes, i.e., white space
            if(      sTag == "DT" ) {
                aDts[ ++iDts ] = iDdts;
                aDts[ ++iDts ] = new Array;
                iDds = -1;
            }
            else if( sTag == "DD" ) {
                aDts[ iDts ][ ++iDds ] = iDdts;
            }
        }

        /*
            this is an array of rows for multiple <dd>'s
        */
        var aRows = new Array;
        aRows[ 0 ] = document.createElement( "TR" );
        aRows[ 0 ].setAttribute( "valign", "top" );  // for everybody

        for( var iDts = 0; iDts < aDts.length; ) {
            var iChild  = aDts[ iDts++ ];
            var aDds    = aDts[ iDts++ ];
            var iNumber = iDts/2;
            makeCells( aRows, aDdts, iChild, aDds, iNumber );
            for( var iRow = 0; iRow < aRows.length; iRow++ ) {
                eTBody.appendChild( aRows[ iRow ] );
            }
            aRows = new Array;
            aRows[ 0 ] = document.createElement( "TR" );
            aRows[ 0 ].setAttribute( "valign", "top" );  // for everybody
        } 

        // replace dl with table and add attributes to the table
        var aAttributes = eDl.attributes;
        if( aAttributes ) {
            for( var iAttr = 0; iAttr < aAttributes.length; iAttr++ ) {
                eTable.setAttribute( aAttributes[iAttr].name, aAttributes[iAttr].value );
            }
        }
        eDl.parentNode.replaceChild( eTable, eDl );
    }
}
