/* table_maker_init.js */

var page  = new page_query( window.location.search );
var specs;

var sTableVal = page.getValue( "t" );
if( sTableVal ) {
    specs = eval( "oT"+sTableVal );
}
else {
    sTableVal = page.getValue( "a" );
    specs = eval( sTableVal );
}
if( specs ) {
    addOnload(        function() { table_maker( specs ) } );
    addOnload(        function() { resize( "page" )        } );
    window.onresize = function() { resize( "page" )        };
}

//addOnload( show );  // show_dom (debugging)
