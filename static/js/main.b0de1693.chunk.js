(this.webpackJsonpbingo=this.webpackJsonpbingo||[]).push([[0],{14:function(e){e.exports=JSON.parse('[{"id":1,"title":"(child noices in the background)"},{"id":2,"title":"Hello, hello?"},{"id":3,"title":"i need to jump in another call"},{"id":4,"title":"can everyone go on mute"},{"id":5,"title":"could you please get closer to the mic"},{"id":6,"title":"(load painful echo/feedback)"},{"id":7,"title":"Next slide, please."},{"id":8,"title":"can we take this offline?"},{"id":9,"title":"is ____ on the call?"},{"id":10,"title":"Could you share this slides afterwards?"},{"id":11,"title":"can somebody grant presenter rights?"},{"id":12,"title":"can you email that to everyone?"},{"id":13,"title":"CONF CALL BINGO"},{"id":14,"title":"sorry, i had problems loging in"},{"id":15,"title":"(animal noises in the background)"},{"id":16,"title":"sorry, i didn\'t found the conference id"},{"id":17,"title":"i was having connection issues"},{"id":18,"title":"i\'ll have to get back to yous"},{"id":19,"title":"who just joined?"},{"id":20,"title":"sorry, something ____ with my calendar"},{"id":21,"title":"do you see my screen"},{"id":22,"title":"lets wait for ____!"},{"id":23,"title":"You will send the minutes?"},{"id":24,"title":"sorry, i was on mute"},{"id":25,"title":"can you repeat please?"}]')},25:function(e,t,n){},26:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var i={};n.r(i),n.d(i,"GET_DATA",(function(){return p})),n.d(i,"SET_DATA",(function(){return O}));var c={};n.r(c),n.d(c,"getData",(function(){return D})),n.d(c,"setData",(function(){return k}));var r=n(0),o=n.n(r),a=n(7),d=n.n(a),l=(n(25),n(26),n(2)),s=n(10),u=n(9),f=n(19),h=n.n(f),j=n(16),b=n.n(j),m=n(3),p="GET_DATA",O="SET_DATA",v=Object(m.a)({},i),g=n(4),y=n(17),w=n(18),x={data:[]},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.GET_DATA:case v.SET_DATA:return Object(m.a)(Object(m.a)({},e),{},{data:t.payload});default:return e}},_=Object(g.combineReducers)({bingo:T}),A=Object(g.createStore)(_,Object(w.composeWithDevTools)(Object(g.applyMiddleware)(y.a))),E=n(14);var C=A.dispatch,S=Object(l.a)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(!e.length)return[];for(var t,n,i=e.length;0!==i;)n=Math.floor(Math.random()*i),t=e[i-=1],e[i]=e[n],e[n]=t;return[Object(l.a)(e.slice(0,5)),Object(l.a)(e.slice(5,10)),Object(l.a)(e.slice(10,15)),Object(l.a)(e.slice(15,20)),Object(l.a)(e.slice(20,25))]}(E));function D(){return new Promise((function(e){return C({type:v.GET_DATA,payload:S}),e(E)}))}function k(e){return new Promise((function(t){return C({type:v.SET_DATA,payload:e}),t(e)}))}var N=Object(m.a)({},c),L=n(20),F=n(1),M=function(e){var t=e.onClick,n=e.child,i=e.rowCenter,c=e.colCenter,r=e.index,o=e.k,a=e.item,d=e.empty,l=void 0!==d&&d,s=function(){return Object(F.jsx)("div",{className:"card".concat(n.done?" card-done":""),children:Object(F.jsxs)("div",{className:"".concat(i===r&&c===o?"":"card-wrapper").concat(i===r&&c===o?" center":""," item-").concat(n.id),children:[i===r&&c===o?null:Object(F.jsx)("div",{className:"number",children:r*a.length+o}),Object(F.jsx)("div",{className:n.done?" done":"",children:n.title})]})})};return Object(F.jsx)(F.Fragment,{children:l?Object(F.jsx)(F.Fragment,{children:s()}):Object(F.jsx)(L.a,{onClick:t,"data-testid":"card",children:s()})})},G=Object(u.b)((function(e){return{data:e.bingo.data}}))((function(e){var t=e.data,n=void 0===t?[]:t,i=Object(r.useRef)(null),c=h()(),o=c.width,a=c.height,d=Object(r.useState)(!1),u=Object(s.a)(d,2),f=u[0],j=u[1],m=Object(r.useState)(!1),p=Object(s.a)(m,2),O=p[0],v=p[1],g=Object(r.useState)(!1),y=Object(s.a)(g,2),w=y[0],x=y[1],T=Math.floor(n.length&&n[0].length/2),_=Math.floor(n.length/2);Object(r.useEffect)((function(){N.getData()}));var A=function(e,t){var i=n[e],c=n[T][_].id,r=i.filter((function(e){return e.id!==c})).every((function(e){return!0===e.done})),o=[];i.forEach((function(e,i){o.push(n[i][t])}));var a=o.filter((function(e){return e.id!==c})).every((function(e,t){return!0===e.done})),d=[];n.forEach((function(e,t){d.push(n[t][t])}));var l=d.filter((function(e){return e.id!==c})).every((function(e,t){return!0===e.done})),s=[];n.forEach((function(e,t){s.push(n[t][n.length-t-1])}));var u=s.filter((function(e){return e.id!==c})).every((function(e,t){return!0===e.done}));r&&i.forEach((function(e){e.id!==c&&document.querySelector(".item-".concat(e.id)).classList.add("completed-card-wrapper")})),a&&i.forEach((function(e,i){n[i][t].id!==c&&document.querySelector(".item-".concat(n[i][t].id)).classList.add("completed-card-wrapper")})),l&&i.forEach((function(i,r){e===t&&n[r][r].id!==c&&document.querySelector(".item-".concat(n[r][r].id)).classList.add("completed-card-wrapper")})),u&&i.forEach((function(e,t){n[t][n.length-t-1].id!==c&&document.querySelector(".item-".concat(n[t][n.length-t-1].id)).classList.add("completed-card-wrapper")})),(r||a||l&&!w||u&&!O)&&(E(),u&&!O&&v(!0),l&&!w&&x(!0))},E=function(){j(!0),setTimeout((function(){j(!1)}),1e3)};return Object(F.jsxs)("div",{"data-testid":"home",children:[Object(F.jsx)(b.a,{ref:i,gravity:.3,width:o,height:a,numberOfPieces:f?1e3:0,recycle:!1,onConfettiComplete:function(e){e.reset()}}),Object(F.jsx)("div",{className:"container",children:Object(F.jsx)("div",{className:"content",children:n.map((function(e,t){return Object(F.jsx)("div",{className:"row",children:e.map((function(i,c){return Object(F.jsx)(M,{onClick:function(){return function(e,t){var i=Object(l.a)(n);i[e][t].done=!0,N.setData(i),A(e,t)}(t,c)},k:c,child:i,colCenter:_,rowCenter:T,index:t,item:e,empty:T===t&&_===c},i.id)}))},t)}))})})]})}));var P=function(){return Object(F.jsx)(G,{})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),i(e),c(e),r(e),o(e)}))};d.a.render(Object(F.jsx)(o.a.StrictMode,{children:Object(F.jsx)(u.a,{store:A,children:Object(F.jsx)(P,{})})}),document.getElementById("root")),q()}},[[37,1,2]]]);
//# sourceMappingURL=main.b0de1693.chunk.js.map