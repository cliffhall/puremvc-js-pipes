//>>built
define(["dojo/_base/kernel","dojo/_base/lang","dojo/_base/declare","dojox/data/GoogleSearchStore"],function(e,f,g,h){e.experimental("dojox.data.GoogleFeedStore");return g("dojox.data.GoogleFeedStore",h.Search,{_type:"",_googleUrl:"http://ajax.googleapis.com/ajax/services/feed/load",_attributes:"title,link,author,published,content,summary,categories".split(","),_queryAttrs:{url:"q"},getFeedValue:function(a,b){var c=this.getFeedValues(a,b);return f.isArray(c)?c[0]:c},getFeedValues:function(a,b){return!this._feedMetaData?
b:this._feedMetaData[a]||b},_processItem:function(a,b){this.inherited(arguments);a.summary=a.contentSnippet;a.published=a.publishedDate},_getItems:function(a){return a.feed?(this._feedMetaData={title:a.feed.title,desc:a.feed.description,url:a.feed.link,author:a.feed.author},a.feed.entries):null},_createContent:function(a,b,c){var d=this.inherited(arguments);d.num=(c.count||10)+(c.start||0);return d}})});