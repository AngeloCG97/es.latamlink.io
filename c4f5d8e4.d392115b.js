(window.webpackJsonp=window.webpackJsonp||[]).push([[32,10,33],{119:function(e,a,t){"use strict";var l=t(2),n=t(6),r=t(0),i=t.n(r),o=t(104),s=t(109),c=t(102),m=t(110),d=t(49),u=t.n(d);t(48);function g(e){var a=e.to,t=e.href,r=e.label,o=e.prependBaseUrlToHref,c=Object(n.a)(e,["to","href","label","prependBaseUrlToHref"]),d=Object(m.a)(a),u=Object(m.a)(t,{forcePrependBaseUrl:!0});return i.a.createElement(s.a,Object(l.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:o?u:t}:{to:d},c),r)}var p=function(e){var a=e.url,t=e.alt;return i.a.createElement("img",{className:"footer__logo",alt:t,src:a})};a.a=function(){var e=Object(c.a)().siteConfig,a=(void 0===e?{}:e).themeConfig,t=(void 0===a?{}:a).footer,l=t||{},n=l.copyright,r=l.links,s=void 0===r?[]:r,d=l.logo,b=void 0===d?{}:d,E=Object(m.a)(b.src);return t?i.a.createElement("footer",{className:Object(o.a)("footer",{"footer--dark":"dark"===t.style})},i.a.createElement("div",{className:"container"},s&&s.length>0&&i.a.createElement("div",{className:"row footer__links"},s.map((function(e,a){return i.a.createElement("div",{key:a,className:"col footer__col"},null!=e.title?i.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?i.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,a){return e.html?i.a.createElement("li",{key:a,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):i.a.createElement("li",{key:e.href||e.to,className:"footer__item"},i.a.createElement(g,e))}))):null)}))),(b||n)&&i.a.createElement("div",{className:"text--center"},b&&b.src&&i.a.createElement("div",{className:"margin-bottom--sm"},b.href?i.a.createElement("a",{href:b.href,target:"_blank",rel:"noopener noreferrer",className:u.a.footerLogoLink},i.a.createElement(p,{alt:b.alt,url:E})):i.a.createElement(p,{alt:b.alt,url:E})),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:n}})),i.a.createElement("section",{className:"copyright"},i.a.createElement("div",{className:"icon-container"},i.a.createElement("h2",{id:"poweredby"},"Liderado por"),i.a.createElement("a",{href:"/",className:"nav-home"},i.a.createElement("img",{className:"footer-logo",src:"/images/latamlink_logo-h-full-color-overwhite.png",alt:"LatamLink Testnet"})),i.a.createElement("a",{href:"https://eoscostarica.io/es/",target:"_blank",className:"nav-home"},i.a.createElement("img",{className:"footer-logo",src:"/images/EOSCr-logo.png",alt:"LatamLink Testnet"})),i.a.createElement("a",{href:"https://www.eosargentina.io/",target:"_blank",className:"nav-home"},i.a.createElement("img",{className:"footer-logo",src:"/images/eosar_logo.png",alt:"LatamLink Testnet"})),i.a.createElement("a",{href:"https://eosvenezuela.io/",target:"_blank",className:"nav-home"},i.a.createElement("img",{className:"footer-logo",src:"/images/eosvenezuelalogo-122x122.png",alt:"LatamLink Testnet"}))),i.a.createElement("br",null)))):null}},89:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(117),i=t(453),o=t(457),s=t(463),c=t(461),m=t(456),d=t(462),u=t(214),g=t.n(u),p=(t(90),t(48),Object(i.a)({heroHead:{backgroundColor:"transparent"},card:{backgroundColor:"#FFFFFF"},imgcard:{display:"block",width:50,margin:"auto",marginTop:30,marginBottom:30},overline:{fontFamily:"Roboto",fontSize:12.7},title:{fontSize:21.1,fontWeight:"bold"},body:{fontSize:13.8,height:55},media:{objectFit:"cover",objectPosition:"bottom"}})),b=function(){return n.a.createElement(g.a,{height:"90vh",style:{backgroundColor:"#f7f7f7"},params:{particles:{number:{value:100,max:-1,density:{enable:!0,area:1500}},color:{value:"#bdbdbd"},links:{color:"#bdbdbd",distance:150,enable:!0,opacity:.5,width:1},shape:{type:"circle"},size:{random:!0,value:10},move:{direction:"top",enable:!0,outMode:"out",random:!1,speed:1,straight:!1}}}})};function E(){$("html,body").animate({scrollTop:550},"slow")}var h=function(){return n.a.createElement("div",null,n.a.createElement(b,null),n.a.createElement("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"transparent"},className:"pt-0 pl-4 pr-4 content-header"},n.a.createElement("img",{className:"img-fluid",src:"images/latamlink_logo-header.svg",alt:""}),n.a.createElement("div",{className:"container-fluid text-center"},n.a.createElement("button",{onClick:E,id:"more",style:{fontSize:"5em"},className:"text-secondary btn bg-transparent"},n.a.createElement("i",{className:"fas fa-angle-down",style:{color:"#0bb155"}})))))},f=function(e){return n.a.createElement("div",{className:"information-card"},n.a.createElement("div",{className:"text-top mr-4"},n.a.createElement("img",{src:e.img,width:"110",alt:""})),n.a.createElement("div",null,n.a.createElement("h4",null,e.title),n.a.createElement("p",{className:"information-card-text text-justify"}," ",e.body)))},k=function(){return n.a.createElement("section",{id:"acerca",className:"mt-5 pr-2 pl-2 mb-5 information-grid"},n.a.createElement(f,{img:"images/latamlink_Floor_Light_1853.svg",title:"Aprender sobre Blockchain",body:" LatamLink le permite explorar los beneficios de la tecnolog\xeda blockchain EOSIO para proyectos en Latinoam\xe9rica."}),n.a.createElement(f,{img:"images/latamlink_finger_108.svg",title:"Pon tus dApps a prueba",body:"LatamLink provee un ambiente local para desarrollar y probar apps descentralizadas (dApps)."}),n.a.createElement(f,{img:"images/latamlink_cog_104.svg",title:"Prueba tu infraestructura",body:"LatamLink incluye una plataforma s\xf3lida para que desarrolladores y organizaciones prueben su infraestructura blockchain."}))},v=function(){return n.a.createElement("div",{className:"mt-5 mb-5 pb-3 information-grid-footer"},n.a.createElement("div",{className:"information d-flex flex-column"},n.a.createElement("div",{className:"text-justify"},n.a.createElement("h2",{className:"text-left mb-4 font-weight-bold"},n.a.createElement("span",{className:"underline"},"\xbfQu\xe9 es LatamLink?")),n.a.createElement("br",null),n.a.createElement("span",null,"LatamLink es una alianza regional voluntaria liderada por empresas tecnol\xf3gicas latinoamericanas. Desarrollamos un testnet basado en EOSIO para la red ",n.a.createElement("a",{style:{color:"#5bb517"},href:"https://www.lacchain.net/",target:"blank"},"LACChain")," con el fin de resaltar los beneficios de esta tecnolog\xeda. LatamLink utiliza una versi\xf3n p\xfablica permisionada de la tecnolog\xeda EOSIO para que desarrolladores y organizaciones puedan probar sus aplicaciones descentralizadas e infraestructura."),n.a.createElement("h2",{className:"h3",style:{padding:"20px 0 0 0"}},"\xbfQu\xe9 es LACChain?"),n.a.createElement("span",null,"LACChain es una iniciativa de BID Labs (parte del ",n.a.createElement("a",{style:{color:"#5bb517"},href:"https://www.iadb.org/en",target:"_blank"},"Banco Interamericano de Desarrollo"),") cuyo prop\xf3sito es acompa\xf1ar y acelerar el desarrollo del ecosistema de blockchain en Latinoam\xe9rica. LACChain busca establecer consorcios nacionales en la regi\xf3n, desarrollar y promover est\xe1ndares de interoperablidad en redes, y desarrollar y dar mantenimiento a infraestructuras interoperables de blockchain."),n.a.createElement("h2",{className:"h3",style:{padding:"20px 0 0 0"}},"\xbfQu\xe9 es EOSIO?"),n.a.createElement("span",null,"EOSIO es una tecnolog\xeda blockchain de siguiente generaci\xf3n lanzada en 2018 por ",n.a.createElement("a",{style:{color:"#5bb517"},href:"https://block.one/",target:"_blank"},"block.one"),", una compa\xf1\xeda l\xedder que ofrece soluciones blockchain de alto rendimiento. EOSIO permite mayor flexibilidad, escalabilidad y costo-eficiencia, por lo que su red puede llegar a tener hasta 4.000 transacciones por segundo."),n.a.createElement("h3",{className:"h4",style:{padding:"20px 0 0 0"}},"LatamLink es liderado por:"),n.a.createElement("ul",{className:"list-group list-group-flush"},n.a.createElement("li",{className:"list-group-item"},n.a.createElement("a",{target:"_blank",href:"https://www.eosargentina.io/"},"EOS Argentina")),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("a",{target:"_blank",href:"https://eoscostarica.io/"},"EOS Costa Rica"),n.a.createElement("br",null)),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("a",{target:"_blank",href:"https://eosvenezuela.io/"},"EOS Venezuela")),n.a.createElement("li",{className:"list-group-item"})))),n.a.createElement("div",{className:"information-img"},n.a.createElement("img",{className:"img-fluid",src:"images/map-content-home.png",alt:""})))},y=function(e){return n.a.createElement("div",{className:"get-started-step"},n.a.createElement("img",{className:"get-started-icon",height:"30",width:"30",src:e.img,alt:"Explorar EOSIO"}),n.a.createElement("p",{className:"ml-4 text-justify"},n.a.createElement("strong",{className:"h4"},e.title),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("span",null,e.body,n.a.createElement("a",{href:e.href,target:"_blank"},e.info),".")))},N=function(){return n.a.createElement("section",{id:"iniciar",className:"get-started-structure pt-5 pl-3 pr-3 pb-5"},n.a.createElement("div",{className:"mt-5 mb-5 get-started-header"},n.a.createElement("h2",{className:"h1 text-center font-weight-bold"},n.a.createElement("span",{className:"underline"},"\xbfPor qu\xe9 elegir LatamLink?"))),n.a.createElement("div",{className:"get-started-steps"},n.a.createElement(y,{title:"1. Permite explorar EOSIO",img:"images/latamlink_Rocket_1885.svg",body:"EOSIO es una tecnolog\xeda blockchain de c\xf3digo abierto que permite mayor flexibilidad, escalabilidad y costo-eficiencia, ideales para desarrollar soluciones empresariales y de impacto social.",href:"https://eos.io/",info:" Lea m\xe1s sobre EOSIO aqu\xed"}),n.a.createElement(y,{title:"2. Somos parte de la iniciativa LACChain",img:"images/latamlink_sun_1004125.svg",body:"LACChain es una iniciativa de BID Lab para fomentar un ecosistema blockchain en Latinoam\xe9rica. El equipo de LACChain forma alianzas con compa\xf1\xedas l\xedderes en la industria de blockchain e integra las principales tecnolog\xedas blockchain dentro de su red LACChain. Para m\xe1s informaci\xf3n sobre LACChain,",href:"https://medium.com/@lacchain.official/what-is-the-lacchain-global-alliance-and-what-does-it-consist-of-861cb76257b1",info:" dir\xedgase a este link"}),n.a.createElement(y,{title:"3. Ofrece una soluci\xf3n integral",img:"images/latamlink_Rocket_1885.svg",body:"LatamLink utiliza una versi\xf3n p\xfablica permisionada de la tecnolog\xeda EOSIO para Latinoam\xe9rica. Incluimos caracter\xedsticas como un ambiente local de desarrollo y prueba, un servicio de monitoreo, adaptabilidad a API endpoints, billeteras y otras herramientas. Puede ver la lista completa m\xe1s abajo.",href:"",info:""})),n.a.createElement("img",{className:"img-fluid get-started-img",src:"images/mobile-previews-fake.png",alt:""}))},L=function(){return n.a.createElement("section",{className:"banner"},n.a.createElement("h4",{className:"font-weight-light text-center"},'"LatamLink is a voluntary regional alliance to highlight the benefits of the EOSIO blockchain."'),n.a.createElement("img",{className:"img-fluid",src:"images/latamlink_logo-footer.svg",alt:""}))},_=function(e){var a=p();return n.a.createElement(s.a,{className:a.card,variant:"outlined"},n.a.createElement(c.a,{onClick:function(){return window.open(e.href,"_self")}},n.a.createElement("div",{className:"card-img-container"},n.a.createElement("img",{src:e.img,className:a.imgcard})),n.a.createElement(m.a,null,n.a.createElement(d.a,{className:a.title,gutterBottom:!0,variant:"h5",component:"h2"},e.title),n.a.createElement(d.a,{className:a.body,variant:"body2",component:"p"},e.body))))},O=function(){return n.a.createElement("section",{id:"herramientas",className:"d-flex pb-5 pt-5 flex-column justify-content-sm-center"},n.a.createElement("div",{className:"tools-header text-center mb-4"},n.a.createElement("h2",{className:"h1"},n.a.createElement("span",{className:"underline"},"Herramientas")),n.a.createElement("br",null),n.a.createElement("p",{className:"text-justify text-center"},"Estas son algunas herramientas y recursos que te ayudar\xe1n a prepararte para iniciar en LatamLink.")),n.a.createElement("div",{class:"container"},n.a.createElement(o.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:2},n.a.createElement(o.a,{item:!0,xs:12,sm:12,md:4},n.a.createElement(_,{href:"/docs/eosio",img:"images/docse-01.svg",title:"Documentaci\xf3n",body:"Una lista de recursos para aprender de expertos de la industria de blockchain."})),n.a.createElement(o.a,{item:!0,xs:12,sm:12,md:4},n.a.createElement(_,{href:"/",img:"images/latamlink_wallet_1003987.svg",title:"Billeteras",body:"LatamLink se adapta a varias billeteras de EOS que podr\xe1s con\ufb01gurar en el testnet."})),n.a.createElement(o.a,{item:!0,xs:12,sm:12,md:4},n.a.createElement(_,{href:"https://developers.eos.io/manuals/eos/latest/cleos/index",img:"images/latamlink_Laptop_187.svg",title:"Cleos",body:"Cleos es la interfaz de comando desarrollada por la empresa block.one"})),n.a.createElement(o.a,{item:!0,xs:12,sm:12,md:4},n.a.createElement(_,{href:"/",img:"images/latamlink_Wrench_1004034.svg",title:"Ambiente local",body:"Un ambiente local para desarrollar aplicaciones descentralizadas basadas en EOSIO."})),n.a.createElement(o.a,{item:!0,xs:12,sm:12,md:4},n.a.createElement(_,{href:"/",img:"images/latamlink_balloon-1.svg",title:"Comunidad de Telegram",body:"Contamos con un grupo de Telegram para coordinar esfuerzos y compartir informaci\xf3n relevante al ecosistema de EOS regional."})),n.a.createElement(o.a,{item:!0,xs:12,sm:12,md:4},n.a.createElement(_,{href:"https://github.com/LatamLink",img:"images/Github-VerGreen-SVG-Hermes-22-04-20.svg",title:"GitHub",body:"LatamLink tiene un perfil de github que reune a todos los participantes de la iniciativa."})))))};a.default=function(){return n.a.createElement("div",null,n.a.createElement("link",{rel:"canonical",href:"https://es.latamlink.io/"}),n.a.createElement(r.a,null,n.a.createElement(h,null),n.a.createElement(k,null),n.a.createElement("br",null),n.a.createElement("hr",null),n.a.createElement(v,null),n.a.createElement(N,null),n.a.createElement(L,null),n.a.createElement(O,null)))}}}]);