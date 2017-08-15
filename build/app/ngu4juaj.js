/*! Built with http://stenciljs.com */
App.loadComponents("ngu4juaj",function(n,t,r,e,o){var i=function(){function n(){}return n.prototype.componentWillLoad=function(){var n=this;fetch("/docs-content/"+this.doc).then(function(n){return n.text()}).then(function(t){return n.content=t})},n.prototype.render=function(){return t("div",{p:{innerHTML:this.content}})},n}(),u=function(){function n(){}return n.prototype.render=function(){return[t("app-marked",{a:{doc:"basics/components.html"}})]},n}(),c=function(){function n(){}return n.prototype.render=function(){return[t("app-marked",{a:{doc:"basics/code-splitting.html"}})]},n}(),d=function(){function n(){}return n.prototype.render=function(){return[t("app-marked",{a:{doc:"compiler/config.html"}})]},n}(),p=function(){function n(){}return n.prototype.render=function(){return[t("app-marked",{a:{doc:"start/index.html"}})]},n}(),l=function(){function n(){}return n.prototype.render=function(){return t("div",0,t("ul",0,t("li",0,t("h4",0,r("Introduction")),t("ul",0,t("li",0,t("stencil-route-link",{a:{url:"/docs/intro",router:"#router"}},r("What is stencil"))),t("li",0,t("stencil-route-link",{a:{url:"/docs/getting-started",router:"#router"}},r("Getting Started"))))),t("li",0,t("h4",0,r("Basics")),t("ul",0,t("li",0,t("stencil-route-link",{a:{url:"/components",router:"#router"}},r("Components"))),t("li",0,t("stencil-route-link",{a:{url:"/code-splitting",router:"#router"}},r("Code Splitting"))))),t("li",0,t("h4",0,r("Advanced")),t("ul",0,t("li",0,t("stencil-route-link",{a:{url:"/server-side-rendering",router:"#router"}},r("Server Side Rendering")))))))},n}(),a=function(){function n(){}return n.prototype.render=function(){return[t("app-marked",{a:{doc:"advanced/ssr/index.html"}})]},n}(),s=function(){function n(){}return n.prototype.render=function(){return[t("app-marked",{a:{doc:"intro/index.html"}}),t("app-marked",{a:{doc:"intro/why.html"}})]},n}();n["APP-MARKED"]=i,n["BASICS-COMPONENTS"]=u,n["CODE-SPLITTING"]=c,n["COMPILER-CONFIG"]=d,n["GETTING-STARTED"]=p,n["SITE-MENU"]=l,n["STENCIL-SSR"]=a,n["WHAT-IS"]=s},["APP-MARKED",[["content",5],["doc",1]],{}],["BASICS-COMPONENTS",0,{}],["CODE-SPLITTING",0,{}],["COMPILER-CONFIG",0,{}],["GETTING-STARTED",0,{}],["SITE-MENU",0,{}],["STENCIL-SSR",0,{}],["WHAT-IS",0,{}]);