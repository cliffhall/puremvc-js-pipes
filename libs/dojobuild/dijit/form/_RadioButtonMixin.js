//>>built
define("dojo/_base/array,dojo/_base/declare,dojo/dom-attr,dojo/_base/event,dojo/_base/lang,dojo/query,../registry".split(","),function(d,f,g,e,c,h,i){return f("dijit.form._RadioButtonMixin",null,{type:"radio",_getRelatedWidgets:function(){var b=[];h("input[type=radio]",this.focusNode.form||this.ownerDocument).forEach(c.hitch(this,function(a){a.name==this.name&&a.form==this.focusNode.form&&(a=i.getEnclosingWidget(a))&&b.push(a)}));return b},_setCheckedAttr:function(b){this.inherited(arguments);this._created&&
b&&d.forEach(this._getRelatedWidgets(),c.hitch(this,function(a){a!=this&&a.checked&&a.set("checked",!1)}))},_getSubmitValue:function(b){return null===b?"on":b},_onClick:function(b){if(this.checked||this.disabled)return e.stop(b),!1;return this.readOnly?(e.stop(b),d.forEach(this._getRelatedWidgets(),c.hitch(this,function(a){g.set(this.focusNode||this.domNode,"checked",a.checked)})),!1):this.inherited(arguments)}})});