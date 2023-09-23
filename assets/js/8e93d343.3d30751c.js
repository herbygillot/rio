"use strict";(self.webpackChunkrio_docs=self.webpackChunkrio_docs||[]).push([[4043],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=r.createContext({}),l=function(e){var n=r.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(m.Provider,{value:n},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,m=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=l(t),d=o,f=s["".concat(m,".").concat(d)]||s[d]||u[d]||a;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var m in n)hasOwnProperty.call(n,m)&&(c[m]=n[m]);c.originalType=e,c[s]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2964:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const a={title:"Command-line interface",language:"en"},i=void 0,c={unversionedId:"documentation/command-line-interface",id:"documentation/command-line-interface",title:"Command-line interface",description:"A command-line interface (CLI) is a means of interacting with a device or computer program with commands from a user or client, and responses from the device or program, in the form of lines of text. Rio terminal has a command-line interface that you can use for different purposes.",source:"@site/docs/documentation/command-line-interface.md",sourceDirName:"documentation",slug:"/documentation/command-line-interface",permalink:"/rio/docs/documentation/command-line-interface",draft:!1,editUrl:"https://github.com/raphamorim/rio/tree/main/docs/docs/documentation/command-line-interface.md",tags:[],version:"current",frontMatter:{title:"Command-line interface",language:"en"},sidebar:"tutorialSidebar",previous:{title:"Documentation",permalink:"/rio/docs/documentation/"},next:{title:"Configuration file",permalink:"/rio/docs/documentation/configuration-file"}},m={},l=[],p={toc:l},s="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(s,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A command-line interface (CLI) is a means of interacting with a device or computer program with commands from a user or client, and responses from the device or program, in the form of lines of text. Rio terminal has a command-line interface that you can use for different purposes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ rio --help\nRio terminal app\n\nUsage: rio [OPTIONS]\n\nOptions:\n<p>  -e, --command <COMMAND>...  Command and args to execute (must be last argument)\n<p>  -h, --help                  Print help\n<p>  -V, --version               Print version\n\nThe options "-e" and "--command" executes the command and closes the terminal right way after the execution.\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ rio -e sleep 10\n")),(0,o.kt)("p",null,"You can also ",(0,o.kt)("inlineCode",{parentName:"p"},"RIO_LOG_LEVEL")," environment variable for filter logs on-demand, for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ RIO_LOG_LEVEL=debug rio -e echo 85\n")))}u.isMDXComponent=!0}}]);