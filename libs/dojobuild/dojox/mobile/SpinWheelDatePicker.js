//>>built
define("dojo/_base/array,dojo/_base/declare,dojo/dom-class,./_DatePickerMixin,./SpinWheel,./SpinWheelSlot".split(","),function(c,e,d,f,g,a){return e("dojox.mobile.SpinWheelDatePicker",[g,f],{slotClasses:[a,a,a],slotProps:[{labelFrom:1970,labelTo:2038},{},{}],buildRendering:function(){this.initSlots();this.inherited(arguments);d.add(this.domNode,"mblSpinWheelDatePicker");this._conn=[this.connect(this.slots[0],"onFlickAnimationEnd","onYearSet"),this.connect(this.slots[1],"onFlickAnimationEnd","onMonthSet"),
this.connect(this.slots[2],"onFlickAnimationEnd","onDaySet")]},disableValues:function(a){c.forEach(this.slots[2].panelNodes,function(c){for(var b=27;31>b;b++)d.toggle(c.childNodes[b],"mblSpinWheelSlotLabelGray",b>=a)})}})});