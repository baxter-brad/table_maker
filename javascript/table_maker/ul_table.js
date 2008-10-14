/*
ul_table( specs );

    - change a <ul><li><li>...</ul> tag into a table tag where each
      <li> becomes a table cell
    - the grid spec lets you arrange the cells into columns.
    - the attributes of the <ul> tag become those of the <table> tag
    - the attributes of each <li> tag become those of the <td> tag
    - if bullets, the id and class attributes are given to the bullet
      cells with the suffix '-bullet'
    - rows are not given any attributes

'specs' is a JSON object:

[0] id of the ul tag to replace with a new table (table gets this id)
[1] the 'grid' value: how many columns in the new table
    - 0, "", or null: 1 column
    - otherwise: that number of columns
[2] the 'orientation' value: horizontal or vertical
    - "", null, 'h' or 'horizontal': orient the cells horizontally in the grid, e.g.,
      a b c
      d e f
      g h i
    - 'v' or 'vertical': orient the cells vertically in the grid, e.g.,
      a d g
      b e h
      c f i
[3] the 'bullet' value:  how (or whether) to display "bullet cells"
    - "", or null: no bullet cells
    - otherwise: character(s) to use for bullet (may be img tag)
[4]: id prefix for cells and bullet cells
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
    var ul1 = [ "ul1" ];     // use defaults for everything else
    var ul2 = [ "ul2", 3 ];  // 3 columns
    var ul1 = [ "ul1", 2, "vertical", "&bull;", "id" ];

*/

function ul_table( aSpecs ) {

    var sID     = aSpecs[ 0 ];
    var iGrid   = aSpecs[ 1 ]; if( !iGrid  ) iGrid  = 1;
    var sOrien  = aSpecs[ 2 ]; if( !sOrien ) sOrien = 'h';
    var sBullet = aSpecs[ 3 ];
    var sPrefix = aSpecs[ 4 ];

    // table
    var eTable = document.createElement( "TABLE" );

    // tbody
    var eTBody = document.createElement( "TBODY" );
    eTable.appendChild( eTBody);

    // <ul> tag to convert to rows & cells
    var eUl = document.getElementById( sID );
    if( eUl ) {
        var eRow = document.createElement( "TR" );
        var aLis = eUl.getElementsByTagName( "LI" );
        for( var iChild = 0; iChild < aLis.length; ) {
            if( sBullet ) {
                var eBulletCell = document.createElement( "TD" );
                eBulletCell.innerHTML = sBullet;
                eRow.appendChild( eBulletCell );
            }
            var eCell = document.createElement( "TD" );
            var aAttributes = aLis[ iChild ].attributes;
            for( var iAttr = 0; iAttr < aAttributes.length; iAttr++ ) {
                eCell.setAttribute( aAttributes[iAttr].name, aAttributes[iAttr].value );
            }
            for( var iLiChild = 0; iLiChild < aLis[ iChild ].childNodes.length; iLiChild++ ) {
                eCell.appendChild( aLis[ iChild ].childNodes[ iLiChild ] );
            }
            eRow.appendChild( eCell );
            if( ++iChild % iGrid == 0 ) {
                eTBody.appendChild( eRow );
                eRow = document.createElement( "TR" );
            }
        } 
        if( iChild % iGrid > 0 ) {
            eTBody.appendChild( eRow );
        }

        // replace ul with table and ID the table
        eUl.parentNode.replaceChild( eTable, eUl );
        var aAttributes = eUl.attributes;
        for( var iAttr = 0; iAttr < aAttributes.length; iAttr++ ) {
            eTable.setAttribute( aAttributes[iAttr].name, aAttributes[iAttr].value );
        }
    }
}
