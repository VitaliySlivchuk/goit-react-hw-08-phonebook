(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[566],{9566:function(e,o,r){"use strict";r.r(o),r.d(o,{default:function(){return q}});var t=r(1413),n=r(4554),a=r(6151),i=r(1087),l=r(184),c=function(){return(0,l.jsxs)(n.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",gap:4},children:[(0,l.jsx)(n.Z,{children:(0,l.jsx)(i.OL,{to:"/register",style:(0,t.Z)({},s),children:(0,l.jsx)(a.Z,{variant:"outlined",sx:u,children:"Register"})})}),(0,l.jsx)(n.Z,{children:(0,l.jsx)(i.OL,{to:"/login",style:s,children:(0,l.jsx)(a.Z,{variant:"outlined",sx:u,children:"Log in"})})})]})},s={textDecoration:"none",color:"#fff","&:hover":{color:"#000"}},u={color:"white",borderColor:"white","&:hover":{backgroundColor:"#cfd8dc",color:"#000"}},d=r(7541),p=r(7834),f=r(890),v=function(){var e=(0,p.a)().isLoggedIn;return(0,l.jsxs)("nav",{style:{display:"flex",alignItems:"center"},children:[(0,l.jsx)(i.OL,{to:"/",children:(0,l.jsx)(d.Z,{sx:{width:50,height:50,color:"#fff","&:hover":{fontSize:40}}})}),e&&(0,l.jsx)(i.OL,{to:"/contacts",style:{color:"#fff",textDecoration:"none"},children:(0,l.jsx)(f.Z,{sx:{marginLeft:8},children:"Contacts"})})]})},g=r(3400),h=r(9434),Z=r(9273),x=r(4217),m=r(6488),b=function(){var e=(0,h.I0)(),o=(0,h.v9)(x.dy).name;return(0,l.jsxs)(n.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,l.jsxs)(f.Z,{children:["Welcome, ",o]}),(0,l.jsx)(g.Z,{onClick:function(){return e((0,Z.ni)())},sx:{background:"#fff",marginLeft:"25px"},children:(0,l.jsx)(m.Z,{})})]})},k=r(3366),y=r(7462),j=r(2791),C=r(8182),z=r(4419),w=r(6934),B=r(1402),R=r(4036),S=r(5527),I=r(5878),M=r(1217);function A(e){return(0,M.Z)("MuiAppBar",e)}(0,I.Z)("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent"]);var O=["className","color","enableColorOnDark","position"],L=function(e,o){return e?"".concat(null==e?void 0:e.replace(")",""),", ").concat(o,")"):o},D=(0,w.ZP)(S.Z,{name:"MuiAppBar",slot:"Root",overridesResolver:function(e,o){var r=e.ownerState;return[o.root,o["position".concat((0,R.Z)(r.position))],o["color".concat((0,R.Z)(r.color))]]}})((function(e){var o=e.theme,r=e.ownerState,t="light"===o.palette.mode?o.palette.grey[100]:o.palette.grey[900];return(0,y.Z)({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},"fixed"===r.position&&{position:"fixed",zIndex:(o.vars||o).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},"absolute"===r.position&&{position:"absolute",zIndex:(o.vars||o).zIndex.appBar,top:0,left:"auto",right:0},"sticky"===r.position&&{position:"sticky",zIndex:(o.vars||o).zIndex.appBar,top:0,left:"auto",right:0},"static"===r.position&&{position:"static"},"relative"===r.position&&{position:"relative"},!o.vars&&(0,y.Z)({},"default"===r.color&&{backgroundColor:t,color:o.palette.getContrastText(t)},r.color&&"default"!==r.color&&"inherit"!==r.color&&"transparent"!==r.color&&{backgroundColor:o.palette[r.color].main,color:o.palette[r.color].contrastText},"inherit"===r.color&&{color:"inherit"},"dark"===o.palette.mode&&!r.enableColorOnDark&&{backgroundColor:null,color:null},"transparent"===r.color&&(0,y.Z)({backgroundColor:"transparent",color:"inherit"},"dark"===o.palette.mode&&{backgroundImage:"none"})),o.vars&&(0,y.Z)({},"default"===r.color&&{"--AppBar-background":r.enableColorOnDark?o.vars.palette.AppBar.defaultBg:L(o.vars.palette.AppBar.darkBg,o.vars.palette.AppBar.defaultBg),"--AppBar-color":r.enableColorOnDark?o.vars.palette.text.primary:L(o.vars.palette.AppBar.darkColor,o.vars.palette.text.primary)},r.color&&!r.color.match(/^(default|inherit|transparent)$/)&&{"--AppBar-background":r.enableColorOnDark?o.vars.palette[r.color].main:L(o.vars.palette.AppBar.darkBg,o.vars.palette[r.color].main),"--AppBar-color":r.enableColorOnDark?o.vars.palette[r.color].contrastText:L(o.vars.palette.AppBar.darkColor,o.vars.palette[r.color].contrastText)},{backgroundColor:"var(--AppBar-background)",color:"inherit"===r.color?"inherit":"var(--AppBar-color)"},"transparent"===r.color&&{backgroundImage:"none",backgroundColor:"transparent",color:"inherit"}))})),T=j.forwardRef((function(e,o){var r=(0,B.Z)({props:e,name:"MuiAppBar"}),t=r.className,n=r.color,a=void 0===n?"primary":n,i=r.enableColorOnDark,c=void 0!==i&&i,s=r.position,u=void 0===s?"fixed":s,d=(0,k.Z)(r,O),p=(0,y.Z)({},r,{color:a,position:u,enableColorOnDark:c}),f=function(e){var o=e.color,r=e.position,t=e.classes,n={root:["root","color".concat((0,R.Z)(o)),"position".concat((0,R.Z)(r))]};return(0,z.Z)(n,A,t)}(p);return(0,l.jsx)(D,(0,y.Z)({square:!0,component:"header",ownerState:p,elevation:4,className:(0,C.Z)(f.root,t,"fixed"===u&&"mui-fixed"),ref:o},d))})),_=r(4942);function F(e){return(0,M.Z)("MuiToolbar",e)}(0,I.Z)("MuiToolbar",["root","gutters","regular","dense"]);var N=["className","component","disableGutters","variant"],P=(0,w.ZP)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:function(e,o){var r=e.ownerState;return[o.root,!r.disableGutters&&o.gutters,o[r.variant]]}})((function(e){var o=e.theme,r=e.ownerState;return(0,y.Z)({position:"relative",display:"flex",alignItems:"center"},!r.disableGutters&&(0,_.Z)({paddingLeft:o.spacing(2),paddingRight:o.spacing(2)},o.breakpoints.up("sm"),{paddingLeft:o.spacing(3),paddingRight:o.spacing(3)}),"dense"===r.variant&&{minHeight:48})}),(function(e){var o=e.theme;return"regular"===e.ownerState.variant&&o.mixins.toolbar})),G=j.forwardRef((function(e,o){var r=(0,B.Z)({props:e,name:"MuiToolbar"}),t=r.className,n=r.component,a=void 0===n?"div":n,i=r.disableGutters,c=void 0!==i&&i,s=r.variant,u=void 0===s?"regular":s,d=(0,k.Z)(r,N),p=(0,y.Z)({},r,{component:a,disableGutters:c,variant:u}),f=function(e){var o=e.classes,r={root:["root",!e.disableGutters&&"gutters",e.variant]};return(0,z.Z)(r,F,o)}(p);return(0,l.jsx)(P,(0,y.Z)({as:a,className:(0,C.Z)(f.root,t),ref:o,ownerState:p},d))})),E=function(){var e=(0,p.a)().isLoggedIn;return(0,l.jsx)(T,{position:"static",children:(0,l.jsxs)(G,{children:[(0,l.jsx)(n.Z,{sx:{flexGrow:1},children:(0,l.jsx)(v,{})}),(0,l.jsx)(n.Z,{sx:{display:"flex",justifyContent:"center"},children:e?(0,l.jsx)(b,{}):(0,l.jsx)(c,{})})]})})},H=r(7689);function q(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(E,{}),(0,l.jsx)(j.Suspense,{fallback:null,children:(0,l.jsx)(H.j3,{})})]})}},7541:function(e,o,r){"use strict";var t=r(4836);o.Z=void 0;var n=t(r(5649)),a=r(184),i=(0,n.default)((0,a.jsx)("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),"Home");o.Z=i},6488:function(e,o,r){"use strict";var t=r(4836);o.Z=void 0;var n=t(r(5649)),a=r(184),i=(0,n.default)((0,a.jsx)("path",{d:"m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"}),"Logout");o.Z=i},5649:function(e,o,r){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"default",{enumerable:!0,get:function(){return t.createSvgIcon}});var t=r(4454)},3400:function(e,o,r){"use strict";r.d(o,{Z:function(){return k}});var t=r(4942),n=r(3366),a=r(7462),i=r(2791),l=r(8182),c=r(4419),s=r(2065),u=r(6934),d=r(1402),p=r(335),f=r(4036),v=r(5878),g=r(1217);function h(e){return(0,g.Z)("MuiIconButton",e)}var Z=(0,v.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),x=r(184),m=["edge","children","className","color","disabled","disableFocusRipple","size"],b=(0,u.ZP)(p.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:function(e,o){var r=e.ownerState;return[o.root,"default"!==r.color&&o["color".concat((0,f.Z)(r.color))],r.edge&&o["edge".concat((0,f.Z)(r.edge))],o["size".concat((0,f.Z)(r.size))]]}})((function(e){var o=e.theme,r=e.ownerState;return(0,a.Z)({textAlign:"center",flex:"0 0 auto",fontSize:o.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(o.vars||o).palette.action.active,transition:o.transitions.create("background-color",{duration:o.transitions.duration.shortest})},!r.disableRipple&&{"&:hover":{backgroundColor:o.vars?"rgba(".concat(o.vars.palette.action.activeChannel," / ").concat(o.vars.palette.action.hoverOpacity,")"):(0,s.Fq)(o.palette.action.active,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===r.edge&&{marginLeft:"small"===r.size?-3:-12},"end"===r.edge&&{marginRight:"small"===r.size?-3:-12})}),(function(e){var o,r=e.theme,n=e.ownerState,i=null==(o=(r.vars||r).palette)?void 0:o[n.color];return(0,a.Z)({},"inherit"===n.color&&{color:"inherit"},"inherit"!==n.color&&"default"!==n.color&&(0,a.Z)({color:null==i?void 0:i.main},!n.disableRipple&&{"&:hover":(0,a.Z)({},i&&{backgroundColor:r.vars?"rgba(".concat(i.mainChannel," / ").concat(r.vars.palette.action.hoverOpacity,")"):(0,s.Fq)(i.main,r.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),"small"===n.size&&{padding:5,fontSize:r.typography.pxToRem(18)},"large"===n.size&&{padding:12,fontSize:r.typography.pxToRem(28)},(0,t.Z)({},"&.".concat(Z.disabled),{backgroundColor:"transparent",color:(r.vars||r).palette.action.disabled}))})),k=i.forwardRef((function(e,o){var r=(0,d.Z)({props:e,name:"MuiIconButton"}),t=r.edge,i=void 0!==t&&t,s=r.children,u=r.className,p=r.color,v=void 0===p?"default":p,g=r.disabled,Z=void 0!==g&&g,k=r.disableFocusRipple,y=void 0!==k&&k,j=r.size,C=void 0===j?"medium":j,z=(0,n.Z)(r,m),w=(0,a.Z)({},r,{edge:i,color:v,disabled:Z,disableFocusRipple:y,size:C}),B=function(e){var o=e.classes,r=e.disabled,t=e.color,n=e.edge,a=e.size,i={root:["root",r&&"disabled","default"!==t&&"color".concat((0,f.Z)(t)),n&&"edge".concat((0,f.Z)(n)),"size".concat((0,f.Z)(a))]};return(0,c.Z)(i,h,o)}(w);return(0,x.jsx)(b,(0,a.Z)({className:(0,l.Z)(B.root,u),centerRipple:!0,focusRipple:!y,disabled:Z,ref:o,ownerState:w},z,{children:s}))}))},4454:function(e,o,r){"use strict";r.r(o),r.d(o,{capitalize:function(){return n.Z},createChainedFunction:function(){return a},createSvgIcon:function(){return i.Z},debounce:function(){return l.Z},deprecatedPropType:function(){return c},isMuiElement:function(){return s.Z},ownerDocument:function(){return u.Z},ownerWindow:function(){return d.Z},requirePropFactory:function(){return p},setRef:function(){return f},unstable_ClassNameGenerator:function(){return k},unstable_useEnhancedEffect:function(){return v.Z},unstable_useId:function(){return g},unsupportedProp:function(){return h},useControlled:function(){return Z.Z},useEventCallback:function(){return x.Z},useForkRef:function(){return m.Z},useIsFocusVisible:function(){return b.Z}});var t=r(5902),n=r(4036),a=r(8949).Z,i=r(9201),l=r(3199);var c=function(e,o){return function(){return null}},s=r(9103),u=r(8301),d=r(7602);r(7462);var p=function(e,o){return function(){return null}},f=r(2971).Z,v=r(162),g=r(6248).Z;var h=function(e,o,r,t,n){return null},Z=r(8744),x=r(9683),m=r(2071),b=r(3031),k={configure:function(e){t.Z.configure(e)}}},4836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=566.f67bee88.chunk.js.map