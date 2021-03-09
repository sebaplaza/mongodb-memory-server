(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{63:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return b}));var a=t(3),r=t(7),i=(t(0),t(92)),c={id:"mongo-instance",title:"MongoInstance"},o={unversionedId:"api/mongo-instance",id:"api/mongo-instance",isDocsHomePage:!1,title:"MongoInstance",description:"API Documentation of MongoInstance-Class",source:"@site/../docs/api/mongoinstance.md",slug:"/api/mongo-instance",permalink:"/mongodb-memory-server/docs/api/mongo-instance",editUrl:"https://github.com/nodkz/mongodb-memory-server/edit/master/docs/../docs/api/mongoinstance.md",version:"current",sidebar:"api",previous:{title:"MongoMemoryReplSet",permalink:"/mongodb-memory-server/docs/api/mongo-memory-replset"},next:{title:"MongoBinary",permalink:"/mongodb-memory-server/docs/api/mongo-binary"}},l=[{value:"Functions",id:"functions",children:[{value:"new",id:"new",children:[]},{value:"debug",id:"debug",children:[]},{value:"static-run",id:"static-run",children:[]},{value:"prepareCommandArgs",id:"preparecommandargs",children:[]},{value:"run",id:"run",children:[]},{value:"kill",id:"kill",children:[]},{value:"_launchMongod",id:"_launchmongod",children:[]},{value:"_launchKiller",id:"_launchkiller",children:[]},{value:"errorHandler",id:"errorhandler",children:[]},{value:"closeHandler",id:"closehandler",children:[]},{value:"stderrHandler",id:"stderrhandler",children:[]},{value:"stdoutHandler",id:"stdouthandler",children:[]}]},{value:"Values",id:"values",children:[{value:"instanceOpts",id:"instanceopts",children:[]},{value:"binaryOpts",id:"binaryopts",children:[]},{value:"spawnOpts",id:"spawnopts",children:[]},{value:"childProcess",id:"childprocess",children:[]},{value:"killerProcess",id:"killerprocess",children:[]},{value:"isInstancePrimary",id:"isinstanceprimary",children:[]},{value:"isInstanceReady",id:"isinstanceready",children:[]},{value:"isReplSet",id:"isreplset",children:[]}]}],s={toc:l};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"API Documentation of ",Object(i.b)("inlineCode",{parentName:"p"},"MongoInstance"),"-Class"),Object(i.b)("h2",{id:"functions"},"Functions"),Object(i.b)("h3",{id:"new"},"new"),Object(i.b)("p",null,"Typings: ",Object(i.b)("inlineCode",{parentName:"p"},"constructor(opts: Partial<MongodOpts>)")),Object(i.b)("p",null,"Create an new Instance without starting it"),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"When directly starting the instance, ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#static-run"}),Object(i.b)("inlineCode",{parentName:"a"},"run"))," should be used"))),Object(i.b)("h3",{id:"debug"},"debug"),Object(i.b)("p",null,"Typings: ",Object(i.b)("inlineCode",{parentName:"p"},"private debug(msg: string): void")),Object(i.b)("p",null,"Format input with debug-message template"),Object(i.b)("h3",{id:"static-run"},"static-run"),Object(i.b)("p",null,"Typings: ",Object(i.b)("inlineCode",{parentName:"p"},"static async run(opts: Partial<MongodOpts>): Promise<MongoInstance>")),Object(i.b)("p",null,"Create an new Instance and start it (while being an Promise)"),Object(i.b)("h3",{id:"preparecommandargs"},"prepareCommandArgs"),Object(i.b)("p",null,"Typings: ",Object(i.b)("inlineCode",{parentName:"p"},"prepareCommandArgs(): string[]")),Object(i.b)("p",null,"Constructs the Command Arguments"),Object(i.b)("h3",{id:"run"},"run"),Object(i.b)("p",null,"Typings: ",Object(i.b)("inlineCode",{parentName:"p"},"async run(): Promise<this>")),Object(i.b)("p",null,"Start the ",Object(i.b)("inlineCode",{parentName:"p"},"mongod")," process"),Object(i.b)("h3",{id:"kill"},"kill"),Object(i.b)("p",null,"Typings: ",Object(i.b)("inlineCode",{parentName:"p"},"async kill(): Promise<MongoInstance>")),Object(i.b)("p",null,"Stop the ",Object(i.b)("inlineCode",{parentName:"p"},"mongod")," process"),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Will not Error if instance is not running"))),Object(i.b)("h3",{id:"_launchmongod"},"_launchMongod"),Object(i.b)("span",{class:"badge badge--warning"},"Internal"),Object(i.b)("p",null,"Typings: ",Object(i.b)("inlineCode",{parentName:"p"},"_launchMongod(mongoBin: string): ChildProcess")),Object(i.b)("p",null,"Actually spawn the ",Object(i.b)("inlineCode",{parentName:"p"},"mongod")," process with ",Object(i.b)("inlineCode",{parentName:"p"},"ChildProcess"),", used by ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#run"}),Object(i.b)("inlineCode",{parentName:"a"},"run"))),Object(i.b)("h3",{id:"_launchkiller"},"_launchKiller"),Object(i.b)("span",{class:"badge badge--warning"},"Internal"),Object(i.b)("p",null,"Typings: ",Object(i.b)("inlineCode",{parentName:"p"},"_launchKiller(parentPid: number, childPid: number): ChildProcess")),Object(i.b)("p",null,"Spawn an killer process that keeps watch over the ",Object(i.b)("inlineCode",{parentName:"p"},"mongod")," process"),Object(i.b)("h3",{id:"errorhandler"},"errorHandler"),Object(i.b)("span",{class:"badge badge--warning"},"Internal"),Object(i.b)("p",null,"Typings: ",Object(i.b)("inlineCode",{parentName:"p"},"errorHandler(err: string): void")),Object(i.b)("p",null,"Error handler for the ",Object(i.b)("inlineCode",{parentName:"p"},"mongod")," process"),Object(i.b)("h3",{id:"closehandler"},"closeHandler"),Object(i.b)("span",{class:"badge badge--warning"},"Internal"),Object(i.b)("p",null,"Typings: ",Object(i.b)("inlineCode",{parentName:"p"},"closeHandler(code: number): void")),Object(i.b)("p",null,"Close handler for the ",Object(i.b)("inlineCode",{parentName:"p"},"mongod")," process"),Object(i.b)("h3",{id:"stderrhandler"},"stderrHandler"),Object(i.b)("span",{class:"badge badge--warning"},"Internal"),Object(i.b)("p",null,"Typings: ",Object(i.b)("inlineCode",{parentName:"p"},"stderrHandler(message: string | Buffer): void")),Object(i.b)("p",null,"STDERR handler for the ",Object(i.b)("inlineCode",{parentName:"p"},"mongod")," process"),Object(i.b)("h3",{id:"stdouthandler"},"stdoutHandler"),Object(i.b)("span",{class:"badge badge--warning"},"Internal"),Object(i.b)("p",null,"Typings: ",Object(i.b)("inlineCode",{parentName:"p"},"stdoutHandler(message: string | Buffer): void")),Object(i.b)("p",null,"STDOUT handler for the ",Object(i.b)("inlineCode",{parentName:"p"},"mongod")," process",Object(i.b)("br",null),"\nMatches process output against known formats and raise events"),Object(i.b)("h2",{id:"values"},"Values"),Object(i.b)("h3",{id:"instanceopts"},"instanceOpts"),Object(i.b)("p",null,"Typings: ",Object(i.b)("inlineCode",{parentName:"p"},"instanceOpts: MongoInstanceOpts")),Object(i.b)("p",null,"Stores the Instance Options"),Object(i.b)("h3",{id:"binaryopts"},"binaryOpts"),Object(i.b)("p",null,"Typings: ",Object(i.b)("inlineCode",{parentName:"p"},"readonly binaryOpts: Readonly<MongoBinaryOpts>")),Object(i.b)("p",null,"Stores the Binary Options"),Object(i.b)("h3",{id:"spawnopts"},"spawnOpts"),Object(i.b)("p",null,"Typings: ",Object(i.b)("inlineCode",{parentName:"p"},"readonly spawnOpts: Readonly<SpawnOptions>")),Object(i.b)("p",null,"Stores the Spawn Options"),Object(i.b)("h3",{id:"childprocess"},"childProcess"),Object(i.b)("span",{class:"badge badge--warning"},"Internal"),Object(i.b)("p",null,"Typings: ",Object(i.b)("inlineCode",{parentName:"p"},"childProcess?: ChildProcess")),Object(i.b)("p",null,"Stores the active process reference for the ",Object(i.b)("inlineCode",{parentName:"p"},"mongod")," process"),Object(i.b)("h3",{id:"killerprocess"},"killerProcess"),Object(i.b)("span",{class:"badge badge--warning"},"Internal"),Object(i.b)("p",null,"Typings: ",Object(i.b)("inlineCode",{parentName:"p"},"killerProcess?: ChildProcess")),Object(i.b)("p",null,"Stores the active process reference for the killer process"),Object(i.b)("h3",{id:"isinstanceprimary"},"isInstancePrimary"),Object(i.b)("p",null,"Typings: ",Object(i.b)("inlineCode",{parentName:"p"},"isInstancePrimary: boolean")),Object(i.b)("p",null,"Stores that the process is an Primary (ReplSet)"),Object(i.b)("h3",{id:"isinstanceready"},"isInstanceReady"),Object(i.b)("p",null,"Typings: ",Object(i.b)("inlineCode",{parentName:"p"},"isInstanceReady: boolean")),Object(i.b)("p",null,"Stores that the process is fully started"),Object(i.b)("h3",{id:"isreplset"},"isReplSet"),Object(i.b)("p",null,"Typings: ",Object(i.b)("inlineCode",{parentName:"p"},"isReplSet: boolean")),Object(i.b)("p",null,"Stores that the process is in an ReplSet"))}b.isMDXComponent=!0},92:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),b=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=b(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(t),u=a,m=p["".concat(c,".").concat(u)]||p[u]||d[u]||i;return t?r.a.createElement(m,o(o({ref:n},s),{},{components:t})):r.a.createElement(m,o({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var s=2;s<i;s++)c[s]=t[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);