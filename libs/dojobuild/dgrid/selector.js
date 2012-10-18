//>>built
define("dojo/_base/kernel,dojo/_base/array,dojo/on,dojo/aspect,dojo/_base/sniff,put-selector/put".split(","),function(p,q,u,l,r,m){return function(c,e){function n(d){return function(b){var f=b.rows,g=f.length,b="false",h;for(h=0;h<g;h++){var e=a.cell(f[h],c.id).element;if(e&&(e=(e.contents||e).input,!e.disabled))e.checked=d,e.setAttribute("aria-checked",d)}if("checkbox"==i.type){f=a.selection;g=!1;for(h in f)if(f[h]!=a.allSelected){g=!0;break}i.indeterminate=g;i.checked=a.allSelected;g?b="mixed":
a.allSelected&&(b="true");i.setAttribute("aria-checked",b)}}}function s(d){if("click"==d.type||32==d.keyCode||!r("opera")&&13==d.keyCode||0===d.keyCode){var b=a.row(d),f=a._lastSelected&&a.row(a._lastSelected);a._selectionTriggerEvent=d;if("radio"==e){if(!f||f.id!=b.id)a.clearSelection(),a.select(b,null,!0),a._lastSelected=b.element}else b?(d.shiftKey?n(!0)({rows:[b]}):f=null,f=d.shiftKey?f:null,a.select(f||b,b,f?void 0:null),a._lastSelected=b.element):(m(this,(a.allSelected?"!":".")+"dgrid-select-all"),
a[a.allSelected?"clearSelection":"selectAll"]());a._selectionTriggerEvent=null}}function o(){a._hasSelectorInputListener=!0;j.push(l.before(a,"_initSelectionEvents",function(){this.on(".dgrid-selector:click,.dgrid-selector:keydown",s)}));var d=a._handleSelect;a._handleSelect=function(a){this.cell(a).column!=c&&d.apply(this,arguments)};if("function"==typeof c.disabled){var b=a.allowSelect;a.allowSelect=function(a){return b.call(this,a)&&!c.disabled(a.data)}}j.push(a.on("dgrid-select",n(!0)));j.push(a.on("dgrid-deselect",
n(!1)))}var j=[],a,i;if(c.type)c.selectorType=c.type,p.deprecated("columndef.type","use columndef.selectorType instead","dgrid 1.0");c.selectorType=e=e||c.selectorType||"checkbox";c.sortable=!1;var k=c.disabled,t="function"==typeof e?e:function(d,b,f){var g=b.parentNode;m(g&&g.contents?g:b,".dgrid-selector");b=b.input||(b.input=m(b,"input[type="+e+"]",{tabIndex:isNaN(c.tabIndex)?-1:c.tabIndex,disabled:k&&("function"==typeof k?k(f):k),checked:d}));b.setAttribute("aria-checked",!!d);a._hasSelectorInputListener||
o();return b};l.after(c,"init",function(){a=c.grid});l.after(c,"destroy",function(){q.forEach(j,function(a){a.remove()});a._hasSelectorInputListener=!1});c.renderCell=function(d,b,c,g,h){b=(b=d&&a.row(d))&&a.selection[b.id];h&&("radio"==e||"string"==typeof d||!a.allowSelectAll)?(c.appendChild(document.createTextNode(d||"")),a._hasSelectorInputListener||o()):t(b,c,d)};c.renderHeaderCell=function(a){c.renderCell(c.label||{},null,a,null,!0);i=a.lastChild};return c}});