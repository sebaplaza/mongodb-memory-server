"use strict";(self.webpackChunkmongodb_memory_server_website=self.webpackChunkmongodb_memory_server_website||[]).push([[170],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3925:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={id:"faq",title:"Frequently Asked Questions"},l=void 0,c={unversionedId:"guides/faq",id:"guides/faq",isDocsHomePage:!1,title:"Frequently Asked Questions",description:"Do binaries get automatically deleted?",source:"@site/../docs/guides/faq.md",sourceDirName:"guides",slug:"/guides/faq",permalink:"/mongodb-memory-server/docs/guides/faq",editUrl:"https://github.com/nodkz/mongodb-memory-server/edit/master/docs/../docs/guides/faq.md",tags:[],version:"current",frontMatter:{id:"faq",title:"Frequently Asked Questions"},sidebar:"guides",previous:{title:"Quick Start Guide",permalink:"/mongodb-memory-server/docs/guides/quick-start-guide"},next:{title:"Known Issues",permalink:"/mongodb-memory-server/docs/guides/known-issues"}},u=[{value:"Do binaries get automatically deleted?",id:"do-binaries-get-automatically-deleted",children:[],level:3},{value:"Why is there no documentation about class-options / interfaces in the documentation?",id:"why-is-there-no-documentation-about-class-options--interfaces-in-the-documentation",children:[],level:3},{value:"Do testing database paths get cleaned up?",id:"do-testing-database-paths-get-cleaned-up",children:[],level:3}],d={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"do-binaries-get-automatically-deleted"},"Do binaries get automatically deleted?"),(0,o.kt)("p",null,"No, this package will ",(0,o.kt)("strong",{parentName:"p"},"not")," delete any binaries, so after an system / package upgrade the binaries may have to be cleaned manually."),(0,o.kt)("h3",{id:"why-is-there-no-documentation-about-class-options--interfaces-in-the-documentation"},"Why is there no documentation about class-options / interfaces in the documentation?"),(0,o.kt)("p",null,"It is currently recommended to directly look at the TSDoc for these properties to get their type & documentation."),(0,o.kt)("h3",{id:"do-testing-database-paths-get-cleaned-up"},"Do testing database paths get cleaned up?"),(0,o.kt)("p",null,"If the Database if a temporary directory (generated with ",(0,o.kt)("inlineCode",{parentName:"p"},"tmp"),"), then it will automatically get cleaned-up when calling ",(0,o.kt)("inlineCode",{parentName:"p"},".stop()"),", this can be disabled with ",(0,o.kt)("inlineCode",{parentName:"p"},".stop(false)"),".",(0,o.kt)("br",{parentName:"p"}),"\n","If the Database if manually set (set with ",(0,o.kt)("inlineCode",{parentName:"p"},"dbPath"),"), then it needs to be manually cleaned-up with ",(0,o.kt)("inlineCode",{parentName:"p"},".cleanup(true)"),"."))}p.isMDXComponent=!0}}]);