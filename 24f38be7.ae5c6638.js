(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{74:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return b})),t.d(n,"default",(function(){return p}));var o=t(3),i=t(7),a=(t(0),t(92)),r={id:"config-options",title:"Config Options"},l={unversionedId:"api/config-options",id:"api/config-options",isDocsHomePage:!1,title:"Config Options",description:"List of all Config Options",source:"@site/../docs/api/config-options.md",slug:"/api/config-options",permalink:"/mongodb-memory-server/docs/api/config-options",editUrl:"https://github.com/nodkz/mongodb-memory-server/edit/master/docs/../docs/api/config-options.md",version:"current",sidebar:"api",previous:{title:"Welcome to the API",permalink:"/mongodb-memory-server/docs/api/index-api"},next:{title:"MongoMemoryServer",permalink:"/mongodb-memory-server/docs/api/mongo-memory-server"}},b=[{value:"List of Config Options",id:"list-of-config-options",children:[{value:"DOWNLOAD_DIR",id:"download_dir",children:[]},{value:"PLATFORM",id:"platform",children:[]},{value:"ARCH",id:"arch",children:[]},{value:"VERSION",id:"version",children:[]},{value:"DEBUG",id:"debug",children:[]},{value:"DOWNLOAD_MIRROR",id:"download_mirror",children:[]},{value:"DOWNLOAD_URL",id:"download_url",children:[]},{value:"PREFER_GLOBAL_PATH",id:"prefer_global_path",children:[]},{value:"DISABLE_POSTINSTALL",id:"disable_postinstall",children:[]},{value:"SYSTEM_BINARY",id:"system_binary",children:[]},{value:"MD5_CHECK",id:"md5_check",children:[]},{value:"ARCHIVE_NAME",id:"archive_name",children:[]},{value:"RUNTIME_DOWNLOAD",id:"runtime_download",children:[]},{value:"USE_HTTP",id:"use_http",children:[]}]},{value:"How to use them in the package.json",id:"how-to-use-them-in-the-packagejson",children:[]},{value:"How to use them as Environment Variables",id:"how-to-use-them-as-environment-variables",children:[]}],c={toc:b};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"List of all Config Options"),Object(a.b)("h2",{id:"list-of-config-options"},"List of Config Options"),Object(a.b)("h3",{id:"download_dir"},"DOWNLOAD_DIR"),Object(a.b)("p",null,"Option ",Object(a.b)("inlineCode",{parentName:"p"},"DOWNLOAD_DIR")," is used to set where the binaries will be located in, this will overwrite all other directories"),Object(a.b)("p",null,"Directory Priority:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"DOWNLOAD_DIR (Environment Variable over package.json)"),Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"~/.cache/mongodb-binaries")," (Home Directory Cache) ","[Only used if directory exists]"),Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"projectRoot/node_modules/.cache/mongodb-binaries")," (node-modules cache)"),Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"./mongodb-binaries")," (relative to ",Object(a.b)("inlineCode",{parentName:"li"},"process.cwd()"),")")),Object(a.b)("p",null,"Format:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"/path/to/binary/")," (POSIX)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"C:/path/to/binary/")," (DOS)")),Object(a.b)("h3",{id:"platform"},"PLATFORM"),Object(a.b)("p",null,"Option ",Object(a.b)("inlineCode",{parentName:"p"},"PLATFORM")," is used to overwrite which platform should be downloaded"),Object(a.b)("p",null,"Valid Options are ",Object(a.b)("inlineCode",{parentName:"p"},"win32"),", ",Object(a.b)("inlineCode",{parentName:"p"},"darwin"),", ",Object(a.b)("inlineCode",{parentName:"p"},"linux"),", ",Object(a.b)("inlineCode",{parentName:"p"},"sunos")),Object(a.b)("h3",{id:"arch"},"ARCH"),Object(a.b)("p",null,"Option ",Object(a.b)("inlineCode",{parentName:"p"},"ARCH")," is used to overwrite the Architecture to download for"),Object(a.b)("p",null,"Valid Options are ",Object(a.b)("inlineCode",{parentName:"p"},"ia32"),", ",Object(a.b)("inlineCode",{parentName:"p"},"x64"),", ",Object(a.b)("inlineCode",{parentName:"p"},"arm64")),Object(a.b)("h3",{id:"version"},"VERSION"),Object(a.b)("p",null,"Option ",Object(a.b)("inlineCode",{parentName:"p"},"VERSION")," is used to set what mongodb version should be downloaded"),Object(a.b)("p",null,"Default: ",Object(a.b)("inlineCode",{parentName:"p"},"4.0.20")),Object(a.b)("h3",{id:"debug"},"DEBUG"),Object(a.b)("p",null,"Option ",Object(a.b)("inlineCode",{parentName:"p"},"DEBUG")," is used to enable Debug Output"),Object(a.b)("h3",{id:"download_mirror"},"DOWNLOAD_MIRROR"),Object(a.b)("p",null,"Option ",Object(a.b)("inlineCode",{parentName:"p"},"DOWNLOAD_MIRROR")," is used to set which mirror to use"),Object(a.b)("p",null,"Default / Format: ",Object(a.b)("inlineCode",{parentName:"p"},"https://fastdl.mongodb.org")),Object(a.b)("h3",{id:"download_url"},"DOWNLOAD_URL"),Object(a.b)("p",null,"Option ",Object(a.b)("inlineCode",{parentName:"p"},"DOWNLOAD_URL")," is used to overwrite the ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("em",{parentName:"strong"},"complete"))," URL (including ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"#DOWNLOAD_MIRROR"}),Object(a.b)("inlineCode",{parentName:"a"},"DOWNLOAD_MIRROR")),")"),Object(a.b)("p",null,"Format: ",Object(a.b)("inlineCode",{parentName:"p"},"https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-ubuntu1604-4.0.20.tgz")),Object(a.b)("h3",{id:"prefer_global_path"},"PREFER_GLOBAL_PATH"),Object(a.b)("p",null,"Option ",Object(a.b)("inlineCode",{parentName:"p"},"PREFER_GLOBAL_PATH")," is used to force download into ",Object(a.b)("inlineCode",{parentName:"p"},"~/.cache/mongodb-binaries")," instead of local folder"),Object(a.b)("h3",{id:"disable_postinstall"},"DISABLE_POSTINSTALL"),Object(a.b)("p",null,"Option ",Object(a.b)("inlineCode",{parentName:"p"},"DISABLE_POSTINSTALL")," is used to skip all ",Object(a.b)("inlineCode",{parentName:"p"},"postinstall")," scripts"),Object(a.b)("h3",{id:"system_binary"},"SYSTEM_BINARY"),Object(a.b)("p",null,"Option ",Object(a.b)("inlineCode",{parentName:"p"},"SYSTEM_BINARY")," is used to set the path to an system binary already existing on the system"),Object(a.b)("p",null,"Format:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"/path/to/binary/mongod")," (POSIX)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"C:/path/to/binary/mongod.exe")," (DOS)")),Object(a.b)("h3",{id:"md5_check"},"MD5_CHECK"),Object(a.b)("p",null,"Option ",Object(a.b)("inlineCode",{parentName:"p"},"MD5_CHECK")," is used to enable an md5 check after download"),Object(a.b)("p",null,"Default: ",Object(a.b)("inlineCode",{parentName:"p"},"false")),Object(a.b)("h3",{id:"archive_name"},"ARCHIVE_NAME"),Object(a.b)("p",null,"Option ",Object(a.b)("inlineCode",{parentName:"p"},"ARCHIVE_NAME")," is used to overwrite the complete archive name"),Object(a.b)("p",null,"Format: ",Object(a.b)("inlineCode",{parentName:"p"},"mongodb-linux-x86_64-ubuntu1604-4.0.20.tgz")),Object(a.b)("h3",{id:"runtime_download"},"RUNTIME_DOWNLOAD"),Object(a.b)("p",null,"Option ",Object(a.b)("inlineCode",{parentName:"p"},"RUNTIME_DOWNLOAD")," is used to disable downloading while being in something like ",Object(a.b)("inlineCode",{parentName:"p"},".start")),Object(a.b)("p",null,"Default: ",Object(a.b)("inlineCode",{parentName:"p"},"true")),Object(a.b)("h3",{id:"use_http"},"USE_HTTP"),Object(a.b)("p",null,"Option ",Object(a.b)("inlineCode",{parentName:"p"},"USE_HTTP")," is used to use ",Object(a.b)("inlineCode",{parentName:"p"},"http")," over ",Object(a.b)("inlineCode",{parentName:"p"},"https")),Object(a.b)("p",null,"Default: ",Object(a.b)("inlineCode",{parentName:"p"},"false")),Object(a.b)("h2",{id:"how-to-use-them-in-the-packagejson"},"How to use them in the package.json"),Object(a.b)("p",null,"To use the config options in the ",Object(a.b)("inlineCode",{parentName:"p"},"package.json"),", they need to be camelCased (and without ",Object(a.b)("inlineCode",{parentName:"p"},"_"),"), and need to be in the property ",Object(a.b)("inlineCode",{parentName:"p"},"config.mongodbMemoryServer")),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n  "config": {\n    "mongodbMemoryServer": {\n      "downloadDir": "/path/to/DownloadDir"\n    }\n  }\n}\n')),Object(a.b)("p",null,"By default it uses the nearest (upwards) ",Object(a.b)("inlineCode",{parentName:"p"},"package.json")," to ",Object(a.b)("inlineCode",{parentName:"p"},"process.cwd()"),".\nTo change this:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"import { findPackageJson } from \"mongodb-memory-server-core/lib/util/resolveConfig\";\n\nfindPackageJson('/custom/path');\n\n// OR\n\nprocess.chdir('/custom/path'); // not recommended\n")),Object(a.b)("h2",{id:"how-to-use-them-as-environment-variables"},"How to use them as Environment Variables"),Object(a.b)("p",null,"For Environment Variables an config option must be prefixed with ",Object(a.b)("inlineCode",{parentName:"p"},"MONGOMS_")),Object(a.b)("p",null,"Example: ",Object(a.b)("inlineCode",{parentName:"p"},"MONGOMS_DOWNLOAD_DIR")))}p.isMDXComponent=!0},92:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return u}));var o=t(0),i=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),p=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},O={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},s=i.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),d=p(t),s=o,u=d["".concat(r,".").concat(s)]||d[s]||O[s]||a;return t?i.a.createElement(u,l(l({ref:n},c),{},{components:t})):i.a.createElement(u,l({ref:n},c))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=s;var l={};for(var b in n)hasOwnProperty.call(n,b)&&(l[b]=n[b]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<a;c++)r[c]=t[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);