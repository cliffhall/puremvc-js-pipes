//>>built
define(["dojo/_base/declare","dojo/_base/lang","dojo/Stateful","./_atBindingMixin"],function(e,h,f,g){return e("dojox.mvc._Controller",[f,g],{postscript:function(a,b){this._applyAttributes&&this.inherited(arguments);this._dbpostscript(a,b);if(a){this.params=a;for(var c in a)this.set(c,a[c])}var d;try{d=require("dijit/registry"),this.id=this.id||(b||{}).id||d.getUniqueId(this.declaredClass.replace(/\./g,"_")),d.add(this)}catch(e){}b||this.startup()},startup:function(){this._applyAttributes||this._startAtWatchHandles();
this.inherited(arguments)},destroy:function(){this._applyAttributes||this._stopAtWatchHandles();this.inherited(arguments)},set:function(a,b){if("object"===typeof a){for(var c in a)a.hasOwnProperty(c)&&this.set(c,a[c]);return this}if(!this._applyAttributes){if("dojox.mvc.at"==(b||{}).atsignature)return this._setAtWatchHandle(a,b);c="_set"+a.replace(/^[a-z]/,function(a){return a.toUpperCase()})+"Attr";if(this[c])this[c](b);else this._set(a,b);return this}return this.inherited(arguments)},_set:function(a,
b){return!this._applyAttributes?this._changeAttrValue(a,b):this.inherited(arguments)}})});