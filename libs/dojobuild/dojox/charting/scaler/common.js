//>>built
define(["dojo/_base/lang"],function(j){var g=function(a,d){return Math.abs(a-d)<=1.0E-6*(Math.abs(a)+Math.abs(d))},k=j.getObject("dojox.charting.scaler.common",!0),e={};return j.mixin(k,{doIfLoaded:function(a,d,f){if(void 0==e[a])try{e[a]=require(a)}catch(l){e[a]=null}return e[a]?d(e[a]):f()},getNumericLabel:function(a,d,f){var e="";k.doIfLoaded("dojo/number",function(b){e=(f.fixed?b.format(a,{places:0>d?-d:0}):b.format(a))||""},function(){e=f.fixed?a.toFixed(0>d?-d:0):a.toString()});if(f.labelFunc){var c=
f.labelFunc(e,a,d);if(c)return c}if(f.labels){for(var c=f.labels,b=0,h=c.length;b<h;){var i=Math.floor((b+h)/2);c[i].value<a?b=i+1:h=i}if(b<c.length&&g(c[b].value,a))return c[b].text;--b;if(0<=b&&b<c.length&&g(c[b].value,a))return c[b].text;b+=2;if(b<c.length&&g(c[b].value,a))return c[b].text}return e}})});