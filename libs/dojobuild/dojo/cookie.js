//>>built
define(["./_base/kernel","./regexp"],function(c,h){c.cookie=function(c,f,b){var a=document.cookie,e;if(1==arguments.length)e=(e=a.match(RegExp("(?:^|; )"+h.escapeString(c)+"=([^;]*)")))?decodeURIComponent(e[1]):void 0;else{b=b||{};a=b.expires;if("number"==typeof a){var d=new Date;d.setTime(d.getTime()+864E5*a);a=b.expires=d}if(a&&a.toUTCString)b.expires=a.toUTCString();var f=encodeURIComponent(f),a=c+"="+f,g;for(g in b)a+="; "+g,d=b[g],!0!==d&&(a+="="+d);document.cookie=a}return e};c.cookie.isSupported=
function(){if(!("cookieEnabled"in navigator))this("__djCookieTest__","CookiesAllowed"),navigator.cookieEnabled="CookiesAllowed"==this("__djCookieTest__"),navigator.cookieEnabled&&this("__djCookieTest__","",{expires:-1});return navigator.cookieEnabled};return c.cookie});