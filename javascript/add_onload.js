/* add_onload.js */
function addOnload( myfunc ) {
    if( window.addEventListener )
        window.addEventListener( 'load', myfunc, false );
    else if( window.attachEvent )
        window.attachEvent( 'onload', myfunc );
}
