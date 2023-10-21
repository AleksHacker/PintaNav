(function(){"use strict";var e={4657:function(e,t,n){var o=n(9242),r=n(3396),a=n(7139),i=n(4870),s=n(2483),l=n(7265);const c={class:"bg-slate-50 justify-center font-[Raleway] dark:bg-stone-950 w-screen h-screen flex flex-col"},u=(0,r._)("p",{class:"text-slate-900 dark:text-white select-none text-3xl fixed top-3 text-center self-center"},"Pinta Nav",-1),d=(0,r._)("img",{class:"pointer-events-none select-none w-32 self-center top-32 absolute object-cover",src:"https://i.gifer.com/XOsX.gif"},null,-1);var f={__name:"HomeView",setup(e){return(e,t)=>((0,r.wg)(),(0,r.iD)("div",c,[u,d,(0,r.Wm)(l.Z,{coords:[4.6098834,-90.5075175]})]))}};const v=f;var p=v;const h=[{path:"/",name:"home",component:p},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,833))},{path:"/inMap",name:"map",component:()=>n.e(443).then(n.bind(n,4354))}],g=(0,s.p7)({history:(0,s.PO)("/"),routes:h});var w=g;const m={class:"fixed bottom-0 pb-8 pt-4 w-screen grid grid-cols-3 items-center place-items-center justify-center bg-blue-600"},b=(0,r._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"",class:"bi bi-cursor self-center svshd fill-white",viewBox:"0 0 16 16"},[(0,r._)("path",{d:"M5.5 4.002h2.962C10.045 4.002 11 5.104 11 6.586c0 1.494-.967 2.578-2.55 2.578H6.784V12H5.5V4.002Zm2.77 4.072c.893 0 1.419-.545 1.419-1.488s-.526-1.482-1.42-1.482H6.778v2.97H8.27Z"}),(0,r._)("path",{d:"M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2Z"})],-1),k=(0,r._)("path",{d:"M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103zM2.25 8.184l3.897 1.67a.5.5 0 0 1 .262.263l1.67 3.897L12.743 3.52 2.25 8.184z"},null,-1),y=[k],x=(0,r._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"",class:"bi bi-cursor svshd fill-white self-center",viewBox:"0 0 16 16"},[(0,r._)("path",{d:"M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"})],-1);var j={__name:"App",setup(e){function t(){document.body.classList.contains("dark")?document.body.classList.remove("dark"):document.body.classList.add("dark")}setInterval((()=>{t()}),3e3);const n=(0,i.iH)(-1);function o(){navigator.geolocation&&navigator.geolocation.getCurrentPosition((()=>{})),-1==n.value&&"undefined"!==typeof DeviceMotionEvent&&"function"===typeof DeviceMotionEvent.requestPermission?DeviceMotionEvent.requestPermission().then((e=>{"granted"==e&&window.addEventListener("deviceorientation",(e=>{n.value=315-e.webkitCompassHeading}))})).catch(console.error):-1==n.value&&window.addEventListener("deviceorientationabsolute",(e=>{n.value=e.alpha-45}))}return(e,t)=>{const i=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",{onClick:t[0]||(t[0]=()=>{o()})},[(0,r.Wm)(i),(0,r._)("div",m,[b,((0,r.wg)(),(0,r.iD)("svg",{style:(0,a.j5)({transform:"rotate("+n.value+"deg)"}),xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"",class:"bi bi-cursor svshd fill-white self-center",viewBox:"0 0 16 16"},y,4)),x])])}}};const _=j;var E=_,C=n(5431);(0,C.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}}),alert("Aplicacion en fase Beta, acepta los permisos para poder utilizar la app. En esta fase si sigues la brujula, esta te llevara a la cafeteria de Universidad Galileo"),alert("Es mejor utilizar tu dispositivo movil para usar la app, ya las computadoras generalmente no cuentan con un GPS preciso ni una brujula interna."),alert("Al cargar la pantalla principal, presiona al patito para iniciar el modo de navegacion."),alert("Puedes instalar la app como cualquier otra PWA, si no conoces obre esta nueva tecnologia, te invito a investigar sus ventajas en seguridad  y como instalar una en tu dispositivo!"),(0,o.ri)(E).use(w).mount("#app")},7265:function(e,t,n){n.d(t,{Z:function(){return d}});var o=n(3396),r=n(7139),a=n(4870);const i={onClick:()=>{},class:"bg-slate-50 dark:bg-black justify-center flex flex-col"},s=(0,o.uE)('<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="arr1 fill-black dark:fill-slate-50 self-center" viewBox="0 0 16 16"><path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="arr2 fill-black dark:fill-slate-50 self-center" viewBox="0 0 16 16"><path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="arr3 fill-black dark:fill-slate-50 self-center" viewBox="0 0 16 16"><path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="arr4 fill-black dark:fill-slate-50 self-center" viewBox="0 0 16 16"><path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="arrMn fill-black dark:fill-slate-50 self-center" viewBox="0 0 16 16"><path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"></path></svg>',5),l=[s];var c={__name:"Pntr1",props:["coords"],setup(e){const t=e;var n=t.coords;const s=(0,a.iH)(-1),c=(0,a.iH)(-1);return navigator.geolocation&&setInterval((()=>{navigator.geolocation.getCurrentPosition((e=>{s.value=180+Math.atan((e.coords.longitude-n[1])/(e.coords.latitude-n[0]))*(180/Math.PI),e.coords.latitude<n[0]&&(s.value+=180)}))}),10),-1==c.value&&"undefined"!==typeof DeviceMotionEvent&&"function"===typeof DeviceMotionEvent.requestPermission?DeviceMotionEvent.requestPermission().then((e=>{"granted"==e&&window.addEventListener("deviceorientation",(e=>{c.value=315-e.webkitCompassHeading}))})).catch(console.error):-1==c.value&&window.addEventListener("deviceorientationabsolute",(e=>{c.value=e.alpha-45})),(e,t)=>((0,o.wg)(),(0,o.iD)("div",i,[(0,o._)("div",{style:(0,r.j5)({transform:"rotate("+(s.value+c.value)+"deg)"}),class:"flex flex-col justify-center"},l,4)]))}};const u=c;var d=u}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,a){if(!o){var i=1/0;for(u=0;u<e.length;u++){o=e[u][0],r=e[u][1],a=e[u][2];for(var s=!0,l=0;l<o.length;l++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(s=!1,a<i&&(i=a));if(s){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.7bb78996.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="pinta-nav:";n.l=function(o,r,a,i){if(e[o])e[o].push(r);else{var s,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+a),s.src=o),e[o]=[r];var f=function(t,n){s.onerror=s.onload=null,clearTimeout(v);var r=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(n)})),t)return t(n)},v=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=a);var i=n.p+n.u(t),s=new Error,l=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,r[1](s)}};n.l(i,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,i=o[0],s=o[1],l=o[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(l)var u=l(n)}for(t&&t(o);c<i.length;c++)a=i[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},o=self["webpackChunkpinta_nav"]=self["webpackChunkpinta_nav"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(4657)}));o=n.O(o)})();
//# sourceMappingURL=app.f84aca94.js.map
