
// numbering functions
var numberAs = {
    "arabic"      : function ( iNumber ) { return iNumber },
    "lower-alpha" : function ( iNumber ) {
        var sLcAlpha = ".abcdefghijklmnopqrstuvwxyz";
        var sChar = sLcAlpha.charAt( iNumber );
        var iRepeat = iNumber > 26? 1 + iNumber % 26: 1;
        return sChar.repeat( iRepeat );
    },
    "upper-alpha" : function ( iNumber ) {
        var sUcAlpha = ".ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var sChar = sUcAlpha.charAt( iNumber );
        var iRepeat = iNumber > 26? 1 + iNumber % 26: 1;
        return sChar.repeat( iRepeat );
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

