//>>built
define(["./kernel","./lang","../on"],function(b,e,c){var d=window,a={addOnWindowUnload:function(a,f){if(!b.windowUnloaded)c(d,"unload",b.windowUnloaded=function(){});c(d,"unload",e.hitch(a,f))},addOnUnload:function(a,b){c(d,"beforeunload",e.hitch(a,b))}};b.addOnWindowUnload=a.addOnWindowUnload;b.addOnUnload=a.addOnUnload;return a});