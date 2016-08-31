/**
 * [Loading loading]
 * Jin
 * @param {[type]} loading [description]
 * eq: index.html
 */
 function Loading(loading){
   if ( !loading ) return
   this.wrapper   = loading.wrapper
   this.close     = loading.close
   this.text      = loading.text
   this.className = loading.className ? loading.className : 'show'
   this.addEvent()
 }

 Loading.prototype = {
   addEvent : function(){
     var _this = this
     _this.close.addEventListener('click' , function(){
       _this.hide()
     } , false)
     return this
   },
   hide: function(){
     if ( !this.hasClassName(this.className) ) return this
     this.wrapper.className = ' '+this.wrapper.className.trim()+' ';
     this.wrapper.className =  this.wrapper.className.replace(' '+this.className+' ' , ' ').trim();
     return this
   },
   show: function(){
     if ( this.hasClassName(this.className) ) return this
     this.wrapper.className = this.wrapper.className.trim()+' '+this.className.trim()
     return this
   },
   hasClassName(className){
     if ( (' '+this.wrapper.className.trim()+' ').indexOf(' '+className.trim()+' ') >= 0 ) return true
       return false
   },
   setText(txt){
     this.text.innerHTML = txt;
     return this;
   }
 }

module.exports = Loading;
