//>>built
define("dojo/_base/lang,dojo/dom-attr,dojo/dom-class,dijit/form/Button,dijit/form/DropDownButton,dijit/form/ComboButton,dojo/i18n,dojo/i18n!dijit/nls/loading,dojo/_base/declare".split(","),function(e,f,g,d,h,i,j,b,a){b=a("dojox.form._BusyButtonMixin",null,{isBusy:!1,busyLabel:"",timeout:null,useIcon:!0,postMixInProperties:function(){this.inherited(arguments);if(!this.busyLabel)this.busyLabel=j.getLocalization("dijit","loading",this.lang).loadingState},postCreate:function(){this.inherited(arguments);
this._label=this.containerNode.innerHTML;this._initTimeout=this.timeout;this.isBusy&&this.makeBusy()},makeBusy:function(){this.isBusy=!0;this.set("disabled",!0);this.setLabel(this.busyLabel,this.timeout)},cancel:function(){this.set("disabled",!1);this.isBusy=!1;this.setLabel(this._label);this._timeout&&clearTimeout(this._timeout);this.timeout=this._initTimeout},resetTimeout:function(c){this._timeout&&clearTimeout(this._timeout);c?this._timeout=setTimeout(e.hitch(this,function(){this.cancel()}),c):
(void 0==c||0===c)&&this.cancel()},setLabel:function(c,b){for(this.label=c;this.containerNode.firstChild;)this.containerNode.removeChild(this.containerNode.firstChild);this.containerNode.innerHTML=this.label;if(!1==this.showLabel&&!f.get(this.domNode,"title"))this.titleNode.title=e.trim(this.containerNode.innerText||this.containerNode.textContent||"");b?this.resetTimeout(b):this.timeout=null;if(this.useIcon&&this.isBusy){var a=new Image;a.src=this._blankGif;f.set(a,"id",this.id+"_icon");g.add(a,"dojoxBusyButtonIcon");
this.containerNode.appendChild(a)}},_onClick:function(a){this.isBusy||(this.inherited(arguments),this.makeBusy())}});d=a("dojox.form.BusyButton",[d,b],{});a("dojox.form.BusyComboButton",[i,b],{});a("dojox.form.BusyDropDownButton",[h,b],{});return d});