!function(){"use strict";var t="https://w.chatlio.com/w.chatlio-widget.js",e=function(t,e){var r=document.createElement("script");r.setAttribute("type","text/javascript"),r.setAttribute("src",t),r.setAttribute("data-loader-version","459dc1d-1489104113585"),r.async=!0,r.id="chatlio-widget-embed";for(var a in e)r.setAttribute(a,e[a]);(document.getElementsByTagName("head")[0]||document.documentElement).appendChild(r)},r=function(t){for(var e=document.getElementsByTagName("script"),r=0;r<e.length;r++){var a=e[r].src;if(a&&a.indexOf(t)>=0)return e[r]}},a="currentScript"in document?document.currentScript:r(t);if(!a)return void console.warn("No Chatlio script node found. Contact support at support@chatlio.com!");for(var c={},i=0;i<a.attributes.length;i++){var o=a.attributes[i];0===o.name.indexOf("data-")&&(c[o.name]=o.value)}var n="v4",d="https://"+n+"-w.chatlio.com/w.chatlio-widget.js?loader-version=459dc1d-1489104113585";"v"===n.charAt(0)&&(d="https://w.chatlio.com/"+n+"/w.chatlio-widget.js?loader-version=459dc1d-1489104113585"),e(d,c)}();