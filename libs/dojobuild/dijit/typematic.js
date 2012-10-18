//>>built
define("dojo/_base/array,dojo/_base/connect,dojo/_base/event,dojo/_base/kernel,dojo/_base/lang,dojo/on,dojo/sniff,./main".split(","),function(m,o,p,n,e,h,q,r){var d=r.typematic={_fireEventAndReload:function(){this._timer=null;this._callback(++this._count,this._node,this._evt);this._currentTimeout=Math.max(0>this._currentTimeout?this._initialDelay:1<this._subsequentDelay?this._subsequentDelay:Math.round(this._currentTimeout*this._subsequentDelay),this._minDelay);this._timer=setTimeout(e.hitch(this,
"_fireEventAndReload"),this._currentTimeout)},trigger:function(c,a,d,j,f,g,i,b){if(f!=this._obj){this.stop();this._initialDelay=i||500;this._subsequentDelay=g||0.9;this._minDelay=b||10;this._obj=f;this._node=d;this._count=this._currentTimeout=-1;this._callback=e.hitch(a,j);this._evt={faux:!0};for(var l in c)"layerX"!=l&&"layerY"!=l&&(a=c[l],"function"!=typeof a&&"undefined"!=typeof a&&(this._evt[l]=a));this._fireEventAndReload()}},stop:function(){if(this._timer)clearTimeout(this._timer),this._timer=
null;if(this._obj)this._callback(-1,this._node,this._evt),this._obj=null},addKeyListener:function(c,a,k,j,f,g,i){if(a.keyCode)a.charOrCode=a.keyCode,n.deprecated("keyCode attribute parameter for dijit.typematic.addKeyListener is deprecated. Use charOrCode instead.","","2.0");else if(a.charCode)a.charOrCode=String.fromCharCode(a.charCode),n.deprecated("charCode attribute parameter for dijit.typematic.addKeyListener is deprecated. Use charOrCode instead.","","2.0");var b=[h(c,o._keypress,e.hitch(this,
function(b){b.charOrCode==a.charOrCode&&(void 0===a.ctrlKey||a.ctrlKey==b.ctrlKey)&&(void 0===a.altKey||a.altKey==b.altKey)&&(void 0===a.metaKey||a.metaKey==(b.metaKey||!1))&&(void 0===a.shiftKey||a.shiftKey==b.shiftKey)?(p.stop(b),d.trigger(b,k,c,j,a,f,g,i)):d._obj==a&&d.stop()})),h(c,"keyup",e.hitch(this,function(){d._obj==a&&d.stop()}))];return{remove:function(){m.forEach(b,function(a){a.remove()})}}},addMouseListener:function(c,a,k,j,f,g){var i=[h(c,"mousedown",e.hitch(this,function(b){b.preventDefault();
d.trigger(b,a,c,k,c,j,f,g)})),h(c,"mouseup",e.hitch(this,function(a){this._obj&&a.preventDefault();d.stop()})),h(c,"mouseout",e.hitch(this,function(a){this._obj&&a.preventDefault();d.stop()})),h(c,"dblclick",e.hitch(this,function(b){b.preventDefault();9>q("ie")&&(d.trigger(b,a,c,k,c,j,f,g),setTimeout(e.hitch(this,d.stop),50))}))];return{remove:function(){m.forEach(i,function(a){a.remove()})}}},addListener:function(c,a,d,e,f,g,i,b){var h=[this.addKeyListener(a,d,e,f,g,i,b),this.addMouseListener(c,
e,f,g,i,b)];return{remove:function(){m.forEach(h,function(a){a.remove()})}}}};return d});