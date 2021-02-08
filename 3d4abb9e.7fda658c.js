(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{74:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return c})),t.d(a,"metadata",(function(){return o})),t.d(a,"toc",(function(){return s})),t.d(a,"default",(function(){return l}));var n=t(3),i=t(7),r=(t(0),t(91)),c={id:"mongo-memory-replset",title:"MongoMemoryReplSet"},o={unversionedId:"api/mongo-memory-replset",id:"api/mongo-memory-replset",isDocsHomePage:!1,title:"MongoMemoryReplSet",description:"API Documentation of MongoMemoryReplSet-Class",source:"@site/../docs/api/mongomemoryreplset.md",slug:"/api/mongo-memory-replset",permalink:"/mongodb-memory-server/docs/api/mongo-memory-replset",editUrl:"https://github.com/nodkz/mongodb-memory-server/edit/master/docs/../docs/api/mongomemoryreplset.md",version:"current",sidebar:"api",previous:{title:"MongoMemoryServer",permalink:"/mongodb-memory-server/docs/api/mongo-memory-server"},next:{title:"MongoInstance",permalink:"/mongodb-memory-server/docs/api/mongo-instance"}},s=[{value:"Functions",id:"functions",children:[{value:"new",id:"new",children:[]},{value:"create",id:"create",children:[]},{value:"stateChange",id:"statechange",children:[]},{value:"getInstanceOpts",id:"getinstanceopts",children:[]},{value:"getUri",id:"geturi",children:[]},{value:"start",id:"start",children:[]},{value:"initAllServers",id:"initallservers",children:[]},{value:"stop",id:"stop",children:[]},{value:"cleanup",id:"cleanup",children:[]},{value:"waitUntilRunning",id:"waituntilrunning",children:[]},{value:"_initReplSet",id:"_initreplset",children:[]},{value:"_initServer",id:"_initserver",children:[]},{value:"_waitForPrimary",id:"_waitforprimary",children:[]}]},{value:"Values",id:"values",children:[{value:"servers",id:"servers",children:[]},{value:"instanceOpts",id:"instanceopts",children:[]},{value:"_instanceOpts",id:"_instanceopts",children:[]},{value:"binaryOpts",id:"binaryopts",children:[]},{value:"_binaryOpts",id:"_binaryopts",children:[]},{value:"replSetOpts",id:"replsetopts",children:[]},{value:"_replSetOpts",id:"_replsetopts",children:[]},{value:"state",id:"state",children:[]},{value:"_state",id:"_state",children:[]},{value:"_ranCreateAuth",id:"_rancreateauth",children:[]}]}],p={toc:s};function l(e){var a=e.components,t=Object(i.a)(e,["components"]);return Object(r.a)("wrapper",Object(n.a)({},p,t,{components:a,mdxType:"MDXLayout"}),Object(r.a)("p",null,"API Documentation of ",Object(r.a)("inlineCode",{parentName:"p"},"MongoMemoryReplSet"),"-Class"),Object(r.a)("h2",{id:"functions"},"Functions"),Object(r.a)("h3",{id:"new"},"new"),Object(r.a)("p",null,"Typings: ",Object(r.a)("inlineCode",{parentName:"p"},"constructor(opts: Partial<MongoMemoryReplSetOpts> = {})")),Object(r.a)("p",null,"Create an new ReplSet without starting it"),Object(r.a)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.a)("h5",{parentName:"div"},Object(r.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.a)("p",{parentName:"div"},"When directly starting the replset, ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"#create"}),Object(r.a)("inlineCode",{parentName:"a"},"create"))," should be used"))),Object(r.a)("h3",{id:"create"},"create"),Object(r.a)("p",null,"Typings: ",Object(r.a)("inlineCode",{parentName:"p"},"static async create(opts: Partial<MongoMemoryReplSetOpts> = {}): Promise<MongoMemoryReplSet>")),Object(r.a)("p",null,"Create an new ReplSet and start it (while being an Promise)"),Object(r.a)("h3",{id:"statechange"},"stateChange"),Object(r.a)("span",{class:"badge badge--warning"},"Internal"),Object(r.a)("p",null,"Typings: ",Object(r.a)("inlineCode",{parentName:"p"},"protected stateChange(newState: MongoMemoryReplSetStates, ...args: any[]): void")),Object(r.a)("p",null,"Used to change the state of the class, it is ",Object(r.a)("inlineCode",{parentName:"p"},"protected")," to not accidentally use it"),Object(r.a)("h3",{id:"getinstanceopts"},"getInstanceOpts"),Object(r.a)("span",{class:"badge badge--warning"},"Internal"),Object(r.a)("p",null,"Typings: ",Object(r.a)("inlineCode",{parentName:"p"},"protected getInstanceOpts(baseOpts: MongoMemoryInstancePropBase = {}): MongoMemoryInstanceProp")),Object(r.a)("p",null,"Constructs the options used for an instance"),Object(r.a)("h3",{id:"geturi"},"getUri"),Object(r.a)("p",null,"Typings: ",Object(r.a)("inlineCode",{parentName:"p"},"getUri(otherDb?: string | boolean): string")),Object(r.a)("p",null,"Get an mongodb-usable uri (can also be used in mongoose)"),Object(r.a)("h3",{id:"start"},"start"),Object(r.a)("p",null,"Typings: ",Object(r.a)("inlineCode",{parentName:"p"},"async start(): Promise<void>")),Object(r.a)("p",null,"Used to start an new ReplSet or to Re-Start an stopped ReplSet"),Object(r.a)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.a)("h5",{parentName:"div"},Object(r.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.a)("p",{parentName:"div"},"Will Error if ReplSet is already running"))),Object(r.a)("h3",{id:"initallservers"},"initAllServers"),Object(r.a)("span",{class:"badge badge--warning"},"Internal"),Object(r.a)("p",null,"Typings: ",Object(r.a)("inlineCode",{parentName:"p"},"protected async initAllServers(): Promise<void>")),Object(r.a)("p",null,"Used by ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"#start"}),Object(r.a)("inlineCode",{parentName:"a"},"start"))," and to restart without fully running everything again"),Object(r.a)("h3",{id:"stop"},"stop"),Object(r.a)("p",null,"Typings: ",Object(r.a)("inlineCode",{parentName:"p"},"async stop(runCleanup: boolean = true): Promise<boolean>")),Object(r.a)("p",null,"Stop an running instance"),Object(r.a)("p",null,"This function will by default run ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"#cleanup"}),Object(r.a)("inlineCode",{parentName:"a"},".cleanup")),", this must be set to ",Object(r.a)("inlineCode",{parentName:"p"},"false")," to be able to restart (and an engine other than ",Object(r.a)("inlineCode",{parentName:"p"},"ephemeralForTest")," must be used)"),Object(r.a)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.a)("h5",{parentName:"div"},Object(r.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.a)("p",{parentName:"div"},"Will not Error if instance is not running"))),Object(r.a)("h3",{id:"cleanup"},"cleanup"),Object(r.a)("p",null,"Typings: ",Object(r.a)("inlineCode",{parentName:"p"},"async cleanup(force: boolean = false): Promise<void>")),Object(r.a)("p",null,"Cleanup all files used by this ReplSet & instances"),Object(r.a)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.a)("h5",{parentName:"div"},Object(r.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.a)("p",{parentName:"div"},"Runs automatically on ",Object(r.a)("inlineCode",{parentName:"p"},"process.on('beforeExit')")))),Object(r.a)("h3",{id:"waituntilrunning"},"waitUntilRunning"),Object(r.a)("p",null,"Typings: ",Object(r.a)("inlineCode",{parentName:"p"},"async waitUntilRunning(): Promise<void>")),Object(r.a)("p",null,"Wait until all instances are running"),Object(r.a)("h3",{id:"_initreplset"},"_initReplSet"),Object(r.a)("span",{class:"badge badge--warning"},"Internal"),Object(r.a)("p",null,"Typings: ",Object(r.a)("inlineCode",{parentName:"p"},"protected async _initReplSet(): Promise<void>")),Object(r.a)("p",null,"This is used to connect to the first server and initiate the ReplSet with an command",Object(r.a)("br",null),"\nAlso enables ",Object(r.a)("inlineCode",{parentName:"p"},"auth")),Object(r.a)("h3",{id:"_initserver"},"_initServer"),Object(r.a)("span",{class:"badge badge--warning"},"Internal"),Object(r.a)("p",null,"Typings: ",Object(r.a)("inlineCode",{parentName:"p"},"protected _initServer(instanceOpts: MongoMemoryInstanceProp): MongoMemoryServer")),Object(r.a)("p",null,"Creates an new ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"/mongodb-memory-server/docs/api/mongo-memory-server"}),Object(r.a)("inlineCode",{parentName:"a"},"instance"))," for the ReplSet"),Object(r.a)("h3",{id:"_waitforprimary"},"_waitForPrimary"),Object(r.a)("span",{class:"badge badge--warning"},"Internal"),Object(r.a)("p",null,"Typings: ",Object(r.a)("inlineCode",{parentName:"p"},"protected async _waitForPrimary(timeout: number = 30000): Promise<void>")),Object(r.a)("p",null,"Wait until the ReplSet has elected an Primary"),Object(r.a)("h2",{id:"values"},"Values"),Object(r.a)("h3",{id:"servers"},"servers"),Object(r.a)("p",null,"Typings: ",Object(r.a)("inlineCode",{parentName:"p"},"servers: MongoMemoryServer[]")),Object(r.a)("p",null,"Stores all the servers of this ReplSet"),Object(r.a)("h3",{id:"instanceopts"},"instanceOpts"),Object(r.a)("p",null,"Typings:"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"get instanceOpts(): MongoMemoryInstancePropBase[]")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"set instanceOpts(val: MongoMemoryInstancePropBase[])"))),Object(r.a)("p",null,"Getter & Setter for ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"#_instanceOpts"}),Object(r.a)("inlineCode",{parentName:"a"},"_instanceOpts"))),Object(r.a)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.a)("h5",{parentName:"div"},Object(r.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.a)("p",{parentName:"div"},"Will Throw an Error if ",Object(r.a)("inlineCode",{parentName:"p"},"state")," is not ",Object(r.a)("inlineCode",{parentName:"p"},"stopped")))),Object(r.a)("h3",{id:"_instanceopts"},"_instanceOpts"),Object(r.a)("span",{class:"badge badge--warning"},"Internal"),Object(r.a)("p",null,"Typings: ",Object(r.a)("inlineCode",{parentName:"p"},"protected _instanceOpts!: MongoMemoryInstancePropBase[]")),Object(r.a)("p",null,"Stores Options used for an instance"),Object(r.a)("h3",{id:"binaryopts"},"binaryOpts"),Object(r.a)("p",null,"Typings:"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"get binaryOpts(): MongoBinaryOpts")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"set binaryOpts(val: MongoBinaryOpts)"))),Object(r.a)("p",null,"Getter & Setter for ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"#_binaryOpts"}),Object(r.a)("inlineCode",{parentName:"a"},"_binaryOpts"))),Object(r.a)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.a)("h5",{parentName:"div"},Object(r.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.a)("p",{parentName:"div"},"Will Throw an Error if ",Object(r.a)("inlineCode",{parentName:"p"},"state")," is not ",Object(r.a)("inlineCode",{parentName:"p"},"stopped")))),Object(r.a)("h3",{id:"_binaryopts"},"_binaryOpts"),Object(r.a)("span",{class:"badge badge--warning"},"Internal"),Object(r.a)("p",null,"Typings: ",Object(r.a)("inlineCode",{parentName:"p"},"protected _binaryOpts!: MongoBinaryOpts")),Object(r.a)("p",null,"Stores the options used for the binary"),Object(r.a)("h3",{id:"replsetopts"},"replSetOpts"),Object(r.a)("p",null,"Typings:"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"get replSetOpts(): ReplSetOpts")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"set replSetOpts(val: ReplSetOpts)"))),Object(r.a)("p",null,"Getter & Setter for ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"#_replSetOpts"}),Object(r.a)("inlineCode",{parentName:"a"},"_replSetOpts"))),Object(r.a)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.a)("h5",{parentName:"div"},Object(r.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.a)("p",{parentName:"div"},"Will Throw an Error if ",Object(r.a)("inlineCode",{parentName:"p"},"state")," is not ",Object(r.a)("inlineCode",{parentName:"p"},"stopped")))),Object(r.a)("h3",{id:"_replsetopts"},"_replSetOpts"),Object(r.a)("span",{class:"badge badge--warning"},"Internal"),Object(r.a)("p",null,"Typings: ",Object(r.a)("inlineCode",{parentName:"p"},"protected _replSetOpts!: Required<ReplSetOpts>")),Object(r.a)("p",null,"Stores the options used for the ReplSet Initiation"),Object(r.a)("h3",{id:"state"},"state"),Object(r.a)("p",null,"Typings: ",Object(r.a)("inlineCode",{parentName:"p"},"get state(): MongoMemoryReplSetStates")),Object(r.a)("p",null,"Getter for ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"#_state"}),Object(r.a)("inlineCode",{parentName:"a"},"_state"))),Object(r.a)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.a)("h5",{parentName:"div"},Object(r.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.a)("p",{parentName:"div"},"Will Throw an Error if ",Object(r.a)("inlineCode",{parentName:"p"},"state")," is not ",Object(r.a)("inlineCode",{parentName:"p"},"stopped")))),Object(r.a)("h3",{id:"_state"},"_state"),Object(r.a)("span",{class:"badge badge--warning"},"Internal"),Object(r.a)("p",null,"Typings: ",Object(r.a)("inlineCode",{parentName:"p"},"protected _state: MongoMemoryReplSetStates")),Object(r.a)("p",null,"Stores the current State"),Object(r.a)("h3",{id:"_rancreateauth"},"_ranCreateAuth"),Object(r.a)("span",{class:"badge badge--warning"},"Internal"),Object(r.a)("p",null,"Typings: ",Object(r.a)("inlineCode",{parentName:"p"},"protected _ranCreateAuth: boolean")),Object(r.a)("p",null,"Stores if the auth creation has already ran"))}l.isMDXComponent=!0},91:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var n=t(0),i=t.n(n);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),l=function(e){var a=i.a.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d={inlineCode:"code",wrapper:function(e){var a=e.children;return i.a.createElement(i.a.Fragment,{},a)}},b=i.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(t),m=n,O=b["".concat(c,".").concat(m)]||b[m]||d[m]||r;return t?i.a.createElement(O,o(o({ref:a},p),{},{components:t})):i.a.createElement(O,o({ref:a},p))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,c=new Array(r);c[0]=b;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var p=2;p<r;p++)c[p]=t[p];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);