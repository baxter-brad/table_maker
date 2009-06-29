<!-- inspect the media type -->
<!-- http://www.ibloomstudios.com/articles/css_media_targeted_javascript/ -->

function getMediaType() {
    var mediaInspector = document.getElementById( 'mediaInspector' );
    var mediaNum;
    if (mediaInspector.currentStyle) {
        mediaNum = mediaInspector.currentStyle[ 'width' ];
        // alert( "currentStyle: "+mediaNum );
    }
    else if (window.getComputedStyle) {
        mediaNum = window.getComputedStyle( mediaInspector, '' ).getPropertyValue( "width" );
        // alert( "getComputedStyle.getPropertyValue(width): "+mediaNum );
    }
    var mediaType;
    switch ( mediaNum ) {
        case '1px': mediaType = 'screen';     break;
        case '2px': mediaType = 'print';      break;
        case '3px': mediaType = 'handheld';   break;
        case '4px': mediaType = 'projection'; break;
        case '5px': mediaType = 'tty';        break;
        case '6px': mediaType = 'tv';         break;
        case '7px': mediaType = 'aural';      break;
        case '8px': mediaType = 'braille';    break; 
        case '9px': mediaType = 'embossed';   break;
    }
    return mediaType;
}

