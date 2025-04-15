"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6340],{86954:function(e,t,r){r.d(t,{ee:function(){return O},Eh:function(){return M},VY:function(){return L},fC:function(){return _},D7:function(){return v}});var n=r(2265),o=r(97859),i=r(50032),l=r(95399),a=r(57437),u=n.forwardRef((e,t)=>{let{children:r,width:n=10,height:o=5,...i}=e;return(0,a.jsx)(l.WV.svg,{...i,ref:t,width:n,height:o,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?r:(0,a.jsx)("polygon",{points:"0,0 30,0 15,10"})})});function s(...e){return n.useCallback(function(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}(...e),e)}u.displayName="Arrow";var c=r(26606),d=r(61188),p=r(90420),f="Popper",[h,v]=function(e,t=[]){let r=[],o=()=>{let t=r.map(e=>n.createContext(e));return function(r){let o=r?.[e]||t;return n.useMemo(()=>({[`__scope${e}`]:{...r,[e]:o}}),[r,o])}};return o.scopeName=e,[function(t,o){let i=n.createContext(o),l=r.length;function u(t){let{scope:r,children:o,...u}=t,s=r?.[e][l]||i,c=n.useMemo(()=>u,Object.values(u));return(0,a.jsx)(s.Provider,{value:c,children:o})}return r=[...r,o],u.displayName=t+"Provider",[u,function(r,a){let u=a?.[e][l]||i,s=n.useContext(u);if(s)return s;if(void 0!==o)return o;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=r.reduce((t,{useScope:r,scopeName:n})=>{let o=r(e)[`__scope${n}`];return{...t,...o}},{});return n.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return r.scopeName=t.scopeName,r}(o,...t)]}(f),[x,g]=h(f),m=e=>{let{__scopePopper:t,children:r}=e,[o,i]=n.useState(null);return(0,a.jsx)(x,{scope:t,anchor:o,onAnchorChange:i,children:r})};m.displayName=f;var y="PopperAnchor",w=n.forwardRef((e,t)=>{let{__scopePopper:r,virtualRef:o,...i}=e,u=g(y,r),c=n.useRef(null),d=s(t,c);return n.useEffect(()=>{u.onAnchorChange((null==o?void 0:o.current)||c.current)}),o?null:(0,a.jsx)(l.WV.div,{...i,ref:d})});w.displayName=y;var b="PopperContent",[C,E]=h(b),T=n.forwardRef((e,t)=>{var r,u,f,h,v,x,m,y;let{__scopePopper:w,side:E="bottom",sideOffset:T=0,align:j="center",alignOffset:R=0,arrowPadding:P=0,avoidCollisions:_=!0,collisionBoundary:O=[],collisionPadding:L=0,sticky:M="partial",hideWhenDetached:S=!1,updatePositionStrategy:D="optimized",onPlaced:V,...W}=e,Y=g(b,w),[H,I]=n.useState(null),B=s(t,e=>I(e)),[F,z]=n.useState(null),X=(0,p.t)(F),$=null!==(m=null==X?void 0:X.width)&&void 0!==m?m:0,Z=null!==(y=null==X?void 0:X.height)&&void 0!==y?y:0,q="number"==typeof L?L:{top:0,right:0,bottom:0,left:0,...L},G=Array.isArray(O)?O:[O],J=G.length>0,K={padding:q,boundary:G.filter(k),altBoundary:J},{refs:Q,floatingStyles:U,placement:ee,isPositioned:et,middlewareData:er}=(0,o.YF)({strategy:"fixed",placement:E+("center"!==j?"-"+j:""),whileElementsMounted:function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,i.Me)(...t,{animationFrame:"always"===D})},elements:{reference:Y.anchor},middleware:[(0,o.cv)({mainAxis:T+Z,alignmentAxis:R}),_&&(0,o.uY)({mainAxis:!0,crossAxis:!1,limiter:"partial"===M?(0,o.dr)():void 0,...K}),_&&(0,o.RR)({...K}),(0,o.dp)({...K,apply:e=>{let{elements:t,rects:r,availableWidth:n,availableHeight:o}=e,{width:i,height:l}=r.reference,a=t.floating.style;a.setProperty("--radix-popper-available-width","".concat(n,"px")),a.setProperty("--radix-popper-available-height","".concat(o,"px")),a.setProperty("--radix-popper-anchor-width","".concat(i,"px")),a.setProperty("--radix-popper-anchor-height","".concat(l,"px"))}}),F&&(0,o.x7)({element:F,padding:P}),N({arrowWidth:$,arrowHeight:Z}),S&&(0,o.Cp)({strategy:"referenceHidden",...K})]}),[en,eo]=A(ee),ei=(0,c.W)(V);(0,d.b)(()=>{et&&(null==ei||ei())},[et,ei]);let el=null===(r=er.arrow)||void 0===r?void 0:r.x,ea=null===(u=er.arrow)||void 0===u?void 0:u.y,eu=(null===(f=er.arrow)||void 0===f?void 0:f.centerOffset)!==0,[es,ec]=n.useState();return(0,d.b)(()=>{H&&ec(window.getComputedStyle(H).zIndex)},[H]),(0,a.jsx)("div",{ref:Q.setFloating,"data-radix-popper-content-wrapper":"",style:{...U,transform:et?U.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:es,"--radix-popper-transform-origin":[null===(h=er.transformOrigin)||void 0===h?void 0:h.x,null===(v=er.transformOrigin)||void 0===v?void 0:v.y].join(" "),...(null===(x=er.hide)||void 0===x?void 0:x.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:(0,a.jsx)(C,{scope:w,placedSide:en,onArrowChange:z,arrowX:el,arrowY:ea,shouldHideArrow:eu,children:(0,a.jsx)(l.WV.div,{"data-side":en,"data-align":eo,...W,ref:B,style:{...W.style,animation:et?void 0:"none"}})})})});T.displayName=b;var j="PopperArrow",R={top:"bottom",right:"left",bottom:"top",left:"right"},P=n.forwardRef(function(e,t){let{__scopePopper:r,...n}=e,o=E(j,r),i=R[o.placedSide];return(0,a.jsx)("span",{ref:o.onArrowChange,style:{position:"absolute",left:o.arrowX,top:o.arrowY,[i]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[o.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[o.placedSide],visibility:o.shouldHideArrow?"hidden":void 0},children:(0,a.jsx)(u,{...n,ref:t,style:{...n.style,display:"block"}})})});function k(e){return null!==e}P.displayName=j;var N=e=>({name:"transformOrigin",options:e,fn(t){var r,n,o,i,l;let{placement:a,rects:u,middlewareData:s}=t,c=(null===(r=s.arrow)||void 0===r?void 0:r.centerOffset)!==0,d=c?0:e.arrowWidth,p=c?0:e.arrowHeight,[f,h]=A(a),v={start:"0%",center:"50%",end:"100%"}[h],x=(null!==(i=null===(n=s.arrow)||void 0===n?void 0:n.x)&&void 0!==i?i:0)+d/2,g=(null!==(l=null===(o=s.arrow)||void 0===o?void 0:o.y)&&void 0!==l?l:0)+p/2,m="",y="";return"bottom"===f?(m=c?v:"".concat(x,"px"),y="".concat(-p,"px")):"top"===f?(m=c?v:"".concat(x,"px"),y="".concat(u.floating.height+p,"px")):"right"===f?(m="".concat(-p,"px"),y=c?v:"".concat(g,"px")):"left"===f&&(m="".concat(u.floating.width+p,"px"),y=c?v:"".concat(g,"px")),{data:{x:m,y}}}});function A(e){let[t,r="center"]=e.split("-");return[t,r]}var _=m,O=w,L=T,M=P},96340:function(e,t,r){r.d(t,{VY:function(){return X},zt:function(){return B},fC:function(){return F},xz:function(){return z}});var n=r(2265);function o(e,t,{checkForDefaultPrevented:r=!0}={}){return function(n){if(e?.(n),!1===r||!n.defaultPrevented)return t?.(n)}}function i(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}function l(...e){return n.useCallback(i(...e),e)}var a=r(73966),u=r(14520),s=r(99255),c=r(86954),d=(r(83832),r(68583)),p=r(95399),f=r(57437);n.forwardRef((e,t)=>{let{children:r,...o}=e,i=n.Children.toArray(r),l=i.find(x);if(l){let e=l.props.children,r=i.map(t=>t!==l?t:n.Children.count(e)>1?n.Children.only(null):n.isValidElement(e)?e.props.children:null);return(0,f.jsx)(h,{...o,ref:t,children:n.isValidElement(e)?n.cloneElement(e,void 0,r):null})}return(0,f.jsx)(h,{...o,ref:t,children:r})}).displayName="Slot";var h=n.forwardRef((e,t)=>{let{children:r,...o}=e;if(n.isValidElement(r)){let e,l;let a=(e=Object.getOwnPropertyDescriptor(r.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?r.ref:(e=Object.getOwnPropertyDescriptor(r,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?r.props.ref:r.props.ref||r.ref;return n.cloneElement(r,{...function(e,t){let r={...t};for(let n in t){let o=e[n],i=t[n];/^on[A-Z]/.test(n)?o&&i?r[n]=(...e)=>{i(...e),o(...e)}:o&&(r[n]=o):"style"===n?r[n]={...o,...i}:"className"===n&&(r[n]=[o,i].filter(Boolean).join(" "))}return{...e,...r}}(o,r.props),ref:t?i(t,a):a})}return n.Children.count(r)>1?n.Children.only(null):null});h.displayName="SlotClone";var v=({children:e})=>(0,f.jsx)(f.Fragment,{children:e});function x(e){return n.isValidElement(e)&&e.type===v}var g=r(80886),m=r(95098),[y,w]=(0,a.b)("Tooltip",[c.D7]),b=(0,c.D7)(),C="TooltipProvider",E="tooltip.open",[T,j]=y(C),R=e=>{let{__scopeTooltip:t,delayDuration:r=700,skipDelayDuration:o=300,disableHoverableContent:i=!1,children:l}=e,[a,u]=n.useState(!0),s=n.useRef(!1),c=n.useRef(0);return n.useEffect(()=>{let e=c.current;return()=>window.clearTimeout(e)},[]),(0,f.jsx)(T,{scope:t,isOpenDelayed:a,delayDuration:r,onOpen:n.useCallback(()=>{window.clearTimeout(c.current),u(!1)},[]),onClose:n.useCallback(()=>{window.clearTimeout(c.current),c.current=window.setTimeout(()=>u(!0),o)},[o]),isPointerInTransitRef:s,onPointerInTransitChange:n.useCallback(e=>{s.current=e},[]),disableHoverableContent:i,children:l})};R.displayName=C;var P="Tooltip",[k,N]=y(P),A=e=>{let{__scopeTooltip:t,children:r,open:o,defaultOpen:i=!1,onOpenChange:l,disableHoverableContent:a,delayDuration:u}=e,d=j(P,e.__scopeTooltip),p=b(t),[h,v]=n.useState(null),x=(0,s.M)(),m=n.useRef(0),y=null!=a?a:d.disableHoverableContent,w=null!=u?u:d.delayDuration,C=n.useRef(!1),[T=!1,R]=(0,g.T)({prop:o,defaultProp:i,onChange:e=>{e?(d.onOpen(),document.dispatchEvent(new CustomEvent(E))):d.onClose(),null==l||l(e)}}),N=n.useMemo(()=>T?C.current?"delayed-open":"instant-open":"closed",[T]),A=n.useCallback(()=>{window.clearTimeout(m.current),m.current=0,C.current=!1,R(!0)},[R]),_=n.useCallback(()=>{window.clearTimeout(m.current),m.current=0,R(!1)},[R]),O=n.useCallback(()=>{window.clearTimeout(m.current),m.current=window.setTimeout(()=>{C.current=!0,R(!0),m.current=0},w)},[w,R]);return n.useEffect(()=>()=>{m.current&&(window.clearTimeout(m.current),m.current=0)},[]),(0,f.jsx)(c.fC,{...p,children:(0,f.jsx)(k,{scope:t,contentId:x,open:T,stateAttribute:N,trigger:h,onTriggerChange:v,onTriggerEnter:n.useCallback(()=>{d.isOpenDelayed?O():A()},[d.isOpenDelayed,O,A]),onTriggerLeave:n.useCallback(()=>{y?_():(window.clearTimeout(m.current),m.current=0)},[_,y]),onOpen:A,onClose:_,disableHoverableContent:y,children:r})})};A.displayName=P;var _="TooltipTrigger",O=n.forwardRef((e,t)=>{let{__scopeTooltip:r,...i}=e,a=N(_,r),u=j(_,r),s=b(r),d=l(t,n.useRef(null),a.onTriggerChange),h=n.useRef(!1),v=n.useRef(!1),x=n.useCallback(()=>h.current=!1,[]);return n.useEffect(()=>()=>document.removeEventListener("pointerup",x),[x]),(0,f.jsx)(c.ee,{asChild:!0,...s,children:(0,f.jsx)(p.WV.button,{"aria-describedby":a.open?a.contentId:void 0,"data-state":a.stateAttribute,...i,ref:d,onPointerMove:o(e.onPointerMove,e=>{"touch"===e.pointerType||v.current||u.isPointerInTransitRef.current||(a.onTriggerEnter(),v.current=!0)}),onPointerLeave:o(e.onPointerLeave,()=>{a.onTriggerLeave(),v.current=!1}),onPointerDown:o(e.onPointerDown,()=>{h.current=!0,document.addEventListener("pointerup",x,{once:!0})}),onFocus:o(e.onFocus,()=>{h.current||a.onOpen()}),onBlur:o(e.onBlur,a.onClose),onClick:o(e.onClick,a.onClose)})})});O.displayName=_;var[L,M]=y("TooltipPortal",{forceMount:void 0}),S="TooltipContent",D=n.forwardRef((e,t)=>{let r=M(S,e.__scopeTooltip),{forceMount:n=r.forceMount,side:o="top",...i}=e,l=N(S,e.__scopeTooltip);return(0,f.jsx)(d.z,{present:n||l.open,children:l.disableHoverableContent?(0,f.jsx)(H,{side:o,...i,ref:t}):(0,f.jsx)(V,{side:o,...i,ref:t})})}),V=n.forwardRef((e,t)=>{let r=N(S,e.__scopeTooltip),o=j(S,e.__scopeTooltip),i=n.useRef(null),a=l(t,i),[u,s]=n.useState(null),{trigger:c,onClose:d}=r,p=i.current,{onPointerInTransitChange:h}=o,v=n.useCallback(()=>{s(null),h(!1)},[h]),x=n.useCallback((e,t)=>{let r=e.currentTarget,n={x:e.clientX,y:e.clientY},o=function(e,t){let r=Math.abs(t.top-e.y),n=Math.abs(t.bottom-e.y),o=Math.abs(t.right-e.x),i=Math.abs(t.left-e.x);switch(Math.min(r,n,o,i)){case i:return"left";case o:return"right";case r:return"top";case n:return"bottom";default:throw Error("unreachable")}}(n,r.getBoundingClientRect());s(function(e){let t=e.slice();return t.sort((e,t)=>e.x<t.x?-1:e.x>t.x?1:e.y<t.y?-1:e.y>t.y?1:0),function(e){if(e.length<=1)return e.slice();let t=[];for(let r=0;r<e.length;r++){let n=e[r];for(;t.length>=2;){let e=t[t.length-1],r=t[t.length-2];if((e.x-r.x)*(n.y-r.y)>=(e.y-r.y)*(n.x-r.x))t.pop();else break}t.push(n)}t.pop();let r=[];for(let t=e.length-1;t>=0;t--){let n=e[t];for(;r.length>=2;){let e=r[r.length-1],t=r[r.length-2];if((e.x-t.x)*(n.y-t.y)>=(e.y-t.y)*(n.x-t.x))r.pop();else break}r.push(n)}return(r.pop(),1===t.length&&1===r.length&&t[0].x===r[0].x&&t[0].y===r[0].y)?t:t.concat(r)}(t)}([...function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5,n=[];switch(t){case"top":n.push({x:e.x-r,y:e.y+r},{x:e.x+r,y:e.y+r});break;case"bottom":n.push({x:e.x-r,y:e.y-r},{x:e.x+r,y:e.y-r});break;case"left":n.push({x:e.x+r,y:e.y-r},{x:e.x+r,y:e.y+r});break;case"right":n.push({x:e.x-r,y:e.y-r},{x:e.x-r,y:e.y+r})}return n}(n,o),...function(e){let{top:t,right:r,bottom:n,left:o}=e;return[{x:o,y:t},{x:r,y:t},{x:r,y:n},{x:o,y:n}]}(t.getBoundingClientRect())])),h(!0)},[h]);return n.useEffect(()=>()=>v(),[v]),n.useEffect(()=>{if(c&&p){let e=e=>x(e,p),t=e=>x(e,c);return c.addEventListener("pointerleave",e),p.addEventListener("pointerleave",t),()=>{c.removeEventListener("pointerleave",e),p.removeEventListener("pointerleave",t)}}},[c,p,x,v]),n.useEffect(()=>{if(u){let e=e=>{let t=e.target,r={x:e.clientX,y:e.clientY},n=(null==c?void 0:c.contains(t))||(null==p?void 0:p.contains(t)),o=!function(e,t){let{x:r,y:n}=e,o=!1;for(let e=0,i=t.length-1;e<t.length;i=e++){let l=t[e].x,a=t[e].y,u=t[i].x,s=t[i].y;a>n!=s>n&&r<(u-l)*(n-a)/(s-a)+l&&(o=!o)}return o}(r,u);n?v():o&&(v(),d())};return document.addEventListener("pointermove",e),()=>document.removeEventListener("pointermove",e)}},[c,p,u,d,v]),(0,f.jsx)(H,{...e,ref:a})}),[W,Y]=y(P,{isInside:!1}),H=n.forwardRef((e,t)=>{let{__scopeTooltip:r,children:o,"aria-label":i,onEscapeKeyDown:l,onPointerDownOutside:a,...s}=e,d=N(S,r),p=b(r),{onClose:h}=d;return n.useEffect(()=>(document.addEventListener(E,h),()=>document.removeEventListener(E,h)),[h]),n.useEffect(()=>{if(d.trigger){let e=e=>{let t=e.target;(null==t?void 0:t.contains(d.trigger))&&h()};return window.addEventListener("scroll",e,{capture:!0}),()=>window.removeEventListener("scroll",e,{capture:!0})}},[d.trigger,h]),(0,f.jsx)(u.XB,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:l,onPointerDownOutside:a,onFocusOutside:e=>e.preventDefault(),onDismiss:h,children:(0,f.jsxs)(c.VY,{"data-state":d.stateAttribute,...p,...s,ref:t,style:{...s.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[(0,f.jsx)(v,{children:o}),(0,f.jsx)(W,{scope:r,isInside:!0,children:(0,f.jsx)(m.f,{id:d.contentId,role:"tooltip",children:i||o})})]})})});D.displayName=S;var I="TooltipArrow";n.forwardRef((e,t)=>{let{__scopeTooltip:r,...n}=e,o=b(r);return Y(I,r).isInside?null:(0,f.jsx)(c.Eh,{...o,...n,ref:t})}).displayName=I;var B=R,F=A,z=O,X=D},95098:function(e,t,r){r.d(t,{T:function(){return l},f:function(){return a}});var n=r(2265),o=r(95399),i=r(57437),l=n.forwardRef((e,t)=>(0,i.jsx)(o.WV.span,{...e,ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));l.displayName="VisuallyHidden";var a=l}}]);