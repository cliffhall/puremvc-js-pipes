//>>built
define(["dijit","dojo","dojox","dojo/require!dojo/NodeList-traverse"],function(o,b,h){b.provide("dojox.rails");b.require("dojo.NodeList-traverse");h.rails.live=function(a,f,i){b.isIE&&f.match(/^(on)?submit$/i)?h.rails.live(a,"click",function(a){var a=a.target,d=a.tagName.toLowerCase();if(("input"==d||"button"==d)&&"submit"==b.attr(a,"type").toLowerCase())if(a=b.query(a).closest("form"),a.length)var f=b.connect(a[0],"submit",function(a){b.disconnect(f);i.call(a.target,a)})}):b.connect(b.body(),f,function(g){var d=
b.query(g.target).closest(a);d.length&&i.call(d[0],g)})};b.ready(function(a,f,i){return function(){var g=a.query,d=f.live,h=g("meta[name=csrf-token]").attr("content"),l=g("meta[name=csrf-param]").attr("content"),k=function(a,c){return b.place('<form style="display:none" method="post" action="'+a+'"><input type="hidden" name="_method" value="'+c+'" /><input type="hidden" name="'+l+'" value="'+h+'" /></form>',b.body())},m=function(e){a.forEach(e,function(c){if(!a.attr(c,"disabled")){var e="input"==
c.tagName.toLowerCase()?"value":"innerHTML",b=a.attr(c,"data-disable-with"),d=a.attr(c,e);a.attr(c,"disabled",!0);a.attr(c,"data-original-value",d);a.attr(c,e,b)}})},n={text:"text",json:"application/json","json-comment-optional":"text","json-comment-filtered":"text",javascript:"application/javascript",xml:"text/xml"},j=function(e){var c=e.target,b=c.tagName.toLowerCase(),d="form"==b.toLowerCase()?a.formToObject(c):{},g=a.attr(c,"data-type")||"javascript",f=(a.attr(c,"method")||a.attr(c,"data-method")||
"get").toLowerCase(),h=a.attr(c,"action")||a.attr(c,"href");"form"!=b&&"get"!=f&&(c=k(h,f),f="POST");e.preventDefault();a.publish("ajax:before",[c]);a.xhr(f,{url:h,headers:{Accept:n[g]},content:d,handleAs:g,load:function(b,e){a.publish("ajax:success",[c,b,e])},error:function(b,e){a.publish("ajax:failure",[c,b,e])},handle:function(b,e){a.publish("ajax:complete",[c,b,e])}});a.publish("ajax:after",[c])};d("*[data-confirm]","click",function(b){i.confirm(a.attr(b.target,"data-confirm"))?a.attr(b.target,
"data-remote")&&j(b):b.preventDefault()});a.subscribe("ajax:complete",function(b){g("*[data-disable-with][disabled]",b).forEach(function(c){var b="input"==c.tagName.toLowerCase()?"value":"innerHTML",e=a.attr(c,"data-original-value");a.attr(c,"disabled",!1);a.attr(c,"data-original-value",null);a.attr(c,b,e)})});d("a[data-remote]:not([data-confirm])","click",j);d("a[data-method]:not([data-remote])","click",function(a){var c=a.target,c=k(c.href,b.attr(c,"data-method"));a.preventDefault();c.submit()});
d("form","submit",function(b){var c=b.target,d=g("*[data-disable-with]",c);d.length&&m(d);a.attr(c,"data-remote")&&(b.preventDefault(),j(b))})}}(b,h.rails,b.global))});