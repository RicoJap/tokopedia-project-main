(this["webpackJsonptokopedia-project-main"]=this["webpackJsonptokopedia-project-main"]||[]).push([[0],{106:function(e,t,n){},130:function(e,t,n){},136:function(e,t,n){"use strict";n.r(t);var a=n(4),o=n(0),c=n.n(o),r=n(11),i=n.n(r),s=(n(106),n(89)),l=n.n(s),u=n(88),b=n.n(u),j=n(7),m=n(18),d=n(189),p=n(191),O=n(186),f=Object(O.a)({root:{position:"fixed",bottom:0,width:"100%"}}),k=Object(O.a)({root:{"&$selected":{color:"#7D4CDB"}},selected:{color:"#7D4CDB"}}),y=function(e){var t=e.actions,n=e.selectedAction,o=e.onChange,c=Object(m.a)(e,["actions","selectedAction","onChange"]),r=f(),i=k();return Object(a.jsx)(d.a,Object(j.a)(Object(j.a)({value:n,onChange:o,showLabels:!0,classes:r},c),{},{children:t.map((function(e,t){return Object(a.jsx)(p.a,{classes:i,label:e.label,icon:!!e.icon&&e.icon,"data-testid":e.label},t)}))}))},g=n(34),v=n(21),h=n(13),x=n(192),P=n(195),C=n(193),L=n(45),S=function(e){var t=e.label,n=e.variant,o=Object(m.a)(e,["label","variant"]);return Object(a.jsx)(L.a,Object(j.a)(Object(j.a)({variant:n},o),{},{children:t}))},E=n(194),N=Object(O.a)({root:{marginBottom:"1em",cursor:"pointer"}}),T=function(e){var t=e.label,n=e.labelVariant,o=void 0===n?"p":n,c=e.children,r=e.styles,i=void 0===r?{}:r,s=e.separateContentAndButtons,l=void 0!==s&&s,u=Object(m.a)(e,["label","labelVariant","children","styles","separateContentAndButtons"]),b=c,d=N();return Object(a.jsx)(x.a,Object(j.a)(Object(j.a)({classes:d},u),{},{children:Object(a.jsxs)(C.a,{style:i.cardContent,children:[Object(a.jsx)(S,{label:t,variant:o,"data-testid":"card-label"}),l&&Object(a.jsx)(E.a,{style:i.divider}),b?Object(a.jsx)(P.a,{style:i.cardActions,children:b}):null]})}))},w=n(209),_=Object(O.a)({ul:{justifyContent:"center"}}),B=function(e){var t=e.pages,n=Object(m.a)(e,["pages"]),o=_();return Object(a.jsx)(w.a,Object(j.a)({"data-testid":"pagination",classes:o,count:t,color:"primary",siblingCount:1},n))},M=n(66),A=n.n(M),R=n(87),D=n(67),I=n.n(D),F="FETCH_POKEMONS_LIST",H="FETCH_POKEMON_DETAIL",K="FETCH_MY_POKEMONS",G="CATCH_POKEMON",V="RELEASE_MY_POKEMON",W="SET_CURRENT_POKEMONS_LIST_PAGE",Y="SET_CURRENT_MY_POKEMONS_LIST_PAGE",$="SET_SELECTED_BOTTOM_ACTION",J=function(e){return 0==e||"undefined"===typeof e||null==e||"object"===typeof e&&U(e)},U=function e(t){return"undefined"===typeof t.length?!Object.keys(t).some((function(e){return!J(t[e])}))&&e(Object.keys(t)):!t.some((function(e){return!J(e)}))},Z="https://pokeapi.co/api/v2",q=function(){var e=Object(R.a)(A.a.mark((function e(t){var n,a,o;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(Z,"/pokemon"),J(t)||(a=Object.keys(t).map((function(e){return e+"="+t[e]})).join("&"))&&(n+="?".concat(a)),o=I.a.get(n).catch((function(e){return e.response})),e.abrupt("return",{type:F,payload:o});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(e){var t="".concat(Z,"/pokemon/").concat(e),n=I.a.get(t).catch((function(e){return e.response}));return{type:H,payload:n}},Q=function(e){return e.replace(/([^A-Z])([A-Z])/g,"$1 $2").replace(/[_\-]+/g," ").toLowerCase().replace(/(^\w|\b\w)/g,(function(e){return e.toUpperCase()})).replace(/\s+/g," ").replace(/^\s+|\s+$/,"")},X=function(e){return Math.ceil(e)},ee=function(){var e=Object(v.b)(),t=Object(h.f)(),n=Object(o.useState)([]),c=Object(g.a)(n,2),r=c[0],i=c[1],s=Object(v.c)((function(e){return{allPokemonsList:e.PokemonReducer.pokemonsList,currentPokemonsListPage:e.PokemonReducer.currentPokemonsListPage,pageOffset:e.PokemonReducer.pageOffset,pageLimit:e.PokemonReducer.pageLimit,allPokemonsCount:e.PokemonReducer.allPokemonsCount}})),l=s.allPokemonsList,u=s.currentPokemonsListPage,b=s.pageOffset,j=s.pageLimit,m=s.allPokemonsCount;Object(o.useEffect)((function(){e(q({offset:b,limit:j}))}),[]),Object(o.useEffect)((function(){J(l[u])||i(l[u])}),[l]);return Object(a.jsxs)("div",{className:"Global-content",children:[r.map((function(n){return Object(a.jsx)(T,{label:Q(n.name),labelVariant:"h6",onClick:function(){return a=n.name,e(z(a)),void t.push("/pokemon/".concat(a));var a}})})),Object(a.jsx)(B,{onChange:function(t,n){e(function(e){return{type:W,payload:e}}(n)),J(l[n])?e(q({offset:(n-1)*j,limit:j})):i(l[n])},page:u,pages:X(m/j)})]})},te=n(213),ne=function(e){var t=e.url,n=Object(m.a)(e,["url"]);return Object(a.jsx)(te.a,Object(j.a)({"data-testid":"image",src:t},n))},ae=n.p+"static/media/pokeball-big.c95b8da7.png",oe={image:{height:100,width:100,display:"block",margin:"auto",paddingTop:"50%"},label:{display:"block",textAlign:"center",margin:"1em"}},ce=function(e){var t=e.label;return Object(a.jsxs)("div",{"data-testid":"nothing-to-show",children:[Object(a.jsx)(ne,{src:ae,variant:"square",style:oe.image}),Object(a.jsx)(S,{variant:"p",color:"textSecondary",label:t,style:oe.label})]})},re=n(196),ie=function(e){var t=e.label,n=e.variant,o=void 0===n?"outlined":n,c=Object(m.a)(e,["label","variant"]);return Object(a.jsx)(re.a,Object(j.a)(Object(j.a)({"data-testid":"button",variant:o,color:"primary"},c),{},{children:t}))},se={cardContent:{paddingBottom:0},cardActions:{paddingLeft:0,float:"right"},releaseButton:{color:"#f44336",borderColor:"#f44336"},divider:{marginTop:20}},le=function(){var e=Object(v.b)(),t=Object(h.f)(),n=Object(o.useState)([]),c=Object(g.a)(n,2),r=c[0],i=c[1],s=Object(v.c)((function(e){return{myPokemonsList:e.PokemonReducer.myPokemonsList,myPokemonsListCount:e.PokemonReducer.myPokemonsListCount,currentMyPokemonsListPage:e.PokemonReducer.currentMyPokemonsListPage,pageLimit:e.PokemonReducer.pageLimit}})),l=s.myPokemonsList,u=s.myPokemonsListCount,b=s.currentMyPokemonsListPage,j=s.pageLimit;Object(o.useEffect)((function(){e({type:K}),i(Object.keys(l).slice(0,j).reduce((function(e,t){return e[t]=l[t],e}),{}))}),[]),Object(o.useEffect)((function(){i(Object.keys(l).slice((b-1)*j,(b-1)*j+j).reduce((function(e,t){return e[t]=l[t],e}),{}))}),[b,l]);var m=function(t){return e(function(e){return{type:V,payload:e}}(t))};return Object(a.jsx)("div",{className:"Global-content",children:J(r)?Object(a.jsx)(ce,{label:"Sorry, you have not caught any pokemon yet"}):Object(a.jsxs)("div",{children:[Object.keys(r).map((function(n){return Object(a.jsx)(T,{label:n,labelVariant:"h6",onClick:function(){return a=l[n],e(z(a)),void t.push("/pokemon/".concat(a));var a},styles:se,separateContentAndButtons:!0,children:Object(a.jsx)(ie,{size:"small",label:"Release",style:se.releaseButton,onClick:function(e){e.preventDefault(),e.stopPropagation(),m(n)}})})})),Object(a.jsx)(B,{onChange:function(t,n){return e(function(e){return{type:Y,payload:e}}(n))},page:b,pages:X(u/j)})]})})},ue=(n(130),function(){var e=Object(v.b)(),t=Object(v.c)((function(e){return e.PokemonReducer.selectedBottomAction}));return Object(a.jsxs)("div",{className:"Global-wrapper",children:[function(){switch(t){case 0:return Object(a.jsx)(ee,{});case 1:return Object(a.jsx)(le,{});default:return Object(a.jsx)(ee,{})}}(),Object(a.jsx)(y,{selectedAction:t,onChange:function(t,n){return e({type:$,payload:n})},actions:[{label:"Pokemons List",icon:Object(a.jsx)(b.a,{})},{label:"My Pokemons",icon:Object(a.jsx)(l.a,{})}]})]})});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var be=n(90),je=n.n(be),me=n(39),de=n(92),pe=n(41),Oe="MY_POKEMONS",fe=function(e){var t=localStorage.getItem(e);return J(t)?null:JSON.parse(t)},ke=function(e,t){return localStorage.setItem(e,JSON.stringify(t))},ye=function(e){return localStorage.removeItem(e)},ge={pokemonsListCount:null,pokemonsList:[],currentPokemon:null,myPokemonsList:{},searchTerm:"",myPokemonsListCount:null,pageOffset:0,pageLimit:20,currentPokemonsListPage:1,currentMyPokemonsListPage:1,selectedBottomAction:0};var ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:if(200===t.payload.status)return Object(j.a)(Object(j.a)({},e),{},{pokemonsList:Object(j.a)(Object(j.a)({},e.pokemonsList),{},Object(pe.a)({},e.currentPokemonsListPage,t.payload.data.results)),allPokemonsCount:t.payload.data.count,pageOffset:(e.currentPokemonsListPage-1)*e.pageLimit});case H:if(200===t.payload.status)return Object(j.a)(Object(j.a)({},e),{},{currentPokemon:Object(j.a)(Object(j.a)({},t.payload.data),{},{types:t.payload.data.types.map((function(e){return e.type})),moves:t.payload.data.moves.map((function(e){return e.move}))})});case K:var n=fe(Oe);return J(n)?Object(j.a)(Object(j.a)({},e),{},{myPokemonsList:{},myPokemonsListCount:0}):Object(j.a)(Object(j.a)({},e),{},{myPokemonsList:n.pokemons,myPokemonsListCount:n.count});case V:var a=t.payload,o=fe(Oe);if(o.pokemons[a]){if(1===o.count)return ye(Oe),Object(j.a)(Object(j.a)({},e),{},{myPokemonsList:{}});var c=o.pokemons,r=(c[a],Object(m.a)(c,[a].map(de.a)));return o.count-=1,ke(Oe,{count:o.count,pokemons:r}),Object(j.a)(Object(j.a)({},e),{},{myPokemonsList:r})}return Object(j.a)(Object(j.a)({},e),{},{myPokemonsList:o});case G:var i,s=t.payload,l=s.pokemonNickname,u=s.pokemonName,b=fe(Oe);return i=J(b)?{count:1,pokemons:Object(pe.a)({},l,u)}:{count:b.count+1,pokemons:Object(j.a)(Object(j.a)({},b.pokemons),{},Object(pe.a)({},l,u))},ke(Oe,i),Object(j.a)(Object(j.a)({},e),{},{myPokemonsList:i});case W:var d=t.payload;return Object(j.a)(Object(j.a)({},e),{},{currentPokemonsListPage:d});case Y:var p=t.payload;return Object(j.a)(Object(j.a)({},e),{},{currentMyPokemonsListPage:p});case $:var O=t.payload;return Object(j.a)(Object(j.a)({},e),{},{selectedBottomAction:O});default:return e}},he=Object(me.c)({PokemonReducer:ve}),xe=n(47),Pe=n(206),Ce=n(91),Le="#7D4CDB",Se="#11CB5F",Ee=Object(Ce.a)({palette:{primary:{main:Le},secondary:{main:Se}}}),Ne=n(207),Te=n(211),we=n(202),_e=n(198),Be=n(199),Me=n(197),Ae=function(e){var t=e.open,n=e.dialogTitle,o=e.dialogSubTitle,c=e.textFieldLabel,r=(e.textFieldValue,e.textFieldOnChange),i=e.dialogConfirmButtonLabel,s=e.onSubmit;return Object(a.jsxs)(Te.a,{open:t,children:[Object(a.jsx)(Me.a,{"data-testid":"dialog-title",children:n}),Object(a.jsxs)(_e.a,{children:[Object(a.jsx)(Be.a,{"data-testid":"dialog-subtitle",children:o}),Object(a.jsx)(Ne.a,{autoFocus:!0,margin:"dense",label:c,type:"text",fullWidth:!0,onChange:r,inputProps:{"data-testid":"dialog-text-field"}})]}),Object(a.jsx)(we.a,{children:Object(a.jsx)(ie,{variant:"text",onClick:s,color:"primary",label:i})})]})},Re=n(201),De=n(203),Ie=n(204),Fe=n(205),He=Object(O.a)({root:{backgroundColor:Le,color:"#ffffff",opacity:.75}}),Ke=function(e){var t=e.listItems,n=e.iconSelector,o=void 0===n?"icon":n,c=e.labelSelector,r=void 0===c?"label":c,i=He();return Object(a.jsx)(Re.a,{children:t.map((function(e,t){return Object(a.jsxs)(De.a,{classes:i,divider:!0,children:[!J(e[o])&&Object(a.jsx)(Ie.a,{children:e[o]}),Object(a.jsx)(Fe.a,{"data-testid":e[r],primary:Q(e[r])})]},t)}))})},Ge=n(212),Ve=n(208);function We(e){return Object(a.jsx)(Ve.a,Object(j.a)({elevation:6},e))}var Ye=function(e){var t=e.snackbarStatus,n=e.autoHideDuration,o=e.handleClose,c=e.variant,r=void 0===c?"filled":c,i=Object(m.a)(e,["snackbarStatus","autoHideDuration","handleClose","variant"]),s=function(e,n){"clickaway"!==n&&o(Object(j.a)(Object(j.a)({},t),{},{open:!1}))};return Object(a.jsx)(Ge.a,Object(j.a)(Object(j.a)({open:t.open,autoHideDuration:n,onClose:s,"data-testid":"snackbar"},i),{},{children:Object(a.jsx)(We,{onClose:s,severity:t.severity,variant:r,children:t.message})}))},$e={pokemonDetailWrapper:{marginBottom:0},avatar:{margin:"0 auto",width:120,height:120,backgroundColor:Se,padding:"0.5em",opacity:.75},typesSection:{margin:"1em"},movesSection:{margin:"1em",maxHeight:500,overflow:"auto"},pokemonNameTitle:{textAlign:"center",color:Le},catchPokemonButton:{display:"block",width:"95%",margin:"0 auto"}},Je=function(e){var t=e.match,n=Object(v.b)(),c=Object(h.f)(),r=Object(o.useState)({open:!1,severity:"",message:""}),i=Object(g.a)(r,2),s=i[0],l=i[1],u=Object(o.useState)(!1),b=Object(g.a)(u,2),j=b[0],m=b[1],d=Object(o.useState)(""),p=Object(g.a)(d,2),O=p[0],f=p[1],k=Object(v.c)((function(e){return e.PokemonReducer.currentPokemon})),y=t.params.pokemonName,x=J(k)?"-":Q(k.name);Object(o.useEffect)((function(){J(k)&&n(z(y))}),[]);return Object(a.jsx)("div",{className:"Global-wrapper",style:$e.pokemonDetailWrapper,children:Object(a.jsxs)("div",{className:"Global-content",children:[!J(k)&&Object(a.jsxs)("div",{children:[Object(a.jsx)(ne,{url:k.sprites.front_default,alt:k.name,style:$e.avatar}),Object(a.jsx)(S,{label:x,variant:"h3",style:$e.pokemonNameTitle}),Object(a.jsxs)("div",{style:$e.typesSection,children:[Object(a.jsx)(S,{label:"Types",variant:"h4"}),Object(a.jsx)(Ke,{listItems:k.types,labelSelector:"name"})]}),Object(a.jsxs)("div",{style:$e.movesSection,children:[Object(a.jsx)(S,{label:"Moves",variant:"h4"}),Object(a.jsx)(Ke,{listItems:k.moves,labelSelector:"name"})]}),Object(a.jsx)(ie,{onClick:function(){Math.random()<.5?(m(!0),l({open:!0,severity:"success",message:"Congratulations you have caught ".concat(x)})):l({open:!0,severity:"error",message:"Too bad! You did not caught ".concat(x)})},style:$e.catchPokemonButton,label:"Catch ".concat(x)})]}),Object(a.jsx)(Ae,{open:j,setOpen:m,dialogTitle:"Set Nickname",dialogSubTitle:"Set nickname for your newly caught pokemon",textFieldLabel:"Nickname",textFieldValue:O,textFieldOnChange:function(e){return f(e.target.value)},dialogConfirmButtonLabel:"Save Nickname",onSubmit:function(){""!==O&&(!function(e,t){var n=fe(e);return!(J(n)||!n.pokemons[t])}(Oe,O)?(n(function(e,t){return{type:G,payload:{pokemonNickname:e,pokemonName:t}}}(O,k.name)),m(!1),c.goBack()):l({open:!0,severity:"error",message:"Nickname already exists, please give another nickname"}))}}),Object(a.jsx)(Ye,{snackbarStatus:s,autoHideDuration:5e3,handleClose:l,variant:"filled"})]})})},Ue=function(){var e=Object(me.a)(je.a)(me.d);return Object(a.jsx)(xe.a,{basename:"/tokopedia-project-main",children:Object(a.jsx)(Pe.a,{theme:Ee,children:Object(a.jsx)(v.a,{store:e(he),children:Object(a.jsxs)(h.c,{children:[Object(a.jsx)(h.a,{exact:!0,path:"/",component:ue}),Object(a.jsx)(h.a,{exact:!0,path:"/pokemon",component:ue}),Object(a.jsx)(h.a,{exact:!0,path:"/pokemon/:pokemonName",component:Je})]})})})})};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(Ue,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[136,1,2]]]);
//# sourceMappingURL=main.d158a2fc.chunk.js.map