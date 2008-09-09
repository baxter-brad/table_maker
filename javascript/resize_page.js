/* resize_page.js */
function resize( elem ){  
    var node;
    if( typeof elem == 'object' ) node = elem;
    else node = document.getElementById( elem );
    var myHeight = 0;
    //Non-IE
    if( typeof( window.innerWidth ) == 'number' )
        myHeight = window.innerHeight;
    //IE 6+ in 'standards compliant mode'
    else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) )
        myHeight = document.documentElement.clientHeight;
    //IE 4 compatible
    else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) )
        myHeight = document.body.clientHeight;
    //IE
    document.body.height = myHeight+"px";
    node.height = myHeight+"px";
    //Non-IE
    document.body.setAttribute( "style", "height:"+myHeight+"px;" );
    node.setAttribute( "style", "height:"+myHeight+"px;" );
}
function resize_page() { resize( "page" ) }
window.onresize = function () { resize( "page" ); }

