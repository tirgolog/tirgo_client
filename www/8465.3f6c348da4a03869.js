"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8465],{38465:(_,g,i)=>{i.r(g),i.d(g,{ProfilePageModule:()=>E});var P=i(36895),d=i(24006),s=i(22723),h=i(64228),p=i(70655),f=i(7053),C=i(64837),Z=i(25817),e=i(98274),A=i(30070),T=i(77044),m=i(67705),v=i(34032);const M=[{path:"",component:(()=>{class t{constructor(n,u,o,r,a,c){this.navCtrl=n,this.authService=u,this.router=o,this.modalController=r,this.camera=a,this.transfer=c,this.phone="",this.name="",this.country="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435",this.city="\u043e\u0440\u043e\u0434"}ngOnInit(){var n,u,o,r;this.phone=null===(n=this.authService.currentUser)||void 0===n?void 0:n.phone,this.name=null===(u=this.authService.currentUser)||void 0===u?void 0:u.name,this.country=null===(o=this.authService.currentUser)||void 0===o?void 0:o.country,this.city=null===(r=this.authService.currentUser)||void 0===r?void 0:r.city}ngAfterViewInit(){(0,C.lq)()}back(){this.navCtrl.back()}cropUpload(){return(0,p.mG)(this,void 0,void 0,function*(){this.camera.getPicture({quality:50,destinationType:this.camera.DestinationType.FILE_URI,encodingType:this.camera.EncodingType.JPEG,mediaType:this.camera.MediaType.PICTURE,sourceType:this.camera.PictureSourceType.PHOTOLIBRARY}).then(u=>{const o=this.transfer.create(),a={headers:{Authorization:"Bearer "+f.$.jwt},fileKey:"file",mimeType:"image/jpeg",chunkedMode:!1,fileName:u.substr(u.lastIndexOf("/")+1),params:{typeUser:"client",typeImage:"avatar"}};o.upload(u,this.authService.serverApi+"/users/uploadImage",a).then(c=>{const y=JSON.parse(c.response);y.status&&(this.authService.currentUser.avatar=y.file.preview)},c=>{console.log(c)})},u=>{console.log(u)})})}selectRegion(){return(0,p.mG)(this,void 0,void 0,function*(){const n=yield this.modalController.create({component:Z.B,swipeToClose:!0,showBackdrop:!0,breakpoints:[0,.9],initialBreakpoint:.9,presentingElement:yield this.modalController.getTop(),backdropDismiss:!0,cssClass:"modalCss",mode:"ios"});yield n.present();const{data:u}=yield n.onWillDismiss();u&&u.city&&(console.log(u.city.data),yield this.authService.saveCityInfo(u.city.data).toPromise().then(o=>(0,p.mG)(this,void 0,void 0,function*(){var r,a;o.status&&(this.country=u.city.data.country,this.city=u.city.data.city,null===(r=this.authService.currentUser)||void 0===r||(r.city=u.city.data.city),null===(a=this.authService.currentUser)||void 0===a||(a.country=u.city.data.country))})).catch(o=>(0,p.mG)(this,void 0,void 0,function*(){console.log(o)})))})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(s.SH),e.Y36(f.$),e.Y36(h.F0),e.Y36(s.IN),e.Y36(A.V1),e.Y36(T.K))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-profile"]],decls:42,vars:31,consts:[[1,"wrapper-fluid-header"],[1,"logo-wrap","personal-head"],[1,"top-back",3,"click"],["src","assets/img/arrow-left.svg","alt",""],[1,"ion-padding"],[1,"profile"],[1,"profile__photo",3,"click"],["alt","\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430",3,"src"],[1,"profile__main","form"],[1,"profile__inputs"],[1,"form__group"],[1,"form__label"],[1,"form__input"],["type","text","readonly","",3,"placeholder","ngModel","ngModelChange"],["type","text","readonly","","mask","000 (000) 000 00 00",3,"placeholder","ngModel","ngModelChange"],[1,"form__input",3,"click"],["type","text","readonly","",3,"placeholder","value"],[1,"profile__text"]],template:function(n,u){1&n&&(e.TgZ(0,"ion-header")(1,"div",0)(2,"div",1)(3,"button",2),e.NdJ("click",function(){return u.back()}),e._UZ(4,"img",3),e.qZA(),e.TgZ(5,"h2"),e._uU(6),e.ALo(7,"translate"),e.qZA(),e._UZ(8,"div"),e.qZA()()(),e.TgZ(9,"ion-content",4)(10,"main",5)(11,"div",6),e.NdJ("click",function(){return u.cropUpload()}),e._UZ(12,"img",7),e.TgZ(13,"span"),e._uU(14),e.ALo(15,"translate"),e.qZA()(),e.TgZ(16,"section",8)(17,"div",9)(18,"label",10)(19,"span",11),e._uU(20),e.ALo(21,"translate"),e.qZA(),e.TgZ(22,"div",12)(23,"input",13),e.NdJ("ngModelChange",function(r){return u.name=r}),e.ALo(24,"translate"),e.qZA()()(),e.TgZ(25,"label",10)(26,"span",11),e._uU(27),e.ALo(28,"translate"),e.qZA(),e.TgZ(29,"div",12)(30,"input",14),e.NdJ("ngModelChange",function(r){return u.phone=r}),e.ALo(31,"translate"),e.qZA()()(),e.TgZ(32,"label",10)(33,"span",11),e._uU(34),e.ALo(35,"translate"),e.qZA(),e.TgZ(36,"div",15),e.NdJ("click",function(){return u.selectRegion()}),e._UZ(37,"input",16),e.ALo(38,"translate"),e.qZA()(),e.TgZ(39,"p",17),e._uU(40),e.ALo(41,"translate"),e.qZA()()()()()),2&n&&(e.xp6(6),e.Oqu(e.lcZ(7,13,"\u041f\u0440\u043e\u0444\u0438\u043b\u044c")),e.xp6(6),e.Q6J("src",null==u.authService.currentUser?null:u.authService.currentUser.avatar,e.LSH),e.xp6(2),e.Oqu(e.lcZ(15,15,"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0444\u043e\u0442\u043e")),e.xp6(6),e.Oqu(e.lcZ(21,17,"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0412\u0430\u0448\u0435 \u0424\u0418\u041e")),e.xp6(3),e.s9C("placeholder",e.lcZ(24,19,"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0412\u0430\u0448\u0435 \u0424\u0418\u041e")),e.Q6J("ngModel",u.name),e.xp6(4),e.Oqu(e.lcZ(28,21,"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430")),e.xp6(3),e.s9C("placeholder",e.lcZ(31,23,"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430")),e.Q6J("ngModel",u.phone),e.xp6(4),e.Oqu(e.lcZ(35,25,"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0432\u0430\u0448 \u0440\u0435\u0433\u0438\u043e\u043d")),e.xp6(3),e.s9C("placeholder",e.lcZ(38,27,"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0432\u0430\u0448 \u0440\u0435\u0433\u0438\u043e\u043d")),e.Q6J("value",u.country+" \u0433. "+u.city),e.xp6(3),e.hij(" ",e.lcZ(41,29,"\u0414\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043d\u043e\u043c\u0435\u0440 \u0430\u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0438 \u0438\u043c\u0435\u043d\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044c \u0432 \u0441\u043b\u0443\u0436\u0431\u0443 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0438.")," "))},dependencies:[d.Fj,d.JJ,d.On,s.W2,s.Gu,m.hx,v.X$],styles:[".profile[_ngcontent-%COMP%]{flex:1 1 auto;display:flex;flex-direction:column}.profile__main[_ngcontent-%COMP%]{display:grid;align-items:start;align-content:space-between;flex:1 1 auto}.profile__photo[_ngcontent-%COMP%]{margin:1.25rem 0;display:flex;align-items:center}.profile__photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:5.625rem;height:5.625rem;object-fit:cover;border-radius:50%;margin-right:1.25rem}.profile__photo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#403c61;font-weight:600}.profile__text[_ngcontent-%COMP%]{color:#47484f;padding:1.25rem 0}"]}),t})()}];let U=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[h.Bz.forChild(M),h.Bz]}),t})(),E=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[P.ez,d.u5,s.Pc,U,m.Kf,v.aw]}),t})()}}]);