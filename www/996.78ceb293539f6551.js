"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[996],{996:(T,i,n)=>{n.r(i),n.d(i,{SelectlanguagePageModule:()=>_});var r=n(36895),m=n(24006),s=n(48058),c=n(64228),d=n(97582),e=n(98274),f=n(90849),o=n(34032),v=n(7053);function p(t,u){if(1&t){const a=e.EpF();e.TgZ(0,"div",9)(1,"button",10),e.NdJ("click",function(){e.CHM(a);const g=e.oxw();return e.KtG(g.back())}),e._UZ(2,"img",11),e.qZA(),e._UZ(3,"img",12),e.qZA()}}function h(t,u){1&t&&(e.TgZ(0,"div",9),e._UZ(1,"img",12),e.qZA())}const S=[{path:"",component:(()=>{class t{constructor(a,l,g,A,Z){this.storage=a,this.router=l,this.navCtrl=g,this.translateService=A,this.authService=Z}ngOnInit(){}back(){this.navCtrl.back()}selectLanguage(a){return(0,d.mG)(this,void 0,void 0,function*(){this.authService.language=a,yield this.storage.set("language",a),this.translateService.use(a),yield this.router.navigate(["welcome"],{replaceUrl:!0})})}}return t.\u0275fac=function(a){return new(a||t)(e.Y36(f.K),e.Y36(c.F0),e.Y36(s.SH),e.Y36(o.sK),e.Y36(v.$))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-selectlanguage"]],decls:17,vars:5,consts:[[1,"ion-padding"],[1,"sel-lang"],["class","logo-wrap",4,"ngIf"],[1,"sel-lang__main"],[1,"sel-lang__label"],[1,"sel-lang__btn","btn",3,"click"],["src","/assets/flags/us.svg","alt","\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430"],["src","/assets/flags/tr.svg","alt","\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430"],["src","/assets/flags/ru.svg","alt","\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430"],[1,"logo-wrap"],[1,"top-back",3,"click"],["src","assets/img/arrow-left.svg","alt",""],["src","assets/logos/tirgo-logo.png","alt","",1,"sel-lang__logo"]],template:function(a,l){1&a&&(e.TgZ(0,"ion-content",0)(1,"main",1),e.YNc(2,p,4,0,"div",2),e.YNc(3,h,2,0,"div",2),e.TgZ(4,"div",3)(5,"p",4),e._uU(6),e.ALo(7,"translate"),e.qZA(),e.TgZ(8,"button",5),e.NdJ("click",function(){return l.selectLanguage("en")}),e._UZ(9,"img",6),e._uU(10," English "),e.qZA(),e.TgZ(11,"button",5),e.NdJ("click",function(){return l.selectLanguage("tr")}),e._UZ(12,"img",7),e._uU(13," T\xfcrk\xe7e "),e.qZA(),e.TgZ(14,"button",5),e.NdJ("click",function(){return l.selectLanguage("ru")}),e._UZ(15,"img",8),e._uU(16," \u0420\u0443\u0441\u0441\u043a\u0438\u0439 \u044f\u0437\u044b\u043a "),e.qZA()()()()),2&a&&(e.xp6(2),e.Q6J("ngIf",l.authService.isAuthenticated()),e.xp6(1),e.Q6J("ngIf",!l.authService.isAuthenticated()),e.xp6(3),e.Oqu(e.lcZ(7,3,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u044f\u0437\u044b\u043a \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430")))},dependencies:[r.O5,s.W2,o.X$],styles:[".sel-lang__logo[_ngcontent-%COMP%]{margin-top:6.25rem;width:15.625rem}.sel-lang__main[_ngcontent-%COMP%]{margin-top:12.5rem;display:grid;gap:.9375rem}.sel-lang__label[_ngcontent-%COMP%]{color:#fff;font-size:.875rem;margin-bottom:.9375rem}.sel-lang__btn[_ngcontent-%COMP%]{justify-content:flex-start;background:#252333}.sel-lang__btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:.3125rem;margin-right:.9375rem;width:35px!important}"]}),t})()}];let P=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.Bz.forChild(S),c.Bz]}),t})(),_=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[r.ez,m.u5,s.Pc,P,o.aw]}),t})()}}]);