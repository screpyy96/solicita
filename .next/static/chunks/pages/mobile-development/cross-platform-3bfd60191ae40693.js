(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[793],{8043:(e,t,i)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/mobile-development/cross-platform",function(){return i(2028)}])},6821:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return w}});let r=i(8754),s=i(1757),a=i(5893),l=s._(i(7294)),o=r._(i(3935)),n=r._(i(7219)),d=i(1128),c=i(6252),u=i(9146);i(2723);let p=i(4494),m=r._(i(5176)),f=i(6881),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function h(e,t,i,r,s,a,l){let o=null==e?void 0:e.src;e&&e["data-loaded-src"]!==o&&(e["data-loaded-src"]=o,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&s(!0),null==i?void 0:i.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,s=!1;i.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>s,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{s=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}}))}function x(e){return l.use?{fetchPriority:e}:{fetchpriority:e}}let v=(0,l.forwardRef)((e,t)=>{let{src:i,srcSet:r,sizes:s,height:o,width:n,decoding:d,className:c,style:u,fetchPriority:p,placeholder:m,loading:g,unoptimized:v,fill:b,onLoadRef:w,onLoadingCompleteRef:y,setBlurComplete:j,setShowAltText:S,sizesInput:_,onLoad:z,onError:N,...C}=e,E=(0,l.useCallback)(e=>{e&&(N&&(e.src=e.src),e.complete&&h(e,m,w,y,j,v,_))},[i,m,w,y,j,N,v,_]),P=(0,f.useMergedRef)(t,E);return(0,a.jsx)("img",{...C,...x(p),loading:g,width:n,height:o,decoding:d,"data-nimg":b?"fill":"1",className:c,style:u,sizes:s,srcSet:r,src:i,ref:P,onLoad:e=>{h(e.currentTarget,m,w,y,j,v,_)},onError:e=>{S(!0),"empty"!==m&&j(!0),N&&N(e)}})});function b(e){let{isAppRouter:t,imgAttributes:i}=e,r={as:"image",imageSrcSet:i.srcSet,imageSizes:i.sizes,crossOrigin:i.crossOrigin,referrerPolicy:i.referrerPolicy,...x(i.fetchPriority)};return t&&o.default.preload?(o.default.preload(i.src,r),null):(0,a.jsx)(n.default,{children:(0,a.jsx)("link",{rel:"preload",href:i.srcSet?void 0:i.src,...r},"__nimg-"+i.src+i.srcSet+i.sizes)})}let w=(0,l.forwardRef)((e,t)=>{let i=(0,l.useContext)(p.RouterContext),r=(0,l.useContext)(u.ImageConfigContext),s=(0,l.useMemo)(()=>{let e=g||r||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:i}},[r]),{onLoad:o,onLoadingComplete:n}=e,f=(0,l.useRef)(o);(0,l.useEffect)(()=>{f.current=o},[o]);let h=(0,l.useRef)(n);(0,l.useEffect)(()=>{h.current=n},[n]);let[x,w]=(0,l.useState)(!1),[y,j]=(0,l.useState)(!1),{props:S,meta:_}=(0,d.getImgProps)(e,{defaultLoader:m.default,imgConf:s,blurComplete:x,showAltText:y});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(v,{...S,unoptimized:_.unoptimized,placeholder:_.placeholder,fill:_.fill,onLoadRef:f,onLoadingCompleteRef:h,setBlurComplete:w,setShowAltText:j,sizesInput:e.sizes,ref:t}),_.priority?(0,a.jsx)(b,{isAppRouter:!i,imgAttributes:S}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1128:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return o}}),i(2723);let r=i(2685),s=i(6252);function a(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function o(e,t){var i;let o,n,d,{src:c,sizes:u,unoptimized:p=!1,priority:m=!1,loading:f,className:g,quality:h,width:x,height:v,fill:b=!1,style:w,overrideSrc:y,onLoad:j,onLoadingComplete:S,placeholder:_="empty",blurDataURL:z,fetchPriority:N,decoding:C="async",layout:E,objectFit:P,objectPosition:O,lazyBoundary:I,lazyRoot:R,...k}=e,{imgConf:M,showAltText:A,blurComplete:D,defaultLoader:L}=t,B=M||s.imageConfigDefault;if("allSizes"in B)o=B;else{let e=[...B.deviceSizes,...B.imageSizes].sort((e,t)=>e-t),t=B.deviceSizes.sort((e,t)=>e-t);o={...B,allSizes:e,deviceSizes:t}}if(void 0===L)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let F=k.loader||L;delete k.loader,delete k.srcSet;let G="__next_img_default"in F;if(G){if("custom"===o.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=F;F=t=>{let{config:i,...r}=t;return e(r)}}if(E){"fill"===E&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[E];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[E];t&&!u&&(u=t)}let V="",W=l(x),T=l(v);if((i=c)&&"object"==typeof i&&(a(i)||void 0!==i.src)){let e=a(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(n=e.blurWidth,d=e.blurHeight,z=z||e.blurDataURL,V=e.src,!b){if(W||T){if(W&&!T){let t=W/e.width;T=Math.round(e.height*t)}else if(!W&&T){let t=T/e.height;W=Math.round(e.width*t)}}else W=e.width,T=e.height}}let U=!m&&("lazy"===f||void 0===f);(!(c="string"==typeof c?c:V)||c.startsWith("data:")||c.startsWith("blob:"))&&(p=!0,U=!1),o.unoptimized&&(p=!0),G&&c.endsWith(".svg")&&!o.dangerouslyAllowSVG&&(p=!0);let q=l(h),J=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:P,objectPosition:O}:{},A?{}:{color:"transparent"},w),X=D||"empty"===_?null:"blur"===_?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:W,heightInt:T,blurWidth:n,blurHeight:d,blurDataURL:z||"",objectFit:J.objectFit})+'")':'url("'+_+'")',Y=X?{backgroundSize:J.objectFit||"cover",backgroundPosition:J.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:X}:{},H=function(e){let{config:t,src:i,unoptimized:r,width:s,quality:a,sizes:l,loader:o}=e;if(r)return{src:i,srcSet:void 0,sizes:void 0};let{widths:n,kind:d}=function(e,t,i){let{deviceSizes:r,allSizes:s}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(i);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:s.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:s,kind:"w"}}return"number"!=typeof t?{widths:r,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>s.find(t=>t>=e)||s[s.length-1]))],kind:"x"}}(t,s,l),c=n.length-1;return{sizes:l||"w"!==d?l:"100vw",srcSet:n.map((e,r)=>o({config:t,src:i,quality:a,width:e})+" "+("w"===d?e:r+1)+d).join(", "),src:o({config:t,src:i,quality:a,width:n[c]})}}({config:o,src:c,unoptimized:p,width:W,quality:q,sizes:u,loader:F});return{props:{...k,loading:U?"lazy":f,fetchPriority:N,width:W,height:T,decoding:C,className:g,style:{...J,...Y},sizes:H.sizes,srcSet:H.srcSet,src:y||H.src},meta:{unoptimized:p,priority:m,placeholder:_,fill:b}}}},2685:(e,t)=>{"use strict";function i(e){let{widthInt:t,heightInt:i,blurWidth:r,blurHeight:s,blurDataURL:a,objectFit:l}=e,o=r?40*r:t,n=s?40*s:i,d=o&&n?"viewBox='0 0 "+o+" "+n+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+a+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return i}})},5985:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{default:function(){return n},getImageProps:function(){return o}});let r=i(8754),s=i(1128),a=i(6821),l=r._(i(5176));function o(e){let{props:t}=(0,s.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,i]of Object.entries(t))void 0===i&&delete t[e];return{props:t}}let n=a.Image},5176:(e,t)=>{"use strict";function i(e){let{config:t,src:i,width:r,quality:s}=e;return t.path+"?url="+encodeURIComponent(i)+"&w="+r+"&q="+(s||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),i.__next_img_default=!0;let r=i},2028:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>c});var r=i(5893);i(7294);var s=i(5675),a=i.n(s),l=i(3128),o=i(1664),n=i.n(o);let d=e=>{let{title:t,description:i,imageSrc:s}=e;return(0,r.jsxs)(l.E.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"bg-white/10 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden transition-all duration-300 hover:scale-105",children:[(0,r.jsx)(a(),{src:s,alt:t,width:400,height:200,className:"w-full h-48 object-cover"}),(0,r.jsxs)("div",{className:"p-6",children:[(0,r.jsx)("h3",{className:"text-xl font-semibold mb-2 text-white",children:t}),(0,r.jsx)("p",{className:"text-gray-300",children:i})]})]})},c=()=>(0,r.jsx)("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white",children:(0,r.jsxs)("section",{className:"py-32 px-4 sm:px-6 lg:px-8 relative",children:[(0,r.jsx)("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(100,50,255,0.2),transparent_50%)] pointer-events-none"}),(0,r.jsx)("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(150,50,255,0.2),transparent_50%)] pointer-events-none"}),(0,r.jsxs)("div",{className:"max-w-7xl mx-auto relative space-y-24",children:[(0,r.jsxs)(l.E.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},className:"text-center mb-20",children:[(0,r.jsx)("h2",{className:"text-4xl sm:text-5xl font-bold text-white mb-8",children:"Excelență Cross-Platform"}),(0,r.jsx)("p",{className:"text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed",children:"Serviciile noastre de marketing digital, SEO, dezvoltare web și aplicații acoperă toate platformele majore, asigur\xe2nd prezența brandului tău oriunde se află audiența ta."})]}),(0,r.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",children:[{title:"Dezvoltare Web",description:"Site-uri web responsive optimizate pentru toate browserele și dispozitivele.",imageSrc:"/images/web.png"},{title:"Aplicații Mobile",description:"Aplicații native și hibride pentru platformele iOS și Android.",imageSrc:"/images/mobile.jpg"},{title:"Aplicații Desktop",description:"Software performant pentru Windows, macOS și Linux.",imageSrc:"/images/desktop.webp"},{title:"Aplicații Smart TV",description:"Aplicații interactive pentru televizoare smart și dispozitive de streaming.",imageSrc:"/images/smart-tv.jpg"}].map((e,t)=>(0,r.jsx)(d,{...e},t))}),(0,r.jsxs)(l.E.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"mt-24 text-center",children:[(0,r.jsx)("h3",{className:"text-2xl font-semibold text-white mb-8",children:"De Ce Să Alegi Serviciile Noastre Cross-Platform?"}),(0,r.jsxs)("ul",{className:"text-left max-w-2xl mx-auto space-y-6 text-gray-300",children:[(0,r.jsxs)("li",{className:"flex items-start",children:[(0,r.jsx)("span",{className:"mr-2 text-purple-400 font-bold",children:"✓"}),"Experiență de brand consistentă pe toate dispozitivele și platformele"]}),(0,r.jsxs)("li",{className:"flex items-start",children:[(0,r.jsx)("span",{className:"mr-2 text-purple-400 font-bold",children:"✓"}),"Performanță și experiență utilizator optimizate pentru fiecare platformă"]}),(0,r.jsxs)("li",{className:"flex items-start",children:[(0,r.jsx)("span",{className:"mr-2 text-purple-400 font-bold",children:"✓"}),"Strategii SEO integrate pentru vizibilitate maximă"]}),(0,r.jsxs)("li",{className:"flex items-start",children:[(0,r.jsx)("span",{className:"mr-2 text-purple-400 font-bold",children:"✓"}),"Proces de dezvoltare eficient pentru lansare rapidă pe piață"]})]})]}),(0,r.jsx)(l.E.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"mt-16 text-center",children:(0,r.jsx)(n(),{href:"/contact",className:"inline-block bg-purple-600 text-white font-semibold py-4 px-10 rounded-full hover:bg-purple-700 transition duration-300 text-lg",children:"\xcencepe cu Soluții Cross-Platform"})})]})]})})},5675:(e,t,i)=>{e.exports=i(5985)}},e=>{var t=t=>e(e.s=t);e.O(0,[888,774,179],()=>t(8043)),_N_E=e.O()}]);