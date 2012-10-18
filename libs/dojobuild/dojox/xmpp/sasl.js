//>>built
define(["dijit","dojo","dojox","dojo/require!dojox/xmpp/util,dojo/AdapterRegistry,dojox/encoding/digests/MD5"],function(m,c,b){c.provide("dojox.xmpp.sasl");c.require("dojox.xmpp.util");c.require("dojo.AdapterRegistry");c.require("dojox.encoding.digests.MD5");b.xmpp.sasl.saslNS="urn:ietf:params:xml:ns:xmpp-sasl";c.declare("dojox.xmpp.sasl._Base",null,{mechanism:null,closeAuthTag:!0,constructor:function(a){this.session=a;this.startAuth()},startAuth:function(){var a=new b.string.Builder(b.xmpp.util.createElement("auth",
{xmlns:b.xmpp.sasl.saslNS,mechanism:this.mechanism},this.closeAuthTag));this.appendToAuth(a);this.session.dispatchPacket(a.toString())},appendToAuth:function(){},onChallenge:function(a){if(this.first_challenge)this.onSecondChallenge(a);else this.first_challenge=!0,this.onFirstChallenge(a)},onFirstChallenge:function(){},onSecondChallenge:function(){},onSuccess:function(){this.session.sendRestart()}});c.declare("dojox.xmpp.sasl.SunWebClientAuth",b.xmpp.sasl._Base,{mechanism:"SUN-COMMS-CLIENT-PROXY-AUTH"});
c.declare("dojox.xmpp.sasl.Plain",b.xmpp.sasl._Base,{mechanism:"PLAIN",closeAuthTag:!1,appendToAuth:function(a){var d=this.session.jid,c=this.session.jid.indexOf("@");-1!=c&&(d=this.session.jid.substring(0,c));d=this.session.jid+"\x00"+d+"\x00"+this.session.password;d=b.xmpp.util.Base64.encode(d);a.append(d);a.append("</auth>");delete this.session.password}});c.declare("dojox.xmpp.sasl.DigestMD5",b.xmpp.sasl._Base,{mechanism:"DIGEST-MD5",onFirstChallenge:function(a){var d=b.encoding.digests,c=b.encoding.digests.outputTypes,
g=function(a){return d.MD5(a,c.Hex)},e={realm:"",nonce:"",qop:"auth",maxbuf:65536};b.xmpp.util.Base64.decode(a.firstChild.nodeValue).replace(/([a-z]+)=([^,]+)/g,function(a,b,c){c=c.replace(/^"(.+)"$/,"$1");e[b]=c});var h="";switch(e.qop){case "auth-int":case "auth-conf":h=":00000000000000000000000000000000";case "auth":break;default:return!1}var a=d.MD5(1234567890*Math.random(),c.Hex),k="xmpp/"+this.session.domain,i=this.session.jid,f=this.session.jid.indexOf("@");-1!=f&&(i=this.session.jid.substring(0,
f));var i=b.xmpp.util.encodeJid(i),j=new b.string.Builder;j.append(d.MD5(i+":"+e.realm+":"+this.session.password,c.String),":",e.nonce+":"+a);delete this.session.password;var h=":"+k+h,l="AUTHENTICATE"+h,f=new b.string.Builder;f.append(g(j.toString()),":",e.nonce,":00000001:",a,":",e.qop,":");j=new b.string.Builder;j.append('username="',i,'",','realm="',e.realm,'",',"nonce=",e.nonce,",",'cnonce="',a,'",','nc="00000001",qop="',e.qop,'",digest-uri="',k,'",','response="',g(f.toString()+g(l)),'",charset="utf-8"');
a=new b.string.Builder(b.xmpp.util.createElement("response",{xmlns:b.xmpp.xmpp.SASL_NS},!1));a.append(b.xmpp.util.Base64.encode(j.toString()));a.append("</response>");this.rspauth=g(f.toString()+g(h));this.session.dispatchPacket(a.toString())},onSecondChallenge:function(a){this.rspauth==b.xmpp.util.Base64.decode(a.firstChild.nodeValue).substring(8)&&this.session.dispatchPacket((new b.string.Builder(b.xmpp.util.createElement("response",{xmlns:b.xmpp.xmpp.SASL_NS},!0))).toString())}});b.xmpp.sasl.registry=
new c.AdapterRegistry;b.xmpp.sasl.registry.register("SUN-COMMS-CLIENT-PROXY-AUTH",function(a){return"SUN-COMMS-CLIENT-PROXY-AUTH"==a},function(a,c){return new b.xmpp.sasl.SunWebClientAuth(c)});b.xmpp.sasl.registry.register("DIGEST-MD5",function(a){return"DIGEST-MD5"==a},function(a,c){return new b.xmpp.sasl.DigestMD5(c)});b.xmpp.sasl.registry.register("PLAIN",function(a){return"PLAIN"==a},function(a,c){return new b.xmpp.sasl.Plain(c)})});