/* dom_test_init */
var page  = new page_query( window.location.search );
var value = page.getValue( "t" );
var specs = eval("t"+value+"_specs");
addOnload(        function() { table_maker( specs ) } );
addOnload(        function() { resize( "page" )        } );
window.onresize = function() { resize( "page" )        };
//addOnload( show );
