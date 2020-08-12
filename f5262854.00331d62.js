(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{100:function(e,a,t){"use strict";t.d(a,"a",(function(){return d})),t.d(a,"b",(function(){return m}));var n=t(0),r=t.n(n);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),u=function(e){var a=r.a.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},d=function(e){var a=u(e.components);return r.a.createElement(l.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},b=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(t),b=n,m=d["".concat(i,".").concat(b)]||d[b]||p[b]||o;return t?r.a.createElement(m,c(c({ref:a},l),{},{components:t})):r.a.createElement(m,c({ref:a},l))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=b;var c={};for(var s in a)hasOwnProperty.call(a,s)&&(c[s]=a[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},96:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return c})),t.d(a,"rightToc",(function(){return s})),t.d(a,"default",(function(){return u}));var n=t(2),r=t(6),o=(t(0),t(100)),i={id:"cuentas-permisos",title:"Cuentas y Permisos",sidebar_label:"Cuentas y Permisos"},c={unversionedId:"cuentas-permisos",id:"cuentas-permisos",isDocsHomePage:!1,title:"Cuentas y Permisos",description:"Cuentas",source:"@site/docs/cuentas-permisos.md",permalink:"/docs/cuentas-permisos",editUrl:"https://github.com/LatamLink/es.latamlink.io/tree/master/website/docs/cuentas-permisos.md",lastUpdatedAt:1597247308,sidebar_label:"Cuentas y Permisos",sidebar:"docs",previous:{title:"Uso de Recursos",permalink:"/docs/recursos"},next:{title:"Topolog\xeda de Red",permalink:"/docs/topologia-red"}},s=[{value:"Cuentas",id:"cuentas",children:[]},{value:"Permisos",id:"permisos",children:[]},{value:"Autorizaciones",id:"autorizaciones",children:[]},{value:"Autenticado (Billeteras)",id:"autenticado-billeteras",children:[{value:"Capa de acceso Transit Wallet Access Layer",id:"capa-de-acceso-transit-wallet-access-layer",children:[]},{value:"Biblioteca de Autenticaci\xf3n universal",id:"biblioteca-de-autenticaci\xf3n-universal",children:[]},{value:"KEOSD",id:"keosd",children:[]}]}],l={rightToc:s};function u(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,t,{components:a,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"cuentas"},"Cuentas"),Object(o.b)("p",null,"Una ",Object(o.b)("strong",{parentName:"p"},"cuenta")," en EOSIO es un nombre legible para humanos que se almacena en la cadena de bloques. Puede ser propiedad de un individuo o grupo de individuos dependiendo de la configuraci\xf3n de los permisos. Se requiere una cuenta para transferir o enviar cualquier transacci\xf3n v\xe1lida a la cadena de bloques."),Object(o.b)("p",null,"El nombre de la cuenta debe cumplir con ciertos requisitos: caracteres de la a ",Object(o.b)("inlineCode",{parentName:"p"},"a")," la ",Object(o.b)("inlineCode",{parentName:"p"},"z")," en min\xfascula, n\xfameros del ",Object(o.b)("inlineCode",{parentName:"p"},"1")," al ",Object(o.b)("inlineCode",{parentName:"p"},"5")," y tener una longitud de 12 caracteres. Por ejemplo : ",Object(o.b)("inlineCode",{parentName:"p"},"latamlink12"),"."),Object(o.b)("p",null,"Obtenga m\xe1s informaci\xf3n sobre ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.eos.io/welcome/latest/protocol/accounts_and_permissions/#2-accounts"}),"cuentas en EOSIO")),Object(o.b)("h2",{id:"permisos"},"Permisos"),Object(o.b)("p",null,"EOSIO permite crear permisos jer\xe1rquicos personalizados que se derivan del permiso ",Object(o.b)("inlineCode",{parentName:"p"},"owner"),". Un permiso personalizado es b\xe1sicamente una llave que solo puede realizar las acciones que se le permite realizar."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"}," ",Object(o.b)("strong",{parentName:"p"},"Por ejemplo:")," Cualquier cuenta puede crear un permiso personalizado con su par de llaves \xfanicas para interactuar \xfanicamente con un contrato.")),Object(o.b)("p",null,"De esta manera, EOSIO ofrece capacidades de permisos de \xfaltima generaci\xf3n con una gran flexibilidad para configurar un protocolo simple o complejo integrado en el protocolo base."),Object(o.b)("p",null,"Los permisos de la cuenta tambi\xe9n fortalecen la seguridad en caso de que alguien que no est\xe9 autorizado obtenga una llave privada, lo \xfanico que puede hacer son las acciones que la clave se ha limitado a ejecutar."),Object(o.b)("h2",{id:"autorizaciones"},"Autorizaciones"),Object(o.b)("p",null,"Una cuenta puede definir una asignaci\xf3n entre cualquiera de sus permisos nombrados y un contrato inteligente o acci\xf3n dentro de ese contrato. Esto permite un control m\xe1s preciso sobre las autorizaciones de acci\xf3n, lo que facilita mucho que las cuentas que pertenecen a actores con diferentes roles dentro de una organizaci\xf3n reflejen la estructura organizativa en la cadena de bloques."),Object(o.b)("p",null,"En otras palabras, el permiso de cada cuenta se puede vincular a una tabla de autoridad utilizada para determinar si se puede satisfacer una autorizaci\xf3n de acci\xf3n determinada."),Object(o.b)("p",null,"Para obtener m\xe1s informaci\xf3n sobre estos conceptos, consulte ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.eos.io/welcome/latest/protocol/accounts_and_permissions"}),"documentaci\xf3n de cuentas y permisos"),"."),Object(o.b)("h2",{id:"autenticado-billeteras"},"Autenticado (Billeteras)"),Object(o.b)("p",null,"Las billeteras son clientes que almacenan llaves privadas asociadas con los permisos de una o m\xe1s cuentas. Idealmente, una billetera tiene un estado bloqueado (encriptado) y desbloqueado (sin encriptar) que est\xe1 protegido por una contrase\xf1a de alta entrop\xeda."),Object(o.b)("h3",{id:"capa-de-acceso-transit-wallet-access-layer"},"Capa de acceso Transit Wallet Access Layer"),Object(o.b)("p",null,"Esta biblioteca es una peque\xf1a capa de abstracci\xf3n sobre ",Object(o.b)("inlineCode",{parentName:"p"},"eosjs")," que tiene como objetivo ayudar a los desarrolladores de EOS dApp (aplicaci\xf3n descentralizada) con la comunicaci\xf3n de billetera (verificaci\xf3n y aceptaci\xf3n de firma) al proporcionar una API simple e intuitiva."),Object(o.b)("p",null,"En lugar de centrarse en admitir proveedores de firmas espec\xedficos uno por uno, los desarrolladores pueden admitir a todos los que han creado un complemento de Transit, lo que permite al usuario utilizar su proveedor de firmas de elecci\xf3n. De esta manera, gana el mejor UX para proveedores de firmas y los desarrolladores pueden centrarse en construir su dApp en lugar de configurar conexiones 'eosjs' y de billetera."),Object(o.b)("p",null,'Consulte la "Gu\xeda de inicio r\xe1pido" y la gu\xeda completa en los documentos del paquete ',Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/eosnewyork/eos-transit"}),Object(o.b)("inlineCode",{parentName:"a"},"eos-transit"))),Object(o.b)("h3",{id:"biblioteca-de-autenticaci\xf3n-universal"},"Biblioteca de Autenticaci\xf3n universal"),Object(o.b)("p",null,"Existe una biblioteca que permite a las aplicaciones usar f\xe1cilmente diferentes proveedores de autenticaci\xf3n. Los desarrolladores de aplicaciones deben admitir muchos proveedores de autenticaci\xf3n (billeteras) para maximizar el alcance del usuario y permitir la elecci\xf3n del usuario."),Object(o.b)("p",null,"La librer\xeda ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/EOSIO/universal-authenticator-library"}),"Universal Authenticator Library (UAL)")," logra este objetivo al abstraer la l\xf3gica comercial interna de muchos proveedores de autenticaci\xf3n y exponer una \xfanica API universal."),Object(o.b)("h4",{id:"autenticadores-disponibles"},"Autenticadores disponibles:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/EOSIO/ual-scatter"}),"UAL for Scatter")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/EOSIO/ual-lynx"}),"UAL for Lynx")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/EOSIO/ual-ledger"}),"UAL for Ledger")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/EOSIO/ual-token-pocket"}),"UAL for Token Pocket")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/meet-one/ual-meetone"}),"UAL for MEET.ONE")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/greymass/ual-anchor"}),"UAL for Anchor"))),Object(o.b)("h3",{id:"keosd"},"KEOSD"),Object(o.b)("p",null,"En la distribuci\xf3n de EOSIO viene incluido un cliente CLI llamado ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.eos.io/manuals/eos/latest/cleos/index"}),Object(o.b)("inlineCode",{parentName:"a"},"cleos"))," que interact\xfaa con un cliente llamado ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.eos.io/manuals/eos/latest/keosd/index"}),Object(o.b)("inlineCode",{parentName:"a"},"keosd"))," que proporciona un servicio de billetera seguro y un punto final API para aplicaciones que requieren integraci\xf3n de back-end con un proveedor de firmas digitales."))}u.isMDXComponent=!0}}]);