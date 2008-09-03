function prop_clear( elem, min_height ) {
    var node;
    if( typeof elem != 'object' )
        node = document.getElementById( elem );
    else
        node = elem;
    min_height -= 1;
    var prop_elem = document.createElement( "DIV" );
    prop_elem.setAttribute( "className", "prop min100" );
    prop_elem.setAttribute( "class", "prop min100" );
    node.insertBefore( prop_elem, node.firstChild );
    var clear_elem = document.createElement( "DIV" );
    clear_elem.setAttribute( "className", "clear" );
    clear_elem.setAttribute( "class", "clear" );
    node.appendChild( clear_elem );
}
