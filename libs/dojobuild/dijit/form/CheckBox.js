//>>built
require({cache:{"url:dijit/form/templates/CheckBox.html":'<div class="dijit dijitReset dijitInline" role="presentation"\n\t><input\n\t \t${!nameAttrSetting} type="${type}" role="${type}" aria-checked="false" ${checkedAttrSetting}\n\t\tclass="dijitReset dijitCheckBoxInput"\n\t\tdata-dojo-attach-point="focusNode"\n\t \tdata-dojo-attach-event="onclick:_onClick"\n/></div>\n'}});
define("require,dojo/_base/declare,dojo/dom-attr,dojo/has,dojo/query,dojo/ready,./ToggleButton,./_CheckBoxMixin,dojo/text!./templates/CheckBox.html,dojo/NodeList-dom".split(","),function(c,d,j,e,a,f,g,h,i){e("dijit-legacy-requires")&&f(0,function(){c(["dijit/form/RadioButton"])});return d("dijit.form.CheckBox",[g,h],{templateString:i,baseClass:"dijitCheckBox",_setValueAttr:function(b,a){"string"==typeof b&&(this.inherited(arguments),b=!0);this._created&&this.set("checked",b,a)},_getValueAttr:function(){return this.checked?
this.value:!1},_setIconClassAttr:null,postMixInProperties:function(){this.inherited(arguments);this.checkedAttrSetting=this.checked?"checked":""},_fillContent:function(){},_onFocus:function(){this.id&&a("label[for='"+this.id+"']").addClass("dijitFocusedLabel");this.inherited(arguments)},_onBlur:function(){this.id&&a("label[for='"+this.id+"']").removeClass("dijitFocusedLabel");this.inherited(arguments)}})});