var elem;
function show_dom( elem ) {
    var show = "";
    var node;
    if( typeof elem != 'object' ) {
        node = document.getElementById( elem );
    }
    else
        node = elem;
    var node_name = node.nodeName;
    var node_value = node.nodeValue;
    var node_children = node.childNodes;
    var node_attributes = node.attributes;
    if( node_name != "#text" )
        show += "<"+node_name;
    if( node_attributes && node_attributes.length > 0 ) {
        for( var i = 0; i< node_attributes.length; i++ ) {
            var attr = node_attributes[i];
            if( attr.specified ) {
                var attr_name  = attr.nodeName;
                var attr_value = attr.nodeValue;
                show += "\n    "+attr_name+"=\""+attr_value+"\"";
            }
        }
    }
    if( node_name != "#text" )
        show += ">";
    if( node_value ) {
        show += node_value;
    }
    if( node_children.length > 0 ) {
        for( var i = 0; i< node_children.length; i++ ) {
            show += show_dom( node_children[i] );
        }
    }
    if( node_name != "#text" )
        show += "</"+node_name+">";
    return( show );
}

function show () {
    var elem = document.createElement( "PRE" );
    var text = document.createTextNode( show_dom('bodyNode') );
    elem.appendChild( text );
    document.body.appendChild( elem );
}
//addOnload( show ); // e.g.

