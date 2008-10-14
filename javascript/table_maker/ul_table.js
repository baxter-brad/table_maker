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

{id}: id of the ul tag to replace with a new table (table gets this id)
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
    var ul1 = { "ul" : "ul1" };     // use defaults for everything else
    var ul2 = { "ul" : "ul2", "grid" : 3 };  // 3 columns
    var ul1 = {
        "ul"     : "ul1",
        "grid"   : 2,
        "orien"  : "vertical",
        "bullet" : "&bull;",
        "id"     : "id"
    };

*/

function ul_table( aSpecs ) {

    var sID      = aSpecs.id;
    var iGrid    = aSpecs.grid;  if( !iGrid  ) iGrid  = 1;
    var sOrien   = aSpecs.orien; if( !sOrien ) sOrien = 'h';
    var sBullet  = aSpecs.bullet;
    var iUseBull = aSpecs.usebull;
    var sPrefix  = aSpecs.prefix;

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

        if( sOrien == 'h' ) {
            for( var iChild = 0; iChild < aLis.length; ) {
                // -- start --
                var eCell = document.createElement( "TD" );
                var aAttributes = aLis[ iChild ].attributes;
                var sCellID = "";
                for( var iAttr = 0; iAttr < aAttributes.length; iAttr++ ) {
                    eCell.setAttribute( aAttributes[iAttr].name, aAttributes[iAttr].value );
                    if( aAttributes[iAttr].name == "id" ) sCellID = aAttributes[iAttr].value;
                }
                if( !sCellID && sPrefix ) {
                    sCellID = sPrefix+(iChild+1);
                    eCell.setAttribute( "id", sCellID );
                }
                if( typeof( iUseBull ) == 'number' ) {
                    var eUseBulletCell = document.createElement( "TD" );
                    eUseBulletCell.appendChild( aLis[ iChild ].childNodes[ iUseBull ] );
                    if( sCellID ) eUseBulletCell.setAttribute( "id", sCellID+"-usebull" );
                    eRow.appendChild( eUseBulletCell );
                }
                if( sBullet ) {
                    var eBulletCell = document.createElement( "TD" );
                    eBulletCell.innerHTML = sBullet;
                    if( sCellID ) eBulletCell.setAttribute( "id", sCellID+"-bullet" );
                    eRow.appendChild( eBulletCell );
                }
                var iLen = aLis[ iChild ].childNodes.length;
                for( var iLiChild = 0; iLiChild < iLen; iLiChild++ ) {
                    eCell.appendChild( aLis[ iChild ].childNodes[ 0 ] ); // nodes are shifted off
                }
                eRow.appendChild( eCell );
                // -- end --
                if( ++iChild % iGrid == 0 ) {
                    eTBody.appendChild( eRow );
                    eRow = document.createElement( "TR" );
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
                    if( iChild < aLis.length ) {
                        // -- start --
                        var eCell = document.createElement( "TD" );
                        var aAttributes = aLis[ iChild ].attributes;
                        var sCellID = "";
                        for( var iAttr = 0; iAttr < aAttributes.length; iAttr++ ) {
                            eCell.setAttribute( aAttributes[iAttr].name, aAttributes[iAttr].value );
                            if( aAttributes[iAttr].name == "id" ) sCellID = aAttributes[iAttr].value;
                        }
                        if( !sCellID && sPrefix ) {
                            sCellID = sPrefix+(iChild+1);
                            eCell.setAttribute( "id", sCellID );
                        }
                        if( typeof( iUseBull ) == 'number' ) {
                            var eUseBulletCell = document.createElement( "TD" );
                            eUseBulletCell.appendChild( aLis[ iChild ].childNodes[ iUseBull ] );
                            if( sCellID ) eUseBulletCell.setAttribute( "id", sCellID+"-usebull" );
                            eRow.appendChild( eUseBulletCell );
                        }
                        if( sBullet ) {
                            var eBulletCell = document.createElement( "TD" );
                            eBulletCell.innerHTML = sBullet;
                            if( sCellID ) eBulletCell.setAttribute( "id", sCellID+"-bullet" );
                            eRow.appendChild( eBulletCell );
                        }
                        var iLen = aLis[ iChild ].childNodes.length;
                        for( var iLiChild = 0; iLiChild < iLen; iLiChild++ ) {
                            eCell.appendChild( aLis[ iChild ].childNodes[ 0 ] ); // nodes are shifted off
                        }
                        eRow.appendChild( eCell );
                        // -- end --
                    }
                }
                eTBody.appendChild( eRow );
                eRow = document.createElement( "TR" );
            } 
            if( eRow.childNodes ) {
                eTBody.appendChild( eRow );
            }
        }

        // replace ul with table and ID the table
        eUl.parentNode.replaceChild( eTable, eUl );
        var aAttributes = eUl.attributes;
        for( var iAttr = 0; iAttr < aAttributes.length; iAttr++ ) {
            eTable.setAttribute( aAttributes[iAttr].name, aAttributes[iAttr].value );
        }
    }
}
