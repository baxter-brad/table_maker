
// repeat method
String.prototype.repeat = function ( iNumber ) {
   var sRet = "", sToRepeat = this.toString();
   while (--iNumber >= 0) { sRet += sToRepeat }
   return sRet;
}

