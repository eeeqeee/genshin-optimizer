import{at as L,as as j,au as G,aQ as _,aS as z,av as u,aU as R,e as v,aw as N,ax as S,j as U,ay as h,az as E,cs as A,a3 as O}from"./index-0933f9f9.js";function F(o){return j("MuiToggleButton",o)}const D=L("MuiToggleButton",["root","disabled","selected","standard","primary","secondary","sizeSmall","sizeMedium","sizeLarge"]),m=D,H=["children","className","color","disabled","disableFocusRipple","fullWidth","onChange","onClick","selected","size","value"],Q=o=>{const{classes:e,fullWidth:t,selected:r,disabled:i,size:d,color:g}=o,c={root:["root",r&&"selected",i&&"disabled",t&&"fullWidth",`size${z(d)}`,g]};return E(c,F,e)},V=G(_,{name:"MuiToggleButton",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,e[`size${z(t.size)}`]]}})(({theme:o,ownerState:e})=>{let t=e.color==="standard"?o.palette.text.primary:o.palette[e.color].main,r;return o.vars&&(t=e.color==="standard"?o.vars.palette.text.primary:o.vars.palette[e.color].main,r=e.color==="standard"?o.vars.palette.text.primaryChannel:o.vars.palette[e.color].mainChannel),u({},o.typography.button,{borderRadius:(o.vars||o).shape.borderRadius,padding:11,border:`1px solid ${(o.vars||o).palette.divider}`,color:(o.vars||o).palette.action.active},e.fullWidth&&{width:"100%"},{[`&.${m.disabled}`]:{color:(o.vars||o).palette.action.disabled,border:`1px solid ${(o.vars||o).palette.action.disabledBackground}`},"&:hover":{textDecoration:"none",backgroundColor:o.vars?`rgba(${o.vars.palette.text.primaryChannel} / ${o.vars.palette.action.hoverOpacity})`:R(o.palette.text.primary,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${m.selected}`]:{color:t,backgroundColor:o.vars?`rgba(${r} / ${o.vars.palette.action.selectedOpacity})`:R(t,o.palette.action.selectedOpacity),"&:hover":{backgroundColor:o.vars?`rgba(${r} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.hoverOpacity}))`:R(t,o.palette.action.selectedOpacity+o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:o.vars?`rgba(${r} / ${o.vars.palette.action.selectedOpacity})`:R(t,o.palette.action.selectedOpacity)}}}},e.size==="small"&&{padding:7,fontSize:o.typography.pxToRem(13)},e.size==="large"&&{padding:15,fontSize:o.typography.pxToRem(15)})}),q=v.forwardRef(function(e,t){const r=N({props:e,name:"MuiToggleButton"}),{children:i,className:d,color:g="standard",disabled:c=!1,disableFocusRipple:T=!1,fullWidth:C=!1,onChange:n,onClick:$,selected:x,size:s="medium",value:f}=r,y=S(r,H),b=u({},r,{color:g,disabled:c,disableFocusRipple:T,fullWidth:C,size:s}),k=Q(b),M=a=>{$&&($(a,f),a.defaultPrevented)||n&&n(a,f)};return U.jsx(V,u({className:h(k.root,d),disabled:c,focusRipple:!T,ref:t,onClick:M,onChange:n,value:f,ownerState:b,"aria-pressed":x},y,{children:i}))}),ao=q;function I(o,e){return e===void 0||o===void 0?!1:Array.isArray(e)?e.indexOf(o)>=0:o===e}function J(o){return j("MuiToggleButtonGroup",o)}const X=L("MuiToggleButtonGroup",["root","selected","vertical","disabled","grouped","groupedHorizontal","groupedVertical"]),l=X,Y=["children","className","color","disabled","exclusive","fullWidth","onChange","orientation","size","value"],Z=o=>{const{classes:e,orientation:t,fullWidth:r,disabled:i}=o,d={root:["root",t==="vertical"&&"vertical",r&&"fullWidth"],grouped:["grouped",`grouped${z(t)}`,i&&"disabled"]};return E(d,J,e)},K=G("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[{[`& .${l.grouped}`]:e.grouped},{[`& .${l.grouped}`]:e[`grouped${z(t.orientation)}`]},e.root,t.orientation==="vertical"&&e.vertical,t.fullWidth&&e.fullWidth]}})(({ownerState:o,theme:e})=>u({display:"inline-flex",borderRadius:(e.vars||e).shape.borderRadius},o.orientation==="vertical"&&{flexDirection:"column"},o.fullWidth&&{width:"100%"},{[`& .${l.grouped}`]:u({},o.orientation==="horizontal"?{"&:not(:first-of-type)":{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-of-type)":{borderTopRightRadius:0,borderBottomRightRadius:0},[`&.${l.selected} + .${l.grouped}.${l.selected}`]:{borderLeft:0,marginLeft:0}}:{"&:not(:first-of-type)":{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},"&:not(:last-of-type)":{borderBottomLeftRadius:0,borderBottomRightRadius:0},[`&.${l.selected} + .${l.grouped}.${l.selected}`]:{borderTop:0,marginTop:0}})})),oo=v.forwardRef(function(e,t){const r=N({props:e,name:"MuiToggleButtonGroup"}),{children:i,className:d,color:g="standard",disabled:c=!1,exclusive:T=!1,fullWidth:C=!1,onChange:n,orientation:$="horizontal",size:x="medium",value:s}=r,f=S(r,Y),y=u({},r,{disabled:c,fullWidth:C,orientation:$,size:x}),b=Z(y),k=(a,p)=>{if(!n)return;const W=s&&s.indexOf(p);let B;s&&W>=0?(B=s.slice(),B.splice(W,1)):B=s?s.concat(p):[p],n(a,B)},M=(a,p)=>{n&&n(a,s===p?null:p)};return U.jsx(K,u({role:"group",className:h(b.root,d),ref:t,ownerState:y},f,{children:v.Children.map(i,a=>v.isValidElement(a)?v.cloneElement(a,{className:h(b.grouped,a.props.className),onChange:T?M:k,selected:a.props.selected===void 0?I(a.props.value,s):a.props.selected,size:a.props.size||x,fullWidth:C,color:a.props.color||g,disabled:a.props.disabled||c}):null)}))}),eo=oo;function so(o){return(e,t)=>{const r=e.length;return r===o.length?[t]:r===1&&e[0]===t?[...o]:[...new Set(A(e,t))]}}const to=G(eo,{shouldForwardProp:o=>o!=="baseColor"&&o!=="selectedColor"})(({theme:o,baseColor:e="secondary",selectedColor:t="success"})=>({"& .MuiToggleButtonGroup-grouped":{"&":{backgroundColor:o.palette[e].main,color:o.palette[e].contrastText},"&:hover":{backgroundColor:o.palette[e].dark,transition:"background-color 0.25s ease"},"&.Mui-selected":{backgroundColor:o.palette[t].main,color:o.palette[t].contrastText},"&.Mui-selected:hover":{backgroundColor:o.palette[t].dark},"&.Mui-disabled":{backgroundColor:o.palette[e].dark},"&.Mui-selected.Mui-disabled":{backgroundColor:o.palette[t].dark}}})),lo=to;function no(o,e){const t=O(o,r=>w(r));return e(t),O(t,r=>P(r))}function io(o,e){const t=w(o);return e(t),P(t)}function w(o){return Object.fromEntries(o.map(e=>[e,{total:0,current:0}]))}function P(o){return O(o,({total:e,current:t})=>t===e?`${e}`:`${t}/${e}`)}export{lo as S,ao as T,eo as a,no as b,io as c,so as h};
