(window["webpackJsonpreact-context"]=window["webpackJsonpreact-context"]||[]).push([[0],{51:function(e,t,n){e.exports=n(65)},65:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(12),c=n.n(o),i=Object(r.createContext)(),l=function(e){var t=e.reducer,n=e.initialState,o=e.children;return a.a.createElement(i.Provider,{value:Object(r.useReducer)(t,n),children:o})},u=function(){return Object(r.useContext)(i)},s=n(9),d=n(43);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(n,!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O,m,b=function(e,t){return console.log(t),console.log(e),e},E=function(e){return console.log(e),console.log("-------------------"),e},y=n(29),h=n.n(y),g=function(e){return h.a.set(e.storeId,e),e},j=(O={},Object(s.a)(O,"ADD_TODO",(function(e,t){var n=t.payload;return f({},e,{todos:[].concat(Object(d.a)(e.todos),[n.todo])})})),Object(s.a)(O,"REMOVE_TODO",(function(e,t){var n=t.payload;return f({},e,{todos:e.todos.filter((function(e){return e.id!==n.todo.id}))})})),Object(s.a)(O,"UPDATE_TODO",(function(e,t){var n=t.payload;return f({},e,{todos:e.todos.map((function(e){return e.id===n.todo.id?n.todo:e}))})})),Object(s.a)(O,"FILTER_TODO",(function(e,t){return f({},e,{filter:t.payload.filter})})),Object(s.a)(O,"SHOW_STATE",(function(e,t){return f({},e,{state:t.payload.state})})),m=O,function(e,t){return m.hasOwnProperty(t.type)?function(e){var t=e.state,n=e.action,r=e.handler;return[b,r,g,E].reduce((function(e,t){return t(e,n)}),t)}({state:e,action:t,handler:m[t.type]}):e}),v={state:!0,filter:"",todos:[],storeId:"app"},w=n(35),D=n.n(w),P=n(16),T=function(e){return{type:"FILTER_TODO",payload:{filter:e}}},k=n(90),x=n(104),C=n(36),I=n.n(C),R=n(6),S=Object(k.a)((function(e){var t=e.spacing,n=e.shape,r=e.palette,a=e.transitions;return{search:{position:"relative",borderRadius:n.borderRadius,backgroundColor:Object(R.b)(r.common.white,.15),"&:hover":{backgroundColor:Object(R.b)(r.common.white,.25)},marginLeft:0},searchIcon:{width:t(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:{padding:t(1,1,1,7),transition:a.create("width")}}})),_=function(){var e=u(),t=Object(P.a)(e,2),n=t[0].filter,r=t[1],o=S();return a.a.createElement("div",{className:o.search},a.a.createElement("div",{className:o.searchIcon},a.a.createElement(I.a,null)),a.a.createElement(x.a,{placeholder:"Search\u2026",onChange:function(e){return r(T(e.target.value))},value:n,classes:{root:o.inputRoot,input:o.inputInput}}))},A=n(38),N=n.n(A),B=n(91),L=function(e){var t=u(),n=Object(P.a)(t,2),r=n[0].filter,o=n[1];return a.a.createElement(B.a,Object.assign({},e,{variant:"contained",onClick:function(){o({type:"ADD_TODO",payload:{todo:{id:N()(),name:r,done:!1}}}),o(T(""))},disabled:!r,children:"Add"}))},W=n(92),F=n(27),H=Object(k.a)((function(e){var t=e.spacing;return{"@global":{body:{margin:0}},appBar:{padding:t(1),marginBottom:t(2),flexDirection:"row",justifyContent:"space-between"},actions:{display:"flex"},add:{marginLeft:t(1)}}})),J=function(){var e=H();return a.a.createElement(W.a,{position:"static",className:e.appBar},a.a.createElement(F.a,{variant:"h6",noWrap:!0,children:"Todo hooks"}),a.a.createElement("div",{className:e.actions},a.a.createElement(_,null),a.a.createElement(L,{className:e.add})))},M=n(93),U=n(97),V=n(96),q=n(94),z=n(95),G=n(102),K=n(98),Q=n(39),X=n.n(Q);function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var Z=function(){var e=u(),t=Object(P.a)(e,2),n=t[0],r=n.todos,o=n.filter,c=t[1];return a.a.createElement(M.a,null,a.a.createElement(q.a,null,a.a.createElement(z.a,null,a.a.createElement(V.a,{children:"Description"}),a.a.createElement(V.a,{children:"Done"}),a.a.createElement(V.a,{children:"Remove",style:{width:64}}))),a.a.createElement(U.a,null,r.filter((function(e){return RegExp(o,"i").test(e.name)})).map((function(e){return a.a.createElement(z.a,{key:e.id},a.a.createElement(V.a,{children:e.name}),a.a.createElement(V.a,null,a.a.createElement(G.a,{checked:e.done,onChange:function(){return c(function(e){return{type:"UPDATE_TODO",payload:{todo:e}}}(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(n,!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{done:!e.done})))}})),a.a.createElement(V.a,null,a.a.createElement(K.a,{children:a.a.createElement(X.a,null),onClick:function(){return c(function(e){return{type:"REMOVE_TODO",payload:{todo:e}}}(e))}})))}))))},$=n(40),ee=n.n($),te=n(99),ne=n(100),re=n(101),ae=n(103),oe=n(42),ce=n.n(oe),ie=n(41),le=n.n(ie),ue=Object(k.a)((function(e){return{card:{margin:(0,e.spacing)(1)}}})),se=function(){var e=u(),t=Object(P.a)(e,2),n=t[0],r=t[1],o=ue();return a.a.createElement(te.a,{elevation:0,className:o.card},a.a.createElement(ne.a,{title:"Application state",subheader:"Application state using react hooks and context",action:a.a.createElement(K.a,{onClick:function(){return r(function(e){return{type:"SHOW_STATE",payload:{state:e}}}(!n.state))},children:n.state?a.a.createElement(le.a,null):a.a.createElement(ce.a,null)})}),a.a.createElement(ae.a,{in:n.state,timeout:"auto",unmountOnExit:!0},a.a.createElement(re.a,null,a.a.createElement(ee.a,{src:n,displayDataTypes:!1}))))};c.a.render(a.a.createElement((function(){return a.a.createElement(l,{initialState:D()(v,(e=v,h.a.get(e.storeId))),reducer:j},a.a.createElement(J,null),a.a.createElement(Z,null),a.a.createElement(se,null));var e}),null),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.a2163c3e.chunk.js.map