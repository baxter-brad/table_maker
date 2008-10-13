/*
table_maker( specs );

'specs' is a JSON object (a two-element array):

[0] id of the div to replace with the new table (table gets this id)
[1] the rows (an n-element array):
    - the cells in each row (an n-element array):
      - the 'cellspecs' (a three-element array):
        [0] id to assign to the cell
        [1] div ids to move into the cell (an n-element array)
        [2] pairs of attribute names and values (an even numered n-element array)

E.g., specs for "table 1":

+---------------------------------------------+
|                                             |
|                   header                    |
|                                             |
+---------------------------------------------+
|        |                           |        |
| left   |           body            | right  |
| margin |                           | margin |
|        +---------------------------+        |
|        |                           |        |
|        |          footer           |        |
|        |                           |        |
+---------------------------------------------+

//          [0]     [1]
var oT1 = [ "page", [
        [
//            [1][0][0][0] [1][0][0][1]  [1][0][0][2]
            [ "td_header", [ "header" ], [ "colSpan", 3 ] ]
        ],
        [
//            [1][1][0][0]       [1][1][0][1]        [1][1][0][2]
            [ "td_left_margin",  [ "left_margin"  ], [ "rowSpan", 2 ] ],
//            [1][1][1][0]       [1][1][1][1]        [1][1][1][2]
            [ "td_body",         [ "body"         ]                   ],
// etc.
            [ "td_right_margin", [ "right_margin" ], [ "rowSpan", 2 ] ]
        ],
        [ [ "td_footer", [ "footer" ] ] ]
    ] ];

// alternative access via "alpha specs"
var hflbrbfc = oT1;

h = header
l = left margin
r = right margin
f = footer
b = body (only when all others missing)

h/f:
f = full
l = left
r = right
c = center

l/r:
f = full
t = top
b = bottom
m = middle

b: (only when all others missing)
f = full

So: hflbrbfc is
header full, left margin bottom, right margin bottom, footer center

*/

function table_maker( aSpecs ) {

    // table
    var eTable = document.createElement( "TABLE" );

    // tbody
    var eTBody = document.createElement( "TBODY" );
    eTable.appendChild( eTBody);

    // rows & cells
    var aRows = aSpecs[ 1 ];
    if( aRows ) {
        for( var iRow = 0; iRow < aRows.length; iRow++ ) {

            // create row
            var eTR = document.createElement( "TR" );
            eTBody.appendChild( eTR );

            var aCells = aRows[ iRow ];
            if( aCells ) {
                for( var iCell = 0; iCell < aCells.length; iCell++ ) {

                    aCellSpecs = aCells[ iCell ];

                    // create cell and ID it
                    var eTD = document.createElement( "TD" );
                    var sID = aCellSpecs[ 0 ];  // cell id is required
                    eTD.setAttribute( "id", sID );

                    // move divs into cell
                    var aDivs = aCellSpecs[ 1 ];  // divs to include are required
                    for( var iDiv = 0; iDiv < aDivs.length; iDiv++ ) {
                        var eDiv = document.getElementById( aDivs[ iDiv ] );
                        if( eDiv )
                            eTD.appendChild( eDiv.parentNode.removeChild( eDiv ) );
                    }

                    // pair-wise walk through cell attributes
                    if( aCellSpecs.length > 2 ) {
                        var aAttrs = aCellSpecs[ 2 ];  // cell specs are optional
                        for( var iAttr = 0; iAttr < aAttrs.length; iAttr += 2 ) {
                            var sName  = aAttrs[ iAttr ];
                            var sValue = aAttrs[ iAttr + 1 ];
                            eTD.setAttribute( sName, sValue );
                        }
                    }

                    eTR.appendChild( eTD );
                }
            }
        }
    }

    // replace div with table and ID table
    var sID = aSpecs[ 0 ];
    var eDiv = document.getElementById( sID );
    if( eDiv ) {
        eDiv.parentNode.replaceChild( eTable, eDiv );
        eTable.setAttribute( "id", sID );
    }

}
