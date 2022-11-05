var b=Object.defineProperty;var a=(t,e)=>b(t,"name",{value:e,configurable:!0});import{C as L,w as u,l as k,S as A,p as S}from"./iframe.3b0a9b9b.js";function T(){var t={setHandler:a(function(){},"setHandler"),send:a(function(){},"send")};return new L({transport:t})}a(T,"mockChannel");var g;(function(t){t.TAB="tab",t.PANEL="panel",t.TOOL="tool",t.TOOLEXTRA="toolextra",t.PREVIEW="preview",t.NOTES_ELEMENT="notes-element"})(g||(g={}));function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}a(w,"_defineProperties");function N(t,e,n){return e&&w(t.prototype,e),n&&w(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}a(N,"_createClass");function P(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}a(P,"_classCallCheck");var y=N(a(function t(){var e=this;P(this,t),this.loaders={},this.elements={},this.config={},this.channel=void 0,this.serverChannel=void 0,this.promise=void 0,this.resolve=void 0,this.getChannel=function(){return e.channel||e.setChannel(T()),e.channel},this.getServerChannel=function(){if(!e.serverChannel)throw new Error("Accessing non-existent serverChannel");return e.serverChannel},this.ready=function(){return e.promise},this.hasChannel=function(){return!!e.channel},this.hasServerChannel=function(){return!!e.serverChannel},this.setChannel=function(n){e.channel=n,e.resolve()},this.setServerChannel=function(n){e.serverChannel=n},this.getElements=function(n){return e.elements[n]||(e.elements[n]={}),e.elements[n]},this.addPanel=function(n,r){e.add(n,Object.assign({type:g.PANEL},r))},this.add=function(n,r){var l=r.type,s=e.getElements(l);s[n]=Object.assign({id:n},r)},this.setConfig=function(n){Object.assign(e.config,n)},this.getConfig=function(){return e.config},this.register=function(n,r){e.loaders[n]&&k.warn("".concat(n," was loaded twice, this could have bad side-effects")),e.loaders[n]=r},this.loadAddons=function(n){Object.values(e.loaders).forEach(function(r){return r(n)})},this.promise=new Promise(function(n){e.resolve=function(){return n(e.getChannel())}})},"AddonStore")),p="__STORYBOOK_ADDONS";function D(){return u[p]||(u[p]=new y),u[p]}a(D,"getAddonsStore");var C=D(),_=a(function(e){var n=e.name,r=e.parameterName,l=e.wrapper,s=e.skipIfNoParametersOrOptions,c=s===void 0?!1:s,v=a(function(i){return function(o,f){var h=f.parameters&&f.parameters[r];return h&&h.disable||c&&!i&&!h?o(f):l(o,f,{options:i,parameters:h})}},"decorator");return function(){for(var m=arguments.length,i=new Array(m),o=0;o<m;o++)i[o]=arguments[o];return typeof i[0]=="function"?v().apply(void 0,i):function(){if(arguments.length>1)return i.length>1?v(i).apply(void 0,arguments):v.apply(void 0,i).apply(void 0,arguments);throw new Error("Passing stories directly into ".concat(n,`() is not allowed,
        instead use addDecorator(`).concat(n,") and pass options with the '").concat(r,"' parameter"))}}},"makeDecorator"),j="links",E=u.document,R=u.HTMLElement,H=a(function(e){return C.getChannel().emit(S,e)},"navigate"),O=a(function(e){var n=e.target;if(n instanceof R){var r=n,l=r.dataset,s=l.sbKind,c=l.sbStory;(s||c)&&(e.preventDefault(),H({kind:s,story:c}))}},"linksListener"),d=!1,Y=a(function(){d||(d=!0,E.addEventListener("click",O))},"on"),I=a(function(){d&&(d=!1,E.removeEventListener("click",O))},"off"),K=_({name:"withLinks",parameterName:j,wrapper:a(function(e,n){return Y(),C.getChannel().once(A,I),e(n)},"wrapper")});module&&module.hot&&module.hot.decline&&module.hot.decline();var $=[K];export{$ as decorators};
//# sourceMappingURL=preview.fa09a1fc.js.map
