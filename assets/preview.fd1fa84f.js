var I=Object.defineProperty;var i=(n,r)=>I(n,"name",{value:r,configurable:!0});import{w as E,l as p,d as A,h as R}from"./iframe.3b0a9b9b.js";var D=E.window,$=i(function(r,e){return r.length===e.length&&r.every(function(a,o){return a===e[o]})},"areDepsEqual"),H=i(function(){return new Error("Storybook preview hooks can only be called inside decorators and story functions.")},"invalidHooksError");function G(){return D.STORYBOOK_HOOKS_CONTEXT||null}i(G,"getHooksContextOrNull");function x(){var n=G();if(n==null)throw H();return n}i(x,"getHooksContextOrThrow");function K(n,r,e){var a=x();if(a.currentPhase==="MOUNT"){e!=null&&!Array.isArray(e)&&p.warn("".concat(n," received a final argument that is not an array (instead, received ").concat(e,"). When specified, the final argument must be an array."));var o={name:n,deps:e};return a.currentHooks.push(o),r(o),o}if(a.currentPhase==="UPDATE"){var t=a.getNextHook();if(t==null)throw new Error("Rendered more hooks than during the previous render.");return t.name!==n&&p.warn("Storybook has detected a change in the order of Hooks".concat(a.currentDecoratorName?" called by ".concat(a.currentDecoratorName):"",". This will lead to bugs and errors if not fixed.")),e!=null&&t.deps==null&&p.warn("".concat(n," received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.")),e!=null&&t.deps!=null&&e.length!==t.deps.length&&p.warn("The final argument passed to ".concat(n,` changed size between renders. The order and size of this array must remain constant.
Previous: `).concat(t.deps,`
Incoming: `).concat(e)),(e==null||t.deps==null||!$(e,t.deps))&&(r(t),t.deps=e),t}throw H()}i(K,"useHook");function C(n,r,e){var a=K(n,function(t){t.memoizedState=r()},e),o=a.memoizedState;return o}i(C,"useMemoLike");function k(n,r){return C("useMemo",n,r)}i(k,"useMemo");function N(n,r){var e=x(),a=C("useEffect",function(){return{create:n}},r);e.currentEffects.includes(a)||e.currentEffects.push(a)}i(N,"useEffect");var S="backgrounds",O;function U(n,r){return r||(r=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(r)}}))}i(U,"_taggedTemplateLiteral$1");var f=E.document,Y=E.window,_=i(function(){var r=Y.matchMedia("(prefers-reduced-motion: reduce)");return r.matches},"isReduceMotionEnabled"),F=i(function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],a=arguments.length>2?arguments[2]:void 0;if(r==="transparent")return"transparent";if(e.find(function(c){return c.value===r}))return r;var o=e.find(function(c){return c.name===a});if(o)return o.value;if(a){var t=e.map(function(c){return c.name}).join(", ");p.warn(A(O||(O=U([`
        Backgrounds Addon: could not find the default color "`,`".
        These are the available colors for your story based on your configuration:
        `,`.
      `])),a,t))}return"transparent"},"getBackgroundColorByName"),j=i(function(r){var e=Array.isArray(r)?r:[r];e.forEach(W)},"clearStyles"),W=i(function(r){var e=f.getElementById(r);e&&e.parentElement.removeChild(e)},"clearStyle"),X=i(function(r,e){var a=f.getElementById(r);if(a)a.innerHTML!==e&&(a.innerHTML=e);else{var o=f.createElement("style");o.setAttribute("id",r),o.innerHTML=e,f.head.appendChild(o)}},"addGridStyle"),q=i(function(r,e,a){var o=f.getElementById(r);if(o)o.innerHTML!==e&&(o.innerHTML=e);else{var t=f.createElement("style");t.setAttribute("id",r),t.innerHTML=e;var c="addon-backgrounds-grid".concat(a?"-docs-".concat(a):""),l=f.getElementById(c);l?l.parentElement.insertBefore(t,l):f.head.appendChild(t)}},"addBackgroundStyle"),J=i(function(r,e){var a,o=e.globals,t=e.parameters,c=(a=o[S])===null||a===void 0?void 0:a.value,l=t[S],d=k(function(){return l.disable?"transparent":F(c,l.values,l.default)},[l,c]),s=k(function(){return d&&d!=="transparent"},[d]),m=e.viewMode==="docs"?"#anchor--".concat(e.id," .docs-story"):".sb-show-main",g=k(function(){var v="transition: background-color 0.3s;";return`
      `.concat(m,` {
        background: `).concat(d,` !important;
        `).concat(_()?"":v,`
      }
    `)},[d,m]);return N(function(){var v=e.viewMode==="docs"?"addon-backgrounds-docs-".concat(e.id):"addon-backgrounds-color";if(!s){j(v);return}q(v,g,e.viewMode==="docs"?e.id:null)},[s,g,e]),r()},"withBackground"),T;function Q(n,r){return r||(r=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(r)}}))}i(Q,"_taggedTemplateLiteral");var Z=R(function(){},A(T||(T=Q([`
    Backgrounds Addon: The cell size parameter has been changed.

    - parameters.grid.cellSize should now be parameters.backgrounds.grid.cellSize
    See https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-grid-parameter
  `])))),V=i(function(r,e){var a,o,t,c,l=e.globals,d=e.parameters,s=d[S].grid,m=((a=l[S])===null||a===void 0?void 0:a.grid)===!0&&s.disable!==!0,g=s.cellAmount,v=s.cellSize,b=s.opacity,M=e.viewMode==="docs",u;(o=d.grid)!==null&&o!==void 0&&o.cellSize?(u=d.grid.cellSize,Z()):u=v;var P=d.layout===void 0||d.layout==="padded",z=P?16:0,h=(t=s.offsetX)!==null&&t!==void 0?t:M?20:z,y=(c=s.offsetY)!==null&&c!==void 0?c:M?20:z,B=k(function(){var w=e.viewMode==="docs"?"#anchor--".concat(e.id," .docs-story"):".sb-show-main",L=["".concat(u*g,"px ").concat(u*g,"px"),"".concat(u*g,"px ").concat(u*g,"px"),"".concat(u,"px ").concat(u,"px"),"".concat(u,"px ").concat(u,"px")].join(", ");return`
      `.concat(w,` {
        background-size: `).concat(L,` !important;
        background-position: `).concat(h,"px ").concat(y,"px, ").concat(h,"px ").concat(y,"px, ").concat(h,"px ").concat(y,"px, ").concat(h,"px ").concat(y,`px !important;
        background-blend-mode: difference !important;
        background-image: linear-gradient(rgba(130, 130, 130, `).concat(b,`) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, `).concat(b,`) 1px, transparent 1px),
         linear-gradient(rgba(130, 130, 130, `).concat(b/2,`) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, `).concat(b/2,`) 1px, transparent 1px) !important;
      }
    `)},[u]);return N(function(){var w=e.viewMode==="docs"?"addon-backgrounds-grid-docs-".concat(e.id):"addon-backgrounds-grid";if(!m){j(w);return}X(w,B)},[m,B,e]),r()},"withGrid"),ne=[V,J],ae={backgrounds:{grid:{cellSize:20,opacity:.5,cellAmount:5},values:[{name:"light",value:"#F8F8F8"},{name:"dark",value:"#333333"}]}};export{ne as decorators,ae as parameters};
//# sourceMappingURL=preview.fd1fa84f.js.map
