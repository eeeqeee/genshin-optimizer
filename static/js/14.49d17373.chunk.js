(this["webpackJsonpgenshin-optimizer"]=this["webpackJsonpgenshin-optimizer"]||[]).push([[14],{107:function(e,t,a){"use strict";var n=a(2),r=a(4),c=a(5),i=a.n(c),o=a(0),s=a.n(o),l=a(7),u=a(54),f=s.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.variant,o=e.size,f=e.active,d=e.className,b=e.block,m=e.type,v=e.as,p=Object(r.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),O=Object(l.a)(a,"btn"),j=i()(d,O,f&&"active",c&&O+"-"+c,b&&O+"-block",o&&O+"-"+o);if(p.href)return s.a.createElement(u.a,Object(n.a)({},p,{as:v,ref:t,className:i()(j,p.disabled&&"disabled")}));t&&(p.ref=t),m?p.type=m:v||(p.type="button");var y=v||"button";return s.a.createElement(y,Object(n.a)({},p,{className:j}))}));f.displayName="Button",f.defaultProps={variant:"primary",active:!1,disabled:!1},t.a=f},122:function(e,t,a){"use strict";var n,r=a(2),c=a(4),i=a(5),o=a.n(i),s=a(0),l=a.n(s),u=a(26),f=a(57),d=a(56),b=((n={})[u.b]="show",n[u.a]="show",n),m=l.a.forwardRef((function(e,t){var a=e.className,n=e.children,i=Object(c.a)(e,["className","children"]),m=Object(s.useCallback)((function(e){Object(d.a)(e),i.onEnter&&i.onEnter(e)}),[i]);return l.a.createElement(u.e,Object(r.a)({ref:t,addEndListener:f.a},i,{onEnter:m}),(function(e,t){return l.a.cloneElement(n,Object(r.a)({},t,{className:o()("fade",a,n.props.className,b[e])}))}))}));m.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},m.displayName="Fade",t.a=m},123:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(35);function r(e,t){var a;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=Object(n.a)(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var r=0,c=function(){};return{s:c,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==a.return||a.return()}finally{if(s)throw i}}}}},126:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return n}))},132:function(e,t,a){"use strict";function n(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}a.d(t,"a",(function(){return n}))},134:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0);function r(){var e=Object(n.useRef)(!0),t=Object(n.useRef)((function(){return e.current}));return Object(n.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}},135:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0);function r(){return Object(n.useState)(null)}},136:function(e,t,a){"use strict";var n=a(2),r=a(4),c=a(5),i=a.n(c),o=a(0),s=a.n(o),l=a(7),u=s.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.variant,o=e.pill,u=e.className,f=e.as,d=void 0===f?"span":f,b=Object(r.a)(e,["bsPrefix","variant","pill","className","as"]),m=Object(l.a)(a,"badge");return s.a.createElement(d,Object(n.a)({ref:t},b,{className:i()(u,m,o&&m+"-pill",c&&m+"-"+c)}))}));u.displayName="Badge",u.defaultProps={pill:!1},t.a=u},140:function(e,t,a){"use strict";var n=a(2),r=a(4),c=a(5),i=a.n(c),o=a(0),s=a.n(o),l=a(7),u=s.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.size,o=e.toggle,u=e.vertical,f=e.className,d=e.as,b=void 0===d?"div":d,m=Object(r.a)(e,["bsPrefix","size","toggle","vertical","className","as"]),v=Object(l.a)(a,"btn-group"),p=v;return u&&(p=v+"-vertical"),s.a.createElement(b,Object(n.a)({},m,{ref:t,className:i()(f,p,c&&v+"-"+c,o&&v+"-toggle")}))}));u.displayName="ButtonGroup",u.defaultProps={vertical:!1,toggle:!1,role:"group"},t.a=u},144:function(e,t,a){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,n(e,t)}a.d(t,"a",(function(){return r}))},145:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0);function r(e){var t=function(e){var t=Object(n.useRef)(e);return t.current=e,t}(e);Object(n.useEffect)((function(){return function(){return t.current()}}),[])}},146:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(53),r=a(0),c=function(e){var t;return"undefined"===typeof document?null:null==e?Object(n.a)().body:("function"===typeof e&&(e=e()),e&&"current"in e&&(e=e.current),null!=(t=e)&&t.nodeType&&e||null)};function i(e,t){var a=Object(r.useState)((function(){return c(e)})),n=a[0],i=a[1];if(!n){var o=c(e);o&&i(o)}return Object(r.useEffect)((function(){t&&n&&t(n)}),[t,n]),Object(r.useEffect)((function(){var t=c(e);t!==n&&i(t)}),[e,n]),n}},154:function(e,t,a){"use strict";var n=a(2),r=a(4),c=a(5),i=a.n(c),o=a(0),s=a.n(o),l=a(3),u=a.n(l),f=a(7),d=(u.a.string,u.a.bool,u.a.bool,u.a.bool,u.a.bool,s.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,o=e.fluid,l=e.rounded,u=e.roundedCircle,d=e.thumbnail,b=Object(r.a)(e,["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"]);a=Object(f.a)(a,"img");var m=i()(o&&a+"-fluid",l&&"rounded",u&&"rounded-circle",d&&a+"-thumbnail");return s.a.createElement("img",Object(n.a)({ref:t},b,{className:i()(c,m)}))})));d.displayName="Image",d.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},t.a=d},159:function(e,t,a){"use strict";var n=a(2),r=a(4),c=a(3),i=a.n(c),o=a(0),s=a.n(o),l=a(5),u=a.n(l),f={label:i.a.string.isRequired,onClick:i.a.func},d=s.a.forwardRef((function(e,t){var a=e.label,c=e.onClick,i=e.className,o=Object(r.a)(e,["label","onClick","className"]);return s.a.createElement("button",Object(n.a)({ref:t,type:"button",className:u()("close",i),onClick:c},o),s.a.createElement("span",{"aria-hidden":"true"},"\xd7"),s.a.createElement("span",{className:"sr-only"},a))}));d.displayName="CloseButton",d.propTypes=f,d.defaultProps={label:"Close"},t.a=d},165:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0),r=a.n(n);function c(e,t){var a=0;return r.a.Children.map(e,(function(e){return r.a.isValidElement(e)?t(e,a++):e}))}},169:function(e,t,a){"use strict";function n(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}a.d(t,"a",(function(){return n}))},172:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0);function r(e){var t=Object(n.useRef)(null);return Object(n.useEffect)((function(){t.current=e})),t.current}},175:function(e,t,a){"use strict";var n=a(2),r=a(4),c=a(5),i=a.n(c),o=a(0),s=a.n(o),l=a(107),u=function(){},f=s.a.forwardRef((function(e,t){var a=e.children,c=e.name,f=e.className,d=e.checked,b=e.type,m=e.onChange,v=e.value,p=e.disabled,O=e.inputRef,j=Object(r.a)(e,["children","name","className","checked","type","onChange","value","disabled","inputRef"]),y=Object(o.useState)(!1),N=y[0],h=y[1],P=Object(o.useCallback)((function(e){"INPUT"===e.target.tagName&&h(!0)}),[]),x=Object(o.useCallback)((function(e){"INPUT"===e.target.tagName&&h(!1)}),[]);return s.a.createElement(l.a,Object(n.a)({},j,{ref:t,className:i()(f,N&&"focus",p&&"disabled"),type:void 0,active:!!d,as:"label"}),s.a.createElement("input",{name:c,type:b,value:v,ref:O,autoComplete:"off",checked:!!d,disabled:!!p,onFocus:P,onBlur:x,onChange:m||u}),a)}));f.displayName="ToggleButton",t.a=f},203:function(e,t,a){"use strict";var n=a(2),r=a(4),c=a(0),i=a.n(c),o=a(43),s=a.n(o),l=a(33),u=a(22),f=a(165),d=a(140),b=a(175),m=i.a.forwardRef((function(e,t){var a=Object(l.a)(e,{value:"onChange"}),c=a.children,o=a.type,b=a.name,m=a.value,v=a.onChange,p=Object(r.a)(a,["children","type","name","value","onChange"]),O=function(){return null==m?[]:[].concat(m)};return"radio"!==o||b||s()(!1),i.a.createElement(d.a,Object(n.a)({},p,{ref:t,toggle:!0}),Object(f.a)(c,(function(e){var t=O(),a=e.props,n=a.value,r=a.onChange;return i.a.cloneElement(e,{type:o,name:e.name||b,checked:-1!==t.indexOf(n),onChange:Object(u.a)(r,(function(e){return function(e,t){if(v){var a=O(),n=-1!==a.indexOf(e);"radio"!==o?v(n?a.filter((function(t){return t!==e})):[].concat(a,[e]),t):!n&&v&&v(e,t)}}(n,e)}))})})))}));m.defaultProps={type:"radio",vertical:!1},m.Button=b.a,t.a=m},234:function(e,t,a){"use strict";var n=a(2),r=a(4),c=a(5),i=a.n(c),o=a(0),s=a.n(o),l=(a(78),a(155)),u=a(108),f=a(7),d=s.a.forwardRef((function(e,t){var a=e.id,c=e.bsPrefix,l=e.bsCustomPrefix,d=e.className,b=e.type,m=void 0===b?"checkbox":b,v=e.isValid,p=void 0!==v&&v,O=e.isInvalid,j=void 0!==O&&O,y=e.isStatic,N=e.as,h=void 0===N?"input":N,P=Object(r.a)(e,["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"]),x=Object(o.useContext)(u.a),E=x.controlId,g=x.custom?[l,"custom-control-input"]:[c,"form-check-input"],C=g[0],w=g[1];return c=Object(f.a)(C,w),s.a.createElement(h,Object(n.a)({},P,{ref:t,type:m,id:a||E,className:i()(d,c,p&&"is-valid",j&&"is-invalid",y&&"position-static")}))}));d.displayName="FormCheckInput";var b=d,m=s.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.bsCustomPrefix,l=e.className,d=e.htmlFor,b=Object(r.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),m=Object(o.useContext)(u.a),v=m.controlId,p=m.custom?[c,"custom-control-label"]:[a,"form-check-label"],O=p[0],j=p[1];return a=Object(f.a)(O,j),s.a.createElement("label",Object(n.a)({},b,{ref:t,htmlFor:d||v,className:i()(l,a)}))}));m.displayName="FormCheckLabel";var v=m,p=s.a.forwardRef((function(e,t){var a=e.id,c=e.bsPrefix,d=e.bsCustomPrefix,m=e.inline,p=void 0!==m&&m,O=e.disabled,j=void 0!==O&&O,y=e.isValid,N=void 0!==y&&y,h=e.isInvalid,P=void 0!==h&&h,x=e.feedbackTooltip,E=void 0!==x&&x,g=e.feedback,C=e.className,w=e.style,k=e.title,I=void 0===k?"":k,R=e.type,F=void 0===R?"checkbox":R,L=e.label,S=e.children,T=e.custom,V=e.as,B=void 0===V?"input":V,z=Object(r.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"]),D="switch"===F||T,A=D?[d,"custom-control"]:[c,"form-check"],M=A[0],_=A[1];c=Object(f.a)(M,_);var G=Object(o.useContext)(u.a).controlId,H=Object(o.useMemo)((function(){return{controlId:a||G,custom:D}}),[G,D,a]),J=D||null!=L&&!1!==L&&!S,U=s.a.createElement(b,Object(n.a)({},z,{type:"switch"===F?"checkbox":F,ref:t,isValid:N,isInvalid:P,isStatic:!J,disabled:j,as:B}));return s.a.createElement(u.a.Provider,{value:H},s.a.createElement("div",{style:w,className:i()(C,c,D&&"custom-"+F,p&&c+"-inline")},S||s.a.createElement(s.a.Fragment,null,U,J&&s.a.createElement(v,{title:I},L),(N||P)&&s.a.createElement(l.a,{type:N?"valid":"invalid",tooltip:E},g))))}));p.displayName="FormCheck",p.Input=b,p.Label=v;var O=p,j=s.a.forwardRef((function(e,t){var a=e.id,c=e.bsPrefix,l=e.bsCustomPrefix,d=e.className,b=e.isValid,m=e.isInvalid,v=e.lang,p=e.as,O=void 0===p?"input":p,j=Object(r.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"]),y=Object(o.useContext)(u.a),N=y.controlId,h=y.custom?[l,"custom-file-input"]:[c,"form-control-file"],P=h[0],x=h[1];return c=Object(f.a)(P,x),s.a.createElement(O,Object(n.a)({},j,{ref:t,id:a||N,type:"file",lang:v,className:i()(d,c,b&&"is-valid",m&&"is-invalid")}))}));j.displayName="FormFileInput";var y=j,N=s.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.bsCustomPrefix,l=e.className,d=e.htmlFor,b=Object(r.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),m=Object(o.useContext)(u.a),v=m.controlId,p=m.custom?[c,"custom-file-label"]:[a,"form-file-label"],O=p[0],j=p[1];return a=Object(f.a)(O,j),s.a.createElement("label",Object(n.a)({},b,{ref:t,htmlFor:d||v,className:i()(l,a),"data-browse":b["data-browse"]}))}));N.displayName="FormFileLabel";var h=N,P=s.a.forwardRef((function(e,t){var a=e.id,c=e.bsPrefix,d=e.bsCustomPrefix,b=e.disabled,m=void 0!==b&&b,v=e.isValid,p=void 0!==v&&v,O=e.isInvalid,j=void 0!==O&&O,N=e.feedbackTooltip,P=void 0!==N&&N,x=e.feedback,E=e.className,g=e.style,C=e.label,w=e.children,k=e.custom,I=e.lang,R=e["data-browse"],F=e.as,L=void 0===F?"div":F,S=e.inputAs,T=void 0===S?"input":S,V=Object(r.a)(e,["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"]),B=k?[d,"custom"]:[c,"form-file"],z=B[0],D=B[1];c=Object(f.a)(z,D);var A=Object(o.useContext)(u.a).controlId,M=Object(o.useMemo)((function(){return{controlId:a||A,custom:k}}),[A,k,a]),_=null!=C&&!1!==C&&!w,G=s.a.createElement(y,Object(n.a)({},V,{ref:t,isValid:p,isInvalid:j,disabled:m,as:T,lang:I}));return s.a.createElement(u.a.Provider,{value:M},s.a.createElement(L,{style:g,className:i()(E,c,k&&"custom-file")},w||s.a.createElement(s.a.Fragment,null,k?s.a.createElement(s.a.Fragment,null,G,_&&s.a.createElement(h,{"data-browse":R},C)):s.a.createElement(s.a.Fragment,null,_&&s.a.createElement(h,null,C),G),(p||j)&&s.a.createElement(l.a,{type:p?"valid":"invalid",tooltip:P},x))))}));P.displayName="FormFile",P.Input=y,P.Label=h;var x=P,E=a(147),g=s.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,l=e.children,d=e.controlId,b=e.as,m=void 0===b?"div":b,v=Object(r.a)(e,["bsPrefix","className","children","controlId","as"]);a=Object(f.a)(a,"form-group");var p=Object(o.useMemo)((function(){return{controlId:d}}),[d]);return s.a.createElement(u.a.Provider,{value:p},s.a.createElement(m,Object(n.a)({},v,{ref:t,className:i()(c,a)}),l))}));g.displayName="FormGroup";var C=g,w=(a(77),a(41)),k=s.a.forwardRef((function(e,t){var a=e.as,c=void 0===a?"label":a,l=e.bsPrefix,d=e.column,b=e.srOnly,m=e.className,v=e.htmlFor,p=Object(r.a)(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),O=Object(o.useContext)(u.a).controlId;l=Object(f.a)(l,"form-label");var j="col-form-label";"string"===typeof d&&(j=j+" "+j+"-"+d);var y=i()(m,l,b&&"sr-only",d&&j);return v=v||O,d?s.a.createElement(w.a,Object(n.a)({as:"label",className:y,htmlFor:v},p)):s.a.createElement(c,Object(n.a)({ref:t,className:y,htmlFor:v},p))}));k.displayName="FormLabel",k.defaultProps={column:!1,srOnly:!1};var I=k,R=s.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,o=e.as,l=void 0===o?"small":o,u=e.muted,d=Object(r.a)(e,["bsPrefix","className","as","muted"]);return a=Object(f.a)(a,"form-text"),s.a.createElement(l,Object(n.a)({},d,{ref:t,className:i()(c,a,u&&"text-muted")}))}));R.displayName="FormText";var F=R,L=s.a.forwardRef((function(e,t){return s.a.createElement(O,Object(n.a)({},e,{ref:t,type:"switch"}))}));L.displayName="Switch",L.Input=O.Input,L.Label=O.Label;var S=L,T=a(15),V=Object(T.a)("form-row"),B=s.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.inline,o=e.className,l=e.validated,u=e.as,d=void 0===u?"form":u,b=Object(r.a)(e,["bsPrefix","inline","className","validated","as"]);return a=Object(f.a)(a,"form"),s.a.createElement(d,Object(n.a)({},b,{ref:t,className:i()(o,l&&"was-validated",c&&a+"-inline")}))}));B.displayName="Form",B.defaultProps={inline:!1},B.Row=V,B.Group=C,B.Control=E.a,B.Check=O,B.File=x,B.Switch=S,B.Label=I,B.Text=F;t.a=B},285:function(e,t,a){"use strict";var n=a(2),r=a(4),c=a(0),i=a.n(c),o=a(5),s=a.n(o),l=a(133),u=a(122),f=a(34),d=a(7),b=a(159),m=i.a.createContext({onClose:function(){}}),v=i.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.closeLabel,l=e.closeButton,u=e.className,v=e.children,p=Object(r.a)(e,["bsPrefix","closeLabel","closeButton","className","children"]);a=Object(d.a)(a,"toast-header");var O=Object(c.useContext)(m),j=Object(f.a)((function(e){O&&O.onClose&&O.onClose(e)}));return i.a.createElement("div",Object(n.a)({ref:t},p,{className:s()(a,u)}),v,l&&i.a.createElement(b.a,{label:o,onClick:j,className:"ml-2 mb-1","data-dismiss":"toast"}))}));v.displayName="ToastHeader",v.defaultProps={closeLabel:"Close",closeButton:!0};var p=v,O=a(15),j=Object(O.a)("toast-body"),y=i.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,f=e.children,b=e.transition,v=void 0===b?u.a:b,p=e.show,O=void 0===p||p,j=e.animation,y=void 0===j||j,N=e.delay,h=void 0===N?3e3:N,P=e.autohide,x=void 0!==P&&P,E=e.onClose,g=Object(r.a)(e,["bsPrefix","className","children","transition","show","animation","delay","autohide","onClose"]);a=Object(d.a)(a,"toast");var C=Object(c.useRef)(h),w=Object(c.useRef)(E);Object(c.useEffect)((function(){C.current=h,w.current=E}),[h,E]);var k=Object(l.a)(),I=!(!x||!O),R=Object(c.useCallback)((function(){I&&(null==w.current||w.current())}),[I]);Object(c.useEffect)((function(){k.set(R,C.current)}),[k,R]);var F=Object(c.useMemo)((function(){return{onClose:E}}),[E]),L=!(!v||!y),S=i.a.createElement("div",Object(n.a)({},g,{ref:t,className:s()(a,o,!L&&(O?"show":"hide")),role:"alert","aria-live":"assertive","aria-atomic":"true"}),f);return i.a.createElement(m.Provider,{value:F},L&&v?i.a.createElement(v,{in:O,unmountOnExit:!0},S):S)}));y.displayName="Toast";t.a=Object.assign(y,{Body:j,Header:p})},99:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(126);function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}}}]);
//# sourceMappingURL=14.49d17373.chunk.js.map