(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.c6f11019.svg"},function(e,t,a){e.exports=a.p+"static/media/loading-35.e6c4a842.gif"},,function(e,t,a){e.exports=a(42)},,,,,function(e,t,a){},,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),o=(a(23),a(1)),u=a(15),i=a.n(u);a(30);var l,s=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("img",{src:i.a,alt:"\u043b\u043e\u0433\u043e\u0442\u0438\u043f \u043c\u0435\u0441\u0442\u043e \u0440\u043e\u0441\u0441\u0438\u044f",className:"header__logo"}))},p=a(3),b=a(5),m=Object(b.c)({name:"app",initialState:{isPopupOpen:!1,isEditProfilePopupOpen:!1,isEditAvatarPopupOpen:!1,isAddPlacePopupOpen:!1,isZoomPopupOpen:!1,isDelConfirmPopupOpen:!1,selectedCard:[],uxBtnTitle:null},reducers:{openEditProfilePopup:function(e){return Object(p.a)(Object(p.a)({},e),{},{uxBtnTitle:"Save",isPopupOpen:!0,isEditProfilePopupOpen:!0})},openEditAvatarPopup:function(e){return Object(p.a)(Object(p.a)({},e),{},{uxBtnTitle:"Save",isEditAvatarPopupOpen:!0,isPopupOpen:!0})},openZoomImagePopup:function(e,t){return Object(p.a)(Object(p.a)({},e),{},{selectedCard:t.payload,isZoomPopupOpen:!0,isPopupOpen:!0})},openAddPlacePopup:function(e){return Object(p.a)(Object(p.a)({},e),{},{uxBtnTitle:"Create",isAddPlacePopupOpen:!0,isPopupOpen:!0})},openDelConfirmPopup:function(e,t){return Object(p.a)(Object(p.a)({},e),{},{uxBtnTitle:"Yes",selectedCard:t.payload,isDelConfirmPopupOpen:!0,isPopupOpen:!0})},closeAllPopups:function(e){return Object(p.a)(Object(p.a)({},e),{},{isPopupOpen:!1,isEditProfilePopupOpen:!1,isEditAvatarPopupOpen:!1,isAddPlacePopupOpen:!1,isZoomPopupOpen:!1,isDelConfirmPopupOpen:!1})},setUxBtnTitle:function(e,t){return Object(p.a)(Object(p.a)({},e),{},{uxBtnTitle:t.payload})}}}),d=m.actions,f=d.openEditProfilePopup,O=d.openEditAvatarPopup,v=d.openZoomImagePopup,h=d.openAddPlacePopup,_=d.openDelConfirmPopup,j=d.setUxBtnTitle,E=d.closeAllPopups,g=m.reducer,k=(a(31),function(e){var t=e.type,a=e.className,n=e.arial_label,c=e.onClick,o=e.children,u=e.isValid;return r.a.createElement("button",{disabled:u,type:t,className:a,"arial-label":n,onClick:c},o)}),P=(a(32),function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.users})).currentUser;return r.a.createElement("div",{className:"avatar"},r.a.createElement("img",{src:t.avatar,alt:t.name,className:"avatar__image"}),r.a.createElement(k,{type:"button",className:"button__edit-avatar","aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",onClick:function(){e(O())}}))}),C=(a(33),function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.users})).currentUser;return r.a.createElement("div",{className:"about"},r.a.createElement("div",{className:"about__name"},r.a.createElement("h1",{className:"title title__name text__overflow text__color_white"},t.name),r.a.createElement(k,{type:"button",className:"button button_background button__edit-profile","aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",onClick:function(){e(f())}})),r.a.createElement("p",{className:"paragraph paragraph__about text__overflow text__color_white"},t.about))}),y=a(2),N=a(17),x=a(4),w=a.n(x),R=a(6),T="https://mesto.nomoreparties.co/v1/cohort-18",S=/^[^@]+@[^@.]+\.[^@]+$/,V=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{8,}/,A=/^(https?:\/\/)?([\da-z\\.-]+)\.([a-z\\.]{2,6})([\\/\w \\.-]*)*\/?$/,D=Object(b.b)("data/fetchCards",function(){var e=Object(R.a)(w.a.mark((function e(t,a){var n,r,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.prev=1,e.next=4,fetch("".concat(T,"/cards"),{method:"GET",headers:{"Content-Type":"application/json",authorization:"87b27e82-ce10-439c-bbe6-2acce8f72cdc"}});case 4:if((r=e.sent).ok){e.next=7;break}throw new Error("SERVER ERROR!");case 7:return e.next=9,r.json();case 9:return c=e.sent,e.abrupt("return",c);case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",n(e.t0.message));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,a){return e.apply(this,arguments)}}()),U=Object(b.b)("data/newCard",function(){var e=Object(R.a)(w.a.mark((function e(t,a){var n,r,c,o,u;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,r=t.link,c=a.rejectWithValue,a.dispatch,e.prev=2,e.next=5,fetch("".concat(T,"/cards"),{method:"POST",headers:{"Content-Type":"application/json",authorization:"87b27e82-ce10-439c-bbe6-2acce8f72cdc"},body:JSON.stringify({name:n,link:r})});case 5:if((o=e.sent).ok){e.next=8;break}throw new Error("SERVER ERROR! Can't add a new card.");case 8:return e.next=10,o.json();case 10:return u=e.sent,e.abrupt("return",u);case 14:return e.prev=14,e.t0=e.catch(2),e.abrupt("return",c(e.t0.message));case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t,a){return e.apply(this,arguments)}}()),z=Object(b.b)("data/likeCard",function(){var e=Object(R.a)(w.a.mark((function e(t,a){var n,r,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.prev=1,e.next=4,fetch("".concat(T,"/cards/likes/").concat(t),{method:"PUT",headers:{"Content-Type":"application/json",authorization:"87b27e82-ce10-439c-bbe6-2acce8f72cdc"}});case 4:if((r=e.sent).ok){e.next=7;break}throw new Error("SERVER ERROR! Can't set like.");case 7:return e.next=9,r.json();case 9:return c=e.sent,e.abrupt("return",c);case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",n(e.t0.message));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,a){return e.apply(this,arguments)}}()),B=Object(b.b)("data/likeCard",function(){var e=Object(R.a)(w.a.mark((function e(t,a){var n,r,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.prev=1,e.next=4,fetch("".concat(T,"/cards/likes/").concat(t),{method:"DELETE",headers:{"Content-Type":"application/json",authorization:"87b27e82-ce10-439c-bbe6-2acce8f72cdc"}});case 4:if((r=e.sent).ok){e.next=7;break}throw new Error("SERVER ERROR! Can't set dislike.");case 7:return e.next=9,r.json();case 9:return c=e.sent,e.abrupt("return",c);case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",n(e.t0.message));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,a){return e.apply(this,arguments)}}()),F=Object(b.b)("data/deleteCard",function(){var e=Object(R.a)(w.a.mark((function e(t,a){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.prev=1,e.next=4,fetch("".concat(T,"/cards/").concat(t),{method:"DELETE",headers:{"Content-Type":"application/json",authorization:"87b27e82-ce10-439c-bbe6-2acce8f72cdc"}});case 4:if(e.sent.ok){e.next=7;break}throw new Error("SERVER ERROR! Can't delete card.");case 7:return e.abrupt("return",t);case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",n(e.t0.message));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,a){return e.apply(this,arguments)}}()),W=function(e,t){e.status="resolved",e.cards=e.cards.map((function(e){return e._id===t.payload._id?t.payload:e}))},L=function(e,t){e.status="rejected",e.error=t.payload},Z=Object(b.c)({name:"data",initialState:{cards:[],status:null,error:null},reducers:{},extraReducers:(l={},Object(y.a)(l,D.pending,(function(e){e.status="loading",e.error=null})),Object(y.a)(l,D.fulfilled,(function(e,t){e.status="resolved",e.cards=t.payload})),Object(y.a)(l,U.fulfilled,(function(e,t){e.status="resolved",e.cards=[t.payload].concat(Object(N.a)(e.cards))})),Object(y.a)(l,F.fulfilled,(function(e,t){e.status="resolved",e.cards=e.cards.filter((function(e){return e._id!==t.payload}))})),Object(y.a)(l,z.fulfilled,W),Object(y.a)(l,B.fulfilled,W),Object(y.a)(l,D.rejected,L),Object(y.a)(l,U.rejected,L),Object(y.a)(l,z.rejected,L),Object(y.a)(l,B.rejected,L),Object(y.a)(l,F.rejected,L),l)}).reducer,J=(a(35),function(e){var t=e.card,a=Object(o.b)(),n=Object(o.c)((function(e){return e.users})).currentUser,c=t.owner._id===n._id,u="button button__delete button_background ".concat(c?"":"button__delete_inactive"),i=t.likes.some((function(e){return e._id===n._id})),l="button button_background button__like ".concat(i?"button__like_active":"button__like_inactive"),s="paragraph paragraph__card ".concat(i?"text__color_red":"text__color_black");return r.a.createElement("li",{className:"card"},r.a.createElement(k,{type:"button",className:u,"aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043c\u0435\u0441\u0442\u043e",onClick:function(){a(_(t))}}),r.a.createElement(k,{type:"button",className:"button button__image","aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430 \u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"},r.a.createElement("img",{src:t.link,alt:t.name,className:"card__image",onClick:function(){a(v(t))}})),r.a.createElement("div",{className:"card__info"},r.a.createElement("h2",{className:"title title__card text__overflow"},t.name),r.a.createElement("div",{className:"card__like"},r.a.createElement(k,{type:"button",className:l,"aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430 \u043f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043b\u0430\u0439\u043a",onClick:function(){a(i?B(t._id):z(t._id))}}),r.a.createElement("p",{className:s},t.likes.length))))}),I=a(16),q=a.n(I);a(36);var G=function(){return r.a.createElement("section",{className:"loader"},r.a.createElement("img",{src:q.a,alt:"\u0433\u0438\u0444 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430",className:"loader__gif"}))},H=(a(37),function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.data})),a=t.cards,c=t.status;return Object(n.useEffect)((function(){e(D())}),[]),"loading"===c?r.a.createElement(G,null):r.a.createElement("ul",{className:"cardslist"},a.map((function(e){return r.a.createElement(J,{key:e._id,card:e})})))}),$=(a(38),function(){var e=Object(o.b)();return r.a.createElement("main",{className:"main"},r.a.createElement("section",{className:"main__profile"},r.a.createElement(P,null),r.a.createElement(C,null),r.a.createElement(k,{type:"button",className:"button button_background button__add-place","aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043c\u0435\u0441\u0442\u043e",onClick:function(){e(h())}})),r.a.createElement(H,null))});a(39);var K=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"paragraph paragraph__footer text__color_grey"},"\xa9 2020 Pavel Khokhlov"))},M=(a(40),function(e){var t=e.isOpen,a=e.children,n=Object(o.b)(),c="popup ".concat(t?"popup_active":"popup_inactive");return r.a.createElement("section",{className:c,onClick:function(){n(E())}},a)}),Y=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.app})),a=t.isZoomPopupOpen,c=t.selectedCard,u="popup__container popup__container_zoom ".concat(a?"popup__container_active":"");Object(n.useEffect)((function(){setTimeout((function(){}),500)}),[a]);return r.a.createElement(M,{isOpen:a},r.a.createElement("figure",{className:u,onClick:function(e){return e.stopPropagation()}},r.a.createElement(k,{type:"button",className:"button button_background button__close-popup",aria_label:"back to the page",onClick:function(){e(E())}}),r.a.createElement("img",{src:c.link,alt:c.name,className:"popup__image"}),r.a.createElement("figcaption",{className:"title title__caption text__color_black"},c.name)))},Q=a(7);function X(){var e=Object(o.c)((function(e){return e.users})).currentUser,t=Object(n.useState)({}),a=Object(Q.a)(t,2),r=a[0],c=a[1],u=Object(n.useState)({}),i=Object(Q.a)(u,2),l=i[0],s=i[1],b=Object(n.useState)(!1),m=Object(Q.a)(b,2),d=m[0],f=m[1],O=Object(n.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];c(e),s(t),f(a)}),[c,s,f]),v=Object(n.useCallback)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];c(t),s(a),f(n)}),[c,s,f,e]);return{values:r,errors:l,isValid:d,handleChange:function(e){var t=e.target,a=t.name,n=t.value;c(Object(p.a)(Object(p.a)({},r),{},Object(y.a)({},a,n))),s(Object(p.a)(Object(p.a)({},l),{},Object(y.a)({},a,function(e){return"name"===e.name?0===e.value.length?"Required":e.value.length<2?"The name must be more 2 symbols":"":"lastname"===e.name?0===e.value.length?"Please enter the name":e.value.length<2?"The lastname must be more 2 symbols":"":"about"===e.name?0===e.value.length?"Required":e.value.length<8?"The description must be more 8 symbols":"":"email"===e.name?0===e.value.length?"Please enter the E-mail":S.test(e.value)?"":"Please enter the correct email":"password"===e.name?0===e.value.length?"Please enter the password":e.value.length<8?"The password must be more than 8 symbols":V.test(e.value)?"":"The password must include numbers, lowcase and uppercase letters":"link"===e.name?0===e.value.length?"Please enter the link":A.test(e.value)?"":"Please enter the correct link":void 0}(t)))),f(t.closest("form").checkValidity())},setValues:c,resetForm:O,resetFormCurrentUser:v}}var ee,te=function(e){var t=e.isOpen,a=e.title,n=e.children,c=e.onSubmit,u=e.onValid,i=e.formReset,l=Object(o.b)(),s=Object(o.c)((function(e){return e.app})).uxBtnTitle,p="popup__container popup__container_form ".concat(t?"popup__container_active":""),b="button button__submit ".concat(u?"button__submit_active":"button__submit_inactive");return r.a.createElement(M,{isOpen:t,resetForm:i},r.a.createElement("form",{className:p,onClick:function(e){return e.stopPropagation()},onSubmit:c},r.a.createElement(k,{type:"button",className:"button button_background button__close-popup","aria-label":"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443",onClick:function(){l(E()),setTimeout((function(){i()}),500)}}),r.a.createElement("h2",{className:"popup__title"},a),n,r.a.createElement(k,{type:"submit",className:b,"aria-label":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u043f\u0440\u043e\u0444\u0438\u043b\u044c",disabled:!u},s)))},ae=(a(41),function(e){var t=e.labelName,a=e.inputName,c=e.type,o=e.onChange,u=e.value,i=e.errors,l=e.formDisabled,s=e.minLength,p=Object(n.useState)(!1),b=Object(Q.a)(p,2),m=b[0],d=b[1],f="paragraph paragraph__label paragraph__color_grey input__label ".concat(m||u.length?"input__label_focus":"input__label_blur");return r.a.createElement("label",{className:"input"},r.a.createElement("p",{className:f},t),r.a.createElement("input",{type:c,name:a,id:a,className:"input__field",onChange:o,value:u||"",onFocus:function(e){d(!0)},onBlur:function(e){d(!1)},disabled:l,minLength:s,autoComplete:"off",required:!0}),r.a.createElement("span",{className:"input__line"}),r.a.createElement("p",{className:"input__error"},i))}),ne=Object(b.b)("users/getUserInfo",function(){var e=Object(R.a)(w.a.mark((function e(t,a){var n,r,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.prev=1,e.next=4,fetch("".concat(T,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",authorization:"87b27e82-ce10-439c-bbe6-2acce8f72cdc"}});case 4:if((r=e.sent).ok){e.next=7;break}throw new Error("SERVER ERROR! Cant get user information");case 7:return e.next=9,r.json();case 9:return c=e.sent,e.abrupt("return",c);case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",n(e.t0.message));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,a){return e.apply(this,arguments)}}()),re=Object(b.b)("users/editProfile",function(){var e=Object(R.a)(w.a.mark((function e(t,a){var n,r,c,o,u;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,r=t.about,c=a.rejectWithValue,e.prev=2,e.next=5,fetch("".concat(T,"/users/me"),{method:"PATCH",headers:{"Content-Type":"application/json",authorization:"87b27e82-ce10-439c-bbe6-2acce8f72cdc"},body:JSON.stringify({name:n,about:r})});case 5:if((o=e.sent).ok){e.next=8;break}throw new Error("SERVER ERROR! Can't update profile.");case 8:return e.next=10,o.json();case 10:return u=e.sent,e.abrupt("return",u);case 14:return e.prev=14,e.t0=e.catch(2),e.abrupt("return",c(e.t0.message));case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t,a){return e.apply(this,arguments)}}()),ce=Object(b.b)("users/editAvatar",function(){var e=Object(R.a)(w.a.mark((function e(t,a){var n,r,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.prev=1,e.next=4,fetch("".concat(T,"/users/me/avatar"),{method:"PATCH",headers:{"Content-Type":"application/json",authorization:"87b27e82-ce10-439c-bbe6-2acce8f72cdc"},body:JSON.stringify({avatar:t.link})});case 4:if((r=e.sent).ok){e.next=7;break}throw new Error("SERVER ERROR! Can't update avatar.");case 7:return e.next=9,r.json();case 9:return c=e.sent,e.abrupt("return",c);case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",n(e.t0.message));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,a){return e.apply(this,arguments)}}()),oe=function(e,t){e.status="loading",e.error=null},ue=function(e,t){e.status="resolved",e.currentUser=t.payload},ie=function(e,t){e.status="rejected",e.error=t.payload},le=Object(b.c)({name:"users",initialState:{currentUser:{},status:null,error:null},reducers:{},extraReducers:(ee={},Object(y.a)(ee,ne.pending,oe),Object(y.a)(ee,re.pending,oe),Object(y.a)(ee,ce.pending,oe),Object(y.a)(ee,ne.fulfilled,ue),Object(y.a)(ee,re.fulfilled,ue),Object(y.a)(ee,ce.fulfilled,ue),Object(y.a)(ee,ne.rejected,ie),Object(y.a)(ee,re.rejected,ie),Object(y.a)(ee,ce.rejected,ie),ee)}).reducer,se=function(){var e=Object(o.b)(),t=X(),a=t.values,c=t.errors,u=t.isValid,i=t.handleChange,l=t.resetFormCurrentUser,s=Object(o.c)((function(e){return e.app})).isEditProfilePopupOpen,p=Object(o.c)((function(e){return e.users})).status;Object(n.useEffect)((function(){!0===s&&l(),setTimeout((function(){l()}),500)}),[s]),Object(n.useEffect)((function(){"resolved"===p&&(e(E()),setTimeout((function(){e(j(null))}),500))}),[p]);return r.a.createElement(te,{isOpen:s,title:"Edit profile",formReset:l,onSubmit:function(t){t.preventDefault(),e(j("Saving...")),e(re(a))},onValid:u},r.a.createElement(ae,{type:"text",inputName:"name",labelName:"First and Last name",value:a.name||"",onChange:i,errors:c.name}),r.a.createElement(ae,{type:"text",inputName:"about",labelName:"Profession",value:a.about||"",onChange:i,errors:c.about}))},pe=function(){var e=Object(o.b)(),t=X(),a=t.values,c=t.errors,u=t.isValid,i=t.handleChange,l=t.resetForm,s=Object(o.c)((function(e){return e.app})).isEditAvatarPopupOpen,p=Object(o.c)((function(e){return e.users})).status;Object(n.useEffect)((function(){setTimeout((function(){l()}),500)}),[s]),Object(n.useEffect)((function(){"resolved"===p&&(e(E()),setTimeout((function(){e(j(null))}),500))}),[p]);return r.a.createElement(te,{isOpen:s,title:"Update avatar",formReset:l,onSubmit:function(t){t.preventDefault(),e(j("Saving...")),e(ce(a))},onValid:u},r.a.createElement(ae,{type:"url",inputName:"link",labelName:"Avatar's link",value:a.link||"",onChange:i,errors:c.link}))},be=function(){var e=Object(o.b)(),t=X(),a=t.values,c=t.errors,u=t.isValid,i=t.handleChange,l=t.resetForm,s=Object(o.c)((function(e){return e.app})).isAddPlacePopupOpen,p=Object(o.c)((function(e){return e.data})).status;Object(n.useEffect)((function(){setTimeout((function(){l()}),500)}),[s]),Object(n.useEffect)((function(){"resolved"===p&&(e(E()),setTimeout((function(){e(j(null))}),500))}),[p]);return r.a.createElement(te,{isOpen:s,title:"New place",formReset:l,onSubmit:function(t){t.preventDefault(),e(j("Creating...")),e(U(a))},onValid:u},r.a.createElement(ae,{type:"text",inputName:"name",labelName:"Place title",value:a.name||"",onChange:i,errors:c.name}),r.a.createElement(ae,{type:"url",inputName:"link",labelName:"Place link",value:a.link||"",onChange:i,errors:c.link}))},me=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.app})),a=t.isDelConfirmPopupOpen,c=t.selectedCard,u=Object(o.c)((function(e){return e.data})).status;Object(n.useEffect)((function(){"resolved"===u&&(e(E()),setTimeout((function(){e(j(null))}),500))}),[u]);return r.a.createElement(te,{isOpen:a,title:"Are you shure?",onSubmit:function(t){t.preventDefault(),e(j("Deleting...")),e(F(c._id))},onValid:!0})},de=a(12),fe=a.n(de),Oe=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.app})).isPopupOpen;Object(n.useEffect)((function(){e(ne())}),[e]);var a=function(t){27===t.keyCode&&e(E())};return t?window.addEventListener("keydown",a)||fe.a.disablePageScroll():window.removeEventListener("keydown",a)||fe.a.enablePageScroll(),r.a.createElement(r.a.Fragment,null,r.a.createElement(s,null),r.a.createElement($,null),r.a.createElement(K,null),r.a.createElement(pe,null),r.a.createElement(se,null),r.a.createElement(be,null),r.a.createElement(me,null),r.a.createElement(Y,null))},ve=Object(b.a)({reducer:{app:g,users:le,data:Z}});Object(c.render)(r.a.createElement(n.StrictMode,null,r.a.createElement(o.a,{store:ve},r.a.createElement(Oe,null))),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.c9bd963c.chunk.js.map