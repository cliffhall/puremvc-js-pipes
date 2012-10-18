//>>built
define("../_base/array,../_base/declare,../_base/event,../_base/kernel,../_base/lang,../dom,../dom-construct,../mouse,../_base/NodeList,../on,../touch,./common,./Container".split(","),function(m,n,l,o,i,f,p,q,r,j,k,e,s){var h=n("dojo.dnd.Selector",s,{constructor:function(c,a){a||(a={});this.singular=a.singular;this.autoSync=a.autoSync;this.selection={};this.anchor=null;this.simpleSelection=!1;this.events.push(j(this.node,k.press,i.hitch(this,"onMouseDown")),j(this.node,k.release,i.hitch(this,"onMouseUp")))},
singular:!1,getSelectedNodes:function(){var c=new r,a=e._empty,b;for(b in this.selection)b in a||c.push(f.byId(b));return c},selectNone:function(){return this._removeSelection()._removeAnchor()},selectAll:function(){this.forInItems(function(c,a){this._addItemClass(f.byId(a),"Selected");this.selection[a]=1},this);return this._removeAnchor()},deleteSelectedNodes:function(){var c=e._empty,a;for(a in this.selection)if(!(a in c)){var b=f.byId(a);this.delItem(a);p.destroy(b)}this.anchor=null;this.selection=
{};return this},forInSelectedItems:function(c,a){var a=a||o.global,b=this.selection,d=e._empty,g;for(g in b)g in d||c.call(a,this.getItem(g),g,this)},sync:function(){h.superclass.sync.call(this);if(this.anchor&&!this.getItem(this.anchor.id))this.anchor=null;var c=[],a=e._empty,b;for(b in this.selection)b in a||this.getItem(b)||c.push(b);m.forEach(c,function(a){delete this.selection[a]},this);return this},insertNodes:function(c,a,b,d){var e=this._normalizedCreator;this._normalizedCreator=function(a,
b){var d=e.call(this,a,b);c?(this.anchor?this.anchor!=d.node&&(this._removeItemClass(d.node,"Anchor"),this._addItemClass(d.node,"Selected")):(this.anchor=d.node,this._removeItemClass(d.node,"Selected"),this._addItemClass(this.anchor,"Anchor")),this.selection[d.node.id]=1):(this._removeItemClass(d.node,"Selected"),this._removeItemClass(d.node,"Anchor"));return d};h.superclass.insertNodes.call(this,a,b,d);this._normalizedCreator=e;return this},destroy:function(){h.superclass.destroy.call(this);this.selection=
this.anchor=null},onMouseDown:function(c){this.autoSync&&this.sync();if(this.current)if(!this.singular&&!e.getCopyKeyState(c)&&!c.shiftKey&&this.current.id in this.selection)this.simpleSelection=!0,q.isLeft(c)&&l.stop(c);else{if(!this.singular&&c.shiftKey){e.getCopyKeyState(c)||this._removeSelection();var a=this.getAllNodes();if(a.length){if(!this.anchor)this.anchor=a[0],this._addItemClass(this.anchor,"Anchor");this.selection[this.anchor.id]=1;if(this.anchor!=this.current){for(var b=0,d;b<a.length&&
!(d=a[b],d==this.anchor||d==this.current);++b);for(++b;b<a.length;++b){d=a[b];if(d==this.anchor||d==this.current)break;this._addItemClass(d,"Selected");this.selection[d.id]=1}this._addItemClass(this.current,"Selected");this.selection[this.current.id]=1}}}else if(this.singular)this.anchor==this.current?e.getCopyKeyState(c)&&this.selectNone():(this.selectNone(),this.anchor=this.current,this._addItemClass(this.anchor,"Anchor"),this.selection[this.current.id]=1);else if(e.getCopyKeyState(c))this.anchor==
this.current?(delete this.selection[this.anchor.id],this._removeAnchor()):this.current.id in this.selection?(this._removeItemClass(this.current,"Selected"),delete this.selection[this.current.id]):(this.anchor&&(this._removeItemClass(this.anchor,"Anchor"),this._addItemClass(this.anchor,"Selected")),this.anchor=this.current,this._addItemClass(this.current,"Anchor"),this.selection[this.current.id]=1);else if(!(this.current.id in this.selection))this.selectNone(),this.anchor=this.current,this._addItemClass(this.current,
"Anchor"),this.selection[this.current.id]=1;l.stop(c)}},onMouseUp:function(){if(this.simpleSelection&&(this.simpleSelection=!1,this.selectNone(),this.current))this.anchor=this.current,this._addItemClass(this.anchor,"Anchor"),this.selection[this.current.id]=1},onMouseMove:function(){this.simpleSelection=!1},onOverEvent:function(){this.onmousemoveEvent=j(this.node,k.move,i.hitch(this,"onMouseMove"))},onOutEvent:function(){this.onmousemoveEvent&&(this.onmousemoveEvent.remove(),delete this.onmousemoveEvent)},
_removeSelection:function(){var c=e._empty,a;for(a in this.selection)if(!(a in c)){var b=f.byId(a);b&&this._removeItemClass(b,"Selected")}this.selection={};return this},_removeAnchor:function(){if(this.anchor)this._removeItemClass(this.anchor,"Anchor"),this.anchor=null;return this}});return h});