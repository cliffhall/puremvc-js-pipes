//>>built
define(["dojo/_base/declare","./a11y"],function(b,c){return b("dijit._DialogMixin",null,{execute:function(){},onCancel:function(){},onExecute:function(){},_onSubmit:function(){this.onExecute();this.execute(this.get("value"))},_getFocusItems:function(){var a=c._getTabNavigable(this.containerNode);this._firstFocusItem=a.lowest||a.first||this.closeButtonNode||this.domNode;this._lastFocusItem=a.last||a.highest||this._firstFocusItem}})});