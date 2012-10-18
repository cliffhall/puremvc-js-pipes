//>>built
require({cache:{"url:dijit/templates/InlineEditBox.html":'<span data-dojo-attach-point="editNode" role="presentation" class="dijitReset dijitInline dijitOffScreen"\n\tdata-dojo-attach-event="onkeypress: _onKeyPress"\n\t><span data-dojo-attach-point="editorPlaceholder"></span\n\t><span data-dojo-attach-point="buttonContainer"\n\t\t><button data-dojo-type="dijit/form/Button" data-dojo-props="label: \'${buttonSave}\', \'class\': \'saveButton\'"\n\t\t\tdata-dojo-attach-point="saveButton" data-dojo-attach-event="onClick:save"></button\n\t\t><button data-dojo-type="dijit/form/Button"  data-dojo-props="label: \'${buttonCancel}\', \'class\': \'cancelButton\'"\n\t\t\tdata-dojo-attach-point="cancelButton" data-dojo-attach-event="onClick:cancel"></button\n\t></span\n></span>\n'}});
define("require,dojo/_base/array,dojo/_base/declare,dojo/dom-attr,dojo/dom-class,dojo/dom-construct,dojo/dom-style,dojo/_base/event,dojo/i18n,dojo/_base/kernel,dojo/keys,dojo/_base/lang,dojo/sniff,dojo/when,./focus,./_Widget,./_TemplatedMixin,./_WidgetsInTemplateMixin,./_Container,./form/Button,./form/_TextBoxMixin,./form/TextBox,dojo/text!./templates/InlineEditBox.html,dojo/i18n!./nls/common".split(","),function(q,i,e,j,b,n,g,k,r,l,o,d,s,t,m,p,h,u,y,z,v,w,x){h=e("dijit._InlineEditor",[p,h,u],{templateString:x,
postMixInProperties:function(){this.inherited(arguments);this.messages=r.getLocalization("dijit","common",this.lang);i.forEach(["buttonSave","buttonCancel"],function(a){this[a]||(this[a]=this.messages[a])},this)},buildRendering:function(){this.inherited(arguments);var a="string"==typeof this.editor?d.getObject(this.editor)||q(this.editor):this.editor,c=this.sourceStyle,b="line-height:"+c.lineHeight+";",e=g.getComputedStyle(this.domNode);i.forEach(["Weight","Family","Size","Style"],function(a){e["font"+
a]!=c["font"+a]&&(b+="font-"+a+":"+c["font"+a]+";")},this);i.forEach("marginTop,marginBottom,marginLeft,marginRight,position,left,top,right,bottom,float,clear,display".split(","),function(a){this.domNode.style[a]=c[a]},this);var f=this.inlineEditBox.width;"100%"==f?(b+="width:100%;",this.domNode.style.display="block"):b+="width:"+(f+(Number(f)==f?"px":""))+";";f=d.delegate(this.inlineEditBox.editorParams,{style:b,dir:this.dir,lang:this.lang,textDir:this.textDir});f["displayedValue"in a.prototype?
"displayedValue":"value"]=this.value;this.editWidget=new a(f,this.editorPlaceholder);this.inlineEditBox.autoSave&&n.destroy(this.buttonContainer)},postCreate:function(){this.inherited(arguments);var a=this.editWidget;this.inlineEditBox.autoSave?(this.connect(a,"onChange","_onChange"),this.connect(a,"onKeyPress","_onKeyPress")):"intermediateChanges"in a&&(a.set("intermediateChanges",!0),this.connect(a,"onChange","_onIntermediateChange"),this.saveButton.set("disabled",!0))},startup:function(){this.editWidget.startup();
this.inherited(arguments)},_onIntermediateChange:function(){this.saveButton.set("disabled",this.getValue()==this._resetValue||!this.enableSave())},destroy:function(){this.editWidget.destroy(!0);this.inherited(arguments)},getValue:function(){var a=this.editWidget;return""+a.get("displayedValue"in a?"displayedValue":"value")},_onKeyPress:function(a){this.inlineEditBox.autoSave&&this.inlineEditBox.editing&&!a.altKey&&!a.ctrlKey&&(a.charOrCode==o.ESCAPE?(k.stop(a),this.cancel(!0)):a.charOrCode==o.ENTER&&
"INPUT"==a.target.tagName&&(k.stop(a),this._onChange()))},_onBlur:function(){this.inherited(arguments);this.inlineEditBox.autoSave&&this.inlineEditBox.editing&&(this.getValue()==this._resetValue?this.cancel(!1):this.enableSave()&&this.save(!1))},_onChange:function(){this.inlineEditBox.autoSave&&this.inlineEditBox.editing&&this.enableSave()&&m.focus(this.inlineEditBox.displayNode)},enableSave:function(){return this.editWidget.isValid?this.editWidget.isValid():!0},focus:function(){this.editWidget.focus();
this.editWidget.focusNode&&(m._onFocusNode(this.editWidget.focusNode),"INPUT"==this.editWidget.focusNode.tagName&&this.defer(function(){v.selectInputText(this.editWidget.focusNode)}))}});e=e("dijit.InlineEditBox",p,{editing:!1,autoSave:!0,buttonSave:"",buttonCancel:"",renderAsHtml:!1,editor:w,editorWrapper:h,editorParams:{},disabled:!1,onChange:function(){},onCancel:function(){},width:"100%",value:"",noValueIndicator:6>=s("ie")?"<span style='font-family: wingdings; text-decoration: underline;'>&#160;&#160;&#160;&#160;&#x270d;&#160;&#160;&#160;&#160;</span>":
"<span style='text-decoration: underline;'>&#160;&#160;&#160;&#160;&#x270d;&#160;&#160;&#160;&#160;</span>",constructor:function(){this.editorParams={}},postMixInProperties:function(){this.inherited(arguments);this.displayNode=this.srcNodeRef;var a={ondijitclick:"_onClick",onmouseover:"_onMouseOver",onmouseout:"_onMouseOut",onfocus:"_onMouseOver",onblur:"_onMouseOut"},c;for(c in a)this.connect(this.displayNode,c,a[c]);this.displayNode.setAttribute("role","button");this.displayNode.getAttribute("tabIndex")||
this.displayNode.setAttribute("tabIndex",0);if(!this.value&&!("value"in this.params))this.value=d.trim(this.renderAsHtml?this.displayNode.innerHTML:this.displayNode.innerText||this.displayNode.textContent||"");if(!this.value)this.displayNode.innerHTML=this.noValueIndicator;b.add(this.displayNode,"dijitInlineEditBoxDisplayMode")},setDisabled:function(a){l.deprecated("dijit.InlineEditBox.setDisabled() is deprecated.  Use set('disabled', bool) instead.","","2.0");this.set("disabled",a)},_setDisabledAttr:function(a){this.domNode.setAttribute("aria-disabled",
a?"true":"false");a?this.displayNode.removeAttribute("tabIndex"):this.displayNode.setAttribute("tabIndex",0);b.toggle(this.displayNode,"dijitInlineEditBoxDisplayModeDisabled",a);this._set("disabled",a)},_onMouseOver:function(){this.disabled||b.add(this.displayNode,"dijitInlineEditBoxDisplayModeHover")},_onMouseOut:function(){b.remove(this.displayNode,"dijitInlineEditBoxDisplayModeHover")},_onClick:function(a){this.disabled||(a&&k.stop(a),this._onMouseOut(),this.defer("edit"))},edit:function(){if(!this.disabled&&
!this.editing){this._set("editing",!0);this._savedTabIndex=j.get(this.displayNode,"tabIndex")||"0";if(this.wrapperWidget){var a=this.wrapperWidget.editWidget;a.set("displayedValue"in a?"displayedValue":"value",this.value)}else a=n.create("span",null,this.domNode,"before"),this.wrapperWidget=new ("string"==typeof this.editorWrapper?d.getObject(this.editorWrapper):this.editorWrapper)({value:this.value,buttonSave:this.buttonSave,buttonCancel:this.buttonCancel,dir:this.dir,lang:this.lang,tabIndex:this._savedTabIndex,
editor:this.editor,inlineEditBox:this,sourceStyle:g.getComputedStyle(this.displayNode),save:d.hitch(this,"save"),cancel:d.hitch(this,"cancel"),textDir:this.textDir},a),this.wrapperWidget._started||this.wrapperWidget.startup(),this._started||this.startup();a=this.wrapperWidget;b.add(this.displayNode,"dijitOffScreen");b.remove(a.domNode,"dijitOffScreen");g.set(a.domNode,{visibility:"visible"});j.set(this.displayNode,"tabIndex","-1");t(a.editWidget.onLoadDeferred,d.hitch(a,function(){this.defer(function(){this.focus();
this._resetValue=this.getValue()})}))}},_onBlur:function(){this.inherited(arguments)},destroy:function(){this.wrapperWidget&&!this.wrapperWidget._destroyed&&(this.wrapperWidget.destroy(),delete this.wrapperWidget);this.inherited(arguments)},_showText:function(a){var c=this.wrapperWidget;g.set(c.domNode,{visibility:"hidden"});b.add(c.domNode,"dijitOffScreen");b.remove(this.displayNode,"dijitOffScreen");j.set(this.displayNode,"tabIndex",this._savedTabIndex);a&&m.focus(this.displayNode)},save:function(a){!this.disabled&&
this.editing&&(this._set("editing",!1),this.set("value",this.wrapperWidget.getValue()),this._showText(a))},setValue:function(a){l.deprecated("dijit.InlineEditBox.setValue() is deprecated.  Use set('value', ...) instead.","","2.0");return this.set("value",a)},_setValueAttr:function(a){a=d.trim(a);this.displayNode.innerHTML=(this.renderAsHtml?a:a.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;").replace(/"/gm,"&quot;").replace(/\n/g,"<br>"))||this.noValueIndicator;this._set("value",
a);this._started&&this.defer(function(){this.onChange(a)});this.applyTextDir(this.displayNode)},getValue:function(){l.deprecated("dijit.InlineEditBox.getValue() is deprecated.  Use get('value') instead.","","2.0");return this.get("value")},cancel:function(a){!this.disabled&&this.editing&&(this._set("editing",!1),this.defer("onCancel"),this._showText(a))}});e._InlineEditor=h;return e});