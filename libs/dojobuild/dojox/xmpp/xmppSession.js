//>>built
define(["dijit","dojo","dojox","dojo/require!dojox/xmpp/TransportSession,dojox/xmpp/RosterService,dojox/xmpp/PresenceService,dojox/xmpp/UserService,dojox/xmpp/ChatService,dojox/xmpp/sasl"],function(l,h,d){h.provide("dojox.xmpp.xmppSession");h.require("dojox.xmpp.TransportSession");h.require("dojox.xmpp.RosterService");h.require("dojox.xmpp.PresenceService");h.require("dojox.xmpp.UserService");h.require("dojox.xmpp.ChatService");h.require("dojox.xmpp.sasl");d.xmpp.xmpp={STREAM_NS:"http://etherx.jabber.org/streams",
CLIENT_NS:"jabber:client",STANZA_NS:"urn:ietf:params:xml:ns:xmpp-stanzas",SASL_NS:"urn:ietf:params:xml:ns:xmpp-sasl",BIND_NS:"urn:ietf:params:xml:ns:xmpp-bind",SESSION_NS:"urn:ietf:params:xml:ns:xmpp-session",BODY_NS:"http://jabber.org/protocol/httpbind",XHTML_BODY_NS:"http://www.w3.org/1999/xhtml",XHTML_IM_NS:"http://jabber.org/protocol/xhtml-im",INACTIVE:"Inactive",CONNECTED:"Connected",ACTIVE:"Active",TERMINATE:"Terminate",LOGIN_FAILURE:"LoginFailure",INVALID_ID:-1,NO_ID:0,error:{BAD_REQUEST:"bad-request",
CONFLICT:"conflict",FEATURE_NOT_IMPLEMENTED:"feature-not-implemented",FORBIDDEN:"forbidden",GONE:"gone",INTERNAL_SERVER_ERROR:"internal-server-error",ITEM_NOT_FOUND:"item-not-found",ID_MALFORMED:"jid-malformed",NOT_ACCEPTABLE:"not-acceptable",NOT_ALLOWED:"not-allowed",NOT_AUTHORIZED:"not-authorized",SERVICE_UNAVAILABLE:"service-unavailable",SUBSCRIPTION_REQUIRED:"subscription-required",UNEXPECTED_REQUEST:"unexpected-request"}};d.xmpp.xmppSession=function(a){this.roster=[];this.chatRegister=[];this._iqId=
Math.round(1E9*Math.random());a&&h.isObject(a)&&h.mixin(this,a);this.session=new d.xmpp.TransportSession(a);h.connect(this.session,"onReady",this,"onTransportReady");h.connect(this.session,"onTerminate",this,"onTransportTerminate");h.connect(this.session,"onProcessProtocolResponse",this,"processProtocolResponse")};h.extend(d.xmpp.xmppSession,{roster:[],chatRegister:[],_iqId:0,open:function(a,b,c){if(a){if(this.jid=a,-1==a.indexOf("@"))this.jid=this.jid+"@"+this.domain}else throw Error("User id cannot be null");
if(b)this.password=b;if(c)this.resource=c;this.session.open()},close:function(){this.state=d.xmpp.xmpp.TERMINATE;this.session.close(d.xmpp.util.createElement("presence",{type:"unavailable",xmlns:d.xmpp.xmpp.CLIENT_NS},!0))},processProtocolResponse:function(a){var b=a.nodeName,c=b.indexOf(":");0<c&&(b=b.substring(c+1));switch(b){case "iq":case "presence":case "message":case "features":this[b+"Handler"](a);break;default:a.getAttribute("xmlns")==d.xmpp.xmpp.SASL_NS&&this.saslHandler(a)}},messageHandler:function(a){switch(a.getAttribute("type")){case "chat":this.chatHandler(a);
break;default:this.simpleMessageHandler(a)}},iqHandler:function(a){"set"==a.getAttribute("type")?this.iqSetHandler(a):a.getAttribute("type")},presenceHandler:function(a){switch(a.getAttribute("type")){case "subscribe":this.presenceSubscriptionRequest(a.getAttribute("from"));break;case "subscribed":case "unsubscribed":break;case "error":this.processXmppError(a);break;default:this.presenceUpdate(a)}},featuresHandler:function(a){var b=[],c=!1,e=!1;if(a.hasChildNodes())for(var f=0;f<a.childNodes.length;f++){var g=
a.childNodes[f];switch(g.nodeName){case "mechanisms":for(var h=0;h<g.childNodes.length;h++)b.push(g.childNodes[h].firstChild.nodeValue);break;case "bind":c=!0;break;case "session":e=!0}}if(this.state==d.xmpp.xmpp.CONNECTED)if(this.auth)c&&this.bindResource(e);else for(f=0;f<b.length;f++)try{this.auth=d.xmpp.sasl.registry.match(b[f],this);break}catch(j){}},saslHandler:function(a){if("success"==a.nodeName)this.auth.onSuccess();else if("challenge"==a.nodeName)this.auth.onChallenge(a);else a.hasChildNodes()&&
(this.onLoginFailure(a.firstChild.nodeName),this.session.setState("Terminate",a.firstChild.nodeName))},sendRestart:function(){this.session._sendRestart()},chatHandler:function(a){var b,c={from:a.getAttribute("from"),to:a.getAttribute("to")};for(b=0;b<a.childNodes.length;b++){var e=a.childNodes[b];if(e.hasChildNodes())switch(e.nodeName){case "thread":c.chatid=e.firstChild.nodeValue;break;case "body":if(!e.getAttribute("xmlns")||""==e.getAttribute("xmlns"))c.body=e.firstChild.nodeValue;break;case "subject":c.subject=
e.firstChild.nodeValue;case "html":if(e.getAttribute("xmlns")==d.xmpp.xmpp.XHTML_IM_NS)c.xhtml=e.getElementsByTagName("body")[0]}}a=-1;if(c.chatid)for(b=0;b<this.chatRegister.length;b++){if((e=this.chatRegister[b])&&e.chatid==c.chatid){a=b;break}}else for(b=0;b<this.chatRegister.length;b++)(e=this.chatRegister[b])&&e.uid==this.getBareJid(c.from)&&(a=b);if(c.body&&""!=c.body||c.xhtml)-1<a?(b=this.chatRegister[a],b.recieveMessage(c)):(b=new d.xmpp.ChatService,b.uid=this.getBareJid(c.from),b.chatid=
c.chatid,b.firstMessage=!0,this.useChatState=!1,this.registerChatInstance(b,c))},simpleMessageHandler:function(){},registerChatInstance:function(a,b){a.setSession(this);this.chatRegister.push(a);this.onRegisterChatInstance(a,b);a.recieveMessage(b,!0)},iqSetHandler:function(a){if(a.hasChildNodes()){var b=a.firstChild;switch(b.nodeName){case "query":"jabber:iq:roster"==b.getAttribute("xmlns")&&(this.rosterSetHandler(b),this.sendIqResult(a.getAttribute("id"),a.getAttribute("from")))}}},sendIqResult:function(a,
b){this.dispatchPacket(d.xmpp.util.createElement("iq",{id:a,to:b||this.domain,type:"result",from:this.jid+"/"+this.resource},!0))},rosterSetHandler:function(a){for(var b=0;b<a.childNodes.length;b++){var c=a.childNodes[b];if("item"==c.nodeName){for(var e=!1,f=-1,g=null,k=null,j=0;j<this.roster.length;j++){var i=this.roster[j];if(c.getAttribute("jid")==i.jid){e=!0;if("remove"==c.getAttribute("subscription")){g={id:i.jid,name:i.name,groups:[]};for(f=0;f<i.groups.length;f++)g.groups.push(i.groups[f]);
this.roster.splice(j,1);f=d.xmpp.roster.REMOVED}else{k=h.clone(i);if(g=c.getAttribute("name"))this.roster[j].name=g;i.groups=[];if(c.getAttribute("subscription"))i.status=c.getAttribute("subscription");i.substatus=d.xmpp.presence.SUBSCRIPTION_SUBSTATUS_NONE;if("subscribe"==c.getAttribute("ask"))i.substatus=d.xmpp.presence.SUBSCRIPTION_REQUEST_PENDING;for(f=0;f<c.childNodes.length;f++)j=c.childNodes[f],"group"==j.nodeName&&j.hasChildNodes()&&i.groups.push(j.firstChild.nodeValue);g=i;f=d.xmpp.roster.CHANGED}break}}if(!e&&
"remove"!=c.getAttribute("subscription"))g=i=this.createRosterEntry(c),f=d.xmpp.roster.ADDED;switch(f){case d.xmpp.roster.ADDED:this.onRosterAdded(g);break;case d.xmpp.roster.REMOVED:this.onRosterRemoved(g);break;case d.xmpp.roster.CHANGED:this.onRosterChanged(g,k)}}}},presenceUpdate:function(a){if(!(a.getAttribute("to")&&this.getBareJid(a.getAttribute("to"))!=this.jid)){var b=this.getResourceFromJid(a.getAttribute("from")),b={from:this.getBareJid(a.getAttribute("from")),resource:b,show:d.xmpp.presence.STATUS_ONLINE,
priority:5,hasAvatar:!1};if("unavailable"==a.getAttribute("type"))b.show=d.xmpp.presence.STATUS_OFFLINE;for(var c=0;c<a.childNodes.length;c++){var e=a.childNodes[c];if(e.hasChildNodes())switch(e.nodeName){case "status":case "show":b[e.nodeName]=e.firstChild.nodeValue;break;case "priority":b.priority=parseInt(e.firstChild.nodeValue);break;case "x":if(e.firstChild&&e.firstChild.firstChild&&""!=e.firstChild.firstChild.nodeValue)b.avatarHash=e.firstChild.firstChild.nodeValue,b.hasAvatar=!0}}this.onPresenceUpdate(b)}},
retrieveRoster:function(){var a={id:this.getNextIqId(),from:this.jid+"/"+this.resource,type:"get"},b=new d.string.Builder(d.xmpp.util.createElement("iq",a,!1));b.append(d.xmpp.util.createElement("query",{xmlns:"jabber:iq:roster"},!0));b.append("</iq>");this.dispatchPacket(b,"iq",a.id).addCallback(this,"onRetrieveRoster")},getRosterIndex:function(a){-1==a.indexOf("@")&&(a+="@"+this.domain);for(var b=0;b<this.roster.length;b++)if(a==this.roster[b].jid)return b;return-1},createRosterEntry:function(a){var b=
{name:a.getAttribute("name"),jid:a.getAttribute("jid"),groups:[],status:d.xmpp.presence.SUBSCRIPTION_NONE,substatus:d.xmpp.presence.SUBSCRIPTION_SUBSTATUS_NONE};if(!b.name)b.name=b.id;for(var c=0;c<a.childNodes.length;c++){var e=a.childNodes[c];"group"==e.nodeName&&e.hasChildNodes()&&b.groups.push(e.firstChild.nodeValue)}if(a.getAttribute("subscription"))b.status=a.getAttribute("subscription");if("subscribe"==a.getAttribute("ask"))b.substatus=d.xmpp.presence.SUBSCRIPTION_REQUEST_PENDING;return b},
bindResource:function(a){var b={id:this.getNextIqId(),type:"set"},c=new d.string.Builder(d.xmpp.util.createElement("iq",b,!1));c.append(d.xmpp.util.createElement("bind",{xmlns:d.xmpp.xmpp.BIND_NS},!1));this.resource&&(c.append(d.xmpp.util.createElement("resource")),c.append(this.resource),c.append("</resource>"));c.append("</bind></iq>");this.dispatchPacket(c,"iq",b.id).addCallback(this,function(b){this.onBindResource(b,a);return b})},getNextIqId:function(){return"im_"+this._iqId++},presenceSubscriptionRequest:function(a){this.onSubscriptionRequest(a)},
dispatchPacket:function(a,b,c){if("Terminate"!=this.state)return this.session.dispatchPacket(a,b,c)},setState:function(a,b){if(this.state!=a){if(this["on"+a])this["on"+a](a,this.state,b);this.state=a}},search:function(a,b,c){var b={id:this.getNextIqId(),"xml:lang":this.lang,type:"set",from:this.jid+"/"+this.resource,to:b},e=new d.string.Builder(d.xmpp.util.createElement("iq",b,!1));e.append(d.xmpp.util.createElement("query",{xmlns:"jabber:iq:search"},!1));e.append(d.xmpp.util.createElement(c,{},!1));
e.append(a);e.append("</").append(c).append(">");e.append("</query></iq>");this.dispatchPacket(e.toString,"iq",b.id).addCallback(this,"_onSearchResults")},_onSearchResults:function(a){if("result"==a.getAttribute("type")&&a.hasChildNodes())this.onSearchResults([])},onLogin:function(){this.retrieveRoster()},onLoginFailure:function(){},onBindResource:function(a,b){if("result"==a.getAttribute("type")){if(a.hasChildNodes()&&"bind"==a.firstChild.nodeName){var c=a.firstChild;if(c.hasChildNodes()&&"jid"==
c.firstChild.nodeName&&c.firstChild.hasChildNodes())c=c.firstChild.firstChild.nodeValue,this.jid=this.getBareJid(c),this.resource=this.getResourceFromJid(c);if(b){var c={id:this.getNextIqId(),type:"set"},e=new d.string.Builder(d.xmpp.util.createElement("iq",c,!1));e.append(d.xmpp.util.createElement("session",{xmlns:d.xmpp.xmpp.SESSION_NS},!0));e.append("</iq>");this.dispatchPacket(e,"iq",c.id).addCallback(this,"onBindSession");return}}this.onLogin()}else if("error"==a.getAttribute("type"))this.onLoginFailure(this.processXmppError(a))},
onBindSession:function(a){if("error"==a.getAttribute("type"))this.onLoginFailure(this.processXmppError(a));else this.onLogin()},onSearchResults:function(){},onRetrieveRoster:function(a){if("result"==a.getAttribute("type")&&a.hasChildNodes()){var b=a.getElementsByTagName("query")[0];if("jabber:iq:roster"==b.getAttribute("xmlns"))for(var c=0;c<b.childNodes.length;c++)"item"==b.childNodes[c].nodeName&&(this.roster[c]=this.createRosterEntry(b.childNodes[c]))}else a.getAttribute("type");this.setState(d.xmpp.xmpp.ACTIVE);
this.onRosterUpdated();return a},onRosterUpdated:function(){},onSubscriptionRequest:function(){},onPresenceUpdate:function(){},onTransportReady:function(){this.setState(d.xmpp.xmpp.CONNECTED);this.rosterService=new d.xmpp.RosterService(this);this.presenceService=new d.xmpp.PresenceService(this);this.userService=new d.xmpp.UserService(this)},onTransportTerminate:function(a,b,c){this.setState(d.xmpp.xmpp.TERMINATE,c)},onConnected:function(){},onTerminate:function(){},onActive:function(){},onRegisterChatInstance:function(){},
onRosterAdded:function(){},onRosterRemoved:function(){},onRosterChanged:function(){},processXmppError:function(a){for(var b={stanzaType:a.nodeName,id:a.getAttribute("id")},c=0;c<a.childNodes.length;c++){var e=a.childNodes[c];switch(e.nodeName){case "error":b.errorType=e.getAttribute("type");for(var f=0;f<e.childNodes.length;f++){var g=e.childNodes[f];if("text"==g.nodeName&&g.getAttribute("xmlns")==d.xmpp.xmpp.STANZA_NS&&g.hasChildNodes())b.message=g.firstChild.nodeValue;else if(g.getAttribute("xmlns")==
d.xmpp.xmpp.STANZA_NS&&!g.hasChildNodes())b.condition=g.nodeName}}}return b},sendStanzaError:function(a,b,c,e,f,g){f={type:"error"};if(b)f.to=b;if(c)f.id=c;b=new d.string.Builder(d.xmpp.util.createElement(a,f,!1));b.append(d.xmpp.util.createElement("error",{type:e},!1));b.append(d.xmpp.util.createElement("condition",{xmlns:d.xmpp.xmpp.STANZA_NS},!0));g&&(b.append(d.xmpp.util.createElement("text",{xmlns:d.xmpp.xmpp.STANZA_NS,"xml:lang":this.lang},!1)),b.append(g).append("</text>"));b.append("</error></").append(a).append(">");
this.dispatchPacket(b.toString())},getBareJid:function(a){var b=a.indexOf("/");return-1!=b?a.substring(0,b):a},getResourceFromJid:function(a){var b=a.indexOf("/");return-1!=b?a.substring(b+1,a.length):""}})});