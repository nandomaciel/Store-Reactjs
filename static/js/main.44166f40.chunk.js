(this.webpackJsonploja=this.webpackJsonploja||[]).push([[0],[,,,,,function(e,t,a){e.exports={header:"Header_header__2fIN1",link:"Header_link__1rRO8",active:"Header_active__3Op1K"}},function(e,t,a){e.exports={produto:"Produto_produto__3MxAd",preco:"Produto_preco__W_W2L",description:"Produto_description__1HLBI"}},function(e,t,a){e.exports={contato:"Contato_contato__3IUY3",dados:"Contato_dados__2PjAh"}},,,,,function(e,t,a){e.exports={footer:"Footer_footer__320pW"}},function(e,t,a){e.exports={produtos:"Produtos_produtos__2OJl7",nome:"Produtos_nome__o6z3R"}},function(e,t,a){e.exports=a.p+"static/media/contato.20d1d7bb.jpg"},,function(e,t,a){e.exports=a(25)},,,,,function(e,t,a){},,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),c=a.n(o),l=(a(21),a(3)),u=a(1),s=a(12),i=a.n(s),m=function(){return r.a.createElement("footer",{className:i.a.footer},r.a.createElement("p",null,"Alguns direitos reservados"))},d=a(5),p=a.n(d),E=function(){return r.a.createElement("nav",{className:p.a.header},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(l.c,{activeClassName:p.a.active,className:p.a.link,to:"Store-Reactjs/",end:!0},"Produtos")),r.a.createElement("li",null,r.a.createElement(l.c,{activeClassName:p.a.active,className:p.a.link,to:"Store-Reactjs/contato"},"Contato"))))},f=a(4),_=function(e){return r.a.useEffect((function(){document.title=e.title,document.querySelector('meta[name="description"]').setAttribute("content",e.description)}),[e]),r.a.createElement(r.a.Fragment,null)},v=a(13),h=a.n(v),k=function(){var e=r.a.useState(null),t=Object(f.a)(e,2),a=t[0],n=t[1];return r.a.useEffect((function(){fetch("https://ranekapi.origamid.dev/json/api/produto").then((function(e){return e.json()})).then((function(e){return n(e)}))}),[]),null===a?null:r.a.createElement("section",{className:h.a.produtos+" animeLeft"},r.a.createElement(_,{title:"Ranek",description:"Descri\xe7\xe3o do site Ranek"}),a.map((function(e){return r.a.createElement(l.b,{to:"produto/".concat(e.id),key:e.id},r.a.createElement("img",{src:e.fotos[0].src,alt:e.fotos[0].titulo}),r.a.createElement("h1",null,e.nome))})))},j=a(7),N=a.n(j),b=a(14),x=a.n(b),R=function(){return r.a.createElement("section",{className:"".concat(N.a.contato," animeLeft")},r.a.createElement(_,{title:"Ranek | Contato",description:"Entre em contato"}),r.a.createElement("img",{src:x.a,alt:"M\xe1quina de escrever"}),r.a.createElement("div",null,r.a.createElement("h1",null,"Entre em contato"),r.a.createElement("ul",{className:N.a.dados},r.a.createElement("li",null,"email@email.com"),r.a.createElement("li",null,"999-999-999"),r.a.createElement("li",null,"Rua Ali Perto, 999"))))},g=a(8),O=a.n(g),P=a(15),S=a(6),y=a.n(S),A=function(){var e=r.a.useState(null),t=Object(f.a)(e,2),a=t[0],n=t[1],o=r.a.useState(!1),c=Object(f.a)(o,2),l=c[0],s=c[1],i=r.a.useState(null),m=Object(f.a)(i,2),d=m[0],p=m[1],E=Object(u.h)().id;return r.a.useEffect((function(){function e(){return(e=Object(P.a)(O.a.mark((function e(t){var a,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s(!0),e.next=4,fetch(t);case 4:return a=e.sent,e.next=7,a.json();case 7:r=e.sent,n(r),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),p("Um erro ocorreu");case 14:return e.prev=14,s(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})))).apply(this,arguments)}!function(t){e.apply(this,arguments)}("https://ranekapi.origamid.dev/json/api/produto/".concat(E))}),[E]),l?r.a.createElement("div",{className:"loading"}):d?r.a.createElement("p",null,d):null===a?null:r.a.createElement("section",{className:y.a.produto+" animeLeft"},r.a.createElement(_,{title:" Ranek | ".concat(a.nome),description:"Ranik | Esse \xe9 um produto: ".concat(a.nome)}),r.a.createElement("div",null,a.fotos.map((function(e){return r.a.createElement("img",{key:e.src,src:e.src,alt:e.titulo})}))),r.a.createElement("div",null,r.a.createElement("h1",null,a.nome),r.a.createElement("span",{className:y.a.preco},"R$ ",a.preco),r.a.createElement("p",{className:y.a.descricao},a.descricao)))};var C=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(l.a,null,r.a.createElement(E,null),r.a.createElement("div",{className:"content"},r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",element:r.a.createElement(k,null)}),r.a.createElement(u.a,{path:"produto/:id",element:r.a.createElement(A,null)}),r.a.createElement(u.a,{path:"/contato",element:r.a.createElement(R,null)}))),r.a.createElement(m,null)))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.44166f40.chunk.js.map