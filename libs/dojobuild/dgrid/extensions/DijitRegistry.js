//>>built
define(["dojo/_base/declare","dijit/registry"],function(c,a){return c(null,{buildRendering:function(){a.add(this);this.inherited(arguments);this.domNode.setAttribute("widgetId",this.id)},startup:function(){if(!this._started){this.inherited(arguments);var b=a.getEnclosingWidget(this.domNode.parentNode);b&&b.isLayoutContainer&&this._resizeHandle.remove()}},destroyRecursive:function(){this.destroy()},destroy:function(){this.inherited(arguments);a.remove(this.id)},getChildren:function(){return[]}})});