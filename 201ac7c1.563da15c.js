(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{100:function(e,a,t){"use strict";t.d(a,"a",(function(){return u})),t.d(a,"b",(function(){return m}));var n=t(0),o=t.n(n);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),d=function(e){var a=o.a.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},u=function(e){var a=d(e.components);return o.a.createElement(s.Provider,{value:a},e.children)},b={inlineCode:"code",wrapper:function(e){var a=e.children;return o.a.createElement(o.a.Fragment,{},a)}},p=o.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(t),p=n,m=u["".concat(r,".").concat(p)]||u[p]||b[p]||i;return t?o.a.createElement(m,c(c({ref:a},s),{},{components:t})):o.a.createElement(m,c({ref:a},s))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,r=new Array(i);r[0]=p;var c={};for(var l in a)hasOwnProperty.call(a,l)&&(c[l]=a[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var s=2;s<i;s++)r[s]=t[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},68:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return r})),t.d(a,"metadata",(function(){return c})),t.d(a,"rightToc",(function(){return l})),t.d(a,"default",(function(){return d}));var n=t(2),o=t(6),i=(t(0),t(100)),r={id:"datos-entidades-nodos",title:"Informaci\xf3n sobre Entidades y Nodos",sidebar_label:"Datos de Entidades y Nodos"},c={unversionedId:"datos-entidades-nodos",id:"datos-entidades-nodos",isDocsHomePage:!1,title:"Informaci\xf3n sobre Entidades y Nodos",description:"Divulgaci\xf3n voluntaria de datos",source:"@site/docs/datos-entidades-nodos.md",permalink:"/docs/datos-entidades-nodos",editUrl:"https://github.com/LatamLink/es.latamlink.io/tree/master/website/docs/datos-entidades-nodos.md",lastUpdatedAt:1596319590,sidebar_label:"Datos de Entidades y Nodos",sidebar:"docs",previous:{title:"Proceso de Permisionado",permalink:"/docs/proceso-permisionado"},next:{title:"Instalaci\xf3n de Nodos",permalink:"/docs/instalacion-nodos"}},l=[{value:"Divulgaci\xf3n voluntaria de datos",id:"divulgaci\xf3n-voluntaria-de-datos",children:[]},{value:"Herramienta Para Actualizar Datos",id:"herramienta-para-actualizar-datos",children:[]},{value:"Fases de Implementaci\xf3n",id:"fases-de-implementaci\xf3n",children:[{value:"Fase I",id:"fase-i",children:[]},{value:"Fase II",id:"fase-ii",children:[]},{value:"Fase III",id:"fase-iii",children:[]}]},{value:"Estructura JSON",id:"estructura-json",children:[]}],s={rightToc:l};function d(e){var a=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"divulgaci\xf3n-voluntaria-de-datos"},"Divulgaci\xf3n voluntaria de datos"),Object(i.b)("p",null,"Permite a los operadores de nodos anunciar p\xfablicamente su propiedad de una cuenta de LAC-Chain y compartir informaci\xf3n sobre ellos mismos."),Object(i.b)("p",null,"Piense en un WHOIS para cuentas de LAC-Chain que se verifiquen mediante una firma de blockchain. Todos estos campos requieren un inicio de sesi\xf3n \xfanico que se autentica a trav\xe9s de blockchain y, por lo tanto, no puede estar equivocado. Solo el BP con la clave correcta puede editar estos campos utilizando la interfaz de usuario."),Object(i.b)("h2",{id:"herramienta-para-actualizar-datos"},"Herramienta Para Actualizar Datos"),Object(i.b)("p",null,'Para acceder a la interfaz de usuario para actualizar datos seleccione la opci\xf3n "Update Node Info" en el ',Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://dashboard.latamlink.io"}),"Monitor de red"),"."),Object(i.b)("h2",{id:"fases-de-implementaci\xf3n"},"Fases de Implementaci\xf3n"),Object(i.b)("h3",{id:"fase-i"},"Fase I"),Object(i.b)("h4",{id:"lista-autogenerada-de-todos-los-productores-de-bloques-extra\xeddos-de-la-cadena-de-bloques"},"Lista autogenerada de todos los productores de bloques extra\xeddos de la cadena de bloques."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Nombre de la cuenta del nodo"),Object(i.b)("li",{parentName:"ul"},"Tipo de entidad de nodo"),Object(i.b)("li",{parentName:"ul"},"Clave p\xfablica de nodo"),Object(i.b)("li",{parentName:"ul"},"C\xf3digo de ubicaci\xf3n (ISO 3166-1 num\xe9rico)")),Object(i.b)("h4",{id:"informaci\xf3n-voluntaria-proporcionada-por-cada-entidad"},"Informaci\xf3n voluntaria proporcionada por cada entidad"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Nombre legal"),Object(i.b)("li",{parentName:"ul"},"N\xfamero de identificaci\xf3n"),Object(i.b)("li",{parentName:"ul"},"Nombre de contacto t\xe9cnico"),Object(i.b)("li",{parentName:"ul"},"Nombre de contacto negocios"),Object(i.b)("li",{parentName:"ul"},"Direcci\xf3n"),Object(i.b)("li",{parentName:"ul"},"Sitio web"),Object(i.b)("li",{parentName:"ul"},"Correo Electr\xf3nico"),Object(i.b)("li",{parentName:"ul"},"Redes sociales"),Object(i.b)("li",{parentName:"ul"},"Marca / Logotipo"),Object(i.b)("li",{parentName:"ul"},"C\xf3digo de Conducta")),Object(i.b)("h4",{id:"nodos-eosio"},"Nodos EOSIO"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Ubicaciones de nodos"),Object(i.b)("li",{parentName:"ul"},"Puntos finales API y P2P"),Object(i.b)("li",{parentName:"ul"},"Validadores"),Object(i.b)("li",{parentName:"ul"},"Nodos de escritor"),Object(i.b)("li",{parentName:"ul"},"Nodos History API"),Object(i.b)("li",{parentName:"ul"},"Nodos API"),Object(i.b)("li",{parentName:"ul"},"Nodos Boot"),Object(i.b)("li",{parentName:"ul"},"Nodos Observadores")),Object(i.b)("h3",{id:"fase-ii"},"Fase II"),Object(i.b)("h4",{id:"rendimiento"},"Rendimiento"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Bloques perdidos en X per\xedodo de tiempo ",Object(i.b)("em",{parentName:"li"},"- Involuntario")),Object(i.b)("li",{parentName:"ul"},"Rondas perdidas en X per\xedodo de tiempo ",Object(i.b)("em",{parentName:"li"},"- Involuntario")),Object(i.b)("li",{parentName:"ul"},"N\xfamero total de bloques producidos ",Object(i.b)("em",{parentName:"li"},"- Involuntario")),Object(i.b)("li",{parentName:"ul"},"Posici\xf3n media en la lista de BP ",Object(i.b)("em",{parentName:"li"},"- Involuntario")),Object(i.b)("li",{parentName:"ul"},"Calificaci\xf3n de rendimiento promedio ",Object(i.b)("em",{parentName:"li"},"- Involuntario")),Object(i.b)("li",{parentName:"ul"},"Tiempo de inactividad total"),Object(i.b)("li",{parentName:"ul"},"Interrupciones"),Object(i.b)("li",{parentName:"ul"},"Pruebas de estr\xe9s"),Object(i.b)("li",{parentName:"ul"},"Gesti\xf3n de parches"),Object(i.b)("li",{parentName:"ul"},"Capacidad Recuperaci\xf3n de Desastres"),Object(i.b)("li",{parentName:"ul"},"Pruebas de intrusi\xf3n")),Object(i.b)("h4",{id:"infraestructura"},"Infraestructura"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"F\xedsica / Nube p\xfablica / Compartida",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Sitio primario"),Object(i.b)("li",{parentName:"ul"},"Sitio secundario"))),Object(i.b)("li",{parentName:"ul"},"Diagrama Infraestructura"),Object(i.b)("li",{parentName:"ul"},"Protecci\xf3n DDoS"),Object(i.b)("li",{parentName:"ul"},"Firewalls"),Object(i.b)("li",{parentName:"ul"},"Balanceadores de carga"),Object(i.b)("li",{parentName:"ul"},"VPN "),Object(i.b)("li",{parentName:"ul"},"Planes futuros")),Object(i.b)("h3",{id:"fase-iii"},"Fase III"),Object(i.b)("h4",{id:"estructura-de-soporte"},"Estructura de soporte"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"N\xfamero de empleados t\xe9cnicos."),Object(i.b)("li",{parentName:"ul"},"Soporte 24/7"),Object(i.b)("li",{parentName:"ul"},"Herramientas de monitoreo"),Object(i.b)("li",{parentName:"ul"},"Plan de comunicaci\xf3n con otros nodos Validadores")),Object(i.b)("h4",{id:"estructura-de-propiedad"},"Estructura de propiedad"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Descripci\xf3n de la estructura comercial"),Object(i.b)("li",{parentName:"ul"},"N\xfamero de empleados"),Object(i.b)("li",{parentName:"ul"},"Titulares de intereses individuales"),Object(i.b)("li",{parentName:"ul"},"Accionistas de entidades comerciales"),Object(i.b)("li",{parentName:"ul"},"Entidades afiliadas")),Object(i.b)("h2",{id:"estructura-json"},"Estructura JSON"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "validator_account_name": "crsix",\n    "org": {\n        "organization_name": "EOS Costa Rica",\n        "organization_id": "3-101-090127",\n        "technical_contact": "Xavier Fernandez",\n        "business_contact": "Edgar Fernandez",\n        "email": "bp@eosio.cr",\n        "website": "https://eoscostarica.io",\n        "code_of_conduct": "https://eoscostarica.io/en/transparency/#code_of_conduct",\n        "ownership_disclosure": "https://eoscostarica.io/en/transparency/#ownership_disclosure",\n        "branding": {\n            "logo_256": "https://eoscostarica.io/assets/eos-CostaRica-256x256.png",\n            "logo_1024": "https://eoscostarica.io/assets/eos-CostaRica-1024x1024.png",\n            "logo_svg": "https://eoscostarica.io/assets/eos-CostaRica-vectors.svg"\n        },\n        "location": {\n            "name": "San Jose",\n            "country": "CR",\n            "latitude": 9.936377,\n            "longitude": -84.078155\n        },\n        "social": {\n            "steemit": "eos-costarica",\n            "twitter": "EOSCostaRica",\n            "youtube": "channel/UCvYinCH3O1iKpi-_dNfQAGQ",\n            "facebook": "costaricaeos",\n            "github": "eoscostarica",\n            "reddit": "eoscostarica",\n            "keybase": "eoscostarica",\n            "telegram": "eoscr",\n            "wechat": ""\n        }\n    },\n    "nodes": [\n        {\n            "location": {\n                "name": "San Jose",\n                "country": "CR",\n                "latitude": 9.936377,\n                "longitude": -84.078155\n            },\n            "node_type": "writer",\n            "history_type": "none",\n            "api_endpoint": "http://lacchain.eosio.cr",\n            "ssl_endpoint": "https://lacchain.eosio.cr"\n        },\n        {\n            "location": {\n                "name": "San Jose",\n                "country": "CR",\n                "latitude": 9.936377,\n                "longitude": -84.078155\n            },\n            "node_type": "boot",\n            "p2p_endpoint": "lacchain.eosio.cr:9876"\n        },\n        {\n            "location": {\n                "name": "San Jose",\n                "country": "CR",\n                "latitude": 9.936377,\n                "longitude": -84.078155\n            },\n            "node_type": "validator"\n        }\n    ]\n}\n')))}d.isMDXComponent=!0}}]);