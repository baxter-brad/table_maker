//--------------------------------------------------------------------
// numbering functions

var numberAs = {
    "arabic"      : function ( iNumber ) { return iNumber },
    "lower-alpha" : function ( iNumber ) {
        var sAlpha  = "abcdefghijklmnopqrstuvwxyz";
        var iLen    = sAlpha.length;
        var iChar   = ( iNumber - 1 ) % iLen;
        var sChar   = sAlpha.charAt( iChar );
        var iRepeat = Math.ceil( iNumber / iLen );
        return sChar.repeat( iRepeat ); // 27 is 'aa', 53 is 'aaa' ...
    },
    "upper-alpha" : function ( iNumber ) {
        var sAlpha  = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var iLen    = sAlpha.length;
        var iChar   = ( iNumber - 1 ) % iLen;
        var sChar   = sAlpha.charAt( iChar );
        var iRepeat = Math.ceil( iNumber / iLen );
        return sChar.repeat( iRepeat ); // 27 is 'AA', 53 is 'AAA' ...
    },
    // http://blog.stevenlevithan.com/archives/javascript-roman-numeral-converter
    "lower-roman" : function (N,s,b,a,o,t) {
        t=N/1e3|0;N%=1e3;
        for(s=b='',a=5;N;b++,a^=7)
            for(o=N%a,N=N/a^0;o--;)
                s='ivxlcdm'.charAt(o>2?b+N-(N&=~1)+(o=1):b)+s;
        return Array(t+1).join('M')+s;
    },
    "upper-roman" : function (N,s,b,a,o,t) {
        t=N/1e3|0;N%=1e3;
        for(s=b='',a=5;N;b++,a^=7)
            for(o=N%a,N=N/a^0;o--;)
                s='IVXLCDM'.charAt(o>2?b+N-(N&=~1)+(o=1):b)+s;
        return Array(t+1).join('M')+s;
    }
};
