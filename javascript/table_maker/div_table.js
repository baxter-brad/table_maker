//--------------------------------------------------------------------
// from div_table.js

//--------------------------------------------------------------------
// div_table( oSpecs );
//
// expects a table specs object with required attributes:
//     divid ... id of the <div> tag to make into a table
//     rows ... n-element array of specs for the table rows, as follows:
//        - the cells in each row (an n-element array):
//          - the 'cellspecs' (a three-element array):
//            [0] id to assign to the cell
//            [1] div ids to move into the cell (an n-element array)
//            [2] pairs of attribute names and values (an even numered n-element array)

function div_table( oSpecs ) {

    var sID   = oSpecs.divid; // divid is required
    var aRows = oSpecs.rows;  // rows are required

    var eTableDiv = document.getElementById( sID );
    if( !eTableDiv ) return;  // the div must exist

    // table
    var eTable = document.createElement( "TABLE" );

    // tbody
    var eTBody = document.createElement( "TBODY" );
    eTable.appendChild( eTBody);

    // rows & cells
    for( var iRow = 0; iRow < aRows.length; iRow++ ) {

        // create row
        var eRow = document.createElement( "TR" );
        eRow.setAttribute( "valign", "top" );  // for everybody
        eTBody.appendChild( eRow );

        var aCells = aRows[ iRow ];  // cells are required
        for( var iCell = 0; iCell < aCells.length; iCell++ ) {

            aCellSpecs = aCells[ iCell ];

            // create cell and ID it
            var eCell = document.createElement( "TD" );
            var sID = aCellSpecs[ 0 ];  // cell id is required
            eCell.setAttribute( "id", sID );

            // move divs into cell
            var aDivs = aCellSpecs[ 1 ];  // divs to include are required
            for( var iDiv = 0; iDiv < aDivs.length; iDiv++ ) {
                var eDiv = document.getElementById( aDivs[ iDiv ] );
                if( eDiv ) eCell.appendChild( eDiv.parentNode.removeChild( eDiv ) );
            }

            // pair-wise walk through cell attributes (optional)
            if( aCellSpecs.length > 2 ) {
                var aAttrs = aCellSpecs[ 2 ];
                for( var iAttr = 0; iAttr < aAttrs.length; iAttr += 2 ) {
                    var sName  = aAttrs[ iAttr ];
                    var sValue = aAttrs[ iAttr + 1 ];
                    eCell.setAttribute( sName, sValue );
                }
            }

            eRow.appendChild( eCell );
        }
    }

    // give new table tag all the attributes of old div (do this first)
    var aAttributes = eTableDiv.attributes;
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

    // replace div with table
    eTableDiv.parentNode.replaceChild( eTable, eTableDiv );
}
