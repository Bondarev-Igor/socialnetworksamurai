(this.webpackJsonpwayofsamurai=this.webpackJsonpwayofsamurai||[]).push([[3],{326:function(e,t,a){e.exports={content:"Profile_content__1bSpj"}},327:function(e,t,a){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__2DD9-",mainPhoto:"ProfileInfo_mainPhoto__2NU6p"}},328:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__3j0oL",posts:"MyPosts_posts__Q40F6"}},329:function(e,t,a){e.exports={item:"Post_item__21qU-"}},330:function(e,t,a){"use strict";a.r(t);var n=a(28),s=a(29),o=a(30),i=a(31),r=a(0),u=a.n(r),E=a(326),c=a.n(E),A=a(327),l=a.n(A),m=a(32),R=a(124),I=function(e){var t=Object(r.useState)(!1),a=Object(R.a)(t,2),n=a[0],s=a[1],o=Object(r.useState)(e.status),i=Object(R.a)(o,2),E=i[0],c=i[1];Object(r.useEffect)((function(){c(e.status)}),[e.status]);return u.a.createElement(u.a.Fragment,null,!n&&u.a.createElement("div",null,u.a.createElement("span",{onDoubleClick:function(){s(!0)}},e.status||"No status")),n&&u.a.createElement("div",null,u.a.createElement("input",{onChange:function(e){c(e.currentTarget.value)},onBlur:function(){s(!1),e.updateStatus(E)},autoFocus:!0,value:E})))},p=a(95),f=a.n(p),d=function(e){if(!e.profile)return u.a.createElement(m.a,null);return u.a.createElement("div",{className:l.a.content},u.a.createElement("div",{className:l.a.descriptionBlock},u.a.createElement("img",{src:e.profile.photos.large||f.a,className:l.a.mainPhoto}),u.a.createElement("br",null),e.isOwner&&u.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length}}),u.a.createElement(I,{status:e.status,updateStatus:e.updateStatus})))},P=a(328),b=a.n(P),H=a(329),B=a.n(H),h=function(e){return u.a.createElement("div",{className:B.a.item},u.a.createElement("img",{src:"data:image/jpeg;base64,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",alt:"avatar"}),e.message,u.a.createElement("div",null,u.a.createElement("span",null,"like")," ",e.likesCount))},j=a(33),v=a.n(j),k=a(83),C=a.n(k),L=a(70),g=u.a.memo((function(e){console.log("render");var t=e.posts.map((function(e){return u.a.createElement(h,{message:e.message,likesCount:e.likesCount,key:e.id})}));u.a.createRef();return u.a.createElement("div",{className:b.a.postsBlock},u.a.createElement("h3",null,"My Posts"),u.a.createElement(V,{onSubmit:function(t){e.addPost(t.newPostText)}}),u.a.createElement("div",{className:b.a.posts},t))})),x=Object(L.a)(10),V=C()({form:"profileAddPostForm"})((function(e){return u.a.createElement("form",{onSubmit:e.handleSubmit},u.a.createElement("div",null,u.a.createElement(v.a,{component:"textarea",name:"newPostText",validate:[L.b,x]})),u.a.createElement("button",null,"Add post"))})),S=g,y=a(12),O=a(84),Q=Object(y.connect)((function(e){return{posts:e.profilePage.posts}}),(function(e){return{addPost:function(t){e(Object(O.a)(t))}}}))(S),z=function(e){return u.a.createElement("div",{className:c.a.content},u.a.createElement(d,{profile:e.profile,status:e.status,updateStatus:e.updateStatus,isOwner:e.isOwner,savePhoto:e.savePhoto}),u.a.createElement(Q,null))},Y=a(3),w=a(15),D=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return u.a.createElement(z,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),a}(u.a.Component);t.default=Object(w.compose)(Object(y.connect)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authUserId:e.auth.id,isAuth:e.auth.isAuth}}),{getUserProfile:O.d,getStatus:O.c,updateStatus:O.e}),Y.f)(D)}}]);
//# sourceMappingURL=3.fe8f8ad7.chunk.js.map