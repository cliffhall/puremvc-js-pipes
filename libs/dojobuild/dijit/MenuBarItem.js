//>>built
require({cache:{"url:dijit/templates/MenuBarItem.html":'<div class="dijitReset dijitInline dijitMenuItem dijitMenuItemLabel" data-dojo-attach-point="focusNode"\n\t \trole="menuitem" tabIndex="-1">\n\t<span data-dojo-attach-point="containerNode,textDirNode"></span>\n</div>\n'}});
define(["dojo/_base/declare","./MenuItem","dojo/text!./templates/MenuBarItem.html"],function(a,c,b){b=a("dijit._MenuBarItemMixin",null,{templateString:b,_setIconClassAttr:null});a=a("dijit.MenuBarItem",[c,b],{});a._MenuBarItemMixin=b;return a});