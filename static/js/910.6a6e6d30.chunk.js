"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[910],{4554:function(e,n,o){o.d(n,{Z:function(){return Z}});var t=o(7462),r=o(3366),a=o(2791),i=o(8182),l=o(2421),u=o(104),c=o(8519),v=o(3459),s=o(184),d=["className","component"];var f=o(5902),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.defaultTheme,o=e.defaultClassName,f=void 0===o?"MuiBox-root":o,m=e.generateClassName,Z=(0,l.ZP)("div",{shouldForwardProp:function(e){return"theme"!==e&&"sx"!==e&&"as"!==e}})(u.Z),h=a.forwardRef((function(e,o){var a=(0,v.Z)(n),l=(0,c.Z)(e),u=l.className,h=l.component,p=void 0===h?"div":h,w=(0,r.Z)(l,d);return(0,s.jsx)(Z,(0,t.Z)({as:p,ref:o,className:(0,i.Z)(u,m?m(f):f),theme:a},w))}));return h}({defaultTheme:(0,o(7107).Z)(),defaultClassName:"MuiBox-root",generateClassName:f.Z.generate}),Z=m},5527:function(e,n,o){o.d(n,{Z:function(){return w}});var t=o(3366),r=o(7462),a=o(2791),i=o(8182),l=o(4419),u=o(2065),c=o(6934),v=function(e){return((e<1?5.11916*Math.pow(e,2):4.5*Math.log(e+1)+2)/100).toFixed(2)},s=o(1402),d=o(5878),f=o(1217);function m(e){return(0,f.Z)("MuiPaper",e)}(0,d.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var Z=o(184),h=["className","component","elevation","square","variant"],p=(0,c.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:function(e,n){var o=e.ownerState;return[n.root,n[o.variant],!o.square&&n.rounded,"elevation"===o.variant&&n["elevation".concat(o.elevation)]]}})((function(e){var n,o=e.theme,t=e.ownerState;return(0,r.Z)({backgroundColor:(o.vars||o).palette.background.paper,color:(o.vars||o).palette.text.primary,transition:o.transitions.create("box-shadow")},!t.square&&{borderRadius:o.shape.borderRadius},"outlined"===t.variant&&{border:"1px solid ".concat((o.vars||o).palette.divider)},"elevation"===t.variant&&(0,r.Z)({boxShadow:(o.vars||o).shadows[t.elevation]},!o.vars&&"dark"===o.palette.mode&&{backgroundImage:"linear-gradient(".concat((0,u.Fq)("#fff",v(t.elevation)),", ").concat((0,u.Fq)("#fff",v(t.elevation)),")")},o.vars&&{backgroundImage:null==(n=o.vars.overlays)?void 0:n[t.elevation]}))})),w=a.forwardRef((function(e,n){var o=(0,s.Z)({props:e,name:"MuiPaper"}),a=o.className,u=o.component,c=void 0===u?"div":u,v=o.elevation,d=void 0===v?1:v,f=o.square,w=void 0!==f&&f,S=o.variant,g=void 0===S?"elevation":S,x=(0,t.Z)(o,h),y=(0,r.Z)({},o,{component:c,elevation:d,square:w,variant:g}),b=function(e){var n=e.square,o=e.elevation,t=e.variant,r=e.classes,a={root:["root",t,!n&&"rounded","elevation"===t&&"elevation".concat(o)]};return(0,l.Z)(a,m,r)}(y);return(0,Z.jsx)(p,(0,r.Z)({as:c,ownerState:y,className:(0,i.Z)(b.root,a),ref:n},x))}))},9201:function(e,n,o){o.d(n,{Z:function(){return S}});var t=o(7462),r=o(2791),a=o(3366),i=o(8182),l=o(4419),u=o(4036),c=o(1402),v=o(6934),s=o(5878),d=o(1217);function f(e){return(0,d.Z)("MuiSvgIcon",e)}(0,s.Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var m=o(184),Z=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],h=(0,v.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:function(e,n){var o=e.ownerState;return[n.root,"inherit"!==o.color&&n["color".concat((0,u.Z)(o.color))],n["fontSize".concat((0,u.Z)(o.fontSize))]]}})((function(e){var n,o,t,r,a,i,l,u,c,v,s,d,f,m,Z,h,p,w=e.theme,S=e.ownerState;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(n=w.transitions)||null==(o=n.create)?void 0:o.call(n,"fill",{duration:null==(t=w.transitions)||null==(r=t.duration)?void 0:r.shorter}),fontSize:{inherit:"inherit",small:(null==(a=w.typography)||null==(i=a.pxToRem)?void 0:i.call(a,20))||"1.25rem",medium:(null==(l=w.typography)||null==(u=l.pxToRem)?void 0:u.call(l,24))||"1.5rem",large:(null==(c=w.typography)||null==(v=c.pxToRem)?void 0:v.call(c,35))||"2.1875rem"}[S.fontSize],color:null!=(s=null==(d=(w.vars||w).palette)||null==(f=d[S.color])?void 0:f.main)?s:{action:null==(m=(w.vars||w).palette)||null==(Z=m.action)?void 0:Z.active,disabled:null==(h=(w.vars||w).palette)||null==(p=h.action)?void 0:p.disabled,inherit:void 0}[S.color]}})),p=r.forwardRef((function(e,n){var o=(0,c.Z)({props:e,name:"MuiSvgIcon"}),r=o.children,v=o.className,s=o.color,d=void 0===s?"inherit":s,p=o.component,w=void 0===p?"svg":p,S=o.fontSize,g=void 0===S?"medium":S,x=o.htmlColor,y=o.inheritViewBox,b=void 0!==y&&y,N=o.titleAccess,z=o.viewBox,k=void 0===z?"0 0 24 24":z,R=(0,a.Z)(o,Z),M=(0,t.Z)({},o,{color:d,component:w,fontSize:g,instanceFontSize:e.fontSize,inheritViewBox:b,viewBox:k}),C={};b||(C.viewBox=k);var I=function(e){var n=e.color,o=e.fontSize,t=e.classes,r={root:["root","inherit"!==n&&"color".concat((0,u.Z)(n)),"fontSize".concat((0,u.Z)(o))]};return(0,l.Z)(r,f,t)}(M);return(0,m.jsxs)(h,(0,t.Z)({as:w,className:(0,i.Z)(I.root,v),focusable:"false",color:x,"aria-hidden":!N||void 0,role:N?"img":void 0,ref:n},C,R,{ownerState:M,children:[r,N?(0,m.jsx)("title",{children:N}):null]}))}));p.muiName="SvgIcon";var w=p;function S(e,n){function o(o,r){return(0,m.jsx)(w,(0,t.Z)({"data-testid":"".concat(n,"Icon"),ref:r},o,{children:e}))}return o.muiName=w.muiName,r.memo(r.forwardRef(o))}},3199:function(e,n,o){var t=o(3981);n.Z=t.Z},9103:function(e,n,o){o.d(n,{Z:function(){return r}});var t=o(2791);var r=function(e,n){return t.isValidElement(e)&&-1!==n.indexOf(e.type.muiName)}},8301:function(e,n,o){var t=o(9723);n.Z=t.Z},7602:function(e,n,o){var t=o(7979);n.Z=t.Z},8744:function(e,n,o){o.d(n,{Z:function(){return a}});var t=o(9439),r=o(2791);var a=function(e){var n=e.controlled,o=e.default,a=(e.name,e.state,r.useRef(void 0!==n).current),i=r.useState(o),l=(0,t.Z)(i,2),u=l[0],c=l[1];return[a?n:u,r.useCallback((function(e){a||c(e)}),[])]}},162:function(e,n,o){var t=o(5721);n.Z=t.Z},8949:function(e,n,o){function t(){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return n.reduce((function(e,n){return null==n?e:function(){for(var o=arguments.length,t=new Array(o),r=0;r<o;r++)t[r]=arguments[r];e.apply(this,t),n.apply(this,t)}}),(function(){}))}o.d(n,{Z:function(){return t}})},3981:function(e,n,o){function t(e){var n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function t(){for(var t=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var l=function(){e.apply(t,a)};clearTimeout(n),n=setTimeout(l,o)}return t.clear=function(){clearTimeout(n)},t}o.d(n,{Z:function(){return t}})},9723:function(e,n,o){function t(e){return e&&e.ownerDocument||document}o.d(n,{Z:function(){return t}})},7979:function(e,n,o){o.d(n,{Z:function(){return r}});var t=o(9723);function r(e){return(0,t.Z)(e).defaultView||window}},6248:function(e,n,o){var t;o.d(n,{Z:function(){return u}});var r=o(9439),a=o(2791),i=0;var l=(t||(t=o.t(a,2))).useId;function u(e){if(void 0!==l){var n=l();return null!=e?e:n}return function(e){var n=a.useState(e),o=(0,r.Z)(n,2),t=o[0],l=o[1],u=e||t;return a.useEffect((function(){null==t&&l("mui-".concat(i+=1))}),[t]),u}(e)}}}]);
//# sourceMappingURL=910.6a6e6d30.chunk.js.map