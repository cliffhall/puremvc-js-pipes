//>>built
define("dojo/_base/kernel,dojo/_base/lang,dojo/_base/declare,../_WidgetBase,./_LayoutWidget,./utils".split(","),function(c,d,a,e,f,b){a=a("dijit.layout.LayoutContainer",f,{baseClass:"dijitLayoutContainer",constructor:function(){c.deprecated("dijit.layout.LayoutContainer is deprecated","use BorderContainer instead",2)},layout:function(){b.layoutChildren(this.domNode,this._contentBox,this.getChildren())},addChild:function(a,c){this.inherited(arguments);this._started&&b.layoutChildren(this.domNode,this._contentBox,
this.getChildren())},removeChild:function(a){this.inherited(arguments);this._started&&b.layoutChildren(this.domNode,this._contentBox,this.getChildren())}});a.ChildWidgetProperties={layoutAlign:"none"};d.extend(e,a.ChildWidgetProperties);return a});