//>>built
define("./_WidgetBase,./_TemplatedMixin,./_WidgetsInTemplateMixin,dojo/_base/array,dojo/_base/declare,dojo/_base/lang,dojo/_base/kernel".split(","),function(h,i,j,k,l,e,m){e.extend(h,{waiRole:"",waiState:""});return l("dijit._Templated",[i,j],{widgetsInTemplate:!1,constructor:function(){m.deprecated(this.declaredClass+": dijit._Templated deprecated, use dijit._TemplatedMixin and if necessary dijit._WidgetsInTemplateMixin","","2.0")},_attachTemplateNodes:function(a,f){this.inherited(arguments);for(var g=
e.isArray(a)?a:a.all||a.getElementsByTagName("*"),b=e.isArray(a)?0:-1;b<g.length;b++){var c=-1==b?a:g[b],d=f(c,"waiRole");d&&c.setAttribute("role",d);(d=f(c,"waiState"))&&k.forEach(d.split(/\s*,\s*/),function(a){-1!=a.indexOf("-")&&(a=a.split("-"),c.setAttribute("aria-"+a[0],a[1]))})}}})});