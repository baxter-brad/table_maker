
    // WARNING! WARNING! WARNING!
    // Do not edit this file.  Instead, edit the include files in
    // file_compile.ini and then run file_compile to recompile.

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
// from dl_table.include

//--------------------------------------------------------------------
// dl_table( oSpecs );
//
// expects a table specs object with required attribute:
//     dlid: id of the <dl> tag to make into a table
// and with optional attibutes:
//     number ... type of numbering to use (default is no numbering) 
//         value: 'arabic', 'upper-roman', 'upper-alpha', 'lower-roman', 'lower-alpha'
//     bullet ... character(s) to use as a bullet (creates a bullet cell)
//         value: any displayable characters, including entities, e.g., '&bull;'
//     usebull ... index of <dt>'s child element to use as a bullet (creates a cell)
//         value: integer >= 0
//     prefix ... id prefix to assign to cells; ignored if <dt> or <dd> has an id already
//         value: any characters acceptable as an html id attribute

function dl_table( oSpecs ) {

    var sID      = oSpecs.dlid;
    var sNumber  = oSpecs.number;
    var sBullet  = oSpecs.bullet;
    var iUseBull = oSpecs.usebull;
    var sPrefix  = oSpecs.prefix;
    var fNum     = numberAs[sNumber];
    var iDelta   = 0;

    /*
        aRow:    array of row elements (initially just one) to add cells (and rows) to
        aDdts:   array of dts and dds (dl children)
        iChild:  index into aDdts array (should be a dt)
        aDds:    array of indexes into aDdts array (should be dd's)
        iNumber: use this to number the (dt) rows
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
