//>>built
define(["dijit","dojo","dojox","dojo/require!dijit/_Templated,dijit/_Widget,dojox/data/demos/widgets/PicasaView"],function(c,b,d){b.provide("dojox.data.demos.widgets.PicasaViewList");b.require("dijit._Templated");b.require("dijit._Widget");b.require("dojox.data.demos.widgets.PicasaView");b.declare("dojox.data.demos.widgets.PicasaViewList",[c._Widget,c._Templated],{templateString:b.cache("dojox","data/demos/widgets/templates/PicasaViewList.html",'<div dojoAttachPoint="list"></div>\n\n'),listNode:null,
postCreate:function(){this.fViewWidgets=[]},clearList:function(){for(;this.list.firstChild;)this.list.removeChild(this.list.firstChild);for(var a=0;a<this.fViewWidgets.length;a++)this.fViewWidgets[a].destroy();this.fViewWidgets=[]},addView:function(a){a=new d.data.demos.widgets.PicasaView(a);this.fViewWidgets.push(a);this.list.appendChild(a.domNode)}})});