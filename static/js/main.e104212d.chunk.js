(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.c6f11019.svg"},function(e,t,a){e.exports=a.p+"static/media/loading-35.e6c4a842.gif"},,,function(e,t,a){e.exports=a(42)},,,,,function(e,t,a){},,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=(a(23),a(1)),u=a(14),i=a.n(u);a(30);var l,s=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("img",{src:i.a,alt:"\u043b\u043e\u0433\u043e\u0442\u0438\u043f \u043c\u0435\u0441\u0442\u043e \u0440\u043e\u0441\u0441\u0438\u044f",className:"header__logo"}))},p=a(2),b=a(4),d={isEditProfilePopupOpen:!1,isEditAvatarPopupOpen:!1,isAddPlacePopupOpen:!1,isZoomPopupOpen:!1,isDelConfirmPopupOpen:!1,uxBtnTitle:null},m=Object(b.c)({name:"app",initialState:d,reducers:{openEditProfilePopup:function(e){return Object(p.a)(Object(p.a)({},e),{},{uxBtnTitle:"Save",isEditProfilePopupOpen:!0})},openEditAvatarPopup:function(e){return Object(p.a)(Object(p.a)({},e),{},{uxBtnTitle:"Save",isEditAvatarPopupOpen:!0})},openZoomImagePopup:function(e){return Object(p.a)(Object(p.a)({},e),{},{isZoomPopupOpen:!0})},openAddPlacePopup:function(e){return Object(p.a)(Object(p.a)({},e),{},{uxBtnTitle:"Create",isAddPlacePopupOpen:!0})},openDelConfirmPopup:function(e,t){return Object(p.a)(Object(p.a)({},e),{},{uxBtnTitle:"Yes",selectedCard:t.payload,isDelConfirmPopupOpen:!0})},closeAllPopups:function(){return d},setUxBtnTitle:function(e,t){return Object(p.a)(Object(p.a)({},e),{},{uxBtnTitle:t.payload})}}}),f=m.actions,O=f.openEditProfilePopup,j=f.openEditAvatarPopup,v=f.openZoomImagePopup,E=f.openAddPlacePopup,_=f.openDelConfirmPopup,h=f.setUxBtnTitle,y=f.closeAllPopups,k=m.reducer,g=(a(31),function(e){var t=e.type,a=e.className,n=e.arial_label,c=e.onClick,o=e.children,u=e.isValid;return r.a.createElement("button",{disabled:u,type:t,className:a,"arial-label":n,onClick:c},o)}),C=(a(32),function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.users})).currentUser;return r.a.createElement(g,{type:"button",className:"button__edit-avatar","aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",onClick:function(){e(j())}},r.a.createElement("img",{src:t.avatar,alt:t.name,className:"avatar__image"}))}),w=(a(33),function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.users})).currentUser;return r.a.createElement("div",{className:"about"},r.a.createElement("div",{className:"about__name"},r.a.createElement("h1",{className:"title title__name text__overflow text__color_white"},t.name),r.a.createElement(g,{type:"button",className:"button button_background button__edit-profile","aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",onClick:function(){e(O())}})),r.a.createElement("p",{className:"paragraph paragraph__about text__overflow text__color_white"},t.about))}),x=a(3),N=a(16),P=a(5),R=a.n(P),S=a(6),T="https://mesto.nomoreparties.co/v1/cohort-18",V=/^[a-zA-Z\u0430-\u044f\u0410-\u042f\u0401\u0451\s-_]+$/i,D=/^(https?:\/\/)?([\da-z\\.-]+)\.([a-z\\.]{2,6})([\\/\w \\.-]*)*\/?$/,U=Object(b.b)("data/fetchCards",function(){var e=Object(S.a)(R.a.mark((function e(t,a){var n,r,c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.prev=1,e.next=4,fetch("".concat(T,"/cards"),{method:"GET",headers:{"Content-Type":"application/json",authorization:"87b27e82-ce10-439c-bbe6-2acce8f72cdc"}});case 4:if((r=e.sent).ok){e.next=7;break}throw new Error("SERVER ERROR!");case 7:return e.next=9,r.json();case 9:return c=e.sent,e.abrupt("return",c);case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",n(e.t0.message));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,a){return e.apply(this,arguments)}}()),A=Object(b.b)("data/newCard",function(){var e=Object(S.a)(R.a.mark((function e(t,a){var n,r,c,o,u;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,r=t.link,c=a.rejectWithValue,e.prev=2,e.next=5,fetch("".concat(T,"/cards"),{method:"POST",headers:{"Content-Type":"application/json",authorization:"87b27e82-ce10-439c-bbe6-2acce8f72cdc"},body:JSON.stringify({name:n,link:r})});case 5:if((o=e.sent).ok){e.next=8;break}throw new Error("SERVER ERROR! Can't add a new card.");case 8:return e.next=10,o.json();case 10:return u=e.sent,e.abrupt("return",u);case 14:return e.prev=14,e.t0=e.catch(2),e.abrupt("return",c(e.t0.message));case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t,a){return e.apply(this,arguments)}}()),F=Object(b.b)("data/likeCard",function(){var e=Object(S.a)(R.a.mark((function e(t,a){var n,r,c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.prev=1,e.next=4,fetch("".concat(T,"/cards/likes/").concat(t),{method:"PUT",headers:{"Content-Type":"application/json",authorization:"87b27e82-ce10-439c-bbe6-2acce8f72cdc"}});case 4:if((r=e.sent).ok){e.next=7;break}throw new Error("SERVER ERROR! Can't set like.");case 7:return e.next=9,r.json();case 9:return c=e.sent,e.abrupt("return",c);case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",n(e.t0.message));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,a){return e.apply(this,arguments)}}()),B=Object(b.b)("data/likeCard",function(){var e=Object(S.a)(R.a.mark((function e(t,a){var n,r,c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.prev=1,e.next=4,fetch("".concat(T,"/cards/likes/").concat(t),{method:"DELETE",headers:{"Content-Type":"application/json",authorization:"87b27e82-ce10-439c-bbe6-2acce8f72cdc"}});case 4:if((r=e.sent).ok){e.next=7;break}throw new Error("SERVER ERROR! Can't set dislike.");case 7:return e.next=9,r.json();case 9:return c=e.sent,e.abrupt("return",c);case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",n(e.t0.message));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,a){return e.apply(this,arguments)}}()),z=Object(b.b)("data/deleteCard",function(){var e=Object(S.a)(R.a.mark((function e(t,a){var n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.prev=1,e.next=4,fetch("".concat(T,"/cards/").concat(t),{method:"DELETE",headers:{"Content-Type":"application/json",authorization:"87b27e82-ce10-439c-bbe6-2acce8f72cdc"}});case 4:if(e.sent.ok){e.next=7;break}throw new Error("SERVER ERROR! Can't delete card.");case 7:return e.abrupt("return",t);case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",n(e.t0.message));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,a){return e.apply(this,arguments)}}()),L=function(e){e.statusData="loading",e.error=null},W=function(e,t){e.cards=e.cards.map((function(e){return e._id===t.payload._id?t.payload:e})),e.statusData="resolved"},I=function(e,t){e.error=t.payload,e.statusData="rejected"},Z=Object(b.c)({name:"data",initialState:{cards:[],selectedCard:[],statusData:null,error:null},reducers:{setSelectedCard:function(e,t){return Object(p.a)(Object(p.a)({},e),{},{selectedCard:t.payload})},resetSelectedCard:function(e){return Object(p.a)(Object(p.a)({},e),{},{selectedCard:[]})}},extraReducers:(l={},Object(x.a)(l,U.pending,L),Object(x.a)(l,U.fulfilled,(function(e,t){e.statusData="resolved",e.cards=t.payload})),Object(x.a)(l,U.rejected,I),Object(x.a)(l,A.pending,L),Object(x.a)(l,A.fulfilled,(function(e,t){e.statusData="resolved",e.cards=[t.payload].concat(Object(N.a)(e.cards))})),Object(x.a)(l,A.rejected,I),Object(x.a)(l,z.pending,L),Object(x.a)(l,z.fulfilled,(function(e,t){e.statusData="resolved",e.cards=e.cards.filter((function(e){return e._id!==t.payload}))})),Object(x.a)(l,z.rejected,I),Object(x.a)(l,F.fulfilled,W),Object(x.a)(l,B.fulfilled,W),Object(x.a)(l,F.rejected,I),Object(x.a)(l,B.rejected,I),l)}),J=Z.actions,G=J.setSelectedCard,H=J.resetSelectedCard,Y=Z.reducer,$=(a(35),function(e){var t=e.card,a=Object(o.b)(),n=Object(o.c)((function(e){return e.users})).currentUser,c=t.owner._id===n._id,u="button button__delete button_background ".concat(c?"":"button__delete_inactive"),i=t.likes.some((function(e){return e._id===n._id})),l="button button_background button__like ".concat(i?"button__like_active":"button__like_inactive"),s="paragraph paragraph__card ".concat(i?"text__color_red":"text__color_black");return r.a.createElement("li",{className:"card"},r.a.createElement(g,{type:"button",className:u,"aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043c\u0435\u0441\u0442\u043e",onClick:function(){a(_(t))}}),r.a.createElement(g,{type:"button",className:"button button__image","aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430 \u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"},r.a.createElement("img",{src:t.link,alt:t.name,className:"card__image",onClick:function(){a(G(t)),a(v())}})),r.a.createElement("div",{className:"card__info"},r.a.createElement("h2",{className:"title title__card text__overflow"},t.name),r.a.createElement("div",{className:"card__like"},r.a.createElement(g,{type:"button",className:l,"aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430 \u043f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043b\u0430\u0439\u043a",onClick:function(){a(i?B(t._id):F(t._id))}}),r.a.createElement("p",{className:s},t.likes.length))))}),q=a(15),K=a.n(q);a(36);var M=function(){return r.a.createElement("section",{className:"loader"},r.a.createElement("img",{src:K.a,alt:"\u0433\u0438\u0444 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430",className:"loader__gif"}))},Q=(a(37),function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.data})),a=t.cards,c=t.status;return Object(n.useEffect)((function(){e(U())}),[]),"loading"===c?r.a.createElement(M,null):r.a.createElement("ul",{className:"cardslist"},a.map((function(e){return r.a.createElement($,{key:e._id,card:e})})))}),X=(a(38),function(){var e=Object(o.b)();return r.a.createElement("main",{className:"main"},r.a.createElement("section",{className:"main__profile"},r.a.createElement(C,null),r.a.createElement(w,null),r.a.createElement(g,{type:"button",className:"button button_background button__add-place","aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043c\u0435\u0441\u0442\u043e",onClick:function(){e(E())}})),r.a.createElement(Q,null))});a(39);var ee,te=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"paragraph paragraph__footer text__color_grey"},"\xa9 2020 Pavel Khokhlov"))},ae=(a(40),function(e){var t=e.isOpen,a=e.children,c=Object(o.b)(),u=function(e){27===e.keyCode&&c(y())};Object(n.useEffect)((function(){if(t){window.addEventListener("keydown",u);var e=document.documentElement.style.getPropertyValue("--scroll-y"),a=document.body;a.style.position="fixed",a.style.top="-".concat(e)}else{window.removeEventListener("keydown",u);var n=document.body,r=n.style.top;n.style.position="",n.style.top="",window.scrollTo(0,-1*parseInt(r||"0"))}}),[t]),window.addEventListener("scroll",(function(){document.documentElement.style.setProperty("--scroll-y","".concat(window.scrollY,"px"))}));var i="popup ".concat(t?"_active":"");return r.a.createElement("section",{className:i,onClick:function(){c(y())}},a)}),ne=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.app})).isZoomPopupOpen,a=Object(o.c)((function(e){return e.data})).selectedCard,c="popup__container popup__container_zoom ".concat(t?"_active":"");Object(n.useEffect)((function(){setTimeout((function(){}),500)}),[t]);return r.a.createElement(ae,{isOpen:t},r.a.createElement("figure",{className:c,onClick:function(e){return e.stopPropagation()}},r.a.createElement(g,{type:"button",className:"button button_background button__close-popup",aria_label:"back to the page",onClick:function(){e(y()),setTimeout((function(){e(H())}),500)}}),r.a.createElement("img",{src:a.link,alt:a.name,className:"popup__image"}),r.a.createElement("figcaption",{className:"title title__caption text__color_white"},a.name)))},re={values:{name:"",about:"",link:""},errors:{name:!1,about:!1,link:!1},isFormValid:!1},ce=Object(b.c)({name:"forms",initialState:re,reducers:{handleValueChange:function(e,t){var a,n=t.payload,r=n.name,c=n.value,o="";"name"===r||"about"===r?o=(a=c).charAt(0).toUpperCase()+a.slice(1):"link"===r&&(o=c),e.values=Object(p.a)(Object(p.a)({},e.values),{},Object(x.a)({},r,o))},validateInput:function(e,t){return"name"===t.payload?0===e.values.name.length?void(e.errors=Object(p.a)(Object(p.a)({},e.errors),{},Object(x.a)({},t.payload,"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u0438\u043c\u044f"))):V.test(e.values.name)?e.values.name.length<2?void(e.errors=Object(p.a)(Object(p.a)({},e.errors),{},Object(x.a)({},t.payload,"\u0418\u043c\u044f \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 2 \u0431\u0443\u043a\u0432!"))):void(e.errors=Object(p.a)(Object(p.a)({},e.errors),{},Object(x.a)({},t.payload,!0))):void(e.errors=Object(p.a)(Object(p.a)({},e.errors),{},Object(x.a)({},t.payload,"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0431\u0443\u043a\u0432\u044b, -, _ \u0438 \u043f\u0440\u043e\u0431\u0435\u043b"))):"about"===t.payload?0===e.values.about.length?void(e.errors=Object(p.a)(Object(p.a)({},e.errors),{},Object(x.a)({},t.payload,"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u044e"))):V.test(e.values.about)?e.values.about.length<2?void(e.errors=Object(p.a)(Object(p.a)({},e.errors),{},Object(x.a)({},t.payload,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 2 \u0431\u0443\u043a\u0432!"))):void(e.errors=Object(p.a)(Object(p.a)({},e.errors),{},Object(x.a)({},t.payload,!0))):void(e.errors=Object(p.a)(Object(p.a)({},e.errors),{},Object(x.a)({},t.payload,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0431\u0443\u043a\u0432\u044b, -, _ \u0438 \u043f\u0440\u043e\u0431\u0435\u043b"))):"link"===t.payload?0===e.values.link.length?void(e.errors=Object(p.a)(Object(p.a)({},e.errors),{},Object(x.a)({},t.payload,"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u0432\u0435\u0441\u0442\u0438 URL-\u0441\u0441\u044b\u043b\u043a\u0443"))):D.test(e.values.link)?void(e.errors=Object(p.a)(Object(p.a)({},e.errors),{},Object(x.a)({},t.payload,!0))):void(e.errors=Object(p.a)(Object(p.a)({},e.errors),{},Object(x.a)({},t.payload,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0443\u044e URL-\u0441\u0441\u044b\u043b\u043a\u0443"))):void 0},validateForm:function(e,t){e.isFormValid=t.payload.every((function(t){return!0===e.errors[t]}))},disableButton:function(e){e.isFormValid=!1},resetFormCurrentUser:function(e,t){e.values={name:t.payload.name,about:t.payload.about,link:""},e.errors={name:!0,about:!0,link:!1},e.isFormValid=!1},resetForm:function(){return re}}}),oe=ce.actions,ue=oe.handleValueChange,ie=oe.validateInput,le=oe.validateForm,se=oe.disableButton,pe=oe.resetFormCurrentUser,be=oe.resetForm,de=ce.reducer,me=function(e){var t=e.isOpen,a=e.title,n=e.children,c=e.onSubmit,u=e.onValid,i=Object(o.b)(),l=Object(o.c)((function(e){return e.app})).uxBtnTitle,s="popup__container popup__container_form ".concat(t?"_active":""),p="button button__submit ".concat(u?"_active":"");return r.a.createElement(ae,{isOpen:t},r.a.createElement("form",{className:s,onClick:function(e){return e.stopPropagation()},onSubmit:c},r.a.createElement(g,{type:"button",className:"button button_background button__close-popup","aria-label":"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443",onClick:function(){i(y()),setTimeout((function(){i(be())}),500)}}),r.a.createElement("h2",{className:"popup__title"},a),n,r.a.createElement(g,{type:"submit",className:p,"aria-label":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u043f\u0440\u043e\u0444\u0438\u043b\u044c",disabled:u},l)))},fe=a(17),Oe=(a(41),function(e){var t=e.labelName,a=e.inputName,c=e.type,o=e.onChange,u=e.value,i=e.error,l=e.formDisabled,s=Object(n.useState)(!1),p=Object(fe.a)(s,2),b=p[0],d=p[1],m="paragraph paragraph__label paragraph__color_grey input__label ".concat(b||u?"input__label_focus":"input__label_blur");return r.a.createElement("label",{className:"input"},r.a.createElement("p",{className:m},t),r.a.createElement("input",{type:c,name:a,id:a,className:"input__field",onChange:o,value:u,onFocus:function(e){d(!0)},onBlur:function(e){d(!1)},disabled:l,autoComplete:"off",required:!0}),r.a.createElement("span",{className:"input__line"}),r.a.createElement("p",{className:"input__error"},i))}),je=Object(b.b)("users/getUserInfo",function(){var e=Object(S.a)(R.a.mark((function e(t,a){var n,r,c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.prev=1,e.next=4,fetch("".concat(T,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",authorization:"87b27e82-ce10-439c-bbe6-2acce8f72cdc"}});case 4:if((r=e.sent).ok){e.next=7;break}throw new Error("SERVER ERROR! Cant get user information");case 7:return e.next=9,r.json();case 9:return c=e.sent,e.abrupt("return",c);case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",n(e.t0.message));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,a){return e.apply(this,arguments)}}()),ve=Object(b.b)("users/editProfile",function(){var e=Object(S.a)(R.a.mark((function e(t,a){var n,r,c,o,u;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,r=t.about,c=a.rejectWithValue,e.prev=2,e.next=5,fetch("".concat(T,"/users/me"),{method:"PATCH",headers:{"Content-Type":"application/json",authorization:"87b27e82-ce10-439c-bbe6-2acce8f72cdc"},body:JSON.stringify({name:n,about:r})});case 5:if((o=e.sent).ok){e.next=8;break}throw new Error("SERVER ERROR! Can't update profile.");case 8:return e.next=10,o.json();case 10:return u=e.sent,e.abrupt("return",u);case 14:return e.prev=14,e.t0=e.catch(2),e.abrupt("return",c(e.t0.message));case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t,a){return e.apply(this,arguments)}}()),Ee=Object(b.b)("users/editAvatar",function(){var e=Object(S.a)(R.a.mark((function e(t,a){var n,r,c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.prev=1,e.next=4,fetch("".concat(T,"/users/me/avatar"),{method:"PATCH",headers:{"Content-Type":"application/json",authorization:"87b27e82-ce10-439c-bbe6-2acce8f72cdc"},body:JSON.stringify({avatar:t.link})});case 4:if((r=e.sent).ok){e.next=7;break}throw new Error("SERVER ERROR! Can't update avatar.");case 7:return e.next=9,r.json();case 9:return c=e.sent,e.abrupt("return",c);case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",n(e.t0.message));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,a){return e.apply(this,arguments)}}()),_e=function(e){e.statusUser="loading",e.error=null},he=function(e,t){e.statusUser="resolved",e.currentUser=t.payload},ye=function(e,t){e.statusUser="rejected",e.error=t.payload},ke=Object(b.c)({name:"users",initialState:{currentUser:{},statusUser:null,error:null},reducers:{},extraReducers:(ee={},Object(x.a)(ee,je.pending,_e),Object(x.a)(ee,ve.pending,_e),Object(x.a)(ee,Ee.pending,_e),Object(x.a)(ee,je.fulfilled,he),Object(x.a)(ee,ve.fulfilled,he),Object(x.a)(ee,Ee.fulfilled,he),Object(x.a)(ee,je.rejected,ye),Object(x.a)(ee,ve.rejected,ye),Object(x.a)(ee,Ee.rejected,ye),ee)}).reducer,ge=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.app})).isEditProfilePopupOpen,a=Object(o.c)((function(e){return e.users})),c=a.currentUser,u=a.statusUser,i=Object(o.c)((function(e){return e.form})),l=i.values,s=i.errors,p=i.isFormValid;Object(n.useEffect)((function(){!0===t&&e(pe(c)),setTimeout((function(){e(pe(c))}),500)}),[t]),Object(n.useEffect)((function(){"resolved"===u&&e(y())}),[u]);var b=function(t){var a=t.target;e(ue({name:a.name,value:a.value})),e(ie(a.name)),e(le(["name","about"]))};return r.a.createElement(me,{isOpen:t,title:"Edit profile",onSubmit:function(t){t.preventDefault(),e(h("Saving...")),e(se()),e(ve(l))},onValid:p},r.a.createElement(Oe,{type:"text",inputName:"name",labelName:"First and Last name",onChange:b,value:l.name,error:s.name}),r.a.createElement(Oe,{type:"text",inputName:"about",labelName:"Profession",onChange:b,value:l.about,error:s.about}))},Ce=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.app})).isEditAvatarPopupOpen,a=Object(o.c)((function(e){return e.form})),c=a.values,u=a.errors,i=a.isFormValid,l=Object(o.c)((function(e){return e.users})).statusUser;Object(n.useEffect)((function(){setTimeout((function(){e(be())}),500)}),[t]),Object(n.useEffect)((function(){"resolved"===l&&e(y())}),[l]);return r.a.createElement(me,{isOpen:t,title:"Update avatar",onSubmit:function(t){t.preventDefault(),e(h("Saving...")),e(se()),e(Ee(c))},onValid:i},r.a.createElement(Oe,{type:"url",inputName:"link",labelName:"Avatar's link",onChange:function(t){var a=t.target;e(ue({name:a.name,value:a.value})),e(ie(a.name)),e(le(["link"]))},value:c.link,error:u.link}))},we=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.app})).isAddPlacePopupOpen,a=Object(o.c)((function(e){return e.form})),c=a.values,u=a.errors,i=a.isFormValid,l=Object(o.c)((function(e){return e.data})).statusData;Object(n.useEffect)((function(){setTimeout((function(){e(be())}),500)}),[t]),Object(n.useEffect)((function(){"resolved"===l&&e(y())}),[l]);var s=function(t){var a=t.target;e(ue({name:a.name,value:a.value})),e(ie(a.name)),e(le(["name","link"]))};return r.a.createElement(me,{isOpen:t,title:"New place",onSubmit:function(t){t.preventDefault(),e(h("Creating...")),e(se()),e(A(c))},onValid:i},r.a.createElement(Oe,{type:"text",inputName:"name",labelName:"Place title",onChange:s,value:c.name,error:u.name}),r.a.createElement(Oe,{type:"url",inputName:"link",labelName:"Place link",onChange:s,value:c.link,error:u.link}))},xe=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.app})),a=t.isDelConfirmPopupOpen,c=t.selectedCard,u=Object(o.c)((function(e){return e.data})).statusData;Object(n.useEffect)((function(){"resolved"===u&&e(y())}),[u]);return r.a.createElement(me,{isOpen:a,title:"Are you shure?",onSubmit:function(t){t.preventDefault(),e(h("Deleting...")),e(se()),e(z(c._id))},onValid:!0})},Ne=a(11),Pe=a.n(Ne),Re=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.app})).isPopupOpen;Object(n.useEffect)((function(){e(je())}),[e]);var a=function(t){27===t.keyCode&&e(y())};return t?window.addEventListener("keydown",a)||Pe.a.disablePageScroll():window.removeEventListener("keydown",a)||Pe.a.enablePageScroll(),r.a.createElement(r.a.Fragment,null,r.a.createElement(s,null),r.a.createElement(X,null),r.a.createElement(te,null),r.a.createElement(Ce,null),r.a.createElement(ge,null),r.a.createElement(we,null),r.a.createElement(xe,null),r.a.createElement(ne,null))},Se=Object(b.a)({reducer:{app:k,users:ke,data:Y,form:de}});Object(c.render)(r.a.createElement(n.StrictMode,null,r.a.createElement(o.a,{store:Se},r.a.createElement(Re,null))),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.e104212d.chunk.js.map