(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),o=n.n(a),i=n(6),s=n.n(i),r=(n(15),n(9)),l=n(2),u=n.p+"static/media/logo.a307e1c4.svg";var p=function(){return Object(c.jsx)("header",{className:"header",children:Object(c.jsx)("img",{src:u,alt:"\u043b\u043e\u0433\u043e\u0442\u0438\u043f \u043c\u0435\u0441\u0442\u043e \u0440\u043e\u0441\u0441\u0438\u044f",className:"logo"})})},d=o.a.createContext(),b=function(e){var t=o.a.useContext(d),n=e.card.owner._id===t._id,a="button place__del-btn ".concat(n?"":"place__del-btn_disable"),i=e.card.likes.some((function(e){return e._id===t._id})),s="button place__like-btn ".concat(i?"place__like-btn_active":"");return Object(c.jsxs)("li",{className:"place",children:[Object(c.jsx)("button",{type:"button",className:a,"aria-label":"\u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043c\u0435\u0441\u0442\u043e",onClick:function(){e.onCardDelete(e.card)}}),Object(c.jsx)("button",{type:"button",className:"button place__img-btn",children:Object(c.jsx)("img",{src:e.card.link,alt:e.card.name,className:"place__image",onClick:function(){e.onCardClick(e.card)}})}),Object(c.jsxs)("div",{className:"place__info",children:[Object(c.jsx)("h2",{className:"place__title",children:e.card.name}),Object(c.jsxs)("div",{className:"place__like-area",children:[Object(c.jsx)("button",{type:"button",className:s,"aria-label":"\u043f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043b\u0430\u0439\u043a",onClick:function(){e.onCardLike(e.card)}}),Object(c.jsx)("p",{className:"paragraph place__like-count",children:e.card.likes.length})]})]})]})},j=function(e){var t=Object(a.useContext)(d);return Object(c.jsxs)("main",{className:"main",children:[Object(c.jsxs)("section",{className:"profile",children:[Object(c.jsxs)("div",{className:"profile__avatar-area",children:[Object(c.jsx)("img",{src:t.avatar,alt:t.name,className:"profile__avatar"}),Object(c.jsx)("button",{type:"button",className:"profile__avatar-btn","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",onClick:e.onEditAvatar})]}),Object(c.jsxs)("div",{className:"profile__info",children:[Object(c.jsxs)("div",{className:"profile__block-name",children:[Object(c.jsx)("h1",{className:"profile__name",children:t.name}),Object(c.jsx)("button",{type:"button",className:"button profile__edit-btn","aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",onClick:e.onEditProfile})]}),Object(c.jsx)("p",{className:"profile__job",children:t.about})]}),Object(c.jsx)("button",{type:"button",className:"button profile__add-btn","aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043c\u0435\u0441\u0442\u043e",onClick:e.onAddPlace})]}),Object(c.jsx)("ul",{className:"places",children:e.cards.map((function(t){return Object(c.jsx)(b,{card:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})]})};var f=function(){return Object(c.jsx)("footer",{className:"footer",children:Object(c.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})},h=function(e){var t=e.isOpen,n="popup popup-zoom ".concat(t?"popup_opened":"");return Object(c.jsx)("section",{className:n,onClick:e.onClose,children:Object(c.jsxs)("figure",{className:"popup-zoom__container",onClick:function(e){return e.stopPropagation()},children:[Object(c.jsx)("button",{type:"button",className:"button popup__close-btn","aria-label":"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443",onClick:e.onClose}),Object(c.jsx)("img",{src:e.card.link,alt:e.card.name,className:"popup-zoom__image"}),Object(c.jsx)("figcaption",{className:"popup-zoom__caption",children:e.card.name})]})})},m=function(e){var t="popup ".concat(e.isOpen?"popup_opened":"");return Object(c.jsx)("section",{className:t,onClick:e.onClose,children:Object(c.jsxs)("form",{className:"popup__container",method:"post",noValidate:!0,onClick:function(e){return e.stopPropagation()},onSubmit:e.onSubmit,children:[Object(c.jsx)("button",{type:"button",className:"button popup__close-btn","aria-label":"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443",onClick:e.onClose}),Object(c.jsx)("h2",{className:"popup__title",children:e.title}),e.children,Object(c.jsx)("button",{type:"submit",className:"popup__save-btn ".concat(e.onValid?"popup__save-btn_inactive":""),"aria-label":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u043f\u0440\u043e\u0444\u0438\u043b\u044c",children:e.button})]})})},O=function(e){var t=Object(a.useContext)(d),n=Object(a.useState)(""),o=Object(l.a)(n,2),i=o[0],s=o[1],r=Object(a.useState)(""),u=Object(l.a)(r,2),p=u[0],b=u[1];Object(a.useEffect)((function(){setTimeout((function(){s(t.name),b(t.about)}),500)}),[t,e.isOpen]);return Object(c.jsxs)(m,{isOpen:e.isOpen,onClose:function(){e.onClose()},title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",button:e.button,onSubmit:function(t){t.preventDefault(),e.onUpdateUser(i,p)},children:[Object(c.jsx)("input",{type:"text",className:"popup__input",placeholder:"\u0418\u043c\u044f \u0424\u0430\u043c\u0438\u043b\u0438\u044f",value:i||"",onChange:function(e){s(e.target.value)}}),Object(c.jsx)("span",{id:"fullName-error",className:"popup__input-error"}),Object(c.jsx)("input",{type:"text",className:"popup__input",placeholder:"\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u044f \u0438\u043b\u0438 \u0434\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c",value:p||"",onChange:function(e){b(e.target.value)}}),Object(c.jsx)("span",{id:"jobPosition-error",className:"popup__input-error"})]})},_=function(e){var t=Object(a.useState)({link:"",formErrors:"",linklValid:!0,formValid:!0}),n=Object(l.a)(t,2),o=n[0],i=n[1];Object(a.useEffect)((function(){i({link:"",formErrors:"",linklValid:!0,formValid:!0})}),[e.isOpen]);return Object(c.jsxs)(m,{isOpen:e.isOpen,onClose:function(){e.onClose()},title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",button:e.button,onSubmit:function(t){t.preventDefault(),e.onUpdateAvatar({link:o.link})},onValid:o.formValid,children:[Object(c.jsx)("input",{type:"url",name:"link",className:"popup__input ".concat(o.linkValid?"popup__input_invalid":""),placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",autoComplete:"off",value:o.link||"",onChange:function(e){var t;i(e.target.value),t=e.target.value,/^(ftp|http|https):\/\/[^ "]+$/.test(t)?i({link:t,formErrors:"",linklValid:!1,formValid:!1}):i({link:t,formErrors:"\u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0443",linkValid:!0,formValid:!0})}}),Object(c.jsx)("span",{id:"avatarLink-error",className:"popup__input-error ".concat(o.formValid?"popup__input-error_active":""),children:o.formErrors})]})},k=function(e){var t=Object(a.useRef)(""),n=Object(a.useRef)("");Object(a.useEffect)((function(){setTimeout((function(){o()}),500)}),[e.isOpen]);var o=function(){n.current.value="",t.current.value=""};return Object(c.jsxs)(m,{isOpen:e.isOpen,onClose:function(){e.onClose()},title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",button:e.button,onSubmit:function(c){c.preventDefault(),e.onAddPlace({name:n.current.value,link:t.current.value,fn:o})},children:[Object(c.jsx)("input",{ref:n,type:"text",id:"placeName",name:"name",className:"popup__input popup__input_name-place",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",autoComplete:"off",minLength:2,maxLength:30,required:!0}),Object(c.jsx)("span",{id:"placeName-error",className:"popup__input-error"}),Object(c.jsx)("input",{ref:t,type:"url",id:"placeLink",name:"link",className:"popup__input popup__input_link-place",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",autoComplete:"off",required:!0}),Object(c.jsx)("span",{id:"placeLink-error",className:"popup__input-error"})]})},v=function(e){return Object(c.jsx)(m,{isOpen:e.isOpen,onClose:e.onClose,name:"del-place",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u043d\u044b?",button:e.button,onSubmit:function(t){t.preventDefault(),e.onConfirmDelete()}})},x=n(7),C=n(8),N=new(function(){function e(t){Object(x.a)(this,e),this.url=t.url,this.headers=t.headers}return Object(C.a)(e,[{key:"getPlaces",value:function(){return fetch("".concat(this.url,"/cards"),{headers:this.headers}).then(this._checkPromise)}},{key:"newPlace",value:function(e,t){return fetch("".concat(this.url,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify(e,t)}).then(this._checkPromise)}},{key:"getUserInfo",value:function(){return fetch("".concat(this.url,"/users/me"),{headers:this.headers}).then(this._checkPromise)}},{key:"patchUserInfo",value:function(e,t){return fetch("".concat(this.url,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify(e,t)}).then(this._checkPromise)}},{key:"patchUserAvatar",value:function(e){return fetch("".concat(this.url,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:e})}).then(this._checkPromise)}},{key:"changeLikeCardStatus",value:function(e,t){return t?this.removeLike(e):this.addLike(e)}},{key:"addLike",value:function(e){return fetch("".concat(this.url,"/cards/likes/").concat(e),{method:"PUT",headers:this.headers}).then(this._checkPromise)}},{key:"removeLike",value:function(e){return fetch("".concat(this.url,"/cards/likes/").concat(e),{method:"DELETE",headers:this.headers}).then(this._checkPromise)}},{key:"deleteCard",value:function(e){return fetch("".concat(this.url,"/cards/").concat(e),{method:"DELETE",headers:this.headers}).then(this._checkPromise)}},{key:"_checkPromise",value:function(e){return e.ok||Promise.reject("Error ".concat(e.status)),e.json()}}]),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-18",headers:{"Content-Type":"application/json",authorization:"87b27e82-ce10-439c-bbe6-2acce8f72cdc"}}),g=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)(""),s=Object(l.a)(i,2),u=s[0],b=s[1],m=Object(a.useState)(!1),x=Object(l.a)(m,2),C=x[0],g=x[1],y=Object(a.useState)(!1),P=Object(l.a)(y,2),S=P[0],E=P[1],L=Object(a.useState)(!1),w=Object(l.a)(L,2),D=w[0],V=w[1],U=Object(a.useState)(!1),A=Object(l.a)(U,2),T=A[0],I=A[1],z=Object(a.useState)(!1),J=Object(l.a)(z,2),F=J[0],R=J[1],q=Object(a.useState)(!1),B=Object(l.a)(q,2),H=B[0],M=B[1],$=Object(a.useState)(""),G=Object(l.a)($,2),K=G[0],Q=G[1],W=Object(a.useState)("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),X=Object(l.a)(W,2),Y=X[0],Z=X[1],ee=Object(a.useState)("\u0421\u043e\u0437\u0434\u0430\u0442\u044c"),te=Object(l.a)(ee,2),ne=te[0],ce=te[1],ae=Object(a.useState)("\u0414\u0430"),oe=Object(l.a)(ae,2),ie=oe[0],se=oe[1];Object(a.useEffect)((function(){N.getUserInfo().then((function(e){b(e)})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f: ".concat(e.status))}))}),[]),Object(a.useEffect)((function(){N.getPlaces().then((function(e){o(e)})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u043a\u0430\u0440\u0442\u043e\u0447\u0435\u043a \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430: ".concat(e.status))}))}),[]);var re=function(e){27===e.keyCode&&ue()},le=function(e){se("\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435..."),N.deleteCard(e._id).then((function(t){console.log(t);var c=n.filter((function(t){return t._id!==e._id}));o(c)})).then((function(){return ue()})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438: ".concat(e.status))}))},ue=function(){V(!1),g(!1),E(!1),I(!1),R(!1),Q(""),Z("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),ce("\u0421\u043e\u0437\u0434\u0430\u0442\u044c"),se("\u0414\u0430"),window.removeEventListener("keydown",re)};return Object(c.jsxs)(d.Provider,{value:u,children:[Object(c.jsx)(p,{}),Object(c.jsx)(j,{cards:n,onEditAvatar:function(){V(!0),window.addEventListener("keydown",re)},onEditProfile:function(){g(!0),window.addEventListener("keydown",re)},onAddPlace:function(){E(!0),window.addEventListener("keydown",re)},onCardClick:function(e){M(e),setTimeout((function(){R(!0)}),500),window.addEventListener("keydown",re)},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===u._id}));N.changeLikeCardStatus(e._id,t).then((function(t){var c=n.map((function(n){return n._id===e._id?t:n}));o(c)})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))},onCardDelete:function(e){I(!0),Q(e),window.addEventListener("keydown",re)}}),Object(c.jsx)(f,{}),Object(c.jsx)(_,{isOpen:D,button:Y,onClose:ue,onUpdateAvatar:function(e){var t=e.link;Z("\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435..."),N.patchUserAvatar(t).then((function(e){b(e)})).then((function(){return ue()})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0430\u0432\u0430\u0442\u0430\u0440\u0430: ".concat(e.status))}))}}),Object(c.jsx)(O,{isOpen:C,button:Y,onClose:ue,onUpdateUser:function(e,t){Z("\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435..."),N.patchUserInfo({name:e,about:t}).then((function(e){b(e)})).then((function(){return ue()})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0444\u0438\u043b\u044f: ".concat(e.status))}))}}),Object(c.jsx)(k,{isOpen:S,button:ne,onClose:ue,onAddPlace:function(e){var t=e.name,c=e.link,a=e.fn;ce("\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435..."),N.newPlace({name:t,link:c}).then((function(e){o([e].concat(Object(r.a)(n)))})).then((function(){return ue()})).then((function(){return a()})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438: ".concat(e.status))}))}}),Object(c.jsx)(v,{isOpen:T,button:ie,onClose:ue,onCardDelete:le,onConfirmDelete:function(){le(K),ue()}}),Object(c.jsx)(h,{isOpen:F,card:H,onClose:ue})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),o(e),i(e)}))};s.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root")),y()}},[[16,1,2]]]);
//# sourceMappingURL=main.8394d554.chunk.js.map