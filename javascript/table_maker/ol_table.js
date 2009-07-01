
    // =============== WARNING! WARNING! WARNING! ===============
    // DO NOT edit this file.  Instead, edit the include files in
    // file_compile.ini and then run file_compile to recompile.
    // =============== WARNING! WARNING! WARNING! ===============

//--------------------------------------------------------------------
// numbering functions

var numberAs = {
    "arabic"      : function ( iNumber ) { return iNumber },
    "lower-alpha" : function ( iNumber ) {
        var sAlpha  = "abcdefghijklmnopqrstuvwxyz";
        var iLen    = sAlpha.length;
        var iChar   = ( iNumber - 1 ) % iLen;
        var sChar   = sAlpha.charAt( iChar );
        var iRepeat = Math.ceil( iNumber / iLen );
        return sChar.repeat( iRepeat ); // 27 is 'aa', 53 is 'aaa' ...
    },
    "upper-alpha" : function ( iNumber ) {
        var sAlpha  = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var iLen    = sAlpha.length;
        var iChar   = ( iNumber - 1 ) % iLen;
        var sChar   = sAlpha.charAt( iChar );
        var iRepeat = Math.ceil( iNumber / iLen );
        return sChar.repeat( iRepeat ); // 27 is 'AA', 53 is 'AAA' ...
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


// repeat method
String.prototype.repeat = function ( iNumber ) {
   var sRet = "", sToRepeat = this.toString();
   while (--iNumber >= 0) { sRet += sToRepeat }
   return sRet;
}


//--------------------------------------------------------------------
// from ol_table.include

//--------------------------------------------------------------------
// ol_table( oSpecs );
//
// expects a table specs object with required attribute:
//     olid: id of the <ol> (or even <ul>) tag to make into a table
// and with optional attibutes:
//     grid ... number of columns in the new table
//         value: integer > 1
//     orien ... whether the cells in the grid go horizontally or vertically
//         value: 'h' or 'v' (or anything not 'h')
//     number ... type of numbering to use (default is 'arabic') 
//         value: 'arabic', 'upper-roman', 'upper-alpha', 'lower-roman', 'lower-alpha'
//     bullet ... character(s) to use as a bullet (creates a bullet cell)
//         value: any displayable characters, including entities, e.g., '&bull;'
//     usebull ... index of <li>'s child element to use as a bullet (creates a cell)
//         value: integer >= 0
//     prefix ... id prefix to assign to cells; ignored if <li> has an id already
//         value: any characters acceptable as an html id attribute

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
            var sName  = aAttributes[ iAttr ].name;
            var sValue = aAttributes[ iAttr ].value;
            // bizarre checks are for IE6 wierdness
            if( sValue.match( /^.+$/ ) &&
                sValue != 'null'       &&
                sValue != 'false'      &&
                sValue != '0'          &&
                sValue != 'inherit'    ){
                eTable.setAttribute( sName, sValue );
            }
        }
    }
}