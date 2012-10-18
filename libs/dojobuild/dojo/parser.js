//>>built
define("require,./_base/kernel,./_base/lang,./_base/array,./_base/config,./_base/html,./_base/window,./_base/url,./_base/json,./aspect,./date/stamp,./Deferred,./has,./query,./on,./ready".split(","),function(y,u,n,t,G,H,I,J,z,E,K,A,B,F,L,M){function N(a){var b=a._nameCaseMap,d=a.prototype;if(!b||b._extendCnt<x){var b=a._nameCaseMap={},f;for(f in d)"_"!==f.charAt(0)&&(b[f.toLowerCase()]=f);b._extendCnt=x}return b}function C(a){var b=a.join();if(!r[b]){for(var d=[],f=0,e=a.length;f<e;f++){var h=a[f];
d[d.length]=r[h]=r[h]||n.getObject(h)||~h.indexOf("/")&&y(h)}a=d.shift();r[b]=d.length?a.createSubclass?a.createSubclass(d):a.extend.apply(a,d):a}return r[b]}var x=0;E.after(n,"extend",function(){x++},!0);var r={},D={_clearCache:function(){x++;r={}},_functionFromScript:function(a,b){var d="",f="",e=a.getAttribute(b+"args")||a.getAttribute("args"),h=a.getAttribute("with"),e=(e||"").split(/\s*,\s*/);h&&h.length&&t.forEach(h.split(/\s*,\s*/),function(a){d+="with("+a+"){";f+="}"});return new Function(e,
d+a.innerHTML+f)},instantiate:function(a,b,d){var b=b||{},d=d||{},f=(d.scope||u._scopeName)+"Type",e="data-"+(d.scope||u._scopeName)+"-",h=e+"type",n=e+"mixins",k=[];t.forEach(a,function(a){var d=f in b?b[f]:a.getAttribute(h)||a.getAttribute(f);if(d){var e=a.getAttribute(n),d=e?[d].concat(e.split(/\s*,\s*/)):[d];k.push({node:a,types:d})}});return this._instantiate(k,b,d)},_instantiate:function(a,b,d){a=t.map(a,function(a){var e=a.ctor||C(a.types);if(!e)throw Error("Unable to resolve constructor for: '"+
a.types.join()+"'");return this.construct(e,a.node,b,d,a.scripts,a.inherited)},this);!b._started&&!d.noStart&&t.forEach(a,function(a){"function"===typeof a.startup&&!a._started&&a.startup()});return a},construct:function(a,b,d,f,e,h){var O;var w=a&&a.prototype,f=f||{},k={};f.defaults&&n.mixin(k,f.defaults);h&&n.mixin(k,h);var p;B("dom-attributes-explicit")?p=b.attributes:B("dom-attributes-specified-flag")?p=t.filter(b.attributes,function(a){return a.specified}):(h=(/^input$|^img$/i.test(b.nodeName)?
b:b.cloneNode(!1)).outerHTML.replace(/=[^\s"']+|="[^"]*"|='[^']*'/g,"").replace(/^\s*<[a-zA-Z0-9]*\s*/,"").replace(/\s*>.*$/,""),p=t.map(h.split(/\s+/),function(a){var d=a.toLowerCase();return{name:a,value:"LI"==b.nodeName&&"value"==a||"enctype"==d?b.getAttribute(d):b.getAttributeNode(d).value}}));var g=f.scope||u._scopeName,h="data-"+g+"-",i={};"dojo"!==g&&(i[h+"props"]="data-dojo-props",i[h+"type"]="data-dojo-type",i[h+"mixins"]="data-dojo-mixins",i[g+"type"]="dojoType",i[h+"id"]="data-dojo-id");
for(var g=0,c,q=[],s,l;c=p[g++];){var j=c.name,m=j.toLowerCase();c=c.value;switch(i[m]||m){case "data-dojo-type":case "dojotype":case "data-dojo-mixins":break;case "data-dojo-props":l=c;break;case "data-dojo-id":case "jsid":s=c;break;case "data-dojo-attach-point":case "dojoattachpoint":k.dojoAttachPoint=c;break;case "data-dojo-attach-event":case "dojoattachevent":k.dojoAttachEvent=c;break;case "class":k["class"]=b.className;break;case "style":k.style=b.style&&b.style.cssText;break;default:if(j in
w||(j=N(a)[m]||j),j in w)switch(typeof w[j]){case "string":k[j]=c;break;case "number":k[j]=c.length?Number(c):NaN;break;case "boolean":k[j]="false"!=c.toLowerCase();break;case "function":k[j]=""===c||-1!=c.search(/[^\w\.]+/i)?new Function(c):n.getObject(c,!1)||new Function(c);q.push(j);break;default:m=w[j],k[j]=m&&"length"in m?c?c.split(/\s*,\s*/):[]:m instanceof Date?""==c?new Date(""):"now"==c?new Date:K.fromISOString(c):m instanceof J?u.baseUrl+c:z.fromJson(c)}else k[j]=c}}for(g=0;g<q.length;g++)p=
q[g].toLowerCase(),b.removeAttribute(p),b[p]=null;if(l)try{l=z.fromJson.call(f.propsThis,"{"+l+"}"),n.mixin(k,l)}catch(v){throw Error(v.toString()+" in data-dojo-props='"+l+"'");}n.mixin(k,d);e||(e=a&&(a._noScript||w._noScript)?[]:F("> script[type^='dojo/']",b));d=[];f=[];l=[];q=[];if(e)for(g=0;g<e.length;g++){var o=e[g];b.removeChild(o);p=o.getAttribute(h+"event")||o.getAttribute("event");i=o.getAttribute(h+"prop");j=o.getAttribute(h+"method");m=o.getAttribute(h+"advice");c=o.getAttribute("type");
o=this._functionFromScript(o,h);p?"dojo/connect"==c?d.push({method:p,func:o}):"dojo/on"==c?q.push({event:p,func:o}):k[p]=o:"dojo/aspect"==c?d.push({method:j,advice:m,func:o}):"dojo/watch"==c?l.push({prop:i,func:o}):f.push(o)}O=(e=a.markupFactory||w.markupFactory)?e(k,b,a):new a(k,b),a=O;s&&n.setObject(s,a);for(g=0;g<d.length;g++)E[d[g].advice||"after"](a,d[g].method,n.hitch(a,d[g].func),!0);for(g=0;g<f.length;g++)f[g].call(a);for(g=0;g<l.length;g++)a.watch(l[g].prop,l[g].func);for(g=0;g<q.length;g++)L(a,
q[g].event,q[g].func);return a},scan:function(a,b){function d(a){if(!a.inherited){a.inherited={};var b=a.node,c=d(a.parent),b={dir:b.getAttribute("dir")||c.dir,lang:b.getAttribute("lang")||c.lang,textDir:b.getAttribute(g)||c.textDir},e;for(e in b)b[e]&&(a.inherited[e]=b[e])}return a.inherited}var f=[],e=[],h={},n=(b.scope||u._scopeName)+"Type",k="data-"+(b.scope||u._scopeName)+"-",p=k+"type",g=k+"textdir",k=k+"mixins",i=a.firstChild,c=b.inherited;if(!c){var q=function(a,b){return a.getAttribute&&
a.getAttribute(b)||a.parentNode&&q(a.parentNode,b)},c={dir:q(a,"dir"),lang:q(a,"lang"),textDir:q(a,g)},s;for(s in c)c[s]||delete c[s]}for(var c={inherited:c},l,j;;)if(i)if(1!=i.nodeType)i=i.nextSibling;else if(l&&"script"==i.nodeName.toLowerCase())(m=i.getAttribute("type"))&&/^dojo\/\w/i.test(m)&&l.push(i),i=i.nextSibling;else if(j)i=i.nextSibling;else{var m=i.getAttribute(p)||i.getAttribute(n);s=i.firstChild;if(!m&&(!s||3==s.nodeType&&!s.nextSibling))i=i.nextSibling;else{j=null;if(m){var v=i.getAttribute(k);
l=v?[m].concat(v.split(/\s*,\s*/)):[m];try{j=C(l)}catch(o){}j||t.forEach(l,function(a){~a.indexOf("/")&&!h[a]&&(h[a]=!0,e[e.length]=a)});v=j&&!j.prototype._noScript?[]:null;c={types:l,ctor:j,parent:c,node:i,scripts:v};c.inherited=d(c);f.push(c)}else c={node:i,scripts:l,parent:c};i=s;l=v;j=j&&j.prototype.stopParser&&!b.template}}else{if(!c||!c.node)break;i=c.node.nextSibling;j=!1;c=c.parent;l=c.scripts}var r=new A;e.length?(B("dojo-debug-messages"),y(e,function(){r.resolve(t.filter(f,function(a){if(!a.ctor)try{a.ctor=
C(a.types)}catch(d){}for(var c=a.parent;c&&!c.types;)c=c.parent;var e=a.ctor&&a.ctor.prototype;a.instantiateChildren=!(e&&e.stopParser&&!b.template);a.instantiate=!c||c.instantiate&&c.instantiateChildren;return a.instantiate}))})):r.resolve(f);return r.promise},_require:function(a){var a=z.fromJson("{"+a.innerHTML+"}"),b=[],d=[],f=new A,e;for(e in a)b.push(e),d.push(a[e]);y(d,function(){for(var a=0;a<b.length;a++)n.setObject(b[a],arguments[a]);f.resolve(arguments)});return f.promise},_scanAmd:function(a){var b=
new A,d=b.promise;b.resolve(!0);var f=this;F("script[type='dojo/require']",a).forEach(function(a){d=d.then(function(){return f._require(a)});a.parentNode.removeChild(a)});return d},parse:function(a,b){var d;!b&&a&&a.rootNode?(b=a,d=b.rootNode):a&&n.isObject(a)&&!("nodeType"in a)?b=a:d=a;d=d?H.byId(d):I.body();var b=b||{},f=b.template?{template:!0}:{},e=[],h=this,r=this._scanAmd(d,b).then(function(){return h.scan(d,b)}).then(function(a){return e=e.concat(h._instantiate(a,f,b))}).otherwise(function(a){throw a;
});n.mixin(e,r);return e}};u.parser=D;G.parseOnLoad&&M(100,D,"parse");return D});