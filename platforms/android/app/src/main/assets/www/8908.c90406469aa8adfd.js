"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8908],{8908:(E,m,o)=>{o.r(m),o.d(m,{NamePageModule:()=>M});var v=o(6895),g=o(4006),d=o(8058),p=o(4228),s=o(7582),h=o(7053),C=o(5817),e=o(8274),P=o(7044),A=o(259),T=o(70),f=o(4032);const Z=[{path:"",component:(()=>{class u{constructor(i,t,n,a,r,c){this.authService=i,this.router=t,this.transfer=n,this.app=a,this.camera=r,this.modalController=c,this.name="",this.country="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435",this.city="\u043e\u0440\u043e\u0434"}ngOnInit(){}selectRegion(){return(0,s.mG)(this,void 0,void 0,function*(){const i=yield this.modalController.create({component:C.B,swipeToClose:!0,showBackdrop:!0,breakpoints:[0,.9],initialBreakpoint:.9,presentingElement:yield this.modalController.getTop(),backdropDismiss:!0,cssClass:"modalCss",mode:"ios"});yield i.present();const{data:t}=yield i.onWillDismiss();t&&t.city&&(console.log(t.city.data),yield this.authService.saveCityInfo(t.city.data).toPromise().then(n=>(0,s.mG)(this,void 0,void 0,function*(){var a,r;n.status&&(this.country=t.city.data.country,this.city=t.city.data.city?t.city.data.city:t.city.data.region,null===(a=this.authService.currentUser)||void 0===a||(a.city=t.city.data.city?t.city.data.city:t.city.data.region),null===(r=this.authService.currentUser)||void 0===r||(r.country=t.city.data.country))})).catch(n=>(0,s.mG)(this,void 0,void 0,function*(){console.log(n)})))})}regUser(){return(0,s.mG)(this,void 0,void 0,function*(){this.name&&this.country&&this.city?yield this.authService.regUser(this.name).toPromise().then(i=>(0,s.mG)(this,void 0,void 0,function*(){i.status&&(yield this.app.checkSession(),yield this.router.navigate(["/tabs/home"],{replaceUrl:!0}))})).catch(i=>(0,s.mG)(this,void 0,void 0,function*(){})):this.authService.alert("\u0423\u043f\u0441","\u0414\u043b\u044f \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0412\u0430\u0448\u0435 \u0418\u043c\u044f \u0438 \u0440\u0435\u0433\u0438\u043e\u043d.")})}cropUpload(){return(0,s.mG)(this,void 0,void 0,function*(){this.camera.getPicture({quality:50,destinationType:this.camera.DestinationType.FILE_URI,encodingType:this.camera.EncodingType.JPEG,mediaType:this.camera.MediaType.PICTURE,sourceType:this.camera.PictureSourceType.PHOTOLIBRARY}).then(t=>{const n=this.transfer.create(),r={headers:{Authorization:"Bearer "+h.$.jwt},fileKey:"file",mimeType:"image/jpeg",chunkedMode:!1,fileName:t.substr(t.lastIndexOf("/")+1),params:{typeUser:"client",typeImage:"avatar"}};n.upload(t,this.authService.serverApi+"/users/uploadImage",r).then(c=>{const y=JSON.parse(c.response);y.status&&(this.authService.currentUser.avatar=y.file.preview)},c=>{console.log(c)})},t=>{console.log(t)})})}}return u.\u0275fac=function(i){return new(i||u)(e.Y36(h.$),e.Y36(p.F0),e.Y36(P.K),e.Y36(A.y),e.Y36(T.V1),e.Y36(d.IN))},u.\u0275cmp=e.Xpm({type:u,selectors:[["app-name"]],decls:31,vars:24,consts:[[1,"ion-padding"],[1,"reg-profile"],["src","/assets/logos/tirgo-logo.png","alt","\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430",1,"reg-profile__logo"],[1,"reg-profile__main","form"],[1,"reg-profile__photo",3,"click"],["alt","\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430",3,"src"],[1,"reg-profile__inputs"],[1,"form__group"],[1,"form__label"],[1,"form__input"],["type","text",3,"placeholder","ngModel","ngModelChange"],[1,"form__group",3,"click"],["type","text","readonly","",3,"placeholder","value"],[1,"reg-profile__text"],[1,"reg-profile__btn","btn",3,"click"],[1,"icm-arrow"]],template:function(i,t){1&i&&(e.TgZ(0,"ion-content",0)(1,"article",1),e._UZ(2,"img",2),e.TgZ(3,"section",3)(4,"div",4),e.NdJ("click",function(){return t.cropUpload()}),e._UZ(5,"img",5),e.TgZ(6,"span"),e._uU(7),e.ALo(8,"translate"),e.qZA()(),e.TgZ(9,"div",6)(10,"label",7)(11,"span",8),e._uU(12),e.ALo(13,"translate"),e.qZA(),e.TgZ(14,"div",9)(15,"input",10),e.NdJ("ngModelChange",function(a){return t.name=a}),e.ALo(16,"translate"),e.qZA()()(),e.TgZ(17,"label",11),e.NdJ("click",function(){return t.selectRegion()}),e.TgZ(18,"span",8),e._uU(19),e.ALo(20,"translate"),e.qZA(),e.TgZ(21,"div",9),e._UZ(22,"input",12),e.ALo(23,"translate"),e.qZA()()(),e.TgZ(24,"p",13),e._uU(25),e.ALo(26,"translate"),e.qZA(),e.TgZ(27,"button",14),e.NdJ("click",function(){return t.regUser()}),e._uU(28),e.ALo(29,"translate"),e._UZ(30,"i",15),e.qZA()()()()),2&i&&(e.xp6(5),e.Q6J("src",null==t.authService.currentUser?null:t.authService.currentUser.avatar,e.LSH),e.xp6(2),e.Oqu(e.lcZ(8,10,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0444\u043e\u0442\u043e")),e.xp6(5),e.Oqu(e.lcZ(13,12,"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0412\u0430\u0448\u0435 \u0424\u0418\u041e")),e.xp6(3),e.s9C("placeholder",e.lcZ(16,14,"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0412\u0430\u0448\u0435 \u0424\u0418\u041e")),e.Q6J("ngModel",t.name),e.xp6(4),e.Oqu(e.lcZ(20,16,"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0432\u0430\u0448 \u0440\u0435\u0433\u0438\u043e\u043d")),e.xp6(3),e.s9C("placeholder",e.lcZ(23,18,"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0432\u0430\u0448 \u0440\u0435\u0433\u0438\u043e\u043d")),e.Q6J("value",t.country+" \u0433"+t.city),e.xp6(3),e.hij(" ",e.lcZ(26,20,"\u0427\u0442\u043e\u0431\u044b \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430, \u0432\u0430\u043c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u0430\u043a\u043a\u0430\u0443\u043d\u0442, \u0438\u043b\u0438 \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u044c\u0441\u044f \u0432 \u0441\u043b\u0443\u0436\u0431\u0443 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0438")," "),e.xp6(3),e.hij(" ",e.lcZ(29,22,"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f")," "))},dependencies:[g.Fj,g.JJ,g.On,d.W2,f.X$],styles:[".reg-profile[_ngcontent-%COMP%]{flex:1 1 auto;display:flex;flex-direction:column}.reg-profile__logo[_ngcontent-%COMP%]{width:13.75rem;margin:1.25rem 0 3.125rem}.reg-profile__main[_ngcontent-%COMP%]{display:grid;align-items:start;flex:1 1 auto}.reg-profile__inputs[_ngcontent-%COMP%]{display:grid}.reg-profile__photo[_ngcontent-%COMP%]{margin-bottom:1.875rem;display:flex;align-items:center}.reg-profile__photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:5.625rem;height:5.625rem;object-fit:cover;border-radius:50%;margin-right:1.25rem}.reg-profile__photo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff;font-weight:600}.reg-profile__text[_ngcontent-%COMP%]{color:#fff;padding:.625rem 0}.reg-profile__btn[_ngcontent-%COMP%]{align-self:end}"]}),u})()}];let _=(()=>{class u{}return u.\u0275fac=function(i){return new(i||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[p.Bz.forChild(Z),p.Bz]}),u})(),M=(()=>{class u{}return u.\u0275fac=function(i){return new(i||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[v.ez,g.u5,d.Pc,_,f.aw]}),u})()}}]);