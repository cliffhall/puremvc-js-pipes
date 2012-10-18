//>>built
define("dojo/_base/lang,dojo/_base/array,dojo/sniff,dojo/_base/declare,dojo/_base/connect,dojo/dom-geometry,./Invisible,../scaler/linear,./common,dojox/gfx,dojox/lang/utils,dojox/lang/functional".split(","),function(w,I,T,O,J,V,W,L,P,t,M,N){return O("dojox.charting.axis2d.Default",W,{defaultParams:{vertical:!1,fixUpper:"none",fixLower:"none",natural:!1,leftBottom:!0,includeZero:!1,fixed:!0,majorLabels:!0,minorTicks:!0,minorLabels:!0,microTicks:!1,rotation:0,htmlLabels:!0,enableCache:!1,dropLabels:!0,
labelSizeChange:!1},optionalParams:{min:0,max:1,from:0,to:1,majorTickStep:4,minorTickStep:2,microTickStep:1,labels:[],labelFunc:null,maxLabelSize:0,maxLabelCharCount:0,trailingSymbol:null,stroke:{},majorTick:{},minorTick:{},microTick:{},tick:{},font:"",fontColor:"",title:"",titleGap:0,titleFont:"",titleFontColor:"",titleOrientation:""},constructor:function(a,c){this.opt=w.clone(this.defaultParams);M.updateWithObject(this.opt,c);M.updateWithPattern(this.opt,c,this.optionalParams);if(this.opt.enableCache)this._textFreePool=
[],this._lineFreePool=[],this._textUsePool=[],this._lineUsePool=[];this._invalidMaxLabelSize=!0},setWindow:function(a,c){if(a!=this.scale)this._invalidMaxLabelSize=!0;return this.inherited(arguments)},_groupLabelWidth:function(a,c,g){if(!a.length)return 0;if(50<a.length)a.length=50;w.isObject(a[0])&&(a=N.map(a,function(a){return a.text}));g&&(a=N.map(a,function(a){return 0==w.trim(a).length?"":a.substring(0,g)+this.trailingSymbol},this));a=a.join("<br>");return t._base._getTextBox(a,{font:c}).w||
0},_getMaxLabelSize:function(a,c,g,h,f,i){if(null==this._maxLabelSize&&6==arguments.length){var j=this.opt;this.scaler.minMinorStep=this._prevMinMinorStep=0;var b=w.clone(j);delete b.to;delete b.from;var k=L.buildScaler(a,c,g,b,j.to-j.from);k.minMinorStep=0;this._majorStart=k.major.start;j=L.buildTicks(k,j);if(i&&j){var l=k=0,d=function(a){a.label&&this.push(a.label)},e=[];this.opt.majorLabels&&(I.forEach(j.major,d,e),k=this._groupLabelWidth(e,f,b.maxLabelCharCount),b.maxLabelSize&&(k=Math.min(b.maxLabelSize,
k)));e=[];this.opt.dropLabels&&this.opt.minorLabels&&(I.forEach(j.minor,d,e),l=this._groupLabelWidth(e,f,b.maxLabelCharCount),b.maxLabelSize&&(l=Math.min(b.maxLabelSize,l)));this._maxLabelSize={majLabelW:k,minLabelW:l,majLabelH:i,minLabelH:i}}else this._maxLabelSize=null}return this._maxLabelSize},calculate:function(a,c,g){this.inherited(arguments);this.scaler.minMinorStep=this._prevMinMinorStep;if((this._invalidMaxLabelSize||g!=this._oldSpan)&&Infinity!=a&&-Infinity!=c){this._invalidMaxLabelSize=
!1;if(this.opt.labelSizeChange)this._maxLabelSize=null;this._oldSpan=g;var h=this.opt,f=this.chart.theme.axis,i=h.rotation%360,j=this.chart.theme.axis.tick.labelGap,b=h.font||f.majorTick&&f.majorTick.font||f.tick&&f.tick.font,f=b?t.normalizedLength(t.splitFontString(b).size):0,b=this._getMaxLabelSize(a,c,g,i,b,f);"number"!=typeof j&&(j=4);if(b&&h.dropLabels){var h=Math.abs(Math.cos(i*Math.PI/180)),k=Math.abs(Math.sin(i*Math.PI/180));0>i&&(i+=360);switch(i){case 0:case 180:this.vertical?i=f:(i=b.majLabelW,
f=b.minLabelW);break;case 90:case 270:this.vertical?(i=b.majLabelW,f=b.minLabelW):i=f;break;default:var i=this.vertical?Math.min(b.majLabelW,f/h):Math.min(b.majLabelW,f/k),l=Math.sqrt(b.minLabelW*b.minLabelW+f*f),f=Math.min(l,this.vertical?f*h+b.minLabelW*k:b.minLabelW*h+f*k)}this.scaler.minMinorStep=this._prevMinMinorStep=Math.max(i,f)+j;this._skipInterval=this.scaler.minMinorStep<=this.scaler.minor.tick*this.scaler.bounds.scale?0:Math.floor((i+j)/(this.scaler.major.tick*this.scaler.bounds.scale))}else this._skipInterval=
0}this.ticks=L.buildTicks(this.scaler,this.opt);return this},getOffsets:function(){var a={l:0,r:0,t:0,b:0};if(!this.scaler)return a;var c=this.opt,g=this.chart.theme.axis,h=this.chart.theme.axis.tick.labelGap,f=c.titleFont||g.title&&g.title.font,g=0==c.titleGap?0:c.titleGap||g.title&&g.title.gap,i=this.chart.theme.getTick("major",c),j=this.chart.theme.getTick("minor",c),f=f?t.normalizedLength(t.splitFontString(f).size):0,b=c.rotation%360,k=c.leftBottom,l=Math.abs(Math.cos(b*Math.PI/180)),d=Math.abs(Math.sin(b*
Math.PI/180));this.trailingSymbol=void 0===c.trailingSymbol||null===c.trailingSymbol?this.trailingSymbol:c.trailingSymbol;"number"!=typeof h&&(h=4);0>b&&(b+=360);var e=this._getMaxLabelSize();if(e){var p=Math.ceil(Math.max(e.majLabelW,e.minLabelW))+1,m=Math.ceil(Math.max(e.majLabelH,e.minLabelH))+1;if(this.vertical)switch(e=k?"l":"r",b){case 0:case 180:a[e]=p;a.t=a.b=m/2;break;case 90:case 270:a[e]=m;a.t=a.b=p/2;break;default:45>=b||180<b&&225>=b?(a[e]=m*d/2+p*l,a[k?"t":"b"]=m*l/2+p*d,a[k?"b":"t"]=
m*l/2):315<b||180>b&&135<b?(a[e]=m*d/2+p*l,a[k?"b":"t"]=m*l/2+p*d,a[k?"t":"b"]=m*l/2):90>b||180<b&&270>b?(a[e]=m*d+p*l,a[k?"t":"b"]=m*l+p*d):(a[e]=m*d+p*l,a[k?"b":"t"]=m*l+p*d)}else switch(e=k?"b":"t",b){case 0:case 180:a[e]=m;a.l=a.r=p/2;break;case 90:case 270:a[e]=p;a.l=a.r=m/2;break;default:45<=b&&90>=b||225<=b&&270>=b?(a[e]=m*l/2+p*d,a[k?"r":"l"]=m*d/2+p*l,a[k?"l":"r"]=m*d/2):90<=b&&135>=b||270<=b&&315>=b?(a[e]=m*l/2+p*d,a[k?"l":"r"]=m*d/2+p*l,a[k?"r":"l"]=m*d/2):45>b||180<b&&225>b?(a[e]=m*l+
p*d,a[k?"r":"l"]=m*d+p*l):(a[e]=m*l+p*d,a[k?"l":"r"]=m*d+p*l)}a[e]+=h+Math.max(0<i.length?i.length:0,0<j.length?j.length:0)+(c.title?f+g:0)}return a},cleanGroup:function(a){if(this.opt.enableCache&&this.group)this._lineFreePool=this._lineFreePool.concat(this._lineUsePool),this._lineUsePool=[],this._textFreePool=this._textFreePool.concat(this._textUsePool),this._textUsePool=[];this.inherited(arguments)},createText:function(a,c,g,h,f,i,j,b,k){if(!this.opt.enableCache||"html"==a)return P.createText[a](this.chart,
c,g,h,f,i,j,b,k);0<this._textFreePool.length?(a=this._textFreePool.pop(),a.setShape({x:g,y:h,text:i,align:f}),c.add(a)):a=P.createText[a](this.chart,c,g,h,f,i,j,b);this._textUsePool.push(a);return a},createLine:function(a,c){var g;this.opt.enableCache&&0<this._lineFreePool.length?(g=this._lineFreePool.pop(),g.setShape(c),a.add(g)):g=a.createLine(c);this.opt.enableCache&&this._lineUsePool.push(g);return g},render:function(a,c){var g,h,f,i,j,b,k,l,d,e,p,m,E,F;if(!this.dirty||!this.scaler)return this;
var q=this.opt;d=this.chart.theme.axis;var v=q.leftBottom,o=q.rotation%360,s=0,B,n,s=this.chart.theme.axis.tick.labelGap,z=q.font||d.majorTick&&d.majorTick.font||d.tick&&d.tick.font,w=q.titleFont||d.title&&d.title.font,J=q.fontColor||d.majorTick&&d.majorTick.fontColor||d.tick&&d.tick.fontColor||"black",M=q.titleFontColor||d.title&&d.title.fontColor||"black";j=0==q.titleGap?0:q.titleGap||d.title&&d.title.gap||15;var u=q.titleOrientation||d.title&&d.title.orientation||"axis",x=this.chart.theme.getTick("major",
q),y=this.chart.theme.getTick("minor",q),Q=this.chart.theme.getTick("micro",q),N="stroke"in q?q.stroke:d.stroke,r=z?t.normalizedLength(t.splitFontString(z).size):0;b=Math.abs(Math.cos(o*Math.PI/180));B=Math.abs(Math.sin(o*Math.PI/180));var H=w?t.normalizedLength(t.splitFontString(w).size):0;"number"!=typeof s&&(s=4);0>o&&(o+=360);var K=this._getMaxLabelSize(),K=K&&K.majLabelW;if(this.vertical){E=a.height-c.b;F=void 0;p=c.t;m=void 0;d=(a.height-c.b+c.t)/2;e=void 0;B=r*B+(K||0)*b+s+Math.max(0<x.length?
x.length:0,0<y.length?y.length:0)+H+j;k=0;l=-1;g=0;h=0;j=1;b=0;f=s;i=0;switch(o){case 0:n="end";h=0.4*r;break;case 90:n="middle";g=-r;break;case 180:n="start";h=0.4*-r;break;case 270:n="middle";break;default:45>o?(n="end",h=0.4*r):90>o?(n="end",h=0.4*r):135>o?n="start":225>o?(n="start",h=0.4*-r):270>o?(n="start",g=v?0:0.4*r):315>o?(n="end",g=v?0:0.4*r):(n="end",h=0.4*r)}if(v)F=m=c.l,s=u&&"away"==u?90:270,e=c.l-B+(270==s?H:0),j=-1,f=-f;else switch(F=m=a.width-c.r,s=u&&"axis"==u?90:270,e=a.width-c.r+
B-(270==s?0:H),n){case "start":n="end";break;case "end":n="start";break;case "middle":g+=r}}else{F=c.l;E=void 0;m=a.width-c.r;p=void 0;e=(a.width-c.r+c.l)/2;d=void 0;B=r*b+(K||0)*B+s+Math.max(0<x.length?x.length:0,0<y.length?y.length:0)+H+j;k=1;l=0;g=0;h=0;j=0;b=1;f=0;i=s;switch(o){case 0:n="middle";h=r;break;case 90:n="start";g=0.4*-r;break;case 180:n="middle";break;case 270:n="end";g=0.4*r;break;default:45>o?(n="start",h=v?r:0):135>o?(n="start",g=0.4*-r):180>o?(n="start",h=v?0:-r):225>o?(n="end",
h=v?0:-r):315>o?(n="end",h=v?0.4*r:0):(n="end",h=v?r:0)}if(v)E=p=a.height-c.b,s=u&&"axis"==u?180:0,d=a.height-c.b+B-(s?H:0);else switch(E=p=c.t,s=u&&"away"==u?180:0,d=c.t-B+(s?0:H),b=-1,i=-i,n){case "start":n="end";break;case "end":n="start";break;case "middle":h-=r}}this.cleanGroup();var G=this.group,v=this.scaler,u=this.ticks,R=L.getTransformerFromModel(this.scaler),A=(!q.title||!s)&&!o&&this.opt.htmlLabels&&!T("ie")&&!T("opera")?"html":"gfx",C=j*x.length,D=b*x.length,S=this._skipInterval;G.createLine({x1:F,
y1:E,x2:m,y2:p}).setStroke(N);q.title&&(w=P.createText[A](this.chart,G,e,d,"middle",q.title,w,M),"html"==A?this.htmlElements.push(w):w.setTransform(t.matrix.rotategAt(s,e,d)));if(null==u)return this.dirty=!1,this;var O=0<u.major.length?(u.major[0].value-this._majorStart)/v.major.tick:0,U=this.opt.majorLabels;I.forEach(u.major,function(a,b){var c=R(a.value),d=F+k*c,j=E+l*c,b=b+O;this.createLine(G,{x1:d,y1:j,x2:d+C,y2:j+D}).setStroke(x);if(a.label&&(!S||0==(b-(1+S))%(1+S))){var e=q.maxLabelCharCount?
this.getTextWithLimitCharCount(a.label,z,q.maxLabelCharCount):{text:a.label,truncated:!1},e=q.maxLabelSize?this.getTextWithLimitLength(e.text,z,q.maxLabelSize,e.truncated):e,c=this.createText(A,G,d+(0<x.length?C:0)+f+(o?0:g),j+(0<x.length?D:0)+i+(o?0:h),n,e.text,z,J);this.chart.truncateBidi&&e.truncated&&this.chart.truncateBidi(c,a.label,A);e.truncated&&this.labelTooltip(c,this.chart,a.label,e.text,z,A);"html"==A?this.htmlElements.push(c):o&&c.setTransform([{dx:g,dy:h},t.matrix.rotategAt(o,d+(0<x.length?
C:0)+f,j+(0<x.length?D:0)+i)])}},this);C=j*y.length;D=b*y.length;U=this.opt.minorLabels&&v.minMinorStep<=v.minor.tick*v.bounds.scale;I.forEach(u.minor,function(a){var b=R(a.value),c=F+k*b,d=E+l*b;this.createLine(G,{x1:c,y1:d,x2:c+C,y2:d+D}).setStroke(y);if(U&&a.label){var e=q.maxLabelCharCount?this.getTextWithLimitCharCount(a.label,z,q.maxLabelCharCount):{text:a.label,truncated:!1},e=q.maxLabelSize?this.getTextWithLimitLength(e.text,z,q.maxLabelSize,e.truncated):e,b=this.createText(A,G,c+(0<y.length?
C:0)+f+(o?0:g),d+(0<y.length?D:0)+i+(o?0:h),n,e.text,z,J);this.chart.getTextDir&&e.truncated&&this.chart.truncateBidi(b,a.label,A);e.truncated&&this.labelTooltip(b,this.chart,a.label,e.text,z,A);"html"==A?this.htmlElements.push(b):o&&b.setTransform([{dx:g,dy:h},t.matrix.rotategAt(o,c+(0<y.length?C:0)+f,d+(0<y.length?D:0)+i)])}},this);C=j*Q.length;D=b*Q.length;I.forEach(u.micro,function(a){var b=R(a.value),a=F+k*b,b=E+l*b;this.createLine(G,{x1:a,y1:b,x2:a+C,y2:b+D}).setStroke(Q)},this);this.dirty=
!1;return this},labelTooltip:function(a,c,g,h,f,i){var j=["dijit/Tooltip"],b={type:"rect"},k=["above","below"],h=t._base._getTextBox(h,{font:f}).w||0,f=f?t.normalizedLength(t.splitFontString(f).size):0;"html"==i?(w.mixin(b,V.position(a.firstChild,!0)),b.width=Math.ceil(h),b.height=Math.ceil(f),this._events.push({shape:dojo,handle:J.connect(a.firstChild,"onmouseover",this,function(){require(j,function(a){a.show(g,b,k)})})}),this._events.push({shape:dojo,handle:J.connect(a.firstChild,"onmouseout",this,
function(){require(j,function(a){a.hide(b)})})})):(i=a.getShape(),c=c.getCoords(),b=w.mixin(b,{x:i.x-h/2,y:i.y}),b.x+=c.x,b.y+=c.y,b.x=Math.round(b.x),b.y=Math.round(b.y),b.width=Math.ceil(h),b.height=Math.ceil(f),this._events.push({shape:a,handle:a.connect("onmouseenter",this,function(){require(j,function(a){a.show(g,b,k)})})}),this._events.push({shape:a,handle:a.connect("onmouseleave",this,function(){require(j,function(a){a.hide(b)})})}))}})});