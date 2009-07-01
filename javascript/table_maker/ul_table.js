//--------------------------------------------------------------------
// from ul_table.js

//--------------------------------------------------------------------
// ul_table( oSpecs );
//
// expects a table specs object with required attribute:
//     ulid: id of the <ul> (or even <ol>) tag to make into a table
// and with optional attibutes:
//     grid ... number of columns in the new table
//         value: integer > 1
//     orien ... whether the cells in the grid go horizontally or vertically
//         value: 'h' or 'v' (or anything not 'h')
//     bullet ... character(s) to use as a bullet (creates a bullet cell)
//         value: any displayable characters, including entities, e.g., '&bull;'
//     usebull ... index of <li>'s child element to use as a bullet (creates a cell)
//         value: integer >= 0
//     prefix ... id prefix to assign to cells; ignored if <li> has an id already
//         value: any characters acceptable as an html id attribute

function ul_table( oSpecs ) {

    var sID      = oSpecs.ulid;
    var iGrid    = oSpecs.grid;  if( !iGrid  ) iGrid  = 1;
    var sOrien   = oSpecs.orien; if( !sOrien ) sOrien = 'h';
    var sBullet  = oSpecs.bullet;
    var iUseBull = oSpecs.usebull;
    var sPrefix  = oSpecs.prefix;
    var makeCells = function ( eRow, aLis ) {
        // -- start --
        var eCell = document.createElement( "TD" );
        var aAttributes = aLis[ iChild ].attributes;
        var sCellID;
        var sClass;
        for( var iAttr = 0; iAttr < aAttributes.length; iAttr++ ) {
            eCell.setAttribute( aAttributes[iAttr].name, aAttributes[iAttr].value );
            if(      aAttributes[iAttr].name == "id"    ) sCellID = aAttributes[iAttr].value;
            else if( aAttributes[iAttr].name == "class" ) sClass  = aAttributes[iAttr].value;
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
        var iLen = aLis[ iChild ].childNodes.length;
        for( var iLiChild = 0; iLiChild < iLen; iLiChild++ ) {
            eCell.appendChild( aLis[ iChild ].childNodes[ 0 ] ); // nodes are shifted off
        }
        eRow.appendChild( eCell );
        // -- end --
    };

    // table
    var eTable = document.createElement( "TABLE" );

    // tbody
    var eTBody = document.createElement( "TBODY" );
    eTable.appendChild( eTBody);

    // <ul> tag to convert to rows & cells
    var eUl = document.getElementById( sID );
    if( eUl ) {
        var eRow = document.createElement( "TR" );
        eRow.setAttribute( "valign", "top" );  // for everybody
        var aLis = eUl.getElementsByTagName( "LI" );

        if( sOrien == 'h' ) {
            for( var iChild = 0; iChild < aLis.length; ) {
                makeCells( eRow, aLis );
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
                    if( iChild < aLis.length ) makeCells( eRow, aLis );
                }
                eTBody.appendChild( eRow );
                eRow = document.createElement( "TR" );
                eRow.setAttribute( "valign", "top" );  // for everybody
            } 
            if( eRow.childNodes ) {
                eTBody.appendChild( eRow );
            }
        }

        // replace ul with table and ID the table
        eUl.parentNode.replaceChild( eTable, eUl );
        var aAttributes = eUl.attributes;
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
