//>>built
define(["dojo/_base/declare","dojo/dom-construct","./TextBox"],function(a,b,c){return a("dojox.mobile.TextArea",c,{baseClass:"mblTextArea",postMixInProperties:function(){if(!this.value&&this.srcNodeRef)this.value=this.srcNodeRef.value;this.inherited(arguments)},buildRendering:function(){if(!this.srcNodeRef)this.srcNodeRef=b.create("textarea",{});this.inherited(arguments)}})});