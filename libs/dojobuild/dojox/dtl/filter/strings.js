//>>built
define("dojo/_base/lang,dojo/_base/array,dojox/string/tokenize,dojox/string/sprintf,../filter/htmlstrings,../_base".split(","),function(i,m,j,n,p,o){i.getObject("dojox.dtl.filter.strings",!0);i.mixin(o.filter.strings,{_urlquote:function(a,b){b||(b="/");return j(a,/([^\w-_.])/g,function(a){if(-1==b.indexOf(a)){if(" "==a)return"+";for(a=a.charCodeAt(0).toString(16).toUpperCase();2>a.length;)a="0"+a;return"%"+a}return a}).join("")},addslashes:function(a){return a.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/'/g,
"\\'")},capfirst:function(a){a=""+a;return a.charAt(0).toUpperCase()+a.substring(1)},center:function(a,b){var b=b||a.length,a=a+"",d=b-a.length;d%2&&(a+=" ",d-=1);for(var c=0;c<d;c+=2)a=" "+a+" ";return a},cut:function(a,b){return(a+"").replace(RegExp(b+""||"","g"),"")},_fix_ampersands:/&(?!(\w+|#\d+);)/g,fix_ampersands:function(a){return a.replace(dojox.dtl.filter.strings._fix_ampersands,"&amp;")},floatformat:function(a,b){b=parseInt(b||-1,10);a=parseFloat(a);if(!(a-a.toFixed(0))&&0>b)return a.toFixed();
a=a.toFixed(Math.abs(b));return 0>b?parseFloat(a)+"":a},iriencode:function(a){return dojox.dtl.filter.strings._urlquote(a,"/#%[]=:;$&()+,!")},linenumbers:function(a){for(var b=dojox.dtl.filter,a=a.split("\n"),d=[],c=(a.length+"").length,e=0,f;e<a.length;e++)f=a[e],d.push(b.strings.ljust(e+1,c)+". "+dojox.dtl._base.escape(f));return d.join("\n")},ljust:function(a,b){a+="";for(b=parseInt(b,10);a.length<b;)a+=" ";return a},lower:function(a){return(a+"").toLowerCase()},make_list:function(a){var b=[];
"number"==typeof a&&(a+="");if(a.charAt){for(var d=0;d<a.length;d++)b.push(a.charAt(d));return b}if("object"==typeof a){for(d in a)b.push(a[d]);return b}return[]},rjust:function(a,b){a+="";for(b=parseInt(b,10);a.length<b;)a=" "+a;return a},slugify:function(a){a=a.replace(/[^\w\s-]/g,"").toLowerCase();return a.replace(/[\-\s]+/g,"-")},_strings:{},stringformat:function(a,b){var b=""+b,d=dojox.dtl.filter.strings._strings;d[b]||(d[b]=new n.Formatter("%"+b));return d[b].format(a)},title:function(a){for(var b,
d="",c=0,e;c<a.length;c++)e=a.charAt(c),d=" "==b||"\n"==b||"\t"==b||!b?d+e.toUpperCase():d+e.toLowerCase(),b=e;return d},_truncatewords:/[ \n\r\t]/,truncatewords:function(a,b){b=parseInt(b,10);if(!b)return a;for(var d=0,c=a.length,e=0,f,h;d<a.length;d++){f=a.charAt(d);if(dojox.dtl.filter.strings._truncatewords.test(h)){if(!dojox.dtl.filter.strings._truncatewords.test(f)&&(++e,e==b))return a.substring(0,c+1)}else dojox.dtl.filter.strings._truncatewords.test(f)||(c=d);h=f}return a},_truncate_words:/(&.*?;|<.*?>|(\w[\w\-]*))/g,
_truncate_tag:/<(\/)?([^ ]+?)(?: (\/)| .*?)?>/,_truncate_singlets:{br:!0,col:!0,link:!0,base:!0,img:!0,param:!0,area:!0,hr:!0,input:!0},truncatewords_html:function(a,b){b=parseInt(b,10);if(0>=b)return"";for(var d=dojox.dtl.filter.strings,c=0,e=[],f=j(a,d._truncate_words,function(a,f){if(f){++c;if(c<b)return f;if(c==b)return f+" ..."}var g=a.match(d._truncate_tag);if(g&&!(c>=b)){var h=g[1],g=g[2].toLowerCase();!h&&!d._truncate_singlets[g]&&(h?(h=m.indexOf(e,g),-1!=h&&(e=e.slice(h+1))):e.unshift(g));
return a}}).join(""),f=f.replace(/\s+$/g,""),h=0,g;g=e[h];h++)f+="</"+g+">";return f},upper:function(a){return a.toUpperCase()},urlencode:function(a){return dojox.dtl.filter.strings._urlquote(a)},_urlize:/^((?:[(>]|&lt;)*)(.*?)((?:[.,)>\n]|&gt;)*)$/,_urlize2:/^\S+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+$/,urlize:function(a){return dojox.dtl.filter.strings.urlizetrunc(a)},urlizetrunc:function(a,b){b=parseInt(b);return j(a,/(\S+)/g,function(a){var c=dojox.dtl.filter.strings._urlize.exec(a);if(!c)return a;
var c=c[2],e=0==c.indexOf("www."),f=-1!=c.indexOf("@"),h=-1!=c.indexOf(":"),g=0==c.indexOf("http://"),i=0==c.indexOf("https://"),j=/[a-zA-Z0-9]/.test(c.charAt(0)),l=c.substring(c.length-4),k=c;3<b&&(k=k.substring(0,b-3)+"...");return e||!f&&!g&&c.length&&j&&(".org"==l||".net"==l||".com"==l)?'<a href="http://'+c+'" rel="nofollow">'+k+"</a>":g||i?'<a href="'+c+'" rel="nofollow">'+k+"</a>":f&&!e&&!h&&dojox.dtl.filter.strings._urlize2.test(c)?'<a href="mailto:'+c+'">'+c+"</a>":a}).join("")},wordcount:function(a){a=
i.trim(a);return!a?0:a.split(/\s+/g).length},wordwrap:function(a,b){var b=parseInt(b),d=[],c=a.split(/\s+/g);if(c.length){var e=c.shift();d.push(e);for(var f=e.length-e.lastIndexOf("\n")-1,h=0;h<c.length;h++){var e=c[h],g=-1!=e.indexOf("\n")?e.split(/\n/g):[e],f=f+(g[0].length+1);if(b&&f>b)d.push("\n"),f=g[g.length-1].length;else if(d.push(" "),1<g.length)f=g[g.length-1].length;d.push(e)}}return d.join("")}});return dojox.dtl.filter.strings});