//>>built
define("dojo/_base/declare,dojo/_base/lang,dojo/_base/array,dojo/_base/Deferred,dojo/aspect,dojo/on,dojo/topic,dojo/has,dojo/dnd/Source,dojo/dnd/Manager,dojo/_base/NodeList,put-selector/put,dojo/has!touch?../util/touch,dojo/has!touch?./_DnD-touch-autoscroll,xstyle/css!dojo/resources/dnd.css".split(","),function(e,k,l,j,q,u,r,m,n,o,s,t,p){var h=e(n,{grid:null,getObject:function(a){var b=this.grid;return b.store.get(a.id.slice(b.id.length+5))},_legalMouseDown:function(a){return this.inherited(arguments)&&
a.target!=this.grid.bodyNode},onDrop:function(a,b,d){var f=this,c=this._targetAnchor=this.targetAnchor,g=this.grid,i=g.store;if(!this.before&&c)c=c.nextSibling;c=c&&g.row(c);j.when(c&&i.get(c.id),function(c){if(f!=a)f.onDropExternal(a,b,d,c);else f.onDropInternal(b,d,c)})},onDropInternal:function(a,b,d){var f=this.grid.store,c=this,g=this.grid,i=c._targetAnchor,e;i&&(e=this.before?i.previousSibling:i.nextSibling);(b||!(e===a[0]||!d&&g.down(g.row(a[0])).element==a[0]))&&a.forEach(function(a){j.when(c.getObject(a),
function(a){f[b&&f.copy?"copy":"put"](a,{before:d})})})},onDropExternal:function(a,b,d,f){var c=this.grid.store,g=a.grid;b.forEach(function(b,e){j.when(a.getObject(b),function(h){d||(g?j.when(g.store.getIdentity(h),function(f){!e&&a.selectNone();a.delItem(b.id);g.store.remove(f)}):a.deleteSelectedNodes());c[c.copy?"copy":"put"](h,{before:f})})})},onDndStart:function(a,b,d){this.inherited(arguments);if(a==this)this.grid.cancelTouchScroll&&this.grid.cancelTouchScroll(),o.manager().avatar.node.style.width=
this.grid.domNode.offsetWidth/2+"px"},onMouseDown:function(a){m("touch")&&this.isDragging&&1<p.countCurrentTouches(a,this.grid.touchNode)?(r.publish("/dnd/cancel"),o.manager().stopDrag()):this.inherited(arguments)},onMouseMove:function(a){(!m("touch")||1===p.countCurrentTouches(a,this.grid.touchNode))&&this.inherited(arguments)},checkAcceptance:function(a,b){return a.getObject&&n.prototype.checkAcceptance.apply(this,arguments)},getSelectedNodes:function(){if(!this.grid.selection)return this.inherited(arguments);
var a=new s,b;for(b in this.grid.selection)a.push(this._selectedNodes[b]);return a}}),e=e(null,{dndSourceType:"dgrid-row",dndParams:null,dndConstructor:h,postMixInProperties:function(){this.inherited(arguments);this.dndParams=k.mixin({accept:[this.dndSourceType]},this.dndParams)},postCreate:function(){this.inherited(arguments);this.dndSource=new (this.dndConstructor||h)(this.bodyNode,k.mixin(this.dndParams,{grid:this,dropParent:this.contentNode}));var a,b,d;if(this.selection)a=this.dndSource._selectedNodes=
{},b=function(b){a[b.id]=b.element},d=function(b){delete a[b.id]},this.on("dgrid-select",function(a){l.forEach(a.rows,b)}),this.on("dgrid-deselect",function(a){l.forEach(a.rows,d)});q.after(this,"destroy",function(){delete this.dndSource._selectedNodes;a=null;this.dndSource.destroy()},!0)},insertRow:function(a){var b=this.inherited(arguments),d="function"==typeof this.getObjectDndType?this.getObjectDndType(a):[this.dndSourceType];t(b,".dojoDndItem");this.dndSource.setItem(b.id,{data:a,type:d instanceof
Array?d:[d]});return b}});e.GridSource=h;return e});