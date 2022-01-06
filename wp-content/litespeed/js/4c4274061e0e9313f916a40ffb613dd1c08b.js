!function(e,I,S){var T=e.setTimeout,D={};function w(e){var t=e.required_features,r={};function i(e,t,i){var n={chunks:"slice_blob",jpgresize:"send_binary_string",pngresize:"send_binary_string",progress:"report_upload_progress",multi_selection:"select_multiple",dragdrop:"drag_and_drop",drop_element:"drag_and_drop",headers:"send_custom_headers",urlstream_upload:"send_binary_string",canSendBinary:"send_binary",triggerDialog:"summon_file_dialog"};n[e]?r[n[e]]=t:i||(r[e]=t)}return"string"==typeof t?F.each(t.split(/\s*,\s*/),function(e){i(e,!0)}):"object"==typeof t?F.each(t,function(e,t){i(t,e)}):!0===t&&(0<e.chunk_size&&(r.slice_blob=!0),!e.resize.enabled&&e.multipart||(r.send_binary_string=!0),F.each(e,function(e,t){i(t,!!e,!0)})),e.runtimes="html5,html4",r}var t,F={VERSION:"2.1.9",STOPPED:1,STARTED:2,QUEUED:1,UPLOADING:2,FAILED:4,DONE:5,GENERIC_ERROR:-100,HTTP_ERROR:-200,IO_ERROR:-300,SECURITY_ERROR:-400,INIT_ERROR:-500,FILE_SIZE_ERROR:-600,FILE_EXTENSION_ERROR:-601,FILE_DUPLICATE_ERROR:-602,IMAGE_FORMAT_ERROR:-700,MEMORY_ERROR:-701,IMAGE_DIMENSIONS_ERROR:-702,mimeTypes:I.mimes,ua:I.ua,typeOf:I.typeOf,extend:I.extend,guid:I.guid,getAll:function(e){for(var t,i=[],n=(e="array"!==F.typeOf(e)?[e]:e).length;n--;)(t=F.get(e[n]))&&i.push(t);return i.length?i:null},get:I.get,each:I.each,getPos:I.getPos,getSize:I.getSize,xmlEncode:function(e){var t={"<":"lt",">":"gt","&":"amp",'"':"quot","'":"#39"};return e&&(""+e).replace(/[<>&\"\']/g,function(e){return t[e]?"&"+t[e]+";":e})},toArray:I.toArray,inArray:I.inArray,addI18n:I.addI18n,translate:I.translate,isEmptyObj:I.isEmptyObj,hasClass:I.hasClass,addClass:I.addClass,removeClass:I.removeClass,getStyle:I.getStyle,addEvent:I.addEvent,removeEvent:I.removeEvent,removeAllEvents:I.removeAllEvents,cleanName:function(e){for(var t=[/[\300-\306]/g,"A",/[\340-\346]/g,"a",/\307/g,"C",/\347/g,"c",/[\310-\313]/g,"E",/[\350-\353]/g,"e",/[\314-\317]/g,"I",/[\354-\357]/g,"i",/\321/g,"N",/\361/g,"n",/[\322-\330]/g,"O",/[\362-\370]/g,"o",/[\331-\334]/g,"U",/[\371-\374]/g,"u"],i=0;i<t.length;i+=2)e=e.replace(t[i],t[i+1]);return e=(e=e.replace(/\s+/g,"_")).replace(/[^a-z0-9_\-\.]+/gi,"")},buildUrl:function(e,t){var i="";return F.each(t,function(e,t){i+=(i?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(e)}),i&&(e+=(0<e.indexOf("?")?"&":"?")+i),e},formatSize:function(e){if(e===S||/\D/.test(e))return F.translate("N/A");function t(e,t){return Math.round(e*Math.pow(10,t))/Math.pow(10,t)}var i=Math.pow(1024,4);return i<e?t(e/i,1)+" "+F.translate("tb"):e>(i/=1024)?t(e/i,1)+" "+F.translate("gb"):e>(i/=1024)?t(e/i,1)+" "+F.translate("mb"):1024<e?Math.round(e/1024)+" "+F.translate("kb"):e+" "+F.translate("b")},parseSize:I.parseSizeStr,predictRuntime:function(e,t){var i=new F.Uploader(e),e=I.Runtime.thatCan(i.getOption().required_features,t||e.runtimes);return i.destroy(),e},addFileFilter:function(e,t){D[e]=t}};F.addFileFilter("mime_types",function(e,t,i){e.length&&!e.regexp.test(t.name)?(this.trigger("Error",{code:F.FILE_EXTENSION_ERROR,message:F.translate("File extension error."),file:t}),i(!1)):i(!0)}),F.addFileFilter("max_file_size",function(e,t,i){e=F.parseSize(e),void 0!==t.size&&e&&t.size>e?(this.trigger("Error",{code:F.FILE_SIZE_ERROR,message:F.translate("File size error."),file:t}),i(!1)):i(!0)}),F.addFileFilter("prevent_duplicates",function(e,t,i){if(e)for(var n=this.files.length;n--;)if(t.name===this.files[n].name&&t.size===this.files[n].size)return this.trigger("Error",{code:F.FILE_DUPLICATE_ERROR,message:F.translate("Duplicate file error."),file:t}),void i(!1);i(!0)}),F.Uploader=function(e){var u,i,n,p,t=F.guid(),l=[],h={},o=[],d=[],c=!1;function r(){var e,t,i=0;if(this.state==F.STARTED){for(t=0;t<l.length;t++)e||l[t].status!=F.QUEUED?i++:(e=l[t],this.trigger("BeforeUpload",e)&&(e.status=F.UPLOADING,this.trigger("UploadFile",e)));i==l.length&&(this.state!==F.STOPPED&&(this.state=F.STOPPED,this.trigger("StateChanged")),this.trigger("UploadComplete",l))}}function s(e){e.percent=0<e.size?Math.ceil(e.loaded/e.size*100):100,a()}function a(){var e,t;for(n.reset(),e=0;e<l.length;e++)(t=l[e]).size!==S?(n.size+=t.origSize,n.loaded+=t.loaded*t.origSize/t.size):n.size=S,t.status==F.DONE?n.uploaded++:t.status==F.FAILED?n.failed++:n.queued++;n.size===S?n.percent=0<l.length?Math.ceil(n.uploaded/l.length*100):0:(n.bytesPerSec=Math.ceil(n.loaded/((+new Date-i||1)/1e3)),n.percent=0<n.size?Math.ceil(n.loaded/n.size*100):0)}function f(){var e=o[0]||d[0];return!!e&&e.getRuntime().uid}function g(n,e){var r=this,s=0,t=[],a={runtime_order:n.runtimes,required_caps:n.required_features,preferred_caps:h};F.each(n.runtimes.split(/\s*,\s*/),function(e){n[e]&&(a[e]=n[e])}),n.browse_button&&F.each(n.browse_button,function(i){t.push(function(t){var e=new I.FileInput(F.extend({},a,{accept:n.filters.mime_types,name:n.file_data_name,multiple:n.multi_selection,container:n.container,browse_button:i}));e.onready=function(){var e=I.Runtime.getInfo(this.ruid);I.extend(r.features,{chunks:e.can("slice_blob"),multipart:e.can("send_multipart"),multi_selection:e.can("select_multiple")}),s++,o.push(this),t()},e.onchange=function(){r.addFile(this.files)},e.bind("mouseenter mouseleave mousedown mouseup",function(e){c||(n.browse_button_hover&&("mouseenter"===e.type?I.addClass(i,n.browse_button_hover):"mouseleave"===e.type&&I.removeClass(i,n.browse_button_hover)),n.browse_button_active&&("mousedown"===e.type?I.addClass(i,n.browse_button_active):"mouseup"===e.type&&I.removeClass(i,n.browse_button_active)))}),e.bind("mousedown",function(){r.trigger("Browse")}),e.bind("error runtimeerror",function(){e=null,t()}),e.init()})}),n.drop_element&&F.each(n.drop_element,function(i){t.push(function(t){var e=new I.FileDrop(F.extend({},a,{drop_zone:i}));e.onready=function(){var e=I.Runtime.getInfo(this.ruid);I.extend(r.features,{chunks:e.can("slice_blob"),multipart:e.can("send_multipart"),dragdrop:e.can("drag_and_drop")}),s++,d.push(this),t()},e.ondrop=function(){r.addFile(this.files)},e.bind("error runtimeerror",function(){e=null,t()}),e.init()})}),I.inSeries(t,function(){"function"==typeof e&&e(s)})}function _(e,t,i){var a=this,o=!1;function n(e,t,i){var n,r,s=u[e];switch(e){case"max_file_size":"max_file_size"===e&&(u.max_file_size=u.filters.max_file_size=t);break;case"chunk_size":(t=F.parseSize(t))&&(u[e]=t,u.send_file_name=!0);break;case"multipart":(u[e]=t)||(u.send_file_name=!0);break;case"unique_names":(u[e]=t)&&(u.send_file_name=!0);break;case"filters":"array"===F.typeOf(t)&&(t={mime_types:t}),i?F.extend(u.filters,t):u.filters=t,t.mime_types&&(u.filters.mime_types.regexp=(n=u.filters.mime_types,r=[],F.each(n,function(e){F.each(e.extensions.split(/,/),function(e){/^\s*\*\s*$/.test(e)?r.push("\\.*"):r.push("\\."+e.replace(new RegExp("["+"/^$.*+?|()[]{}\\".replace(/./g,"\\$&")+"]","g"),"\\$&"))})}),new RegExp("("+r.join("|")+")$","i")));break;case"resize":i?F.extend(u.resize,t,{enabled:!0}):u.resize=t;break;case"prevent_duplicates":u.prevent_duplicates=u.filters.prevent_duplicates=!!t;break;case"container":case"browse_button":case"drop_element":t="container"===e?F.get(t):F.getAll(t);case"runtimes":case"multi_selection":u[e]=t,i||(o=!0);break;default:u[e]=t}i||a.trigger("OptionChanged",e,t,s)}"object"==typeof e?F.each(e,function(e,t){n(t,e,i)}):n(e,t,i),i?(u.required_features=w(F.extend({},u)),h=w(F.extend({},u,{required_features:!0}))):o&&(a.trigger("Destroy"),g.call(a,u,function(e){e?(a.runtime=I.Runtime.getInfo(f()).type,a.trigger("Init",{runtime:a.runtime}),a.trigger("PostInit")):a.trigger("Error",{code:F.INIT_ERROR,message:F.translate("Init error.")})}))}function m(e,t){var i;e.settings.unique_names&&(i="part",(e=t.name.match(/\.([^.]+)$/))&&(i=e[1]),t.target_name=t.id+"."+i)}function b(r,s){var a,o=r.settings.url,u=r.settings.chunk_size,l=r.settings.max_retries,d=r.features,c=0;function f(){0<l--?T(g,1e3):(s.loaded=c,r.trigger("Error",{code:F.HTTP_ERROR,message:F.translate("HTTP Error."),file:s,response:p.responseText,status:p.status,responseHeaders:p.getAllResponseHeaders()}))}function g(){var e,i,t,n={};s.status===F.UPLOADING&&r.state!==F.STOPPED&&(r.settings.send_file_name&&(n.name=s.target_name||s.name),e=u&&d.chunks&&a.size>u?(t=Math.min(u,a.size-c),a.slice(c,c+t)):(t=a.size,a),u&&d.chunks&&(r.settings.send_chunk_number?(n.chunk=Math.ceil(c/u),n.chunks=Math.ceil(a.size/u)):(n.offset=c,n.total=a.size)),(p=new I.XMLHttpRequest).upload&&(p.upload.onprogress=function(e){s.loaded=Math.min(s.size,c+e.loaded),r.trigger("UploadProgress",s)}),p.onload=function(){400<=p.status?f():(l=r.settings.max_retries,t<a.size?(e.destroy(),c+=t,s.loaded=Math.min(c,a.size),r.trigger("ChunkUploaded",s,{offset:s.loaded,total:a.size,response:p.responseText,status:p.status,responseHeaders:p.getAllResponseHeaders()}),"Android Browser"===I.Env.browser&&r.trigger("UploadProgress",s)):s.loaded=s.size,e=i=null,!c||c>=a.size?(s.size!=s.origSize&&(a.destroy(),a=null),r.trigger("UploadProgress",s),s.status=F.DONE,r.trigger("FileUploaded",s,{response:p.responseText,status:p.status,responseHeaders:p.getAllResponseHeaders()})):T(g,1))},p.onerror=function(){f()},p.onloadend=function(){this.destroy(),p=null},r.settings.multipart&&d.multipart?(p.open("../glossary/post/index.html",o,!0),F.each(r.settings.headers,function(e,t){p.setRequestHeader(t,e)}),i=new I.FormData,F.each(F.extend(n,r.settings.multipart_params),function(e,t){i.append(t,e)}),i.append(r.settings.file_data_name,e),p.send(i,{runtime_order:r.settings.runtimes,required_caps:r.settings.required_features,preferred_caps:h})):(o=F.buildUrl(r.settings.url,F.extend(n,r.settings.multipart_params)),p.open("../glossary/post/index.html",o,!0),p.setRequestHeader("Content-Type","application/octet-stream"),F.each(r.settings.headers,function(e,t){p.setRequestHeader(t,e)}),p.send(e,{runtime_order:r.settings.runtimes,required_caps:r.settings.required_features,preferred_caps:h})))}s.loaded&&(c=s.loaded=u?u*Math.floor(s.loaded/u):0),a=s.getSource(),r.settings.resize.enabled&&function(e,t){if(e.ruid){e=I.Runtime.getInfo(e.ruid);if(e)return e.can(t)}}(a,"send_binary_string")&&~I.inArray(a.type,["image/jpeg","image/png"])?function(t,e,i){var n=new I.Image;try{n.onload=function(){if(e.width>this.width&&e.height>this.height&&e.quality===S&&e.preserve_headers&&!e.crop)return this.destroy(),i(t);n.downsize(e.width,e.height,e.crop,e.preserve_headers)},n.onresize=function(){i(this.getAsBlob(t.type,e.quality)),this.destroy()},n.onerror=function(){i(t)},n.load(t)}catch(e){i(t)}}.call(this,a,r.settings.resize,function(e){a=e,s.size=e.size,g()}):g()}function R(e,t){s(t)}function E(e){if(e.state==F.STARTED)i=+new Date;else if(e.state==F.STOPPED)for(var t=e.files.length-1;0<=t;t--)e.files[t].status==F.UPLOADING&&(e.files[t].status=F.QUEUED,a())}function y(){p&&p.abort()}function v(e){a(),T(function(){r.call(e)},1)}function z(e,t){t.code===F.INIT_ERROR?e.destroy():t.code===F.HTTP_ERROR&&(t.file.status=F.FAILED,s(t.file),e.state==F.STARTED&&(e.trigger("CancelUpload"),T(function(){r.call(e)},1)))}function O(e){e.stop(),F.each(l,function(e){e.destroy()}),l=[],o.length&&(F.each(o,function(e){e.destroy()}),o=[]),d.length&&(F.each(d,function(e){e.destroy()}),d=[]),c=!(h={}),i=p=null,n.reset()}u={runtimes:I.Runtime.order,max_retries:0,chunk_size:0,multipart:!0,multi_selection:!0,file_data_name:"file",filters:{mime_types:[],prevent_duplicates:!1,max_file_size:0},resize:{enabled:!1,preserve_headers:!0,crop:!1},send_file_name:!0,send_chunk_number:!0},_.call(this,e,null,!0),n=new F.QueueProgress,F.extend(this,{id:t,uid:t,state:F.STOPPED,features:{},runtime:null,files:l,settings:u,total:n,init:function(){var t,i=this,e=i.getOption("preinit");return"function"==typeof e?e(i):F.each(e,function(e,t){i.bind(t,e)}),function(){this.bind("FilesAdded FilesRemoved",function(e){e.trigger("QueueChanged"),e.refresh()}),this.bind("CancelUpload",y),this.bind("BeforeUpload",m),this.bind("UploadFile",b),this.bind("UploadProgress",R),this.bind("StateChanged",E),this.bind("QueueChanged",a),this.bind("Error",z),this.bind("FileUploaded",v),this.bind("Destroy",O)}.call(i),F.each(["container","browse_button","drop_element"],function(e){if(null===i.getOption(e))return!(t={code:F.INIT_ERROR,message:F.translate("'%' specified, but cannot be found.")})}),t?i.trigger("Error",t):u.browse_button||u.drop_element?void g.call(i,u,function(e){var t=i.getOption("init");"function"==typeof t?t(i):F.each(t,function(e,t){i.bind(t,e)}),e?(i.runtime=I.Runtime.getInfo(f()).type,i.trigger("Init",{runtime:i.runtime}),i.trigger("PostInit")):i.trigger("Error",{code:F.INIT_ERROR,message:F.translate("Init error.")})}):i.trigger("Error",{code:F.INIT_ERROR,message:F.translate("You must specify either 'browse_button' or 'drop_element'.")})},setOption:function(e,t){_.call(this,e,t,!this.runtime)},getOption:function(e){return e?u[e]:u},refresh:function(){o.length&&F.each(o,function(e){e.trigger("Refresh")}),this.trigger("Refresh")},start:function(){this.state!=F.STARTED&&(this.state=F.STARTED,this.trigger("StateChanged"),r.call(this))},stop:function(){this.state!=F.STOPPED&&(this.state=F.STOPPED,this.trigger("StateChanged"),this.trigger("CancelUpload"))},disableBrowse:function(){c=arguments[0]===S||arguments[0],o.length&&F.each(o,function(e){e.disable(c)}),this.trigger("DisableBrowse",c)},getFile:function(e){for(var t=l.length-1;0<=t;t--)if(l[t].id===e)return l[t]},addFile:function(e,n){var r,s=this,a=[],o=[];r=f(),function e(i){var t=I.typeOf(i);if(i instanceof I.File){if(!i.ruid&&!i.isDetached()){if(!r)return!1;i.ruid=r,i.connectRuntime(r)}e(new F.File(i))}else i instanceof I.Blob?(e(i.getSource()),i.destroy()):i instanceof F.File?(n&&(i.name=n),a.push(function(t){var n,e,r;n=i,e=function(e){e||(l.push(i),o.push(i),s.trigger("FileFiltered",i)),T(t,1)},r=[],I.each(s.settings.filters,function(e,i){D[i]&&r.push(function(t){D[i].call(s,e,n,function(e){t(!e)})})}),I.inSeries(r,e)})):-1!==I.inArray(t,["file","blob"])?e(new I.File(null,i)):"node"===t&&"filelist"===I.typeOf(i.files)?I.each(i.files,e):"array"===t&&(n=null,I.each(i,e))}(e),a.length&&I.inSeries(a,function(){o.length&&s.trigger("FilesAdded",o)})},removeFile:function(e){for(var t="string"==typeof e?e:e.id,i=l.length-1;0<=i;i--)if(l[i].id===t)return this.splice(i,1)[0]},splice:function(e,t){var t=l.splice(e===S?0:e,t===S?l.length:t),i=!1;return this.state==F.STARTED&&(F.each(t,function(e){if(e.status===F.UPLOADING)return!(i=!0)}),i&&this.stop()),this.trigger("FilesRemoved",t),F.each(t,function(e){e.destroy()}),i&&this.start(),t},dispatchEvent:function(e){var t,i;if(e=e.toLowerCase(),t=this.hasEventListener(e)){t.sort(function(e,t){return t.priority-e.priority}),(i=[].slice.call(arguments)).shift(),i.unshift(this);for(var n=0;n<t.length;n++)if(!1===t[n].fn.apply(t[n].scope,i))return!1}return!0},bind:function(e,t,i,n){F.Uploader.prototype.bind.call(this,e,t,n,i)},destroy:function(){this.trigger("Destroy"),u=n=null,this.unbindAll()}})},F.Uploader.prototype=I.EventTarget.instance,F.File=(t={},function(e){F.extend(this,{id:F.guid(),name:e.name||e.fileName,type:e.type||"",size:e.size||e.fileSize,origSize:e.size||e.fileSize,loaded:0,percent:0,status:F.QUEUED,lastModifiedDate:e.lastModifiedDate||(new Date).toLocaleString(),getNative:function(){var e=this.getSource().getSource();return-1!==I.inArray(I.typeOf(e),["blob","file"])?e:null},getSource:function(){return t[this.id]||null},destroy:function(){var e=this.getSource();e&&(e.destroy(),delete t[this.id])}}),t[this.id]=e}),F.QueueProgress=function(){var e=this;e.size=0,e.loaded=0,e.uploaded=0,e.failed=0,e.queued=0,e.percent=0,e.bytesPerSec=0,e.reset=function(){e.size=e.loaded=e.uploaded=e.failed=e.queued=e.percent=e.bytesPerSec=0}},e.plupload=F}(window,mOxie);
;