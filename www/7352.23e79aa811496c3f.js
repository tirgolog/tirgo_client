"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7352],{77352:(S,l,n)=>{n.r(l),n.d(l,{OrdersPageModule:()=>q});var c=n(36895),g=n(24006),s=n(48058),d=n(64228),m=n(97582),f=n(11847),e=n(98274),v=n(7053),Z=n(20602),h=n(47281),_=n(52217),p=n(34032);function x(r,o){if(1&r&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&r){const t=o.$implicit,u=e.oxw(3);e.xp6(1),e.Oqu(u.returnNameTypeTransport(t))}}function A(r,o){if(1&r){const t=e.EpF();e.TgZ(0,"div",16)(1,"button",17),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2).$implicit,a=e.oxw();return e.KtG(a.setRaitingDriver(i.id,i.driver_id))}),e._uU(2," \u041e\u0446\u0435\u043d\u0438\u0442\u044c \u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044f "),e.qZA()()}}function O(r,o){if(1&r&&(e.TgZ(0,"article",5)(1,"div",6)(2,"div",7),e._uU(3),e.qZA(),e.TgZ(4,"div",8)(5,"div",9),e._UZ(6,"i",10),e.TgZ(7,"p")(8,"span"),e._uU(9),e.ALo(10,"translate"),e.qZA(),e._UZ(11,"br"),e._uU(12),e.qZA()(),e.TgZ(13,"div",9),e._UZ(14,"i",11),e.TgZ(15,"p")(16,"span"),e._uU(17),e.ALo(18,"translate"),e.qZA(),e._UZ(19,"br"),e._uU(20),e.qZA()()()(),e.TgZ(21,"div",12)(22,"div",13)(23,"p",14)(24,"span"),e._uU(25),e.ALo(26,"translate"),e.qZA(),e.TgZ(27,"b"),e._uU(28),e.ALo(29,"formatTime"),e.qZA()(),e.TgZ(30,"p",14)(31,"span"),e._uU(32),e.ALo(33,"translate"),e.qZA(),e.TgZ(34,"td"),e.YNc(35,x,2,1,"div",3),e.qZA()(),e.TgZ(36,"p",14)(37,"span"),e._uU(38),e.ALo(39,"translate"),e.qZA(),e.TgZ(40,"b"),e._uU(41),e.qZA()(),e.TgZ(42,"p",14)(43,"span"),e._uU(44),e.ALo(45,"translate"),e.qZA(),e.TgZ(46,"b"),e._uU(47),e.ALo(48,"translate"),e.qZA()(),e.TgZ(49,"p",14)(50,"span"),e._uU(51),e.ALo(52,"translate"),e.qZA(),e.TgZ(53,"b"),e._uU(54),e.qZA()(),e.YNc(55,A,3,0,"div",15),e.qZA()()()),2&r){const t=e.oxw().$implicit,u=e.oxw();let i;e.xp6(3),e.hij(" \u2116",u.authService.addLeadingZeros(t.id)," "),e.xp6(6),e.Oqu(e.lcZ(10,17,"\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 \u0438\u0437")),e.xp6(3),e.hij(" ",t.route.from_city," "),e.xp6(5),e.Oqu(e.lcZ(18,19,"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u0432")),e.xp6(3),e.hij(" ",t.route.to_city," "),e.xp6(5),e.Oqu(e.lcZ(26,21,"\u0412\u0440\u0435\u043c\u044f \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438")),e.xp6(3),e.Oqu(e.xi3(29,23,t.date_send,"DD MMMM YYYY \u0432 HH:mm")),e.xp6(4),e.Oqu(e.lcZ(33,26,"\u0422\u0438\u043f \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430")),e.xp6(3),e.Q6J("ngForOf",t.transport_types),e.xp6(3),e.Oqu(e.lcZ(39,28,"\u0422\u0438\u043f \u0433\u0440\u0443\u0437\u0430")),e.xp6(3),e.Oqu(u.returnNameCargoType(t.type_cargo)),e.xp6(3),e.Oqu(e.lcZ(45,30,"\u0412\u0435\u0441 \u0433\u0440\u0443\u0437\u0430")),e.xp6(3),e.AsE("",t.weight," ",e.lcZ(48,32,"\u043a\u0433"),"."),e.xp6(4),e.Oqu(e.lcZ(52,34,"\u0412\u043e\u0434\u0438\u0442\u0435\u043b\u044c")),e.xp6(3),e.Oqu(null==(i=u.getAcceptedDriver(t.id))?null:i.name),e.xp6(1),e.Q6J("ngIf",!t.raiting_driver&&t.driver_id)}}function T(r,o){if(1&r&&(e.ynx(0),e.YNc(1,O,56,36,"article",4),e.BQk()),2&r){const t=o.$implicit;e.xp6(1),e.Q6J("ngIf",2===t.status)}}const y=[{path:"",component:(()=>{class r{constructor(t,u,i,a,M){this.authService=t,this.platform=u,this.router=i,this.modalCtrl=a,this.callNumber=M}ngOnInit(){}returnNameTypeTransport(t){const u=this.authService.typetruck.findIndex(i=>+i.id==+t);return u>=0?this.authService.typetruck[u].name:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e"}returnNameCargoType(t){console.log(t);const u=this.authService.typecargo.findIndex(i=>+i.id==+t);return u>=0?this.authService.typecargo[u].name:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e"}getAcceptedDriver(t){const u=this.authService.myorders.findIndex(i=>i.id===t);if(u>=0&&this.authService.myorders[u].orders_accepted&&this.authService.myorders[u].orders_accepted.length){const i=this.authService.myorders[u].orders_accepted.findIndex(a=>1===a.status_order);if(i>=0)return this.authService.myorders[u].orders_accepted[i]}}callMan(t){this.callNumber.callNumber("+"+t,!0)}setRaitingDriver(t,u){return(0,m.mG)(this,void 0,void 0,function*(){yield(yield this.modalCtrl.create({component:f.b,swipeToClose:!0,showBackdrop:!0,breakpoints:[0,.6],initialBreakpoint:.6,presentingElement:yield this.modalCtrl.getTop(),backdropDismiss:!0,cssClass:"modalCss",mode:"ios",componentProps:{orderid:t,driverid:u}})).present()})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(v.$),e.Y36(s.t4),e.Y36(d.F0),e.Y36(s.IN),e.Y36(Z.X))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-orders"]],decls:5,vars:1,consts:[[1,"ion-padding"],[1,"archive"],[1,"archive__main"],[4,"ngFor","ngForOf"],["class","order",4,"ngIf"],[1,"order"],[1,"order__header"],[1,"order__title"],[1,"order__locates"],[1,"order__locate"],[1,"icm-locate"],[1,"icm-flag"],[1,"order__main"],[1,"order__infos"],[1,"order__info"],["class","item-offers__btns full-button",4,"ngIf"],[1,"item-offers__btns","full-button"],[1,"item-offers__btn","btn-succes",3,"click"]],template:function(t,u){1&t&&(e._UZ(0,"app-header"),e.TgZ(1,"ion-content",0)(2,"main",1)(3,"section",2),e.YNc(4,T,2,1,"ng-container",3),e.qZA()()()),2&t&&(e.xp6(4),e.Q6J("ngForOf",u.authService.myorders))},dependencies:[c.sg,c.O5,s.W2,h.E,_.Q,p.X$]}),r})()}];let U=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[d.Bz.forChild(y),d.Bz]}),r})();var P=n(71059),F=n(91456),C=n(67705);let q=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[c.ez,g.u5,s.Pc,U,P.HeaderPageModule,F.h,C.Kf,p.aw]}),r})()}}]);