"use strict";(self.webpackChunkcovaresa=self.webpackChunkcovaresa||[]).push([[813],{5813:(b,s,n)=>{n.r(s),n.d(s,{DashboardModule:()=>h});var i=n(3638),r=n(9783),e=n(2096),l=n(789),c=n(2783);const p=[{path:"",component:(()=>{class o{constructor(t){this._dataService=t,this.items=[]}ngOnInit(){this.items=[{label:"File",items:[{label:"New",icon:"pi pi-fw pi-plus"},{label:"Open",icon:"pi pi-fw pi-download"},{label:"Undo",icon:"pi pi-fw pi-refresh"}]},{label:"Edit",items:[{label:"Undo",icon:r.dv.REFRESH},{label:"Redo",icon:r.dv.AMAZON}]}]}sendRequest(){this._dataService.getDataFromUrl("https://api.github.com/usersfake").subscribe()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(l.D))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-dashboard"]],decls:4,vars:1,consts:[[3,"model"],[3,"click"],[1,"pi","pi-spin","pi-spinner",2,"font-size","2rem"]],template:function(t,d){1&t&&(e._UZ(0,"p-menu",0)(1,"br"),e.TgZ(2,"button",1),e.NdJ("click",function(){return d.sendRequest()}),e._UZ(3,"i",2),e.qZA()),2&t&&e.Q6J("model",d.items)},directives:[c.v2],styles:[""]}),o})()}];let u=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[i.Bz.forChild(p)],i.Bz]}),o})();var m=n(5494);let h=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[u,m.m]]}),o})()}}]);