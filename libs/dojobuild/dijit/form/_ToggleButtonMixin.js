//>>built
define(["dojo/_base/declare","dojo/dom-attr"],function(d,e){return d("dijit.form._ToggleButtonMixin",null,{checked:!1,_aria_attr:"aria-pressed",_onClick:function(b){var c=this.checked;this._set("checked",!c);var a=this.inherited(arguments);this.set("checked",a?this.checked:c);return a},_setCheckedAttr:function(b,c){this._set("checked",b);var a=this.focusNode||this.domNode;e.set(a,"checked",!!b);b?a.setAttribute("checked",""):a.removeAttribute("checked");a.setAttribute(this._aria_attr,""+b);this._handleOnChange(b,
c)},reset:function(){this._hasBeenBlurred=!1;this.set("checked",this.params.checked||!1)}})});