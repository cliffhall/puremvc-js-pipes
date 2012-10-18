//>>built
define("./kernel,./config,./lang,../Evented,./Color,./connect,./sniff,../dom,../dom-style".split(","),function(o,t,g,u,i,k,v,p,l){var j=g.mixin,e={},q=e._Line=function(a,b){this.start=a;this.end=b};q.prototype.getValue=function(a){return(this.end-this.start)*a+this.start};var h=e.Animation=function(a){j(this,a);if(g.isArray(this.curve))this.curve=new q(this.curve[0],this.curve[1])};h.prototype=new u;g.extend(h,{duration:350,repeat:0,rate:20,_percent:0,_startRepeatCount:0,_getStep:function(){var a=
this._percent,b=this.easing;return b?b(a):a},_fire:function(a,b){var f=b||[];if(this[a])if(t.debugAtAllCosts)this[a].apply(this,f);else try{this[a].apply(this,f)}catch(d){}return this},play:function(a,b){this._delayTimer&&this._clearTimer();if(b)this._stopTimer(),this._active=this._paused=!1,this._percent=0;else if(this._active&&!this._paused)return this;this._fire("beforeBegin",[this.node]);var f=a||this.delay,d=g.hitch(this,"_play",b);if(0<f)return this._delayTimer=setTimeout(d,f),this;d();return this},
_play:function(){this._delayTimer&&this._clearTimer();this._startTime=(new Date).valueOf();this._paused&&(this._startTime-=this.duration*this._percent);this._active=!0;this._paused=!1;var a=this.curve.getValue(this._getStep());if(!this._percent){if(!this._startRepeatCount)this._startRepeatCount=this.repeat;this._fire("onBegin",[a])}this._fire("onPlay",[a]);this._cycle();return this},pause:function(){this._delayTimer&&this._clearTimer();this._stopTimer();if(!this._active)return this;this._paused=!0;
this._fire("onPause",[this.curve.getValue(this._getStep())]);return this},gotoPercent:function(a,b){this._stopTimer();this._active=this._paused=!0;this._percent=a;b&&this.play();return this},stop:function(a){this._delayTimer&&this._clearTimer();if(!this._timer)return this;this._stopTimer();if(a)this._percent=1;this._fire("onStop",[this.curve.getValue(this._getStep())]);this._active=this._paused=!1;return this},status:function(){return this._active?this._paused?"paused":"playing":"stopped"},_cycle:function(){if(this._active){var a=
(new Date).valueOf(),a=0===this.duration?1:(a-this._startTime)/this.duration;1<=a&&(a=1);this._percent=a;this.easing&&(a=this.easing(a));this._fire("onAnimate",[this.curve.getValue(a)]);if(1>this._percent)this._startTimer();else{this._active=!1;if(0<this.repeat)this.repeat--,this.play(null,!0);else if(-1==this.repeat)this.play(null,!0);else if(this._startRepeatCount)this.repeat=this._startRepeatCount,this._startRepeatCount=0;this._percent=0;this._fire("onEnd",[this.node]);!this.repeat&&this._stopTimer()}}return this},
_clearTimer:function(){clearTimeout(this._delayTimer);delete this._delayTimer}});var m=0,n=null,r={run:function(){}};g.extend(h,{_startTimer:function(){if(!this._timer)this._timer=k.connect(r,"run",this,"_cycle"),m++;n||(n=setInterval(g.hitch(r,"run"),this.rate))},_stopTimer:function(){if(this._timer)k.disconnect(this._timer),this._timer=null,m--;0>=m&&(clearInterval(n),n=null,m=0)}});var w=v("ie")?function(a){var b=a.style;if(!b.width.length&&"auto"==l.get(a,"width"))b.width="auto"}:function(){};
e._fade=function(a){a.node=p.byId(a.node);var b=j({properties:{}},a),a=b.properties.opacity={};a.start=!("start"in b)?function(){return+l.get(b.node,"opacity")||0}:b.start;a.end=b.end;a=e.animateProperty(b);k.connect(a,"beforeBegin",g.partial(w,b.node));return a};e.fadeIn=function(a){return e._fade(j({end:1},a))};e.fadeOut=function(a){return e._fade(j({end:0},a))};e._defaultEasing=function(a){return 0.5+Math.sin((a+1.5)*Math.PI)/2};var s=function(a){this._properties=a;for(var b in a){var f=a[b];if(f.start instanceof
i)f.tempColor=new i}};s.prototype.getValue=function(a){var b={},f;for(f in this._properties){var d=this._properties[f],c=d.start;c instanceof i?b[f]=i.blendColors(c,d.end,a,d.tempColor).toCss():g.isArray(c)||(b[f]=(d.end-c)*a+c+("opacity"!=f?d.units||"px":0))}return b};e.animateProperty=function(a){var b=a.node=p.byId(a.node);if(!a.easing)a.easing=o._defaultEasing;a=new h(a);k.connect(a,"beforeBegin",a,function(){var a={},d;for(d in this.properties){if("width"==d||"height"==d)this.node.display="block";
var c=this.properties[d];g.isFunction(c)&&(c=c(b));c=a[d]=j({},g.isObject(c)?c:{end:c});if(g.isFunction(c.start))c.start=c.start(b);if(g.isFunction(c.end))c.end=c.end(b);var e=0<=d.toLowerCase().indexOf("color"),h=function(a,b){var c={height:a.offsetHeight,width:a.offsetWidth}[b];if(void 0!==c)return c;c=l.get(a,b);return"opacity"==b?+c:e?c:parseFloat(c)};if("end"in c){if(!("start"in c))c.start=h(b,d)}else c.end=h(b,d);e?(c.start=new i(c.start),c.end=new i(c.end)):c.start="opacity"==d?+c.start:parseFloat(c.start)}this.curve=
new s(a)});k.connect(a,"onAnimate",g.hitch(l,"set",a.node));return a};e.anim=function(a,b,f,d,c,g){return e.animateProperty({node:a,duration:f||h.prototype.duration,properties:b,easing:d,onEnd:c}).play(g||0)};j(o,e);o._Animation=h;return e});