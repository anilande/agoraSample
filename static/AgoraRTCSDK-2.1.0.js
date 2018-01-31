//!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("AgoraRTC",[],t):"object"==typeof exports?exports.AgoraRTC=t():e.AgoraRTC=t()}(this,function(){return function(e){function t(n){if(i[n])return i[n].exports;var o=i[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var i={};return t.m=e,t.c=i,t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=38)}([function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(19),o=function(){var e,t,i,o,r,a,s=0;return e=function(e){e>4?e=4:e<0&&(e=0),s=e},t=function(){var e=arguments[0],t=arguments;if(!(e<s))switch(e){case 0:t[0]=(0,n.getTimestamp)()+" DEBUG:",console.log.apply(console,t);break;case 1:t[0]=(0,n.getTimestamp)()+" INFO:",console.log.apply(console,t);break;case 2:t[0]=(0,n.getTimestamp)()+" WARN:",console.warn.apply(console,t);break;case 3:t[0]=(0,n.getTimestamp)()+" ERROR:",console.error.apply(console,t);break;default:return t[0]=(0,n.getTimestamp)()+" DEFAULT:",void console.log.apply(console,t)}},i=function(){for(var e=[0],i=0;i<arguments.length;i++)e.push(arguments[i]);t.apply(this,e)},o=function(){for(var e=[1],i=0;i<arguments.length;i++)e.push(arguments[i]);t.apply(this,e)},r=function(){for(var e=[2],i=0;i<arguments.length;i++)e.push(arguments[i]);t.apply(this,e)},a=function(){for(var e=[3],i=0;i<arguments.length;i++)e.push(arguments[i]);t.apply(this,e)},{DEBUG:0,INFO:1,WARNING:2,ERROR:3,NONE:4,setLogLevel:e,log:t,debug:i,info:o,warning:r,error:a}}();t.default=o},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=m();return e.name&&"Chrome"===e.name},o=function(){var e=m();return e.name&&"Safari"===e.name},r=function(){var e=m();return e.name&&"Firefox"===e.name},a=function(){var e=m();return e.name&&"OPR"===e.name},s=function(){var e=m();return e.name&&"MQQBrowser"===e.name},d=function(){var e=m();return e.name&&"MicroMessenger"===e.name},c=function(){var e=p();return"Linux"===e||"Mac OS X"===e||"Mac OS"===e||-1!==e.indexOf("Windows")},u=function(){var e=p();return"Android"===e||"iOS"===e},l=function(){return m().version},p=function(){return m().os},f=function(){var e,t=navigator.userAgent,i=t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[];if(/trident/i.test(i[1]))return e=/\brv[ :]+(\d+)/g.exec(t)||[],{name:"IE",version:e[1]||""};"Chrome"===i[1]&&null!=(e=t.match(/(OPR(?=\/))\/?(\d+)/i))&&(i=e),"Chrome"===i[1]&&null!=(e=t.match(/(mqqbrowser(?=\/))\/?(\d+)/i))&&(i=e),"Chrome"===i[1]&&null!=(e=t.match(/(micromessenger(?=\/))\/?(\d+)/i))&&(i=e),"Safari"===i[1]&&null!=(e=t.match(/version\/(\d+)/i))&&(i[2]=e[1]);var n=void 0,o=[{s:"Windows 10",r:/(Windows 10.0|Windows NT 10.0)/},{s:"Windows 8.1",r:/(Windows 8.1|Windows NT 6.3)/},{s:"Windows 8",r:/(Windows 8|Windows NT 6.2)/},{s:"Windows 7",r:/(Windows 7|Windows NT 6.1)/},{s:"Windows Vista",r:/Windows NT 6.0/},{s:"Windows Server 2003",r:/Windows NT 5.2/},{s:"Windows XP",r:/(Windows NT 5.1|Windows XP)/},{s:"Windows 2000",r:/(Windows NT 5.0|Windows 2000)/},{s:"Windows ME",r:/(Win 9x 4.90|Windows ME)/},{s:"Windows 98",r:/(Windows 98|Win98)/},{s:"Windows 95",r:/(Windows 95|Win95|Windows_95)/},{s:"Windows NT 4.0",r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},{s:"Windows CE",r:/Windows CE/},{s:"Windows 3.11",r:/Win16/},{s:"Android",r:/Android/},{s:"Open BSD",r:/OpenBSD/},{s:"Sun OS",r:/SunOS/},{s:"Linux",r:/(Linux|X11)/},{s:"iOS",r:/(iPhone|iPad|iPod)/},{s:"Mac OS X",r:/Mac OS X/},{s:"Mac OS",r:/(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},{s:"QNX",r:/QNX/},{s:"UNIX",r:/UNIX/},{s:"BeOS",r:/BeOS/},{s:"OS/2",r:/OS\/2/},{s:"Search Bot",r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}];for(var r in o){var a=o[r];if(a.r.test(navigator.userAgent)){n=a.s;break}}return{name:i[1],version:i[2],os:n}},m=function(){var e=f();return function(){return e}}();t.getBrowserInfo=m,t.getBrowserVersion=l,t.getBrowserOS=p,t.isChrome=n,t.isSafari=o,t.isFireFox=r,t.isOpera=a,t.isQQBrowser=s,t.isWeChatBrowser=d,t.isSupportedPC=c,t.isSupportedMobile=u},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e={};return e.dispatcher={},e.dispatcher.eventListeners={},e.addEventListener=function(t,i){void 0===e.dispatcher.eventListeners[t]&&(e.dispatcher.eventListeners[t]=[]),e.dispatcher.eventListeners[t].push(i)},e.on=e.addEventListener,e.removeEventListener=function(t,i){var n;-1!==(n=e.dispatcher.eventListeners[t].indexOf(i))&&e.dispatcher.eventListeners[t].splice(n,1)},e.dispatchEvent=function(t){var i;for(i in e.dispatcher.eventListeners[t.type])e.dispatcher.eventListeners[t.type].hasOwnProperty(i)&&"function"==typeof e.dispatcher.eventListeners[t.type][i]&&e.dispatcher.eventListeners[t.type][i](t)},e.dispatchSocketEvent=function(t){var i;for(i in e.dispatcher.eventListeners[t.type])e.dispatcher.eventListeners[t.type].hasOwnProperty(i)&&"function"==typeof e.dispatcher.eventListeners[t.type][i]&&e.dispatcher.eventListeners[t.type][i](t.msg)},e},o=function(e){var t={};return t.type=e.type,t},r=function(e){var t=o(e);return t.stream=e.stream,t.reason=e.reason,t.msg=e.msg,t},a=function(e){var t=o(e);return t.uid=e.uid,t.attr=e.attr,t.stream=e.stream,t},s=function(e){var t=o(e);return t.msg=e.msg,t},d=function(e){var t=o(e);return t.url=e.url,t.reason=e.reason,t};t.EventDispatcher=n,t.StreamEvent=r,t.ClientEvent=a,t.MediaEvent=s,t.LiveStreamingEvent=d},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(){return(0,u.default)().replace(/-/g,"").toUpperCase()}Object.defineProperty(t,"__esModule",{value:!0}),t.safeCall=t.vsResHack=t.CSCrashRecord=t.audioLevelHelper=t.generateSessionId=t.checkSystemRequirements=void 0;var r=i(1),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}(r),s=i(0),d=n(s),c=i(29),u=n(c),l=function(){var e=window.RTCPeerConnection||window.mozRTCPeerConnection||window.webkitRTCPeerConnection,t=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.msGetUserMedia||navigator.mozGetUserMedia||navigator.mediaDevices&&navigator.mediaDevices.getUserMedia,i=window.WebSocket,n=!!e&&!!t&&!!i,o=!1;return d.default.debug(a.getBrowserInfo(),"isAPISupport:"+n),a.isChrome()&&a.getBrowserVersion()>=58&&"iOS"!==a.getBrowserOS()&&(o=!0),a.isFireFox()&&a.getBrowserVersion()>=56&&(o=!0),a.isOpera()&&a.getBrowserVersion()>=45&&(o=!0),a.isSafari()&&a.getBrowserVersion()>=11&&(o=!0),a.isSupportedPC()||a.isSupportedMobile()||(o=!1),n&&o},p=function(){var e=arguments[0];if("function"==typeof e){var t=Array.prototype.slice.call(arguments,1);e.apply(null,t)}},f=new(window.AudioContext||window.webkitAudioContext),m=function(e){return this.audioContext=f,this.sourceNode=e.otWebkitAudioSource||this.audioContext.createMediaStreamSource(e),this.analyser=this.audioContext.createAnalyser(),this.timeDomainData=new Uint8Array(this.analyser.frequencyBinCount),this.sourceNode.connect(this.analyser),this.getAudioLevel=function(){if(this.analyser){this.analyser.getByteTimeDomainData(this.timeDomainData);for(var e=0,t=0;t<this.timeDomainData.length;t++)e=Math.max(e,Math.abs(this.timeDomainData[t]-128));return e/128}return d.default.warning("can't find analyser in audioLevelHelper"),0},this},g={shouldBlock:function(){if(localStorage){var e=JSON.parse(localStorage.getItem("agoraCSCrashRecord"));return!!(e&&e.length>6)&&(new Date).getTime()-e[e.length-6]-1e4<0}return!1},record:function(e){if(localStorage){var t=JSON.parse(localStorage.getItem("agoraCSCrashRecord"));t=!t||t.length>50?[]:t,t.push(e),localStorage.setItem("agoraCSCrashRecord",JSON.stringify(t))}}},v=function(e,t,i){try{var n=document.createElement("video");n.setAttribute("autoplay",""),n.setAttribute("muted",""),n.setAttribute("playsinline",""),n.setAttribute("style","width:1px;high:1px;"),document.body.appendChild(n),n.addEventListener("playing",function(e){a.isFireFox()?n.videoWidth&&(t(n.videoWidth,n.videoHeight),document.body.removeChild(n)):(t(n.videoWidth,n.videoHeight),document.body.removeChild(n))}),n.srcObject=e}catch(e){i(e)}};t.checkSystemRequirements=l,t.generateSessionId=o,t.audioLevelHelper=m,t.CSCrashRecord=g,t.vsResHack=v,t.safeCall=p},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=["webcs-test-1.agora.io","webcs-test-2.agora.io"],o=["webcs-test-3.agora.io","webcs-test-4.agora.io"];t.GIT_VERSION="release_20180109_01-6-g7f68c86",t.VERSION="2.1.0",t.WEBCS_DOMAIN=n,t.WEBCS_DOMAIN_BACKUP_LIST=o,t.EVENT_REPORT_DOMAIN="webcollector-1.agora.io",t.EVENT_REPORT_BACKUP_DOMAIN="webcollector-2.agora.io",t.WEBCS_BACKUP_CONNECT_TIMEOUT=6e3,t.HTTP_CONNECT_TIMEOUT=5e3},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(2),o=function(e){var t=(0,n.EventDispatcher)(e);return t.url=".",t};t.default=o},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SUBSCRIBE=t.PUBLISH=t.JOIN_GATEWAY=t.JOIN_CHOOSE_SERVER=t.SESSION_INIT=t.report=void 0;var n=i(4),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}(n),r=i(0),a=(function(e){e&&e.__esModule}(r),i(12)),s={type:null,sid:null,lts:null,succ:null,cname:null,uid:null,peerid:null,cid:null,elaps:null,extend:null,vid:0},d=function(){var e={};return e.list={},e.url=(0,a.shouldUseHttps)()?"https://"+o.EVENT_REPORT_DOMAIN+":6443/events/report":"http://"+o.EVENT_REPORT_DOMAIN+":6080/events/report",e.urlBackup=(0,a.shouldUseHttps)()?"https://"+o.EVENT_REPORT_BACKUP_DOMAIN+":6443/events/report":"http://"+o.EVENT_REPORT_BACKUP_DOMAIN+":6080/events/report",e.sessionInit=function(t,i){i.sid=t;var n=Object.assign(s,i),r=Object.assign({},n);delete n.appid,delete n.mode,e.list[t]=n,r.extend=null,r.ver=o.VERSION,r.type="session_init",r.browser=navigator.userAgent,r.elaps=(new Date).getTime()-r.lts,e.send(r)},e.joinChooseServer=function(t,i){var n=Object.assign(e.list[t],i);n.type="join_choose_server",n.elaps=(new Date).getTime()-n.lts,n.serverList=JSON.stringify(n.serverList),e.send(n)},e.joinGateway=function(t,i){var n=Object.assign(e.list[t],i);n.type="join_gateway",n.elaps=(new Date).getTime()-n.lts,e.send(n)},e.publish=function(t,i){var n=(Object.assign({},e.list[t]),Object.assign(e.list[t],i));n.type="publish",n.elaps=(new Date).getTime()-n.lts,e.send(n)},e.subscribe=function(t,i){var n=Object.assign({},e.list[t]),o=Object.assign(n,i);o.type="subscribe",o.elaps=(new Date).getTime()-o.lts,e.send(o)},e.firstRemoteFrame=function(t,i){var n=Object.assign(e.list[t],i);n.type="first_remote_frame",n.elaps=null,e.send(n)},e.streamSwitch=function(t,i){var n=Object.assign({},e.list[t],i);n.type="stream_switch",n.isdual=i.isdual,n.elaps=null,e.send(n)},e.send=function(t){try{(0,a.post)(e.url,t,null,function(i){(0,a.post)(e.urlBackup,t,null,function(e){},{timeout:1e4})},{timeout:1e4})}catch(e){}},e}();t.report=d,t.SESSION_INIT="session_init",t.JOIN_CHOOSE_SERVER="join_choose_server",t.JOIN_GATEWAY="join_gateway",t.PUBLISH="publish",t.SUBSCRIBE="subscribe"},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.getDevices=t.createStream=t.Stream=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=i(16),a=n(r),s=i(21),d=n(s),c=i(10),u=i(2),l=(i(27),i(0)),p=n(l),f=i(1),m=i(28),g=i(3),v=function(e){function t(){return null!==window.navigator.appVersion.match(/Chrome\/([\w\W]*?)\./)&&window.navigator.appVersion.match(/Chrome\/([\w\W]*?)\./)[1]<=35}function i(){return null!==window.navigator.userAgent.match("Firefox")}function n(t,i){return{width:{ideal:t},height:{ideal:i},deviceId:e.cameraId?{exact:e.cameraId}:void 0}}var r=(0,u.EventDispatcher)();if(r.params=Object.assign({},e),r.stream=e.stream,r.aux_stream=void 0,r.url=e.url,r.onClose=void 0,r.local=!1,r.video=!!e.video,r.audio=!!e.audio,r.screen=!!e.screen,r.screenAttributes={width:1920,height:1080,maxFr:5,minFr:1},r.videoSize=e.videoSize,r.player=void 0,r.audioLevelHelper=null,e.attributes=e.attributes||{},r.videoEnabled=!0,r.audioEnabled=!0,r.lowStream=null,r.videoWidth=0,r.videoHeight=0,!(void 0===r.videoSize||r.videoSize instanceof Array&&4===r.videoSize.length))throw Error("Invalid Video Size");r.videoSize=[640,480,640,480],void 0!==e.local&&!0!==e.local||(r.local=!0),r.initialized=!r.local;var s={true:!0,unspecified:!0,"90p_1":n(160,90),"120p_1":n(160,120),"120p_3":n(120,120),"120p_4":n(212,120),"180p_1":n(320,180),"180p_3":n(180,180),"180p_4":n(240,180),"240p_1":n(320,240),"240p_3":n(240,240),"240p_4":n(424,240),"360p_1":n(640,360),"360p_3":n(360,360),"360p_4":n(640,360),"360p_6":n(360,360),"360p_7":n(480,360),"360p_8":n(480,360),"360p_9":n(640,360),"360p_10":n(640,360),"360p_11":n(640,360),"480p_1":n(640,480),"480p_2":n(640,480),"480p_3":n(480,480),"480p_4":n(640,480),"480p_6":n(480,480),"480p_8":n(848,480),"480p_9":n(848,480),"480p_10":n(640,480),"720p_1":n(1280,720),"720p_2":n(1280,720),"720p_3":n(1280,720),"720p_5":n(960,720),"720p_6":n(960,720),"1080p_1":n(1920,1080),"1080p_2":n(1920,1080),"1080p_3":n(1920,1080),"1080p_5":n(1920,1080),"1440p_1":n(2560,1440),"1440p_2":n(2560,1440),"4k_1":n(3840,2160),"4k_3":n(3840,2160)};return r.unmuteAudio=void 0,r.muteAudio=void 0,r.unmuteVideo=void 0,r.muteVideo=void 0,r.setVideoResolution=function(t){return t+="",void 0!==s[t]&&(e.video=s[t],e.attributes=e.attributes||{},e.attributes.resolution=t,!0)},r.setVideoFrameRate=function(t){return!(0,f.isFireFox)()&&("object"===(void 0===t?"undefined":o(t))&&t instanceof Array&&t.length>1&&(e.attributes=e.attributes||{},e.attributes.minFrameRate=t[0],e.attributes.maxFrameRate=t[1],!0))},r.setVideoBitRate=function(t){return"object"===(void 0===t?"undefined":o(t))&&t instanceof Array&&t.length>1&&(e.attributes=e.attributes||{},e.attributes.minVideoBW=t[0],e.attributes.maxVideoBW=t[1],!0)},r.setScreenProfile=function(e){if("string"==typeof e&&r.screen){switch(e){case"480p_1":r.screenAttributes.width=640,r.screenAttributes.height=480,r.screenAttributes.maxFr=5,r.screenAttributes.minFr=1;break;case"480p_2":r.screenAttributes.width=640,r.screenAttributes.height=480,r.screenAttributes.maxFr=30,r.screenAttributes.minFr=25;break;case"720p_1":r.screenAttributes.width=1280,r.screenAttributes.height=720,r.screenAttributes.maxFr=5,r.screenAttributes.minFr=1;break;case"720p_2":r.screenAttributes.width=1280,r.screenAttributes.height=720,r.screenAttributes.maxFr=30,r.screenAttributes.minFr=25;break;case"1080p_1":r.screenAttributes.width=1920,r.screenAttributes.height=1080,r.screenAttributes.maxFr=5,r.screenAttributes.minFr=1;break;case"1080p_2":r.screenAttributes.width=1920,r.screenAttributes.height=1080,r.screenAttributes.maxFr=30,r.screenAttributes.minFr=25}return!0}return!1},r.setVideoProfileCustom=function(e){r.setVideoResolution(e[0]),r.setVideoFrameRate([e[1],e[1]]),r.setVideoBitRate([e[2],e[2]])},r.setVideoProfile=function(e){if(r.profile=e,"string"==typeof e&&r.video){switch(e){case"120p":case"120P":case"120p_1":case"120P_1":r.setVideoResolution("120p_1"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([10,65]);break;case"120p_3":case"120P_3":r.setVideoResolution("120p_3"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([10,50]);break;case"180p":case"180P":case"180p_1":case"180P_1":r.setVideoResolution("180p_1"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([10,140]);break;case"180p_3":case"180P_3":r.setVideoResolution("180p_3"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([10,100]);break;case"180p_4":case"180P_4":r.setVideoResolution("180p_4"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([10,120]);break;case"240p":case"240P":case"240p_1":case"240P_1":r.setVideoResolution("240p_1"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([10,200]);break;case"240p_3":case"240P_3":r.setVideoResolution("240p_3"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([10,140]);break;case"240p_4":case"240P_4":r.setVideoResolution("240p_4"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([10,220]);break;case"360p":case"360P":case"360p_1":case"360P_1":r.setVideoResolution("360p_1"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([20,400]);break;case"360p_3":case"360P_3":r.setVideoResolution("360p_3"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([20,260]);break;case"360p_4":case"360P_4":r.setVideoResolution("360p_4"),r.setVideoFrameRate([30,30]),r.setVideoBitRate([20,600]);break;case"360p_6":case"360P_6":r.setVideoResolution("360p_6"),r.setVideoFrameRate([30,30]),r.setVideoBitRate([20,400]);break;case"360p_7":case"360P_7":r.setVideoResolution("360p_7"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([20,320]);break;case"360p_8":case"360P_8":r.setVideoResolution("360p_8"),r.setVideoFrameRate([30,30]),r.setVideoBitRate([20,490]);break;case"360p_9":case"360P_9":r.setVideoResolution("360p_9"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([20,800]);break;case"360p_10":case"360P_10":r.setVideoResolution("360p_10"),r.setVideoFrameRate([24,24]),r.setVideoBitRate([20,800]);break;case"360p_11":case"360P_11":r.setVideoResolution("360p_11"),r.setVideoFrameRate([24,24]),r.setVideoBitRate([20,1e3]);break;case"480p":case"480P":case"480p_1":case"480P_1":r.setVideoResolution("480p_1"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([20,500]);break;case"480p_2":case"480P_2":r.setVideoResolution("480p_2"),r.setVideoFrameRate([30,30]),r.setVideoBitRate([20,1e3]);break;case"480p_3":case"480P_3":r.setVideoResolution("480p_3"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([20,400]);break;case"480p_4":case"480P_4":r.setVideoResolution("480p_4"),r.setVideoFrameRate([30,30]),r.setVideoBitRate([20,750]);break;case"480p_6":case"480P_6":r.setVideoResolution("480p_6"),r.setVideoFrameRate([30,30]),r.setVideoBitRate([20,600]);break;case"480p_8":case"480P_8":r.setVideoResolution("480p_8"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([20,610]);break;case"480p_9":case"480P_9":r.setVideoResolution("480p_9"),r.setVideoFrameRate([30,30]),r.setVideoBitRate([20,930]);break;case"480p_10":case"480P_10":r.setVideoResolution("480p_10"),r.setVideoFrameRate([10,10]),r.setVideoBitRate([20,400]);break;case"720p":case"720P":case"720p_1":case"720P_1":r.setVideoResolution("720p_1"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([30,1130]);break;case"720p_2":case"720P_2":r.setVideoResolution("720p_2"),r.setVideoFrameRate([30,30]),r.setVideoBitRate([30,2e3]);break;case"720p_3":case"720P_3":r.setVideoResolution("720p_3"),r.setVideoFrameRate([30,30]),r.setVideoBitRate([30,1710]);break;case"720p_5":case"720P_5":r.setVideoResolution("720p_5"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([30,910]);break;case"720p_6":case"720P_6":r.setVideoResolution("720p_6"),r.setVideoFrameRate([30,30]),r.setVideoBitRate([30,1380]);break;case"1080p":case"1080P":case"1080p_1":case"1080P_1":r.setVideoResolution("1080p_1"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([50,2080]);break;case"1080p_2":case"1080P_2":r.setVideoResolution("1080p_2"),r.setVideoFrameRate([30,30]),r.setVideoBitRate([50,3e3]);break;case"1080p_3":case"1080P_3":r.setVideoResolution("1080p_3"),r.setVideoFrameRate([30,30]),r.setVideoBitRate([50,3150]);break;case"1080p_5":case"1080P_5":r.setVideoResolution("1080p_5"),r.setVideoFrameRate([60,60]),r.setVideoBitRate([50,4780]);break;case"1440p":case"1440P":case"1440p_1":case"1440P_1":r.setVideoResolution("1440p_1"),r.setVideoFrameRate([30,30]),r.setVideoBitRate([50,4850]);break;case"1440p_2":case"1440P_2":r.setVideoResolution("1440p_2"),r.setVideoFrameRate([60,60]),r.setVideoBitRate([50,7350]);break;case"4k":case"4K":case"4k_1":case"4K_1":r.setVideoResolution("4k_1"),r.setVideoFrameRate([30,30]),r.setVideoBitRate([50,8910]);break;case"4k_3":case"4K_3":r.setVideoResolution("4k_3"),r.setVideoFrameRate([60,60]),r.setVideoBitRate([50,13500]);break;default:r.setVideoResolution("480p_1"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([20,500])}return!0}return!1},r.getId=function(){return e.streamID},r.getAttributes=function(){return e.screen?r.screenAttributes:e.attributes},r.hasAudio=function(){return r.audio},r.hasVideo=function(){return r.video},r.hasScreen=function(){return r.screen},r.isVideoOn=function(){return r.hasVideo&&r.videoEnabled},r.isAudioOn=function(){return r.hasAudio&&r.audioEnabled},r.init=function(n,a){var s=((new Date).getTime(),arguments[2]);if(void 0===s&&(s=2),!0===r.initialized)return void("function"==typeof a&&a({type:"warning",msg:"STREAM_ALREADY_INITIALIZED"}));if(!0!==r.local)return void("function"==typeof a&&a({type:"warning",msg:"STREAM_NOT_LOCAL"}));try{if((e.audio||e.video||e.screen)&&void 0===e.url){p.default.debug("Requested access to local media");var d=e.video;if(e.screen)var u={video:d,audio:e.audio,screen:!0,data:!0,extensionId:e.extensionId,attributes:r.screenAttributes,fake:e.fake};else{var u={video:d,audio:e.audio,fake:e.fake};if(!t()){var l=30,m=30;void 0!==e.attributes.minFrameRate&&(l=e.attributes.minFrameRate),void 0!==e.attributes.maxFrameRate&&(m=e.attributes.maxFrameRate),i()?!0===u.video?(u.video={width:{ideal:r.videoSize[0]},height:{ideal:r.videoSize[1]},frameRate:{ideal:l,max:m}},r.setVideoBitRate([500,500])):"object"===o(u.video)&&(u.video.frameRate={ideal:l,max:m}):(!0===u.audio&&(u.audio=!e.microphoneId||{deviceId:{exact:e.microphoneId}}),!0===u.video?(u.video={width:{ideal:r.videoSize[0]},height:{ideal:r.videoSize[1]},frameRate:{ideal:l,max:m}},r.setVideoBitRate([500,500])):"object"===o(u.video)&&(u.video.frameRate={ideal:l,max:m}))}}p.default.debug(u);var v=Object.assign({},u);if((0,c.GetUserMedia)(v,function(t){p.default.debug("User has granted access to local media"),r.dispatchEvent({type:"accessAllowed"}),r.stream=t,r.initialized=!0,n&&n(),r.hasVideo()&&(0,g.vsResHack)(t,function(e,t){r.videoWidth=e,r.videoHeight=t},function(e){p.default.warning("vsResHack failed:"+e)}),e.screen&&(0,f.isChrome)()&&r.stream&&r.stream.getVideoTracks()[0]&&(r.stream.getVideoTracks()[0].onended=function(){r.dispatchEvent({type:"stopScreenSharing"})})},function(e){var t={type:"error",msg:e.name||e};switch(t.msg){case"Starting video failed":case"TrackStartError":if(r.videoSize=void 0,s>0)return void setTimeout(function(){r.init(n,a,s-1)},1);t.msg="MEDIA_OPTION_INVALID";break;case"DevicesNotFoundError":t.msg="DEVICES_NOT_FOUND";break;case"NotSupportedError":t.msg="NOT_SUPPORTED";break;case"PermissionDeniedError":t.msg="PERMISSION_DENIED",r.dispatchEvent({type:"accessDenied"});break;case"PERMISSION_DENIED":r.dispatchEvent({type:"accessDenied"});break;case"InvalidStateError":t.msg="PERMISSION_DENIED",r.dispatchEvent({type:"accessDenied"});break;case"NotAllowedError":r.dispatchEvent({type:"accessDenied"});break;case"ConstraintNotSatisfiedError":t.msg="CONSTRAINT_NOT_SATISFIED";break;default:t.msg||(t.msg="UNDEFINED")}p.default.error("Media access:",t.msg),"function"==typeof a&&a(t)}),e.screen&&e.audio){var S={video:!1,audio:u.audio};p.default.debug(S),(0,c.GetUserMedia)(S,function(e){p.default.info("User has granted access to auxiliary local media."),r.dispatchEvent({type:"accessAllowed"}),r.aux_stream=e},function(e){var t={type:"error",msg:e.name||e};switch(t.msg){case"Starting video failed":case"TrackStartError":if(r.videoSize=void 0,s>0)return void setTimeout(function(){r.init(n,a,s-1)},1);t.msg="MEDIA_OPTION_INVALID";break;case"DevicesNotFoundError":t.msg="DEVICES_NOT_FOUND";break;case"NotSupportedError":t.msg="NOT_SUPPORTED";break;case"PermissionDeniedError":case"InvalidStateError":t.msg="PERMISSION_DENIED",r.dispatchEvent({type:"accessDenied"});break;case"PERMISSION_DENIED":case"NotAllowedError":r.dispatchEvent({type:"accessDenied"});break;case"ConstraintNotSatisfiedError":t.msg="CONSTRAINT_NOT_SATISFIED";break;default:t.msg||(t.msg="UNDEFINED")}p.default.error("Media access:",t.msg),"function"==typeof a&&a(t)})}}else"function"==typeof a&&a({type:"warning",msg:"STREAM_HAS_NO_MEDIA_ATTRIBUTES"})}catch(e){p.default.error("Stream init:",e),"function"==typeof a&&a({type:"error",msg:e.message||e})}},r.close=function(){if(p.default.debug("Close stream with id",e.streamID),void 0!==r.stream){var t=r.stream.getTracks();for(var i in t)t.hasOwnProperty(i)&&t[i].stop();r.stream=void 0}r.initialized=!1,r.unmuteAudio=void 0,r.muteAudio=void 0,r.unmuteVideo=void 0,r.muteVideo=void 0},r.enableAudio=function(){return p.default.debug("Enable audio stream with id",e.streamID),!(!r.hasAudio()||!r.initialized||void 0===r.stream||!0===r.stream.getAudioTracks()[0].enabled)&&(void 0!==r.unmuteAudio&&r.unmuteAudio(),r.audioEnabled=!0,r.stream.getAudioTracks()[0].enabled=!0,!0)},r.disableAudio=function(){return p.default.debug("Disable audio stream with id",e.streamID),!!(r.hasAudio()&&r.initialized&&void 0!==r.stream&&r.stream.getAudioTracks()[0].enabled)&&(void 0!==r.muteAudio&&r.muteAudio(),r.audioEnabled=!1,r.stream.getAudioTracks()[0].enabled=!1,!0)},r.enableVideo=function(){return p.default.debug("Enable video stream with id",e.streamID),!(!r.initialized||void 0===r.stream||!r.stream.getVideoTracks().length||!0===r.stream.getVideoTracks()[0].enabled)&&(void 0!==r.unmuteVideo&&r.unmuteVideo(),r.videoEnabled=!0,r.stream.getVideoTracks()[0].enabled=!0,r.lowStream&&r.lowStream.enableVideo(),!0)},r.disableVideo=function(){return p.default.debug("Disable video stream with id",e.streamID),!!(r.initialized&&void 0!==r.stream&&r.stream.getVideoTracks().length&&r.stream.getVideoTracks()[0].enabled)&&(void 0!==r.muteVideo&&r.muteVideo(),r.videoEnabled=!1,r.stream.getVideoTracks()[0].enabled=!1,r.lowStream&&r.lowStream.disableVideo(),!0)},r.play=function(e,t){r.showing=!1,!r.local||r.video||r.screen?void 0!==e&&(r.player=new a.default({id:r.getId(),stream:r,elementID:e,options:void 0,url:t}),r.showing=!0):r.hasAudio()&&(r.player=new d.default({id:r.getId(),stream:r,elementID:e,options:void 0,url:t}),r.showing=!0)},r.stop=function(){p.default.debug("Stop stream player with id",e.streamID),void 0!==r.player&&r.player.destroy()},r.getStats=function(e){r.pc&&r.pc.getStats?r.pc.getStats(function(t){if(r.pc.isSubscriber){var i=(0,m.subscribeStatsFilter)(t);(0,f.isFireFox)()&&(i.videoReceivedResolutionHeight=r.videoHeight+"",i.videoReceivedResolutionWidth=r.videoWidth+""),e&&e((0,m.subscribeStatsFilter)(t))}else{var i=(0,m.publishStatsFilter)(t);(0,f.isChrome)()||(i.videoSendResolutionHeight=r.videoHeight+"",i.videoSendResolutionWidth=r.videoWidth+""),!(0,f.isChrome)()&&r.uplinkStats&&(i.videoSendBandwidth=r.uplinkStats.uplink_available_bandwidth+"",i.videoSendPacketsLost=r.uplinkStats.uplink_cumulative_lost+""),e&&e(i)}}):p.default.warning("use getStats after peerConnection established")},r.getAudioLevel=function(){return r.audioLevelHelper?r.audioLevelHelper.getAudioLevel():r.stream?0!==r.stream.getAudioTracks().length?(r.audioLevelHelper=new g.audioLevelHelper(r.stream),r.audioLevelHelper.getAudioLevel()):void p.default.warning("can't get audioLevel beacuse no audio trace in stream"):(p.default.warning("can't get audioLevel beacuse no stream exist"),0)},r},S=function(e){return p.default.debug("Create stream with id",e.streamID),v(e)},_=function(e,t){navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices||(p.default.warning("enumerateDevices() not supported."),t&&t("enumerateDevices() not supported")),navigator.mediaDevices.enumerateDevices().then(function(t){return e(t)}).catch(function(e){return t&&t(e.name+": "+e.message)})};t.Stream=v,t.createStream=S,t.getDevices=_},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={FAILED:"FAILED",INVALID_KEY:"INVALID_KEY",INVALID_OPERATION:"INVALID_OPERATION",INVALID_PARAMETER:"INVALID_PARAMETER",INVALID_LOCAL_STREAM:"INVALID_LOCAL_STREAM",INVALID_REMOTE_STREAM:"INVALID_REMOTE_STREAM",INVALID_DYNAMIC_KEY:"INVALID_DYNAMIC_KEY",DYNAMIC_KEY_TIMEOUT:"DYNAMIC_KEY_TIMEOUT",NO_VOCS_AVAILABLE:"NO_VOCS_AVAILABLE",NO_VOS_AVAILABLE:"ERR_NO_VOS_AVAILABLE",JOIN_CHANNEL_TIMEOUT:"ERR_JOIN_CHANNEL_TIMEOUT",NO_AVAILABLE_CHANNEL:"NO_AVAILABLE_CHANNEL",LOOKUP_CHANNEL_TIMEOUT:"LOOKUP_CHANNEL_TIMEOUT",LOOKUP_CHANNEL_REJECTED:"LOOKUP_CHANNEL_REJECTED",OPEN_CHANNEL_TIMEOUT:"OPEN_CHANNEL_TIMEOUT",OPEN_CHANNEL_REJECTED:"OPEN_CHANNEL_REJECTED",REQUEST_DEFERRED:"REQUEST_DEFERRED",SOCKET_ERROR:"SOCKET_ERROR",SOCKET_DISCONNECTED:"SOCKET_DISCONNECTED",PEERCONNECTION_FAILED:"PEERCONNECTION_FAILED",CONNECT_GATEWAY_ERROR:"CONNECT_GATEWAY_ERROR",SERVICE_NOT_AVAILABLE:"SERVICE_NOT_AVAILABLE",JOIN_CHANNEL_FAILED:"JOIN_CHANNEL_FAILED",PUBLISH_STREAM_FAILED:"PUBLISH_STREAM_FAILED",UNPUBLISH_STREAM_FAILED:"UNPUBLISH_STREAM_FAILED",SUBSCRIBE_STREAM_FAILED:"SUBSCRIBE_STREAM_FAILED",UNSUBSCRIBE_STREAM_FAILED:"UNSUBSCRIBE_STREAM_FAILED",NO_SUCH_REMOTE_STREAM:"NO_SUCH_REMOTE_STREAM",ERR_FAILED:"ERR_FAILED",ERR_INVALID_VENDOR_KEY:"ERR_INVALID_VENDOR_KEY",ERR_INVALID_CHANNEL_NAME:"ERR_INVALID_CHANNEL_NAME",WARN_NO_AVAILABLE_CHANNEL:"WARN_NO_AVAILABLE_CHANNEL",WARN_LOOKUP_CHANNEL_TIMEOUT:"WARN_LOOKUP_CHANNEL_TIMEOUT",WARN_LOOKUP_CHANNEL_REJECTED:"WARN_LOOKUP_CHANNEL_REJECTED",WARN_OPEN_CHANNEL_TIMEOUT:"WARN_OPEN_CHANNEL_TIMEOUT",WARN_OPEN_CHANNEL_REJECTED:"WARN_OPEN_CHANNEL_REJECTED",WARN_REQUEST_DEFERRED:"WARN_REQUEST_DEFERRED",ERR_DYNAMIC_KEY_TIMEOUT:"ERR_DYNAMIC_KEY_TIMEOUT",ERR_INVALID_DYNAMIC_KEY:"ERR_INVALID_DYNAMIC_KEY",ERR_NO_VOCS_AVAILABLE:"ERR_NO_VOCS_AVAILABLE",ERR_NO_VOS_AVAILABLE:"ERR_NO_VOS_AVAILABLE",ERR_JOIN_CHANNEL_TIMEOUT:"ERR_JOIN_CHANNEL_TIMEOUT",IOS_NOT_SUPPORT:"iOS not support dualStream",SHARING_SCREEN_NOT_SUPPORT:"sharing screen not support dualStream",STILL_ON_PUBLISHING:"Can't open or close low-Stream when publishing or unpublish high-stream"};t.default=n},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=i(5),r=n(o),a=i(17),s=n(a),d=function(e){var t,i,n=(0,r.default)({});return n.elementID=e.elementID,n.id=e.id,n.url=e.url,n.div=document.createElement("div"),n.div.setAttribute("id","bar_"+n.id),n.bar=document.createElement("div"),n.bar.setAttribute("style","width: 100%; height: 15%; max-height: 30px; position: absolute; bottom: 0; right: 0; background-color: rgba(255,255,255,0.62)"),n.bar.setAttribute("id","subbar_"+n.id),n.link=document.createElement("a"),n.link.setAttribute("href","http://www.lynckia.com/"),n.link.setAttribute("target","_blank"),n.logo=document.createElement("img"),n.logo.setAttribute("style","width: 100%; height: 100%; max-width: 30px; position: absolute; top: 0; left: 2px;"),n.logo.setAttribute("alt","Lynckia"),i=function(e){"block"!==e?e="none":clearTimeout(t),n.div.setAttribute("style","width: 100%; height: 100%; position: absolute; bottom: 0; right: 0; display:"+e)},n.display=function(){i("block")},n.hide=function(){t=setTimeout(i,1e3)},document.getElementById(n.elementID).appendChild(n.div),n.div.appendChild(n.bar),e.stream.screen||void 0!==e.options&&void 0!==e.options.speaker&&!0!==e.options.speaker||(n.speaker=new s.default({elementID:"subbar_"+n.id,id:n.id,stream:e.stream,media:e.media,url:n.url})),n.display(),n.hide(),n};t.default=d},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.GetUserMedia=t.Connection=void 0;var o=i(22),r=n(o),a=i(23),s=n(a),d=i(24),c=n(d),u=i(25),l=n(u),p=i(26),f=n(p),m=i(0),g=n(m),v=103,S=function(e){var t={};if(e.session_id=v+=1,"undefined"!=typeof window&&window.navigator)if(null!==window.navigator.userAgent.match("Firefox"))t.browser="mozilla",t=(0,f.default)(e);else if(window.navigator.userAgent.indexOf("Safari")>-1&&-1===navigator.userAgent.indexOf("Chrome"))g.default.debug("Safari"),t=(0,c.default)(e),t.browser="safari";else if(window.navigator.userAgent.indexOf("MSIE "))t=(0,s.default)(e),t.browser="ie";else if(window.navigator.appVersion.match(/Chrome\/([\w\W]*?)\./)[1]>=26)t=(0,s.default)(e),t.browser="chrome-stable";else{if(!(window.navigator.userAgent.toLowerCase().indexOf("chrome")>=40))throw t.browser="none","WebRTC stack not available";t=(0,r.default)(e),t.browser="chrome-canary"}else g.default.error("Publish/subscribe video/audio streams not supported yet"),t=(0,l.default)(e);return t},_=function(e,t,i){if(navigator.getMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia,e.screen)if(g.default.debug("Screen access requested"),null!==window.navigator.userAgent.match("Firefox")){var n={};void 0!=e.video.mandatory?(n.video=e.video,n.video.mediaSource="window"):n={video:{mediaSource:"window"}},navigator.getMedia(n,t,i)}else if(null!==window.navigator.userAgent.match("Chrome")){if(window.navigator.appVersion.match(/Chrome\/([\w\W]*?)\./)[1]<34)return void i({code:"This browser does not support screen sharing"});var o="okeephmleflklcdebijnponpabbmmgeo";e.extensionId&&(g.default.debug("extensionId supplied, using "+e.extensionId),o=e.extensionId),g.default.debug("Screen access on chrome stable, looking for extension");try{chrome.runtime.sendMessage(o,{getStream:!0},function(o){if(void 0===o){g.default.debug("Access to screen denied");return void i({code:"Access to screen denied"})}var r=o.streamId,a=e.attributes.width,s=e.attributes.height,d=e.attributes.maxFr,c=e.attributes.minFr;n={video:{mandatory:{chromeMediaSource:"desktop",chromeMediaSourceId:r,maxHeight:s,maxWidth:a,maxFrameRate:d,minFrameRate:c}}},navigator.getMedia(n,t,i)})}catch(e){g.default.debug("AgoraRTC screensharing plugin is not accessible");var r={code:"no_plugin_present"};return void i(r)}}else g.default.debug("This browser does not support screenSharing");else window.navigator.userAgent.indexOf("Safari")>-1&&-1===navigator.userAgent.indexOf("Chrome")?navigator.mediaDevices.getUserMedia(e).then(t).catch(i):"undefined"!=typeof navigator&&navigator.getMedia?navigator.getMedia(e,t,i):g.default.error("Video/audio streams not supported yet")};t.Connection=S,t.GetUserMedia=_},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){e&&e.apply(this,[].slice.call(arguments,1))};t.default=n},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.shouldUseHttps=t.post=void 0;var n=i(4),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}(n),r=function(e,t,i,n){var r=new XMLHttpRequest;r.timeout=t.timeout||o.HTTP_CONNECT_TIMEOUT,r.open("POST",e,!0),r.setRequestHeader("Content-type","application/json; charset=utf-8"),r.onload=function(e){i&&i(r.responseText)},r.onerror=function(t){n&&n(t,e)},r.ontimeout=function(t){n&&n(t,e)},r.send(JSON.stringify(t))},a=function(){return"https:"==document.location.protocol};t.post=r,t.shouldUseHttps=a},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.getGatewayList=void 0;var o=i(4),r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}(o),a=i(0),s=n(a),d=i(8),c=(n(d),i(12)),u=i(6),l=i(3),p=function(e,t,i,n){var o=(new Date).getTime(),r={key:t.appId,cname:t.cname,uid:t.uid};(0,c.post)(e,r,function(r){var a=JSON.parse(r),s=a.error;void 0!=s?(u.report.joinChooseServer(t.sid,{lts:o,succ:!1,csAddr:e,serverList:null,ec:s}),n("Get server node failed ["+s+"]",e)):(u.report.joinChooseServer(t.sid,{lts:o,succ:!0,csAddr:e,serverList:a.gateway_addr,cid:a.cid+"",uid:a.uid+"",ec:null}),i(a))},function(e,i){"timeout"===e.type?(u.report.joinChooseServer(t.sid,{lts:o,succ:!1,csAddr:i,serverList:null,ec:"timeout"}),n("Connect choose server timeout",i)):u.report.joinChooseServer(t.sid,{lts:o,succ:!1,csAddr:i,serverList:null,ec:"server_wrong"})})},f=function(e,t,i){var n=(new Date).getTime(),o=!1;l.CSCrashRecord.record(n);for(var a=function(e){o||(clearTimeout(g),o=!0,s.default.debug("Get gateway address:",e.gateway_addr),t(e))},d=function(e,t){s.default.error(e,t)},u=r.WEBCS_DOMAIN,f=0;f<u.length;++f){var m;m=(0,c.shouldUseHttps)()?"https://"+u[f]+":5668/getwebgw/jsonp":"http://"+u[f]+":5669/getwebgw/jsonp",p(m,e,a,d)}var g=setTimeout(function(){if(!o)for(var t=r.WEBCS_DOMAIN_BACKUP_LIST,i=0;i<t.length;++i){var n;n=(0,c.shouldUseHttps)()?"https://"+t[i]+":5668/getwebgw/jsonp":"http://"+t[i]+":5669/getwebgw/jsonp",p(n,e,a,d)}},1e3);setTimeout(function(){o||i()},r.WEBCS_BACKUP_CONNECT_TIMEOUT)},m=function(e,t,i){var n=!1,o=null,r=1;!function a(){if(l.CSCrashRecord.shouldBlock())return s.default.warning("CS connetion crash too many times in 10s"),i&&i();n||f(e,function(e){n=!0,clearTimeout(o),t(e)},function(){s.default.debug("Request gateway list will be restart in "+r+"s"),o=setTimeout(function(){a()},1e3*r),r=r>=3600?3600:2*r})}()};t.getGatewayList=m},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=i(7),a=i(33),s=n(a),d=i(10),c=i(2),u=i(0),l=n(u),p=i(8),f=n(p),m=i(11),g=n(m),v=i(13),S=i(4),_=i(6),h=i(3),b=i(1),E=function(e){function t(){for(var e in k.remoteStreams)if(k.remoteStreams.hasOwnProperty(e)){var t=k.remoteStreams[e];t.stop(),t.close(),delete k.remoteStreams[e],void 0!==t.pc&&(t.pc.close(),t.pc=void 0)}}var i=!1,n=function(){return{_type:"ping"}},a=function(){return{_type:"join1",message:{key:k.key,channel:k.joinInfo.cname,uid:k.uid,version:S.VERSION,browser:navigator.userAgent,mode:e.mode,role:e.role,config:k.config}}},u=function(){return{_type:"leave"}},p=function(e){return{_type:"control",message:e}},m=function(e){return{_type:"token",message:e}},E=function(){return{_type:"p2p_lost",message:null}},R=function(e){return{_type:"unpublish",message:e}},I=function(e){return{_type:"unsubscribe",message:e}},y=function(e,t){return{_type:"switchVideoStream",message:{id:e,type:t}}},A=function(e,t){return{_type:"publish",options:e,sdp:t}},C=function(e){return{_type:"publish_stats",options:{stats:e},sdp:null}},w=function(e){return{_type:"publish_stats_low",options:{stats:e},sdp:null}},O=function(e,t){return{_type:"subscribe",options:e,sdp:t}},T=function(e,t){return{_type:"subscribe_stats",options:{id:e,stats:t},sdp:null}},N=function(e,t){return{_type:"start_live_streaming",message:{url:e,transcodingEnabled:t}}},D=function(e){return{_type:"stop_live_streaming",message:{url:e}}},L=function(e){return{_type:"set_live_transcoding",message:{transcoding:e}}},k=(0,c.EventDispatcher)(e);k.socket=void 0,k.state=0,k.mode=e.mode,k.role=e.role,k.codec=e.codec,k.config={},k.timers={},k.timer_counter={},k.localStreams={},k.remoteStreams={},k.attemps=1,k.p2p_attemps=1,k.audioLevel={},k.activeSpeaker=void 0,k.liveStreams=new Map;var M=g.default;k.remoteVideoStreamTypes={REMOTE_VIDEO_STREAM_HIGH:0,REMOTE_VIDEO_STREAM_LOW:1,REMOTE_VIDEO_STREAM_MEDIUM:2},k.configPublisher=function(e){k.config=e},k.join=function(e,t,i,o){var r=(new Date).getTime(),s=e.uid;return 0!==k.state?(_.report.joinGateway(e.sid,{lts:r,succ:!1,ec:f.default.INVALID_OPERATION,addr:null}),void l.default.error("Server already in connecting/connected state")):null!==s&&void 0!==s&&parseInt(s)!==s?(_.report.joinGateway(e.sid,{lts:r,succ:!1,ec:f.default.INVALID_PARAMETER,addr:null}),void l.default.error("Input uid is invalid")):(k.joinInfo=e,k.uid=s,k.key=t,k.state=1,void U(e,function(t){k.stunServerUrl=t.stunServerUrl,k.turnServer=t.turnServer,k.state=2,l.default.debug("Connected to gateway server"),k.pingTimer=setInterval(function(){B(n(),function(){},function(e){})},3e3),B(a(),function(t){_.report.joinGateway(e.sid,{lts:r,succ:!0,ec:null,vid:t.vid,addr:k.socket.getURL()}),i(k.uid)},function(t){l.default.error("User join failed ["+t+"]"),t===f.default.ERR_INVALID_VENDOR_KEY?t=f.default.INVALID_KEY:t===f.default.ERR_INVALID_DYNAMIC_KEY?t=f.default.INVALID_DYNAMIC_KEY:t===f.default.ERR_DYNAMIC_KEY_TIMEOUT?t=f.default.DYNAMIC_KEY_TIMEOUT:t===f.default.ERR_NO_VOCS_AVAILABLE?t=f.default.NO_VOCS_AVAILABLE:t===f.default.ERR_NO_VOS_AVAILABLE?t=f.default.NO_VOS_AVAILABLE:t===f.default.ERR_JOIN_CHANNEL_TIMEOUT?t=f.default.JOIN_CHANNEL_TIMEOUT:t===f.default.ERR_FAILED?t=f.default.FAILED:t===f.default.WARN_NO_AVAILABLE_CHANNEL?t=f.default.NO_AVAILABLE_CHANNEL:t===f.default.WARN_LOOKUP_CHANNEL_TIMEOUT?t=f.default.LOOKUP_CHANNEL_TIMEOUT:t===f.default.WARN_LOOKUP_CHANNEL_REJECTED?t=f.default.LOOKUP_CHANNEL_REJECTED:t===f.default.WARN_OPEN_CHANNEL_TIMEOUT?t=f.default.OPEN_CHANNEL_TIMEOUT:t===f.default.WARN_OPEN_CHANNEL_REJECTED?t=f.default.OPEN_CHANNEL_REJECTED:t===f.default.WARN_REQUEST_DEFERRED&&(t=f.default.REQUEST_DEFERRED),_.report.joinGateway(e.sid,{lts:r,succ:!1,ec:t,addr:k.socket.getURL()})})},function(t){t=JSON.stringify(t),l.default.error("User join failed ["+t+"]"),_.report.joinGateway(e.sid,{lts:r,succ:!1,ec:t,addr:k.socket.getURL()})}))},k.leave=function(e,i){if(2!=k.state)return void M(e);clearInterval(k.pingTimer);for(var n in k.timers)k.timers.hasOwnProperty(n)&&clearInterval(k.timers[n]);B(u(),function(t){k.socket.close(),k.socket=void 0,l.default.info("Leave channal success"),e&&e(t)},i);for(var n in k.localStreams)if(k.localStreams.hasOwnProperty(n)){var o=k.localStreams[n];delete k.localStreams[n],void 0!==o.pc&&(o.pc.close(),o.pc=void 0)}t(),k.state=0},k.publish=function(e,t,i){var n=(new Date).getTime();if(e.publishLTS=n,"object"!==(void 0===e?"undefined":o(e))||null===e)return l.default.error("Invalid local stream"),i&&i(f.default.INVALID_LOCAL_STREAM),void _.report.publish(k.joinInfo.sid,{lts:n,succ:!1,ec:f.default.INVALID_LOCAL_STREAM});if(null===e.stream&&void 0===e.url)return l.default.error("Invalid local media stream"),i&&i(f.default.INVALID_LOCAL_STREAM),void _.report.publish(k.joinInfo.sid,{lts:n,succ:!1,ec:f.default.INVALID_LOCAL_STREAM});if(2!==k.state)return l.default.error("User is not in the session"),i&&i(f.default.INVALID_OPERATION),void _.report.publish(k.joinInfo.sid,{lts:n,succ:!1,ec:f.default.INVALID_OPERATION});var r=e.getAttributes()||{};e.local&&void 0===k.localStreams[e.getId()]&&(e.hasAudio()||e.hasVideo()||e.hasScreen())&&(void 0!==e.url?x(A({state:"url",audio:e.hasAudio(),video:e.hasVideo(),attributes:e.getAttributes(),mode:k.mode},e.url),function(t,i){"success"===t?(e.getUserId=function(){return i},k.localStreams[i]=e,e.onClose=function(){k.unpublish(e)}):l.default.error("Publish local stream failed",t)}):(k.localStreams[e.getId()]=e,e.pc=(0,d.Connection)({callback:function(o){l.default.debug("SDP exchange in publish : send offer --  ",JSON.parse(o)),x(A({state:"offer",id:e.getId(),audio:e.hasAudio(),video:e.hasVideo()||e.hasScreen(),attributes:e.getAttributes(),mode:k.mode,codec:k.codec},o),function(r,a){if("error"===r)return l.default.error("Publish local stream failed"),i&&i(f.default.PUBLISH_STREAM_FAILED),void _.report.publish(k.joinInfo.sid,{lts:n,succ:!1,localSDP:o,ec:f.default.PUBLISH_STREAM_FAILED});e.pc.onsignalingmessage=function(t){e.pc.onsignalingmessage=function(){},x(A({state:"ok",id:e.getId(),audio:e.hasAudio(),video:e.hasVideo(),screen:e.hasScreen(),attributes:e.getAttributes(),mode:k.mode},t)),e.getUserId=function(){return a.id},l.default.info("Local stream published with uid",a.id),e.onClose=function(){k.unpublish(e)},e.unmuteAudio=function(){B(p({action:"audio-out-on",streamId:e.getId()}),function(){},function(){})},e.unmuteVideo=function(){B(p({action:"video-out-on",streamId:e.getId()}),function(){},function(){})},e.muteAudio=function(){B(p({action:"audio-out-off",streamId:e.getId()}),function(){},function(){})},e.muteVideo=function(){B(p({action:"video-out-off",streamId:e.getId()}),function(){},function(){})}},e.pc.oniceconnectionstatechange=function(o){"failed"===o?(void 0!=k.timers[e.getId()]&&clearInterval(k.timers[e.getId()]),B(E(),function(){},function(){}),k.socket.disconnect(),l.default.error("Publisher connection is lost"),i&&i(f.default.PEERCONNECTION_FAILED),_.report.publish(k.joinInfo.sid,{lts:n,succ:!1,ec:f.default.PEERCONNECTION_FAILED})):"connected"===o&&(t&&t(),_.report.publish(k.joinInfo.sid,{lts:n,succ:!0,ec:null}))},l.default.debug("SDP exchange in publish : receive answer --  ",JSON.parse(r)),e.pc.processSignalingMessage(r)})},audio:e.hasAudio(),video:e.hasVideo(),screen:e.hasScreen(),isSubscriber:!1,iceServers:[],stunServerUrl:k.stunServerUrl,turnServer:k.turnServer,maxAudioBW:r.maxAudioBW,minVideoBW:r.minVideoBW,maxVideoBW:r.maxVideoBW,mode:k.mode,codec:k.codec}),e.pc.addStream(e.stream),l.default.debug("PeerConnection add stream :",e.stream),k.timers[e.getId()]=setInterval(function(){e&&e.pc&&e.pc.getStats&&e.pc.getStatsRate(function(t){t.forEach(function(t){-1===t.id.indexOf("outbound_rtp")&&-1===t.id.indexOf("OutboundRTP")||"video"!==t.mediaType||(t.googFrameWidthSent=e.videoWidth+"",t.googFrameHeightSent=e.videoHeight+""),e.getUserId&&(e.getId()===e.getUserId()?B(C(t),null,null):B(w(t),null,null))})})},3e3),void 0!==e.aux_stream&&(e.pc.addStream(e.aux_stream),l.default.debug("PeerConnection add stream :",e.aux_stream))))},k.unpublish=function(e,t,i){return"object"!==(void 0===e?"undefined":o(e))||null===e?(M(i,f.default.INVALID_LOCAL_STREAM),void l.default.error("Invalid local stream")):2!==k.state?(M(i,f.default.INVALID_OPERATION),void l.default.error("User not in the session")):(void 0!=k.timers[e.getId()]&&clearInterval(k.timers[e.getId()]),void(void 0!==k.socket?e.local&&void 0!==k.localStreams[e.getId()]?(delete k.localStreams[e.getId()],B(R(e.getUserId()),function(n){if("error"===n)return M(i,f.default.UNPUBLISH_STREAM_FAILED),void l.default.error("Unpublish stream failed");(e.hasAudio()||e.hasVideo()||e.hasScreen())&&void 0===e.url&&void 0!==e.pc&&(e.pc.close(),e.pc=void 0),e.onClose=void 0,e.unmuteAudio=void 0,e.muteAudio=void 0,e.unmuteVideo=void 0,e.muteVideo=void 0,t&&t()},i)):(M(i,f.default.INVALID_LOCAL_STREAM),l.default.error("Invalid local stream")):(M(i,f.default.INVALID_OPERATION),l.default.error("User not in the session"))))},k.subscribe=function(e,t){var i=(new Date).getTime();return e.subscribeLTS=i,"object"!==(void 0===e?"undefined":o(e))||null===e?(_.report.subscribe(k.joinInfo.sid,{lts:i,succ:!1,peerid:e.getId()+"",ec:f.default.INVALID_REMOTE_STREAM}),void l.default.error("Invalid remote stream")):2!==k.state?(_.report.subscribe(k.joinInfo.sid,{lts:i,succ:!1,peerid:e.getId()+"",ec:f.default.INVALID_OPERATION}),void l.default.error("User is not in the session")):void(!e.local&&k.remoteStreams.hasOwnProperty(e.getId())&&(e.hasAudio()||e.hasVideo()||e.hasScreen())?(e.pc=(0,d.Connection)({callback:function(t){l.default.debug("SDP exchange in subscribe : send offer --  ",JSON.parse(t)),x(O({streamId:e.getId(),audio:!0,video:!0,mode:k.mode,codec:k.codec},t),function(t){if("error"===t)return l.default.error("Subscribe remote stream failed, closing stream ",e.getId()),void e.close();l.default.debug("SDP exchange in subscribe : receive answer --  ",JSON.parse(t)),e.pc.processSignalingMessage(t)})},nop2p:!0,audio:!0,video:!0,screen:e.hasScreen(),isSubscriber:!0,iceServers:[],stunServerUrl:k.stunServerUrl,turnServer:k.turnServer}),e.pc.onaddstream=function(t,i){if("ontrack"===i&&"video"===t.track.kind||"onaddstream"===i){if(l.default.info("Remote stream subscribed with uid ",e.getId()),k.remoteStreams[e.getId()].stream="onaddstream"===i?t.stream:t.streams[0],k.remoteStreams[e.getId()].hasVideo()){if((0,b.isFireFox)()){var n=k.remoteStreams[e.getId()].stream;(0,h.vsResHack)(n,function(t,i){e.videoWidth=t,e.videoHeight=i},function(e){return l.default.warning("vsResHack failed:"+e)})}}else k.remoteStreams[e.getId()].disableVideo();var o=(0,c.StreamEvent)({type:"stream-subscribed",stream:k.remoteStreams[e.getId()]});k.dispatchEvent(o)}e.unmuteAudio=function(){B(p({action:"audio-in-on",streamId:e.getId()}),function(){},function(){})},e.muteAudio=function(){B(p({action:"audio-in-off",streamId:e.getId()}),function(){},function(){})},e.unmuteVideo=function(){B(p({action:"video-in-on",streamId:e.getId()}),function(){},function(){})},e.muteVideo=function(){B(p({action:"video-in-off",streamId:e.getId()}),function(){},function(){})}},k.timers[e.getId()]=setInterval(function(){e&&e.pc&&e.pc.getStats&&e.pc.getStatsRate(function(t){t.forEach(function(t){-1!==t.id.indexOf("inbound_rtp")&&"video"===t.mediaType&&(t.googFrameWidthReceived=e.videoWidth+"",t.googFrameHeightReceived=e.videoHeight+""),x(T(e.getId(),t),null,null)})})},3e3),k.audioLevel[e.getId()]=0,k.timers[e.getId()+"audio"]=setInterval(function(){e&&e.pc&&e.pc.getStats&&e.pc.getStats(function(t){t.forEach(function(t){if("audio"===t.mediaType){if(t.audioOutputLevel>5e3){k.audioLevel[e.getId()]<20&&(k.audioLevel[e.getId()]+=1);for(var i in k.audioLevel)parseInt(i)!==e.getId()&&k.audioLevel[i]>0&&(k.audioLevel[i]-=1)}var n=Object.keys(k.audioLevel),o=n.sort(function(e,t){return k.audioLevel[t]-k.audioLevel[e]});if(k.activeSpeaker!==o[0]){var r=(0,c.ClientEvent)({type:"active-speaker",uid:o[0]});k.dispatchEvent(r),k.activeSpeaker=o[0],l.default.debug("Update active speaker:"+k.activeSpeaker)}}})})},50),e.pc.oniceconnectionstatechange=function(t){"failed"===t?(void 0!=k.timers[e.getId()]&&(clearInterval(k.timers[e.getId()]),clearInterval(k.timers[e.getId()]+"audio")),B(E(),function(){},function(){}),k.socket.disconnect(),l.default.error("Subscriber connection is lost",e.getId()),_.report.subscribe(k.joinInfo.sid,{lts:i,succ:!1,peerid:e.getId()+"",ec:f.default.PEERCONNECTION_FAILED})):"connected"===t&&(_.report.subscribe(k.joinInfo.sid,{lts:i,succ:!0,peerid:e.getId()+"",ec:null}),k.firstFrameTimer=setInterval(function(){e.pc?e.pc.getStats(function(t){t.forEach(function(t){-1===t.id.indexOf("recv")&&-1===t.id.indexOf("inbound_rtp")&&-1===t.id.indexOf("InboundRTP")||"video"===t.mediaType&&(t.framesDecoded>0||t.googFramesDecoded>0)&&(clearInterval(k.firstFrameTimer),_.report.firstRemoteFrame(k.joinInfo.sid,{lts:(new Date).getTime(),peerid:e.getId()+"",succ:!0}))})}):clearInterval(k.firstFrameTimer)},100))}):(_.report.subscribe(k.joinInfo.sid,{lts:i,succ:!1,peerid:e.getId()+"",ec:f.default.INVALID_REMOTE_STREAM}),l.default.error("Invalid remote stream")))},k.unsubscribe=function(e,t){return"object"!==(void 0===e?"undefined":o(e))||null===e?(M(t,f.default.INVALID_REMOTE_STREAM),void l.default.error("Invalid remote stream")):2!==k.state?(M(t,f.default.INVALID_OPERATION),void l.default.error("User is not in the session")):(void 0!=k.timers[e.getId()]&&(clearInterval(k.timers[e.getId()]),clearInterval(k.timers[e.getId()]+"audio")),void 0!=k.audioLevel[e.getId()]&&delete k.audioLevel[e.getId()],void 0!=k.timer_counter[e.getId()]&&delete k.timer_counter[e.getId()],k.remoteStreams.hasOwnProperty(e.getId())?k.socket?e.local?(M(t,f.default.INVALID_REMOTE_STREAM),void l.default.error("Invalid remote stream")):(e.close(),delete k.remoteStreams[e.getId()],void B(I(e.getId()),function(i){if("error"===i)return M(t,f.default.UNSUBSCRIBE_STREAM_FAILED),void l.default.error("Unsubscribe remote stream failed",e.getId());l.default.info("Unsubscrib stream success")},t)):(M(t,f.default.INVALID_OPERATION),void l.default.error("User is not in the session")):void M(t,f.default.NO_SUCH_REMOTE_STREAM))},k.setRemoteVideoStreamType=function(e,t){if(l.default.debug("Switching remote video stream "+e.getId()+" to "+t),"object"!==(void 0===e?"undefined":o(e))||null===e)return void l.default.error("Invalid remote stream");if(2!==k.state)return void l.default.error("User is not in the session");if(!e.local){switch(t){case k.remoteVideoStreamTypes.REMOTE_VIDEO_STREAM_HIGH:case k.remoteVideoStreamTypes.REMOTE_VIDEO_STREAM_LOW:case k.remoteVideoStreamTypes.REMOTE_VIDEO_STREAM_MEDIUM:break;default:return}B(y(e.getId(),t),null,null)}},k.startLiveStreaming=function(e,t){if(k.liveStreams.set(e,t),l.default.debug("Start live streaming "+e+" transcodingEnabled "+t),2!==k.state)return void l.default.error("User is not in the session");B(N(e,t),null,null)},k.stopLiveStreaming=function(e){if(l.default.debug("Stop live streaming "+e),2!==k.state)return void l.default.error("User is not in the session");k.liveStreams.delete(e),B(D(e),null,null)},k.setLiveTranscoding=function(e){if(k.transcoding=e,l.default.debug("Set live transcoding "+e),2!==k.state)return void l.default.error("User is not in the session");B(L(e),null,null)};var V=function(e){return 1e3*Math.min(30,Math.pow(2,e)-1)},P=function(){k.key?(l.default.info("Re-joining to channel "+k.joinInfo.cname),k.join(k.joinInfo,k.key,function(e){l.default.info("User "+e+" is re-joined to "+k.joinInfo.cname);for(var t in k.localStreams)if(void 0!==k.localStreams[t]){var i=k.localStreams[t];delete k.localStreams[t],void 0!==i.pc&&(i.pc.close(),i.pc=void 0)}k.dispatchEvent((0,c.ClientEvent)({type:"rejoin"})),k.liveStreams&&k.liveStreams.size&&k.liveStreams.forEach(function(e,t){e&&k.setLiveTranscoding(k.transcoding),k.startLiveStreaming(t,e)})},function(e){if(l.default.error("Re-join to channel failed ["+e+"]"),e===f.default.ERR_INVALID_VENDOR_KEY){var t=(0,c.StreamEvent)({type:"error",reason:f.default.INVALID_KEY});k.dispatchEvent(t)}else if(e===f.default.ERR_INVALID_DYNAMIC_KEY){var t=(0,c.StreamEvent)({type:"error",reason:f.default.INVALID_DYNAMIC_KEY});k.dispatchEvent(t)}else if(e===f.default.ERR_DYNAMIC_KEY_TIMEOUT){var t=(0,c.StreamEvent)({type:"error",reason:f.default.DYNAMIC_KEY_TIMEOUT});k.dispatchEvent(t);var i=V(k.attemps);l.default.error("Connect to server failed [Channel key timeout], attempt to recover [#"+k.attemps+"] after "+i/1e3+" seconds");setTimeout(function(){k.attemps++,void 0!==k.socket&&k.socket.disconnect()},i)}})):l.default.error("Connection recover failed [Invalid channel key]")},F=function(e){k.socket=(0,s.default)(e,{sid:k.joinInfo.sid})},U=function(e,n,o){void 0!==k.socket?k.socket.socket.connect():(F(e.gatewayAddr),k.socket.on("onUplinkStats",function(e){k.localStreams[k.uid]&&(k.localStreams[k.uid].uplinkStats=e)}),k.socket.on("connect",function(){k.attemps=1,B(m(e),n,o)}),k.socket.on("reconnect",function(){l.default.debug("Try to reconnect choose server and get gateway list again "),(0,v.getGatewayList)(k.joinInfo,function(e){k.socket.reconnect(e.gateway_addr)})}),k.socket.on("connect_error",function(e){for(var n in k.timers)k.timers.hasOwnProperty(n)&&clearInterval(k.timers[n]);for(var n in k.remoteStreams)if(k.remoteStreams.hasOwnProperty(n)){var o=k.remoteStreams[n],r=(0,c.ClientEvent)({type:"stream-removed",uid:o.getId(),stream:o});k.dispatchEvent(r)}if(t(),1!=i){clearInterval(k.pingTimer),k.state=0,k.socket=void 0;var r=(0,c.StreamEvent)({type:"error",reason:f.default.SOCKET_ERROR});k.dispatchEvent(r);var a=V(k.attemps);l.default.error("Connect to server error ["+JSON.stringify(e)+"], attempt to recover [#"+k.attemps+"] after "+a/1e3+" seconds");setTimeout(function(){k.attemps++,P()},a)}}),k.socket.on("disconnect",function(e){if(0!==k.state){k.state=0;for(var n in k.timers)k.timers.hasOwnProperty(n)&&clearInterval(k.timers[n]);for(var n in k.remoteStreams)if(k.remoteStreams.hasOwnProperty(n)){var o=k.remoteStreams[n],r=(0,c.ClientEvent)({type:"stream-removed",uid:o.getId(),stream:o});k.dispatchEvent(r)}if(t(),1!=i){clearInterval(k.pingTimer),k.socket=void 0;var r=(0,c.StreamEvent)({type:"error",reason:f.default.SOCKET_DISCONNECTED});k.dispatchEvent(r);var a=V(k.attemps);l.default.error("Disconnect from server ["+e+"], attempt to recover [#"+k.attemps+"] after "+a/1e3+" seconds");setTimeout(function(){k.attemps++,P()},a)}}}),k.socket.on("onAddAudioStream",function(e){if(void 0===k.remoteStreams[e.id]){var t=(0,r.Stream)({streamID:e.id,local:!1,audio:e.audio,video:e.video,screen:e.screen,attributes:e.attributes});k.remoteStreams[e.id]=t;var i=(0,c.StreamEvent)({type:"stream-added",stream:t});k.dispatchEvent(i)}}),k.socket.on("onAddVideoStream",function(e){if(l.default.info("Newly added remote stream with uid",e.id),void 0===k.remoteStreams[e.id]){var t=(0,r.Stream)({streamID:e.id,local:!1,audio:e.audio,video:e.video,screen:e.screen,attributes:e.attributes});k.remoteStreams[e.id]=t;var i=(0,c.StreamEvent)({type:"stream-added",stream:t});k.dispatchEvent(i)}else if(void 0!==k.remoteStreams[e.id].stream){k.remoteStreams[e.id].video=!0,k.remoteStreams[e.id].enableVideo(),l.default.info("Stream changed: enable video "+e.id);var n=k.remoteStreams[e.id],o=n.player.elementID;n.stop(),n.play(o)}else{var t=(0,r.Stream)({streamID:e.id,local:!1,audio:!0,video:!0,screen:!1,attributes:e.attributes});k.remoteStreams[e.id]=t,l.default.info("Stream changed: modify video "+e.id)}}),k.socket.on("onRemoveStream",function(e){var t=k.remoteStreams[e.id];if(!t)return void console.log("ERROR stream ",e.id," not found onRemoveStream ",e);delete k.remoteStreams[e.id];var i=(0,c.StreamEvent)({type:"stream-removed",stream:t});k.dispatchEvent(i),t.close(),void 0!==t.pc&&(t.pc.close(),t.pc=void 0)}),k.socket.on("onPublishStream",function(e){var t=k.localStreams[e.id],i=(0,c.StreamEvent)({type:"stream-published",stream:t});k.dispatchEvent(i)}),k.socket.on("mute_audio",function(e){l.default.info("rcv peer mute audio");var t=(0,c.ClientEvent)({type:"mute-audio",uid:e.peerid});k.dispatchEvent(t)}),k.socket.on("unmute_audio",function(e){l.default.info("rcv peer unmute audio");var t=(0,c.ClientEvent)({type:"unmute-audio",uid:e.peerid});k.dispatchEvent(t)}),k.socket.on("mute_video",function(e){l.default.info("rcv peer mute video");var t=(0,c.ClientEvent)({type:"mute-video",uid:e.peerid});k.dispatchEvent(t)}),k.socket.on("unmute_video",function(e){l.default.info("rcv peer unmute video");var t=(0,c.ClientEvent)({type:"unmute-video",uid:e.peerid});k.dispatchEvent(t)}),k.socket.on("user_banned",function(e){l.default.info("user banned uid:"+e.id+"error:"+e.errcode);var t=(0,c.ClientEvent)({type:"client-banned",uid:e.id,attr:e.errcode});k.dispatchEvent(t),i=!0,leave()}),k.socket.on("onP2PLost",function(e){if(l.default.debug("p2plost:",e),"publish"===e.event){var t=k.localStreams[e.uid];t&&_.report.publish(k.joinInfo.sid,{lts:t.publishLTS,succ:!1,ec:"DTLS failed"})}if("subscribe"===e.event){var i=k.remoteStreams[e.uid];i&&_.report.subscribe(k.joinInfo.sid,{lts:i.subscribeLTS,succ:!1,peerid:e.uid+"",ec:"DTLS failed"})}k.socket.disconnect()}),k.socket.on("onPeerLeave",function(e){var t=(0,c.ClientEvent)({type:"peer-leave",uid:e.id});if(k.remoteStreams.hasOwnProperty(e.id)&&(t.stream=k.remoteStreams[e.id]),k.dispatchEvent(t),k.remoteStreams.hasOwnProperty(e.id)){l.default.info("closing stream on peer leave",e.id);var i=k.remoteStreams[e.id];i.close(),delete k.remoteStreams[e.id],void 0!==i.pc&&(i.pc.close(),i.pc=void 0)}k.timers.hasOwnProperty(e.id)&&(clearInterval(k.timers[e.id]),delete k.timers[e.id]),void 0!=k.audioLevel[e.id]&&delete k.audioLevel[e.id],void 0!=k.timer_counter[e.id]&&delete k.timer_counter[e.id]}),k.socket.on("onUplinkStats",function(e){}),k.socket.on("liveStreamingStarted",function(e){var t=(0,c.LiveStreamingEvent)({type:"liveStreamingStarted",url:e.url});k.dispatchEvent(t)}),k.socket.on("liveStreamingFailed",function(e){var t=(0,c.LiveStreamingEvent)({type:"liveStreamingFailed",url:e.url});k.dispatchEvent(t)}),k.socket.on("liveStreamingStopped",function(e){var t=(0,c.LiveStreamingEvent)({type:"liveStreamingStopped",url:e.url});k.dispatchEvent(t)}),k.socket.on("liveTranscodingUpdated",function(e){var t=(0,c.LiveStreamingEvent)({type:"liveTranscodingUpdated",reason:e.reason});k.dispatchEvent(t)}))},B=function(e,t,i){if(void 0===k.socket)return M(i,f.default.INVALID_OPERATION),void l.default.error("No socket available");try{k.socket.emitSimpleMessage(e,function(e,n){"success"===e?"function"==typeof t&&t(n):"function"==typeof i&&i(n)})}catch(t){M(i,f.default.SOCKET_ERROR),l.default.error("Socket emit message failed"+JSON.stringify(e)),l.default.error(t)}},x=function(e,t){if(void 0===k.socket)return void l.default.error("Error in sendSimpleSdp [socket not ready]");try{k.socket.emitSimpleMessage(e,function(e,i){void 0!==t&&t(e,i)})}catch(e){l.default.error("Error in sendSimpleSdp ["+e+"]")}};return k};t.default=E},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.LiveTranscoding=t.TranscodingUser=t.VIDEO_CODEC_PROFILE_HIGH=t.VIDEO_CODEC_PROFILE_MAIN=t.VIDEO_CODEC_PROFILE_BASELINE=t.AUDIO_SAMPLE_RATE_48000=t.AUDIO_SAMPLE_RATE_44100=t.AUDIO_SAMPLE_RATE_32000=t.createLiveClient=t.createRtcClient=t.createClient=void 0;var o=i(14),r=n(o),a=i(0),s=n(a),d=i(8),c=n(d),u=i(3),l=i(13),p=i(6),f=i(1),m=i(35),g=i(7),v=function(e){var t={};return t.key=void 0,t.highStream=null,t.lowStream=null,t.isDualStream=!1,t.highStreamState=2,t.lowStreamState=2,t._getVideoCameraIdByLabel=function(e,t,i){(0,g.getDevices)(function(n){console.log(n,e);var o=!0,r=!1,a=void 0;try{for(var s,d=n[Symbol.iterator]();!(o=(s=d.next()).done);o=!0){var c=s.value;if(c.label===e&&"videoinput"===c.kind)return console.log(c),t(c.deviceId)}}catch(e){r=!0,a=e}finally{try{!o&&d.return&&d.return()}finally{if(r)throw a}}return i()},i)},t.init=function(t,i,n){s.default.info("Initializing AgoraRTC client"),e.appId=t,e.sessionId=(0,u.generateSessionId)(),i()},t.configPublisher=function(e){t.gatewayClient.configPublisher(e)},t.enableDualStream=function(i,n){if("iOS"===(0,f.getBrowserOS)())return p.report.streamSwitch(e.sessionId,{lts:(new Date).getTime(),isdual:!0,succ:!1}),n&&n(c.default.IOS_NOT_SUPPORT);p.report.streamSwitch(e.sessionId,{lts:(new Date).getTime(),isdual:!0,succ:!0}),t.isDualStream=!0,0===t.highStreamState?t._publishLowStream(i,n):1===t.highStreamState?n&&n(c.default.STILL_ON_PUBLISHING):i&&i()},t.disableDualStream=function(i,n){p.report.streamSwitch(e.sessionId,{lts:(new Date).getTime(),isdual:!1,succ:!0}),t.isDualStream=!1,0===t.highStreamState?t._unpublishLowStream(i,n):1===t.highStreamState?n&&n(c.default.STILL_ON_PUBLISHING):i&&i()},t._createLowStream=function(e,i){if(!t.highStream||!t.highStream.stream)return s.default.warning("Can't create low-stream without highStream");var n=Object.assign({},t.highStream.params);if(n.streamID+=1,n.audio=!1,n.video){var o=t.highStream.stream.getVideoTracks()[0];o||i("can not get hight-stream video track"),t._getVideoCameraIdByLabel(o.label,function(r){n.cameraId=r;var a=new g.Stream(n);a.setVideoProfileCustom((0,m.simMap)(t.highStream.profile)),a.init(function(){t.highStream.lowStream=a,o.enabled||a.disableVideo(),e&&e(a)},function(){return i("can not get hight-stream video track")})})}},t._getLowStream=function(e,i){t.lowStream?e(t.lowStream):t._createLowStream(function(i){t.lowStream=i,e(t.lowStream)},i)},t._publishLowStream=function(e,i){return 2!==t.lowStreamState?(s.default.warning("Can't publish low-stream when low-stream already publish"),i&&i()):t.highStream&&t.highStream.hasScreen()?i&&i(c.default.SHARING_SCREEN_NOT_SUPPORT):void t._getLowStream(function(n){t.lowStreamState=1,t.gatewayClient.publish(n,function(){t.lowStreamState=0,e&&e()},function(e){s.default.debug("publish low stream failed"),i&&i(e)})},i)},t._unpublishLowStream=function(e,i){if(0!==t.lowStreamState)return s.default.warning("Can't unpublish low-stream when low-stream not ever publish"),i&&i();t.lowStream&&(t.lowStreamState=1,t.gatewayClient.unpublish(t.lowStream,function(){t.lowStreamState=2,e&&e()},function(e){s.default.debug("unpublish low stream failed"),i&&i(e)}))},t.join=function(i,n,o,r,a){t.highStream=null,t.lowStream=null,t.isDualStream=!1,t.highStreamState=2,t.lowStreamState=2;var d={appId:e.appId,sid:e.sessionId,cname:n,uid:o};p.report.sessionInit(e.sessionId,{lts:(new Date).getTime(),cname:n,appid:e.appId,mode:e.mode,succ:!0}),(0,l.getGatewayList)(d,function(o){s.default.info("Joining channel: "+n),t.key=i||e.appId,d.cid=o.cid,d.uid=o.uid,d.gatewayAddr=o.gateway_addr,t.gatewayClient.join(d,t.key,function(e){s.default.info("Join channal "+n+" success"),r(e)},a)},a)},t.renewChannelKey=function(e,i,n){void 0===t.key&&((0,u.safeCall)(n,c.default.INVALID_OPERATION),s.default.error("renewChannelKey should not be called before user join")),t.key=e,(0,u.safeCall)(i)},t.leave=function(e,i){s.default.info("Leaving channel"),t.gatewayClient.leave(e,i)},t.publish=function(e,i){if(2!==t.highStreamState)return s.default.warning("Can't publish stream when stream already publish",e.getId()),i&&i("stream already publish");s.default.info("Publishing stream, uid: ",e.getId()),t.highStream=e,t.highStreamState=1,t.gatewayClient.publish(e,function(){t.highStreamState=0,s.default.info("Publish success, uid:",e.getId()),t.isDualStream&&t._publishLowStream(null,i)},i)},t.unpublish=function(e,i){if(0!==t.highStreamState)return s.default.warning("Can't unpublish stream when stream not publish"),i&&i("stream not publish");s.default.info("Unpublish stream, uid: ",e.getId()),t.isDualStream&&t.lowStream?t._unpublishLowStream(function(){t.highStreamState=1,t.gatewayClient.unpublish(e,function(){t.highStreamState=2,s.default.info("Unpublish stream success, uid:",e.getId())},i)},i):(t.highStreamState=1,t.gatewayClient.unpublish(e,function(){t.highStreamState=2,s.default.info("Unpublish stream success, uid:",e.getId())},i))},t.subscribe=function(e,i){s.default.info("Subscribe stream, uid: ",e.getId()),t.gatewayClient.subscribe(e,i)},t.unsubscribe=function(e,i){s.default.info("Unsubscribe stream, uid: ",e.getId()),t.gatewayClient.unsubscribe(e,i)},t.setRemoteVideoStreamType=function(e,i){t.gatewayClient.setRemoteVideoStreamType(e,i)},t.startLiveStreaming=function(e,i){t.gatewayClient.startLiveStreaming(e,i)},t.stopLiveStreaming=function(e){t.gatewayClient.stopLiveStreaming(e)},t.setLiveTranscoding=function(e){Object.assign(_,e),t.gatewayClient.setLiveTranscoding(_)},t.gatewayClient=(0,r.default)(e),t.on=t.gatewayClient.on,t.on("rejoin",function(){var e=2===t.highStreamState?2:0;t.highStream&&0===e&&(s.default.info("publish after rejoin"),t.highStreamState=2,t.lowStreamState=2,t.publish(t.highStream,function(e){e&&s.default.info(e)}))}),t},S={uid:0,x:0,y:0,width:0,height:0,zOrder:0,alpha:1},_={width:640,height:360,videoBitrate:400,videoFramerate:15,lowLatency:!1,audioSampleRate:48e3,audioBitrate:48,audioChannels:1,videoGop:30,videoCodecProfile:100,userCount:0,userConfigExtraInfo:{},backgroundColor:0,transcodingUsers:[]},h=function(e){return e&&"interop"===e.mode?(s.default.info("Creating client , MODE : Interop"),v({mode:"live"})):e&&"h264_interop"===e.mode?(s.default.info("Creating client , MODE : h264_interop"),v({mode:"live",codec:"h264"})):(s.default.info("Creating client , MODE : web-only"),v({mode:"rtc"}))},b=function(){return s.default.info("Creating client , MODE : rtc"),s.default.warning("createRtcClient is deprecated."),v({mode:"rtc"})},E=function(e){var t="host";return e&&"audience"===e.role&&(t=e.role),s.default.info("Creating client , MODE : live"),s.default.warning("createLiveClient is deprecated."),v({mode:"live",role:t})};t.createClient=h,t.createRtcClient=b,t.createLiveClient=E,t.AUDIO_SAMPLE_RATE_32000=32e3,t.AUDIO_SAMPLE_RATE_44100=44100,t.AUDIO_SAMPLE_RATE_48000=48e3,t.VIDEO_CODEC_PROFILE_BASELINE=66,t.VIDEO_CODEC_PROFILE_MAIN=77,t.VIDEO_CODEC_PROFILE_HIGH=100,t.TranscodingUser=S,t.LiveTranscoding=_},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=i(5),r=n(o),a=i(9),s=(n(a),i(18)),d=n(s),c=i(0),u=n(c),l=i(20),p=function(e){var t=(0,r.default)({});return t.id=e.id,t.url=e.url,t.stream=e.stream.stream,t.elementID=e.elementID,t.destroy=function(){t.video.srcObject=null,t.audio.srcObject=null,t.video.pause(),delete t.resizer,document.getElementById(t.div.id)&&t.parentNode.removeChild(t.div)},t.resize=function(){var i=t.container.offsetWidth,n=t.container.offsetHeight;e.stream.screen?.75*i<n?(t.video.style.width=i+"px",t.video.style.height=.75*i+"px",t.video.style.top=-(.75*i/2-n/2)+"px",t.video.style.left="0px"):(t.video.style.height=n+"px",t.video.style.width=4/3*n+"px",t.video.style.left=-(4/3*n/2-i/2)+"px",t.video.style.top="0px"):i===t.containerWidth&&n===t.containerHeight||(.75*i>n?(t.video.style.width=i+"px",t.video.style.height=.75*i+"px",t.video.style.top=-(.75*i/2-n/2)+"px",t.video.style.left="0px"):(t.video.style.height=n+"px",t.video.style.width=4/3*n+"px",t.video.style.left=-(4/3*n/2-i/2)+"px",t.video.style.top="0px")),t.containerWidth=i,t.containerHeight=n},t.div=document.createElement("div"),t.div.setAttribute("id","player_"+t.id),e.stream.video?t.div.setAttribute("style","width: 100%; height: 100%; position: relative; background-color: black; overflow: hidden;"):t.div.setAttribute("style","width: 100%; height: 100%; position: relative; overflow: hidden;"),t.video=document.createElement("video"),t.video.setAttribute("id","video"+t.id),e.stream.local&&!e.stream.screen?t.video.setAttribute("style","width: 100%; height: 100%; position: absolute; transform: rotateY(180deg);"):e.stream.video?(t.video.setAttribute("style","width: 100%; height: 100%; position: absolute;"),window.navigator.userAgent.indexOf("Safari")>-1&&-1===navigator.userAgent.indexOf("Chrome")&&t.video.setAttribute("controls","")):e.stream.screen?t.video.setAttribute("style","width: 100%; height: 100%; position: absolute;"):t.video.setAttribute("style","width: 100%; height: 100%; position: absolute; display: none;"),t.video.setAttribute("autoplay",""),t.video.setAttribute("muted",""),t.video.setAttribute("playsinline",""),e.stream.local&&(t.video.volume=0,t.video.setAttribute("muted","")),t.audio=document.createElement("audio"),t.audio.setAttribute("id","audio"+t.id),t.audio.setAttribute("autoplay",""),e.stream.local&&(t.audio.volume=0,t.audio.setAttribute("muted","")),void 0!==t.elementID?(document.getElementById(t.elementID).appendChild(t.div),t.container=document.getElementById(t.elementID)):(document.body.appendChild(t.div),t.container=document.body),t.parentNode=t.div.parentNode,t.div.appendChild(t.video),t.div.appendChild(t.audio),t.video.addEventListener("playing",function(e){!function e(){if(t.video.videoWidth*t.video.videoHeight>4)return void u.default.debug("video dimensions:",t.video.videoWidth,t.video.videoHeight);setTimeout(e,50)}()}),t.containerWidth=0,t.containerHeight=0,t.resizer=new d.default(t.container,t.resize),t.resize(),(0,l.attachMediaStream)(document.getElementById("video"+t.id),e.stream.stream),(0,l.attachMediaStream)(document.getElementById("audio"+t.id),e.stream.stream),t};t.default=p},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(5),o=function(e){return e&&e.__esModule?e:{default:e}}(n),r=function(e){var t,i,n,r=(0,o.default)({}),a=50;return r.elementID=e.elementID,r.media=e.media,r.id=e.id,void 0!==e.url&&(r.url=e.url),r.stream=e.stream,r.div=document.createElement("div"),r.div.setAttribute("style","width: 40%; height: 100%; max-width: 32px; position: absolute; right: 0;z-index:0;"),r.icon=document.createElement("img"),r.icon.setAttribute("id","volume_"+r.id),r.icon.setAttribute("src",r.url+"/assets/sound48.png"),r.icon.setAttribute("style","width: 80%; height: 100%; position: absolute;"),r.div.appendChild(r.icon),r.stream.local?(i=function(){r.media.muted=!0,r.icon.setAttribute("src",r.url+"/assets/mute48.png")},n=function(){r.media.muted=!1,r.icon.setAttribute("src",r.url+"/assets/sound48.png")},r.icon.onclick=function(){r.media.muted?n():i()}):(r.picker=document.createElement("input"),r.picker.setAttribute("id","picker_"+r.id),r.picker.type="range",r.picker.min=0,r.picker.max=100,r.picker.step=10,r.picker.value=a,r.picker.setAttribute("orient","vertical"),r.div.appendChild(r.picker),r.media.volume=r.picker.value/100,r.media.muted=!1,r.picker.oninput=function(){r.picker.value>0?(r.media.muted=!1,r.icon.setAttribute("src",r.url+"/assets/sound48.png")):(r.media.muted=!0,r.icon.setAttribute("src",r.url+"/assets/mute48.png")),r.media.volume=r.picker.value/100},t=function(e){r.picker.setAttribute("style","background: transparent; width: 32px; height: 100px; position: absolute; bottom: 90%; z-index: 1;"+r.div.offsetHeight+"px; right: 0px; -webkit-appearance: slider-vertical; display: "+e)},i=function(){r.icon.setAttribute("src",r.url+"/assets/mute48.png"),a=r.picker.value,r.picker.value=0,r.media.volume=0,r.media.muted=!0},n=function(){r.icon.setAttribute("src",r.url+"/assets/sound48.png"),r.picker.value=a,r.media.volume=r.picker.value/100,r.media.muted=!1},r.icon.onclick=function(){r.media.muted?n():i()},r.div.onmouseover=function(){t("block")},r.div.onmouseout=function(){t("none")},t("none")),document.getElementById(r.elementID).appendChild(r.div),r};t.default=r},function(e,t,i){var n,o;!function(r,a){n=a,void 0!==(o="function"==typeof n?n.call(t,i,t,e):n)&&(e.exports=o)}(0,function(){function e(e,t){var i=Object.prototype.toString.call(e),n="[object Array]"===i||"[object NodeList]"===i||"[object HTMLCollection]"===i||"[object Object]"===i||"undefined"!=typeof jQuery&&e instanceof jQuery||"undefined"!=typeof Elements&&e instanceof Elements,o=0,r=e.length;if(n)for(;o<r;o++)t(e[o]);else t(e)}if("undefined"==typeof window)return null;var t=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(e){return window.setTimeout(e,20)},i=function(n,o){function r(){var e=[];this.add=function(t){e.push(t)};var t,i;this.call=function(){for(t=0,i=e.length;t<i;t++)e[t].call()},this.remove=function(n){var o=[];for(t=0,i=e.length;t<i;t++)e[t]!==n&&o.push(e[t]);e=o},this.length=function(){return e.length}}function a(e,t){return e.currentStyle?e.currentStyle[t]:window.getComputedStyle?window.getComputedStyle(e,null).getPropertyValue(t):e.style[t]}function s(e,i){if(e.resizedAttached){if(e.resizedAttached)return void e.resizedAttached.add(i)}else e.resizedAttached=new r,e.resizedAttached.add(i);e.resizeSensor=document.createElement("div"),e.resizeSensor.className="resize-sensor";var n="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;",o="position: absolute; left: 0; top: 0; transition: 0s;";e.resizeSensor.style.cssText=n,e.resizeSensor.innerHTML='<div class="resize-sensor-expand" style="'+n+'"><div style="'+o+'"></div></div><div class="resize-sensor-shrink" style="'+n+'"><div style="'+o+' width: 200%; height: 200%"></div></div>',e.appendChild(e.resizeSensor),"static"==a(e,"position")&&(e.style.position="relative");var s,d,c,u,l=e.resizeSensor.childNodes[0],p=l.childNodes[0],f=e.resizeSensor.childNodes[1],m=e.offsetWidth,g=e.offsetHeight,v=function(){p.style.width="100000px",p.style.height="100000px",l.scrollLeft=1e5,l.scrollTop=1e5,f.scrollLeft=1e5,f.scrollTop=1e5};v();var S=function(){d=0,s&&(m=c,g=u,e.resizedAttached&&e.resizedAttached.call())},_=function(){c=e.offsetWidth,u=e.offsetHeight,s=c!=m||u!=g,s&&!d&&(d=t(S)),v()},h=function(e,t,i){e.attachEvent?e.attachEvent("on"+t,i):e.addEventListener(t,i)};h(l,"scroll",_),h(f,"scroll",_)}e(n,function(e){s(e,o)}),this.detach=function(e){i.detach(n,e)}};return i.detach=function(t,i){e(t,function(e){e.resizedAttached&&"function"==typeof i&&(e.resizedAttached.remove(i),e.resizedAttached.length())||e.resizeSensor&&(e.contains(e.resizeSensor)&&e.removeChild(e.resizeSensor),delete e.resizeSensor,delete e.resizedAttached)})},i})},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=new Date;return e.toTimeString().split(" ")[0]+":"+e.getMilliseconds()};t.getTimestamp=n},function(e,t,i){"use strict";function n(e){return new Promise(function(t,i){r(e,t,i)})}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=null,a=null,s=null,d=null,c=null,u=null,l={log:function(){},extractVersion:function(e,t,i){var n=e.match(t);return n&&n.length>=i&&parseInt(n[i])}};if("object"===("undefined"==typeof window?"undefined":o(window))&&(!window.HTMLMediaElement||"srcObject"in window.HTMLMediaElement.prototype||Object.defineProperty(window.HTMLMediaElement.prototype,"srcObject",{get:function(){return"mozSrcObject"in this?this.mozSrcObject:this._srcObject},set:function(e){"mozSrcObject"in this?this.mozSrcObject=e:(this._srcObject=e,this.src=URL.createObjectURL(e))}}),r=window.navigator&&window.navigator.getUserMedia),a=function(e,t){e.srcObject=t},s=function(e,t){e.srcObject=t.srcObject},"undefined"!=typeof window&&window.navigator)if(navigator.mozGetUserMedia&&window.mozRTCPeerConnection){if(l.log("This appears to be Firefox"),d="firefox",c=l.extractVersion(navigator.userAgent,/Firefox\/([0-9]+)\./,1),u=31,window.RTCPeerConnection=function(e,t){if(c<38&&e&&e.iceServers){for(var i=[],n=0;n<e.iceServers.length;n++){var o=e.iceServers[n];if(o.hasOwnProperty("urls"))for(var r=0;r<o.urls.length;r++){var a={url:o.urls[r]};0===o.urls[r].indexOf("turn")&&(a.username=o.username,a.credential=o.credential),i.push(a)}else i.push(e.iceServers[n])}e.iceServers=i}return new mozRTCPeerConnection(e,t)},window.RTCSessionDescription||(window.RTCSessionDescription=mozRTCSessionDescription),window.RTCIceCandidate||(window.RTCIceCandidate=mozRTCIceCandidate),r=function(e,t,i){var n=function(e){if("object"!==(void 0===e?"undefined":o(e))||e.require)return e;var t=[];return Object.keys(e).forEach(function(i){if("require"!==i&&"advanced"!==i&&"mediaSource"!==i){var n=e[i]="object"===o(e[i])?e[i]:{ideal:e[i]};if(void 0===n.min&&void 0===n.max&&void 0===n.exact||t.push(i),void 0!==n.exact&&("number"==typeof n.exact?n.min=n.max=n.exact:e[i]=n.exact,delete n.exact),void 0!==n.ideal){e.advanced=e.advanced||[];var r={};"number"==typeof n.ideal?r[i]={min:n.ideal,max:n.ideal}:r[i]=n.ideal,e.advanced.push(r),delete n.ideal,Object.keys(n).length||delete e[i]}}}),t.length&&(e.require=t),e};return c<38&&(l.log("spec: "+JSON.stringify(e)),e.audio&&(e.audio=n(e.audio)),e.video&&(e.video=n(e.video)),l.log("ff37: "+JSON.stringify(e))),navigator.mozGetUserMedia(e,t,i)},navigator.getUserMedia=r,navigator.mediaDevices||(navigator.mediaDevices={getUserMedia:n,addEventListener:function(){},removeEventListener:function(){}}),navigator.mediaDevices.enumerateDevices=navigator.mediaDevices.enumerateDevices||function(){return new Promise(function(e){e([{kind:"audioinput",deviceId:"default",label:"",groupId:""},{kind:"videoinput",deviceId:"default",label:"",groupId:""}])})},c<41){var p=navigator.mediaDevices.enumerateDevices.bind(navigator.mediaDevices);navigator.mediaDevices.enumerateDevices=function(){return p().then(void 0,function(e){if("NotFoundError"===e.name)return[];throw e})}}}else if(navigator.webkitGetUserMedia&&window.webkitRTCPeerConnection){l.log("This appears to be Chrome"),d="chrome",c=l.extractVersion(navigator.userAgent,/Chrom(e|ium)\/([0-9]+)\./,2),u=38,window.RTCPeerConnection=function(e,t){e&&e.iceTransportPolicy&&(e.iceTransports=e.iceTransportPolicy);var i=new webkitRTCPeerConnection(e,t),n=i.getStats.bind(i);return i.getStats=function(e,t,i){var o=this,r=arguments;if(arguments.length>0&&"function"==typeof e)return n(e,t);var a=function(e){var t={};return e.result().forEach(function(e){var i={id:e.id,timestamp:e.timestamp,type:e.type};e.names().forEach(function(t){i[t]=e.stat(t)}),t[i.id]=i}),t};if(arguments.length>=2){var s=function(e){r[1](a(e))};return n.apply(this,[s,arguments[0]])}return new Promise(function(t,i){1===r.length&&null===e?n.apply(o,[function(e){t.apply(null,[a(e)])},i]):n.apply(o,[t,i])})},i},["createOffer","createAnswer"].forEach(function(e){var t=webkitRTCPeerConnection.prototype[e];webkitRTCPeerConnection.prototype[e]=function(){var e=this;if(arguments.length<1||1===arguments.length&&"object"===o(arguments[0])){var i=1===arguments.length?arguments[0]:void 0;return new Promise(function(n,o){t.apply(e,[n,o,i])})}return t.apply(this,arguments)}}),["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(e){var t=webkitRTCPeerConnection.prototype[e];webkitRTCPeerConnection.prototype[e]=function(){var e=arguments,i=this;return new Promise(function(n,o){t.apply(i,[e[0],function(){n(),e.length>=2&&e[1].apply(null,[])},function(t){o(t),e.length>=3&&e[2].apply(null,[t])}])})}});var f=function(e){if("object"!==(void 0===e?"undefined":o(e))||e.mandatory||e.optional)return e;var t={};return Object.keys(e).forEach(function(i){if("require"!==i&&"advanced"!==i&&"mediaSource"!==i){var n="object"===o(e[i])?e[i]:{ideal:e[i]};void 0!==n.exact&&"number"==typeof n.exact&&(n.min=n.max=n.exact);var r=function(e,t){return e?e+t.charAt(0).toUpperCase()+t.slice(1):"deviceId"===t?"sourceId":t};if(void 0!==n.ideal){t.optional=t.optional||[];var a={};"number"==typeof n.ideal?(a[r("min",i)]=n.ideal,t.optional.push(a),a={},a[r("max",i)]=n.ideal,t.optional.push(a)):(a[r("",i)]=n.ideal,t.optional.push(a))}void 0!==n.exact&&"number"!=typeof n.exact?(t.mandatory=t.mandatory||{},t.mandatory[r("",i)]=n.exact):["min","max"].forEach(function(e){void 0!==n[e]&&(t.mandatory=t.mandatory||{},t.mandatory[r(e,i)]=n[e])})}}),e.advanced&&(t.optional=(t.optional||[]).concat(e.advanced)),t};if(r=function(e,t,i){return e.audio&&(e.audio=f(e.audio)),e.video&&(e.video=f(e.video)),l.log("chrome: "+JSON.stringify(e)),navigator.webkitGetUserMedia(e,t,i)},navigator.getUserMedia=r,navigator.mediaDevices||(navigator.mediaDevices={getUserMedia:n,enumerateDevices:function(){return new Promise(function(e){var t={audio:"audioinput",video:"videoinput"};return MediaStreamTrack.getSources(function(i){e(i.map(function(e){return{label:e.label,kind:t[e.kind],deviceId:e.id,groupId:""}}))})})}}),navigator.mediaDevices.getUserMedia){var m=navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);navigator.mediaDevices.getUserMedia=function(e){return l.log("spec:   "+JSON.stringify(e)),e.audio=f(e.audio),e.video=f(e.video),l.log("chrome: "+JSON.stringify(e)),m(e)}}else navigator.mediaDevices.getUserMedia=function(e){return n(e)};void 0===navigator.mediaDevices.addEventListener&&(navigator.mediaDevices.addEventListener=function(){l.log("Dummy mediaDevices.addEventListener called.")}),void 0===navigator.mediaDevices.removeEventListener&&(navigator.mediaDevices.removeEventListener=function(){l.log("Dummy mediaDevices.removeEventListener called.")}),a=function(e,t){c>=43?e.srcObject=t:void 0!==e.src?e.src=URL.createObjectURL(t):l.log("Error attaching stream to element.")},s=function(e,t){c>=43?e.srcObject=t.srcObject:e.src=t.src}}else navigator.mediaDevices&&navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)?(l.log("This appears to be Edge"),d="edge",c=l.extractVersion(navigator.userAgent,/Edge\/(\d+).(\d+)$/,2),u=12):l.log("Browser does not appear to be WebRTC-capable");else l.log("This does not appear to be a browser"),d="not a browser";var g={};try{Object.defineProperty(g,"version",{set:function(e){c=e}})}catch(e){}var v;"undefined"!=typeof window&&(v=window.RTCPeerConnection),e.exports={RTCPeerConnection:v,getUserMedia:r,attachMediaStream:a,reattachMediaStream:s,webrtcDetectedBrowser:d,webrtcDetectedVersion:c,webrtcMinimumVersion:u,webrtcTesting:g,webrtcUtils:l}},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=i(5),r=n(o),a=i(9),s=n(a),d=i(0),c=n(d),u=i(1),l=function(e){var t,i,n=(0,r.default)({});if(n.id=e.id,n.url=e.url,n.stream=e.stream.stream,n.elementID=e.elementID,n.audio=document.createElement("audio"),n.audio.setAttribute("id","stream"+n.id),n.audio.setAttribute("style","width: 100%; height: 100%; position: absolute"),n.audio.setAttribute("autoplay","autoplay"),e.stream.local&&(n.audio.volume=0),e.stream.local&&(n.audio.volume=0),void 0!==n.elementID?(n.destroy=function(){n.audio.pause(),n.parentNode.removeChild(n.div)},t=function(){n.bar.display()},i=function(){n.bar.hide()},n.div=document.createElement("div"),n.div.setAttribute("id","player_"+n.id),n.div.setAttribute("style","width: 100%; height: 100%; position: relative; overflow: hidden;"),document.getElementById(n.elementID).appendChild(n.div),n.container=document.getElementById(n.elementID),n.parentNode=n.div.parentNode,n.div.appendChild(n.audio),n.bar=new s.default({elementID:"player_"+n.id,id:n.id,stream:e.stream,media:n.audio,options:e.options,url:n.url}),e.stream.local?n.div.onmouseover=i:n.div.onmouseover=t,n.div.onmouseout=i):(n.destroy=function(){n.audio.pause(),n.parentNode.removeChild(n.audio)},document.body.appendChild(n.audio),n.parentNode=document.body),c.default.debug("Creating URL from stream "+n.stream),(0,u.isSafari)())n.audio.srcObject=n.stream;else{var o=window.URL||webkitURL;n.stream_url=o.createObjectURL(n.stream),n.audio.src=n.stream_url}return n};t.default=l},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(0),o=function(e){return e&&e.__esModule?e:{default:e}}(n),r=function(e){var t={},i=webkitRTCPeerConnection;t.pc_config={iceServers:[]},t.con={optional:[{DtlsSrtpKeyAgreement:!0}]},e.iceServers instanceof Array?t.pc_config.iceServers=e.iceServers:(e.stunServerUrl&&(e.stunServerUrl instanceof Array?e.stunServerUrl.map(function(e){"string"==typeof e&&""!==e&&t.pc_config.iceServers.push({url:e})}):"string"==typeof e.stunServerUrl&&""!==e.stunServerUrl&&t.pc_config.iceServers.push({url:e.stunServerUrl})),e.turnServer&&(e.turnServer instanceof Array?e.turnServer.map(function(e){"string"==typeof e.url&&""!==e.url&&t.pc_config.iceServers.push({username:e.username,credential:e.password,url:e.url})}):"string"==typeof e.turnServer.url&&""!==e.turnServer.url&&t.pc_config.iceServers.push({username:e.turnServer.username,credential:e.turnServer.password,url:e.turnServer.url}))),void 0===e.audio&&(e.audio=!0),void 0===e.video&&(e.video=!0),t.mediaConstraints={mandatory:{OfferToReceiveVideo:e.video,OfferToReceiveAudio:e.audio}},t.roapSessionId=103,t.peerConnection=new i(t.pc_config,t.con),t.peerConnection.onicecandidate=function(e){e.candidate?t.iceCandidateCount+=1:(o.default.debug("PeerConnection State: "+t.peerConnection.iceGatheringState),void 0===t.ices&&(t.ices=0),t.ices=t.ices+1,t.ices>=1&&t.moreIceComing&&(t.moreIceComing=!1,t.markActionNeeded()))};var n=function(t){var i,n;return e.minVideoBW&&e.maxVideoBW&&(i=t.match(/m=video.*\r\n/),n=i[0]+"b=AS:"+e.maxVideoBW+"\r\n",t=t.replace(i[0],n),o.default.debug("Set Video Bitrate - min:"+e.minVideoBW+" max:"+e.maxVideoBW)),e.maxAudioBW&&(i=t.match(/m=audio.*\r\n/),n=i[0]+"b=AS:"+e.maxAudioBW+"\r\n",t=t.replace(i[0],n)),t};return t.processSignalingMessage=function(e){var i,o=JSON.parse(e);t.incomingMessage=o,"new"===t.state?"OFFER"===o.messageType?(i={sdp:o.sdp,type:"offer"},t.peerConnection.setRemoteDescription(new RTCSessionDescription(i)),t.state="offer-received",t.markActionNeeded()):t.error("Illegal message for this state: "+o.messageType+" in state "+t.state):"offer-sent"===t.state?"ANSWER"===o.messageType?(i={sdp:o.sdp,type:"answer"},i.sdp=n(i.sdp),t.peerConnection.setRemoteDescription(new RTCSessionDescription(i)),t.sendOK(),t.state="established"):"pr-answer"===o.messageType?(i={sdp:o.sdp,type:"pr-answer"},t.peerConnection.setRemoteDescription(new RTCSessionDescription(i))):"offer"===o.messageType?t.error("Not written yet"):t.error("Illegal message for this state: "+o.messageType+" in state "+t.state):"established"===t.state&&("OFFER"===o.messageType?(i={sdp:o.sdp,type:"offer"},t.peerConnection.setRemoteDescription(new RTCSessionDescription(i)),t.state="offer-received",t.markActionNeeded()):t.error("Illegal message for this state: "+o.messageType+" in state "+t.state))},t.addStream=function(e){t.peerConnection.addStream(e),t.markActionNeeded()},t.removeStream=function(){t.markActionNeeded()},t.close=function(){t.state="closed",t.peerConnection.close()},t.markActionNeeded=function(){t.actionNeeded=!0,t.doLater(function(){t.onstablestate()})},t.doLater=function(e){window.setTimeout(e,1)},t.onstablestate=function(){var e;if(t.actionNeeded){if("new"===t.state||"established"===t.state)t.peerConnection.createOffer(function(e){if(e.sdp=n(e.sdp),o.default.debug("Changed",e.sdp),e.sdp!==t.prevOffer)return t.peerConnection.setLocalDescription(e),t.state="preparing-offer",void t.markActionNeeded();o.default.debug("Not sending a new offer")},function(e){o.default.debug("peer connection create offer failed ",e)},t.mediaConstraints);else if("preparing-offer"===t.state){if(t.moreIceComing)return;t.prevOffer=t.peerConnection.localDescription.sdp,t.sendMessage("OFFER",t.prevOffer),t.state="offer-sent"}else if("offer-received"===t.state)t.peerConnection.createAnswer(function(e){if(t.peerConnection.setLocalDescription(e),t.state="offer-received-preparing-answer",t.iceStarted)return void t.markActionNeeded();var i=new Date;o.default.debug(i.getTime()+": Starting ICE in responder"),t.iceStarted=!0},function(e){o.default.debug("peer connection create answer failed ",e)},t.mediaConstraints);else if("offer-received-preparing-answer"===t.state){if(t.moreIceComing)return;e=t.peerConnection.localDescription.sdp,t.sendMessage("ANSWER",e),t.state="established"}else t.error("Dazed and confused in state "+t.state+", stopping here");t.actionNeeded=!1}},t.sendOK=function(){t.sendMessage("OK")},t.sendMessage=function(e,i){var n={};n.messageType=e,n.sdp=i,"OFFER"===e?(n.offererSessionId=t.sessionId,n.answererSessionId=t.otherSessionId,n.seq=t.sequenceNumber+=1,n.tiebreaker=Math.floor(429496723*Math.random()+1)):(n.offererSessionId=t.incomingMessage.offererSessionId,n.answererSessionId=t.sessionId,n.seq=t.incomingMessage.seq),t.onsignalingmessage(JSON.stringify(n))},t.error=function(e){throw"Error in RoapOnJsep: "+e},t.sessionId=t.roapSessionId+=1,t.sequenceNumber=0,t.actionNeeded=!1,t.iceStarted=!1,t.moreIceComing=!0,t.iceCandidateCount=0,t.onsignalingmessage=e.callback,t.peerConnection.onopen=function(){t.onopen&&t.onopen()},t.peerConnection.onaddstream=function(e){t.onaddstream&&t.onaddstream(e)},t.peerConnection.onremovestream=function(e){t.onremovestream&&t.onremovestream(e)},t.peerConnection.oniceconnectionstatechange=function(e){t.oniceconnectionstatechange&&t.oniceconnectionstatechange(e.currentTarget.iceConnectionState)},t.onaddstream=null,t.onremovestream=null,t.state="new",t.markActionNeeded(),t};t.default=r},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(0),o=function(e){return e&&e.__esModule?e:{default:e}}(n),r=function(e){var t={},i=RTCPeerConnection;t.isSubscriber=e.isSubscriber,t.pc_config={iceServers:[]},t.con={optional:[{DtlsSrtpKeyAgreement:!0}]},e.iceServers instanceof Array?t.pc_config.iceServers=e.iceServers:(e.stunServerUrl&&(e.stunServerUrl instanceof Array?e.stunServerUrl.map(function(e){"string"==typeof e&&""!==e&&t.pc_config.iceServers.push({url:e})}):"string"==typeof e.stunServerUrl&&""!==e.stunServerUrl&&t.pc_config.iceServers.push({url:e.stunServerUrl})),e.turnServer&&(e.turnServer instanceof Array?e.turnServer.map(function(e){"string"==typeof e.url&&""!==e.url&&t.pc_config.iceServers.push({username:e.username,credential:e.password,url:e.url})}):"string"==typeof e.turnServer.url&&""!==e.turnServer.url&&t.pc_config.iceServers.push({username:e.turnServer.username,credential:e.turnServer.password,url:e.turnServer.url}))),void 0===e.audio&&(e.audio=!0),void 0===e.video&&(e.video=!0),t.mediaConstraints={mandatory:{OfferToReceiveVideo:e.video,OfferToReceiveAudio:e.audio}},t.roapSessionId=103,t.peerConnection=new i(t.pc_config,t.con),t.peerConnection.onicecandidate=function(e){e.candidate?(0===t.iceCandidateCount&&(t.timeout=setTimeout(function(){t.moreIceComing&&(t.moreIceComing=!1,t.markActionNeeded())},1e3)),t.iceCandidateCount=t.iceCandidateCount+1):(o.default.debug("PeerConnection State: "+t.peerConnection.iceGatheringState),clearTimeout(t.timeout),void 0===t.ices&&(t.ices=0),t.ices=t.ices+1,t.ices>=1&&t.moreIceComing&&(t.moreIceComing=!1,t.markActionNeeded()))};var n=function(t){return e.screen&&(t=t.replace("a=x-google-flag:conference\r\n","")),t},r=function(t){var i,n;return e.minVideoBW&&e.maxVideoBW&&(i=t.match(/m=video.*\r\n/),n=i[0]+"b=AS:"+e.maxVideoBW+"\r\n",t=t.replace(i[0],n),o.default.debug("Set Video Bitrate - min:"+e.minVideoBW+" max:"+e.maxVideoBW)),e.maxAudioBW&&(i=t.match(/m=audio.*\r\n/),n=i[0]+"b=AS:"+e.maxAudioBW+"\r\n",t=t.replace(i[0],n)),t};return t.processSignalingMessage=function(e){var i,o=JSON.parse(e);t.incomingMessage=o,"new"===t.state?"OFFER"===o.messageType?(i={sdp:o.sdp,type:"offer"},t.peerConnection.setRemoteDescription(new RTCSessionDescription(i)),t.state="offer-received",t.markActionNeeded()):t.error("Illegal message for this state: "+o.messageType+" in state "+t.state):"offer-sent"===t.state?"ANSWER"===o.messageType?(i={sdp:o.sdp,type:"answer"},i.sdp=n(i.sdp),i.sdp=r(i.sdp),t.peerConnection.setRemoteDescription(new RTCSessionDescription(i)),t.sendOK(),t.state="established"):"pr-answer"===o.messageType?(i={sdp:o.sdp,type:"pr-answer"},t.peerConnection.setRemoteDescription(new RTCSessionDescription(i))):"offer"===o.messageType?t.error("Not written yet"):t.error("Illegal message for this state: "+o.messageType+" in state "+t.state):"established"===t.state&&("OFFER"===o.messageType?(i={sdp:o.sdp,type:"offer"},t.peerConnection.setRemoteDescription(new RTCSessionDescription(i)),t.state="offer-received",t.markActionNeeded()):t.error("Illegal message for this state: "+o.messageType+" in state "+t.state))},t.getStatsRate=function(e){t.getStats(function(t){e(t)})},t.getStats=function(e){t.peerConnection.getStats(null,function(i){var n=[],o=[],r=null;Object.keys(i).forEach(function(e){var t=i[e];o.push(t),"ssrc"!==t.type&&"VideoBwe"!==t.type||(r=t.timestamp,n.push(t))}),n.push({id:"time",startTime:t.connectedTime,timestamp:r||new Date}),e(n,o)})},t.addStream=function(e){t.peerConnection.addStream(e),t.markActionNeeded()},t.removeStream=function(){t.markActionNeeded()},t.close=function(){t.state="closed",t.peerConnection.close()},t.markActionNeeded=function(){t.actionNeeded=!0,t.doLater(function(){t.onstablestate()})},t.doLater=function(e){window.setTimeout(e,1)},t.onstablestate=function(){var e;if(t.actionNeeded){if("new"===t.state||"established"===t.state)t.peerConnection.createOffer(function(e){if(e.sdp=r(e.sdp),e.sdp!==t.prevOffer)return t.peerConnection.setLocalDescription(e),t.state="preparing-offer",void t.markActionNeeded();o.default.debug("Not sending a new offer")},function(e){o.default.debug("peer connection create offer failed ",e)},t.mediaConstraints);else if("preparing-offer"===t.state){if(t.moreIceComing)return;t.prevOffer=t.peerConnection.localDescription.sdp,t.sendMessage("OFFER",t.prevOffer),t.state="offer-sent"}else if("offer-received"===t.state)t.peerConnection.createAnswer(function(e){if(t.peerConnection.setLocalDescription(e),t.state="offer-received-preparing-answer",t.iceStarted)return void t.markActionNeeded();var i=new Date;o.default.debug(i.getTime()+": Starting ICE in responder"),t.iceStarted=!0},function(e){o.default.debug("peer connection create answer failed ",e)},t.mediaConstraints);else if("offer-received-preparing-answer"===t.state){if(t.moreIceComing)return;e=t.peerConnection.localDescription.sdp,t.sendMessage("ANSWER",e),t.state="established"}else t.error("Dazed and confused in state "+t.state+", stopping here");t.actionNeeded=!1}},t.sendOK=function(){t.sendMessage("OK")},t.sendMessage=function(e,i){var n={};n.messageType=e,n.sdp=i,"OFFER"===e?(n.offererSessionId=t.sessionId,n.answererSessionId=t.otherSessionId,n.seq=t.sequenceNumber+=1,n.tiebreaker=Math.floor(429496723*Math.random()+1)):(n.offererSessionId=t.incomingMessage.offererSessionId,n.answererSessionId=t.sessionId,n.seq=t.incomingMessage.seq),t.onsignalingmessage(JSON.stringify(n))},t.error=function(e){throw"Error in RoapOnJsep: "+e},t.sessionId=t.roapSessionId+=1,t.sequenceNumber=0,t.actionNeeded=!1,t.iceStarted=!1,t.moreIceComing=!0,t.iceCandidateCount=0,t.onsignalingmessage=e.callback,t.peerConnection.ontrack=function(e){t.onaddstream&&t.onaddstream(e,"ontrack")},t.peerConnection.onaddstream=function(e){t.onaddstream&&t.onaddstream(e,"onaddstream")},t.peerConnection.onremovestream=function(e){t.onremovestream&&t.onremovestream(e)},t.peerConnection.oniceconnectionstatechange=function(e){"connected"===e.currentTarget.iceConnectionState&&(t.connectedTime=new Date),t.oniceconnectionstatechange&&t.oniceconnectionstatechange(e.currentTarget.iceConnectionState)},t.onaddstream=null,t.onremovestream=null,t.state="new",t.markActionNeeded(),t};t.default=r},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(0),o=function(e){return e&&e.__esModule?e:{default:e}}(n),r=function(e){var t={};RTCPeerConnection;t.isSubscriber=e.isSubscriber,t.pc_config={iceServers:[{urls:["stun:72.251.224.27:3478"]}],bundlePolicy:"max-bundle"},t.con={optional:[{DtlsSrtpKeyAgreement:!0}]},e.iceServers instanceof Array?t.pc_config.iceServers=e.iceServers:(e.stunServerUrl&&(e.stunServerUrl instanceof Array?e.stunServerUrl.map(function(e){"string"==typeof e&&""!==e&&t.pc_config.iceServers.push({url:e})}):"string"==typeof e.stunServerUrl&&""!==e.stunServerUrl&&t.pc_config.iceServers.push({url:e.stunServerUrl})),e.turnServer&&(e.turnServer instanceof Array?e.turnServer.map(function(e){"string"==typeof e.url&&""!==e.url&&t.pc_config.iceServers.push({username:e.username,credential:e.password,url:e.url})}):"string"==typeof e.turnServer.url&&""!==e.turnServer.url&&t.pc_config.iceServers.push({username:e.turnServer.username,credential:e.turnServer.password,url:e.turnServer.url}))),void 0===e.audio&&(e.audio=!0),void 0===e.video&&(e.video=!0),t.mediaConstraints={mandatory:{OfferToReceiveVideo:e.video,OfferToReceiveAudio:e.audio}},t.roapSessionId=103,t.peerConnection=new RTCPeerConnection({iceServers:[{urls:["stun:webcs.agora.io:3478","stun:stun.l.google.com:19302"]}],bundlePolicy:"max-bundle"}),t.peerConnection.onicecandidate=function(i){o.default.debug("PeerConnection: ",e.session_id,i),i.candidate?(0===t.iceCandidateCount&&(t.timeout=setTimeout(function(){t.moreIceComing&&(t.moreIceComing=!1,t.markActionNeeded())},1e3)),t.iceCandidateCount=t.iceCandidateCount+1):(o.default.debug("PeerConnection State: "+t.peerConnection.iceGatheringState),clearTimeout(t.timeout),void 0===t.ices&&(t.ices=0),t.ices=t.ices+1,t.ices>=1&&t.moreIceComing&&(t.moreIceComing=!1,t.markActionNeeded()))};var i=function(t){return e.screen&&(t=t.replace("a=x-google-flag:conference\r\n","")),t},n=function(t){var i,n;return e.minVideoBW&&e.maxVideoBW&&(i=t.match(/m=video.*\r\n/),n=i[0]+"b=AS:"+e.maxVideoBW+"\r\n",t=t.replace(i[0],n),o.default.debug("Set Video Bitrate - min:"+e.minVideoBW+" max:"+e.maxVideoBW)),e.maxAudioBW&&(i=t.match(/m=audio.*\r\n/),n=i[0]+"b=AS:"+e.maxAudioBW+"\r\n",t=t.replace(i[0],n)),t};t.processSignalingMessage=function(e){var o,r=JSON.parse(e);t.incomingMessage=r,"new"===t.state?"OFFER"===r.messageType?(o={sdp:r.sdp,type:"offer"},t.peerConnection.setRemoteDescription(new RTCSessionDescription(o)),t.state="offer-received",t.markActionNeeded()):t.error("Illegal message for this state: "+r.messageType+" in state "+t.state):"offer-sent"===t.state?"ANSWER"===r.messageType?(o={sdp:r.sdp,type:"answer"},o.sdp=i(o.sdp),o.sdp=n(o.sdp),o.sdp=o.sdp.replace(/a=x-google-flag:conference\r\n/g,""),t.peerConnection.setRemoteDescription(new RTCSessionDescription(o)),t.sendOK(),t.state="established"):"pr-answer"===r.messageType?(o={sdp:r.sdp,type:"pr-answer"},t.peerConnection.setRemoteDescription(new RTCSessionDescription(o))):"offer"===r.messageType?t.error("Not written yet"):t.error("Illegal message for this state: "+r.messageType+" in state "+t.state):"established"===t.state&&("OFFER"===r.messageType?(o={sdp:r.sdp,type:"offer"},t.peerConnection.setRemoteDescription(new RTCSessionDescription(o)),t.state="offer-received",t.markActionNeeded()):t.error("Illegal message for this state: "+r.messageType+" in state "+t.state))};var r={id:"",type:"",mediaType:"",googCodecName:"opus",aecDivergentFilterFraction:"0",audioInputLevel:"0",bytesSent:"0",packetsSent:"0",googEchoCancellationReturnLoss:"0",googEchoCancellationReturnLossEnhancement:"0"},a={id:"",type:"",mediaType:"",googCodecName:"h264"===e.codec?"H264":"VP8",bytesSent:"0",packetsLost:"0",packetsSent:"0",googAdaptationChanges:"0",googAvgEncodeMs:"0",googEncodeUsagePercent:"0",googFirsReceived:"0",googFrameHeightSent:"0",googFrameHeightInput:"0",googFrameRateInput:"0",googFrameRateSent:"0",googFrameWidthSent:"0",googFrameWidthInput:"0",googNacksReceived:"0",googPlisReceived:"0",googRtt:"0",googFramesEncoded:"0"},s={id:"",type:"",mediaType:"",audioOutputLevel:"0",bytesReceived:"0",packetsLost:"0",packetsReceived:"0",googAccelerateRate:"0",googCurrentDelayMs:"0",googDecodingCNG:"0",googDecodingCTN:"0",googDecodingCTSG:"0",googDecodingNormal:"0",googDecodingPLC:"0",googDecodingPLCCNG:"0",googExpandRate:"0",googJitterBufferMs:"0",googJitterReceived:"0",googPreemptiveExpandRate:"0",googPreferredJitterBufferMs:"0",googSecondaryDecodedRate:"0",googSpeechExpandRate:"0"},d={id:"",type:"",mediaType:"",googTargetDelayMs:"0",packetsLost:"0",googDecodeMs:"0",googMaxDecodeMs:"0",googRenderDelayMs:"0",googFrameWidthReceived:"0",googFrameHeightReceived:"0",googFrameRateReceived:"0",googFrameRateDecoded:"0",googFrameRateOutput:"0",googFramesDecoded:"0",googFrameReceived:"0",googJitterBufferMs:"0",googCurrentDelayMs:"0",googMinPlayoutDelayMs:"0",googNacksSent:"0",googPlisSent:"0",googFirsSent:"0",bytesReceived:"0",packetsReceived:"0"},c={id:"bweforvideo",type:"VideoBwe",googAvailableSendBandwidth:"0",googAvailableReceiveBandwidth:"0",googActualEncBitrate:"0",googRetransmitBitrate:"0",googTargetEncBitrate:"0",googBucketDelay:"0",googTransmitBitrate:"0"},u=0,l=0,p=0;return t.getStatsRate=function(e){t.getStats(function(t){t.forEach(function(e){"outbound-rtp"===e.type&&"video"===e.mediaType&&e.googFramesEncoded&&(e.googFrameRateSent=((e.googFramesEncoded-u)/3).toString(),u=e.googFramesEncoded),"inbound-rtp"===e.type&&-1!=e.id.indexOf("55543")&&(e.googFrameRateReceived&&(e.googFrameRateReceived=((e.googFrameReceived-p)/3).toString(),p=e.googFrameReceived),e.googFrameRateDecoded&&(e.googFrameRateDecoded=((e.googFramesDecoded-l)/3).toString(),l=e.googFramesDecoded))}),e(t)})},t.getStats=function(e){var i=[];t.peerConnection.getStats().then(function(n){n.forEach(function(e){i.push(e),"outbound-rtp"===e.type&&"audio"===e.mediaType&&(r.id=e.id,r.type=e.type,r.mediaType=e.mediaType,r.bytesSent=e.bytesSent.toString(),r.packetsSent=e.packetsSent.toString()),"outbound-rtp"===e.type&&"video"===e.mediaType&&(a.id=e.id,a.type=e.type,a.mediaType=e.mediaType,a.bytesSent=e.bytesSent.toString(),a.packetsSent=e.packetsSent.toString(),a.googPlisReceived=e.pliCount.toString(),a.googNacksReceived=e.nackCount.toString(),a.googFirsReceived=e.firCount.toString(),a.googFramesEncoded=e.framesEncoded.toString()),"inbound-rtp"===e.type&&-1!=e.id.indexOf("44444")&&(s.id=e.id,s.type=e.type,s.mediaType="audio",s.packetsReceived=e.packetsReceived.toString(),s.bytesReceived=e.bytesReceived.toString(),s.packetsLost=e.packetsLost.toString(),s.packetsReceived=e.packetsReceived.toString(),s.googJitterReceived=e.jitter.toString()),"inbound-rtp"===e.type&&-1!=e.id.indexOf("55543")&&(d.id=e.id,d.type=e.type,d.mediaType="video",d.packetsReceived=e.packetsReceived.toString(),d.bytesReceived=e.bytesReceived.toString(),d.packetsLost=e.packetsLost.toString(),d.googJitterBufferMs=e.jitter.toString(),d.googNacksSent=e.nackCount.toString(),d.googPlisSent=e.pliCount.toString(),d.googFirsSent=e.firCount.toString()),"track"===e.type&&-1!=e.id.indexOf("55543")&&(d.googFrameWidthReceived=e.frameWidth.toString(),d.googFrameHeightReceived=e.frameHeight.toString(),d.googFrameReceived=e.framesReceived.toString(),d.googFramesDecoded=e.framesDecoded.toString()),"track"===e.type&&-1!=e.id.indexOf("44444")&&(s.audioOutputLevel=e.audioLevel+"",r.audioInputLevel=e.audioLevel+""),"candidate-pair"===e.type&&(0==e.availableIncomingBitrate?c.googAvailableSendBandwidth=e.availableOutgoingBitrate+"":c.googAvailableReceiveBandwidth=e.availableIncomingBitrate+"")});var o=[c,r,a,s,d];o.push({id:"time",startTime:t.connectedTime,timestamp:new Date}),e(o,i)}).catch(function(e){console.error(e)})},t.addStream=function(e){window.navigator.userAgent.indexOf("Safari")>-1&&-1===navigator.userAgent.indexOf("Chrome")?e.getTracks().forEach(function(i){return t.peerConnection.addTrack(i,e)}):t.peerConnection.addStream(e),t.markActionNeeded()},t.removeStream=function(){t.markActionNeeded()},t.close=function(){t.state="closed",t.peerConnection.close()},t.markActionNeeded=function(){t.actionNeeded=!0,t.doLater(function(){t.onstablestate()})},t.doLater=function(e){window.setTimeout(e,1)},t.onstablestate=function(){var i;if(t.actionNeeded){if("new"===t.state||"established"===t.state){if(e.isSubscriber&&window.navigator.userAgent.indexOf("Safari")>-1&&-1===navigator.userAgent.indexOf("Chrome")){var r=t.peerConnection.addTransceiver("audio"),a=t.peerConnection.addTransceiver("video");r.setDirection("recvonly"),a.setDirection("recvonly")}t.peerConnection.createOffer(t.mediaConstraints).then(function(i){if(i.sdp=n(i.sdp),e.isSubscriber||(i.sdp=i.sdp.replace(/a=extmap:4 urn:3gpp:video-orientation\r\n/g,"")),i.sdp!==t.prevOffer)return t.peerConnection.setLocalDescription(i),t.state="preparing-offer",void t.markActionNeeded();o.default.debug("Not sending a new offer")}).catch(function(e){o.default.debug("peer connection create offer failed ",e)})}else if("preparing-offer"===t.state){if(t.moreIceComing)return;t.prevOffer=t.peerConnection.localDescription.sdp,t.sendMessage("OFFER",t.prevOffer),t.state="offer-sent"}else if("offer-received"===t.state)t.peerConnection.createAnswer(function(e){if(t.peerConnection.setLocalDescription(e),t.state="offer-received-preparing-answer",t.iceStarted)return void t.markActionNeeded();var i=new Date;o.default.debug(i.getTime()+": Starting ICE in responder"),t.iceStarted=!0},function(e){o.default.debug("peer connection create answer failed ",e)},t.mediaConstraints);else if("offer-received-preparing-answer"===t.state){if(t.moreIceComing)return;i=t.peerConnection.localDescription.sdp,t.sendMessage("ANSWER",i),t.state="established"}else t.error("Dazed and confused in state "+t.state+", stopping here");t.actionNeeded=!1}},t.sendOK=function(){t.sendMessage("OK")},t.sendMessage=function(e,i){var n={};n.messageType=e,n.sdp=i,"OFFER"===e?(n.offererSessionId=t.sessionId,n.answererSessionId=t.otherSessionId,n.seq=t.sequenceNumber+=1,n.tiebreaker=Math.floor(429496723*Math.random()+1)):(n.offererSessionId=t.incomingMessage.offererSessionId,n.answererSessionId=t.sessionId,n.seq=t.incomingMessage.seq),t.onsignalingmessage(JSON.stringify(n))},t.error=function(e){throw"Error in RoapOnJsep: "+e},t.sessionId=t.roapSessionId+=1,t.sequenceNumber=0,t.actionNeeded=!1,t.iceStarted=!1,t.moreIceComing=!0,t.iceCandidateCount=0,t.onsignalingmessage=e.callback,t.peerConnection.ontrack=function(e){t.onaddstream&&t.onaddstream(e,"ontrack")},t.peerConnection.onremovestream=function(e){t.onremovestream&&t.onremovestream(e)},t.peerConnection.oniceconnectionstatechange=function(e){"connected"===e.currentTarget.iceConnectionState&&(t.connectedTime=new Date),t.oniceconnectionstatechange&&t.oniceconnectionstatechange(e.currentTarget.iceConnectionState)},t.onaddstream=null,t.onremovestream=null,t.state="new",t.markActionNeeded(),t};t.default=r},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e={};return e.addStream=function(){},e};t.default=n},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(0),o=function(e){return e&&e.__esModule?e:{default:e}}(n),r=function(e){var t={},i=(mozRTCPeerConnection,mozRTCSessionDescription),n=!1;t.isSubscriber=e.isSubscriber,t.pc_config={iceServers:[]},e.iceServers instanceof Array?e.iceServers.map(function(e){0===e.url.indexOf("stun:")&&t.pc_config.iceServers.push({url:e.url})}):e.stunServerUrl&&(e.stunServerUrl instanceof Array?e.stunServerUrl.map(function(e){"string"==typeof e&&""!==e&&t.pc_config.iceServers.push({url:e})}):"string"==typeof e.stunServerUrl&&""!==e.stunServerUrl&&t.pc_config.iceServers.push({url:e.stunServerUrl})),void 0===e.audio&&(e.audio=!0),void 0===e.video&&(e.video=!0),t.mediaConstraints={offerToReceiveAudio:e.audio,offerToReceiveVideo:e.video,mozDontOfferDataChannel:!0},t.roapSessionId=103,t.peerConnection=new RTCPeerConnection(t.pc_config),t.peerConnection.onicecandidate=function(e){e.candidate?t.iceCandidateCount+=1:(o.default.debug("PeerConnection State: "+t.peerConnection.iceGatheringState),void 0===t.ices&&(t.ices=0),t.ices=t.ices+1,t.ices>=1&&t.moreIceComing&&(t.moreIceComing=!1,t.markActionNeeded()))},t.processSignalingMessage=function(e){var n,r=JSON.parse(e);t.incomingMessage=r,"new"===t.state?"OFFER"===r.messageType?(r.sdp=u(r.sdp),n={sdp:r.sdp,type:"offer"},t.peerConnection.setRemoteDescription(new i(n),function(){o.default.debug("setRemoteDescription succeeded")},function(e){o.default.info("setRemoteDescription failed: "+e.name)}),t.state="offer-received",t.markActionNeeded()):t.error("Illegal message for this state: "+r.messageType+" in state "+t.state):"offer-sent"===t.state?"ANSWER"===r.messageType?(r.sdp=u(r.sdp),r.sdp=r.sdp.replace(/ generation 0/g,""),r.sdp=r.sdp.replace(/ udp /g," UDP "),r.sdp=r.sdp.replace(/a=group:BUNDLE audio video/,"a=group:BUNDLE sdparta_0 sdparta_1"),r.sdp=r.sdp.replace(/a=mid:audio/,"a=mid:sdparta_0"),r.sdp=r.sdp.replace(/a=mid:video/,"a=mid:sdparta_1"),n={sdp:r.sdp,type:"answer"},t.peerConnection.setRemoteDescription(new i(n),function(){o.default.debug("setRemoteDescription succeeded")},function(e){o.default.info("setRemoteDescription failed: "+e)}),t.sendOK(),t.state="established"):"pr-answer"===r.messageType?(n={sdp:r.sdp,type:"pr-answer"},t.peerConnection.setRemoteDescription(new i(n),function(){o.default.debug("setRemoteDescription succeeded")},function(e){o.default.info("setRemoteDescription failed: "+e.name)})):"offer"===r.messageType?t.error("Not written yet"):t.error("Illegal message for this state: "+r.messageType+" in state "+t.state):"established"===t.state&&("OFFER"===r.messageType?(n={sdp:r.sdp,type:"offer"},t.peerConnection.setRemoteDescription(new i(n),function(){o.default.debug("setRemoteDescription succeeded")},function(e){o.default.info("setRemoteDescription failed: "+e.name)}),t.state="offer-received",t.markActionNeeded()):t.error("Illegal message for this state: "+r.messageType+" in state "+t.state))};var r={id:"",type:"",mediaType:"opus",googCodecName:"opus",aecDivergentFilterFraction:"0",audioInputLevel:"0",bytesSent:"0",packetsSent:"0",googEchoCancellationReturnLoss:"0",googEchoCancellationReturnLossEnhancement:"0"},a={id:"",type:"",mediaType:"",googCodecName:"h264"===e.codec?"H264":"VP8",bytesSent:"0",packetsLost:"0",packetsSent:"0",googAdaptationChanges:"0",googAvgEncodeMs:"0",googEncodeUsagePercent:"0",googFirsReceived:"0",googFrameHeightSent:"0",googFrameHeightInput:"0",googFrameRateInput:"0",googFrameRateSent:"0",googFrameWidthSent:"0",googFrameWidthInput:"0",googNacksReceived:"0",googPlisReceived:"0",googRtt:"0"},s={id:"",type:"",mediaType:"",audioOutputLevel:"0",bytesReceived:"0",packetsLost:"0",packetsReceived:"0",googAccelerateRate:"0",googCurrentDelayMs:"0",googDecodingCNG:"0",googDecodingCTN:"0",googDecodingCTSG:"0",googDecodingNormal:"0",googDecodingPLC:"0",googDecodingPLCCNG:"0",googExpandRate:"0",googJitterBufferMs:"0",googJitterReceived:"0",googPreemptiveExpandRate:"0",googPreferredJitterBufferMs:"0",googSecondaryDecodedRate:"0",googSpeechExpandRate:"0"},d={id:"",type:"",mediaType:"",googTargetDelayMs:"0",packetsLost:"0",googDecodeMs:"0",googMaxDecodeMs:"0",googRenderDelayMs:"0",googFrameWidthReceived:"0",googFrameHeightReceived:"0",googFrameRateReceived:"0",googFrameRateDecoded:"0",googFrameRateOutput:"0",googJitterBufferMs:"0",googCurrentDelayMs:"0",googMinPlayoutDelayMs:"0",googNacksSent:"0",googPlisSent:"0",googFirsSent:"0",bytesReceived:"0",packetsReceived:"0",googFramesDecoded:"0"},c=0;t.getStatsRate=function(e){t.getStats(function(t){t.forEach(function(e){"inboundrtp"===e.type&&"video"===e.mediaType&&e.googFrameRateDecoded&&(e.googFrameRateDecoded=((e.googFramesDecoded-c)/3).toString(),c=e.googFramesDecoded)}),e(t)})},t.getStats=function(e){t.peerConnection.getStats().then(function(i){var n=[];Object.keys(i).forEach(function(e){var t=i[e];n.push(t),"outboundrtp"===t.type&&"video"===t.mediaType&&(a.id=t.id,a.type=t.type,a.mediaType=t.mediaType,a.bytesSent=t.bytesSent.toString(),a.packetsSent=t.packetsSent.toString(),a.googPlisReceived=t.pliCount.toString(),a.googNacksReceived=t.nackCount.toString(),a.googFirsReceived=t.firCount.toString(),a.googFrameRateSent=t.framerateMean.toString()),"outboundrtp"===t.type&&"audio"===t.mediaType&&(r.id=t.id,r.type=t.type,r.mediaType=t.mediaType,r.bytesSent=t.bytesSent.toString(),r.packetsSent=t.packetsSent.toString()),"inboundrtp"!==t.type||"audio"!==t.mediaType||t.isRemote||(s.id=t.id,s.type=t.type,s.mediaType=t.mediaType,s.bytesReceived=t.bytesReceived.toString(),s.packetsLost=t.packetsLost.toString(),s.packetsReceived=t.packetsReceived.toString(),s.googJitterReceived=t.jitter.toString()),"inboundrtp"!==t.type||"video"!==t.mediaType||t.isRemote||(d.id=t.id,d.type=t.type,d.mediaType=t.mediaType,d.bytesReceived=t.bytesReceived.toString(),d.googFrameRateReceived=t.framerateMean.toString(),d.googFramesDecoded=t.framesDecoded.toString(),d.packetsLost=t.packetsLost.toString(),d.packetsReceived=t.packetsReceived.toString(),d.googJitterBufferMs=t.jitter.toString(),d.googNacksSent=t.nackCount.toString(),d.googPlisSent=t.pliCount.toString(),d.googFirsSent=t.firCount.toString()),-1!==t.id.indexOf("outbound_rtcp_video")&&(a.packetsLost=t.packetsLost.toString())});var o=[a,r,s,d];o.push({id:"time",startTime:t.connectedTime,timestamp:new Date}),e(o,n)},function(e){o.default.error(e)})},t.addStream=function(e){n=!0,t.peerConnection.addStream(e),t.markActionNeeded()},t.removeStream=function(){t.markActionNeeded()},t.close=function(){t.state="closed",t.peerConnection.close()},t.markActionNeeded=function(){t.actionNeeded=!0,t.doLater(function(){t.onstablestate()})},t.doLater=function(e){window.setTimeout(e,1)},t.onstablestate=function(){if(t.actionNeeded){if("new"===t.state||"established"===t.state){n&&(t.mediaConstraints=void 0),function(){t.peerConnection.createOffer(function(e){if(e.sdp=u(e.sdp),e.sdp=e.sdp.replace(/a=extmap:1 http:\/\/www.webrtc.org\/experiments\/rtp-hdrext\/abs-send-time/,"a=extmap:3 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time"),e.sdp!==t.prevOffer)return t.peerConnection.setLocalDescription(e),t.state="preparing-offer",void t.markActionNeeded();o.default.debug("Not sending a new offer")},function(e){o.default.debug("Ups! create offer failed ",e)},t.mediaConstraints)}()}else if("preparing-offer"===t.state){if(t.moreIceComing)return;t.prevOffer=t.peerConnection.localDescription.sdp,t.sendMessage("OFFER",t.prevOffer),t.state="offer-sent"}else if("offer-received"===t.state)t.peerConnection.createAnswer(function(e){if(t.peerConnection.setLocalDescription(e),t.state="offer-received-preparing-answer",t.iceStarted)return void t.markActionNeeded();var i=new Date;o.default.debug(i.getTime()+": Starting ICE in responder"),t.iceStarted=!0},function(){o.default.debug("Ups! Something went wrong")});else if("offer-received-preparing-answer"===t.state){if(t.moreIceComing)return;var e=t.peerConnection.localDescription.sdp;t.sendMessage("ANSWER",e),t.state="established"}else t.error("Dazed and confused in state "+t.state+", stopping here");t.actionNeeded=!1}},t.sendOK=function(){t.sendMessage("OK")},t.sendMessage=function(e,i){var n={};n.messageType=e,n.sdp=i,"OFFER"===e?(n.offererSessionId=t.sessionId,n.answererSessionId=t.otherSessionId,n.seq=t.sequenceNumber+=1,n.tiebreaker=Math.floor(429496723*Math.random()+1)):(n.offererSessionId=t.incomingMessage.offererSessionId,n.answererSessionId=t.sessionId,n.seq=t.incomingMessage.seq),t.onsignalingmessage(JSON.stringify(n))},t.error=function(e){throw"Error in RoapOnJsep: "+e},t.sessionId=t.roapSessionId+=1,t.sequenceNumber=0,t.actionNeeded=!1,t.iceStarted=!1,t.moreIceComing=!0,t.iceCandidateCount=0,t.onsignalingmessage=e.callback,t.peerConnection.ontrack=function(e){t.onaddstream&&t.onaddstream(e,"ontrack")},t.peerConnection.onremovestream=function(e){t.onremovestream&&t.onremovestream(e)},t.peerConnection.oniceconnectionstatechange=function(e){"connected"===e.currentTarget.iceConnectionState&&(t.connectedTime=new Date),t.oniceconnectionstatechange&&t.oniceconnectionstatechange(e.currentTarget.iceConnectionState)};var u=function(t){if(e.video&&e.maxVideoBW){var i=t.match(/m=video.*\r\n/);if(null==i&&(i=t.match(/m=video.*\n/)),i&&i.length>0){var n=i[0]+"b=TIAS:"+1e3*e.maxVideoBW+"\r\n";t=t.replace(i[0],n)}}if(e.audio&&e.maxAudioBW){var i=t.match(/m=audio.*\r\n/);if(null==i&&(i=t.match(/m=audio.*\n/)),i&&i.length>0){var n=i[0]+"b=TIAS:"+1e3*e.maxAudioBW+"\r\n";t=t.replace(i[0],n)}}return t};return t.onaddstream=null,t.onremovestream=null,t.state="new",t.markActionNeeded(),t};t.default=r},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o,r,a={INIT:"i",JOIN:"j",GET_MEDIA:"m",PUBLISH:"p",SUBSCRIBE:"s"},s=[],d=function(e){e.n===a.INIT&&(o=e.ver,r=e.appid,delete e.ver,delete e.appid,0===s.length&&(n=null)),s.push(e),(!1===e.succ||e.n===a.PUBLISH||e.n===a.SUBSCRIBE||s.length>=10)&&c()},c=function(){var e=(new Date).getTime(),t={lts:s[0].lts,elps:e-s[0].lts,events:s,succ:s[s.length-1].succ,appid:r,ver:o,brwsr:navigator.userAgent};n&&(t.prev_e=n);for(var i={report:t,sent_ts:Math.round(e/1e3)},a="https:"===document.location.protocol?"https://":"http://",d="https:"===document.location.protocol?6443:6080,c=0;c<1;c++){var l=a+"webcollector.agora.io:"+d+"/events/sequence";!function(e,t,i,n){var o=new XMLHttpRequest;o.open("POST",e,!0),o.setRequestHeader("Content-type","application/json; charset=utf-8"),o.onload=function(){i(o.responseText)},o.onerror=function(){n(o)},o.send(JSON.stringify(t))}(l,i,function(e){},function(e){})}u()},u=function(){n=s[s.length-1],s=[]};t.onEvent=d,t.EVENTS=a},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){var t={audioSendBytes:"0",audioSendPackets:"0",videoSendBytes:"0",videoSendPackets:"0",videoSendPacketsLost:"0",videoSendFrameRate:"0",videoSendBandwidth:"0",videoSendResolutionWidth:"0",videoSendResolutionHeight:"0",audioCodecName:"",videoCodecName:"",timestamp:"",startTime:"",duration:"0"};return e.forEach(function(e){"VideoBwe"===e.type?t.videoSendBandwidth=e.googAvailableSendBandwidth:-1!==e.id.indexOf("send")||-1!==e.id.indexOf("outbound_rtp")||-1!==e.id.indexOf("OutboundRTP")?"audio"===e.mediaType?(t.audioSendBytes=e.bytesSent,t.audioSendPackets=e.packetsSent,t.audioCodecName=e.googCodecName):(t.videoSendBytes=e.bytesSent,t.videoSendPackets=e.packetsSent,t.videoSendPacketsLost=e.packetsLost,t.videoSendFrameRate=e.googFrameRateSent,t.videoSendResolutionWidth=e.googFrameWidthSent,t.videoSendResolutionHeight=e.googFrameHeightSent,t.videoCodecName=e.googCodecName):"time"===e.id&&(t.timestamp=e.timestamp,t.startTime=e.startTime)}),t.timestamp instanceof Date&&t.startTime instanceof Date&&(t.duration=Math.floor((t.timestamp.getTime()-t.startTime.getTime())/1e3)+""),t},o=function(e){var t={audioReceiveBytes:"0",audioReceivePackets:"0",audioReceivePacketsLost:"0",videoReceiveBytes:"0",videoReceivePackets:"0",videoReceivePacketsLost:"0",videoReceiveFrameRate:"0",videoReceiveDecodeFrameRate:"0",videoReceiveBandwidth:"0",videoReceivedResolutionWidth:"0",videoReceivedResolutionHeight:"0",timestamp:"",startTime:"",duration:"0"};return e.forEach(function(e){"VideoBwe"===e.type?t.videoReceiveBandwidth=e.googAvailableReceiveBandwidth:-1!==e.id.indexOf("recv")||-1!==e.id.indexOf("inbound_rtp")||-1!==e.id.indexOf("InboundRTP")?"audio"===e.mediaType?(t.audioReceiveBytes=e.bytesReceived,t.audioReceivePackets=e.packetsReceived,t.audioReceivePacketsLost=e.packetsLost):(t.videoReceiveBytes=e.bytesReceived,t.videoReceivePacketsLost=e.packetsLost,t.videoReceivePackets=e.packetsReceived,t.videoReceiveFrameRate=e.googFrameRateReceived,t.videoReceiveDecodeFrameRate=e.googFrameRateDecoded,t.videoReceivedResolutionWidth=e.googFrameWidthReceived,t.videoReceivedResolutionHeight=e.googFrameHeightReceived):"time"===e.id&&(t.timestamp=e.timestamp,t.startTime=e.startTime)}),t.timestamp instanceof Date&&t.startTime instanceof Date&&(t.duration=Math.floor((t.timestamp.getTime()-t.startTime.getTime())/1e3)+""),t};t.publishStatsFilter=n,t.subscribeStatsFilter=o},function(e,t,i){function n(e,t,i){var n=t&&i||0;"string"==typeof e&&(t="binary"==e?new Array(16):null,e=null),e=e||{};var a=e.random||(e.rng||o)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t)for(var s=0;s<16;++s)t[n+s]=a[s];return t||r(a)}var o=i(30),r=i(32);e.exports=n},function(e,t,i){(function(t){var i,n=t.crypto||t.msCrypto;if(n&&n.getRandomValues){var o=new Uint8Array(16);i=function(){return n.getRandomValues(o),o}}if(!i){var r=new Array(16);i=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),r[t]=e>>>((3&t)<<3)&255;return r}}e.exports=i}).call(t,i(31))},function(e,t){var i;i=function(){return this}();try{i=i||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(i=window)}e.exports=i},function(e,t){function i(e,t){var i=t||0,o=n;return o[e[i++]]+o[e[i++]]+o[e[i++]]+o[e[i++]]+"-"+o[e[i++]]+o[e[i++]]+"-"+o[e[i++]]+o[e[i++]]+"-"+o[e[i++]]+o[e[i++]]+"-"+o[e[i++]]+o[e[i++]]+o[e[i++]]+o[e[i++]]+o[e[i++]]+o[e[i++]]}for(var n=[],o=0;o<256;++o)n[o]=(o+256).toString(16).substr(1);e.exports=i},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(34),o=function(e){return e&&e.__esModule?e:{default:e}}(n),r=i(2),a=function(e,t){var i={};return i.connect=function(){t.host=e,i.signal=(0,o.default)(t),i.on=i.signal.on,i.dispatchEvent=i.signal.dispatchEvent,i.signal.on("onopen",function(e){i.signal.onEvent=function(e){i.dispatchEvent((0,r.MediaEvent)({type:e.event,msg:e}))},i.dispatchEvent((0,r.MediaEvent)({type:"connect",msg:e}))}),i.signal.on("onError",function(e){var t=e.msg;onError(t.code,"error")})},i.disconnect=function(){i.signal.disconnect()},i.close=function(){i.signal.close()},i.getURL=function(){return i.signal.getURL()},i.reconnect=function(e){i.signal.creatConnection(e)},i.emitSimpleMessage=function(e,t){i.signal.sendSignalCommand(e,t)},i.connect(),i};t.default=a},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=i(2),r=i(11),a=n(r),s=i(0),d=n(s),c=i(6),u=function(e){var t=(0,o.EventDispatcher)(e);return t.needReconnect=!0,t.isTimeout=!1,t.isInit=!0,t.hostIndex=0,t.requestID=0,e.host instanceof Array?t.host=e.host:t.host=[e.host],t.Reconnection=function(e){t.host=e||t.host,t.hostIndex=0,t.creatConnection()},t.getURL=function(){return t.connection.url},t.creatConnection=function(){if(t.hostIndex>=t.host.length)return t.hostIndex=0,void t.dispatchEvent((0,o.MediaEvent)({type:"reconnect"}));d.default.debug("start connect:"+t.host[t.hostIndex]),t.lts=(new Date).getTime(),t.connection=new WebSocket("wss://"+t.host[t.hostIndex++]),t.connection.onopen=function(e){d.default.debug("websockect opened"),t.isTimeout=!1,t.isInit=!1,clearTimeout(t.timeoutCheck),t.dispatchEvent((0,o.MediaEvent)({type:"onopen",event:e,socket:t}))},t.connection.onmessage=function(e){var i=JSON.parse(e.data);i.hasOwnProperty("_id")?t.dispatchEvent((0,o.MediaEvent)({type:i._id,msg:i})):i.hasOwnProperty("_type")&&t.dispatchSocketEvent((0,o.MediaEvent)({type:i._type,msg:i.message}))},t.connection.onclose=function(i){t.needReconnect?t.isTimeout||t.isInit?(d.default.debug("websockect connect timeout"),c.report.joinGateway(e.sid,{lts:t.lts,succ:!1,ec:"timeout",addr:t.connection.url}),t.creatConnection()):t.dispatchEvent((0,o.MediaEvent)({type:"disconnect",event:i})):(d.default.debug("websockect closeed"),(0,a.default)(e.onFailure,i),clearTimeout(t.timeoutCheck),t.dispatchEvent((0,o.MediaEvent)({type:"close",event:i})),t.connection.onopen=void 0,t.connection.onclose=void 0,t.connection.onerror=void 0,t.connection.onmessage=void 0,t.connection=void 0)},t.connection.onerror=function(e){};setTimeout(function(){t.connection&&t.connection.readyState!=WebSocket.OPEN&&(t.isTimeout=!0,t.connection.close())},5e3)},t.creatConnection(),t.sendMessage=function(e,i){t.connection&&t.connection.readyState==WebSocket.OPEN?t.connection.send(JSON.stringify(e)):i({error:"Gateway not connected"})},t.disconnect=function(){t.needReconnect=!0,t.connection.close()},t.close=function(){t.needReconnect=!1,t.connection.close()},t.sendSignalCommand=function(e,i){e._id="_request_"+t.requestID,t.requestID+=1,"publish_stats"!==e._type&&"subscribe_stats"!==e._type&&"publish_stats_low"!==e._type&&t.on(e._id,function(n){i&&i(n.msg._result,n.msg.message),delete t.dispatcher.eventListeners[e._id]}),t.sendMessage(e,function(e){e.reason="NOT_CONNECTED",i&&i(e.reason,e)})},t};t.default=u},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.simMap=void 0;var n=i(1),o=function(e){var t;switch(e){case"120p":case"120p_1":t=["120p_1","120p_1","120p_1"];break;case"120p_3":t=["120p_3","120p_3","120p_3"];break;case"180p":case"180p_1":t=["90p_1","90p_1","180p_1"];break;case"180p_3":t=["120p_3","120p_3","180p_3"];break;case"180p_4":t=["120p_1","120p_1","180p_4"];break;case"240p":case"240p_1":t=["120p_1","120p_1","240p_1"];break;case"240p_3":t=["120p_3","120p_3","240p_3"];break;case"240p_4":t=["120p_4","120p_4","240p_4"];break;case"360p":case"360p_1":case"360p_4":case"360p_9":case"360p_10":case"360p_11":t=["90p_1","90p_1","360p_1"];break;case"360p_3":case"360p_6":t=["120p_3","120p_3","360p_3"];break;case"360p_7":case"360p_8":t=["120p_1","120p_1","360p_7"];break;case"480p":case"480p_1":case"480p_2":case"480p_4":case"480p_10":t=["120p_1","120p_1","480p_1"];break;case"480p_3":case"480p_6":t=["120p_3","120p_3","480p_3"];break;case"480p_8":case"480p_9":t=["120p_4","120p_4","480p_8"];break;case"720p":case"720p_1":case"720p_2":case"720p_3":t=["90p_1","90p_1","720p_1"];break;case"720p_5":case"720p_6":t=["120p_1","120p_1","720p_5"];break;case"1080p":case"1080p_1":case"1080p_2":case"1080p_3":case"1080p_5":t=["90p_1","90p_1","1080p_1"];break;case"1440p":case"1440p_1":case"1440p_2":t=["90p_1","90p_1","1440p_1"];break;case"4k":case"4k_1":case"4k_3":t=["90p_1","90p_1","4k_1"];break;default:t=["120p_1","120p_1","360p_7"]}return(0,n.isFireFox)()?[t[1],30,100]:(0,n.isSafari)()?[t[2],15,100]:[t[0],15,100]};t.simMap=o},,,function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Logger=t.checkSystemRequirements=t.getDevices=t.createStream=t.createClient=t.LiveTranscoding=t.TranscodingUser=t.VIDEO_CODEC_PROFILE_HIGH=t.VIDEO_CODEC_PROFILE_MAIN=t.VIDEO_CODEC_PROFILE_BASELINE=t.AUDIO_SAMPLE_RATE_48000=t.AUDIO_SAMPLE_RATE_44100=t.AUDIO_SAMPLE_RATE_32000=void 0;var n=i(15),o=i(7),r=i(3),a=i(0),s=function(e){return e&&e.__esModule?e:{default:e}}(a);t.AUDIO_SAMPLE_RATE_32000=n.AUDIO_SAMPLE_RATE_32000,t.AUDIO_SAMPLE_RATE_44100=n.AUDIO_SAMPLE_RATE_44100,t.AUDIO_SAMPLE_RATE_48000=n.AUDIO_SAMPLE_RATE_48000,t.VIDEO_CODEC_PROFILE_BASELINE=n.VIDEO_CODEC_PROFILE_BASELINE,t.VIDEO_CODEC_PROFILE_MAIN=n.VIDEO_CODEC_PROFILE_MAIN,t.VIDEO_CODEC_PROFILE_HIGH=n.VIDEO_CODEC_PROFILE_HIGH,t.TranscodingUser=n.TranscodingUser,t.LiveTranscoding=n.LiveTranscoding,t.createClient=n.createClient,t.createStream=o.createStream,t.getDevices=o.getDevices,t.checkSystemRequirements=r.checkSystemRequirements,t.Logger=s.default}])});
//# sourceMappingURL=AgoraRTC-production.js.map

! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("AgoraRTC", [], t) : "object" == typeof exports ? exports.AgoraRTC = t() : e.AgoraRTC = t()
}(this, function() {
    return function(e) {
        function t(n) {
            if (i[n]) return i[n].exports;
            var o = i[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(o.exports, o, o.exports, t), o.l = !0, o.exports
        }
        var i = {};
        return t.m = e, t.c = i, t.d = function(e, i, n) {
            t.o(e, i) || Object.defineProperty(e, i, {
                configurable: !1,
                enumerable: !0,
                get: n
            })
        }, t.n = function(e) {
            var i = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return t.d(i, "a", i), i
        }, t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "", t(t.s = 38)
    }([function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(19),
            o = function() {
                var e, t, i, o, r, a, s = 0;
                return e = function(e) {
                    e > 4 ? e = 4 : e < 0 && (e = 0), s = e
                }, t = function() {
                    var e = arguments[0],
                        t = arguments;
                    if (!(e < s)) switch (e) {
                        case 0:
                            t[0] = (0, n.getTimestamp)() + " DEBUG:", console.log.apply(console, t);
                            break;
                        case 1:
                            t[0] = (0, n.getTimestamp)() + " INFO:", console.log.apply(console, t);
                            break;
                        case 2:
                            t[0] = (0, n.getTimestamp)() + " WARN:", console.warn.apply(console, t);
                            break;
                        case 3:
                            t[0] = (0, n.getTimestamp)() + " ERROR:", console.error.apply(console, t);
                            break;
                        default:
                            return t[0] = (0, n.getTimestamp)() + " DEFAULT:", void console.log.apply(console, t)
                    }
                }, i = function() {
                    for (var e = [0], i = 0; i < arguments.length; i++) e.push(arguments[i]);
                    t.apply(this, e)
                }, o = function() {
                    for (var e = [1], i = 0; i < arguments.length; i++) e.push(arguments[i]);
                    t.apply(this, e)
                }, r = function() {
                    for (var e = [2], i = 0; i < arguments.length; i++) e.push(arguments[i]);
                    t.apply(this, e)
                }, a = function() {
                    for (var e = [3], i = 0; i < arguments.length; i++) e.push(arguments[i]);
                    t.apply(this, e)
                }, {
                    DEBUG: 0,
                    INFO: 1,
                    WARNING: 2,
                    ERROR: 3,
                    NONE: 4,
                    setLogLevel: e,
                    log: t,
                    debug: i,
                    info: o,
                    warning: r,
                    error: a
                }
            }();
        t.default = o
    }, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function() {
                var e = m();
                return e.name && "Chrome" === e.name
            },
            o = function() {
                var e = m();
                return e.name && "Safari" === e.name
            },
            r = function() {
                var e = m();
                return e.name && "Firefox" === e.name
            },
            a = function() {
                var e = m();
                return e.name && "OPR" === e.name
            },
            s = function() {
                var e = m();
                return e.name && "MQQBrowser" === e.name
            },
            d = function() {
                var e = m();
                return e.name && "MicroMessenger" === e.name
            },
            c = function() {
                var e = p();
                return "Linux" === e || "Mac OS X" === e || "Mac OS" === e || -1 !== e.indexOf("Windows")
            },
            u = function() {
                var e = p();
                return "Android" === e || "iOS" === e
            },
            l = function() {
                return m().version
            },
            p = function() {
                return m().os
            },
            f = function() {
                var e, t = navigator.userAgent,
                    i = t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
                if (/trident/i.test(i[1])) return e = /\brv[ :]+(\d+)/g.exec(t) || [], {
                    name: "IE",
                    version: e[1] || ""
                };
                "Chrome" === i[1] && null != (e = t.match(/(OPR(?=\/))\/?(\d+)/i)) && (i = e), "Chrome" === i[1] && null != (e = t.match(/(mqqbrowser(?=\/))\/?(\d+)/i)) && (i = e), "Chrome" === i[1] && null != (e = t.match(/(micromessenger(?=\/))\/?(\d+)/i)) && (i = e), "Safari" === i[1] && null != (e = t.match(/version\/(\d+)/i)) && (i[2] = e[1]);
                var n = void 0,
                    o = [{
                        s: "Windows 10",
                        r: /(Windows 10.0|Windows NT 10.0)/
                    }, {
                        s: "Windows 8.1",
                        r: /(Windows 8.1|Windows NT 6.3)/
                    }, {
                        s: "Windows 8",
                        r: /(Windows 8|Windows NT 6.2)/
                    }, {
                        s: "Windows 7",
                        r: /(Windows 7|Windows NT 6.1)/
                    }, {
                        s: "Windows Vista",
                        r: /Windows NT 6.0/
                    }, {
                        s: "Windows Server 2003",
                        r: /Windows NT 5.2/
                    }, {
                        s: "Windows XP",
                        r: /(Windows NT 5.1|Windows XP)/
                    }, {
                        s: "Windows 2000",
                        r: /(Windows NT 5.0|Windows 2000)/
                    }, {
                        s: "Windows ME",
                        r: /(Win 9x 4.90|Windows ME)/
                    }, {
                        s: "Windows 98",
                        r: /(Windows 98|Win98)/
                    }, {
                        s: "Windows 95",
                        r: /(Windows 95|Win95|Windows_95)/
                    }, {
                        s: "Windows NT 4.0",
                        r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/
                    }, {
                        s: "Windows CE",
                        r: /Windows CE/
                    }, {
                        s: "Windows 3.11",
                        r: /Win16/
                    }, {
                        s: "Android",
                        r: /Android/
                    }, {
                        s: "Open BSD",
                        r: /OpenBSD/
                    }, {
                        s: "Sun OS",
                        r: /SunOS/
                    }, {
                        s: "Linux",
                        r: /(Linux|X11)/
                    }, {
                        s: "iOS",
                        r: /(iPhone|iPad|iPod)/
                    }, {
                        s: "Mac OS X",
                        r: /Mac OS X/
                    }, {
                        s: "Mac OS",
                        r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
                    }, {
                        s: "QNX",
                        r: /QNX/
                    }, {
                        s: "UNIX",
                        r: /UNIX/
                    }, {
                        s: "BeOS",
                        r: /BeOS/
                    }, {
                        s: "OS/2",
                        r: /OS\/2/
                    }, {
                        s: "Search Bot",
                        r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
                    }];
                for (var r in o) {
                    var a = o[r];
                    if (a.r.test(navigator.userAgent)) {
                        n = a.s;
                        break
                    }
                }
                return {
                    name: i[1],
                    version: i[2],
                    os: n
                }
            },
            m = function() {
                var e = f();
                return function() {
                    return e
                }
            }();
        t.getBrowserInfo = m, t.getBrowserVersion = l, t.getBrowserOS = p, t.isChrome = n, t.isSafari = o, t.isFireFox = r, t.isOpera = a, t.isQQBrowser = s, t.isWeChatBrowser = d, t.isSupportedPC = c, t.isSupportedMobile = u
    }, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function() {
                var e = {};
                return e.dispatcher = {}, e.dispatcher.eventListeners = {}, e.addEventListener = function(t, i) {
                    void 0 === e.dispatcher.eventListeners[t] && (e.dispatcher.eventListeners[t] = []), e.dispatcher.eventListeners[t].push(i)
                }, e.on = e.addEventListener, e.removeEventListener = function(t, i) {
                    var n; - 1 !== (n = e.dispatcher.eventListeners[t].indexOf(i)) && e.dispatcher.eventListeners[t].splice(n, 1)
                }, e.dispatchEvent = function(t) {
                    var i;
                    for (i in e.dispatcher.eventListeners[t.type]) e.dispatcher.eventListeners[t.type].hasOwnProperty(i) && "function" == typeof e.dispatcher.eventListeners[t.type][i] && e.dispatcher.eventListeners[t.type][i](t)
                }, e.dispatchSocketEvent = function(t) {
                    var i;
                    for (i in e.dispatcher.eventListeners[t.type]) e.dispatcher.eventListeners[t.type].hasOwnProperty(i) && "function" == typeof e.dispatcher.eventListeners[t.type][i] && e.dispatcher.eventListeners[t.type][i](t.msg)
                }, e
            },
            o = function(e) {
                var t = {};
                return t.type = e.type, t
            },
            r = function(e) {
                var t = o(e);
                return t.stream = e.stream, t.reason = e.reason, t.msg = e.msg, t
            },
            a = function(e) {
                var t = o(e);
                return t.uid = e.uid, t.attr = e.attr, t.stream = e.stream, t
            },
            s = function(e) {
                var t = o(e);
                return t.msg = e.msg, t
            },
            d = function(e) {
                var t = o(e);
                return t.url = e.url, t.reason = e.reason, t
            };
        t.EventDispatcher = n, t.StreamEvent = r, t.ClientEvent = a, t.MediaEvent = s, t.LiveStreamingEvent = d
    }, function(e, t, i) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o() {
            return (0, u.default)().replace(/-/g, "").toUpperCase()
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.safeCall = t.vsResHack = t.CSCrashRecord = t.audioLevelHelper = t.generateSessionId = t.checkSystemRequirements = void 0;
        var r = i(1),
            a = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t.default = e, t
            }(r),
            s = i(0),
            d = n(s),
            c = i(29),
            u = n(c),
            l = function() {
                var e = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection,
                    t = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.msGetUserMedia || navigator.mozGetUserMedia || navigator.mediaDevices && navigator.mediaDevices.getUserMedia,
                    i = window.WebSocket,
                    n = !!e && !!t && !!i,
                    o = !1;
                return d.default.debug(a.getBrowserInfo(), "isAPISupport:" + n), a.isChrome() && a.getBrowserVersion() >= 58 && "iOS" !== a.getBrowserOS() && (o = !0), a.isFireFox() && a.getBrowserVersion() >= 56 && (o = !0), a.isOpera() && a.getBrowserVersion() >= 45 && (o = !0), a.isSafari() && a.getBrowserVersion() >= 11 && (o = !0), a.isSupportedPC() || a.isSupportedMobile() || (o = !1), n && o
            },
            p = function() {
                var e = arguments[0];
                if ("function" == typeof e) {
                    var t = Array.prototype.slice.call(arguments, 1);
                    e.apply(null, t)
                }
            },
            f = new(window.AudioContext || window.webkitAudioContext),
            m = function(e) {
                return this.audioContext = f, this.sourceNode = e.otWebkitAudioSource || this.audioContext.createMediaStreamSource(e), this.analyser = this.audioContext.createAnalyser(), this.timeDomainData = new Uint8Array(this.analyser.frequencyBinCount), this.sourceNode.connect(this.analyser), this.getAudioLevel = function() {
                    if (this.analyser) {
                        this.analyser.getByteTimeDomainData(this.timeDomainData);
                        for (var e = 0, t = 0; t < this.timeDomainData.length; t++) e = Math.max(e, Math.abs(this.timeDomainData[t] - 128));
                        return e / 128
                    }
                    return d.default.warning("can't find analyser in audioLevelHelper"), 0
                }, this
            },
            g = {
                shouldBlock: function() {
                    if (localStorage) {
                        var e = JSON.parse(localStorage.getItem("agoraCSCrashRecord"));
                        return !!(e && e.length > 6) && (new Date).getTime() - e[e.length - 6] - 1e4 < 0
                    }
                    return !1
                },
                record: function(e) {
                    if (localStorage) {
                        var t = JSON.parse(localStorage.getItem("agoraCSCrashRecord"));
                        t = !t || t.length > 50 ? [] : t, t.push(e), localStorage.setItem("agoraCSCrashRecord", JSON.stringify(t))
                    }
                }
            },
            v = function(e, t, i) {
                try {
                    var n = document.createElement("video");
                    n.setAttribute("autoplay", ""), n.setAttribute("muted", ""), n.setAttribute("playsinline", ""), n.setAttribute("style", "width:1px;high:1px;"), document.body.appendChild(n), n.addEventListener("playing", function(e) {
                        a.isFireFox() ? n.videoWidth && (t(n.videoWidth, n.videoHeight), document.body.removeChild(n)) : (t(n.videoWidth, n.videoHeight), document.body.removeChild(n))
                    }), n.srcObject = e
                } catch (e) {
                    i(e)
                }
            };
        t.checkSystemRequirements = l, t.generateSessionId = o, t.audioLevelHelper = m, t.CSCrashRecord = g, t.vsResHack = v, t.safeCall = p
    }, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = ["webcs-test-1.agora.io", "webcs-test-2.agora.io"],
            o = ["webcs-test-3.agora.io", "webcs-test-4.agora.io"];
        t.GIT_VERSION = "release_20180109_01-6-g7f68c86", t.VERSION = "2.1.0", t.WEBCS_DOMAIN = n, t.WEBCS_DOMAIN_BACKUP_LIST = o, t.EVENT_REPORT_DOMAIN = "webcollector-1.agora.io", t.EVENT_REPORT_BACKUP_DOMAIN = "webcollector-2.agora.io", t.WEBCS_BACKUP_CONNECT_TIMEOUT = 6e3, t.HTTP_CONNECT_TIMEOUT = 5e3
    }, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(2),
            o = function(e) {
                var t = (0, n.EventDispatcher)(e);
                return t.url = ".", t
            };
        t.default = o
    }, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.SUBSCRIBE = t.PUBLISH = t.JOIN_GATEWAY = t.JOIN_CHOOSE_SERVER = t.SESSION_INIT = t.report = void 0;
        var n = i(4),
            o = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t.default = e, t
            }(n),
            r = i(0),
            a = (function(e) {
                e && e.__esModule
            }(r), i(12)),
            s = {
                type: null,
                sid: null,
                lts: null,
                succ: null,
                cname: null,
                uid: null,
                peerid: null,
                cid: null,
                elaps: null,
                extend: null,
                vid: 0
            },
            d = function() {
                var e = {};
                return e.list = {}, e.url = (0, a.shouldUseHttps)() ? "https://" + o.EVENT_REPORT_DOMAIN + ":6443/events/report" : "http://" + o.EVENT_REPORT_DOMAIN + ":6080/events/report", e.urlBackup = (0, a.shouldUseHttps)() ? "https://" + o.EVENT_REPORT_BACKUP_DOMAIN + ":6443/events/report" : "http://" + o.EVENT_REPORT_BACKUP_DOMAIN + ":6080/events/report", e.sessionInit = function(t, i) {
                    i.sid = t;
                    var n = Object.assign(s, i),
                        r = Object.assign({}, n);
                    delete n.appid, delete n.mode, e.list[t] = n, r.extend = null, r.ver = o.VERSION, r.type = "session_init", r.browser = navigator.userAgent, r.elaps = (new Date).getTime() - r.lts, e.send(r)
                }, e.joinChooseServer = function(t, i) {
                    var n = Object.assign(e.list[t], i);
                    n.type = "join_choose_server", n.elaps = (new Date).getTime() - n.lts, n.serverList = JSON.stringify(n.serverList), e.send(n)
                }, e.joinGateway = function(t, i) {
                    var n = Object.assign(e.list[t], i);
                    n.type = "join_gateway", n.elaps = (new Date).getTime() - n.lts, e.send(n)
                }, e.publish = function(t, i) {
                    var n = (Object.assign({}, e.list[t]), Object.assign(e.list[t], i));
                    n.type = "publish", n.elaps = (new Date).getTime() - n.lts, e.send(n)
                }, e.subscribe = function(t, i) {
                    var n = Object.assign({}, e.list[t]),
                        o = Object.assign(n, i);
                    o.type = "subscribe", o.elaps = (new Date).getTime() - o.lts, e.send(o)
                }, e.firstRemoteFrame = function(t, i) {
                    var n = Object.assign(e.list[t], i);
                    n.type = "first_remote_frame", n.elaps = null, e.send(n)
                }, e.streamSwitch = function(t, i) {
                    var n = Object.assign({}, e.list[t], i);
                    n.type = "stream_switch", n.isdual = i.isdual, n.elaps = null, e.send(n)
                }, e.send = function(t) {
                    try {
                        (0, a.post)(e.url, t, null, function(i) {
                            (0, a.post)(e.urlBackup, t, null, function(e) {}, {
                                timeout: 1e4
                            })
                        }, {
                            timeout: 1e4
                        })
                    } catch (e) {}
                }, e
            }();
        t.report = d, t.SESSION_INIT = "session_init", t.JOIN_CHOOSE_SERVER = "join_choose_server", t.JOIN_GATEWAY = "join_gateway", t.PUBLISH = "publish", t.SUBSCRIBE = "subscribe"
    }, function(e, t, i) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getDevices = t.createStream = t.Stream = void 0;
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            r = i(16),
            a = n(r),
            s = i(21),
            d = n(s),
            c = i(10),
            u = i(2),
            l = (i(27), i(0)),
            p = n(l),
            f = i(1),
            m = i(28),
            g = i(3),
            v = function(e) {
                function t() {
                    return null !== window.navigator.appVersion.match(/Chrome\/([\w\W]*?)\./) && window.navigator.appVersion.match(/Chrome\/([\w\W]*?)\./)[1] <= 35
                }

                function i() {
                    return null !== window.navigator.userAgent.match("Firefox")
                }

                function n(t, i) {
                    return {
                        width: {
                            ideal: t
                        },
                        height: {
                            ideal: i
                        },
                        deviceId: e.cameraId ? {
                            exact: e.cameraId
                        } : void 0
                    }
                }
                var r = (0, u.EventDispatcher)();
                if (r.params = Object.assign({}, e), r.stream = e.stream, r.aux_stream = void 0, r.url = e.url, r.onClose = void 0, r.local = !1, r.video = !!e.video, r.audio = !!e.audio, r.screen = !!e.screen, r.screenAttributes = {
                        width: 1920,
                        height: 1080,
                        maxFr: 5,
                        minFr: 1
                    }, r.videoSize = e.videoSize, r.player = void 0, r.audioLevelHelper = null, e.attributes = e.attributes || {}, r.videoEnabled = !0, r.audioEnabled = !0, r.lowStream = null, r.videoWidth = 0, r.videoHeight = 0, !(void 0 === r.videoSize || r.videoSize instanceof Array && 4 === r.videoSize.length)) throw Error("Invalid Video Size");
                r.videoSize = [640, 480, 640, 480], void 0 !== e.local && !0 !== e.local || (r.local = !0), r.initialized = !r.local;
                var s = {
                    true: !0,
                    unspecified: !0,
                    "90p_1": n(160, 90),
                    "120p_1": n(160, 120),
                    "120p_3": n(120, 120),
                    "120p_4": n(212, 120),
                    "180p_1": n(320, 180),
                    "180p_3": n(180, 180),
                    "180p_4": n(240, 180),
                    "240p_1": n(320, 240),
                    "240p_3": n(240, 240),
                    "240p_4": n(424, 240),
                    "360p_1": n(640, 360),
                    "360p_3": n(360, 360),
                    "360p_4": n(640, 360),
                    "360p_6": n(360, 360),
                    "360p_7": n(480, 360),
                    "360p_8": n(480, 360),
                    "360p_9": n(640, 360),
                    "360p_10": n(640, 360),
                    "360p_11": n(640, 360),
                    "480p_1": n(640, 480),
                    "480p_2": n(640, 480),
                    "480p_3": n(480, 480),
                    "480p_4": n(640, 480),
                    "480p_6": n(480, 480),
                    "480p_8": n(848, 480),
                    "480p_9": n(848, 480),
                    "480p_10": n(640, 480),
                    "720p_1": n(1280, 720),
                    "720p_2": n(1280, 720),
                    "720p_3": n(1280, 720),
                    "720p_5": n(960, 720),
                    "720p_6": n(960, 720),
                    "1080p_1": n(1920, 1080),
                    "1080p_2": n(1920, 1080),
                    "1080p_3": n(1920, 1080),
                    "1080p_5": n(1920, 1080),
                    "1440p_1": n(2560, 1440),
                    "1440p_2": n(2560, 1440),
                    "4k_1": n(3840, 2160),
                    "4k_3": n(3840, 2160)
                };
                return r.unmuteAudio = void 0, r.muteAudio = void 0, r.unmuteVideo = void 0, r.muteVideo = void 0, r.setVideoResolution = function(t) {
                    return t += "", void 0 !== s[t] && (e.video = s[t], e.attributes = e.attributes || {}, e.attributes.resolution = t, !0)
                }, r.setVideoFrameRate = function(t) {
                    return !(0, f.isFireFox)() && ("object" === (void 0 === t ? "undefined" : o(t)) && t instanceof Array && t.length > 1 && (e.attributes = e.attributes || {}, e.attributes.minFrameRate = t[0], e.attributes.maxFrameRate = t[1], !0))
                }, r.setVideoBitRate = function(t) {
                    return "object" === (void 0 === t ? "undefined" : o(t)) && t instanceof Array && t.length > 1 && (e.attributes = e.attributes || {}, e.attributes.minVideoBW = t[0], e.attributes.maxVideoBW = t[1], !0)
                }, r.setScreenProfile = function(e) {
                    if ("string" == typeof e && r.screen) {
                        switch (e) {
                            case "480p_1":
                                r.screenAttributes.width = 640, r.screenAttributes.height = 480, r.screenAttributes.maxFr = 5, r.screenAttributes.minFr = 1;
                                break;
                            case "480p_2":
                                r.screenAttributes.width = 640, r.screenAttributes.height = 480, r.screenAttributes.maxFr = 30, r.screenAttributes.minFr = 25;
                                break;
                            case "720p_1":
                                r.screenAttributes.width = 1280, r.screenAttributes.height = 720, r.screenAttributes.maxFr = 5, r.screenAttributes.minFr = 1;
                                break;
                            case "720p_2":
                                r.screenAttributes.width = 1280, r.screenAttributes.height = 720, r.screenAttributes.maxFr = 30, r.screenAttributes.minFr = 25;
                                break;
                            case "1080p_1":
                                r.screenAttributes.width = 1920, r.screenAttributes.height = 1080, r.screenAttributes.maxFr = 5, r.screenAttributes.minFr = 1;
                                break;
                            case "1080p_2":
                                r.screenAttributes.width = 1920, r.screenAttributes.height = 1080, r.screenAttributes.maxFr = 30, r.screenAttributes.minFr = 25
                        }
                        return !0
                    }
                    return !1
                }, r.setVideoProfileCustom = function(e) {
                    r.setVideoResolution(e[0]), r.setVideoFrameRate([e[1], e[1]]), r.setVideoBitRate([e[2], e[2]])
                }, r.setVideoProfile = function(e) {
                    if (r.profile = e, "string" == typeof e && r.video) {
                        switch (e) {
                            case "120p":
                            case "120P":
                            case "120p_1":
                            case "120P_1":
                                r.setVideoResolution("120p_1"), r.setVideoFrameRate([15, 15]), r.setVideoBitRate([10, 65]);
                                break;
                            case "120p_3":
                            case "120P_3":
                                r.setVideoResolution("120p_3"), r.setVideoFrameRate([15, 15]), r.setVideoBitRate([10, 50]);
                                break;
                            case "180p":
                            case "180P":
                            case "180p_1":
                            case "180P_1":
                                r.setVideoResolution("180p_1"), r.setVideoFrameRate([15, 15]), r.setVideoBitRate([10, 140]);
                                break;
                            case "180p_3":
                            case "180P_3":
                                r.setVideoResolution("180p_3"), r.setVideoFrameRate([15, 15]), r.setVideoBitRate([10, 100]);
                                break;
                            case "180p_4":
                            case "180P_4":
                                r.setVideoResolution("180p_4"), r.setVideoFrameRate([15, 15]), r.setVideoBitRate([10, 120]);
                                break;
                            case "240p":
                            case "240P":
                            case "240p_1":
                            case "240P_1":
                                r.setVideoResolution("240p_1"), r.setVideoFrameRate([15, 15]), r.setVideoBitRate([10, 200]);
                                break;
                            case "240p_3":
                            case "240P_3":
                                r.setVideoResolution("240p_3"), r.setVideoFrameRate([15, 15]), r.setVideoBitRate([10, 140]);
                                break;
                            case "240p_4":
                            case "240P_4":
                                r.setVideoResolution("240p_4"), r.setVideoFrameRate([15, 15]), r.setVideoBitRate([10, 220]);
                                break;
                            case "360p":
                            case "360P":
                            case "360p_1":
                            case "360P_1":
                                r.setVideoResolution("360p_1"), r.setVideoFrameRate([15, 15]), r.setVideoBitRate([20, 400]);
                                break;
                            case "360p_3":
                            case "360P_3":
                                r.setVideoResolution("360p_3"), r.setVideoFrameRate([15, 15]), r.setVideoBitRate([20, 260]);
                                break;
                            case "360p_4":
                            case "360P_4":
                                r.setVideoResolution("360p_4"), r.setVideoFrameRate([30, 30]), r.setVideoBitRate([20, 600]);
                                break;
                            case "360p_6":
                            case "360P_6":
                                r.setVideoResolution("360p_6"), r.setVideoFrameRate([30, 30]), r.setVideoBitRate([20, 400]);
                                break;
                            case "360p_7":
                            case "360P_7":
                                r.setVideoResolution("360p_7"), r.setVideoFrameRate([15, 15]), r.setVideoBitRate([20, 320]);
                                break;
                            case "360p_8":
                            case "360P_8":
                                r.setVideoResolution("360p_8"), r.setVideoFrameRate([30, 30]), r.setVideoBitRate([20, 490]);
                                break;
                            case "360p_9":
                            case "360P_9":
                                r.setVideoResolution("360p_9"), r.setVideoFrameRate([15, 15]), r.setVideoBitRate([20, 800]);
                                break;
                            case "360p_10":
                            case "360P_10":
                                r.setVideoResolution("360p_10"), r.setVideoFrameRate([24, 24]), r.setVideoBitRate([20, 800]);
                                break;
                            case "360p_11":
                            case "360P_11":
                                r.setVideoResolution("360p_11"), r.setVideoFrameRate([24, 24]), r.setVideoBitRate([20, 1e3]);
                                break;
                            case "480p":
                            case "480P":
                            case "480p_1":
                            case "480P_1":
                                r.setVideoResolution("480p_1"), r.setVideoFrameRate([15, 15]), r.setVideoBitRate([20, 500]);
                                break;
                            case "480p_2":
                            case "480P_2":
                                r.setVideoResolution("480p_2"), r.setVideoFrameRate([30, 30]), r.setVideoBitRate([20, 1e3]);
                                break;
                            case "480p_3":
                            case "480P_3":
                                r.setVideoResolution("480p_3"), r.setVideoFrameRate([15, 15]), r.setVideoBitRate([20, 400]);
                                break;
                            case "480p_4":
                            case "480P_4":
                                r.setVideoResolution("480p_4"), r.setVideoFrameRate([30, 30]), r.setVideoBitRate([20, 750]);
                                break;
                            case "480p_6":
                            case "480P_6":
                                r.setVideoResolution("480p_6"), r.setVideoFrameRate([30, 30]), r.setVideoBitRate([20, 600]);
                                break;
                            case "480p_8":
                            case "480P_8":
                                r.setVideoResolution("480p_8"), r.setVideoFrameRate([15, 15]), r.setVideoBitRate([20, 610]);
                                break;
                            case "480p_9":
                            case "480P_9":
                                r.setVideoResolution("480p_9"), r.setVideoFrameRate([30, 30]), r.setVideoBitRate([20, 930]);
                                break;
                            case "480p_10":
                            case "480P_10":
                                r.setVideoResolution("480p_10"), r.setVideoFrameRate([10, 10]), r.setVideoBitRate([20, 400]);
                                break;
                            case "720p":
                            case "720P":
                            case "720p_1":
                            case "720P_1":
                                r.setVideoResolution("720p_1"), r.setVideoFrameRate([15, 15]), r.setVideoBitRate([30, 1130]);
                                break;
                            case "720p_2":
                            case "720P_2":
                                r.setVideoResolution("720p_2"), r.setVideoFrameRate([30, 30]), r.setVideoBitRate([30, 2e3]);
                                break;
                            case "720p_3":
                            case "720P_3":
                                r.setVideoResolution("720p_3"), r.setVideoFrameRate([30, 30]), r.setVideoBitRate([30, 1710]);
                                break;
                            case "720p_5":
                            case "720P_5":
                                r.setVideoResolution("720p_5"), r.setVideoFrameRate([15, 15]), r.setVideoBitRate([30, 910]);
                                break;
                            case "720p_6":
                            case "720P_6":
                                r.setVideoResolution("720p_6"), r.setVideoFrameRate([30, 30]), r.setVideoBitRate([30, 1380]);
                                break;
                            case "1080p":
                            case "1080P":
                            case "1080p_1":
                            case "1080P_1":
                                r.setVideoResolution("1080p_1"), r.setVideoFrameRate([15, 15]), r.setVideoBitRate([50, 2080]);
                                break;
                            case "1080p_2":
                            case "1080P_2":
                                r.setVideoResolution("1080p_2"), r.setVideoFrameRate([30, 30]), r.setVideoBitRate([50, 3e3]);
                                break;
                            case "1080p_3":
                            case "1080P_3":
                                r.setVideoResolution("1080p_3"), r.setVideoFrameRate([30, 30]), r.setVideoBitRate([50, 3150]);
                                break;
                            case "1080p_5":
                            case "1080P_5":
                                r.setVideoResolution("1080p_5"), r.setVideoFrameRate([60, 60]), r.setVideoBitRate([50, 4780]);
                                break;
                            case "1440p":
                            case "1440P":
                            case "1440p_1":
                            case "1440P_1":
                                r.setVideoResolution("1440p_1"), r.setVideoFrameRate([30, 30]), r.setVideoBitRate([50, 4850]);
                                break;
                            case "1440p_2":
                            case "1440P_2":
                                r.setVideoResolution("1440p_2"), r.setVideoFrameRate([60, 60]), r.setVideoBitRate([50, 7350]);
                                break;
                            case "4k":
                            case "4K":
                            case "4k_1":
                            case "4K_1":
                                r.setVideoResolution("4k_1"), r.setVideoFrameRate([30, 30]), r.setVideoBitRate([50, 8910]);
                                break;
                            case "4k_3":
                            case "4K_3":
                                r.setVideoResolution("4k_3"), r.setVideoFrameRate([60, 60]), r.setVideoBitRate([50, 13500]);
                                break;
                            default:
                                r.setVideoResolution("480p_1"), r.setVideoFrameRate([15, 15]), r.setVideoBitRate([20, 500])
                        }
                        return !0
                    }
                    return !1
                }, r.getId = function() {
                    return e.streamID
                }, r.getAttributes = function() {
                    return e.screen ? r.screenAttributes : e.attributes
                }, r.hasAudio = function() {
                    return r.audio
                }, r.hasVideo = function() {
                    return r.video
                }, r.hasScreen = function() {
                    return r.screen
                }, r.isVideoOn = function() {
                    return r.hasVideo && r.videoEnabled
                }, r.isAudioOn = function() {
                    return r.hasAudio && r.audioEnabled
                }, r.init = function(n, a) {
                    var s = ((new Date).getTime(), arguments[2]);
                    if (void 0 === s && (s = 2), !0 === r.initialized) return void("function" == typeof a && a({
                        type: "warning",
                        msg: "STREAM_ALREADY_INITIALIZED"
                    }));
                    if (!0 !== r.local) return void("function" == typeof a && a({
                        type: "warning",
                        msg: "STREAM_NOT_LOCAL"
                    }));
                    try {
                        if ((e.audio || e.video || e.screen) && void 0 === e.url) {
                            p.default.debug("Requested access to local media");
                            var d = e.video;
                            if (e.screen) var u = {
                                video: d,
                                audio: e.audio,
                                screen: !0,
                                data: !0,
                                extensionId: e.extensionId,
                                attributes: r.screenAttributes,
                                fake: e.fake
                            };
                            else {
                                var u = {
                                    video: d,
                                    audio: e.audio,
                                    fake: e.fake
                                };
                                if (!t()) {
                                    var l = 30,
                                        m = 30;
                                    void 0 !== e.attributes.minFrameRate && (l = e.attributes.minFrameRate), void 0 !== e.attributes.maxFrameRate && (m = e.attributes.maxFrameRate), i() ? !0 === u.video ? (u.video = {
                                        width: {
                                            ideal: r.videoSize[0]
                                        },
                                        height: {
                                            ideal: r.videoSize[1]
                                        },
                                        frameRate: {
                                            ideal: l,
                                            max: m
                                        }
                                    }, r.setVideoBitRate([500, 500])) : "object" === o(u.video) && (u.video.frameRate = {
                                        ideal: l,
                                        max: m
                                    }) : (!0 === u.audio && (u.audio = !e.microphoneId || {
                                        deviceId: {
                                            exact: e.microphoneId
                                        }
                                    }), !0 === u.video ? (u.video = {
                                        width: {
                                            ideal: r.videoSize[0]
                                        },
                                        height: {
                                            ideal: r.videoSize[1]
                                        },
                                        frameRate: {
                                            ideal: l,
                                            max: m
                                        }
                                    }, r.setVideoBitRate([500, 500])) : "object" === o(u.video) && (u.video.frameRate = {
                                        ideal: l,
                                        max: m
                                    }))
                                }
                            }
                            p.default.debug(u);
                            var v = Object.assign({}, u);
                            if ((0, c.GetUserMedia)(v, function(t) {
                                    p.default.debug("User has granted access to local media"), r.dispatchEvent({
                                        type: "accessAllowed"
                                    }), r.stream = t, r.initialized = !0, n && n(), r.hasVideo() && (0, g.vsResHack)(t, function(e, t) {
                                        r.videoWidth = e, r.videoHeight = t
                                    }, function(e) {
                                        p.default.warning("vsResHack failed:" + e)
                                    }), e.screen && (0, f.isChrome)() && r.stream && r.stream.getVideoTracks()[0] && (r.stream.getVideoTracks()[0].onended = function() {
                                        r.dispatchEvent({
                                            type: "stopScreenSharing"
                                        })
                                    })
                                }, function(e) {
                                    var t = {
                                        type: "error",
                                        msg: e.name || e
                                    };
                                    switch (t.msg) {
                                        case "Starting video failed":
                                        case "TrackStartError":
                                            if (r.videoSize = void 0, s > 0) return void setTimeout(function() {
                                                r.init(n, a, s - 1)
                                            }, 1);
                                            t.msg = "MEDIA_OPTION_INVALID";
                                            break;
                                        case "DevicesNotFoundError":
                                            t.msg = "DEVICES_NOT_FOUND";
                                            break;
                                        case "NotSupportedError":
                                            t.msg = "NOT_SUPPORTED";
                                            break;
                                        case "PermissionDeniedError":
                                            t.msg = "PERMISSION_DENIED", r.dispatchEvent({
                                                type: "accessDenied"
                                            });
                                            break;
                                        case "PERMISSION_DENIED":
                                            r.dispatchEvent({
                                                type: "accessDenied"
                                            });
                                            break;
                                        case "InvalidStateError":
                                            t.msg = "PERMISSION_DENIED", r.dispatchEvent({
                                                type: "accessDenied"
                                            });
                                            break;
                                        case "NotAllowedError":
                                            r.dispatchEvent({
                                                type: "accessDenied"
                                            });
                                            break;
                                        case "ConstraintNotSatisfiedError":
                                            t.msg = "CONSTRAINT_NOT_SATISFIED";
                                            break;
                                        default:
                                            t.msg || (t.msg = "UNDEFINED")
                                    }
                                    p.default.error("Media access:", t.msg), "function" == typeof a && a(t)
                                }), e.screen && e.audio) {
                                var S = {
                                    video: !1,
                                    audio: u.audio
                                };
                                p.default.debug(S), (0, c.GetUserMedia)(S, function(e) {
                                    p.default.info("User has granted access to auxiliary local media."), r.dispatchEvent({
                                        type: "accessAllowed"
                                    }), r.aux_stream = e
                                }, function(e) {
                                    var t = {
                                        type: "error",
                                        msg: e.name || e
                                    };
                                    switch (t.msg) {
                                        case "Starting video failed":
                                        case "TrackStartError":
                                            if (r.videoSize = void 0, s > 0) return void setTimeout(function() {
                                                r.init(n, a, s - 1)
                                            }, 1);
                                            t.msg = "MEDIA_OPTION_INVALID";
                                            break;
                                        case "DevicesNotFoundError":
                                            t.msg = "DEVICES_NOT_FOUND";
                                            break;
                                        case "NotSupportedError":
                                            t.msg = "NOT_SUPPORTED";
                                            break;
                                        case "PermissionDeniedError":
                                        case "InvalidStateError":
                                            t.msg = "PERMISSION_DENIED", r.dispatchEvent({
                                                type: "accessDenied"
                                            });
                                            break;
                                        case "PERMISSION_DENIED":
                                        case "NotAllowedError":
                                            r.dispatchEvent({
                                                type: "accessDenied"
                                            });
                                            break;
                                        case "ConstraintNotSatisfiedError":
                                            t.msg = "CONSTRAINT_NOT_SATISFIED";
                                            break;
                                        default:
                                            t.msg || (t.msg = "UNDEFINED")
                                    }
                                    p.default.error("Media access:", t.msg), "function" == typeof a && a(t)
                                })
                            }
                        } else "function" == typeof a && a({
                            type: "warning",
                            msg: "STREAM_HAS_NO_MEDIA_ATTRIBUTES"
                        })
                    } catch (e) {
                        p.default.error("Stream init:", e), "function" == typeof a && a({
                            type: "error",
                            msg: e.message || e
                        })
                    }
                }, r.close = function() {
                    if (p.default.debug("Close stream with id", e.streamID), void 0 !== r.stream) {
                        var t = r.stream.getTracks();
                        for (var i in t) t.hasOwnProperty(i) && t[i].stop();
                        r.stream = void 0
                    }
                    r.initialized = !1, r.unmuteAudio = void 0, r.muteAudio = void 0, r.unmuteVideo = void 0, r.muteVideo = void 0
                }, r.enableAudio = function() {
                    return p.default.debug("Enable audio stream with id", e.streamID), !(!r.hasAudio() || !r.initialized || void 0 === r.stream || !0 === r.stream.getAudioTracks()[0].enabled) && (void 0 !== r.unmuteAudio && r.unmuteAudio(), r.audioEnabled = !0, r.stream.getAudioTracks()[0].enabled = !0, !0)
                }, r.disableAudio = function() {
                    return p.default.debug("Disable audio stream with id", e.streamID), !!(r.hasAudio() && r.initialized && void 0 !== r.stream && r.stream.getAudioTracks()[0].enabled) && (void 0 !== r.muteAudio && r.muteAudio(), r.audioEnabled = !1, r.stream.getAudioTracks()[0].enabled = !1, !0)
                }, r.enableVideo = function() {
                    return p.default.debug("Enable video stream with id", e.streamID), !(!r.initialized || void 0 === r.stream || !r.stream.getVideoTracks().length || !0 === r.stream.getVideoTracks()[0].enabled) && (void 0 !== r.unmuteVideo && r.unmuteVideo(), r.videoEnabled = !0, r.stream.getVideoTracks()[0].enabled = !0, r.lowStream && r.lowStream.enableVideo(), !0)
                }, r.disableVideo = function() {
                    return p.default.debug("Disable video stream with id", e.streamID), !!(r.initialized && void 0 !== r.stream && r.stream.getVideoTracks().length && r.stream.getVideoTracks()[0].enabled) && (void 0 !== r.muteVideo && r.muteVideo(), r.videoEnabled = !1, r.stream.getVideoTracks()[0].enabled = !1, r.lowStream && r.lowStream.disableVideo(), !0)
                }, r.play = function(e, t) {
                    r.showing = !1, !r.local || r.video || r.screen ? void 0 !== e && (r.player = new a.default({
                        id: r.getId(),
                        stream: r,
                        elementID: e,
                        options: void 0,
                        url: t
                    }), r.showing = !0) : r.hasAudio() && (r.player = new d.default({
                        id: r.getId(),
                        stream: r,
                        elementID: e,
                        options: void 0,
                        url: t
                    }), r.showing = !0)
                }, r.stop = function() {
                    p.default.debug("Stop stream player with id", e.streamID), void 0 !== r.player && r.player.destroy()
                }, r.getStats = function(e) {
                    r.pc && r.pc.getStats ? r.pc.getStats(function(t) {
                        if (r.pc.isSubscriber) {
                            var i = (0, m.subscribeStatsFilter)(t);
                            (0, f.isFireFox)() && (i.videoReceivedResolutionHeight = r.videoHeight + "", i.videoReceivedResolutionWidth = r.videoWidth + ""), e && e((0, m.subscribeStatsFilter)(t))
                        } else {
                            var i = (0, m.publishStatsFilter)(t);
                            (0, f.isChrome)() || (i.videoSendResolutionHeight = r.videoHeight + "", i.videoSendResolutionWidth = r.videoWidth + ""), !(0, f.isChrome)() && r.uplinkStats && (i.videoSendBandwidth = r.uplinkStats.uplink_available_bandwidth + "", i.videoSendPacketsLost = r.uplinkStats.uplink_cumulative_lost + ""), e && e(i)
                        }
                    }) : p.default.warning("use getStats after peerConnection established")
                }, r.getAudioLevel = function() {
                    return r.audioLevelHelper ? r.audioLevelHelper.getAudioLevel() : r.stream ? 0 !== r.stream.getAudioTracks().length ? (r.audioLevelHelper = new g.audioLevelHelper(r.stream), r.audioLevelHelper.getAudioLevel()) : void p.default.warning("can't get audioLevel beacuse no audio trace in stream") : (p.default.warning("can't get audioLevel beacuse no stream exist"), 0)
                }, r
            },
            S = function(e) {
                return p.default.debug("Create stream with id", e.streamID), v(e)
            },
            _ = function(e, t) {
                navigator.mediaDevices && navigator.mediaDevices.enumerateDevices || (p.default.warning("enumerateDevices() not supported."), t && t("enumerateDevices() not supported")), navigator.mediaDevices.enumerateDevices().then(function(t) {
                    return e(t)
                }).catch(function(e) {
                    return t && t(e.name + ": " + e.message)
                })
            };
        t.Stream = v, t.createStream = S, t.getDevices = _
    }, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = {
            FAILED: "FAILED",
            INVALID_KEY: "INVALID_KEY",
            INVALID_OPERATION: "INVALID_OPERATION",
            INVALID_PARAMETER: "INVALID_PARAMETER",
            INVALID_LOCAL_STREAM: "INVALID_LOCAL_STREAM",
            INVALID_REMOTE_STREAM: "INVALID_REMOTE_STREAM",
            INVALID_DYNAMIC_KEY: "INVALID_DYNAMIC_KEY",
            DYNAMIC_KEY_TIMEOUT: "DYNAMIC_KEY_TIMEOUT",
            NO_VOCS_AVAILABLE: "NO_VOCS_AVAILABLE",
            NO_VOS_AVAILABLE: "ERR_NO_VOS_AVAILABLE",
            JOIN_CHANNEL_TIMEOUT: "ERR_JOIN_CHANNEL_TIMEOUT",
            NO_AVAILABLE_CHANNEL: "NO_AVAILABLE_CHANNEL",
            LOOKUP_CHANNEL_TIMEOUT: "LOOKUP_CHANNEL_TIMEOUT",
            LOOKUP_CHANNEL_REJECTED: "LOOKUP_CHANNEL_REJECTED",
            OPEN_CHANNEL_TIMEOUT: "OPEN_CHANNEL_TIMEOUT",
            OPEN_CHANNEL_REJECTED: "OPEN_CHANNEL_REJECTED",
            REQUEST_DEFERRED: "REQUEST_DEFERRED",
            SOCKET_ERROR: "SOCKET_ERROR",
            SOCKET_DISCONNECTED: "SOCKET_DISCONNECTED",
            PEERCONNECTION_FAILED: "PEERCONNECTION_FAILED",
            CONNECT_GATEWAY_ERROR: "CONNECT_GATEWAY_ERROR",
            SERVICE_NOT_AVAILABLE: "SERVICE_NOT_AVAILABLE",
            JOIN_CHANNEL_FAILED: "JOIN_CHANNEL_FAILED",
            PUBLISH_STREAM_FAILED: "PUBLISH_STREAM_FAILED",
            UNPUBLISH_STREAM_FAILED: "UNPUBLISH_STREAM_FAILED",
            SUBSCRIBE_STREAM_FAILED: "SUBSCRIBE_STREAM_FAILED",
            UNSUBSCRIBE_STREAM_FAILED: "UNSUBSCRIBE_STREAM_FAILED",
            NO_SUCH_REMOTE_STREAM: "NO_SUCH_REMOTE_STREAM",
            ERR_FAILED: "ERR_FAILED",
            ERR_INVALID_VENDOR_KEY: "ERR_INVALID_VENDOR_KEY",
            ERR_INVALID_CHANNEL_NAME: "ERR_INVALID_CHANNEL_NAME",
            WARN_NO_AVAILABLE_CHANNEL: "WARN_NO_AVAILABLE_CHANNEL",
            WARN_LOOKUP_CHANNEL_TIMEOUT: "WARN_LOOKUP_CHANNEL_TIMEOUT",
            WARN_LOOKUP_CHANNEL_REJECTED: "WARN_LOOKUP_CHANNEL_REJECTED",
            WARN_OPEN_CHANNEL_TIMEOUT: "WARN_OPEN_CHANNEL_TIMEOUT",
            WARN_OPEN_CHANNEL_REJECTED: "WARN_OPEN_CHANNEL_REJECTED",
            WARN_REQUEST_DEFERRED: "WARN_REQUEST_DEFERRED",
            ERR_DYNAMIC_KEY_TIMEOUT: "ERR_DYNAMIC_KEY_TIMEOUT",
            ERR_INVALID_DYNAMIC_KEY: "ERR_INVALID_DYNAMIC_KEY",
            ERR_NO_VOCS_AVAILABLE: "ERR_NO_VOCS_AVAILABLE",
            ERR_NO_VOS_AVAILABLE: "ERR_NO_VOS_AVAILABLE",
            ERR_JOIN_CHANNEL_TIMEOUT: "ERR_JOIN_CHANNEL_TIMEOUT",
            IOS_NOT_SUPPORT: "iOS not support dualStream",
            SHARING_SCREEN_NOT_SUPPORT: "sharing screen not support dualStream",
            STILL_ON_PUBLISHING: "Can't open or close low-Stream when publishing or unpublish high-stream"
        };
        t.default = n
    }, function(e, t, i) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = i(5),
            r = n(o),
            a = i(17),
            s = n(a),
            d = function(e) {
                var t, i, n = (0, r.default)({});
                return n.elementID = e.elementID, n.id = e.id, n.url = e.url, n.div = document.createElement("div"), n.div.setAttribute("id", "bar_" + n.id), n.bar = document.createElement("div"), n.bar.setAttribute("style", "width: 100%; height: 15%; max-height: 30px; position: absolute; bottom: 0; right: 0; background-color: rgba(255,255,255,0.62)"), n.bar.setAttribute("id", "subbar_" + n.id), n.link = document.createElement("a"), n.link.setAttribute("href", "http://www.lynckia.com/"), n.link.setAttribute("target", "_blank"), n.logo = document.createElement("img"), n.logo.setAttribute("style", "width: 100%; height: 100%; max-width: 30px; position: absolute; top: 0; left: 2px;"), n.logo.setAttribute("alt", "Lynckia"), i = function(e) {
                    "block" !== e ? e = "none" : clearTimeout(t), n.div.setAttribute("style", "width: 100%; height: 100%; position: absolute; bottom: 0; right: 0; display:" + e)
                }, n.display = function() {
                    i("block")
                }, n.hide = function() {
                    t = setTimeout(i, 1e3)
                }, document.getElementById(n.elementID).appendChild(n.div), n.div.appendChild(n.bar), e.stream.screen || void 0 !== e.options && void 0 !== e.options.speaker && !0 !== e.options.speaker || (n.speaker = new s.default({
                    elementID: "subbar_" + n.id,
                    id: n.id,
                    stream: e.stream,
                    media: e.media,
                    url: n.url
                })), n.display(), n.hide(), n
            };
        t.default = d
    }, function(e, t, i) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.GetUserMedia = t.Connection = void 0;
        var o = i(22),
            r = n(o),
            a = i(23),
            s = n(a),
            d = i(24),
            c = n(d),
            u = i(25),
            l = n(u),
            p = i(26),
            f = n(p),
            m = i(0),
            g = n(m),
            v = 103,
            S = function(e) {
                var t = {};
                if (e.session_id = v += 1, "undefined" != typeof window && window.navigator)
                    if (null !== window.navigator.userAgent.match("Firefox")) t.browser = "mozilla", t = (0, f.default)(e);
                    else if (window.navigator.userAgent.indexOf("Safari") > -1 && -1 === navigator.userAgent.indexOf("Chrome")) g.default.debug("Safari"), t = (0, c.default)(e), t.browser = "safari";
                else if (window.navigator.userAgent.indexOf("MSIE ")) t = (0, s.default)(e), t.browser = "ie";
                else if (window.navigator.appVersion.match(/Chrome\/([\w\W]*?)\./)[1] >= 26) t = (0, s.default)(e), t.browser = "chrome-stable";
                else {
                    if (!(window.navigator.userAgent.toLowerCase().indexOf("chrome") >= 40)) throw t.browser = "none", "WebRTC stack not available";
                    t = (0, r.default)(e), t.browser = "chrome-canary"
                } else g.default.error("Publish/subscribe video/audio streams not supported yet"), t = (0, l.default)(e);
                return t
            },
            _ = function(e, t, i) {
                if (navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia, e.screen)
                    if (g.default.debug("Screen access requested"), null !== window.navigator.userAgent.match("Firefox")) {
                        var n = {};
                        void 0 != e.video.mandatory ? (n.video = e.video, n.video.mediaSource = "window") : n = {
                            video: {
                                mediaSource: "window"
                            }
                        }, navigator.getMedia(n, t, i)
                    } else if (null !== window.navigator.userAgent.match("Chrome")) {
                    if (window.navigator.appVersion.match(/Chrome\/([\w\W]*?)\./)[1] < 34) return void i({
                        code: "This browser does not support screen sharing"
                    });
                    var o = "okeephmleflklcdebijnponpabbmmgeo";
                    e.extensionId && (g.default.debug("extensionId supplied, using " + e.extensionId), o = e.extensionId), g.default.debug("Screen access on chrome stable, looking for extension");
                    try {
                        chrome.runtime.sendMessage(o, {
                            getStream: !0
                        }, function(o) {
                            if (void 0 === o) {
                                g.default.debug("Access to screen denied");
                                return void i({
                                    code: "Access to screen denied"
                                })
                            }
                            var r = o.streamId,
                                a = e.attributes.width,
                                s = e.attributes.height,
                                d = e.attributes.maxFr,
                                c = e.attributes.minFr;
                            n = {
                                video: {
                                    mandatory: {
                                        chromeMediaSource: "desktop",
                                        chromeMediaSourceId: r,
                                        maxHeight: s,
                                        maxWidth: a,
                                        maxFrameRate: d,
                                        minFrameRate: c
                                    }
                                }
                            }, navigator.getMedia(n, t, i)
                        })
                    } catch (e) {
                        g.default.debug("AgoraRTC screensharing plugin is not accessible");
                        var r = {
                            code: "no_plugin_present"
                        };
                        return void i(r)
                    }
                } else g.default.debug("This browser does not support screenSharing");
                else window.navigator.userAgent.indexOf("Safari") > -1 && -1 === navigator.userAgent.indexOf("Chrome") ? navigator.mediaDevices.getUserMedia(e).then(t).catch(i) : "undefined" != typeof navigator && navigator.getMedia ? navigator.getMedia(e, t, i) : g.default.error("Video/audio streams not supported yet")
            };
        t.Connection = S, t.GetUserMedia = _
    }, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function(e) {
            e && e.apply(this, [].slice.call(arguments, 1))
        };
        t.default = n
    }, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.shouldUseHttps = t.post = void 0;
        var n = i(4),
            o = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t.default = e, t
            }(n),
            r = function(e, t, i, n) {
                var r = new XMLHttpRequest;
                r.timeout = t.timeout || o.HTTP_CONNECT_TIMEOUT, r.open("POST", e, !0), r.setRequestHeader("Content-type", "application/json; charset=utf-8"), r.onload = function(e) {
                    i && i(r.responseText)
                }, r.onerror = function(t) {
                    n && n(t, e)
                }, r.ontimeout = function(t) {
                    n && n(t, e)
                }, r.send(JSON.stringify(t))
            },
            a = function() {
                return "https:" == document.location.protocol
            };
        t.post = r, t.shouldUseHttps = a
    }, function(e, t, i) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getGatewayList = void 0;
        var o = i(4),
            r = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t.default = e, t
            }(o),
            a = i(0),
            s = n(a),
            d = i(8),
            c = (n(d), i(12)),
            u = i(6),
            l = i(3),
            p = function(e, t, i, n) {
                var o = (new Date).getTime(),
                    r = {
                        key: t.appId,
                        cname: t.cname,
                        uid: t.uid
                    };
                (0, c.post)(e, r, function(r) {
                    var a = JSON.parse(r),
                        s = a.error;
                    void 0 != s ? (u.report.joinChooseServer(t.sid, {
                        lts: o,
                        succ: !1,
                        csAddr: e,
                        serverList: null,
                        ec: s
                    }), n("Get server node failed [" + s + "]", e)) : (u.report.joinChooseServer(t.sid, {
                        lts: o,
                        succ: !0,
                        csAddr: e,
                        serverList: a.gateway_addr,
                        cid: a.cid + "",
                        uid: a.uid + "",
                        ec: null
                    }), i(a))
                }, function(e, i) {
                    "timeout" === e.type ? (u.report.joinChooseServer(t.sid, {
                        lts: o,
                        succ: !1,
                        csAddr: i,
                        serverList: null,
                        ec: "timeout"
                    }), n("Connect choose server timeout", i)) : u.report.joinChooseServer(t.sid, {
                        lts: o,
                        succ: !1,
                        csAddr: i,
                        serverList: null,
                        ec: "server_wrong"
                    })
                })
            },
            f = function(e, t, i) {
                var n = (new Date).getTime(),
                    o = !1;
                l.CSCrashRecord.record(n);
                for (var a = function(e) {
                        o || (clearTimeout(g), o = !0, s.default.debug("Get gateway address:", e.gateway_addr), t(e))
                    }, d = function(e, t) {
                        s.default.error(e, t)
                    }, u = r.WEBCS_DOMAIN, f = 0; f < u.length; ++f) {
                    var m;
                    m = (0, c.shouldUseHttps)() ? "https://" + u[f] + ":5668/getwebgw/jsonp" : "http://" + u[f] + ":5669/getwebgw/jsonp", p(m, e, a, d)
                }
                var g = setTimeout(function() {
                    if (!o)
                        for (var t = r.WEBCS_DOMAIN_BACKUP_LIST, i = 0; i < t.length; ++i) {
                            var n;
                            n = (0, c.shouldUseHttps)() ? "https://" + t[i] + ":5668/getwebgw/jsonp" : "http://" + t[i] + ":5669/getwebgw/jsonp", p(n, e, a, d)
                        }
                }, 1e3);
                setTimeout(function() {
                    o || i()
                }, r.WEBCS_BACKUP_CONNECT_TIMEOUT)
            },
            m = function(e, t, i) {
                var n = !1,
                    o = null,
                    r = 1;
                ! function a() {
                    if (l.CSCrashRecord.shouldBlock()) return s.default.warning("CS connetion crash too many times in 10s"), i && i();
                    n || f(e, function(e) {
                        n = !0, clearTimeout(o), t(e)
                    }, function() {
                        s.default.debug("Request gateway list will be restart in " + r + "s"), o = setTimeout(function() {
                            a()
                        }, 1e3 * r), r = r >= 3600 ? 3600 : 2 * r
                    })
                }()
            };
        t.getGatewayList = m
    }, function(e, t, i) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            r = i(7),
            a = i(33),
            s = n(a),
            d = i(10),
            c = i(2),
            u = i(0),
            l = n(u),
            p = i(8),
            f = n(p),
            m = i(11),
            g = n(m),
            v = i(13),
            S = i(4),
            _ = i(6),
            h = i(3),
            b = i(1),
            E = function(e) {
                function t() {
                    for (var e in k.remoteStreams)
                        if (k.remoteStreams.hasOwnProperty(e)) {
                            var t = k.remoteStreams[e];
                            t.stop(), t.close(), delete k.remoteStreams[e], void 0 !== t.pc && (t.pc.close(), t.pc = void 0)
                        }
                }
                var i = !1,
                    n = function() {
                        return {
                            _type: "ping"
                        }
                    },
                    a = function() {
                        return {
                            _type: "join1",
                            message: {
                                key: k.key,
                                channel: k.joinInfo.cname,
                                uid: k.uid,
                                version: S.VERSION,
                                browser: navigator.userAgent,
                                mode: e.mode,
                                role: e.role,
                                config: k.config
                            }
                        }
                    },
                    u = function() {
                        return {
                            _type: "leave"
                        }
                    },
                    p = function(e) {
                        return {
                            _type: "control",
                            message: e
                        }
                    },
                    m = function(e) {
                        return {
                            _type: "token",
                            message: e
                        }
                    },
                    E = function() {
                        return {
                            _type: "p2p_lost",
                            message: null
                        }
                    },
                    R = function(e) {
                        return {
                            _type: "unpublish",
                            message: e
                        }
                    },
                    I = function(e) {
                        return {
                            _type: "unsubscribe",
                            message: e
                        }
                    },
                    y = function(e, t) {
                        return {
                            _type: "switchVideoStream",
                            message: {
                                id: e,
                                type: t
                            }
                        }
                    },
                    A = function(e, t) {
                        return {
                            _type: "publish",
                            options: e,
                            sdp: t
                        }
                    },
                    C = function(e) {
                        return {
                            _type: "publish_stats",
                            options: {
                                stats: e
                            },
                            sdp: null
                        }
                    },
                    w = function(e) {
                        return {
                            _type: "publish_stats_low",
                            options: {
                                stats: e
                            },
                            sdp: null
                        }
                    },
                    O = function(e, t) {
                        return {
                            _type: "subscribe",
                            options: e,
                            sdp: t
                        }
                    },
                    T = function(e, t) {
                        return {
                            _type: "subscribe_stats",
                            options: {
                                id: e,
                                stats: t
                            },
                            sdp: null
                        }
                    },
                    N = function(e, t) {
                        return {
                            _type: "start_live_streaming",
                            message: {
                                url: e,
                                transcodingEnabled: t
                            }
                        }
                    },
                    D = function(e) {
                        return {
                            _type: "stop_live_streaming",
                            message: {
                                url: e
                            }
                        }
                    },
                    L = function(e) {
                        return {
                            _type: "set_live_transcoding",
                            message: {
                                transcoding: e
                            }
                        }
                    },
                    k = (0, c.EventDispatcher)(e);
                k.socket = void 0, k.state = 0, k.mode = e.mode, k.role = e.role, k.codec = e.codec, k.config = {}, k.timers = {}, k.timer_counter = {}, k.localStreams = {}, k.remoteStreams = {}, k.attemps = 1, k.p2p_attemps = 1, k.audioLevel = {}, k.activeSpeaker = void 0, k.liveStreams = new Map;
                var M = g.default;
                k.remoteVideoStreamTypes = {
                    REMOTE_VIDEO_STREAM_HIGH: 0,
                    REMOTE_VIDEO_STREAM_LOW: 1,
                    REMOTE_VIDEO_STREAM_MEDIUM: 2
                }, k.configPublisher = function(e) {
                    k.config = e
                }, k.join = function(e, t, i, o) {
                    var r = (new Date).getTime(),
                        s = e.uid;
                    return 0 !== k.state ? (_.report.joinGateway(e.sid, {
                        lts: r,
                        succ: !1,
                        ec: f.default.INVALID_OPERATION,
                        addr: null
                    }), void l.default.error("Server already in connecting/connected state")) : null !== s && void 0 !== s && parseInt(s) !== s ? (_.report.joinGateway(e.sid, {
                        lts: r,
                        succ: !1,
                        ec: f.default.INVALID_PARAMETER,
                        addr: null
                    }), void l.default.error("Input uid is invalid")) : (k.joinInfo = e, k.uid = s, k.key = t, k.state = 1, void U(e, function(t) {
                        k.stunServerUrl = t.stunServerUrl, k.turnServer = t.turnServer, k.state = 2, l.default.debug("Connected to gateway server"), k.pingTimer = setInterval(function() {
                            B(n(), function() {}, function(e) {})
                        }, 3e3), B(a(), function(t) {
                            _.report.joinGateway(e.sid, {
                                lts: r,
                                succ: !0,
                                ec: null,
                                vid: t.vid,
                                addr: k.socket.getURL()
                            }), i(k.uid)
                        }, function(t) {
                            l.default.error("User join failed [" + t + "]"), t === f.default.ERR_INVALID_VENDOR_KEY ? t = f.default.INVALID_KEY : t === f.default.ERR_INVALID_DYNAMIC_KEY ? t = f.default.INVALID_DYNAMIC_KEY : t === f.default.ERR_DYNAMIC_KEY_TIMEOUT ? t = f.default.DYNAMIC_KEY_TIMEOUT : t === f.default.ERR_NO_VOCS_AVAILABLE ? t = f.default.NO_VOCS_AVAILABLE : t === f.default.ERR_NO_VOS_AVAILABLE ? t = f.default.NO_VOS_AVAILABLE : t === f.default.ERR_JOIN_CHANNEL_TIMEOUT ? t = f.default.JOIN_CHANNEL_TIMEOUT : t === f.default.ERR_FAILED ? t = f.default.FAILED : t === f.default.WARN_NO_AVAILABLE_CHANNEL ? t = f.default.NO_AVAILABLE_CHANNEL : t === f.default.WARN_LOOKUP_CHANNEL_TIMEOUT ? t = f.default.LOOKUP_CHANNEL_TIMEOUT : t === f.default.WARN_LOOKUP_CHANNEL_REJECTED ? t = f.default.LOOKUP_CHANNEL_REJECTED : t === f.default.WARN_OPEN_CHANNEL_TIMEOUT ? t = f.default.OPEN_CHANNEL_TIMEOUT : t === f.default.WARN_OPEN_CHANNEL_REJECTED ? t = f.default.OPEN_CHANNEL_REJECTED : t === f.default.WARN_REQUEST_DEFERRED && (t = f.default.REQUEST_DEFERRED), _.report.joinGateway(e.sid, {
                                lts: r,
                                succ: !1,
                                ec: t,
                                addr: k.socket.getURL()
                            })
                        })
                    }, function(t) {
                        t = JSON.stringify(t), l.default.error("User join failed [" + t + "]"), _.report.joinGateway(e.sid, {
                            lts: r,
                            succ: !1,
                            ec: t,
                            addr: k.socket.getURL()
                        })
                    }))
                }, k.leave = function(e, i) {
                    if (2 != k.state) return void M(e);
                    clearInterval(k.pingTimer);
                    for (var n in k.timers) k.timers.hasOwnProperty(n) && clearInterval(k.timers[n]);
                    B(u(), function(t) {
                        k.socket.close(), k.socket = void 0, l.default.info("Leave channal success"), e && e(t)
                    }, i);
                    for (var n in k.localStreams)
                        if (k.localStreams.hasOwnProperty(n)) {
                            var o = k.localStreams[n];
                            delete k.localStreams[n], void 0 !== o.pc && (o.pc.close(), o.pc = void 0)
                        }
                    t(), k.state = 0
                }, k.publish = function(e, t, i) {
                    var n = (new Date).getTime();
                    if (e.publishLTS = n, "object" !== (void 0 === e ? "undefined" : o(e)) || null === e) return l.default.error("Invalid local stream"), i && i(f.default.INVALID_LOCAL_STREAM), void _.report.publish(k.joinInfo.sid, {
                        lts: n,
                        succ: !1,
                        ec: f.default.INVALID_LOCAL_STREAM
                    });
                    if (null === e.stream && void 0 === e.url) return l.default.error("Invalid local media stream"), i && i(f.default.INVALID_LOCAL_STREAM), void _.report.publish(k.joinInfo.sid, {
                        lts: n,
                        succ: !1,
                        ec: f.default.INVALID_LOCAL_STREAM
                    });
                    if (2 !== k.state) return l.default.error("User is not in the session"), i && i(f.default.INVALID_OPERATION), void _.report.publish(k.joinInfo.sid, {
                        lts: n,
                        succ: !1,
                        ec: f.default.INVALID_OPERATION
                    });
                    var r = e.getAttributes() || {};
                    e.local && void 0 === k.localStreams[e.getId()] && (e.hasAudio() || e.hasVideo() || e.hasScreen()) && (void 0 !== e.url ? x(A({
                        state: "url",
                        audio: e.hasAudio(),
                        video: e.hasVideo(),
                        attributes: e.getAttributes(),
                        mode: k.mode
                    }, e.url), function(t, i) {
                        "success" === t ? (e.getUserId = function() {
                            return i
                        }, k.localStreams[i] = e, e.onClose = function() {
                            k.unpublish(e)
                        }) : l.default.error("Publish local stream failed", t)
                    }) : (k.localStreams[e.getId()] = e, e.pc = (0, d.Connection)({
                        callback: function(o) {
                            l.default.debug("SDP exchange in publish : send offer --  ", JSON.parse(o)), x(A({
                                state: "offer",
                                id: e.getId(),
                                audio: e.hasAudio(),
                                video: e.hasVideo() || e.hasScreen(),
                                attributes: e.getAttributes(),
                                mode: k.mode,
                                codec: k.codec
                            }, o), function(r, a) {
                                if ("error" === r) return l.default.error("Publish local stream failed"), i && i(f.default.PUBLISH_STREAM_FAILED), void _.report.publish(k.joinInfo.sid, {
                                    lts: n,
                                    succ: !1,
                                    localSDP: o,
                                    ec: f.default.PUBLISH_STREAM_FAILED
                                });
                                e.pc.onsignalingmessage = function(t) {
                                    e.pc.onsignalingmessage = function() {}, x(A({
                                        state: "ok",
                                        id: e.getId(),
                                        audio: e.hasAudio(),
                                        video: e.hasVideo(),
                                        screen: e.hasScreen(),
                                        attributes: e.getAttributes(),
                                        mode: k.mode
                                    }, t)), e.getUserId = function() {
                                        return a.id
                                    }, l.default.info("Local stream published with uid", a.id), e.onClose = function() {
                                        k.unpublish(e)
                                    }, e.unmuteAudio = function() {
                                        B(p({
                                            action: "audio-out-on",
                                            streamId: e.getId()
                                        }), function() {}, function() {})
                                    }, e.unmuteVideo = function() {
                                        B(p({
                                            action: "video-out-on",
                                            streamId: e.getId()
                                        }), function() {}, function() {})
                                    }, e.muteAudio = function() {
                                        B(p({
                                            action: "audio-out-off",
                                            streamId: e.getId()
                                        }), function() {}, function() {})
                                    }, e.muteVideo = function() {
                                        B(p({
                                            action: "video-out-off",
                                            streamId: e.getId()
                                        }), function() {}, function() {})
                                    }
                                }, e.pc.oniceconnectionstatechange = function(o) {
                                    "failed" === o ? (void 0 != k.timers[e.getId()] && clearInterval(k.timers[e.getId()]), B(E(), function() {}, function() {}), k.socket.disconnect(), l.default.error("Publisher connection is lost"), i && i(f.default.PEERCONNECTION_FAILED), _.report.publish(k.joinInfo.sid, {
                                        lts: n,
                                        succ: !1,
                                        ec: f.default.PEERCONNECTION_FAILED
                                    })) : "connected" === o && (t && t(), _.report.publish(k.joinInfo.sid, {
                                        lts: n,
                                        succ: !0,
                                        ec: null
                                    }))
                                }, l.default.debug("SDP exchange in publish : receive answer --  ", JSON.parse(r)), e.pc.processSignalingMessage(r)
                            })
                        },
                        audio: e.hasAudio(),
                        video: e.hasVideo(),
                        screen: e.hasScreen(),
                        isSubscriber: !1,
                        iceServers: [],
                        stunServerUrl: k.stunServerUrl,
                        turnServer: k.turnServer,
                        maxAudioBW: r.maxAudioBW,
                        minVideoBW: r.minVideoBW,
                        maxVideoBW: r.maxVideoBW,
                        mode: k.mode,
                        codec: k.codec
                    }), e.pc.addStream(e.stream), l.default.debug("PeerConnection add stream :", e.stream), k.timers[e.getId()] = setInterval(function() {
                        e && e.pc && e.pc.getStats && e.pc.getStatsRate(function(t) {
                            t.forEach(function(t) {
                                -1 === t.id.indexOf("outbound_rtp") && -1 === t.id.indexOf("OutboundRTP") || "video" !== t.mediaType || (t.googFrameWidthSent = e.videoWidth + "", t.googFrameHeightSent = e.videoHeight + ""), e.getUserId && (e.getId() === e.getUserId() ? B(C(t), null, null) : B(w(t), null, null))
                            })
                        })
                    }, 3e3), void 0 !== e.aux_stream && (e.pc.addStream(e.aux_stream), l.default.debug("PeerConnection add stream :", e.aux_stream))))
                }, k.unpublish = function(e, t, i) {
                    return "object" !== (void 0 === e ? "undefined" : o(e)) || null === e ? (M(i, f.default.INVALID_LOCAL_STREAM), void l.default.error("Invalid local stream")) : 2 !== k.state ? (M(i, f.default.INVALID_OPERATION), void l.default.error("User not in the session")) : (void 0 != k.timers[e.getId()] && clearInterval(k.timers[e.getId()]), void(void 0 !== k.socket ? e.local && void 0 !== k.localStreams[e.getId()] ? (delete k.localStreams[e.getId()], B(R(e.getUserId()), function(n) {
                        if ("error" === n) return M(i, f.default.UNPUBLISH_STREAM_FAILED), void l.default.error("Unpublish stream failed");
                        (e.hasAudio() || e.hasVideo() || e.hasScreen()) && void 0 === e.url && void 0 !== e.pc && (e.pc.close(), e.pc = void 0), e.onClose = void 0, e.unmuteAudio = void 0, e.muteAudio = void 0, e.unmuteVideo = void 0, e.muteVideo = void 0, t && t()
                    }, i)) : (M(i, f.default.INVALID_LOCAL_STREAM), l.default.error("Invalid local stream")) : (M(i, f.default.INVALID_OPERATION), l.default.error("User not in the session"))))
                }, k.subscribe = function(e, t) {
                    var i = (new Date).getTime();
                    return e.subscribeLTS = i, "object" !== (void 0 === e ? "undefined" : o(e)) || null === e ? (_.report.subscribe(k.joinInfo.sid, {
                        lts: i,
                        succ: !1,
                        peerid: e.getId() + "",
                        ec: f.default.INVALID_REMOTE_STREAM
                    }), void l.default.error("Invalid remote stream")) : 2 !== k.state ? (_.report.subscribe(k.joinInfo.sid, {
                        lts: i,
                        succ: !1,
                        peerid: e.getId() + "",
                        ec: f.default.INVALID_OPERATION
                    }), void l.default.error("User is not in the session")) : void(!e.local && k.remoteStreams.hasOwnProperty(e.getId()) && (e.hasAudio() || e.hasVideo() || e.hasScreen()) ? (e.pc = (0, d.Connection)({
                        callback: function(t) {
                            l.default.debug("SDP exchange in subscribe : send offer --  ", JSON.parse(t)), x(O({
                                streamId: e.getId(),
                                audio: !0,
                                video: !0,
                                mode: k.mode,
                                codec: k.codec
                            }, t), function(t) {
                                if ("error" === t) return l.default.error("Subscribe remote stream failed, closing stream ", e.getId()), void e.close();
                                l.default.debug("SDP exchange in subscribe : receive answer --  ", JSON.parse(t)), e.pc.processSignalingMessage(t)
                            })
                        },
                        nop2p: !0,
                        audio: !0,
                        video: !0,
                        screen: e.hasScreen(),
                        isSubscriber: !0,
                        iceServers: [],
                        stunServerUrl: k.stunServerUrl,
                        turnServer: k.turnServer
                    }), e.pc.onaddstream = function(t, i) {
                        if ("ontrack" === i && "video" === t.track.kind || "onaddstream" === i) {
                            if (l.default.info("Remote stream subscribed with uid ", e.getId()), k.remoteStreams[e.getId()].stream = "onaddstream" === i ? t.stream : t.streams[0], k.remoteStreams[e.getId()].hasVideo()) {
                                if ((0, b.isFireFox)()) {
                                    var n = k.remoteStreams[e.getId()].stream;
                                    (0, h.vsResHack)(n, function(t, i) {
                                        e.videoWidth = t, e.videoHeight = i
                                    }, function(e) {
                                        return l.default.warning("vsResHack failed:" + e)
                                    })
                                }
                            } else k.remoteStreams[e.getId()].disableVideo();
                            var o = (0, c.StreamEvent)({
                                type: "stream-subscribed",
                                stream: k.remoteStreams[e.getId()]
                            });
                            k.dispatchEvent(o)
                        }
                        e.unmuteAudio = function() {
                            B(p({
                                action: "audio-in-on",
                                streamId: e.getId()
                            }), function() {}, function() {})
                        }, e.muteAudio = function() {
                            B(p({
                                action: "audio-in-off",
                                streamId: e.getId()
                            }), function() {}, function() {})
                        }, e.unmuteVideo = function() {
                            B(p({
                                action: "video-in-on",
                                streamId: e.getId()
                            }), function() {}, function() {})
                        }, e.muteVideo = function() {
                            B(p({
                                action: "video-in-off",
                                streamId: e.getId()
                            }), function() {}, function() {})
                        }
                    }, k.timers[e.getId()] = setInterval(function() {
                        e && e.pc && e.pc.getStats && e.pc.getStatsRate(function(t) {
                            t.forEach(function(t) {
                                -1 !== t.id.indexOf("inbound_rtp") && "video" === t.mediaType && (t.googFrameWidthReceived = e.videoWidth + "", t.googFrameHeightReceived = e.videoHeight + ""), x(T(e.getId(), t), null, null)
                            })
                        })
                    }, 3e3), k.audioLevel[e.getId()] = 0, k.timers[e.getId() + "audio"] = setInterval(function() {
                        e && e.pc && e.pc.getStats && e.pc.getStats(function(t) {
                            t.forEach(function(t) {
                                if ("audio" === t.mediaType) {
                                    if (t.audioOutputLevel > 5e3) {
                                        k.audioLevel[e.getId()] < 20 && (k.audioLevel[e.getId()] += 1);
                                        for (var i in k.audioLevel) parseInt(i) !== e.getId() && k.audioLevel[i] > 0 && (k.audioLevel[i] -= 1)
                                    }
                                    var n = Object.keys(k.audioLevel),
                                        o = n.sort(function(e, t) {
                                            return k.audioLevel[t] - k.audioLevel[e]
                                        });
                                    if (k.activeSpeaker !== o[0]) {
                                        var r = (0, c.ClientEvent)({
                                            type: "active-speaker",
                                            uid: o[0]
                                        });
                                        k.dispatchEvent(r), k.activeSpeaker = o[0], l.default.debug("Update active speaker:" + k.activeSpeaker)
                                    }
                                }
                            })
                        })
                    }, 50), e.pc.oniceconnectionstatechange = function(t) {
                        "failed" === t ? (void 0 != k.timers[e.getId()] && (clearInterval(k.timers[e.getId()]), clearInterval(k.timers[e.getId()] + "audio")), B(E(), function() {}, function() {}), k.socket.disconnect(), l.default.error("Subscriber connection is lost", e.getId()), _.report.subscribe(k.joinInfo.sid, {
                            lts: i,
                            succ: !1,
                            peerid: e.getId() + "",
                            ec: f.default.PEERCONNECTION_FAILED
                        })) : "connected" === t && (_.report.subscribe(k.joinInfo.sid, {
                            lts: i,
                            succ: !0,
                            peerid: e.getId() + "",
                            ec: null
                        }), k.firstFrameTimer = setInterval(function() {
                            e.pc ? e.pc.getStats(function(t) {
                                t.forEach(function(t) {
                                    -1 === t.id.indexOf("recv") && -1 === t.id.indexOf("inbound_rtp") && -1 === t.id.indexOf("InboundRTP") || "video" === t.mediaType && (t.framesDecoded > 0 || t.googFramesDecoded > 0) && (clearInterval(k.firstFrameTimer), _.report.firstRemoteFrame(k.joinInfo.sid, {
                                        lts: (new Date).getTime(),
                                        peerid: e.getId() + "",
                                        succ: !0
                                    }))
                                })
                            }) : clearInterval(k.firstFrameTimer)
                        }, 100))
                    }) : (_.report.subscribe(k.joinInfo.sid, {
                        lts: i,
                        succ: !1,
                        peerid: e.getId() + "",
                        ec: f.default.INVALID_REMOTE_STREAM
                    }), l.default.error("Invalid remote stream")))
                }, k.unsubscribe = function(e, t) {
                    return "object" !== (void 0 === e ? "undefined" : o(e)) || null === e ? (M(t, f.default.INVALID_REMOTE_STREAM), void l.default.error("Invalid remote stream")) : 2 !== k.state ? (M(t, f.default.INVALID_OPERATION), void l.default.error("User is not in the session")) : (void 0 != k.timers[e.getId()] && (clearInterval(k.timers[e.getId()]), clearInterval(k.timers[e.getId()] + "audio")), void 0 != k.audioLevel[e.getId()] && delete k.audioLevel[e.getId()], void 0 != k.timer_counter[e.getId()] && delete k.timer_counter[e.getId()], k.remoteStreams.hasOwnProperty(e.getId()) ? k.socket ? e.local ? (M(t, f.default.INVALID_REMOTE_STREAM), void l.default.error("Invalid remote stream")) : (e.close(), delete k.remoteStreams[e.getId()], void B(I(e.getId()), function(i) {
                        if ("error" === i) return M(t, f.default.UNSUBSCRIBE_STREAM_FAILED), void l.default.error("Unsubscribe remote stream failed", e.getId());
                        l.default.info("Unsubscrib stream success")
                    }, t)) : (M(t, f.default.INVALID_OPERATION), void l.default.error("User is not in the session")) : void M(t, f.default.NO_SUCH_REMOTE_STREAM))
                }, k.setRemoteVideoStreamType = function(e, t) {
                    if (l.default.debug("Switching remote video stream " + e.getId() + " to " + t), "object" !== (void 0 === e ? "undefined" : o(e)) || null === e) return void l.default.error("Invalid remote stream");
                    if (2 !== k.state) return void l.default.error("User is not in the session");
                    if (!e.local) {
                        switch (t) {
                            case k.remoteVideoStreamTypes.REMOTE_VIDEO_STREAM_HIGH:
                            case k.remoteVideoStreamTypes.REMOTE_VIDEO_STREAM_LOW:
                            case k.remoteVideoStreamTypes.REMOTE_VIDEO_STREAM_MEDIUM:
                                break;
                            default:
                                return
                        }
                        B(y(e.getId(), t), null, null)
                    }
                }, k.startLiveStreaming = function(e, t) {
                    if (k.liveStreams.set(e, t), l.default.debug("Start live streaming " + e + " transcodingEnabled " + t), 2 !== k.state) return void l.default.error("User is not in the session");
                    B(N(e, t), null, null)
                }, k.stopLiveStreaming = function(e) {
                    if (l.default.debug("Stop live streaming " + e), 2 !== k.state) return void l.default.error("User is not in the session");
                    k.liveStreams.delete(e), B(D(e), null, null)
                }, k.setLiveTranscoding = function(e) {
                    if (k.transcoding = e, l.default.debug("Set live transcoding " + e), 2 !== k.state) return void l.default.error("User is not in the session");
                    B(L(e), null, null)
                };
                var V = function(e) {
                        return 1e3 * Math.min(30, Math.pow(2, e) - 1)
                    },
                    P = function() {
                        k.key ? (l.default.info("Re-joining to channel " + k.joinInfo.cname), k.join(k.joinInfo, k.key, function(e) {
                            l.default.info("User " + e + " is re-joined to " + k.joinInfo.cname);
                            for (var t in k.localStreams)
                                if (void 0 !== k.localStreams[t]) {
                                    var i = k.localStreams[t];
                                    delete k.localStreams[t], void 0 !== i.pc && (i.pc.close(), i.pc = void 0)
                                }
                            k.dispatchEvent((0, c.ClientEvent)({
                                type: "rejoin"
                            })), k.liveStreams && k.liveStreams.size && k.liveStreams.forEach(function(e, t) {
                                e && k.setLiveTranscoding(k.transcoding), k.startLiveStreaming(t, e)
                            })
                        }, function(e) {
                            if (l.default.error("Re-join to channel failed [" + e + "]"), e === f.default.ERR_INVALID_VENDOR_KEY) {
                                var t = (0, c.StreamEvent)({
                                    type: "error",
                                    reason: f.default.INVALID_KEY
                                });
                                k.dispatchEvent(t)
                            } else if (e === f.default.ERR_INVALID_DYNAMIC_KEY) {
                                var t = (0, c.StreamEvent)({
                                    type: "error",
                                    reason: f.default.INVALID_DYNAMIC_KEY
                                });
                                k.dispatchEvent(t)
                            } else if (e === f.default.ERR_DYNAMIC_KEY_TIMEOUT) {
                                var t = (0, c.StreamEvent)({
                                    type: "error",
                                    reason: f.default.DYNAMIC_KEY_TIMEOUT
                                });
                                k.dispatchEvent(t);
                                var i = V(k.attemps);
                                l.default.error("Connect to server failed [Channel key timeout], attempt to recover [#" + k.attemps + "] after " + i / 1e3 + " seconds");
                                setTimeout(function() {
                                    k.attemps++, void 0 !== k.socket && k.socket.disconnect()
                                }, i)
                            }
                        })) : l.default.error("Connection recover failed [Invalid channel key]")
                    },
                    F = function(e) {
                        k.socket = (0, s.default)(e, {
                            sid: k.joinInfo.sid
                        })
                    },
                    U = function(e, n, o) {
                        void 0 !== k.socket ? k.socket.socket.connect() : (F(e.gatewayAddr), k.socket.on("onUplinkStats", function(e) {
                            k.localStreams[k.uid] && (k.localStreams[k.uid].uplinkStats = e)
                        }), k.socket.on("connect", function() {
                            k.attemps = 1, B(m(e), n, o)
                        }), k.socket.on("reconnect", function() {
                            l.default.debug("Try to reconnect choose server and get gateway list again "), (0, v.getGatewayList)(k.joinInfo, function(e) {
                                k.socket.reconnect(e.gateway_addr)
                            })
                        }), k.socket.on("connect_error", function(e) {
                            for (var n in k.timers) k.timers.hasOwnProperty(n) && clearInterval(k.timers[n]);
                            for (var n in k.remoteStreams)
                                if (k.remoteStreams.hasOwnProperty(n)) {
                                    var o = k.remoteStreams[n],
                                        r = (0, c.ClientEvent)({
                                            type: "stream-removed",
                                            uid: o.getId(),
                                            stream: o
                                        });
                                    k.dispatchEvent(r)
                                }
                            if (t(), 1 != i) {
                                clearInterval(k.pingTimer), k.state = 0, k.socket = void 0;
                                var r = (0, c.StreamEvent)({
                                    type: "error",
                                    reason: f.default.SOCKET_ERROR
                                });
                                k.dispatchEvent(r);
                                var a = V(k.attemps);
                                l.default.error("Connect to server error [" + JSON.stringify(e) + "], attempt to recover [#" + k.attemps + "] after " + a / 1e3 + " seconds");
                                setTimeout(function() {
                                    k.attemps++, P()
                                }, a)
                            }
                        }), k.socket.on("disconnect", function(e) {
                            if (0 !== k.state) {
                                k.state = 0;
                                for (var n in k.timers) k.timers.hasOwnProperty(n) && clearInterval(k.timers[n]);
                                for (var n in k.remoteStreams)
                                    if (k.remoteStreams.hasOwnProperty(n)) {
                                        var o = k.remoteStreams[n],
                                            r = (0, c.ClientEvent)({
                                                type: "stream-removed",
                                                uid: o.getId(),
                                                stream: o
                                            });
                                        k.dispatchEvent(r)
                                    }
                                if (t(), 1 != i) {
                                    clearInterval(k.pingTimer), k.socket = void 0;
                                    var r = (0, c.StreamEvent)({
                                        type: "error",
                                        reason: f.default.SOCKET_DISCONNECTED
                                    });
                                    k.dispatchEvent(r);
                                    var a = V(k.attemps);
                                    l.default.error("Disconnect from server [" + e + "], attempt to recover [#" + k.attemps + "] after " + a / 1e3 + " seconds");
                                    setTimeout(function() {
                                        k.attemps++, P()
                                    }, a)
                                }
                            }
                        }), k.socket.on("onAddAudioStream", function(e) {
                            if (void 0 === k.remoteStreams[e.id]) {
                                var t = (0, r.Stream)({
                                    streamID: e.id,
                                    local: !1,
                                    audio: e.audio,
                                    video: e.video,
                                    screen: e.screen,
                                    attributes: e.attributes
                                });
                                k.remoteStreams[e.id] = t;
                                var i = (0, c.StreamEvent)({
                                    type: "stream-added",
                                    stream: t
                                });
                                k.dispatchEvent(i)
                            }
                        }), k.socket.on("onAddVideoStream", function(e) {
                            if (l.default.info("Newly added remote stream with uid", e.id), void 0 === k.remoteStreams[e.id]) {
                                var t = (0, r.Stream)({
                                    streamID: e.id,
                                    local: !1,
                                    audio: e.audio,
                                    video: e.video,
                                    screen: e.screen,
                                    attributes: e.attributes
                                });
                                k.remoteStreams[e.id] = t;
                                var i = (0, c.StreamEvent)({
                                    type: "stream-added",
                                    stream: t
                                });
                                k.dispatchEvent(i)
                            } else if (void 0 !== k.remoteStreams[e.id].stream) {
                                k.remoteStreams[e.id].video = !0, k.remoteStreams[e.id].enableVideo(), l.default.info("Stream changed: enable video " + e.id);
                                var n = k.remoteStreams[e.id],
                                    o = n.player.elementID;
                                n.stop(), n.play(o)
                            } else {
                                var t = (0, r.Stream)({
                                    streamID: e.id,
                                    local: !1,
                                    audio: !0,
                                    video: !0,
                                    screen: !1,
                                    attributes: e.attributes
                                });
                                k.remoteStreams[e.id] = t, l.default.info("Stream changed: modify video " + e.id)
                            }
                        }), k.socket.on("onRemoveStream", function(e) {
                            var t = k.remoteStreams[e.id];
                            if (!t) return void console.log("ERROR stream ", e.id, " not found onRemoveStream ", e);
                            delete k.remoteStreams[e.id];
                            var i = (0, c.StreamEvent)({
                                type: "stream-removed",
                                stream: t
                            });
                            k.dispatchEvent(i), t.close(), void 0 !== t.pc && (t.pc.close(), t.pc = void 0)
                        }), k.socket.on("onPublishStream", function(e) {
                            var t = k.localStreams[e.id],
                                i = (0, c.StreamEvent)({
                                    type: "stream-published",
                                    stream: t
                                });
                            k.dispatchEvent(i)
                        }), k.socket.on("mute_audio", function(e) {
                            l.default.info("rcv peer mute audio");
                            var t = (0, c.ClientEvent)({
                                type: "mute-audio",
                                uid: e.peerid
                            });
                            k.dispatchEvent(t)
                        }), k.socket.on("unmute_audio", function(e) {
                            l.default.info("rcv peer unmute audio");
                            var t = (0, c.ClientEvent)({
                                type: "unmute-audio",
                                uid: e.peerid
                            });
                            k.dispatchEvent(t)
                        }), k.socket.on("mute_video", function(e) {
                            l.default.info("rcv peer mute video");
                            var t = (0, c.ClientEvent)({
                                type: "mute-video",
                                uid: e.peerid
                            });
                            k.dispatchEvent(t)
                        }), k.socket.on("unmute_video", function(e) {
                            l.default.info("rcv peer unmute video");
                            var t = (0, c.ClientEvent)({
                                type: "unmute-video",
                                uid: e.peerid
                            });
                            k.dispatchEvent(t)
                        }), k.socket.on("user_banned", function(e) {
                            l.default.info("user banned uid:" + e.id + "error:" + e.errcode);
                            var t = (0, c.ClientEvent)({
                                type: "client-banned",
                                uid: e.id,
                                attr: e.errcode
                            });
                            k.dispatchEvent(t), i = !0, leave()
                        }), k.socket.on("onP2PLost", function(e) {
                            if (l.default.debug("p2plost:", e), "publish" === e.event) {
                                var t = k.localStreams[e.uid];
                                t && _.report.publish(k.joinInfo.sid, {
                                    lts: t.publishLTS,
                                    succ: !1,
                                    ec: "DTLS failed"
                                })
                            }
                            if ("subscribe" === e.event) {
                                var i = k.remoteStreams[e.uid];
                                i && _.report.subscribe(k.joinInfo.sid, {
                                    lts: i.subscribeLTS,
                                    succ: !1,
                                    peerid: e.uid + "",
                                    ec: "DTLS failed"
                                })
                            }
                            k.socket.disconnect()
                        }), k.socket.on("onPeerLeave", function(e) {
                            var t = (0, c.ClientEvent)({
                                type: "peer-leave",
                                uid: e.id
                            });
                            if (k.remoteStreams.hasOwnProperty(e.id) && (t.stream = k.remoteStreams[e.id]), k.dispatchEvent(t), k.remoteStreams.hasOwnProperty(e.id)) {
                                l.default.info("closing stream on peer leave", e.id);
                                var i = k.remoteStreams[e.id];
                                i.close(), delete k.remoteStreams[e.id], void 0 !== i.pc && (i.pc.close(), i.pc = void 0)
                            }
                            k.timers.hasOwnProperty(e.id) && (clearInterval(k.timers[e.id]), delete k.timers[e.id]), void 0 != k.audioLevel[e.id] && delete k.audioLevel[e.id], void 0 != k.timer_counter[e.id] && delete k.timer_counter[e.id]
                        }), k.socket.on("onUplinkStats", function(e) {}), k.socket.on("liveStreamingStarted", function(e) {
                            var t = (0, c.LiveStreamingEvent)({
                                type: "liveStreamingStarted",
                                url: e.url
                            });
                            k.dispatchEvent(t)
                        }), k.socket.on("liveStreamingFailed", function(e) {
                            var t = (0, c.LiveStreamingEvent)({
                                type: "liveStreamingFailed",
                                url: e.url
                            });
                            k.dispatchEvent(t)
                        }), k.socket.on("liveStreamingStopped", function(e) {
                            var t = (0, c.LiveStreamingEvent)({
                                type: "liveStreamingStopped",
                                url: e.url
                            });
                            k.dispatchEvent(t)
                        }), k.socket.on("liveTranscodingUpdated", function(e) {
                            var t = (0, c.LiveStreamingEvent)({
                                type: "liveTranscodingUpdated",
                                reason: e.reason
                            });
                            k.dispatchEvent(t)
                        }))
                    },
                    B = function(e, t, i) {
                        if (void 0 === k.socket) return M(i, f.default.INVALID_OPERATION), void l.default.error("No socket available");
                        try {
                            k.socket.emitSimpleMessage(e, function(e, n) {
                                "success" === e ? "function" == typeof t && t(n) : "function" == typeof i && i(n)
                            })
                        } catch (t) {
                            M(i, f.default.SOCKET_ERROR), l.default.error("Socket emit message failed" + JSON.stringify(e)), l.default.error(t)
                        }
                    },
                    x = function(e, t) {
                        if (void 0 === k.socket) return void l.default.error("Error in sendSimpleSdp [socket not ready]");
                        try {
                            k.socket.emitSimpleMessage(e, function(e, i) {
                                void 0 !== t && t(e, i)
                            })
                        } catch (e) {
                            l.default.error("Error in sendSimpleSdp [" + e + "]")
                        }
                    };
                return k
            };
        t.default = E
    }, function(e, t, i) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.LiveTranscoding = t.TranscodingUser = t.VIDEO_CODEC_PROFILE_HIGH = t.VIDEO_CODEC_PROFILE_MAIN = t.VIDEO_CODEC_PROFILE_BASELINE = t.AUDIO_SAMPLE_RATE_48000 = t.AUDIO_SAMPLE_RATE_44100 = t.AUDIO_SAMPLE_RATE_32000 = t.createLiveClient = t.createRtcClient = t.createClient = void 0;
        var o = i(14),
            r = n(o),
            a = i(0),
            s = n(a),
            d = i(8),
            c = n(d),
            u = i(3),
            l = i(13),
            p = i(6),
            f = i(1),
            m = i(35),
            g = i(7),
            v = function(e) {
                var t = {};
                return t.key = void 0, t.highStream = null, t.lowStream = null, t.isDualStream = !1, t.highStreamState = 2, t.lowStreamState = 2, t._getVideoCameraIdByLabel = function(e, t, i) {
                    (0, g.getDevices)(function(n) {
                        console.log(n, e);
                        var o = !0,
                            r = !1,
                            a = void 0;
                        try {
                            for (var s, d = n[Symbol.iterator](); !(o = (s = d.next()).done); o = !0) {
                                var c = s.value;
                                if (c.label === e && "videoinput" === c.kind) return console.log(c), t(c.deviceId)
                            }
                        } catch (e) {
                            r = !0, a = e
                        } finally {
                            try {
                                !o && d.return && d.return()
                            } finally {
                                if (r) throw a
                            }
                        }
                        return i()
                    }, i)
                }, t.init = function(t, i, n) {
                    s.default.info("Initializing AgoraRTC client"), e.appId = t, e.sessionId = (0, u.generateSessionId)(), i()
                }, t.configPublisher = function(e) {
                    t.gatewayClient.configPublisher(e)
                }, t.enableDualStream = function(i, n) {
                    if ("iOS" === (0, f.getBrowserOS)()) return p.report.streamSwitch(e.sessionId, {
                        lts: (new Date).getTime(),
                        isdual: !0,
                        succ: !1
                    }), n && n(c.default.IOS_NOT_SUPPORT);
                    p.report.streamSwitch(e.sessionId, {
                        lts: (new Date).getTime(),
                        isdual: !0,
                        succ: !0
                    }), t.isDualStream = !0, 0 === t.highStreamState ? t._publishLowStream(i, n) : 1 === t.highStreamState ? n && n(c.default.STILL_ON_PUBLISHING) : i && i()
                }, t.disableDualStream = function(i, n) {
                    p.report.streamSwitch(e.sessionId, {
                        lts: (new Date).getTime(),
                        isdual: !1,
                        succ: !0
                    }), t.isDualStream = !1, 0 === t.highStreamState ? t._unpublishLowStream(i, n) : 1 === t.highStreamState ? n && n(c.default.STILL_ON_PUBLISHING) : i && i()
                }, t._createLowStream = function(e, i) {
                    if (!t.highStream || !t.highStream.stream) return s.default.warning("Can't create low-stream without highStream");
                    var n = Object.assign({}, t.highStream.params);
                    if (n.streamID += 1, n.audio = !1, n.video) {
                        var o = t.highStream.stream.getVideoTracks()[0];
                        o || i("can not get hight-stream video track"), t._getVideoCameraIdByLabel(o.label, function(r) {
                            n.cameraId = r;
                            var a = new g.Stream(n);
                            a.setVideoProfileCustom((0, m.simMap)(t.highStream.profile)), a.init(function() {
                                t.highStream.lowStream = a, o.enabled || a.disableVideo(), e && e(a)
                            }, function() {
                                return i("can not get hight-stream video track")
                            })
                        })
                    }
                }, t._getLowStream = function(e, i) {
                    t.lowStream ? e(t.lowStream) : t._createLowStream(function(i) {
                        t.lowStream = i, e(t.lowStream)
                    }, i)
                }, t._publishLowStream = function(e, i) {
                    return 2 !== t.lowStreamState ? (s.default.warning("Can't publish low-stream when low-stream already publish"), i && i()) : t.highStream && t.highStream.hasScreen() ? i && i(c.default.SHARING_SCREEN_NOT_SUPPORT) : void t._getLowStream(function(n) {
                        t.lowStreamState = 1, t.gatewayClient.publish(n, function() {
                            t.lowStreamState = 0, e && e()
                        }, function(e) {
                            s.default.debug("publish low stream failed"), i && i(e)
                        })
                    }, i)
                }, t._unpublishLowStream = function(e, i) {
                    if (0 !== t.lowStreamState) return s.default.warning("Can't unpublish low-stream when low-stream not ever publish"), i && i();
                    t.lowStream && (t.lowStreamState = 1, t.gatewayClient.unpublish(t.lowStream, function() {
                        t.lowStreamState = 2, e && e()
                    }, function(e) {
                        s.default.debug("unpublish low stream failed"), i && i(e)
                    }))
                }, t.join = function(i, n, o, r, a) {
                    t.highStream = null, t.lowStream = null, t.isDualStream = !1, t.highStreamState = 2, t.lowStreamState = 2;
                    var d = {
                        appId: e.appId,
                        sid: e.sessionId,
                        cname: n,
                        uid: o
                    };
                    p.report.sessionInit(e.sessionId, {
                        lts: (new Date).getTime(),
                        cname: n,
                        appid: e.appId,
                        mode: e.mode,
                        succ: !0
                    }), (0, l.getGatewayList)(d, function(o) {
                        s.default.info("Joining channel: " + n), t.key = i || e.appId, d.cid = o.cid, d.uid = o.uid, d.gatewayAddr = o.gateway_addr, t.gatewayClient.join(d, t.key, function(e) {
                            s.default.info("Join channal " + n + " success"), r(e)
                        }, a)
                    }, a)
                }, t.renewChannelKey = function(e, i, n) {
                    void 0 === t.key && ((0, u.safeCall)(n, c.default.INVALID_OPERATION), s.default.error("renewChannelKey should not be called before user join")), t.key = e, (0, u.safeCall)(i)
                }, t.leave = function(e, i) {
                    s.default.info("Leaving channel"), t.gatewayClient.leave(e, i)
                }, t.publish = function(e, i) {
                    if (2 !== t.highStreamState) return s.default.warning("Can't publish stream when stream already publish", e.getId()), i && i("stream already publish");
                    s.default.info("Publishing stream, uid: ", e.getId()), t.highStream = e, t.highStreamState = 1, t.gatewayClient.publish(e, function() {
                        t.highStreamState = 0, s.default.info("Publish success, uid:", e.getId()), t.isDualStream && t._publishLowStream(null, i)
                    }, i)
                }, t.unpublish = function(e, i) {
                    if (0 !== t.highStreamState) return s.default.warning("Can't unpublish stream when stream not publish"), i && i("stream not publish");
                    s.default.info("Unpublish stream, uid: ", e.getId()), t.isDualStream && t.lowStream ? t._unpublishLowStream(function() {
                        t.highStreamState = 1, t.gatewayClient.unpublish(e, function() {
                            t.highStreamState = 2, s.default.info("Unpublish stream success, uid:", e.getId())
                        }, i)
                    }, i) : (t.highStreamState = 1, t.gatewayClient.unpublish(e, function() {
                        t.highStreamState = 2, s.default.info("Unpublish stream success, uid:", e.getId())
                    }, i))
                }, t.subscribe = function(e, i) {
                    s.default.info("Subscribe stream, uid: ", e.getId()), t.gatewayClient.subscribe(e, i)
                }, t.unsubscribe = function(e, i) {
                    s.default.info("Unsubscribe stream, uid: ", e.getId()), t.gatewayClient.unsubscribe(e, i)
                }, t.setRemoteVideoStreamType = function(e, i) {
                    t.gatewayClient.setRemoteVideoStreamType(e, i)
                }, t.startLiveStreaming = function(e, i) {
                    t.gatewayClient.startLiveStreaming(e, i)
                }, t.stopLiveStreaming = function(e) {
                    t.gatewayClient.stopLiveStreaming(e)
                }, t.setLiveTranscoding = function(e) {
                    Object.assign(_, e), t.gatewayClient.setLiveTranscoding(_)
                }, t.gatewayClient = (0, r.default)(e), t.on = t.gatewayClient.on, t.on("rejoin", function() {
                    var e = 2 === t.highStreamState ? 2 : 0;
                    t.highStream && 0 === e && (s.default.info("publish after rejoin"), t.highStreamState = 2, t.lowStreamState = 2, t.publish(t.highStream, function(e) {
                        e && s.default.info(e)
                    }))
                }), t
            },
            S = {
                uid: 0,
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                zOrder: 0,
                alpha: 1
            },
            _ = {
                width: 640,
                height: 360,
                videoBitrate: 400,
                videoFramerate: 15,
                lowLatency: !1,
                audioSampleRate: 48e3,
                audioBitrate: 48,
                audioChannels: 1,
                videoGop: 30,
                videoCodecProfile: 100,
                userCount: 0,
                userConfigExtraInfo: {},
                backgroundColor: 0,
                transcodingUsers: []
            },
            h = function(e) {
                return e && "interop" === e.mode ? (s.default.info("Creating client , MODE : Interop"), v({
                    mode: "live"
                })) : e && "h264_interop" === e.mode ? (s.default.info("Creating client , MODE : h264_interop"), v({
                    mode: "live",
                    codec: "h264"
                })) : (s.default.info("Creating client , MODE : web-only"), v({
                    mode: "rtc"
                }))
            },
            b = function() {
                return s.default.info("Creating client , MODE : rtc"), s.default.warning("createRtcClient is deprecated."), v({
                    mode: "rtc"
                })
            },
            E = function(e) {
                var t = "host";
                return e && "audience" === e.role && (t = e.role), s.default.info("Creating client , MODE : live"), s.default.warning("createLiveClient is deprecated."), v({
                    mode: "live",
                    role: t
                })
            };
        t.createClient = h, t.createRtcClient = b, t.createLiveClient = E, t.AUDIO_SAMPLE_RATE_32000 = 32e3, t.AUDIO_SAMPLE_RATE_44100 = 44100, t.AUDIO_SAMPLE_RATE_48000 = 48e3, t.VIDEO_CODEC_PROFILE_BASELINE = 66, t.VIDEO_CODEC_PROFILE_MAIN = 77, t.VIDEO_CODEC_PROFILE_HIGH = 100, t.TranscodingUser = S, t.LiveTranscoding = _
    }, function(e, t, i) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = i(5),
            r = n(o),
            a = i(9),
            s = (n(a), i(18)),
            d = n(s),
            c = i(0),
            u = n(c),
            l = i(20),
            p = function(e) {
                var t = (0, r.default)({});
                return t.id = e.id, t.url = e.url, t.stream = e.stream.stream, t.elementID = e.elementID, t.destroy = function() {
                    t.video.srcObject = null, t.audio.srcObject = null, t.video.pause(), delete t.resizer, document.getElementById(t.div.id) && t.parentNode.removeChild(t.div)
                }, t.resize = function() {
                    var i = t.container.offsetWidth,
                        n = t.container.offsetHeight;
                    e.stream.screen ? .75 * i < n ? (t.video.style.width = i + "px", t.video.style.height = .75 * i + "px", t.video.style.top = -(.75 * i / 2 - n / 2) + "px", t.video.style.left = "0px") : (t.video.style.height = n + "px", t.video.style.width = 4 / 3 * n + "px", t.video.style.left = -(4 / 3 * n / 2 - i / 2) + "px", t.video.style.top = "0px") : i === t.containerWidth && n === t.containerHeight || (.75 * i > n ? (t.video.style.width = i + "px", t.video.style.height = .75 * i + "px", t.video.style.top = -(.75 * i / 2 - n / 2) + "px", t.video.style.left = "0px") : (t.video.style.height = n + "px", t.video.style.width = 4 / 3 * n + "px", t.video.style.left = -(4 / 3 * n / 2 - i / 2) + "px", t.video.style.top = "0px")), t.containerWidth = i, t.containerHeight = n
                }, t.div = document.createElement("div"), t.div.setAttribute("id", "player_" + t.id), e.stream.video ? t.div.setAttribute("style", "width: 100%; height: 100%; position: relative; background-color: black; overflow: hidden;") : t.div.setAttribute("style", "width: 100%; height: 100%; position: relative; overflow: hidden;"), t.video = document.createElement("video"), t.video.setAttribute("id", "video" + t.id), e.stream.local && !e.stream.screen ? t.video.setAttribute("style", "width: 100%; height: 100%; position: absolute; transform: rotateY(180deg);") : e.stream.video ? (t.video.setAttribute("style", "width: 100%; height: 100%; position: absolute;"), window.navigator.userAgent.indexOf("Safari") > -1 && -1 === navigator.userAgent.indexOf("Chrome") && t.video.setAttribute("controls", "")) : e.stream.screen ? t.video.setAttribute("style", "width: 100%; height: 100%; position: absolute;") : t.video.setAttribute("style", "width: 100%; height: 100%; position: absolute; display: none;"), t.video.setAttribute("autoplay", ""), t.video.setAttribute("muted", ""), t.video.setAttribute("playsinline", ""), e.stream.local && (t.video.volume = 0, t.video.setAttribute("muted", "")), t.audio = document.createElement("audio"), t.audio.setAttribute("id", "audio" + t.id), t.audio.setAttribute("autoplay", ""), e.stream.local && (t.audio.volume = 0, t.audio.setAttribute("muted", "")), void 0 !== t.elementID ? (document.getElementById(t.elementID).appendChild(t.div), t.container = document.getElementById(t.elementID)) : (document.body.appendChild(t.div), t.container = document.body), t.parentNode = t.div.parentNode, t.div.appendChild(t.video), t.div.appendChild(t.audio), t.video.addEventListener("playing", function(e) {
                    ! function e() {
                        if (t.video.videoWidth * t.video.videoHeight > 4) return void u.default.debug("video dimensions:", t.video.videoWidth, t.video.videoHeight);
                        setTimeout(e, 50)
                    }()
                }), t.containerWidth = 0, t.containerHeight = 0, t.resizer = new d.default(t.container, t.resize), t.resize(), (0, l.attachMediaStream)(document.getElementById("video" + t.id), e.stream.stream), (0, l.attachMediaStream)(document.getElementById("audio" + t.id), e.stream.stream), t
            };
        t.default = p
    }, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(5),
            o = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n),
            r = function(e) {
                var t, i, n, r = (0, o.default)({}),
                    a = 50;
                return r.elementID = e.elementID, r.media = e.media, r.id = e.id, void 0 !== e.url && (r.url = e.url), r.stream = e.stream, r.div = document.createElement("div"), r.div.setAttribute("style", "width: 40%; height: 100%; max-width: 32px; position: absolute; right: 0;z-index:0;"), r.icon = document.createElement("img"), r.icon.setAttribute("id", "volume_" + r.id), r.icon.setAttribute("src", r.url + "/assets/sound48.png"), r.icon.setAttribute("style", "width: 80%; height: 100%; position: absolute;"), r.div.appendChild(r.icon), r.stream.local ? (i = function() {
                    r.media.muted = !0, r.icon.setAttribute("src", r.url + "/assets/mute48.png")
                }, n = function() {
                    r.media.muted = !1, r.icon.setAttribute("src", r.url + "/assets/sound48.png")
                }, r.icon.onclick = function() {
                    r.media.muted ? n() : i()
                }) : (r.picker = document.createElement("input"), r.picker.setAttribute("id", "picker_" + r.id), r.picker.type = "range", r.picker.min = 0, r.picker.max = 100, r.picker.step = 10, r.picker.value = a, r.picker.setAttribute("orient", "vertical"), r.div.appendChild(r.picker), r.media.volume = r.picker.value / 100, r.media.muted = !1, r.picker.oninput = function() {
                    r.picker.value > 0 ? (r.media.muted = !1, r.icon.setAttribute("src", r.url + "/assets/sound48.png")) : (r.media.muted = !0, r.icon.setAttribute("src", r.url + "/assets/mute48.png")), r.media.volume = r.picker.value / 100
                }, t = function(e) {
                    r.picker.setAttribute("style", "background: transparent; width: 32px; height: 100px; position: absolute; bottom: 90%; z-index: 1;" + r.div.offsetHeight + "px; right: 0px; -webkit-appearance: slider-vertical; display: " + e)
                }, i = function() {
                    r.icon.setAttribute("src", r.url + "/assets/mute48.png"), a = r.picker.value, r.picker.value = 0, r.media.volume = 0, r.media.muted = !0
                }, n = function() {
                    r.icon.setAttribute("src", r.url + "/assets/sound48.png"), r.picker.value = a, r.media.volume = r.picker.value / 100, r.media.muted = !1
                }, r.icon.onclick = function() {
                    r.media.muted ? n() : i()
                }, r.div.onmouseover = function() {
                    t("block")
                }, r.div.onmouseout = function() {
                    t("none")
                }, t("none")), document.getElementById(r.elementID).appendChild(r.div), r
            };
        t.default = r
    }, function(e, t, i) {
        var n, o;
        ! function(r, a) {
            n = a, void 0 !== (o = "function" == typeof n ? n.call(t, i, t, e) : n) && (e.exports = o)
        }(0, function() {
            function e(e, t) {
                var i = Object.prototype.toString.call(e),
                    n = "[object Array]" === i || "[object NodeList]" === i || "[object HTMLCollection]" === i || "[object Object]" === i || "undefined" != typeof jQuery && e instanceof jQuery || "undefined" != typeof Elements && e instanceof Elements,
                    o = 0,
                    r = e.length;
                if (n)
                    for (; o < r; o++) t(e[o]);
                else t(e)
            }
            if ("undefined" == typeof window) return null;
            var t = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(e) {
                    return window.setTimeout(e, 20)
                },
                i = function(n, o) {
                    function r() {
                        var e = [];
                        this.add = function(t) {
                            e.push(t)
                        };
                        var t, i;
                        this.call = function() {
                            for (t = 0, i = e.length; t < i; t++) e[t].call()
                        }, this.remove = function(n) {
                            var o = [];
                            for (t = 0, i = e.length; t < i; t++) e[t] !== n && o.push(e[t]);
                            e = o
                        }, this.length = function() {
                            return e.length
                        }
                    }

                    function a(e, t) {
                        return e.currentStyle ? e.currentStyle[t] : window.getComputedStyle ? window.getComputedStyle(e, null).getPropertyValue(t) : e.style[t]
                    }

                    function s(e, i) {
                        if (e.resizedAttached) {
                            if (e.resizedAttached) return void e.resizedAttached.add(i)
                        } else e.resizedAttached = new r, e.resizedAttached.add(i);
                        e.resizeSensor = document.createElement("div"), e.resizeSensor.className = "resize-sensor";
                        var n = "position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;",
                            o = "position: absolute; left: 0; top: 0; transition: 0s;";
                        e.resizeSensor.style.cssText = n, e.resizeSensor.innerHTML = '<div class="resize-sensor-expand" style="' + n + '"><div style="' + o + '"></div></div><div class="resize-sensor-shrink" style="' + n + '"><div style="' + o + ' width: 200%; height: 200%"></div></div>', e.appendChild(e.resizeSensor), "static" == a(e, "position") && (e.style.position = "relative");
                        var s, d, c, u, l = e.resizeSensor.childNodes[0],
                            p = l.childNodes[0],
                            f = e.resizeSensor.childNodes[1],
                            m = e.offsetWidth,
                            g = e.offsetHeight,
                            v = function() {
                                p.style.width = "100000px", p.style.height = "100000px", l.scrollLeft = 1e5, l.scrollTop = 1e5, f.scrollLeft = 1e5, f.scrollTop = 1e5
                            };
                        v();
                        var S = function() {
                                d = 0, s && (m = c, g = u, e.resizedAttached && e.resizedAttached.call())
                            },
                            _ = function() {
                                c = e.offsetWidth, u = e.offsetHeight, s = c != m || u != g, s && !d && (d = t(S)), v()
                            },
                            h = function(e, t, i) {
                                e.attachEvent ? e.attachEvent("on" + t, i) : e.addEventListener(t, i)
                            };
                        h(l, "scroll", _), h(f, "scroll", _)
                    }
                    e(n, function(e) {
                        s(e, o)
                    }), this.detach = function(e) {
                        i.detach(n, e)
                    }
                };
            return i.detach = function(t, i) {
                e(t, function(e) {
                    e.resizedAttached && "function" == typeof i && (e.resizedAttached.remove(i), e.resizedAttached.length()) || e.resizeSensor && (e.contains(e.resizeSensor) && e.removeChild(e.resizeSensor), delete e.resizeSensor, delete e.resizedAttached)
                })
            }, i
        })
    }, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function() {
            var e = new Date;
            return e.toTimeString().split(" ")[0] + ":" + e.getMilliseconds()
        };
        t.getTimestamp = n
    }, function(e, t, i) {
        "use strict";

        function n(e) {
            return new Promise(function(t, i) {
                r(e, t, i)
            })
        }
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            r = null,
            a = null,
            s = null,
            d = null,
            c = null,
            u = null,
            l = {
                log: function() {},
                extractVersion: function(e, t, i) {
                    var n = e.match(t);
                    return n && n.length >= i && parseInt(n[i])
                }
            };
        if ("object" === ("undefined" == typeof window ? "undefined" : o(window)) && (!window.HTMLMediaElement || "srcObject" in window.HTMLMediaElement.prototype || Object.defineProperty(window.HTMLMediaElement.prototype, "srcObject", {
                get: function() {
                    return "mozSrcObject" in this ? this.mozSrcObject : this._srcObject
                },
                set: function(e) {
                    "mozSrcObject" in this ? this.mozSrcObject = e : (this._srcObject = e, this.src = URL.createObjectURL(e))
                }
            }), r = window.navigator && window.navigator.getUserMedia), a = function(e, t) {
                e.srcObject = t
            }, s = function(e, t) {
                e.srcObject = t.srcObject
            }, "undefined" != typeof window && window.navigator)
            if (navigator.mozGetUserMedia && window.mozRTCPeerConnection) {
                if (l.log("This appears to be Firefox"), d = "firefox", c = l.extractVersion(navigator.userAgent, /Firefox\/([0-9]+)\./, 1), u = 31, window.RTCPeerConnection = function(e, t) {
                        if (c < 38 && e && e.iceServers) {
                            for (var i = [], n = 0; n < e.iceServers.length; n++) {
                                var o = e.iceServers[n];
                                if (o.hasOwnProperty("urls"))
                                    for (var r = 0; r < o.urls.length; r++) {
                                        var a = {
                                            url: o.urls[r]
                                        };
                                        0 === o.urls[r].indexOf("turn") && (a.username = o.username, a.credential = o.credential), i.push(a)
                                    } else i.push(e.iceServers[n])
                            }
                            e.iceServers = i
                        }
                        return new mozRTCPeerConnection(e, t)
                    }, window.RTCSessionDescription || (window.RTCSessionDescription = mozRTCSessionDescription), window.RTCIceCandidate || (window.RTCIceCandidate = mozRTCIceCandidate), r = function(e, t, i) {
                        var n = function(e) {
                            if ("object" !== (void 0 === e ? "undefined" : o(e)) || e.require) return e;
                            var t = [];
                            return Object.keys(e).forEach(function(i) {
                                if ("require" !== i && "advanced" !== i && "mediaSource" !== i) {
                                    var n = e[i] = "object" === o(e[i]) ? e[i] : {
                                        ideal: e[i]
                                    };
                                    if (void 0 === n.min && void 0 === n.max && void 0 === n.exact || t.push(i), void 0 !== n.exact && ("number" == typeof n.exact ? n.min = n.max = n.exact : e[i] = n.exact, delete n.exact), void 0 !== n.ideal) {
                                        e.advanced = e.advanced || [];
                                        var r = {};
                                        "number" == typeof n.ideal ? r[i] = {
                                            min: n.ideal,
                                            max: n.ideal
                                        } : r[i] = n.ideal, e.advanced.push(r), delete n.ideal, Object.keys(n).length || delete e[i]
                                    }
                                }
                            }), t.length && (e.require = t), e
                        };
                        return c < 38 && (l.log("spec: " + JSON.stringify(e)), e.audio && (e.audio = n(e.audio)), e.video && (e.video = n(e.video)), l.log("ff37: " + JSON.stringify(e))), navigator.mozGetUserMedia(e, t, i)
                    }, navigator.getUserMedia = r, navigator.mediaDevices || (navigator.mediaDevices = {
                        getUserMedia: n,
                        addEventListener: function() {},
                        removeEventListener: function() {}
                    }), navigator.mediaDevices.enumerateDevices = navigator.mediaDevices.enumerateDevices || function() {
                        return new Promise(function(e) {
                            e([{
                                kind: "audioinput",
                                deviceId: "default",
                                label: "",
                                groupId: ""
                            }, {
                                kind: "videoinput",
                                deviceId: "default",
                                label: "",
                                groupId: ""
                            }])
                        })
                    }, c < 41) {
                    var p = navigator.mediaDevices.enumerateDevices.bind(navigator.mediaDevices);
                    navigator.mediaDevices.enumerateDevices = function() {
                        return p().then(void 0, function(e) {
                            if ("NotFoundError" === e.name) return [];
                            throw e
                        })
                    }
                }
            } else if (navigator.webkitGetUserMedia && window.webkitRTCPeerConnection) {
            l.log("This appears to be Chrome"), d = "chrome", c = l.extractVersion(navigator.userAgent, /Chrom(e|ium)\/([0-9]+)\./, 2), u = 38, window.RTCPeerConnection = function(e, t) {
                e && e.iceTransportPolicy && (e.iceTransports = e.iceTransportPolicy);
                var i = new webkitRTCPeerConnection(e, t),
                    n = i.getStats.bind(i);
                return i.getStats = function(e, t, i) {
                    var o = this,
                        r = arguments;
                    if (arguments.length > 0 && "function" == typeof e) return n(e, t);
                    var a = function(e) {
                        var t = {};
                        return e.result().forEach(function(e) {
                            var i = {
                                id: e.id,
                                timestamp: e.timestamp,
                                type: e.type
                            };
                            e.names().forEach(function(t) {
                                i[t] = e.stat(t)
                            }), t[i.id] = i
                        }), t
                    };
                    if (arguments.length >= 2) {
                        var s = function(e) {
                            r[1](a(e))
                        };
                        return n.apply(this, [s, arguments[0]])
                    }
                    return new Promise(function(t, i) {
                        1 === r.length && null === e ? n.apply(o, [function(e) {
                            t.apply(null, [a(e)])
                        }, i]) : n.apply(o, [t, i])
                    })
                }, i
            }, ["createOffer", "createAnswer"].forEach(function(e) {
                var t = webkitRTCPeerConnection.prototype[e];
                webkitRTCPeerConnection.prototype[e] = function() {
                    var e = this;
                    if (arguments.length < 1 || 1 === arguments.length && "object" === o(arguments[0])) {
                        var i = 1 === arguments.length ? arguments[0] : void 0;
                        return new Promise(function(n, o) {
                            t.apply(e, [n, o, i])
                        })
                    }
                    return t.apply(this, arguments)
                }
            }), ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function(e) {
                var t = webkitRTCPeerConnection.prototype[e];
                webkitRTCPeerConnection.prototype[e] = function() {
                    var e = arguments,
                        i = this;
                    return new Promise(function(n, o) {
                        t.apply(i, [e[0], function() {
                            n(), e.length >= 2 && e[1].apply(null, [])
                        }, function(t) {
                            o(t), e.length >= 3 && e[2].apply(null, [t])
                        }])
                    })
                }
            });
            var f = function(e) {
                if ("object" !== (void 0 === e ? "undefined" : o(e)) || e.mandatory || e.optional) return e;
                var t = {};
                return Object.keys(e).forEach(function(i) {
                    if ("require" !== i && "advanced" !== i && "mediaSource" !== i) {
                        var n = "object" === o(e[i]) ? e[i] : {
                            ideal: e[i]
                        };
                        void 0 !== n.exact && "number" == typeof n.exact && (n.min = n.max = n.exact);
                        var r = function(e, t) {
                            return e ? e + t.charAt(0).toUpperCase() + t.slice(1) : "deviceId" === t ? "sourceId" : t
                        };
                        if (void 0 !== n.ideal) {
                            t.optional = t.optional || [];
                            var a = {};
                            "number" == typeof n.ideal ? (a[r("min", i)] = n.ideal, t.optional.push(a), a = {}, a[r("max", i)] = n.ideal, t.optional.push(a)) : (a[r("", i)] = n.ideal, t.optional.push(a))
                        }
                        void 0 !== n.exact && "number" != typeof n.exact ? (t.mandatory = t.mandatory || {}, t.mandatory[r("", i)] = n.exact) : ["min", "max"].forEach(function(e) {
                            void 0 !== n[e] && (t.mandatory = t.mandatory || {}, t.mandatory[r(e, i)] = n[e])
                        })
                    }
                }), e.advanced && (t.optional = (t.optional || []).concat(e.advanced)), t
            };
            if (r = function(e, t, i) {
                    return e.audio && (e.audio = f(e.audio)), e.video && (e.video = f(e.video)), l.log("chrome: " + JSON.stringify(e)), navigator.webkitGetUserMedia(e, t, i)
                }, navigator.getUserMedia = r, navigator.mediaDevices || (navigator.mediaDevices = {
                    getUserMedia: n,
                    enumerateDevices: function() {
                        return new Promise(function(e) {
                            var t = {
                                audio: "audioinput",
                                video: "videoinput"
                            };
                            return MediaStreamTrack.getSources(function(i) {
                                e(i.map(function(e) {
                                    return {
                                        label: e.label,
                                        kind: t[e.kind],
                                        deviceId: e.id,
                                        groupId: ""
                                    }
                                }))
                            })
                        })
                    }
                }), navigator.mediaDevices.getUserMedia) {
                var m = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
                navigator.mediaDevices.getUserMedia = function(e) {
                    return l.log("spec:   " + JSON.stringify(e)), e.audio = f(e.audio), e.video = f(e.video), l.log("chrome: " + JSON.stringify(e)), m(e)
                }
            } else navigator.mediaDevices.getUserMedia = function(e) {
                return n(e)
            };
            void 0 === navigator.mediaDevices.addEventListener && (navigator.mediaDevices.addEventListener = function() {
                l.log("Dummy mediaDevices.addEventListener called.")
            }), void 0 === navigator.mediaDevices.removeEventListener && (navigator.mediaDevices.removeEventListener = function() {
                l.log("Dummy mediaDevices.removeEventListener called.")
            }), a = function(e, t) {
                c >= 43 ? e.srcObject = t : void 0 !== e.src ? e.src = URL.createObjectURL(t) : l.log("Error attaching stream to element.")
            }, s = function(e, t) {
                c >= 43 ? e.srcObject = t.srcObject : e.src = t.src
            }
        } else navigator.mediaDevices && navigator.userAgent.match(/Edge\/(\d+).(\d+)$/) ? (l.log("This appears to be Edge"), d = "edge", c = l.extractVersion(navigator.userAgent, /Edge\/(\d+).(\d+)$/, 2), u = 12) : l.log("Browser does not appear to be WebRTC-capable");
        else l.log("This does not appear to be a browser"), d = "not a browser";
        var g = {};
        try {
            Object.defineProperty(g, "version", {
                set: function(e) {
                    c = e
                }
            })
        } catch (e) {}
        var v;
        "undefined" != typeof window && (v = window.RTCPeerConnection), e.exports = {
            RTCPeerConnection: v,
            getUserMedia: r,
            attachMediaStream: a,
            reattachMediaStream: s,
            webrtcDetectedBrowser: d,
            webrtcDetectedVersion: c,
            webrtcMinimumVersion: u,
            webrtcTesting: g,
            webrtcUtils: l
        }
    }, function(e, t, i) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = i(5),
            r = n(o),
            a = i(9),
            s = n(a),
            d = i(0),
            c = n(d),
            u = i(1),
            l = function(e) {
                var t, i, n = (0, r.default)({});
                if (n.id = e.id, n.url = e.url, n.stream = e.stream.stream, n.elementID = e.elementID, n.audio = document.createElement("audio"), n.audio.setAttribute("id", "stream" + n.id), n.audio.setAttribute("style", "width: 100%; height: 100%; position: absolute"), n.audio.setAttribute("autoplay", "autoplay"), e.stream.local && (n.audio.volume = 0), e.stream.local && (n.audio.volume = 0), void 0 !== n.elementID ? (n.destroy = function() {
                        n.audio.pause(), n.parentNode.removeChild(n.div)
                    }, t = function() {
                        n.bar.display()
                    }, i = function() {
                        n.bar.hide()
                    }, n.div = document.createElement("div"), n.div.setAttribute("id", "player_" + n.id), n.div.setAttribute("style", "width: 100%; height: 100%; position: relative; overflow: hidden;"), document.getElementById(n.elementID).appendChild(n.div), n.container = document.getElementById(n.elementID), n.parentNode = n.div.parentNode, n.div.appendChild(n.audio), n.bar = new s.default({
                        elementID: "player_" + n.id,
                        id: n.id,
                        stream: e.stream,
                        media: n.audio,
                        options: e.options,
                        url: n.url
                    }), e.stream.local ? n.div.onmouseover = i : n.div.onmouseover = t, n.div.onmouseout = i) : (n.destroy = function() {
                        n.audio.pause(), n.parentNode.removeChild(n.audio)
                    }, document.body.appendChild(n.audio), n.parentNode = document.body), c.default.debug("Creating URL from stream " + n.stream), (0, u.isSafari)()) n.audio.srcObject = n.stream;
                else {
                    var o = window.URL || webkitURL;
                    n.stream_url = o.createObjectURL(n.stream), n.audio.src = n.stream_url
                }
                return n
            };
        t.default = l
    }, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(0),
            o = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n),
            r = function(e) {
                var t = {},
                    i = webkitRTCPeerConnection;
                t.pc_config = {
                    iceServers: []
                }, t.con = {
                    optional: [{
                        DtlsSrtpKeyAgreement: !0
                    }]
                }, e.iceServers instanceof Array ? t.pc_config.iceServers = e.iceServers : (e.stunServerUrl && (e.stunServerUrl instanceof Array ? e.stunServerUrl.map(function(e) {
                    "string" == typeof e && "" !== e && t.pc_config.iceServers.push({
                        url: e
                    })
                }) : "string" == typeof e.stunServerUrl && "" !== e.stunServerUrl && t.pc_config.iceServers.push({
                    url: e.stunServerUrl
                })), e.turnServer && (e.turnServer instanceof Array ? e.turnServer.map(function(e) {
                    "string" == typeof e.url && "" !== e.url && t.pc_config.iceServers.push({
                        username: e.username,
                        credential: e.password,
                        url: e.url
                    })
                }) : "string" == typeof e.turnServer.url && "" !== e.turnServer.url && t.pc_config.iceServers.push({
                    username: e.turnServer.username,
                    credential: e.turnServer.password,
                    url: e.turnServer.url
                }))), void 0 === e.audio && (e.audio = !0), void 0 === e.video && (e.video = !0), t.mediaConstraints = {
                    mandatory: {
                        OfferToReceiveVideo: e.video,
                        OfferToReceiveAudio: e.audio
                    }
                }, t.roapSessionId = 103, t.peerConnection = new i(t.pc_config, t.con), t.peerConnection.onicecandidate = function(e) {
                    e.candidate ? t.iceCandidateCount += 1 : (o.default.debug("PeerConnection State: " + t.peerConnection.iceGatheringState), void 0 === t.ices && (t.ices = 0), t.ices = t.ices + 1, t.ices >= 1 && t.moreIceComing && (t.moreIceComing = !1, t.markActionNeeded()))
                };
                var n = function(t) {
                    var i, n;
                    return e.minVideoBW && e.maxVideoBW && (i = t.match(/m=video.*\r\n/), n = i[0] + "b=AS:" + e.maxVideoBW + "\r\n", t = t.replace(i[0], n), o.default.debug("Set Video Bitrate - min:" + e.minVideoBW + " max:" + e.maxVideoBW)), e.maxAudioBW && (i = t.match(/m=audio.*\r\n/), n = i[0] + "b=AS:" + e.maxAudioBW + "\r\n", t = t.replace(i[0], n)), t
                };
                return t.processSignalingMessage = function(e) {
                    var i, o = JSON.parse(e);
                    t.incomingMessage = o, "new" === t.state ? "OFFER" === o.messageType ? (i = {
                        sdp: o.sdp,
                        type: "offer"
                    }, t.peerConnection.setRemoteDescription(new RTCSessionDescription(i)), t.state = "offer-received", t.markActionNeeded()) : t.error("Illegal message for this state: " + o.messageType + " in state " + t.state) : "offer-sent" === t.state ? "ANSWER" === o.messageType ? (i = {
                        sdp: o.sdp,
                        type: "answer"
                    }, i.sdp = n(i.sdp), t.peerConnection.setRemoteDescription(new RTCSessionDescription(i)), t.sendOK(), t.state = "established") : "pr-answer" === o.messageType ? (i = {
                        sdp: o.sdp,
                        type: "pr-answer"
                    }, t.peerConnection.setRemoteDescription(new RTCSessionDescription(i))) : "offer" === o.messageType ? t.error("Not written yet") : t.error("Illegal message for this state: " + o.messageType + " in state " + t.state) : "established" === t.state && ("OFFER" === o.messageType ? (i = {
                        sdp: o.sdp,
                        type: "offer"
                    }, t.peerConnection.setRemoteDescription(new RTCSessionDescription(i)), t.state = "offer-received", t.markActionNeeded()) : t.error("Illegal message for this state: " + o.messageType + " in state " + t.state))
                }, t.addStream = function(e) {
                    t.peerConnection.addStream(e), t.markActionNeeded()
                }, t.removeStream = function() {
                    t.markActionNeeded()
                }, t.close = function() {
                    t.state = "closed", t.peerConnection.close()
                }, t.markActionNeeded = function() {
                    t.actionNeeded = !0, t.doLater(function() {
                        t.onstablestate()
                    })
                }, t.doLater = function(e) {
                    window.setTimeout(e, 1)
                }, t.onstablestate = function() {
                    var e;
                    if (t.actionNeeded) {
                        if ("new" === t.state || "established" === t.state) t.peerConnection.createOffer(function(e) {
                            if (e.sdp = n(e.sdp), o.default.debug("Changed", e.sdp), e.sdp !== t.prevOffer) return t.peerConnection.setLocalDescription(e), t.state = "preparing-offer", void t.markActionNeeded();
                            o.default.debug("Not sending a new offer")
                        }, function(e) {
                            o.default.debug("peer connection create offer failed ", e)
                        }, t.mediaConstraints);
                        else if ("preparing-offer" === t.state) {
                            if (t.moreIceComing) return;
                            t.prevOffer = t.peerConnection.localDescription.sdp, t.sendMessage("OFFER", t.prevOffer), t.state = "offer-sent"
                        } else if ("offer-received" === t.state) t.peerConnection.createAnswer(function(e) {
                            if (t.peerConnection.setLocalDescription(e), t.state = "offer-received-preparing-answer", t.iceStarted) return void t.markActionNeeded();
                            var i = new Date;
                            o.default.debug(i.getTime() + ": Starting ICE in responder"), t.iceStarted = !0
                        }, function(e) {
                            o.default.debug("peer connection create answer failed ", e)
                        }, t.mediaConstraints);
                        else if ("offer-received-preparing-answer" === t.state) {
                            if (t.moreIceComing) return;
                            e = t.peerConnection.localDescription.sdp, t.sendMessage("ANSWER", e), t.state = "established"
                        } else t.error("Dazed and confused in state " + t.state + ", stopping here");
                        t.actionNeeded = !1
                    }
                }, t.sendOK = function() {
                    t.sendMessage("OK")
                }, t.sendMessage = function(e, i) {
                    var n = {};
                    n.messageType = e, n.sdp = i, "OFFER" === e ? (n.offererSessionId = t.sessionId, n.answererSessionId = t.otherSessionId, n.seq = t.sequenceNumber += 1, n.tiebreaker = Math.floor(429496723 * Math.random() + 1)) : (n.offererSessionId = t.incomingMessage.offererSessionId, n.answererSessionId = t.sessionId, n.seq = t.incomingMessage.seq), t.onsignalingmessage(JSON.stringify(n))
                }, t.error = function(e) {
                    throw "Error in RoapOnJsep: " + e
                }, t.sessionId = t.roapSessionId += 1, t.sequenceNumber = 0, t.actionNeeded = !1, t.iceStarted = !1, t.moreIceComing = !0, t.iceCandidateCount = 0, t.onsignalingmessage = e.callback, t.peerConnection.onopen = function() {
                    t.onopen && t.onopen()
                }, t.peerConnection.onaddstream = function(e) {
                    t.onaddstream && t.onaddstream(e)
                }, t.peerConnection.onremovestream = function(e) {
                    t.onremovestream && t.onremovestream(e)
                }, t.peerConnection.oniceconnectionstatechange = function(e) {
                    t.oniceconnectionstatechange && t.oniceconnectionstatechange(e.currentTarget.iceConnectionState)
                }, t.onaddstream = null, t.onremovestream = null, t.state = "new", t.markActionNeeded(), t
            };
        t.default = r
    }, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(0),
            o = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n),
            r = function(e) {
                var t = {},
                    i = RTCPeerConnection;
                t.isSubscriber = e.isSubscriber, t.pc_config = {
                    iceServers: []
                }, t.con = {
                    optional: [{
                        DtlsSrtpKeyAgreement: !0
                    }]
                }, e.iceServers instanceof Array ? t.pc_config.iceServers = e.iceServers : (e.stunServerUrl && (e.stunServerUrl instanceof Array ? e.stunServerUrl.map(function(e) {
                    "string" == typeof e && "" !== e && t.pc_config.iceServers.push({
                        url: e
                    })
                }) : "string" == typeof e.stunServerUrl && "" !== e.stunServerUrl && t.pc_config.iceServers.push({
                    url: e.stunServerUrl
                })), e.turnServer && (e.turnServer instanceof Array ? e.turnServer.map(function(e) {
                    "string" == typeof e.url && "" !== e.url && t.pc_config.iceServers.push({
                        username: e.username,
                        credential: e.password,
                        url: e.url
                    })
                }) : "string" == typeof e.turnServer.url && "" !== e.turnServer.url && t.pc_config.iceServers.push({
                    username: e.turnServer.username,
                    credential: e.turnServer.password,
                    url: e.turnServer.url
                }))), void 0 === e.audio && (e.audio = !0), void 0 === e.video && (e.video = !0), t.mediaConstraints = {
                    mandatory: {
                        OfferToReceiveVideo: e.video,
                        OfferToReceiveAudio: e.audio
                    }
                }, t.roapSessionId = 103, t.peerConnection = new i(t.pc_config, t.con), t.peerConnection.onicecandidate = function(e) {
                    e.candidate ? (0 === t.iceCandidateCount && (t.timeout = setTimeout(function() {
                        t.moreIceComing && (t.moreIceComing = !1, t.markActionNeeded())
                    }, 1e3)), t.iceCandidateCount = t.iceCandidateCount + 1) : (o.default.debug("PeerConnection State: " + t.peerConnection.iceGatheringState), clearTimeout(t.timeout), void 0 === t.ices && (t.ices = 0), t.ices = t.ices + 1, t.ices >= 1 && t.moreIceComing && (t.moreIceComing = !1, t.markActionNeeded()))
                };
                var n = function(t) {
                        return e.screen && (t = t.replace("a=x-google-flag:conference\r\n", "")), t
                    },
                    r = function(t) {
                        var i, n;
                        return e.minVideoBW && e.maxVideoBW && (i = t.match(/m=video.*\r\n/), n = i[0] + "b=AS:" + e.maxVideoBW + "\r\n", t = t.replace(i[0], n), o.default.debug("Set Video Bitrate - min:" + e.minVideoBW + " max:" + e.maxVideoBW)), e.maxAudioBW && (i = t.match(/m=audio.*\r\n/), n = i[0] + "b=AS:" + e.maxAudioBW + "\r\n", t = t.replace(i[0], n)), t
                    };
                return t.processSignalingMessage = function(e) {
                    var i, o = JSON.parse(e);
                    t.incomingMessage = o, "new" === t.state ? "OFFER" === o.messageType ? (i = {
                        sdp: o.sdp,
                        type: "offer"
                    }, t.peerConnection.setRemoteDescription(new RTCSessionDescription(i)), t.state = "offer-received", t.markActionNeeded()) : t.error("Illegal message for this state: " + o.messageType + " in state " + t.state) : "offer-sent" === t.state ? "ANSWER" === o.messageType ? (i = {
                        sdp: o.sdp,
                        type: "answer"
                    }, i.sdp = n(i.sdp), i.sdp = r(i.sdp), t.peerConnection.setRemoteDescription(new RTCSessionDescription(i)), t.sendOK(), t.state = "established") : "pr-answer" === o.messageType ? (i = {
                        sdp: o.sdp,
                        type: "pr-answer"
                    }, t.peerConnection.setRemoteDescription(new RTCSessionDescription(i))) : "offer" === o.messageType ? t.error("Not written yet") : t.error("Illegal message for this state: " + o.messageType + " in state " + t.state) : "established" === t.state && ("OFFER" === o.messageType ? (i = {
                        sdp: o.sdp,
                        type: "offer"
                    }, t.peerConnection.setRemoteDescription(new RTCSessionDescription(i)), t.state = "offer-received", t.markActionNeeded()) : t.error("Illegal message for this state: " + o.messageType + " in state " + t.state))
                }, t.getStatsRate = function(e) {
                    t.getStats(function(t) {
                        e(t)
                    })
                }, t.getStats = function(e) {
                    t.peerConnection.getStats(null, function(i) {
                        var n = [],
                            o = [],
                            r = null;
                        Object.keys(i).forEach(function(e) {
                            var t = i[e];
                            o.push(t), "ssrc" !== t.type && "VideoBwe" !== t.type || (r = t.timestamp, n.push(t))
                        }), n.push({
                            id: "time",
                            startTime: t.connectedTime,
                            timestamp: r || new Date
                        }), e(n, o)
                    })
                }, t.addStream = function(e) {
                    t.peerConnection.addStream(e), t.markActionNeeded()
                }, t.removeStream = function() {
                    t.markActionNeeded()
                }, t.close = function() {
                    t.state = "closed", t.peerConnection.close()
                }, t.markActionNeeded = function() {
                    t.actionNeeded = !0, t.doLater(function() {
                        t.onstablestate()
                    })
                }, t.doLater = function(e) {
                    window.setTimeout(e, 1)
                }, t.onstablestate = function() {
                    var e;
                    if (t.actionNeeded) {
                        if ("new" === t.state || "established" === t.state) t.peerConnection.createOffer(function(e) {
                            if (e.sdp = r(e.sdp), e.sdp !== t.prevOffer) return t.peerConnection.setLocalDescription(e), t.state = "preparing-offer", void t.markActionNeeded();
                            o.default.debug("Not sending a new offer")
                        }, function(e) {
                            o.default.debug("peer connection create offer failed ", e)
                        }, t.mediaConstraints);
                        else if ("preparing-offer" === t.state) {
                            if (t.moreIceComing) return;
                            t.prevOffer = t.peerConnection.localDescription.sdp, t.sendMessage("OFFER", t.prevOffer), t.state = "offer-sent"
                        } else if ("offer-received" === t.state) t.peerConnection.createAnswer(function(e) {
                            if (t.peerConnection.setLocalDescription(e), t.state = "offer-received-preparing-answer", t.iceStarted) return void t.markActionNeeded();
                            var i = new Date;
                            o.default.debug(i.getTime() + ": Starting ICE in responder"), t.iceStarted = !0
                        }, function(e) {
                            o.default.debug("peer connection create answer failed ", e)
                        }, t.mediaConstraints);
                        else if ("offer-received-preparing-answer" === t.state) {
                            if (t.moreIceComing) return;
                            e = t.peerConnection.localDescription.sdp, t.sendMessage("ANSWER", e), t.state = "established"
                        } else t.error("Dazed and confused in state " + t.state + ", stopping here");
                        t.actionNeeded = !1
                    }
                }, t.sendOK = function() {
                    t.sendMessage("OK")
                }, t.sendMessage = function(e, i) {
                    var n = {};
                    n.messageType = e, n.sdp = i, "OFFER" === e ? (n.offererSessionId = t.sessionId, n.answererSessionId = t.otherSessionId, n.seq = t.sequenceNumber += 1, n.tiebreaker = Math.floor(429496723 * Math.random() + 1)) : (n.offererSessionId = t.incomingMessage.offererSessionId, n.answererSessionId = t.sessionId, n.seq = t.incomingMessage.seq), t.onsignalingmessage(JSON.stringify(n))
                }, t.error = function(e) {
                    throw "Error in RoapOnJsep: " + e
                }, t.sessionId = t.roapSessionId += 1, t.sequenceNumber = 0, t.actionNeeded = !1, t.iceStarted = !1, t.moreIceComing = !0, t.iceCandidateCount = 0, t.onsignalingmessage = e.callback, t.peerConnection.ontrack = function(e) {
                    t.onaddstream && t.onaddstream(e, "ontrack")
                }, t.peerConnection.onaddstream = function(e) {
                    t.onaddstream && t.onaddstream(e, "onaddstream")
                }, t.peerConnection.onremovestream = function(e) {
                    t.onremovestream && t.onremovestream(e)
                }, t.peerConnection.oniceconnectionstatechange = function(e) {
                    "connected" === e.currentTarget.iceConnectionState && (t.connectedTime = new Date), t.oniceconnectionstatechange && t.oniceconnectionstatechange(e.currentTarget.iceConnectionState)
                }, t.onaddstream = null, t.onremovestream = null, t.state = "new", t.markActionNeeded(), t
            };
        t.default = r
    }, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(0),
            o = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n),
            r = function(e) {
                var t = {};
                RTCPeerConnection;
                t.isSubscriber = e.isSubscriber, t.pc_config = {
                    iceServers: [{
                        urls: ["stun:72.251.224.27:3478"]
                    }],
                    bundlePolicy: "max-bundle"
                }, t.con = {
                    optional: [{
                        DtlsSrtpKeyAgreement: !0
                    }]
                }, e.iceServers instanceof Array ? t.pc_config.iceServers = e.iceServers : (e.stunServerUrl && (e.stunServerUrl instanceof Array ? e.stunServerUrl.map(function(e) {
                    "string" == typeof e && "" !== e && t.pc_config.iceServers.push({
                        url: e
                    })
                }) : "string" == typeof e.stunServerUrl && "" !== e.stunServerUrl && t.pc_config.iceServers.push({
                    url: e.stunServerUrl
                })), e.turnServer && (e.turnServer instanceof Array ? e.turnServer.map(function(e) {
                    "string" == typeof e.url && "" !== e.url && t.pc_config.iceServers.push({
                        username: e.username,
                        credential: e.password,
                        url: e.url
                    })
                }) : "string" == typeof e.turnServer.url && "" !== e.turnServer.url && t.pc_config.iceServers.push({
                    username: e.turnServer.username,
                    credential: e.turnServer.password,
                    url: e.turnServer.url
                }))), void 0 === e.audio && (e.audio = !0), void 0 === e.video && (e.video = !0), t.mediaConstraints = {
                    mandatory: {
                        OfferToReceiveVideo: e.video,
                        OfferToReceiveAudio: e.audio
                    }
                }, t.roapSessionId = 103, t.peerConnection = new RTCPeerConnection({
                    iceServers: [{
                        urls: ["stun:webcs.agora.io:3478", "stun:stun.l.google.com:19302"]
                    }],
                    bundlePolicy: "max-bundle"
                }), t.peerConnection.onicecandidate = function(i) {
                    o.default.debug("PeerConnection: ", e.session_id, i), i.candidate ? (0 === t.iceCandidateCount && (t.timeout = setTimeout(function() {
                        t.moreIceComing && (t.moreIceComing = !1, t.markActionNeeded())
                    }, 1e3)), t.iceCandidateCount = t.iceCandidateCount + 1) : (o.default.debug("PeerConnection State: " + t.peerConnection.iceGatheringState), clearTimeout(t.timeout), void 0 === t.ices && (t.ices = 0), t.ices = t.ices + 1, t.ices >= 1 && t.moreIceComing && (t.moreIceComing = !1, t.markActionNeeded()))
                };
                var i = function(t) {
                        return e.screen && (t = t.replace("a=x-google-flag:conference\r\n", "")), t
                    },
                    n = function(t) {
                        var i, n;
                        return e.minVideoBW && e.maxVideoBW && (i = t.match(/m=video.*\r\n/), n = i[0] + "b=AS:" + e.maxVideoBW + "\r\n", t = t.replace(i[0], n), o.default.debug("Set Video Bitrate - min:" + e.minVideoBW + " max:" + e.maxVideoBW)), e.maxAudioBW && (i = t.match(/m=audio.*\r\n/), n = i[0] + "b=AS:" + e.maxAudioBW + "\r\n", t = t.replace(i[0], n)), t
                    };
                t.processSignalingMessage = function(e) {
                    var o, r = JSON.parse(e);
                    t.incomingMessage = r, "new" === t.state ? "OFFER" === r.messageType ? (o = {
                        sdp: r.sdp,
                        type: "offer"
                    }, t.peerConnection.setRemoteDescription(new RTCSessionDescription(o)), t.state = "offer-received", t.markActionNeeded()) : t.error("Illegal message for this state: " + r.messageType + " in state " + t.state) : "offer-sent" === t.state ? "ANSWER" === r.messageType ? (o = {
                        sdp: r.sdp,
                        type: "answer"
                    }, o.sdp = i(o.sdp), o.sdp = n(o.sdp), o.sdp = o.sdp.replace(/a=x-google-flag:conference\r\n/g, ""), t.peerConnection.setRemoteDescription(new RTCSessionDescription(o)), t.sendOK(), t.state = "established") : "pr-answer" === r.messageType ? (o = {
                        sdp: r.sdp,
                        type: "pr-answer"
                    }, t.peerConnection.setRemoteDescription(new RTCSessionDescription(o))) : "offer" === r.messageType ? t.error("Not written yet") : t.error("Illegal message for this state: " + r.messageType + " in state " + t.state) : "established" === t.state && ("OFFER" === r.messageType ? (o = {
                        sdp: r.sdp,
                        type: "offer"
                    }, t.peerConnection.setRemoteDescription(new RTCSessionDescription(o)), t.state = "offer-received", t.markActionNeeded()) : t.error("Illegal message for this state: " + r.messageType + " in state " + t.state))
                };
                var r = {
                        id: "",
                        type: "",
                        mediaType: "",
                        googCodecName: "opus",
                        aecDivergentFilterFraction: "0",
                        audioInputLevel: "0",
                        bytesSent: "0",
                        packetsSent: "0",
                        googEchoCancellationReturnLoss: "0",
                        googEchoCancellationReturnLossEnhancement: "0"
                    },
                    a = {
                        id: "",
                        type: "",
                        mediaType: "",
                        googCodecName: "h264" === e.codec ? "H264" : "VP8",
                        bytesSent: "0",
                        packetsLost: "0",
                        packetsSent: "0",
                        googAdaptationChanges: "0",
                        googAvgEncodeMs: "0",
                        googEncodeUsagePercent: "0",
                        googFirsReceived: "0",
                        googFrameHeightSent: "0",
                        googFrameHeightInput: "0",
                        googFrameRateInput: "0",
                        googFrameRateSent: "0",
                        googFrameWidthSent: "0",
                        googFrameWidthInput: "0",
                        googNacksReceived: "0",
                        googPlisReceived: "0",
                        googRtt: "0",
                        googFramesEncoded: "0"
                    },
                    s = {
                        id: "",
                        type: "",
                        mediaType: "",
                        audioOutputLevel: "0",
                        bytesReceived: "0",
                        packetsLost: "0",
                        packetsReceived: "0",
                        googAccelerateRate: "0",
                        googCurrentDelayMs: "0",
                        googDecodingCNG: "0",
                        googDecodingCTN: "0",
                        googDecodingCTSG: "0",
                        googDecodingNormal: "0",
                        googDecodingPLC: "0",
                        googDecodingPLCCNG: "0",
                        googExpandRate: "0",
                        googJitterBufferMs: "0",
                        googJitterReceived: "0",
                        googPreemptiveExpandRate: "0",
                        googPreferredJitterBufferMs: "0",
                        googSecondaryDecodedRate: "0",
                        googSpeechExpandRate: "0"
                    },
                    d = {
                        id: "",
                        type: "",
                        mediaType: "",
                        googTargetDelayMs: "0",
                        packetsLost: "0",
                        googDecodeMs: "0",
                        googMaxDecodeMs: "0",
                        googRenderDelayMs: "0",
                        googFrameWidthReceived: "0",
                        googFrameHeightReceived: "0",
                        googFrameRateReceived: "0",
                        googFrameRateDecoded: "0",
                        googFrameRateOutput: "0",
                        googFramesDecoded: "0",
                        googFrameReceived: "0",
                        googJitterBufferMs: "0",
                        googCurrentDelayMs: "0",
                        googMinPlayoutDelayMs: "0",
                        googNacksSent: "0",
                        googPlisSent: "0",
                        googFirsSent: "0",
                        bytesReceived: "0",
                        packetsReceived: "0"
                    },
                    c = {
                        id: "bweforvideo",
                        type: "VideoBwe",
                        googAvailableSendBandwidth: "0",
                        googAvailableReceiveBandwidth: "0",
                        googActualEncBitrate: "0",
                        googRetransmitBitrate: "0",
                        googTargetEncBitrate: "0",
                        googBucketDelay: "0",
                        googTransmitBitrate: "0"
                    },
                    u = 0,
                    l = 0,
                    p = 0;
                return t.getStatsRate = function(e) {
                    t.getStats(function(t) {
                        t.forEach(function(e) {
                            "outbound-rtp" === e.type && "video" === e.mediaType && e.googFramesEncoded && (e.googFrameRateSent = ((e.googFramesEncoded - u) / 3).toString(), u = e.googFramesEncoded), "inbound-rtp" === e.type && -1 != e.id.indexOf("55543") && (e.googFrameRateReceived && (e.googFrameRateReceived = ((e.googFrameReceived - p) / 3).toString(), p = e.googFrameReceived), e.googFrameRateDecoded && (e.googFrameRateDecoded = ((e.googFramesDecoded - l) / 3).toString(), l = e.googFramesDecoded))
                        }), e(t)
                    })
                }, t.getStats = function(e) {
                    var i = [];
                    t.peerConnection.getStats().then(function(n) {
                        n.forEach(function(e) {
                            i.push(e), "outbound-rtp" === e.type && "audio" === e.mediaType && (r.id = e.id, r.type = e.type, r.mediaType = e.mediaType, r.bytesSent = e.bytesSent.toString(), r.packetsSent = e.packetsSent.toString()), "outbound-rtp" === e.type && "video" === e.mediaType && (a.id = e.id, a.type = e.type, a.mediaType = e.mediaType, a.bytesSent = e.bytesSent.toString(), a.packetsSent = e.packetsSent.toString(), a.googPlisReceived = e.pliCount.toString(), a.googNacksReceived = e.nackCount.toString(), a.googFirsReceived = e.firCount.toString(), a.googFramesEncoded = e.framesEncoded.toString()), "inbound-rtp" === e.type && -1 != e.id.indexOf("44444") && (s.id = e.id, s.type = e.type, s.mediaType = "audio", s.packetsReceived = e.packetsReceived.toString(), s.bytesReceived = e.bytesReceived.toString(), s.packetsLost = e.packetsLost.toString(), s.packetsReceived = e.packetsReceived.toString(), s.googJitterReceived = e.jitter.toString()), "inbound-rtp" === e.type && -1 != e.id.indexOf("55543") && (d.id = e.id, d.type = e.type, d.mediaType = "video", d.packetsReceived = e.packetsReceived.toString(), d.bytesReceived = e.bytesReceived.toString(), d.packetsLost = e.packetsLost.toString(), d.googJitterBufferMs = e.jitter.toString(), d.googNacksSent = e.nackCount.toString(), d.googPlisSent = e.pliCount.toString(), d.googFirsSent = e.firCount.toString()), "track" === e.type && -1 != e.id.indexOf("55543") && (d.googFrameWidthReceived = e.frameWidth.toString(), d.googFrameHeightReceived = e.frameHeight.toString(), d.googFrameReceived = e.framesReceived.toString(), d.googFramesDecoded = e.framesDecoded.toString()), "track" === e.type && -1 != e.id.indexOf("44444") && (s.audioOutputLevel = e.audioLevel + "", r.audioInputLevel = e.audioLevel + ""), "candidate-pair" === e.type && (0 == e.availableIncomingBitrate ? c.googAvailableSendBandwidth = e.availableOutgoingBitrate + "" : c.googAvailableReceiveBandwidth = e.availableIncomingBitrate + "")
                        });
                        var o = [c, r, a, s, d];
                        o.push({
                            id: "time",
                            startTime: t.connectedTime,
                            timestamp: new Date
                        }), e(o, i)
                    }).catch(function(e) {
                        console.error(e)
                    })
                }, t.addStream = function(e) {
                    window.navigator.userAgent.indexOf("Safari") > -1 && -1 === navigator.userAgent.indexOf("Chrome") ? e.getTracks().forEach(function(i) {
                        return t.peerConnection.addTrack(i, e)
                    }) : t.peerConnection.addStream(e), t.markActionNeeded()
                }, t.removeStream = function() {
                    t.markActionNeeded()
                }, t.close = function() {
                    t.state = "closed", t.peerConnection.close()
                }, t.markActionNeeded = function() {
                    t.actionNeeded = !0, t.doLater(function() {
                        t.onstablestate()
                    })
                }, t.doLater = function(e) {
                    window.setTimeout(e, 1)
                }, t.onstablestate = function() {
                    var i;
                    if (t.actionNeeded) {
                        if ("new" === t.state || "established" === t.state) {
                            if (e.isSubscriber && window.navigator.userAgent.indexOf("Safari") > -1 && -1 === navigator.userAgent.indexOf("Chrome")) {
                                var r = t.peerConnection.addTransceiver("audio"),
                                    a = t.peerConnection.addTransceiver("video");
                                r.setDirection("recvonly"), a.setDirection("recvonly")
                            }
                            t.peerConnection.createOffer(t.mediaConstraints).then(function(i) {
                                if (i.sdp = n(i.sdp), e.isSubscriber || (i.sdp = i.sdp.replace(/a=extmap:4 urn:3gpp:video-orientation\r\n/g, "")), i.sdp !== t.prevOffer) return t.peerConnection.setLocalDescription(i), t.state = "preparing-offer", void t.markActionNeeded();
                                o.default.debug("Not sending a new offer")
                            }).catch(function(e) {
                                o.default.debug("peer connection create offer failed ", e)
                            })
                        } else if ("preparing-offer" === t.state) {
                            if (t.moreIceComing) return;
                            t.prevOffer = t.peerConnection.localDescription.sdp, t.sendMessage("OFFER", t.prevOffer), t.state = "offer-sent"
                        } else if ("offer-received" === t.state) t.peerConnection.createAnswer(function(e) {
                            if (t.peerConnection.setLocalDescription(e), t.state = "offer-received-preparing-answer", t.iceStarted) return void t.markActionNeeded();
                            var i = new Date;
                            o.default.debug(i.getTime() + ": Starting ICE in responder"), t.iceStarted = !0
                        }, function(e) {
                            o.default.debug("peer connection create answer failed ", e)
                        }, t.mediaConstraints);
                        else if ("offer-received-preparing-answer" === t.state) {
                            if (t.moreIceComing) return;
                            i = t.peerConnection.localDescription.sdp, t.sendMessage("ANSWER", i), t.state = "established"
                        } else t.error("Dazed and confused in state " + t.state + ", stopping here");
                        t.actionNeeded = !1
                    }
                }, t.sendOK = function() {
                    t.sendMessage("OK")
                }, t.sendMessage = function(e, i) {
                    var n = {};
                    n.messageType = e, n.sdp = i, "OFFER" === e ? (n.offererSessionId = t.sessionId, n.answererSessionId = t.otherSessionId, n.seq = t.sequenceNumber += 1, n.tiebreaker = Math.floor(429496723 * Math.random() + 1)) : (n.offererSessionId = t.incomingMessage.offererSessionId, n.answererSessionId = t.sessionId, n.seq = t.incomingMessage.seq), t.onsignalingmessage(JSON.stringify(n))
                }, t.error = function(e) {
                    throw "Error in RoapOnJsep: " + e
                }, t.sessionId = t.roapSessionId += 1, t.sequenceNumber = 0, t.actionNeeded = !1, t.iceStarted = !1, t.moreIceComing = !0, t.iceCandidateCount = 0, t.onsignalingmessage = e.callback, t.peerConnection.ontrack = function(e) {
                    t.onaddstream && t.onaddstream(e, "ontrack")
                }, t.peerConnection.onremovestream = function(e) {
                    t.onremovestream && t.onremovestream(e)
                }, t.peerConnection.oniceconnectionstatechange = function(e) {
                    "connected" === e.currentTarget.iceConnectionState && (t.connectedTime = new Date), t.oniceconnectionstatechange && t.oniceconnectionstatechange(e.currentTarget.iceConnectionState)
                }, t.onaddstream = null, t.onremovestream = null, t.state = "new", t.markActionNeeded(), t
            };
        t.default = r
    }, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function() {
            var e = {};
            return e.addStream = function() {}, e
        };
        t.default = n
    }, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(0),
            o = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n),
            r = function(e) {
                var t = {},
                    i = (mozRTCPeerConnection, mozRTCSessionDescription),
                    n = !1;
                t.isSubscriber = e.isSubscriber, t.pc_config = {
                    iceServers: []
                }, e.iceServers instanceof Array ? e.iceServers.map(function(e) {
                    0 === e.url.indexOf("stun:") && t.pc_config.iceServers.push({
                        url: e.url
                    })
                }) : e.stunServerUrl && (e.stunServerUrl instanceof Array ? e.stunServerUrl.map(function(e) {
                    "string" == typeof e && "" !== e && t.pc_config.iceServers.push({
                        url: e
                    })
                }) : "string" == typeof e.stunServerUrl && "" !== e.stunServerUrl && t.pc_config.iceServers.push({
                    url: e.stunServerUrl
                })), void 0 === e.audio && (e.audio = !0), void 0 === e.video && (e.video = !0), t.mediaConstraints = {
                    offerToReceiveAudio: e.audio,
                    offerToReceiveVideo: e.video,
                    mozDontOfferDataChannel: !0
                }, t.roapSessionId = 103, t.peerConnection = new RTCPeerConnection(t.pc_config), t.peerConnection.onicecandidate = function(e) {
                    e.candidate ? t.iceCandidateCount += 1 : (o.default.debug("PeerConnection State: " + t.peerConnection.iceGatheringState), void 0 === t.ices && (t.ices = 0), t.ices = t.ices + 1, t.ices >= 1 && t.moreIceComing && (t.moreIceComing = !1, t.markActionNeeded()))
                }, t.processSignalingMessage = function(e) {
                    var n, r = JSON.parse(e);
                    t.incomingMessage = r, "new" === t.state ? "OFFER" === r.messageType ? (r.sdp = u(r.sdp), n = {
                        sdp: r.sdp,
                        type: "offer"
                    }, t.peerConnection.setRemoteDescription(new i(n), function() {
                        o.default.debug("setRemoteDescription succeeded")
                    }, function(e) {
                        o.default.info("setRemoteDescription failed: " + e.name)
                    }), t.state = "offer-received", t.markActionNeeded()) : t.error("Illegal message for this state: " + r.messageType + " in state " + t.state) : "offer-sent" === t.state ? "ANSWER" === r.messageType ? (r.sdp = u(r.sdp), r.sdp = r.sdp.replace(/ generation 0/g, ""), r.sdp = r.sdp.replace(/ udp /g, " UDP "), r.sdp = r.sdp.replace(/a=group:BUNDLE audio video/, "a=group:BUNDLE sdparta_0 sdparta_1"), r.sdp = r.sdp.replace(/a=mid:audio/, "a=mid:sdparta_0"), r.sdp = r.sdp.replace(/a=mid:video/, "a=mid:sdparta_1"), n = {
                        sdp: r.sdp,
                        type: "answer"
                    }, t.peerConnection.setRemoteDescription(new i(n), function() {
                        o.default.debug("setRemoteDescription succeeded")
                    }, function(e) {
                        o.default.info("setRemoteDescription failed: " + e)
                    }), t.sendOK(), t.state = "established") : "pr-answer" === r.messageType ? (n = {
                        sdp: r.sdp,
                        type: "pr-answer"
                    }, t.peerConnection.setRemoteDescription(new i(n), function() {
                        o.default.debug("setRemoteDescription succeeded")
                    }, function(e) {
                        o.default.info("setRemoteDescription failed: " + e.name)
                    })) : "offer" === r.messageType ? t.error("Not written yet") : t.error("Illegal message for this state: " + r.messageType + " in state " + t.state) : "established" === t.state && ("OFFER" === r.messageType ? (n = {
                        sdp: r.sdp,
                        type: "offer"
                    }, t.peerConnection.setRemoteDescription(new i(n), function() {
                        o.default.debug("setRemoteDescription succeeded")
                    }, function(e) {
                        o.default.info("setRemoteDescription failed: " + e.name)
                    }), t.state = "offer-received", t.markActionNeeded()) : t.error("Illegal message for this state: " + r.messageType + " in state " + t.state))
                };
                var r = {
                        id: "",
                        type: "",
                        mediaType: "opus",
                        googCodecName: "opus",
                        aecDivergentFilterFraction: "0",
                        audioInputLevel: "0",
                        bytesSent: "0",
                        packetsSent: "0",
                        googEchoCancellationReturnLoss: "0",
                        googEchoCancellationReturnLossEnhancement: "0"
                    },
                    a = {
                        id: "",
                        type: "",
                        mediaType: "",
                        googCodecName: "h264" === e.codec ? "H264" : "VP8",
                        bytesSent: "0",
                        packetsLost: "0",
                        packetsSent: "0",
                        googAdaptationChanges: "0",
                        googAvgEncodeMs: "0",
                        googEncodeUsagePercent: "0",
                        googFirsReceived: "0",
                        googFrameHeightSent: "0",
                        googFrameHeightInput: "0",
                        googFrameRateInput: "0",
                        googFrameRateSent: "0",
                        googFrameWidthSent: "0",
                        googFrameWidthInput: "0",
                        googNacksReceived: "0",
                        googPlisReceived: "0",
                        googRtt: "0"
                    },
                    s = {
                        id: "",
                        type: "",
                        mediaType: "",
                        audioOutputLevel: "0",
                        bytesReceived: "0",
                        packetsLost: "0",
                        packetsReceived: "0",
                        googAccelerateRate: "0",
                        googCurrentDelayMs: "0",
                        googDecodingCNG: "0",
                        googDecodingCTN: "0",
                        googDecodingCTSG: "0",
                        googDecodingNormal: "0",
                        googDecodingPLC: "0",
                        googDecodingPLCCNG: "0",
                        googExpandRate: "0",
                        googJitterBufferMs: "0",
                        googJitterReceived: "0",
                        googPreemptiveExpandRate: "0",
                        googPreferredJitterBufferMs: "0",
                        googSecondaryDecodedRate: "0",
                        googSpeechExpandRate: "0"
                    },
                    d = {
                        id: "",
                        type: "",
                        mediaType: "",
                        googTargetDelayMs: "0",
                        packetsLost: "0",
                        googDecodeMs: "0",
                        googMaxDecodeMs: "0",
                        googRenderDelayMs: "0",
                        googFrameWidthReceived: "0",
                        googFrameHeightReceived: "0",
                        googFrameRateReceived: "0",
                        googFrameRateDecoded: "0",
                        googFrameRateOutput: "0",
                        googJitterBufferMs: "0",
                        googCurrentDelayMs: "0",
                        googMinPlayoutDelayMs: "0",
                        googNacksSent: "0",
                        googPlisSent: "0",
                        googFirsSent: "0",
                        bytesReceived: "0",
                        packetsReceived: "0",
                        googFramesDecoded: "0"
                    },
                    c = 0;
                t.getStatsRate = function(e) {
                    t.getStats(function(t) {
                        t.forEach(function(e) {
                            "inboundrtp" === e.type && "video" === e.mediaType && e.googFrameRateDecoded && (e.googFrameRateDecoded = ((e.googFramesDecoded - c) / 3).toString(), c = e.googFramesDecoded)
                        }), e(t)
                    })
                }, t.getStats = function(e) {
                    t.peerConnection.getStats().then(function(i) {
                        var n = [];
                        Object.keys(i).forEach(function(e) {
                            var t = i[e];
                            n.push(t), "outboundrtp" === t.type && "video" === t.mediaType && (a.id = t.id, a.type = t.type, a.mediaType = t.mediaType, a.bytesSent = t.bytesSent.toString(), a.packetsSent = t.packetsSent.toString(), a.googPlisReceived = t.pliCount.toString(), a.googNacksReceived = t.nackCount.toString(), a.googFirsReceived = t.firCount.toString(), a.googFrameRateSent = t.framerateMean.toString()), "outboundrtp" === t.type && "audio" === t.mediaType && (r.id = t.id, r.type = t.type, r.mediaType = t.mediaType, r.bytesSent = t.bytesSent.toString(), r.packetsSent = t.packetsSent.toString()), "inboundrtp" !== t.type || "audio" !== t.mediaType || t.isRemote || (s.id = t.id, s.type = t.type, s.mediaType = t.mediaType, s.bytesReceived = t.bytesReceived.toString(), s.packetsLost = t.packetsLost.toString(), s.packetsReceived = t.packetsReceived.toString(), s.googJitterReceived = t.jitter.toString()), "inboundrtp" !== t.type || "video" !== t.mediaType || t.isRemote || (d.id = t.id, d.type = t.type, d.mediaType = t.mediaType, d.bytesReceived = t.bytesReceived.toString(), d.googFrameRateReceived = t.framerateMean.toString(), d.googFramesDecoded = t.framesDecoded.toString(), d.packetsLost = t.packetsLost.toString(), d.packetsReceived = t.packetsReceived.toString(), d.googJitterBufferMs = t.jitter.toString(), d.googNacksSent = t.nackCount.toString(), d.googPlisSent = t.pliCount.toString(), d.googFirsSent = t.firCount.toString()), -1 !== t.id.indexOf("outbound_rtcp_video") && (a.packetsLost = t.packetsLost.toString())
                        });
                        var o = [a, r, s, d];
                        o.push({
                            id: "time",
                            startTime: t.connectedTime,
                            timestamp: new Date
                        }), e(o, n)
                    }, function(e) {
                        o.default.error(e)
                    })
                }, t.addStream = function(e) {
                    n = !0, t.peerConnection.addStream(e), t.markActionNeeded()
                }, t.removeStream = function() {
                    t.markActionNeeded()
                }, t.close = function() {
                    t.state = "closed", t.peerConnection.close()
                }, t.markActionNeeded = function() {
                    t.actionNeeded = !0, t.doLater(function() {
                        t.onstablestate()
                    })
                }, t.doLater = function(e) {
                    window.setTimeout(e, 1)
                }, t.onstablestate = function() {
                    if (t.actionNeeded) {
                        if ("new" === t.state || "established" === t.state) {
                            n && (t.mediaConstraints = void 0),
                                function() {
                                    t.peerConnection.createOffer(function(e) {
                                        if (e.sdp = u(e.sdp), e.sdp = e.sdp.replace(/a=extmap:1 http:\/\/www.webrtc.org\/experiments\/rtp-hdrext\/abs-send-time/, "a=extmap:3 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time"), e.sdp !== t.prevOffer) return t.peerConnection.setLocalDescription(e), t.state = "preparing-offer", void t.markActionNeeded();
                                        o.default.debug("Not sending a new offer")
                                    }, function(e) {
                                        o.default.debug("Ups! create offer failed ", e)
                                    }, t.mediaConstraints)
                                }()
                        } else if ("preparing-offer" === t.state) {
                            if (t.moreIceComing) return;
                            t.prevOffer = t.peerConnection.localDescription.sdp, t.sendMessage("OFFER", t.prevOffer), t.state = "offer-sent"
                        } else if ("offer-received" === t.state) t.peerConnection.createAnswer(function(e) {
                            if (t.peerConnection.setLocalDescription(e), t.state = "offer-received-preparing-answer", t.iceStarted) return void t.markActionNeeded();
                            var i = new Date;
                            o.default.debug(i.getTime() + ": Starting ICE in responder"), t.iceStarted = !0
                        }, function() {
                            o.default.debug("Ups! Something went wrong")
                        });
                        else if ("offer-received-preparing-answer" === t.state) {
                            if (t.moreIceComing) return;
                            var e = t.peerConnection.localDescription.sdp;
                            t.sendMessage("ANSWER", e), t.state = "established"
                        } else t.error("Dazed and confused in state " + t.state + ", stopping here");
                        t.actionNeeded = !1
                    }
                }, t.sendOK = function() {
                    t.sendMessage("OK")
                }, t.sendMessage = function(e, i) {
                    var n = {};
                    n.messageType = e, n.sdp = i, "OFFER" === e ? (n.offererSessionId = t.sessionId, n.answererSessionId = t.otherSessionId, n.seq = t.sequenceNumber += 1, n.tiebreaker = Math.floor(429496723 * Math.random() + 1)) : (n.offererSessionId = t.incomingMessage.offererSessionId, n.answererSessionId = t.sessionId, n.seq = t.incomingMessage.seq), t.onsignalingmessage(JSON.stringify(n))
                }, t.error = function(e) {
                    throw "Error in RoapOnJsep: " + e
                }, t.sessionId = t.roapSessionId += 1, t.sequenceNumber = 0, t.actionNeeded = !1, t.iceStarted = !1, t.moreIceComing = !0, t.iceCandidateCount = 0, t.onsignalingmessage = e.callback, t.peerConnection.ontrack = function(e) {
                    t.onaddstream && t.onaddstream(e, "ontrack")
                }, t.peerConnection.onremovestream = function(e) {
                    t.onremovestream && t.onremovestream(e)
                }, t.peerConnection.oniceconnectionstatechange = function(e) {
                    "connected" === e.currentTarget.iceConnectionState && (t.connectedTime = new Date), t.oniceconnectionstatechange && t.oniceconnectionstatechange(e.currentTarget.iceConnectionState)
                };
                var u = function(t) {
                    if (e.video && e.maxVideoBW) {
                        var i = t.match(/m=video.*\r\n/);
                        if (null == i && (i = t.match(/m=video.*\n/)), i && i.length > 0) {
                            var n = i[0] + "b=TIAS:" + 1e3 * e.maxVideoBW + "\r\n";
                            t = t.replace(i[0], n)
                        }
                    }
                    if (e.audio && e.maxAudioBW) {
                        var i = t.match(/m=audio.*\r\n/);
                        if (null == i && (i = t.match(/m=audio.*\n/)), i && i.length > 0) {
                            var n = i[0] + "b=TIAS:" + 1e3 * e.maxAudioBW + "\r\n";
                            t = t.replace(i[0], n)
                        }
                    }
                    return t
                };
                return t.onaddstream = null, t.onremovestream = null, t.state = "new", t.markActionNeeded(), t
            };
        t.default = r
    }, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o, r, a = {
                INIT: "i",
                JOIN: "j",
                GET_MEDIA: "m",
                PUBLISH: "p",
                SUBSCRIBE: "s"
            },
            s = [],
            d = function(e) {
                e.n === a.INIT && (o = e.ver, r = e.appid, delete e.ver, delete e.appid, 0 === s.length && (n = null)), s.push(e), (!1 === e.succ || e.n === a.PUBLISH || e.n === a.SUBSCRIBE || s.length >= 10) && c()
            },
            c = function() {
                var e = (new Date).getTime(),
                    t = {
                        lts: s[0].lts,
                        elps: e - s[0].lts,
                        events: s,
                        succ: s[s.length - 1].succ,
                        appid: r,
                        ver: o,
                        brwsr: navigator.userAgent
                    };
                n && (t.prev_e = n);
                for (var i = {
                        report: t,
                        sent_ts: Math.round(e / 1e3)
                    }, a = "https:" === document.location.protocol ? "https://" : "http://", d = "https:" === document.location.protocol ? 6443 : 6080, c = 0; c < 1; c++) {
                    var l = a + "webcollector.agora.io:" + d + "/events/sequence";
                    ! function(e, t, i, n) {
                        var o = new XMLHttpRequest;
                        o.open("POST", e, !0), o.setRequestHeader("Content-type", "application/json; charset=utf-8"), o.onload = function() {
                            i(o.responseText)
                        }, o.onerror = function() {
                            n(o)
                        }, o.send(JSON.stringify(t))
                    }(l, i, function(e) {}, function(e) {})
                }
                u()
            },
            u = function() {
                n = s[s.length - 1], s = []
            };
        t.onEvent = d, t.EVENTS = a
    }, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function(e) {
                var t = {
                    audioSendBytes: "0",
                    audioSendPackets: "0",
                    videoSendBytes: "0",
                    videoSendPackets: "0",
                    videoSendPacketsLost: "0",
                    videoSendFrameRate: "0",
                    videoSendBandwidth: "0",
                    videoSendResolutionWidth: "0",
                    videoSendResolutionHeight: "0",
                    audioCodecName: "",
                    videoCodecName: "",
                    timestamp: "",
                    startTime: "",
                    duration: "0"
                };
                return e.forEach(function(e) {
                    "VideoBwe" === e.type ? t.videoSendBandwidth = e.googAvailableSendBandwidth : -1 !== e.id.indexOf("send") || -1 !== e.id.indexOf("outbound_rtp") || -1 !== e.id.indexOf("OutboundRTP") ? "audio" === e.mediaType ? (t.audioSendBytes = e.bytesSent, t.audioSendPackets = e.packetsSent, t.audioCodecName = e.googCodecName) : (t.videoSendBytes = e.bytesSent, t.videoSendPackets = e.packetsSent, t.videoSendPacketsLost = e.packetsLost, t.videoSendFrameRate = e.googFrameRateSent, t.videoSendResolutionWidth = e.googFrameWidthSent, t.videoSendResolutionHeight = e.googFrameHeightSent, t.videoCodecName = e.googCodecName) : "time" === e.id && (t.timestamp = e.timestamp, t.startTime = e.startTime)
                }), t.timestamp instanceof Date && t.startTime instanceof Date && (t.duration = Math.floor((t.timestamp.getTime() - t.startTime.getTime()) / 1e3) + ""), t
            },
            o = function(e) {
                var t = {
                    audioReceiveBytes: "0",
                    audioReceivePackets: "0",
                    audioReceivePacketsLost: "0",
                    videoReceiveBytes: "0",
                    videoReceivePackets: "0",
                    videoReceivePacketsLost: "0",
                    videoReceiveFrameRate: "0",
                    videoReceiveDecodeFrameRate: "0",
                    videoReceiveBandwidth: "0",
                    videoReceivedResolutionWidth: "0",
                    videoReceivedResolutionHeight: "0",
                    timestamp: "",
                    startTime: "",
                    duration: "0"
                };
                return e.forEach(function(e) {
                    "VideoBwe" === e.type ? t.videoReceiveBandwidth = e.googAvailableReceiveBandwidth : -1 !== e.id.indexOf("recv") || -1 !== e.id.indexOf("inbound_rtp") || -1 !== e.id.indexOf("InboundRTP") ? "audio" === e.mediaType ? (t.audioReceiveBytes = e.bytesReceived, t.audioReceivePackets = e.packetsReceived, t.audioReceivePacketsLost = e.packetsLost) : (t.videoReceiveBytes = e.bytesReceived, t.videoReceivePacketsLost = e.packetsLost, t.videoReceivePackets = e.packetsReceived, t.videoReceiveFrameRate = e.googFrameRateReceived, t.videoReceiveDecodeFrameRate = e.googFrameRateDecoded, t.videoReceivedResolutionWidth = e.googFrameWidthReceived, t.videoReceivedResolutionHeight = e.googFrameHeightReceived) : "time" === e.id && (t.timestamp = e.timestamp, t.startTime = e.startTime)
                }), t.timestamp instanceof Date && t.startTime instanceof Date && (t.duration = Math.floor((t.timestamp.getTime() - t.startTime.getTime()) / 1e3) + ""), t
            };
        t.publishStatsFilter = n, t.subscribeStatsFilter = o
    }, function(e, t, i) {
        function n(e, t, i) {
            var n = t && i || 0;
            "string" == typeof e && (t = "binary" == e ? new Array(16) : null, e = null), e = e || {};
            var a = e.random || (e.rng || o)();
            if (a[6] = 15 & a[6] | 64, a[8] = 63 & a[8] | 128, t)
                for (var s = 0; s < 16; ++s) t[n + s] = a[s];
            return t || r(a)
        }
        var o = i(30),
            r = i(32);
        e.exports = n
    }, function(e, t, i) {
        (function(t) {
            var i, n = t.crypto || t.msCrypto;
            if (n && n.getRandomValues) {
                var o = new Uint8Array(16);
                i = function() {
                    return n.getRandomValues(o), o
                }
            }
            if (!i) {
                var r = new Array(16);
                i = function() {
                    for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), r[t] = e >>> ((3 & t) << 3) & 255;
                    return r
                }
            }
            e.exports = i
        }).call(t, i(31))
    }, function(e, t) {
        var i;
        i = function() {
            return this
        }();
        try {
            i = i || Function("return this")() || (0, eval)("this")
        } catch (e) {
            "object" == typeof window && (i = window)
        }
        e.exports = i
    }, function(e, t) {
        function i(e, t) {
            var i = t || 0,
                o = n;
            return o[e[i++]] + o[e[i++]] + o[e[i++]] + o[e[i++]] + "-" + o[e[i++]] + o[e[i++]] + "-" + o[e[i++]] + o[e[i++]] + "-" + o[e[i++]] + o[e[i++]] + "-" + o[e[i++]] + o[e[i++]] + o[e[i++]] + o[e[i++]] + o[e[i++]] + o[e[i++]]
        }
        for (var n = [], o = 0; o < 256; ++o) n[o] = (o + 256).toString(16).substr(1);
        e.exports = i
    }, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(34),
            o = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n),
            r = i(2),
            a = function(e, t) {
                var i = {};
                return i.connect = function() {
                    t.host = e, i.signal = (0, o.default)(t), i.on = i.signal.on, i.dispatchEvent = i.signal.dispatchEvent, i.signal.on("onopen", function(e) {
                        i.signal.onEvent = function(e) {
                            i.dispatchEvent((0, r.MediaEvent)({
                                type: e.event,
                                msg: e
                            }))
                        }, i.dispatchEvent((0, r.MediaEvent)({
                            type: "connect",
                            msg: e
                        }))
                    }), i.signal.on("onError", function(e) {
                        var t = e.msg;
                        onError(t.code, "error")
                    })
                }, i.disconnect = function() {
                    i.signal.disconnect()
                }, i.close = function() {
                    i.signal.close()
                }, i.getURL = function() {
                    return i.signal.getURL()
                }, i.reconnect = function(e) {
                    i.signal.creatConnection(e)
                }, i.emitSimpleMessage = function(e, t) {
                    i.signal.sendSignalCommand(e, t)
                }, i.connect(), i
            };
        t.default = a
    }, function(e, t, i) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = i(2),
            r = i(11),
            a = n(r),
            s = i(0),
            d = n(s),
            c = i(6),
            u = function(e) {
                var t = (0, o.EventDispatcher)(e);
                return t.needReconnect = !0, t.isTimeout = !1, t.isInit = !0, t.hostIndex = 0, t.requestID = 0, e.host instanceof Array ? t.host = e.host : t.host = [e.host], t.Reconnection = function(e) {
                    t.host = e || t.host, t.hostIndex = 0, t.creatConnection()
                }, t.getURL = function() {
                    return t.connection.url
                }, t.creatConnection = function() {
                    if (t.hostIndex >= t.host.length) return t.hostIndex = 0, void t.dispatchEvent((0, o.MediaEvent)({
                        type: "reconnect"
                    }));
                    d.default.debug("start connect:" + t.host[t.hostIndex]), t.lts = (new Date).getTime(), t.connection = new WebSocket("wss://" + t.host[t.hostIndex++]), t.connection.onopen = function(e) {
                        d.default.debug("websockect opened"), t.isTimeout = !1, t.isInit = !1, clearTimeout(t.timeoutCheck), t.dispatchEvent((0, o.MediaEvent)({
                            type: "onopen",
                            event: e,
                            socket: t
                        }))
                    }, t.connection.onmessage = function(e) {
                        var i = JSON.parse(e.data);
                        i.hasOwnProperty("_id") ? t.dispatchEvent((0, o.MediaEvent)({
                            type: i._id,
                            msg: i
                        })) : i.hasOwnProperty("_type") && t.dispatchSocketEvent((0, o.MediaEvent)({
                            type: i._type,
                            msg: i.message
                        }))
                    }, t.connection.onclose = function(i) {
                        t.needReconnect ? t.isTimeout || t.isInit ? (d.default.debug("websockect connect timeout"), c.report.joinGateway(e.sid, {
                            lts: t.lts,
                            succ: !1,
                            ec: "timeout",
                            addr: t.connection.url
                        }), t.creatConnection()) : t.dispatchEvent((0, o.MediaEvent)({
                            type: "disconnect",
                            event: i
                        })) : (d.default.debug("websockect closeed"), (0, a.default)(e.onFailure, i), clearTimeout(t.timeoutCheck), t.dispatchEvent((0, o.MediaEvent)({
                            type: "close",
                            event: i
                        })), t.connection.onopen = void 0, t.connection.onclose = void 0, t.connection.onerror = void 0, t.connection.onmessage = void 0, t.connection = void 0)
                    }, t.connection.onerror = function(e) {};
                    setTimeout(function() {
                        t.connection && t.connection.readyState != WebSocket.OPEN && (t.isTimeout = !0, t.connection.close())
                    }, 5e3)
                }, t.creatConnection(), t.sendMessage = function(e, i) {
                    t.connection && t.connection.readyState == WebSocket.OPEN ? t.connection.send(JSON.stringify(e)) : i({
                        error: "Gateway not connected"
                    })
                }, t.disconnect = function() {
                    t.needReconnect = !0, t.connection.close()
                }, t.close = function() {
                    t.needReconnect = !1, t.connection.close()
                }, t.sendSignalCommand = function(e, i) {
                    e._id = "_request_" + t.requestID, t.requestID += 1, "publish_stats" !== e._type && "subscribe_stats" !== e._type && "publish_stats_low" !== e._type && t.on(e._id, function(n) {
                        i && i(n.msg._result, n.msg.message), delete t.dispatcher.eventListeners[e._id]
                    }), t.sendMessage(e, function(e) {
                        e.reason = "NOT_CONNECTED", i && i(e.reason, e)
                    })
                }, t
            };
        t.default = u
    }, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.simMap = void 0;
        var n = i(1),
            o = function(e) {
                var t;
                switch (e) {
                    case "120p":
                    case "120p_1":
                        t = ["120p_1", "120p_1", "120p_1"];
                        break;
                    case "120p_3":
                        t = ["120p_3", "120p_3", "120p_3"];
                        break;
                    case "180p":
                    case "180p_1":
                        t = ["90p_1", "90p_1", "180p_1"];
                        break;
                    case "180p_3":
                        t = ["120p_3", "120p_3", "180p_3"];
                        break;
                    case "180p_4":
                        t = ["120p_1", "120p_1", "180p_4"];
                        break;
                    case "240p":
                    case "240p_1":
                        t = ["120p_1", "120p_1", "240p_1"];
                        break;
                    case "240p_3":
                        t = ["120p_3", "120p_3", "240p_3"];
                        break;
                    case "240p_4":
                        t = ["120p_4", "120p_4", "240p_4"];
                        break;
                    case "360p":
                    case "360p_1":
                    case "360p_4":
                    case "360p_9":
                    case "360p_10":
                    case "360p_11":
                        t = ["90p_1", "90p_1", "360p_1"];
                        break;
                    case "360p_3":
                    case "360p_6":
                        t = ["120p_3", "120p_3", "360p_3"];
                        break;
                    case "360p_7":
                    case "360p_8":
                        t = ["120p_1", "120p_1", "360p_7"];
                        break;
                    case "480p":
                    case "480p_1":
                    case "480p_2":
                    case "480p_4":
                    case "480p_10":
                        t = ["120p_1", "120p_1", "480p_1"];
                        break;
                    case "480p_3":
                    case "480p_6":
                        t = ["120p_3", "120p_3", "480p_3"];
                        break;
                    case "480p_8":
                    case "480p_9":
                        t = ["120p_4", "120p_4", "480p_8"];
                        break;
                    case "720p":
                    case "720p_1":
                    case "720p_2":
                    case "720p_3":
                        t = ["90p_1", "90p_1", "720p_1"];
                        break;
                    case "720p_5":
                    case "720p_6":
                        t = ["120p_1", "120p_1", "720p_5"];
                        break;
                    case "1080p":
                    case "1080p_1":
                    case "1080p_2":
                    case "1080p_3":
                    case "1080p_5":
                        t = ["90p_1", "90p_1", "1080p_1"];
                        break;
                    case "1440p":
                    case "1440p_1":
                    case "1440p_2":
                        t = ["90p_1", "90p_1", "1440p_1"];
                        break;
                    case "4k":
                    case "4k_1":
                    case "4k_3":
                        t = ["90p_1", "90p_1", "4k_1"];
                        break;
                    default:
                        t = ["120p_1", "120p_1", "360p_7"]
                }
                return (0, n.isFireFox)() ? [t[1], 30, 100] : (0, n.isSafari)() ? [t[2], 15, 100] : [t[0], 15, 100]
            };
        t.simMap = o
    }, , , function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Logger = t.checkSystemRequirements = t.getDevices = t.createStream = t.createClient = t.LiveTranscoding = t.TranscodingUser = t.VIDEO_CODEC_PROFILE_HIGH = t.VIDEO_CODEC_PROFILE_MAIN = t.VIDEO_CODEC_PROFILE_BASELINE = t.AUDIO_SAMPLE_RATE_48000 = t.AUDIO_SAMPLE_RATE_44100 = t.AUDIO_SAMPLE_RATE_32000 = void 0;
        var n = i(15),
            o = i(7),
            r = i(3),
            a = i(0),
            s = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(a);
        t.AUDIO_SAMPLE_RATE_32000 = n.AUDIO_SAMPLE_RATE_32000, t.AUDIO_SAMPLE_RATE_44100 = n.AUDIO_SAMPLE_RATE_44100, t.AUDIO_SAMPLE_RATE_48000 = n.AUDIO_SAMPLE_RATE_48000, t.VIDEO_CODEC_PROFILE_BASELINE = n.VIDEO_CODEC_PROFILE_BASELINE, t.VIDEO_CODEC_PROFILE_MAIN = n.VIDEO_CODEC_PROFILE_MAIN, t.VIDEO_CODEC_PROFILE_HIGH = n.VIDEO_CODEC_PROFILE_HIGH, t.TranscodingUser = n.TranscodingUser, t.LiveTranscoding = n.LiveTranscoding, t.createClient = n.createClient, t.createStream = o.createStream, t.getDevices = o.getDevices, t.checkSystemRequirements = r.checkSystemRequirements, t.Logger = s.default
    }])
});



