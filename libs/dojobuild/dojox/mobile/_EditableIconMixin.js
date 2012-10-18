//>>built
define("dojo/_base/array,dojo/_base/connect,dojo/_base/declare,dojo/_base/event,dojo/_base/lang,dojo/dom-geometry,dojo/dom-style,dojo/touch,dijit/registry,./IconItem,./sniff,./viewRegistry".split(","),function(i,k,q,l,m,n,h,r,o,s,p,t){return q("dojox.mobile._EditableIconMixin",null,{deleteIconForEdit:"mblDomButtonBlackCircleCross",threshold:4,destroy:function(){this._blankItem&&this._blankItem.destroy();this.inherited(arguments)},startEdit:function(){if(this.editable&&!this.isEditing){this.isEditing=
!0;if(!this._handles)this._handles=[this.connect(this.domNode,"webkitTransitionStart","_onTransitionStart"),this.connect(this.domNode,"webkitTransitionEnd","_onTransitionEnd")];var a=0;i.forEach(this.getChildren(),function(b){setTimeout(m.hitch(this,function(){b.set("deleteIcon",this.deleteIconForEdit);if(b.deleteIconNode)b._deleteHandle=this.connect(b.deleteIconNode,"onclick","_deleteIconClicked");b.highlight(0)}),15*a++)},this);k.publish("/dojox/mobile/startEdit",[this]);this.onStartEdit()}},endEdit:function(){if(this.isEditing){i.forEach(this.getChildren(),
function(a){a.unhighlight();if(a._deleteHandle)this.disconnect(a._deleteHandle),a._deleteHandle=null;a.set("deleteIcon","")},this);this._movingItem=null;if(this._handles)i.forEach(this._handles,this.disconnect,this),this._handles=null;k.publish("/dojox/mobile/endEdit",[this]);this.onEndEdit();this.isEditing=!1}},scaleItem:function(a,b){h.set(a.domNode,{webkitTransition:p("android")?"":"-webkit-transform .1s ease-in-out",webkitTransform:1==b?"":"scale("+b+")"})},_onTransitionStart:function(a){l.stop(a)},
_onTransitionEnd:function(a){l.stop(a);a=o.getEnclosingWidget(a.target);a._moving=!1;h.set(a.domNode,"webkitTransition","")},_onTouchStart:function(a){if(!this._blankItem)this._blankItem=new s,this._blankItem.domNode.style.visibility="hidden",this._blankItem._onClick=function(){};for(var b=this._movingItem=o.getEnclosingWidget(a.target),d=!1,c=a.target;c!==b.domNode;c=c.parentNode)if(c===b.iconNode){d=!0;break}if(d){if(!this._conn)this._conn=[this.connect(this.domNode,p("touch")?"ontouchmove":"onmousemove",
"_onTouchMove"),this.connect(this.domNode,p("touch")?"ontouchend":"onmouseup","_onTouchEnd")];this._touchStartPosX=a.touches?a.touches[0].pageX:a.pageX;this._touchStartPosY=a.touches?a.touches[0].pageY:a.pageY;this.isEditing?this._onDragStart(a):this._pressTimer=setTimeout(m.hitch(this,function(){this.startEdit();this._onDragStart(a)}),1E3)}},_onDragStart:function(a){this._dragging=!0;var b=this._movingItem;b.get("selected")&&b.set("selected",!1);this.scaleItem(b,1.1);var d=a.touches?a.touches[0].pageX:
a.pageX,c=a.touches?a.touches[0].pageY:a.pageY,g=t.getEnclosingScrollable(b.domNode),e=0,f=0;if(g)f=g.getPos(),e=f.x,f=f.y,l.stop(a);a=this._startPos=n.position(b.domNode,!0);this._offsetPos={x:a.x-d-e,y:a.y-c-f};this._startIndex=this.getIndexOfChild(b);this.addChild(this._blankItem,this._startIndex);this.moveChild(b,this.getChildren().length);h.set(b.domNode,{position:"absolute",top:a.y-f+"px",left:a.x-e+"px",zIndex:100})},_onTouchMove:function(a){var b=a.touches?a.touches[0].pageX:a.pageX,d=a.touches?
a.touches[0].pageY:a.pageY;this._dragging?(h.set(this._movingItem.domNode,{top:this._offsetPos.y+d+"px",left:this._offsetPos.x+b+"px"}),this._detectOverlap({x:b,y:d}),l.stop(a)):(a=Math.abs(this._touchStartPosX-b),d=Math.abs(this._touchStartPosY-d),(a>this.threshold||d>this.threshold)&&this._clearPressTimer())},_onTouchEnd:function(){this._clearPressTimer();if(this._conn)i.forEach(this._conn,this.disconnect,this),this._conn=null;if(this._dragging){this._dragging=!1;var a=this._movingItem;this.scaleItem(a,
1);h.set(a.domNode,{position:"",top:"",left:"",zIndex:""});var b=this._startIndex,d=this.getIndexOfChild(this._blankItem);this.moveChild(a,d);this.removeChild(this._blankItem);k.publish("/dojox/mobile/moveIconItem",[this,a,b,d]);this.onMoveItem(a,b,d)}},_clearPressTimer:function(){if(this._pressTimer)clearTimeout(this._pressTimer),this._pressTimer=null},_detectOverlap:function(a){var b=this.getChildren(),d=this._blankItem,c=n.position(d.domNode,!0),g=this.getIndexOfChild(d),e=1;if(!this._contains(a,
c)){if(a.y<c.y||a.y<=c.y+c.h&&a.x<c.x)e=-1;for(var f=g+e;0<=f&&f<b.length-1;f+=e)if(c=b[f],!c._moving)if(c=n.position(c.domNode,!0),this._contains(a,c)){setTimeout(m.hitch(this,function(){this.moveChildWithAnimation(d,1==e?f+1:f)}),0);break}else if(1==e&&c.y>a.y||-1==e&&c.y+c.h<a.y)break}},_contains:function(a,b){return b.x<a.x&&a.x<b.x+b.w&&b.y<a.y&&a.y<b.y+b.h},_animate:function(a,b){if(a!=b){var d=a<b?1:-1,c=this.getChildren(),g=[],e;for(e=a;e!=b;e+=d)g.push({t:c[e+d].domNode.offsetTop-c[e].domNode.offsetTop+
"px",l:c[e+d].domNode.offsetLeft-c[e].domNode.offsetLeft+"px"});for(e=a,j=0;e!=b;e+=d,j++){var f=c[e];f._moving=!0;h.set(f.domNode,{top:g[j].t,left:g[j].l});setTimeout(m.hitch(f,function(){h.set(this.domNode,{webkitTransition:"top .3s ease-in-out, left .3s ease-in-out",top:"0px",left:"0px"})}),10*j)}}},removeChildWithAnimation:function(a){var b="number"===typeof a?a:this.getIndexOfChild(a);this.removeChild(a);this.addChild(this._blankItem);this._animate(b,this.getChildren().length-1);this.removeChild(this._blankItem)},
moveChild:function(a,b){this.addChild(a,b);this.paneContainerWidget.addChild(a.paneWidget,b)},moveChildWithAnimation:function(a,b){var d=this.getIndexOfChild(this._blankItem);this.moveChild(a,b);this._animate(d,b)},_deleteIconClicked:function(a){!1!==this.deleteIconClicked(a)&&this.deleteItem(o.getEnclosingWidget(a.target))},deleteIconClicked:function(){},deleteItem:function(a){a._deleteHandle&&this.disconnect(a._deleteHandle);this.removeChildWithAnimation(a);k.publish("/dojox/mobile/deleteIconItem",
[this,a]);this.onDeleteItem(a);a.destroy()},onDeleteItem:function(){},onMoveItem:function(){},onStartEdit:function(){},onEndEdit:function(){},_setEditableAttr:function(a){this._set("editable",a);if(a&&!this._touchStartHandle)this._touchStartHandle=this.connect(this.domNode,r.press,"_onTouchStart");else if(!a&&this._touchStartHandle)this.disconnect(this._touchStartHandle),this._touchStartHandle=null}})});