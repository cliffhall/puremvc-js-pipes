//>>built
define("dojo/_base/declare,dojo/_base/sniff,dojo/dom,dojo/dom-attr,dojo/dom-class,dojo/dom-style,dojo/dom-construct,dojo/_base/window,dijit/_WidgetBase,dijit/_TemplatedMixin,dijit/_Contained".split(","),function(d,e,f,b,c,g,h,i,j,k,l){return d("dojox.widget.FisheyeListItem",[j,k,l],{iconSrc:"",label:"",id:"",templateString:'<div class="dojoxFisheyeListItem">  <img class="dojoxFisheyeListItemImage" data-dojo-attach-point="imgNode" data-dojo-attach-event="onmouseover:onMouseOver,onmouseout:onMouseOut,onclick:onClick">  <div class="dojoxFisheyeListItemLabel" data-dojo-attach-point="lblNode"></div></div>',
_isNode:function(a){if("function"==typeof Element)try{return a instanceof Element}catch(b){}else return a&&!isNaN(a.nodeType);return!1},_hasParent:function(a){return Boolean(a&&a.parentNode&&this._isNode(a.parentNode))},postCreate:function(){var a;if(".png"==this.iconSrc.toLowerCase().substring(this.iconSrc.length-4)&&7>e("ie")){if(this._hasParent(this.imgNode)&&""!=this.id)a=this.imgNode.parentNode,b.set(a,"id",this.id);g.set(this.imgNode,"filter","progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+
this.iconSrc+"', sizingMethod='scale')");this.imgNode.src=this._blankGif.toString()}else{if(this._hasParent(this.imgNode)&&""!=this.id)a=this.imgNode.parentNode,b.set(a,"id",this.id);this.imgNode.src=this.iconSrc}this.lblNode&&h.place(i.doc.createTextNode(this.label),this.lblNode);f.setSelectable(this.domNode,!1);this.startup()},startup:function(){this.parent=this.getParent()},onMouseOver:function(a){this.parent.isOver||this.parent._setActive(a);""!=this.label&&(c.add(this.lblNode,"dojoxFishSelected"),
this.parent._positionLabel(this))},onMouseOut:function(){c.remove(this.lblNode,"dojoxFishSelected")},onClick:function(){}})});