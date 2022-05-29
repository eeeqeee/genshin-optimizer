"use strict";(self.webpackChunkgenshin_optimizer=self.webpackChunkgenshin_optimizer||[]).push([[328],{31038:function(e,t,n){n.d(t,{Z:function(){return I}});var r=n(1413),i=n(93433),a=n(45987),l=n(53174),o=n(54483),c=n(63204),u=n(14361),s=n(13967),d=n(14868),f=n(47047),v=n(20890),p=n(68870),h=n(72791),x=n(22020),Z=n(947),y=n(56928),m=n(42320),g=n(24351),b=n(50921),j=n(46956),k=n(610),C=n(68244),w=n(2380),E=n(80184),S=["value","onChange","defaultText","defaultIcon","placeholderText","labelText","showDefault","showInventory","showEquipped","filter","disable"];function I(e){var t=e.value,n=e.onChange,I=e.defaultText,M=void 0===I?"":I,F=e.defaultIcon,P=void 0===F?"":F,_=e.placeholderText,A=void 0===_?"":_,K=e.labelText,R=void 0===K?"":K,O=e.showDefault,T=void 0!==O&&O,G=e.showInventory,V=void 0!==G&&G,D=e.showEquipped,q=void 0!==D&&D,N=e.filter,z=void 0===N?function(){return!0}:N,B=e.disable,L=void 0===B?function(){return!1}:B,W=(0,a.Z)(e,S),H=(0,x.$)(["ui","artifact"].concat((0,i.Z)(g.IV.map((function(e){return"char_".concat(e,"_gen")}))))).t,U=(0,s.Z)(),$=(0,h.useContext)(y.t).database,Q=(0,m.Z)(Z.Z.getAll,[]),X=(0,h.useMemo)((function(){return Q&&(0,b.zU)($,Q)}),[$,Q]),J=$._getCharKeys().filter((function(e){return(null===Q||void 0===Q?void 0:Q[e])&&z(Q[e],e)})).sort(),Y=(0,h.useCallback)((function(e){switch(e){case"Equipped":return H("artifact:filterLocation.currentlyEquipped");case"Inventory":return H("artifact:filterLocation.inventory");case"":return M;default:return H("char_".concat(e,"_gen:name"))}}),[M,H]),ee=(0,h.useCallback)((function(e){var t;switch(e){case"Equipped":return(0,E.jsx)(o.G,{icon:l.caW});case"Inventory":return(0,E.jsx)(c.Z,{});case"":return P;default:return(0,E.jsx)(w.Z,{src:null===(t=Q[e])||void 0===t?void 0:t.thumbImgSide,sx:{pr:1}})}}),[P,Q]),te=(0,h.useMemo)((function(){return X&&function(e,t,n,r,i,a){if(!t)return[];var l=[];r&&l.push({value:"",label:n("")});i&&l.push({value:"Inventory",label:n("Inventory")});a&&l.push({value:"Equipped",label:n("Equipped")});var o=e.filter((0,j.C)({element:"",weaponType:"",favorite:"yes",name:""},t)).map((function(e){return{value:e,label:n(e)}})),c=e.filter((0,j.C)({element:"",weaponType:"",favorite:"no",name:""},t)).map((function(e){return{value:e,label:n(e)}}));return l.concat(o).concat(c)}(J,X,Y,T,V,q)}),[X,J,T,V,q,Y]);return Q&&te?(0,E.jsx)(d.Z,(0,r.Z)({autoHighlight:!0,options:te,getOptionLabel:function(e){return e.label},onChange:function(e,t){return n(t?t.value:"")},isOptionEqualToValue:function(e,t){return e.value===t.value},getOptionDisabled:function(e){return!!e.value&&L(e.value)},value:{value:t,label:Y(t)},renderInput:function(e){return(0,E.jsx)(C.Z,(0,r.Z)((0,r.Z)({},e),{},{label:R,placeholder:A,startAdornment:ee(t),hasValue:!!t}))},renderOption:function(e,n){var r,i="Equipped"!==n.value&&"Inventory"!==n.value&&""!==n.value&&(null===(r=$._getChar(n.value))||void 0===r?void 0:r.favorite);return(0,E.jsx)(k.Z,{value:n.value?n.value:"default",image:ee(n.value),text:(0,E.jsx)(h.Suspense,{fallback:(0,E.jsx)(f.Z,{variant:"text",width:100}),children:(0,E.jsx)(v.Z,{variant:"inherit",noWrap:!0,children:Y(n.value)})}),theme:U,isSelected:t===n.value,addlElement:(0,E.jsxs)(E.Fragment,{children:[i&&(0,E.jsx)(p.Z,{display:"flex",flexGrow:1}),i&&(0,E.jsx)(u.Z,{sx:{ml:1,mr:-.5}})]}),props:e},n.value?n.value:"default")}},W)):null}},40020:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(63204),i=n(20890),a=n(22020),l=n(947),o=n(42320),c=n(80184);function u(e){var t=e.location,n=(0,a.$)("ui").t,u=(0,o.Z)(l.Z.get(null!==t&&void 0!==t?t:""),[t]);return(0,c.jsx)(i.Z,{component:"span",children:null!==u&&void 0!==u&&u.name?u.nameWIthIcon:(0,c.jsxs)("span",{children:[(0,c.jsx)(r.Z,{sx:{verticalAlign:"text-bottom"}})," ",n("inventory")]})})}},2380:function(e,t,n){var r=(0,n(93457).Z)("img")((function(e){var t=e.theme;return{display:"inline-block",width:"auto",height:"2.3em",lineHeight:1,verticalAlign:"text-bottom",marginTop:t.spacing(-3),marginLeft:t.spacing(-1.25),marginRight:t.spacing(-1),marginBottom:t.spacing(-1)}}));t.Z=r},10600:function(e,t,n){n.d(t,{CC:function(){return h},ZP:function(){return x}});var r=n(29439),i=n(1413),a=n(45987),l=n(66934),o=n(4834),c=n(24518),u=n(72791),s=n(80184),d=["children","disableRipple","disableFocusRipple","disableTouchRipple"],f=["value","onChange","disabled","float"],v=(0,l.ZP)(o.ZP)((function(e){var t=e.theme;return{backgroundColor:t.palette.primary.main,transition:"all 0.5s ease","&:hover":{backgroundColor:t.palette.primary.dark},"&.Mui-focused":{backgroundColor:t.palette.primary.dark},"&.Mui-disabled":{backgroundColor:t.palette.primary.dark}}})),p=(0,l.ZP)(c.Z)((function(e){return{backgroundColor:e.theme.palette.primary.main,padding:0,overflow:"hidden",div:{width:"100%",height:"100%"}}}));function h(e){var t=e.children,n=(e.disableRipple,e.disableFocusRipple,e.disableTouchRipple,(0,a.Z)(e,d));return(0,s.jsx)(p,(0,i.Z)((0,i.Z)({disableRipple:!0,disableFocusRipple:!0,disableTouchRipple:!0},n),{},{children:t}))}function x(e){var t=e.value,n=void 0===t?0:t,l=e.onChange,o=e.disabled,c=void 0!==o&&o,d=e.float,p=void 0!==d&&d,h=(0,a.Z)(e,f),x=(0,u.useState)(n),Z=(0,r.Z)(x,2),y=Z[0],m=Z[1],g=(0,u.useState)(!1),b=(0,r.Z)(g,2),j=b[0],k=b[1],C=(0,u.useMemo)((function(){return p?parseFloat:parseInt}),[p]),w=(0,u.useCallback)((function(){l(y),k(!1)}),[l,y,k]),E=(0,u.useCallback)((function(){k(!0)}),[k]);(0,u.useEffect)((function(){return m(n)}),[n,m]);var S=(0,u.useCallback)((function(e){return m(C(e.target.value)||0)}),[m,C]),I=(0,u.useCallback)((function(e){return"Enter"===e.key&&w()}),[w]);return(0,s.jsx)(v,(0,i.Z)({value:j&&!y?"":y,"aria-label":"custom-input",type:"number",inputProps:{step:p?.1:1},onChange:S,onBlur:w,onFocus:E,disabled:c,onKeyDown:I},h))}},55221:function(e,t,n){var r=n(1413),i=n(45987),a=n(53174),l=n(54483),o=n(68870),c=n(96106),u=n(80184),s=["className"];t.Z=function(e){var t=e.className,n=(0,i.Z)(e,s);return(0,u.jsx)(c.Z,(0,r.Z)((0,r.Z)({placement:"top"},n),{},{className:t,children:(0,u.jsx)(o.Z,{component:"span",sx:{cursor:"help"},children:(0,u.jsx)(l.G,{icon:a.sqG})})}))}},610:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(1413),i=n(23786),a=n(57064),l=n(49900),o=n(80184);function c(e){var t=e.value,n=e.image,c=void 0===n?"":n,u=e.text,s=e.theme,d=e.isSelected,f=e.addlElement,v=e.props;return(0,o.jsxs)(i.Z,(0,r.Z)((0,r.Z)({value:t},v),{},{children:[(0,o.jsx)(a.Z,{children:c}),(0,o.jsx)(l.Z,{primaryTypographyProps:{style:{fontWeight:d?s.typography.fontWeightMedium:s.typography.fontWeightRegular}},children:u}),f&&f]}),t)}},68244:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(1413),i=n(45987),a=n(13967),l=n(58165),o=n(80184),c=["hasValue","startAdornment","flattenCorners","InputProps","sx"];function u(e){var t=e.hasValue,n=e.startAdornment,u=e.flattenCorners,s=void 0!==u&&u,d=e.InputProps,f=e.sx,v=(0,i.Z)(e,c),p=(0,a.Z)();return(0,o.jsx)(l.Z,(0,r.Z)((0,r.Z)({},v),{},{variant:"filled",color:t?"success":"primary",hiddenLabel:!v.label,type:"search",InputProps:(0,r.Z)((0,r.Z)({},d),{},{startAdornment:n}),InputLabelProps:{style:{color:p.palette.text.primary}},sx:(0,r.Z)((0,r.Z)({},f),{},{"& .MuiFilledInput-root":{backgroundColor:t?p.palette.success.main:p.palette.primary.main,borderRadius:s?0:1,paddingTop:v.label?void 0:0,paddingBottom:0},"& .MuiFilledInput-root:before":{border:"none"},"& .MuiFilledInput-root:after":{border:"none"},"& .MuiFilledInput-root.Mui-focused":{backgroundColor:t?p.palette.success.light:p.palette.primary.light},"& .MuiFilledInput-root:hover":{backgroundColor:t?p.palette.success.dark:p.palette.primary.dark},"& .MuiFilledInput-root:hover:not(.Mui-disabled):before":{border:"none"}})}))}},14525:function(e,t,n){n.d(t,{Z:function(){return S},b:function(){return I}});var r,i,a=n(29439),l=n(30168),o=n(4942),c=n(1413),u=n(53174),s=n(54483),d=n(39504),f=n(20890),v=n(2199),p=n(23786),h=n(24518),x=n(52791),Z=n(72791),y=n(22020),m=n(2693),g=n(26138),b=n(79406),j=n(71310),k=n(10600),C=n(33890),w=n(55221),E=n(80184);function S(e){var t=e.statFilters,n=void 0===t?{}:t,u=e.setStatFilters,s=e.disabled,v=void 0!==s&&s,p=(0,y.$)("page_character").t,h=(0,Z.useContext)(m.R).data,b=["atk","hp","def","eleMas","critRate_","critDMG_","heal_","enerRech_"];"catalyst"!==h.get(g.ri.weaponType).value&&b.push("physical_dmg_");var k=h.get(g.ri.charEle).value;b.push("".concat(k,"_dmg_"));var C=b.filter((function(e){return!Object.keys(n).some((function(t){return t===e}))})),S=(0,Z.useCallback)((function(e,t){return u((0,c.Z)((0,c.Z)({},n),{},(0,o.Z)({},e,t)))}),[n,u]);return(0,E.jsxs)(x.Z,{children:[(0,E.jsx)(j.Z,{children:(0,E.jsxs)(d.Z,{sx:{display:"flex",gap:1,justifyContent:"space-between"},children:[(0,E.jsx)(f.Z,{children:p(r||(r=(0,l.Z)(["tabOptimize.constraintFilter.title"])))}),(0,E.jsx)(w.Z,{title:(0,E.jsx)(f.Z,{children:p(i||(i=(0,l.Z)(["tabOptimize.constraintFilter.tooltip"])))})})]})}),(0,E.jsxs)(x.Z,{display:"flex",flexDirection:"column",gap:.5,children:[Object.entries(n).map((function(e){var t=(0,a.Z)(e,2),r=t[0],i=t[1];return(0,E.jsx)(I,{statKey:r,statKeys:C,setFilter:S,disabled:v,value:i,close:function(){delete n[r],u((0,c.Z)({},n))}},r)})),(0,E.jsx)(I,{value:void 0,close:void 0,statKeys:C,setFilter:S,disabled:v})]})]})}function I(e){var t=e.statKey,n=e.statKeys,r=void 0===n?[]:n,i=e.value,a=void 0===i?0:i,l=e.close,o=e.setFilter,c=e.disabled,d=void 0!==c&&c,f="%"===b.ZP.unit(t),x=(0,Z.useCallback)((function(e){return t&&o(t,e)}),[o,t]);return(0,E.jsxs)(v.Z,{sx:{width:"100%"},children:[(0,E.jsx)(C.Z,{title:t?b.ZP.get(t):"New Stat",disabled:d,color:t?"success":"secondary",children:r.map((function(e){return(0,E.jsx)(p.Z,{onClick:function(){null===l||void 0===l||l(),o(e,a)},children:b.ZP.get(e)},e)}))}),(0,E.jsx)(k.CC,{sx:{flexBasis:30,flexGrow:1},children:(0,E.jsx)(k.ZP,{disabled:!t,float:f,value:a,placeholder:"Min Value",onChange:x,sx:{px:2}})}),!!l&&(0,E.jsx)(h.Z,{color:"error",onClick:l,disabled:d,children:(0,E.jsx)(s.G,{icon:u.I7k})})]})}},20323:function(e,t,n){function r(){return{tcMode:!1}}n.d(t,{c:function(){return r}})},72838:function(e,t,n){n.d(t,{N:function(){return X},Z:function(){return $}});var r,i,a,l,o=n(30168),c=n(29439),u=n(53174),s=n(54483),d=n(40117),f=n(62002),v=n(63204),p=n(66647),h=n(68870),x=n(20890),Z=n(47047),y=n(13400),m=n(81918),g=n(39504),b=n(2199),j=n(40165),k=n(24518),C=n(72791),w=n(22020),E=n(95614),S=n(71310),I=n(31038),M=n(40020),F=n(91702),P=n(20005),_=n(55221),A=n(25617),K=n(10157),R=n(75545),O=n(19272),T=n(31148),G=n(56928),V=n(79406),D=n(63372),q=n(42320),N=n(50765),z=n(60393),B=n(46797),L=n(44217),W=n(80184),H=(0,C.lazy)((function(){return Promise.all([n.e(788),n.e(213)]).then(n.bind(n,66585))})),U=new Set(N._);function $(e){var t,n,N,z,$=e.artifactId,X=e.artifactObj,J=e.onClick,Y=e.onDelete,ee=e.mainStatAssumptionLevel,te=void 0===ee?0:ee,ne=e.effFilter,re=void 0===ne?U:ne,ie=e.probabilityFilter,ae=e.disableEditSetSlot,le=void 0!==ae&&ae,oe=e.editor,ce=void 0!==oe&&oe,ue=e.canExclude,se=void 0!==ue&&ue,de=e.canEquip,fe=void 0!==de&&de,ve=e.extraButtons,pe=(0,w.$)(["artifact","ui"]).t,he=(0,C.useContext)(G.t).database,xe=(0,D.Z)($),Ze=(0,q.Z)(T.y.get(null===(t=null!==X&&void 0!==X?X:xe)||void 0===t?void 0:t.setKey),[X,xe]),ye=!X,me=(0,C.useState)(!1),ge=(0,c.Z)(me,2),be=ge[0],je=ge[1],ke=(0,C.useCallback)((function(){return je(!1)}),[je]),Ce=(0,C.useCallback)((function(){return ye&&je(!0)}),[ye,je]),we=(0,C.useCallback)((function(e){return(0,W.jsx)(p.Z,{onClick:function(){return $&&(null===J||void 0===J?void 0:J($))},sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:e})}),[J,$]),Ee=(0,C.useCallback)((function(e){return(0,W.jsx)(h.Z,{sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:e})}),[]),Se=null!==X&&void 0!==X?X:xe;if(!Se)return null;var Ie=Se.id,Me=Se.lock,Fe=Se.slotKey,Pe=Se.rarity,_e=Se.level,Ae=Se.mainStatKey,Ke=Se.substats,Re=Se.exclude,Oe=Se.location,Te=void 0===Oe?"":Oe,Ge=Math.max(Math.min(te,4*Pe),_e),Ve=V.ZP.unit(Ae),De="roll"+(Math.floor(Math.max(_e,0)/4)+1),qe=O.Z.getArtifactEfficiency(Se,re),Ne=qe.currentEfficiency,ze=qe.maxEfficiency,Be=0!==ze,Le=(null===Ze||void 0===Ze?void 0:Ze.getSlotName(Fe))||"Unknown Piece Name",We=null===Ze||void 0===Ze?void 0:Ze.getSlotDesc(Fe),He=We&&(0,W.jsx)(_.Z,{title:(0,W.jsxs)(h.Z,{children:[(0,W.jsx)(x.Z,{variant:"h6",children:Le}),(0,W.jsx)(x.Z,{children:We})]})}),Ue=null===Ze||void 0===Ze?void 0:Ze.setEffects,$e=Ze&&Ue&&(0,W.jsx)(_.Z,{title:(0,W.jsx)("span",{children:Object.keys(Ue).map((function(e){return(0,W.jsxs)("span",{children:[(0,W.jsx)(x.Z,{variant:"h6",children:(0,W.jsx)(A.Z,{color:"success",children:pe("artifact:setEffectNum",{setNum:e})})}),(0,W.jsx)(x.Z,{children:Ze.setEffectDesc(e)})]},e)}))})});return(0,W.jsxs)(C.Suspense,{fallback:(0,W.jsx)(Z.Z,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:350}}),children:[ce&&(0,W.jsx)(C.Suspense,{fallback:!1,children:(0,W.jsx)(H,{artifactIdToEdit:be?$:"",cancelEdit:ke,disableEditSetSlot:le})}),(0,W.jsxs)(S.Z,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,W.jsxs)(P.Z,{condition:!!J,wrapper:we,falseWrapper:Ee,children:[(0,W.jsxs)(h.Z,{className:"grad-".concat(Pe,"star"),sx:{position:"relative",width:"100%"},children:[!J&&(0,W.jsx)(y.Z,{color:"primary",disabled:!ye,onClick:function(){return he.updateArt({lock:!Me},Ie)},sx:{position:"absolute",right:0,bottom:0,zIndex:2},children:Me?(0,W.jsx)(d.Z,{}):(0,W.jsx)(f.Z,{})}),(0,W.jsxs)(h.Z,{sx:{pt:2,px:2,position:"relative",zIndex:1},children:[(0,W.jsxs)(h.Z,{component:"div",sx:{display:"flex",alignItems:"center",gap:1,justifyContent:"space-between",mb:1},children:[(0,W.jsx)(m.Z,{size:"small",label:(0,W.jsx)("strong",{children:" +".concat(_e)}),color:De}),(0,W.jsx)(x.Z,{noWrap:!0,sx:{textAlign:"center",backgroundColor:"rgba(100,100,100,0.35)",borderRadius:"1em",px:1},children:Le}),He]}),(0,W.jsx)(x.Z,{color:"text.secondary",variant:"body2",children:(0,W.jsx)(E.ZP,{slotKey:Fe})}),(0,W.jsx)(x.Z,{variant:"h6",color:"".concat(V.ZP.getVariant(Ae),".main"),children:(0,W.jsxs)("span",{children:[R.Z[Ae]," ",V.ZP.get(Ae)]})}),(0,W.jsx)(x.Z,{variant:"h5",children:(0,W.jsx)("strong",{children:(0,W.jsxs)(F.Z,{color:Ge!==_e?"warning":void 0,children:[(0,V.qs)(null!==(n=O.Z.mainStatValue(Ae,Pe,Ge))&&void 0!==n?n:0,V.ZP.unit(Ae)),Ve]})})}),(0,W.jsx)(K.t,{stars:Pe,colored:!0})]}),(0,W.jsx)(h.Z,{sx:{height:"100%",position:"absolute",right:0,top:0},children:(0,W.jsx)(h.Z,{component:"img",src:null!==(N=null===Ze||void 0===Ze?void 0:Ze.slotIcons[Fe])&&void 0!==N?N:"",width:"auto",height:"100%",sx:{float:"right"}})})]}),(0,W.jsxs)(g.Z,{sx:{flexGrow:1,display:"flex",flexDirection:"column",pt:1,pb:0,width:"100%"},children:[Ke.map((function(e){return(0,W.jsx)(Q,{stat:e,effFilter:re,rarity:Pe},e.key)})),(0,W.jsxs)(h.Z,{sx:{display:"flex",my:1},children:[(0,W.jsx)(x.Z,{color:"text.secondary",component:"span",variant:"caption",sx:{flexGrow:1},children:pe(r||(r=(0,o.Z)(["artifact:editor.curSubEff"])))}),(0,W.jsx)(B.Z,{value:Ne,max:900,valid:Be})]}),Ne!==ze&&(0,W.jsxs)(h.Z,{sx:{display:"flex",mb:1},children:[(0,W.jsx)(x.Z,{color:"text.secondary",component:"span",variant:"caption",sx:{flexGrow:1},children:pe(i||(i=(0,o.Z)(["artifact:editor.maxSubEff"])))}),(0,W.jsx)(B.Z,{value:ze,max:900,valid:Be})]}),(0,W.jsx)(h.Z,{flexGrow:1}),ie&&(0,W.jsxs)("strong",{children:["Probability: ",(100*(0,L.B)(Se,ie)).toFixed(2),"%"]}),(0,W.jsxs)(x.Z,{color:"success.main",children:[null!==(z=null===Ze||void 0===Ze?void 0:Ze.name)&&void 0!==z?z:"Artifact Set"," ",$e]})]})]}),(0,W.jsxs)(h.Z,{sx:{p:1,display:"flex",gap:1,justifyContent:"space-between",alignItems:"center"},children:[ye&&fe?(0,W.jsx)(I.Z,{sx:{flexGrow:1},size:"small",showDefault:!0,defaultIcon:(0,W.jsx)(v.Z,{}),defaultText:pe("ui:inventory"),value:Te,onChange:function(e){return he.setArtLocation($,e)}}):(0,W.jsx)(M.Z,{location:Te}),ye&&(0,W.jsxs)(b.Z,{sx:{height:"100%"},children:[ce&&(0,W.jsx)(j.Z,{title:(0,W.jsx)(x.Z,{children:pe(a||(a=(0,o.Z)(["artifact:edit"])))}),placement:"top",arrow:!0,children:(0,W.jsx)(k.Z,{color:"info",size:"small",onClick:Ce,children:(0,W.jsx)(s.G,{icon:u.Xcf,className:"fa-fw"})})}),se&&(0,W.jsx)(j.Z,{title:(0,W.jsx)(x.Z,{children:pe(l||(l=(0,o.Z)(["artifact:excludeArtifactTip"])))}),placement:"top",arrow:!0,children:(0,W.jsx)(k.Z,{onClick:function(){return he.updateArt({exclude:!Re},Ie)},color:Re?"error":"success",size:"small",children:(0,W.jsx)(s.G,{icon:Re?u.gPx:u.Stf,className:"fa-fw"})})}),!!Y&&(0,W.jsx)(k.Z,{color:"error",size:"small",onClick:function(){return Y(Ie)},disabled:Me,children:(0,W.jsx)(s.G,{icon:u.I7k,className:"fa-fw"})}),ve]})]})]})]})}function Q(e){var t,n,r,i=e.stat,a=e.effFilter,l=e.rarity;if(!i.value)return null;var o=null!==(t=null===(n=i.rolls)||void 0===n?void 0:n.length)&&void 0!==t?t:0,c=i.key?O.Z.maxSubstatValues(i.key):0,u=i.key?O.Z.getSubstatRollData(i.key,l):[],s=7-u.length,d="roll".concat((0,z.uZ)(o,1,6)),f=null!==(r=i.efficiency)&&void 0!==r?r:0,v=(0,z.V2)(.5+f/500*.5),p=V.ZP.getStr(i.key),Z=V.ZP.unit(i.key),y=i.key&&a.has(i.key);return(0,W.jsxs)(h.Z,{display:"flex",gap:1,alignContent:"center",children:[(0,W.jsxs)(x.Z,{sx:{flexGrow:1},color:o?"".concat(d,".main"):"error.main",component:"span",children:[R.Z[i.key]," ",p,"+".concat((0,V.qs)(i.value,V.ZP.unit(i.key))).concat(Z)]}),y&&(0,W.jsx)(h.Z,{display:"flex",gap:.25,height:"1.3em",children:i.rolls.sort().map((function(e,t){return(0,W.jsx)(X,{value:100*e/c,color:"roll".concat((0,z.uZ)(s+u.indexOf(e),1,6),".main")},"".concat(t).concat(e))}))}),(0,W.jsx)(x.Z,{sx:{opacity:v,minWidth:40,textAlign:"right"},children:y?"".concat(f.toFixed(),"%"):"-"})]})}function X(e){var t=e.color,n=void 0===t?"red":t,r=e.value,i=void 0===r?50:r;return(0,W.jsx)(h.Z,{sx:{width:7,height:"100%",bgcolor:n,overflow:"hidden",borderRadius:1,display:"inline-block"},children:(0,W.jsx)(h.Z,{sx:{width:10,height:"".concat(100-(0,z.uZ)(i,0,100),"%"),bgcolor:"gray"}})})}},44824:function(e,t,n){n.d(t,{Af:function(){return s},EM:function(){return v},OQ:function(){return c},bq:function(){return u},sZ:function(){return d},x3:function(){return f}});var r=n(37762),i=n(93433),a=n(24351),l=n(19272),o=n(44217),c=["rarity","level","artsetkey","efficiency","mefficiency","probability"],u=["probability"];function s(){return{artSetKeys:[],rarity:(0,i.Z)(a.En),levelLow:0,levelHigh:20,slotKeys:(0,i.Z)(a.eV),mainStatKeys:[],substats:[],location:"",exclusion:["excluded","included"],locked:["locked","unlocked"]}}var d=function(){return{filterOption:s(),ascending:!1,sortType:c[0]}};function f(e,t){return{rarity:{getValue:function(e){var t;return null!==(t=e.rarity)&&void 0!==t?t:0},tieBreaker:"level"},level:{getValue:function(e){var t;return null!==(t=e.level)&&void 0!==t?t:0},tieBreaker:"artsetkey"},artsetkey:{getValue:function(e){var t;return null!==(t=e.setKey)&&void 0!==t?t:""},tieBreaker:"level"},efficiency:{getValue:function(t){return l.Z.getArtifactEfficiency(t,e).currentEfficiency}},mefficiency:{getValue:function(t){return l.Z.getArtifactEfficiency(t,e).maxEfficiency}},probability:{getValue:function(e){if(!Object.keys(t).length)return 0;var n=e.probability;return void 0===n?(0,o.B)(e,t):n}}}}function v(){return{exclusion:function(e,t){return!(!t.includes("included")&&!e.exclude)&&!(!t.includes("excluded")&&e.exclude)},locked:function(e,t){return!(!t.includes("locked")&&e.lock)&&!(!t.includes("unlocked")&&!e.lock)},location:function(e,t){return!t||("Inventory"===t&&!e.location||(!("Equipped"!==t||!e.location)||t===e.location))},artSetKeys:function(e,t){return!t.length||t.includes(e.setKey)},slotKeys:function(e,t){return t.includes(e.slotKey)},mainStatKeys:function(e,t){return!t.length||t.includes(e.mainStatKey)},levelLow:function(e,t){return t<=e.level},levelHigh:function(e,t){return t>=e.level},rarity:function(e,t){return t.includes(e.rarity)},substats:function(e,t){var n,i=(0,r.Z)(t);try{var a=function(){var t=n.value;if(t&&!e.substats.some((function(e){return e.key===t})))return{v:!1}};for(i.s();!(n=i.n()).done;){var l=a();if("object"===typeof l)return l.v}}catch(o){i.e(o)}finally{i.f()}return!0}}}},46797:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(29439),i=n(25617),a=n(60393),l=n(80184);function o(e){var t=e.value,n=e.max,o=void 0===n?1:n,c=e.valid,u="number"===typeof t?["roll".concat((0,a.uZ)(Math.floor(t/o*10)-4,1,6)),t.toFixed()+"%"]:["secondary",t],s=(0,r.Z)(u,2),d=s[0],f=s[1];return c||(d="error"),(0,l.jsx)(i.Z,{color:d,children:f})}},44217:function(e,t,n){n.d(t,{B:function(){return b}});var r=n(29439),i=n(37762),a=n(4942),l=n(1413),o=n(93433),c=n(60393),u=n(19272),s=n(12354),d=[3,4,6],f={hp:6,atk:6,def:6,hp_:4,atk_:4,def_:4,eleMas:4,enerRech_:4,critRate_:3,critDMG_:3},v={};function p(e,t,n,r){if(5!==e.length)for(var i=0,u=d;i<u.length;i++){var s=u[i];t[s]>0&&p([].concat((0,o.Z)(e),[s]),(0,l.Z)((0,l.Z)({},t),{},(0,a.Z)({},s,t[s]-s)),n-s,r*t[s]/n)}else(0,c.SR)(v,e,r)}p([0],{3:6,4:20,6:18},44,1),p([3],{3:3,4:20,6:18},41,1),p([4],{3:6,4:16,6:18},40,1),p([6],{3:6,4:20,6:12},38,1);for(var h=Array(6).fill(0).map((function(e,t){for(var n=[1],r=0,i=1;++r<=t;)i*=t-r+1,i/=r,n.push(i);return n})),x=[[1]],Z=function(){var e=x[x.length-1],t=Array(e.length+3).fill(0);e.forEach((function(e,n){for(var r=0,i=[0,1,2,3];r<i.length;r++){t[n+i[r]]+=e}})),x.push(t.map((function(e){return e/4})))};x.length<6;)Z();for(var y=function(){var e=g[m],t=e.reduce((function(e,t){return e+t}));e.forEach((function(e,n,r){r[n]=t,t-=e}))},m=0,g=x;m<g.length;m++)y();function b(e,t){if(e.rarity<=2)return NaN;var n=e.rarity,o=e.level,p=e.substats,Z=(0,l.Z)({},t),y=new Set(Object.keys(Z)),m=0,g=e.mainStatKey;if(g in Z){var b=4*n;if(s[n][g][b]<Z[g])return 0;delete Z[g],y.delete(g)}var j,k=(0,i.Z)(p);try{for(k.s();!(j=k.n()).done;){var C=j.value,w=C.key,E=C.value;w?y.has(w)&&(y.delete(w),Z[w]>E?Z[w]-=E:delete Z[w]):m+=1}}catch(T){k.e(T)}finally{k.f()}if(m+=4-p.length,y.size>m||Object.keys(Z).length>4)return 0;for(var S=u.Z.rollsRemaining(o,n)-m,I=0,M=Object.entries(Z);I<M.length;I++){var F=(0,r.Z)(M[I],2),P=F[0],_=F[1];Z[P]=Math.max(Math.ceil(10*_/u.Z.maxSubstatValues(P,n)),1)}var A=0,K=Object.entries(Z).map((function(e){var t=(0,r.Z)(e,2),n=t[0],i=t[1],a=y.has(n)?1:0,l=Math.ceil(i/10)-a;return A+=l,{target:i,filler:a,minUpgrade:l}})).reverse();if(A>S)return 0;var R=(0,a.Z)({},S,1),O=S-A;return K.forEach((function(e,t){for(var n,i,a,l=e.target,o=e.filler,c=e.minUpgrade,u={},s=c;s<=c+O;s++)for(var d=l-7*(s+o),f=d>0?x[s+o][d]:1,v=0,p=Object.entries(R);v<p.length;v++){var Z,y=(0,r.Z)(p[v],2),m=y[0],g=y[1],b=parseInt(m);if(!(b<s)){var j=(i=s,a=4-t,h[n=b][i]*Math.pow(a-1,n-i)/Math.pow(a,n)),k=b-s;u[k]=(null!==(Z=u[k])&&void 0!==Z?Z:0)+g*f*j}}R=u})),function(e,t,n){var r,a,l=null!==(r=f[e])&&void 0!==r?r:0,o=0,u={3:2,4:5,6:3},s=v[l],p=(0,i.Z)(t);try{for(p.s();!(a=p.n()).done;){var x=a.value.key;if(x){var Z=f[x];s=s[Z],u[Z]-=1}}}catch(T){p.e(T)}finally{p.f()}l&&(u[l]-=1);var y,m={3:0,4:0,6:0},g=(0,i.Z)(n);try{for(g.s();!(y=g.n()).done;){var b=y.value;m[f[b]]+=1}}catch(T){g.e(T)}finally{g.f()}var j=0;(0,c.Q1)(s,[],(function(e){return"number"===typeof e}),(function(e,t){j+=e;var n,r={3:0,4:0,6:0},a=(0,i.Z)(t);try{for(a.s();!(n=a.n()).done;){r[n.value]+=1}}catch(T){a.e(T)}finally{a.f()}var l,c=e,u=(0,i.Z)(d);try{for(u.s();!(l=u.n()).done;){var s=l.value,f=r[s],v=m[s];if(f<v)return;c*=h[f][v]}}catch(T){u.e(T)}finally{u.f()}o+=c}));var k,C=(0,i.Z)(d);try{for(C.s();!(k=C.n()).done;){var w=k.value;o/=h[u[w]][m[w]]}}catch(T){C.e(T)}finally{C.f()}return o/j}(e.mainStatKey,p,y)*Object.values(R).reduce((function(e,t){return e+t}))}},63372:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(29439),i=n(72791),a=n(56928);function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=(0,i.useContext)(a.t),n=t.database,l=(0,i.useState)(n._getArt(e)),o=(0,r.Z)(l,2),c=o[0],u=o[1];return(0,i.useEffect)((function(){return u(n._getArt(e))}),[n,e]),(0,i.useEffect)((function(){return e?n.followArt(e,u):void 0}),[e,u,n]),c}}}]);
//# sourceMappingURL=328.f4a73d83.chunk.js.map