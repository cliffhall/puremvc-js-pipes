//>>built
define(["dijit","dojo","dojox"],function(f,b,e){b.provide("dojox.lang.aspect.tracer");(function(){var d=e.lang.aspect,c=function(a){this.method=a?"group":"log";if(a)this.after=this._after};b.extend(c,{before:function(){var a=d.getContext(),b=a.joinPoint,c=Array.prototype.join.call(arguments,", ");console[this.method](a.instance,"=>",b.targetName+"("+c+")")},afterReturning:function(){d.getContext()},afterThrowing:function(){},_after:function(){}});d.tracer=function(a){return new c(a)}})()});