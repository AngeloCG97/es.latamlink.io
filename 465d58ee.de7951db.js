(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{100:function(e,a,o){"use strict";o.d(a,"a",(function(){return s})),o.d(a,"b",(function(){return m}));var t=o(0),r=o.n(t);function n(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function i(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,t)}return o}function l(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?i(Object(o),!0).forEach((function(a){n(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function c(e,a){if(null==e)return{};var o,t,r=function(e,a){if(null==e)return{};var o,t,r={},n=Object.keys(e);for(t=0;t<n.length;t++)o=n[t],a.indexOf(o)>=0||(r[o]=e[o]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)o=n[t],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var d=r.a.createContext({}),p=function(e){var a=r.a.useContext(d),o=a;return e&&(o="function"==typeof e?e(a):l(l({},a),e)),o},s=function(e){var a=p(e.components);return r.a.createElement(d.Provider,{value:a},e.children)},b={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},u=r.a.forwardRef((function(e,a){var o=e.components,t=e.mdxType,n=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=p(o),u=t,m=s["".concat(i,".").concat(u)]||s[u]||b[u]||n;return o?r.a.createElement(m,l(l({ref:a},d),{},{components:o})):r.a.createElement(m,l({ref:a},d))}));function m(e,a){var o=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var n=o.length,i=new Array(n);i[0]=u;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l.mdxType="string"==typeof e?e:t,i[1]=l;for(var d=2;d<n;d++)i[d]=o[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},73:function(e,a,o){"use strict";o.r(a),o.d(a,"frontMatter",(function(){return i})),o.d(a,"metadata",(function(){return l})),o.d(a,"rightToc",(function(){return c})),o.d(a,"default",(function(){return p}));var t=o(2),r=o(6),n=(o(0),o(100)),i={id:"topologia-red",title:"Topolog\xeda de Red",sidebar_label:"Topolog\xeda de Red"},l={unversionedId:"topologia-red",id:"topologia-red",isDocsHomePage:!1,title:"Topolog\xeda de Red",description:"Presentamos la siguiente propuesta de configuraci\xf3n de red LAC-Chain utilizando nodos EOSIO.",source:"@site/docs/topologia-red.md",permalink:"/docs/topologia-red",editUrl:"https://github.com/LatamLink/es.latamlink.io/tree/master/website/docs/topologia-red.md",lastUpdatedAt:1596488985,sidebar_label:"Topolog\xeda de Red",sidebar:"docs",previous:{title:"Cuentas y Permisos",permalink:"/docs/cuentas-permisos"},next:{title:"Trazabilidad de Acciones",permalink:"/docs/trazabilidad"}},c=[{value:"Criterios de Dise\xf1o",id:"criterios-de-dise\xf1o",children:[]},{value:"Topolog\xeda Propuesta",id:"topolog\xeda-propuesta",children:[]},{value:"Capa 1 - Red Core",id:"capa-1---red-core",children:[{value:"Nodos Productores de Bloques",id:"nodos-productores-de-bloques",children:[]},{value:"Validator p2p para otros Validadores",id:"validator-p2p-para-otros-validadores",children:[]}]},{value:"Capa 2 - Bridge",id:"capa-2---bridge",children:[{value:"Validator p2p out",id:"validator-p2p-out",children:[]},{value:"Validator p2p bidir",id:"validator-p2p-bidir",children:[]},{value:"Boot p2p out",id:"boot-p2p-out",children:[]},{value:"Boot p2p bidir",id:"boot-p2p-bidir",children:[]}]},{value:"Layer 3 - Satellite",id:"layer-3---satellite",children:[{value:"Writer p2p",id:"writer-p2p",children:[]},{value:"Writer API",id:"writer-api",children:[]},{value:"Observer nodes p2p",id:"observer-nodes-p2p",children:[]},{value:"Observer nodes API",id:"observer-nodes-api",children:[]}]},{value:"Arquitectura",id:"arquitectura",children:[{value:"Ciclo de Node Discovery",id:"ciclo-de-node-discovery",children:[]},{value:"Comunicaci\xf3n de Nodos",id:"comunicaci\xf3n-de-nodos",children:[]},{value:"Transacciones",id:"transacciones",children:[]}]},{value:"Optimizaci\xf3n de Rutas / Conexiones",id:"optimizaci\xf3n-de-rutas--conexiones",children:[]},{value:"Infraestructura Cloud",id:"infraestructura-cloud",children:[]}],d={rightToc:c};function p(e){var a=e.components,o=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(t.a)({},d,o,{components:a,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Presentamos la siguiente propuesta de configuraci\xf3n de red LAC-Chain utilizando nodos EOSIO."),Object(n.b)("h2",{id:"criterios-de-dise\xf1o"},"Criterios de Dise\xf1o"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Trustless"),", el funcionamiento correcto y optimo de la red, no deber\xeda basarse en confianza entre las entidades que conformen la red.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Escalabilidad horizontal"),", poder escalar la infraestructura de la red para satisfacer el crecimiento de su demanda de forma sencilla.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Permisos de escritura y lectura")," Utilizar un sistema de permisos para otorgar permisos de escritura (push tx) o de lectura (consumo de API o bloques por P2P).")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"MVP")," La presente topolog\xeda puede ser la base de un MVP sin modificaciones al protocolo de red nativo de EOSIO."))),Object(n.b)("h2",{id:"topolog\xeda-propuesta"},"Topolog\xeda Propuesta"),Object(n.b)("img",{src:"/img/diagramas/topologia-red.png#center",alt:"Topologia de Red LatamLink",width:"450"}),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Capa 1 (",Object(n.b)("a",Object(t.a)({parentName:"strong"},{href:"/docs/topologia-red#capa-1---red-core"}),"Core"),")")," Red de validadores y nodos p2p para meshear entre ellos"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Capa 2 (",Object(n.b)("a",Object(t.a)({parentName:"strong"},{href:"/docs/topologia-red#capa-2---bridge"}),"Bridge"),")")," Distribuci\xf3n p2p entre validators p2p y boots"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Capa 3 (",Object(n.b)("a",Object(t.a)({parentName:"strong"},{href:"/docs/topologia-red#layer-3---satellite"}),"Satellite"),")")," Layer de consumo para writers y observers")))))),Object(n.b)("p",null,Object(n.b)("img",Object(t.a)({parentName:"p"},{src:"/img/diagramas/topologia-nodos.png",alt:"LatamLink Topology"}))),Object(n.b)("h2",{id:"capa-1---red-core"},"Capa 1 - Red Core"),Object(n.b)("p",null,"La red core se compone de los productores de bloques quienes han sido agregados al grupo de consenso. La fuente de poder computacional final es derivada de la red core."),Object(n.b)("h3",{id:"nodos-productores-de-bloques"},"Nodos Productores de Bloques"),Object(n.b)("p",null,"En una red EOSIO estos nodos son denominados blockproducers, se encargan de generar bloques cada 500ms. Estos nodos deber\xedan estar conectados unicamente a otros nodos manejados por la misma entidad."),Object(n.b)("h3",{id:"validator-p2p-para-otros-validadores"},"Validator p2p para otros Validadores"),Object(n.b)("p",null,"Nodo P2P configurado como parte de la red interna de los validadores."),Object(n.b)("h2",{id:"capa-2---bridge"},"Capa 2 - Bridge"),Object(n.b)("h3",{id:"validator-p2p-out"},"Validator p2p out"),Object(n.b)("p",null,"Nodo configurado para solo broadcastear bloques por conexiones p2p , los observers p2p out permitidos se conectan a este nodo"),Object(n.b)("h3",{id:"validator-p2p-bidir"},"Validator p2p bidir"),Object(n.b)("p",null,"Nodo configurado para aceptar transacciones por p2p de nodos permitidos y enviarsela al validador"),Object(n.b)("h3",{id:"boot-p2p-out"},"Boot p2p out"),Object(n.b)("p",null,"Nodo configurado para aceptar bloques de los validadores p2p y solo reenviarlos a los observers p2p y api, no acepta txs"),Object(n.b)("h3",{id:"boot-p2p-bidir"},"Boot p2p bidir"),Object(n.b)("p",null,"Nodo p2p configurado para actualizar con nuevos bloques a los nodos writer y a su vez aceptar txs para enviar a los validadores"),Object(n.b)("h2",{id:"layer-3---satellite"},"Layer 3 - Satellite"),Object(n.b)("h3",{id:"writer-p2p"},"Writer p2p"),Object(n.b)("p",null,"Acepta transacciones por p2p y las envia al layer 1 atravez de un ",Object(n.b)("inlineCode",{parentName:"p"},"boot-p2p-bidir"),"."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"por ejemplo: Una wallet maneja su propia API y se conecta a la red atravez de un writer p2p.")),Object(n.b)("h3",{id:"writer-api"},"Writer API"),Object(n.b)("p",null,"Acepta solicitudes de push transaction por http y las envia al layer 1 atravez de un ",Object(n.b)("inlineCode",{parentName:"p"},"boot-p2p-bidir")),Object(n.b)("h3",{id:"observer-nodes-p2p"},"Observer nodes p2p"),Object(n.b)("p",null,"Un observer node p2p es un nodo que esta consumiendo informaci\xf3n del layer 1 atravez de un ",Object(n.b)("inlineCode",{parentName:"p"},"boot-p2p-out"),", solo puede leer el estado de la blockchain."),Object(n.b)("h3",{id:"observer-nodes-api"},"Observer nodes API"),Object(n.b)("p",null,"Nodo que permite pedir informaci\xf3n de la blockchain a travez de un request http, se recomienda el uso de dfuse."),Object(n.b)("h2",{id:"arquitectura"},"Arquitectura"),Object(n.b)("h3",{id:"ciclo-de-node-discovery"},"Ciclo de Node Discovery"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"La entidad configura un nuevo nodo"),Object(n.b)("li",{parentName:"ol"},"La entidad registra un nuevo nodo con el comit\xe9 incluyendo en su informaci\xf3n, tipo de nodo ( ",Object(n.b)("inlineCode",{parentName:"li"},"observer-api"),",",Object(n.b)("inlineCode",{parentName:"li"},"writer-p2p"),",",Object(n.b)("inlineCode",{parentName:"li"},"boot-p2p-bidir"),",etc. ) junto con su direcci\xf3n IP y opcionalmente su llave publica para peering"),Object(n.b)("li",{parentName:"ol"},"El comit\xe9 actualiza la tabla de nodos en el contrato inteligente con la informaci\xf3n de los nodos para agregar esta informaci\xf3n se asignan a grupos y sub-bgrupos "),Object(n.b)("li",{parentName:"ol"},"Los nodos de la red que lo necesiten actualizan su firewall y lista de pares permitidos para agregar el nuevo nodo a los nodos que hagan falta."),Object(n.b)("li",{parentName:"ol"},"El nuevo nodo confirma que esta conectado a la red.")),Object(n.b)("h4",{id:"gruos-y-sub-grupos-de-nodos"},"Gruos y Sub-Grupos de Nodos"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(t.a)({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"th"},"Nodos Escritores")),Object(n.b)("th",Object(t.a)({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"th"},"Nodos Boot")),Object(n.b)("th",Object(t.a)({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"th"},"Nodos Validadores")))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"Grupo 1....n"),Object(n.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"Grupo 1...n"),Object(n.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"Activos y Stand-By")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"grupos de hasta 40 nodos"),Object(n.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"grupos de hasta 10 nodos"),Object(n.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"activos definidos en schdedule")))),Object(n.b)("p",null,"Los nodos de boot y validadores que no cumplen con la configuracion requerida pueden ser eliminados por el comite permisionador."),Object(n.b)("h3",{id:"comunicaci\xf3n-de-nodos"},"Comunicaci\xf3n de Nodos"),Object(n.b)("p",null,"Para mas informaci\xf3n sobre como funciona la comunicaci\xf3n entre nodos en redes EOSIO se puede consultar su ",Object(n.b)("a",Object(t.a)({parentName:"p"},{href:"https://developers.eos.io/welcome/latest/protocol/network_peer_protocol"}),"Developers Portal")),Object(n.b)("h3",{id:"transacciones"},"Transacciones"),Object(n.b)("p",null,"El ciclo de una transacci\xf3n es :"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Un cliente env\xeda  una transacci\xf3n firmada por https o por p2p a un writer node, ya sea api o p2p.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"El writer verifica la transacci\xf3n")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"El writer broadcastea la transacci\xf3n a los nodos ",Object(n.b)("inlineCode",{parentName:"p"},"boot-p2p-bidir"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"el ",Object(n.b)("inlineCode",{parentName:"p"},"boot-p2p-bidir"),", broadcastea la transaccion al layer 1(core)")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"El validador que este en schedule verifica la transacci\xf3n y la ejecuta.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"El validador broadcastea el nuevo bloque al layer 1 y layer 2")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"los boot de layer 2 verifican el nuevo bloque y lo broadcastean al layer 3"))),Object(n.b)("h2",{id:"optimizaci\xf3n-de-rutas--conexiones"},"Optimizaci\xf3n de Rutas / Conexiones"),Object(n.b)("p",null,"La meta es gestionar la topolog\xeda de red de forma din\xe1mica usando contratos inteligentes."),Object(n.b)("h2",{id:"infraestructura-cloud"},"Infraestructura Cloud"),Object(n.b)("p",null,"Es de inter\xe9s de LAC-Chain utilizar implementaciones autom\xe1ticas en varias nubes utilizando herramientas como terraform."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Aprovechar las herramientas en la nube para mejorar las capacidades de la red."),Object(n.b)("li",{parentName:"ul"},"Explorar el uso de b\xf3vedas de claves en la nube."),Object(n.b)("li",{parentName:"ul"},"Trabajar con socios para proporcionar servicios en la nube en LACChain en una base SAAS.")))}p.isMDXComponent=!0}}]);