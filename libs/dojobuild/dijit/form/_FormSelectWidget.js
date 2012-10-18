//>>built
define("dojo/_base/array,dojo/_base/Deferred,dojo/aspect,dojo/data/util/sorter,dojo/_base/declare,dojo/dom,dojo/dom-class,dojo/_base/kernel,dojo/_base/lang,dojo/query,dojo/when,dojo/store/util/QueryResults,./_FormValueWidget".split(","),function(d,i,j,k,l,m,n,o,e,p,q,r,s){return l("dijit.form._FormSelectWidget",s,{multiple:!1,options:null,store:null,query:null,queryOptions:null,labelAttr:"",onFetch:null,sortByLabel:!0,loadChildrenOnOpen:!1,onLoadDeferred:null,getOptions:function(a){var b=a,c=this.options||
[],f=c.length;if(void 0===b)return c;if(e.isArray(b))return d.map(b,"return this.getOptions(item);",this);e.isObject(a)&&(d.some(this.options,function(a,c){return a===b||a.value&&a.value===b.value?(b=c,!0):!1})||(b=-1));if("string"==typeof b)for(a=0;a<f;a++)if(c[a].value===b){b=a;break}return"number"==typeof b&&0<=b&&b<f?this.options[b]:null},addOption:function(a){e.isArray(a)||(a=[a]);d.forEach(a,function(a){a&&e.isObject(a)&&this.options.push(a)},this);this._loadChildren()},removeOption:function(a){e.isArray(a)||
(a=[a]);a=this.getOptions(a);d.forEach(a,function(a){if(a)this.options=d.filter(this.options,function(c){return c.value!==a.value||c.label!==a.label}),this._removeOptionItem(a)},this);this._loadChildren()},updateOption:function(a){e.isArray(a)||(a=[a]);d.forEach(a,function(a){var c=this.getOptions(a),d;if(c)for(d in a)c[d]=a[d]},this);this._loadChildren()},setStore:function(a,b,c){var f=this.store,c=c||{};if(f!==a){for(var h;h=this._notifyConnections.pop();)h.remove();if(!a.get&&(e.mixin(a,{_oldAPI:!0,
get:function(a){var b=new i;this.fetchItemByIdentity({identity:a,onItem:function(a){b.resolve(a)},onError:function(a){b.reject(a)}});return b.promise},query:function(a,b){var c=new i(function(){d.abort&&d.abort()});c.total=new i;var d=this.fetch(e.mixin({query:a,onBegin:function(a){c.total.resolve(a)},onComplete:function(a){c.resolve(a)},onError:function(a){c.reject(a)}},b));return new r(c)}}),a.getFeatures()["dojo.data.api.Notification"]))this._notifyConnections=[j.after(a,"onNew",e.hitch(this,"_onNewItem"),
!0),j.after(a,"onDelete",e.hitch(this,"_onDeleteItem"),!0),j.after(a,"onSet",e.hitch(this,"_onSetItem"),!0)];this._set("store",a)}this.options&&this.options.length&&this.removeOption(this.options);this._queryRes&&this._queryRes.close&&this._queryRes.close();c.query&&(this._set("query",c.query),this._set("queryOptions",c.queryOptions));if(a)this._loadingStore=!0,this.onLoadDeferred=new i,this._queryRes=a.query(this.query,this.queryOptions),q(this._queryRes,e.hitch(this,function(g){if(this.sortByLabel&&
!c.sort&&g.length)if(g[0].getValue)g.sort(k.createSortFunction([{attribute:a.getLabelAttributes(g[0])[0]}],a));else{var f=this.labelAttr;g.sort(function(a,b){return a[f]>b[f]?1:b[f]>a[f]?-1:0})}c.onFetch&&(g=c.onFetch.call(this,g,c));d.forEach(g,function(a){this._addOptionForItem(a)},this);this._queryRes.observe&&this._queryRes.observe(e.hitch(this,function(a,b,c){b==c?this._onSetItem(a):(-1!=b&&this._onDeleteItem(a),-1!=c&&this._onNewItem(a))}),!0);this._loadingStore=!1;this.set("value","_pendingValue"in
this?this._pendingValue:b);delete this._pendingValue;this.loadChildrenOnOpen?this._pseudoLoadChildren(g):this._loadChildren();this.onLoadDeferred.resolve(!0);this.onSetStore()}),function(a){this.onLoadDeferred.reject(a)});return f},_setValueAttr:function(a,b){this._onChangeActive||(b=null);if(this._loadingStore)this._pendingValue=a;else{var c=this.getOptions()||[];e.isArray(a)||(a=[a]);d.forEach(a,function(b,f){e.isObject(b)||(b+="");"string"===typeof b&&(a[f]=d.filter(c,function(a){return a.value===
b})[0]||{value:"",label:""})},this);a=d.filter(a,function(a){return a&&a.value});if(!this.multiple&&(!a[0]||!a[0].value)&&c.length)a[0]=c[0];d.forEach(c,function(b){b.selected=d.some(a,function(a){return a.value===b.value})});var f=d.map(a,function(a){return a.value}),h=d.map(a,function(a){return a.label});"undefined"==typeof f||"undefined"==typeof f[0]||(this._setDisplay(this.multiple?h:h[0]),this.inherited(arguments,[this.multiple?f:f[0],b]),this._updateSelection())}},_getDisplayedValueAttr:function(){var a=
this.get("value");e.isArray(a)||(a=[a]);a=d.map(this.getOptions(a),function(a){return a&&"label"in a?a.label:a?a.value:null},this);return this.multiple?a:a[0]},_loadChildren:function(){this._loadingStore||(d.forEach(this._getChildren(),function(a){a.destroyRecursive()}),d.forEach(this.options,this._addOptionItem,this),this._updateSelection())},_updateSelection:function(){this._set("value",this._getValueFromOpts());var a=this.value;e.isArray(a)||(a=[a]);a&&a[0]&&d.forEach(this._getChildren(),function(b){var c=
d.some(a,function(a){return b.option&&a===b.option.value});n.toggle(b.domNode,this.baseClass.replace(/\s+|$/g,"SelectedOption "),c);b.domNode.setAttribute("aria-selected",c?"true":"false")},this)},_getValueFromOpts:function(){var a=this.getOptions()||[];if(!this.multiple&&a.length){var b=d.filter(a,function(a){return a.selected})[0];if(b&&b.value)return b.value;a[0].selected=!0;return a[0].value}return this.multiple?d.map(d.filter(a,function(a){return a.selected}),function(a){return a.value})||[]:
""},_onNewItem:function(a,b){(!b||!b.parent)&&this._addOptionForItem(a)},_onDeleteItem:function(a){this.removeOption(this.store.getIdentity(a))},_onSetItem:function(a){this.updateOption(this._getOptionObjForItem(a))},_getOptionObjForItem:function(a){var b=this.store,c=this.labelAttr&&this.labelAttr in a?a[this.labelAttr]:b.getLabel(a);return{value:c?b.getIdentity(a):null,label:c,item:a}},_addOptionForItem:function(a){var b=this.store;b.isItemLoaded&&!b.isItemLoaded(a)?b.loadItem({item:a,onItem:function(a){this._addOptionForItem(a)},
scope:this}):this.addOption(this._getOptionObjForItem(a))},constructor:function(a){this._oValue=(a||{}).value||null;this._notifyConnections=[]},buildRendering:function(){this.inherited(arguments);m.setSelectable(this.focusNode,!1)},_fillContent:function(){if(!this.options)this.options=this.srcNodeRef?p("> *",this.srcNodeRef).map(function(a){return"separator"===a.getAttribute("type")?{value:"",label:"",selected:!1,disabled:!1}:{value:a.getAttribute("data-"+o._scopeName+"-value")||a.getAttribute("value"),
label:""+a.innerHTML,selected:a.getAttribute("selected")||!1,disabled:a.getAttribute("disabled")||!1}},this):[];this.value?this.multiple&&"string"==typeof this.value&&this._set("value",this.value.split(",")):this._set("value",this._getValueFromOpts())},postCreate:function(){this.inherited(arguments);this.connect(this,"onChange","_updateSelection");var a=this.store;if(a&&(a.getIdentity||a.getFeatures()["dojo.data.api.Identity"]))this.store=null,this.setStore(a,this._oValue)},startup:function(){this._loadChildren();
this.inherited(arguments)},destroy:function(){for(var a;a=this._notifyConnections.pop();)a.remove();this._queryRes&&this._queryRes.close&&this._queryRes.close();this.inherited(arguments)},_addOptionItem:function(){},_removeOptionItem:function(){},_setDisplay:function(){},_getChildren:function(){return[]},_getSelectedOptionsAttr:function(){return this.getOptions(this.get("value"))},_pseudoLoadChildren:function(){},onSetStore:function(){}})});