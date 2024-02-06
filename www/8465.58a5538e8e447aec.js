"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8465],{38465:(O,f,n)=>{n.r(f),n.d(f,{ProfilePageModule:()=>_});var P=n(36895),h=n(24006),l=n(48058),g=n(64228),s=n(97582),v=n(7053),C=n(64837),A=n(25817),e=n(98274),Z=n(30070),T=n(77044),U=n(90849),m=n(67705),y=n(34032);const M=[{path:"",component:(()=>{class i{constructor(u,t,o,r,a,d,p,E){this.navCtrl=u,this.authService=t,this.router=o,this.modalController=r,this.alert=a,this.camera=d,this.transfer=p,this.storage=E,this.phone="",this.name="",this.country="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435",this.city="\u043e\u0440\u043e\u0434"}ngOnInit(){var u,t,o,r,a;this.id=null===(u=this.authService.currentUser)||void 0===u?void 0:u.id,this.phone=null===(t=this.authService.currentUser)||void 0===t?void 0:t.phone,this.name=null===(o=this.authService.currentUser)||void 0===o?void 0:o.name,this.country=null===(r=this.authService.currentUser)||void 0===r?void 0:r.country,this.city=null===(a=this.authService.currentUser)||void 0===a?void 0:a.city}ngAfterViewInit(){(0,C.lq)()}back(){this.navCtrl.back()}cropUpload(){return(0,s.mG)(this,void 0,void 0,function*(){this.camera.getPicture({quality:50,destinationType:this.camera.DestinationType.FILE_URI,encodingType:this.camera.EncodingType.JPEG,mediaType:this.camera.MediaType.PICTURE,sourceType:this.camera.PictureSourceType.PHOTOLIBRARY}).then(t=>{const o=this.transfer.create(),a={headers:{Authorization:"Bearer "+v.$.jwt},fileKey:"file",mimeType:"image/jpeg",chunkedMode:!1,fileName:t.substr(t.lastIndexOf("/")+1),params:{typeUser:"client",typeImage:"avatar"}};o.upload(t,this.authService.serverApi+"/users/uploadImage",a).then(d=>{const p=JSON.parse(d.response);p.status&&(this.authService.currentUser.avatar=p.file.preview)},d=>{console.log(d)})},t=>{console.log(t)})})}selectRegion(){return(0,s.mG)(this,void 0,void 0,function*(){const u=yield this.modalController.create({component:A.B,swipeToClose:!0,showBackdrop:!0,breakpoints:[0,.9],initialBreakpoint:.9,presentingElement:yield this.modalController.getTop(),backdropDismiss:!0,cssClass:"modalCss",mode:"ios"});yield u.present();const{data:t}=yield u.onWillDismiss();t&&t.city&&(console.log(t.city.data),yield this.authService.saveCityInfo(t.city.data).toPromise().then(o=>(0,s.mG)(this,void 0,void 0,function*(){var r,a;o.status&&(this.country=t.city.data.country,this.city=t.city.data.city,null===(r=this.authService.currentUser)||void 0===r||(r.city=t.city.data.city),null===(a=this.authService.currentUser)||void 0===a||(a.country=t.city.data.country))})).catch(o=>(0,s.mG)(this,void 0,void 0,function*(){console.log(o)})))})}deleteModal(){return(0,s.mG)(this,void 0,void 0,function*(){console.log(this.authService.currentUser);const u=yield this.alert.create({header:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",message:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0430\u043a\u043a\u0430\u0443\u043d\u0442?",cssClass:"customAlert",buttons:[{text:"\u041d\u0435\u0442",role:"cancel",cssClass:"secondary",handler:()=>{}},{text:"\u0414\u0430",handler:()=>(0,s.mG)(this,void 0,void 0,function*(){const t=yield this.authService.delUser(this.authService.currentUser.id).toPromise();t.status?(yield u.present(),yield this.storage.clear(),yield this.authService.logout(),yield this.router.navigate(["selectlanguage"],{replaceUrl:!0})):this.authService.alert("\u041e\u0448\u0438\u0431\u043a\u0430",t.error)})}]});yield u.present()})}}return i.\u0275fac=function(u){return new(u||i)(e.Y36(l.SH),e.Y36(v.$),e.Y36(g.F0),e.Y36(l.IN),e.Y36(l.Br),e.Y36(Z.V1),e.Y36(T.K),e.Y36(U.K))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-profile"]],decls:44,vars:31,consts:[[1,"wrapper-fluid-header"],[1,"logo-wrap","personal-head"],[1,"top-back",3,"click"],["src","assets/img/arrow-left.svg","alt",""],[1,"ion-padding"],[1,"profile"],[1,"profile__photo",3,"click"],["alt","\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430",3,"src"],[1,"profile__main","form"],[1,"profile__inputs"],[1,"form__group"],[1,"form__label"],[1,"form__input"],["type","text","readonly","",3,"placeholder","ngModel","ngModelChange"],["type","text","readonly","","mask","000 (000) 000 00 00",3,"placeholder","ngModel","ngModelChange"],[1,"form__input",3,"click"],["type","text","readonly","",3,"placeholder","value"],[1,"profile__text"],[1,"profile__btn","btn",3,"click"]],template:function(u,t){1&u&&(e.TgZ(0,"ion-header")(1,"div",0)(2,"div",1)(3,"button",2),e.NdJ("click",function(){return t.back()}),e._UZ(4,"img",3),e.qZA(),e.TgZ(5,"h2"),e._uU(6),e.ALo(7,"translate"),e.qZA(),e._UZ(8,"div"),e.qZA()()(),e.TgZ(9,"ion-content",4)(10,"main",5)(11,"div",6),e.NdJ("click",function(){return t.cropUpload()}),e._UZ(12,"img",7),e.TgZ(13,"span"),e._uU(14),e.ALo(15,"translate"),e.qZA()(),e.TgZ(16,"section",8)(17,"div",9)(18,"label",10)(19,"span",11),e._uU(20),e.ALo(21,"translate"),e.qZA(),e.TgZ(22,"div",12)(23,"input",13),e.NdJ("ngModelChange",function(r){return t.name=r}),e.ALo(24,"translate"),e.qZA()()(),e.TgZ(25,"label",10)(26,"span",11),e._uU(27),e.ALo(28,"translate"),e.qZA(),e.TgZ(29,"div",12)(30,"input",14),e.NdJ("ngModelChange",function(r){return t.phone=r}),e.ALo(31,"translate"),e.qZA()()(),e.TgZ(32,"label",10)(33,"span",11),e._uU(34),e.ALo(35,"translate"),e.qZA(),e.TgZ(36,"div",15),e.NdJ("click",function(){return t.selectRegion()}),e._UZ(37,"input",16),e.ALo(38,"translate"),e.qZA()(),e.TgZ(39,"p",17),e._uU(40),e.ALo(41,"translate"),e.qZA()(),e.TgZ(42,"button",18),e.NdJ("click",function(){return t.deleteModal()}),e._uU(43,"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442"),e.qZA()()()()),2&u&&(e.xp6(6),e.Oqu(e.lcZ(7,13,"\u041f\u0440\u043e\u0444\u0438\u043b\u044c")),e.xp6(6),e.Q6J("src",null==t.authService.currentUser?null:t.authService.currentUser.avatar,e.LSH),e.xp6(2),e.Oqu(e.lcZ(15,15,"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0444\u043e\u0442\u043e")),e.xp6(6),e.Oqu(e.lcZ(21,17,"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0412\u0430\u0448\u0435 \u0424\u0418\u041e")),e.xp6(3),e.s9C("placeholder",e.lcZ(24,19,"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0412\u0430\u0448\u0435 \u0424\u0418\u041e")),e.Q6J("ngModel",t.name),e.xp6(4),e.Oqu(e.lcZ(28,21,"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430")),e.xp6(3),e.s9C("placeholder",e.lcZ(31,23,"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430")),e.Q6J("ngModel",t.phone),e.xp6(4),e.Oqu(e.lcZ(35,25,"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0432\u0430\u0448 \u0440\u0435\u0433\u0438\u043e\u043d")),e.xp6(3),e.s9C("placeholder",e.lcZ(38,27,"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0432\u0430\u0448 \u0440\u0435\u0433\u0438\u043e\u043d")),e.Q6J("value",t.country+" \u0433. "+t.city),e.xp6(3),e.hij(" ",e.lcZ(41,29,"\u0414\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0438 \u0438\u043c\u0435\u043d\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044c \u0432 \u0441\u043b\u0443\u0436\u0431\u0443 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0438.")," "))},dependencies:[h.Fj,h.JJ,h.On,l.W2,l.Gu,m.hx,y.X$],styles:[".profile[_ngcontent-%COMP%]{flex:1 1 auto;display:flex;flex-direction:column}.profile__main[_ngcontent-%COMP%]{display:grid;align-items:start;align-content:space-between;flex:1 1 auto}.profile__photo[_ngcontent-%COMP%]{margin:1.25rem 0;display:flex;align-items:center}.profile__photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:5.625rem;height:5.625rem;object-fit:cover;border-radius:50%;margin-right:1.25rem}.profile__photo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#403c61;font-weight:600}.profile__text[_ngcontent-%COMP%]{color:#47484f;padding:1.25rem 0}"]}),i})()}];let S=(()=>{class i{}return i.\u0275fac=function(u){return new(u||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[g.Bz.forChild(M),g.Bz]}),i})(),_=(()=>{class i{}return i.\u0275fac=function(u){return new(u||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({providers:[Storage],imports:[P.ez,h.u5,l.Pc,S,m.Kf,y.aw]}),i})()}}]);