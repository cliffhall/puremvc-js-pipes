//>>built
define("dojo/_base/array,dojo/_base/declare,dojo/_base/lang,dojo/date,dojo/date/locale,dojo/date/stamp".split(","),function(c,d,g,j,f,i){var h={format:function(b){return f.format(b,{datePattern:this.pattern,selector:"date"})}},k=g.mixin({initLabels:function(){this.labels=[];if(this.labelFrom!==this.labelTo){var b=new Date(this.labelFrom,0,1),a,e;for(a=this.labelFrom,e=0;a<=this.labelTo;a++,e++)b.setFullYear(a),this.labels.push(this.format(b))}}},h),l=g.mixin({initLabels:function(){this.labels=[];
for(var b=new Date(2E3,0,16),a=0;12>a;a++)b.setMonth(a),this.labels.push(this.format(b))}},h),m=g.mixin({initLabels:function(){this.labels=[];for(var b=new Date(2E3,0,1),a=1;31>=a;a++)b.setDate(a),this.labels.push(this.format(b))}},h);return d("dojox.mobile._DatePickerMixin",null,{yearPattern:"yyyy",monthPattern:"MMM",dayPattern:"d",initSlots:function(){var b=this.slotClasses,a=this.slotProps;b[0]=d(b[0],k);b[1]=d(b[1],l);b[2]=d(b[2],m);a[0].pattern=this.yearPattern;a[1].pattern=this.monthPattern;
a[2].pattern=this.dayPattern;this.reorderSlots()},reorderSlots:function(){if(!this.slotOrder.length){var b=f._parseInfo().bundle["dateFormat-short"].toLowerCase().split(/[^ymd]+/,3);this.slotOrder=c.map(b,function(a){return{y:0,m:1,d:2}[a.charAt(0)]})}},reset:function(){var b=new Date,a=c.map(this.slots,function(a){return a.format(b)});this.set("colors",a);this.disableValues(this.onDaySet());this.value?(this.set("value",this.value),this.value=null):this.values?(this.set("values",this.values),this.values=
null):this.set("values",a)},onYearSet:function(){this.disableValues(this.onDaySet())},onMonthSet:function(){this.disableValues(this.onDaySet())},onDaySet:function(){var b=this.get("values"),a=f.parse(b[0]+"/"+b[1],{datePattern:this.slots[0].pattern+"/"+this.slots[1].pattern,selector:"date"}),a=j.getDaysInMonth(a);a<b[2]&&this.slots[2].set("value",a);return a},_getDateAttr:function(){var b=this.get("values"),a=this.slots;return f.parse(b[0]+"/"+b[1]+"/"+b[2],{datePattern:a[0].pattern+"/"+a[1].pattern+
"/"+a[2].pattern,selector:"date"})},_setValuesAttr:function(b){c.forEach(this.getSlots(),function(a,e){var c=b[e];if("number"==typeof c){var d=[1970,1,1];d.splice(e,1,c-0);c=a.format(new Date(d[0],d[1]-1,d[2]))}a.set("value",c)})},_setValueAttr:function(b){var a=i.fromISOString(b);this.set("values",c.map(this.slots,function(b){return b.format(a)}))},_getValueAttr:function(){return i.toISOString(this.get("date"),{selector:"date"})}})});