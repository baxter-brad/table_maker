function table_maker() {

    // table
    var table_elem = document.createElement( "TABLE" );
    table_elem.setAttribute( "id", "page" );
    table_elem.setAttribute( "style", "width:100%;" );

    // tbody
    var tbody_elem = document.createElement( "TBODY" );
    table_elem.appendChild( tbody_elem );

    // header
    var tr_header  = document.createElement( "TR" );
    tbody_elem.appendChild( tr_header );
    var td_header  = document.createElement( "TD" );
    td_header.setAttribute( "className", "header" );
    td_header.setAttribute( "class", "header" );
    td_header.setAttribute( "colSpan", 3 );
    tr_header.appendChild( td_header );

    // left_margin, body, right_margin
    var tr_middle = document.createElement( "TR" );
    tbody_elem.appendChild( tr_middle );

    // left_margin
    var td_left_margin    = document.createElement( "TD" );
    td_left_margin.setAttribute( "className", "left_margin" );
    td_left_margin.setAttribute( "class", "left_margin" );
    td_left_margin.setAttribute( "rowSpan", 2 );
    tr_middle.appendChild( td_left_margin );

    // body
    var td_body    = document.createElement( "TD" );
    td_body.setAttribute( "className", "body" );
    td_body.setAttribute( "class", "body" );
    tr_middle.appendChild( td_body );

    // right_margin
    var td_right_margin    = document.createElement( "TD" );
    td_right_margin.setAttribute( "className", "right_margin" );
    td_right_margin.setAttribute( "class", "right_margin" );
    td_right_margin.setAttribute( "rowSpan", 2 );
    tr_middle.appendChild( td_right_margin );

    // footer
    var tr_footer  = document.createElement( "TR" );
    tbody_elem.appendChild( tr_footer );
    var td_footer  = document.createElement( "TD" );
    td_footer.setAttribute( "className", "footer" );
    td_footer.setAttribute( "class", "footer" );
    td_footer.setAttribute( "colSpan", 1 );
    tr_footer.appendChild( td_footer );

    // merge with page
    var header_elem = document.getElementById( "header" );
    td_header.appendChild( header_elem.parentNode.removeChild( header_elem ) );

    var left_margin_elem = document.getElementById( "left_margin" );
    td_left_margin.appendChild( left_margin_elem.parentNode.removeChild( left_margin_elem ) );

    var body_elem = document.getElementById( "body" );
    td_body.appendChild( body_elem.parentNode.removeChild( body_elem ) );

    var right_margin_elem = document.getElementById( "right_margin" );
    td_right_margin.appendChild( right_margin_elem.parentNode.removeChild( right_margin_elem ) );

    var footer_elem = document.getElementById( "footer" );
    td_footer.appendChild( footer_elem.parentNode.removeChild( footer_elem ) );

    var page_elem  = document.getElementById( "page" );
    page_elem.parentNode.replaceChild( table_elem, page_elem );

}

/*

'specs' is a JSON object:

- the 'tablespecs', a two-element array:
  0 id of the div to replace with the new table
  1 the rows, an n-element array:
    - the cells in each row, an n-element array
      - the 'cellspecs', an array with 1 or more elements
        0 id/class name*
        - pairs of attribute names and values

*The id/class name gives the id of the <div> that
will be brought into the cell, and the value to
set the cell's class attribute to, e.g.,

<td class="header"><div id="header"> ... </div></td>

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

t1 = [ "page", [
        [ [ "header", "colSpan", 3 ] ],
        [
            [ "left_margin",  "rowSpan", 2 ],
            [ "body"                       ],
            [ "right_margin", "rowSpan", 2 ]
        ],
        [ [ "footer"               ] ]
    ] ];
*/

function table_maker_specs( specs ) {

    // table
    var eTable = document.createElement( "TABLE" );

    // tbody
    var eTBody = document.createElement( "TBODY" );
    eTable.appendChild( eTBody);

    // rows & cells
    var rows = specs[1];
    for( var row = 0; row < rows.length; row++ ) {

        var eTR = document.createElement( "TR" );
        eTBody.appendChild( eTR );

        var cells = rows[row];
        for( var cell = 0; cell < cells.length; cell++ ) {

            var eTD = document.createElement( "TD" );
            var sID = cells[cell][0];
            eTD.setAttribute( "className", sID ); // IE
            eTD.setAttribute( "class", sID );     // Non-IE

            // pair-wise walk through cell attributes
            for( var attr = 1; attr < cells[cell].length; attr += 2 ) {
                var sName  = cells[cell][attr];
                var sValue = cells[cell][attr+1];
                eTD.setAttribute( sName, sValue );
            }

            // move div into table
            var eDiv = document.getElementById( sID );
            eTD.appendChild( eDiv.parentNode.removeChild( eDiv ) );
            eTR.appendChild( eTD );
        }
    }

    // replace div with table
    var table_id = specs[0];
    var eDiv = document.getElementById( table_id );
    eDiv.parentNode.replaceChild( eTable, eDiv );
    eTable.setAttribute( "id", table_id );

}
