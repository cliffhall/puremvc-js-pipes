//>>built
require({cache:{"url:dojox/widget/Wizard/Wizard.html":'<div class="dojoxWizard" dojoAttachPoint="wizardNode">\n    <div class="dojoxWizardContainer" dojoAttachPoint="containerNode"></div>\n    <div class="dojoxWizardButtons" dojoAttachPoint="wizardNav">\n        <button dojoType="dijit.form.Button" type="button" dojoAttachPoint="previousButton">${previousButtonLabel}</button>\n        <button dojoType="dijit.form.Button" type="button" dojoAttachPoint="nextButton">${nextButtonLabel}</button>\n        <button dojoType="dijit.form.Button" type="button" dojoAttachPoint="doneButton" style="display:none">${doneButtonLabel}</button>\n        <button dojoType="dijit.form.Button" type="button" dojoAttachPoint="cancelButton">${cancelButtonLabel}</button>\n    </div>\n</div>\n'}});
define("dojo/_base/lang,dojo/_base/declare,dojo/_base/connect,dijit/layout/StackContainer,dijit/layout/ContentPane,dijit/form/Button,dijit/_TemplatedMixin,dijit/_WidgetsInTemplateMixin,dojo/i18n,dojo/text!./Wizard/Wizard.html,dojo/i18n!dijit/nls/common,dojo/i18n!./nls/Wizard,dojox/widget/WizardPane".split(","),function(c,f,d,g,k,l,h,i,e,j){return f("dojox.widget.Wizard",[g,h,i],{templateString:j,nextButtonLabel:"",previousButtonLabel:"",cancelButtonLabel:"",doneButtonLabel:"",cancelFunction:null,
hideDisabled:!1,postMixInProperties:function(){this.inherited(arguments);var a=c.mixin({cancel:e.getLocalization("dijit","common",this.lang).buttonCancel},e.getLocalization("dojox.widget","Wizard",this.lang)),b;for(b in a)this[b+"ButtonLabel"]||(this[b+"ButtonLabel"]=a[b])},startup:function(){if(!this._started){this.inherited(arguments);this.connect(this.nextButton,"onClick","_forward");this.connect(this.previousButton,"onClick","back");if(this.cancelFunction){if(c.isString(this.cancelFunction))this.cancelFunction=
c.getObject(this.cancelFunction);this.connect(this.cancelButton,"onClick",this.cancelFunction)}else this.cancelButton.domNode.style.display="none";this.connect(this.doneButton,"onClick","done");this._subscription=d.subscribe(this.id+"-selectChild",c.hitch(this,"_checkButtons"));this._started=!0}},resize:function(){this.inherited(arguments);this._checkButtons()},_checkButtons:function(){var a=this.selectedChildWidget,b=a.isLastChild;this.nextButton.set("disabled",b);this._setButtonClass(this.nextButton);
if(a.doneFunction){if(this.doneButton.domNode.style.display="",b)this.nextButton.domNode.style.display="none"}else this.doneButton.domNode.style.display="none";this.previousButton.set("disabled",!this.selectedChildWidget.canGoBack);this._setButtonClass(this.previousButton)},_setButtonClass:function(a){a.domNode.style.display=this.hideDisabled&&a.disabled?"none":""},_forward:function(){this.selectedChildWidget._checkPass()&&this.forward()},done:function(){this.selectedChildWidget.done()},destroy:function(){d.unsubscribe(this._subscription);
this.inherited(arguments)}})});