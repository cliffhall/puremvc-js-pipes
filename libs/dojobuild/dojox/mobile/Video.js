//>>built
define(["dojo/_base/declare","dojo/_base/sniff","./Audio"],function(b,a,c){return b("dojox.mobile.Video",c,{width:"200px",height:"150px",_tag:"video",_getEmbedRegExp:function(){return a("ff")?/video\/mp4/i:9<=a.isIE?/video\/webm/i:null}})});