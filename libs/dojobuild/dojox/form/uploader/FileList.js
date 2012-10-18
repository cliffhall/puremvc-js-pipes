//>>built
define("dojo/_base/fx,dojo/dom-style,dojo/dom-class,dojo/_base/declare,dojo/_base/lang,dojo/_base/array,dijit/_base/manager,dojox/form/uploader/Base".split(","),function(i,d,f,j,h,k,l,m){return j("dojox.form.uploader.FileList",[m],{uploaderId:"",uploader:null,headerIndex:"#",headerType:"Type",headerFilename:"File Name",headerFilesize:"Size",_upCheckCnt:0,rowAmt:0,templateString:'<div class="dojoxUploaderFileList"><div dojoAttachPoint="progressNode" class="dojoxUploaderFileListProgress"><div dojoAttachPoint="percentBarNode" class="dojoxUploaderFileListProgressBar"></div><div dojoAttachPoint="percentTextNode" class="dojoxUploaderFileListPercentText">0%</div></div><table class="dojoxUploaderFileListTable"><thead><tr class="dojoxUploaderFileListHeader"><th class="dojoxUploaderIndex">${headerIndex}</th><th class="dojoxUploaderIcon">${headerType}</th><th class="dojoxUploaderFileName">${headerFilename}</th><th class="dojoxUploaderFileSize" dojoAttachPoint="sizeHeader">${headerFilesize}</th></tr></thead><tbody class="dojoxUploaderFileListContent" dojoAttachPoint="listNode"></tbody></table><div>',
postCreate:function(){this.setUploader();this.hideProgress()},reset:function(){for(var a=0;a<this.rowAmt;a++)this.listNode.deleteRow(0);this.rowAmt=0},setUploader:function(){if(this.uploaderId||this.uploader)if(this.uploaderId&&!this.uploader)this.uploader=l.byId(this.uploaderId);else if(4<this._upCheckCnt)return;if(this.uploader){if(this.connect(this.uploader,"onChange","_onUploaderChange"),this.connect(this.uploader,"reset","reset"),this.connect(this.uploader,"onBegin",function(){this.showProgress(!0)}),
this.connect(this.uploader,"onProgress","_progress"),this.connect(this.uploader,"onComplete",function(){setTimeout(h.hitch(this,function(){this.hideProgress(!0)}),1250)}),!(this._fileSizeAvail={html5:1,flash:1}[this.uploader.uploadType]))this.sizeHeader.style.display="none"}else this._upCheckCnt++,setTimeout(h.hitch(this,"setUploader"),250)},hideProgress:function(a){this._hideShowProgress(a?{ani:!0,endDisp:"none",beg:15,end:0}:{endDisp:"none",ani:!1})},showProgress:function(a){this._hideShowProgress(a?
{ani:!0,endDisp:"block",beg:0,end:15}:{endDisp:"block",ani:!1})},_progress:function(a){this.percentTextNode.innerHTML=a.percent;d.set(this.percentBarNode,"width",a.percent)},_hideShowProgress:function(a){var e=this.progressNode,c=function(){d.set(e,"display",a.endDisp)};a.ani?(d.set(e,"display","block"),i.animateProperty({node:e,properties:{height:{start:a.beg,end:a.end,units:"px"}},onEnd:c}).play()):c()},_onUploaderChange:function(a){this.reset();k.forEach(a,function(a,c){this._addRow(c+1,this.getFileType(a.name),
a.name,a.size)},this)},_addRow:function(a,e,c,d){var b,g=this.listNode.insertRow(-1);b=g.insertCell(-1);f.add(b,"dojoxUploaderIndex");b.innerHTML=a;b=g.insertCell(-1);f.add(b,"dojoxUploaderIcon");b.innerHTML=e;b=g.insertCell(-1);f.add(b,"dojoxUploaderFileName");b.innerHTML=c;if(this._fileSizeAvail)b=g.insertCell(-1),f.add(b,"dojoxUploaderSize"),b.innerHTML=this.convertBytes(d).value;this.rowAmt++}})});