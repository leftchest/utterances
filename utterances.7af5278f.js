parcelRequire=function(e){var r="function"==typeof parcelRequire&&parcelRequire,n="function"==typeof require&&require,i={};function u(e,u){if(e in i)return i[e];var t="function"==typeof parcelRequire&&parcelRequire;if(!u&&t)return t(e,!0);if(r)return r(e,!0);if(n&&"string"==typeof e)return n(e);var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return u.register=function(e,r){i[e]=r},i=e(u),u.modules=i,u}(function (require) {var v={};function pa(){var e=R(location.search.substr(1)),r=null,i=null;if("issue-term"in e){if(void 0!==(r=e["issue-term"])){if(""===r)throw new Error("When issue-term is specified, it cannot be blank.");if(-1!==["title","url","pathname","og:title"].indexOf(r)){if(!e[r])throw new Error("Unable to find \""+r+"\" metadata.");r=e[r]}}}else{if(!("issue-number"in e))throw new Error("\"issue-term\" or \"issue-number\" must be specified.");if((i=+e["issue-number"]).toString(10)!==e["issue-number"])throw new Error("issue-number is invalid. \""+e["issue-number"])}if(!("repo"in e))throw new Error("\"repo\" is required.");if(!("origin"in e))throw new Error("\"origin\" is required.");var t=qa.exec(e.repo);if(null===t)throw new Error("Invalid repo: \""+e.repo+"\"");return{owner:t[1],repo:t[2],issueTerm:r,issueNumber:i,origin:e.origin,url:e.url,title:e.title,description:e.description,label:e.label,theme:e.theme||"github-light",session:e.session}}var J={};function R(e){for(var r,o=/\+/g,n=/([^&=]+)=?([^&]*)/g,p=function(e){return decodeURIComponent(e.replace(o," "))},a={};r=n.exec(e);)a[p(r[1])]=p(r[2]);return a}function S(e){var r=[];for(var o in e)e.hasOwnProperty(o)&&e[o]&&r.push(encodeURIComponent(o)+"="+encodeURIComponent(e[o]));return r.join("&")}J.deparam=R,J.param=S;var qa=/^([\w-_]+)\/([\w-_.]+)$/i;var b=pa();var g={};var A={};var K="https://api-utterances.hncaa.cn";var ra=A&&A.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(o,a){function $(e){try{u(n.next(e))}catch(t){a(t)}}function i(e){try{u(n.throw(e))}catch(t){a(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r(function(e){e(t)})).then($,i)}u((n=n.apply(e,t||[])).next())})},sa=A&&A.__generator||function(e,t){var r,n,o,a,$={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;$;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return $.label++,{value:a[1],done:!1};case 5:$.label++,n=a[1],a=[0];continue;case 7:a=$.ops.pop(),$.trys.pop();continue;default:if(!(o=(o=$.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){$=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){$.label=a[1];break}if(6===a[0]&&$.label<o[1]){$.label=o[1],o=a;break}if(o&&$.label<o[2]){$.label=o[2],$.ops.push(a);break}o[2]&&$.ops.pop(),$.trys.pop();continue;}a=t.call(e,$)}catch(i){a=[6,i],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}},w={value:null};function L(e){return K+"/authorize?"+S({redirect_uri:e})}function T(){return ra(this,void 0,Promise,function(){var e,t,r;return sa(this,function(n){switch(n.label){case 0:return w.value?[2,w.value]:b.session?(e=K+"/token",[4,fetch(e,{method:"POST",mode:"cors",credentials:"include",headers:{"content-type":"application/json"},body:JSON.stringify(b.session)})]):[2,null];case 1:return(t=n.sent()).ok?[4,t.json()]:[3,3];case 2:return r=n.sent(),w.value=r,[2,r];case 3:return[2,null];}})})}A.token=w,A.getLoginUrl=L,A.loadToken=T;function ta(e){return e=e.replace(/\s/g,""),decodeURIComponent(escape(atob(e)))}var ua=g&&g.__awaiter||function(n,e,r,t){return new(r||(r=Promise))(function($,o){function a(n){try{i(t.next(n))}catch(e){o(e)}}function s(n){try{i(t.throw(n))}catch(e){o(e)}}function i(n){var e;n.done?$(n.value):(e=n.value,e instanceof r?e:new r(function(n){n(e)})).then(a,s)}i((t=t.apply(n,e||[])).next())})},va=g&&g.__generator||function(n,e){var r,t,$,o,a={label:0,sent:function(){if(1&$[0])throw $[1];return $[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,t&&($=2&o[0]?t.return:o[0]?t.throw||(($=t.return)&&$.call(t),0):t.next)&&!($=$.call(t,o[1])).done)return $;switch(t=0,$&&(o=[2&o[0],$.value]),o[0]){case 0:case 1:$=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,t=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!($=($=a.trys).length>0&&$[$.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!$||o[1]>$[0]&&o[1]<$[3])){a.label=o[1];break}if(6===o[0]&&a.label<$[1]){a.label=$[1],$=o;break}if($&&a.label<$[2]){a.label=$[2],a.ops.push(o);break}$[2]&&a.ops.pop(),a.trys.pop();continue;}o=e.call(n,a)}catch(s){o=[6,s],t=0}finally{r=$=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},U="https://api.github.com/",V="application/vnd.github.VERSION.html+json",wa="application/vnd.github.VERSION.html",C="application/vnd.github.squirrel-girl-preview",D=25;g.PAGE_SIZE=D;var y,z,E=["+1","-1","laugh","hooray","confused","heart","rocket","eyes"];g.reactionTypes=E;var W="master";function X(n){y=n.owner,z=n.repo}function x(n,e){(e=e||{}).mode="cors",e.cache="no-cache";var r=new Request(U+n,e);return r.headers.set("Accept",C),null!==w.value&&r.headers.set("Authorization","token "+w.value),r}g.setRepoContext=X;var Y={standard:{limit:Number.MAX_VALUE,remaining:Number.MAX_VALUE,reset:0},search:{limit:Number.MAX_VALUE,remaining:Number.MAX_VALUE,reset:0}};function xa(n){var e=n.headers.get("X-RateLimit-Limit"),r=n.headers.get("X-RateLimit-Remaining"),t=n.headers.get("X-RateLimit-Reset"),$=/\/search\//.test(n.url),o=$?Y.search:Y.standard;if(o.limit=+e,o.remaining=+r,o.reset=+t,403===n.status&&0===o.remaining){var a=new Date(0);a.setUTCSeconds(o.reset);var s=Math.round((a.getTime()-new Date().getTime())/1e3/60),i=$?"search API":"non-search APIs";console.warn("Rate limit exceeded for "+i+". Resets in "+s+" minute"+(1===s?"":"s")+".")}}function ya(n){var e=n.headers.get("link");if(null===e)return 0;var r=/\?page=([2-9][0-9]*)>; rel="next"/.exec(e);return null===r?0:+r[1]}function k(n){return fetch(n).then(function(e){return 401===e.status&&(w.value=null),403===e.status&&e.json().then(function(n){"Resource not accessible by integration"===n.message&&window.dispatchEvent(new CustomEvent("not-installed"))}),xa(e),"GET"===n.method&&-1!==[401,403].indexOf(e.status)&&n.headers.has("Authorization")?(n.headers.delete("Authorization"),k(n)):e})}function Z(n,e){void 0===e&&(e=!1);var r=x("repos/"+y+"/"+z+"/contents/"+n+"?ref="+W);return e&&r.headers.set("accept",wa),k(r).then(function(r){if(404===r.status)throw new Error("Repo \""+y+"/"+z+"\" does not have a file named \""+n+"\" in the \""+W+"\" branch.");if(!r.ok)throw new Error("Error fetching "+n+".");return e?r.text():r.json()}).then(function(n){if(e)return n;var r=n.content,t=ta(r);return JSON.parse(t)})}function _(n){var e="\""+n+"\" type:issue in:title repo:"+y+"/"+z;return k(x("search/issues?q="+encodeURIComponent(e)+"&sort=created&order=asc")).then(function(n){if(!n.ok)throw new Error("Error fetching issue via search.");return n.json()}).then(function(r){if(0===r.total_count)return null;r.total_count>1&&console.warn("Multiple issues match \""+e+"\"."),n=n.toLowerCase();for(var t=0,$=r.items;t<$.length;t++){var o=$[t];if(-1!==o.title.toLowerCase().indexOf(n))return o}return console.warn("Issue search results do not contain an issue with title matching \""+n+"\". Using first result."),r.items[0]})}function aa(n){return k(x("repos/"+y+"/"+z+"/issues/"+n)).then(function(n){if(!n.ok)throw new Error("Error fetching issue via issue number.");return n.json()})}function za(n,e){var r=x("repos/"+y+"/"+z+"/issues/"+n+"/comments?page="+e+"&per_page="+D),t=V+","+C;return r.headers.set("Accept",t),r}function F(n,e){return k(za(n,e)).then(function(n){if(!n.ok)throw new Error("Error fetching comments.");return n.json()})}function ba(){return null===w.value?Promise.resolve(null):k(x("user")).then(function(n){return n.ok?n.json():null})}function ca(n,e,r,t,$){var o=K+"/repos/"+y+"/"+z+"/issues"+($?"?label="+encodeURIComponent($):""),a=new Request(o,{method:"POST",body:JSON.stringify({title:n,body:"# "+r+"\n\n"+t+"\n\n["+e+"]("+e+")"})});return a.headers.set("Accept",C),a.headers.set("Authorization","token "+w.value),fetch(a).then(function(n){if(!n.ok)throw new Error("Error creating comments container issue");return n.json()})}function da(n,e){var r=x("repos/"+y+"/"+z+"/issues/"+n+"/comments",{method:"POST",body:JSON.stringify({body:e})}),t=V+","+C;return r.headers.set("Accept",t),k(r).then(function(n){if(!n.ok)throw new Error("Error posting comment.");return n.json()})}function ea(n,e){return ua(this,void 0,void 0,function(){var r,t,$,o,a,s;return va(this,function(i){switch(i.label){case 0:return n=n.replace(U,""),r=JSON.stringify({content:e}),(t=x(n,{method:"POST",body:r})).headers.set("Accept",C),[4,k(t)];case 1:return($=i.sent()).ok?[4,$.json()]:[3,3];case 2:return a=i.sent(),[3,4];case 3:a=null,i.label=4;case 4:if(o=a,201===$.status)return[2,{reaction:o,deleted:!1}];if(200!==$.status)throw new Error("expected \"201 reaction created\" or \"200 reaction already exists\"");return(s=x("reactions/"+o.id,{method:"DELETE"})).headers.set("Accept",C),[4,k(s)];case 5:return i.sent(),[2,{reaction:o,deleted:!0}];}})})}function fa(n){return k(x("markdown",{method:"POST",body:JSON.stringify({text:n,mode:"gfm",context:y+"/"+z})})).then(function(n){return n.text()})}g.readRelNext=ya,g.loadJsonFile=Z,g.loadIssueByTerm=_,g.loadIssueByNumber=aa,g.loadCommentsPage=F,g.loadUser=ba,g.createIssue=ca,g.postComment=da,g.toggleReaction=ea,g.renderMarkdown=fa;var G=[1e3,"second",6e4,"minute",36e5,"hour",864e5,"day",6048e5,"week",23328e5,"month"],Aa={month:"short",day:"numeric",year:"numeric"};function Ba(r,e){var $=r-e.getTime();if($<5e3)return"just now";for(var o=0;o+2<G.length&&1.1*$>G[o+2];)o+=2;var t=G[o],a=G[o+1],h=Math.round($/t);return h>3&&o===G.length-2?"on "+e.toLocaleDateString(void 0,Aa):1===h?("hour"===a?"an":"a")+" "+a+" ago":h+" "+a+"s ago"}var Ca;function Da(e){Ca=e,addEventListener("resize",j),addEventListener("load",j)}var Ea=-1;function Fa(){var e=document.body.scrollHeight;if(e!==Ea){Ea=e;var $={type:"resize",height:e};parent.postMessage($,Ca)}}var Ga=0;function j(){var e=Date.now();e-Ga>50&&(Ga=e,setTimeout(Fa,50))}var q={};var Ha=q&&q.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(a,o){function i(e){try{c(n.next(e))}catch(t){o(t)}}function s(e){try{c(n.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r(function(e){e(t)})).then(i,s)}c((n=n.apply(e,t||[])).next())})},Ia=q&&q.__generator||function(e,t){var r,n,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue;}o=t.call(e,i)}catch(s){o=[6,s],n=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},M={"+1":"Thumbs Up","-1":"Thumbs Down",laugh:"Laugh",hooray:"Hooray",confused:"Confused",heart:"Heart",rocket:"Rocket",eyes:"Eyes"};q.reactionNames=M;var ga={"+1":"\uD83D\uDC4D","-1":"\uD83D\uDC4E",laugh:"\uFE0F\uD83D\uDE02",hooray:"\uFE0F\uD83C\uDF89",confused:"\uD83D\uDE15",heart:"\u2764\uFE0F",rocket:"\uD83D\uDE80",eyes:"\uD83D\uDC40"};function N(e,t,r,n){return"\n  <button\n    reaction\n    type=\"submit\"\n    action=\"javascript:\"\n    formaction=\""+e+"\"\n    class=\"btn BtnGroup-item reaction-button\"\n    value=\""+t+"\"\n    aria-label=\"Toggle "+M[t]+" reaction\"\n    reaction-count=\""+n+"\"\n    "+(r?"disabled":"")+">\n    "+ga[t]+"\n  </button>"}function ha(e){var t=this;addEventListener("click",function(r){return Ha(t,void 0,void 0,function(){var t,n,a,o,i,s,c,f,l,$,u;return Ia(this,function(p){switch(p.label){case 0:return(t=r.target instanceof HTMLElement&&r.target.closest("button"))&&t.hasAttribute("reaction")?(r.preventDefault(),e?(t.disabled=!0,(n=t.closest("details"))&&(n.open=!1),a=t.formAction,o=t.value,[4,ea(a,o)]):[2]):[2];case 1:for(i=p.sent().deleted,s="button[reaction][formaction=\""+a+"\"][value=\""+o+"\"],[reaction-count][reaction-url=\""+a+"\"]",c=Array.from(document.querySelectorAll(s)),f=i?-1:1,l=0,$=c;l<$.length;l++)(u=$[l]).setAttribute("reaction-count",(parseInt(u.getAttribute("reaction-count"),10)+f).toString());return t.disabled=!1,j(),[2];}})})},!0)}function O(e,t){var r=function(t){return N(e,t,!1,0)+"<span class=\"reaction-name\" aria-hidden=\"true\">"+M[t]+"</span>"};return"\n  <details class=\"details-overlay details-popover reactions-popover\">\n    <summary "+("center"===t?"tabindex=\"-1\"":"")+">"+ia+"</summary>\n    <div class=\"Popover\" style=\""+("center"===t?"left: 50%;transform: translateX(-50%)":"right:6px")+"\">\n      <form class=\"Popover-message "+("center"===t?"":"Popover-message--top-right")+" box-shadow-large\" action=\"javascript:\">\n        <span class=\"reaction-name\">Pick your reaction</span>\n        <div class=\"BtnGroup\">\n          "+E.slice(0,4).map(r).join("")+"\n        </div>\n        <div class=\"BtnGroup\">\n          "+E.slice(4).map(r).join("")+"\n        </div>\n      </form>\n    </div>\n  </details>"}function P(e){return"\n  <details class=\"details-overlay details-popover reactions-popover\">\n    <summary aria-label=\"Reactions Menu\">"+ia+"</summary>\n    <div class=\"Popover\" style=\""+("center"===e?"left: 50%;transform: translateX(-50%)":"right:6px")+"\">\n      <div class=\"Popover-message "+("center"===e?"":"Popover-message--top-right")+" box-shadow-large\" style=\"padding: 16px\">\n        <span><a href=\""+L(b.url)+"\" target=\"_top\">Sign in</a> to add your reaction.</span>\n      </div>\n    </div>\n  </details>"}q.reactionEmoji=ga,q.getReactionHtml=N,q.enableReactions=ha,q.getReactionsMenuHtml=O,q.getSignInToReactMenuHtml=P;var ia="<svg class=\"octicon\" style=\"margin-right:3px\" viewBox=\"0 0 7 16\" version=\"1.1\" width=\"7\" height=\"16\" aria-hidden=\"true\"><path fill-rule=\"evenodd\" d=\"M4 4H3v3H0v1h3v3h1V8h3V7H4V4z\"></path></svg><svg class=\"octicon\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"16\" height=\"16\" aria-hidden=\"true\"><path fill-rule=\"evenodd\" d=\"M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4.81 12.81a6.72 6.72 0 0 1-2.17 1.45c-.83.36-1.72.53-2.64.53-.92 0-1.81-.17-2.64-.53-.81-.34-1.55-.83-2.17-1.45a6.773 6.773 0 0 1-1.45-2.17A6.59 6.59 0 0 1 1.21 8c0-.92.17-1.81.53-2.64.34-.81.83-1.55 1.45-2.17.62-.62 1.36-1.11 2.17-1.45A6.59 6.59 0 0 1 8 1.21c.92 0 1.81.17 2.64.53.81.34 1.55.83 2.17 1.45.62.62 1.11 1.36 1.45 2.17.36.83.53 1.72.53 2.64 0 .92-.17 1.81-.53 2.64-.34.81-.83 1.55-1.45 2.17zM4 6.8v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2H5.2C4.53 8 4 7.47 4 6.8zm5 0v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2h-.59C9.53 8 9 7.47 9 6.8zm4 3.2c-.72 1.88-2.91 3-5 3s-4.28-1.13-5-3c-.14-.39.23-1 .66-1h8.59c.41 0 .89.61.75 1z\"></path></svg>";var Ja="?v=3&s=88",Ka={COLLABORATOR:"Collaborator",CONTRIBUTOR:"Contributor",MEMBER:"Member",OWNER:"Owner",FIRST_TIME_CONTRIBUTOR:"First time contributor",FIRST_TIMER:"First timer",NONE:""},La=function(){function e(e,r,t){this.comment=e,this.currentUser=r;var n=e.user,o=e.html_url,a=e.created_at,i=e.body_html,s=e.author_association,c=e.reactions;this.element=document.createElement("article"),this.element.classList.add("timeline-comment"),n.login===r&&this.element.classList.add("current-user");var l=Ka[s],m=E.reduce(function(e,r){return e+c[r]},0),$="",u="";t||(r?($=O(e.reactions.url,"right"),u=O(e.reactions.url,"center")):($=P("right"),u=P("center"))),this.element.innerHTML="\n      <a class=\"avatar\" href=\""+n.html_url+"\" target=\"_blank\" tabindex=\"-1\">\n        <img alt=\"@"+n.login+"\" height=\"44\" width=\"44\"\n              src=\""+n.avatar_url+Ja+"\">\n      </a>\n      <div class=\"comment\">\n        <header class=\"comment-header\">\n          <span class=\"comment-meta\">\n            <a class=\"text-link\" href=\""+n.html_url+"\" target=\"_blank\"><strong>"+n.login+"</strong></a>\n            commented\n            <a class=\"text-link\" href=\""+o+"\" target=\"_blank\">"+Ba(Date.now(),new Date(a))+"</a>\n          </span>\n          <div class=\"comment-actions\">\n            "+(l?"<span class=\"author-association-badge\">"+l+"</span>":"")+"\n            "+$+"\n          </div>\n        </header>\n        <div class=\"markdown-body markdown-body-scrollable\">\n          "+i+"\n        </div>\n        <div class=\"comment-footer\" reaction-count=\""+m+"\" reaction-url=\""+c.url+"\">\n          <form class=\"reaction-list BtnGroup\" action=\"javascript:\">\n            "+E.map(function(e){return N(c.url,e,!r||t,c[e])}).join("")+"\n          </form>\n          "+u+"\n        </div>\n      </div>";var d=this.element.querySelector(".markdown-body"),p=d.querySelector(".email-hidden-toggle a");if(p){var h=d.querySelector(".email-hidden-reply");p.onclick=function(e){e.preventDefault(),h.classList.toggle("expanded")}}ja(d)}return e.prototype.setCurrentUser=function(e){this.currentUser!==e&&(this.currentUser=e,this.comment.user.login===this.currentUser?this.element.classList.add("current-user"):this.element.classList.remove("current-user"))},e}();function ja(e){Array.from(e.querySelectorAll(":not(.email-hidden-toggle) > a")).forEach(function(e){e.target="_top",e.rel="noopener noreferrer"}),Array.from(e.querySelectorAll("img")).forEach(function(e){return e.onload=j}),Array.from(e.querySelectorAll("a.commit-tease-sha")).forEach(function(e){return e.href="https://github.com"+e.pathname})}var Ma=function(){function e(e,t){this.user=e,this.issue=t,this.timeline=[],this.count=0,this.element=document.createElement("main"),this.element.classList.add("timeline"),this.element.innerHTML="\n      <h1 class=\"timeline-header\">\n        <a class=\"text-link\" target=\"_blank\"></a>\n        <small>\n          \uD83D\uDDE8\uFE0F &nbsp; &nbsp; &nbsp; And also\n          <a class=\"text-link\" href=\"mailto:leftchest@foxmail.com\" target=\"_blank\">\u2709</a>\n        </em>\n      </h1>",this.countAnchor=this.element.firstElementChild.firstElementChild,this.marker=document.createComment("marker"),this.element.appendChild(this.marker),this.setIssue(this.issue),this.renderCount()}return e.prototype.setUser=function(e){this.user=e;for(var t=e?e.login:null,n=0;n<this.timeline.length;n++)this.timeline[n].setCurrentUser(t);j()},e.prototype.setIssue=function(e){this.issue=e,e?(this.count=e.comments,this.countAnchor.href=e.html_url,this.renderCount()):this.countAnchor.removeAttribute("href")},e.prototype.insertComment=function(e,t){var n=new La(e,this.user?this.user.login:null,this.issue.locked),i=this.timeline.findIndex(function(t){return t.comment.id>=e.id});if(-1===i)this.timeline.push(n),this.element.insertBefore(n.element,this.marker);else{var s=this.timeline[i],r=s.comment.id===e.id;this.element.insertBefore(n.element,s.element),this.timeline.splice(i,r?1:0,n),r&&s.element.remove()}t&&(this.count++,this.renderCount()),j()},e.prototype.insertPageLoader=function(e,t,n){var i=this.timeline.find(function(t){return t.comment.id>=e.id}).element;i.insertAdjacentHTML("afterend","\n      <div class=\"page-loader\">\n        <div class=\"zigzag\"></div>\n        <button type=\"button\" class=\"btn btn-outline btn-large\">\n          "+t+" hidden items<br/>\n          <span>Load more...</span>\n        </button>\n      </div>\n    ");var s=i.nextElementSibling,r=s.lastElementChild,o=r.lastElementChild;return r.onclick=n,{setBusy:function(){o.textContent="Loading...",r.disabled=!0},remove:function(){r.onclick=null,s.remove()}}},e.prototype.renderCount=function(){this.countAnchor.textContent=this.count+" Comment"+(1===this.count?"":"s")},e}();var B={};var ka;function la(){return ka||(ka=Z("utterances.json").then(function(r){return Array.isArray(r.origins)||(r.origins=[]),r},function(){return{origins:[b.origin]}})),ka}var ma=B&&B.__assign||function(){return(ma=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)},Na=B&&B.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(a,i){function s(t){try{l(r.next(t))}catch(e){i(e)}}function o(t){try{l(r.throw(t))}catch(e){i(e)}}function l(t){var e;t.done?a(t.value):(e=t.value,e instanceof n?e:new n(function(t){t(e)})).then(s,o)}l((r=r.apply(t,e||[])).next())})},Oa=B&&B.__generator||function(t,e){var n,r,a,i,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(i){return function(o){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(a=2&i[0]?r.return:i[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(a=(a=s.trys).length>0&&a[a.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){s.label=i[1];break}if(6===i[0]&&s.label<a[1]){s.label=a[1],a=i;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(i);break}a[2]&&s.ops.pop(),s.trys.pop();continue;}i=e.call(t,s)}catch(o){i=[6,o],r=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,o])}}},Pa="<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 14 16\" version=\"1.1\"><path fill=\"rgb(179,179,179)\" fill-rule=\"evenodd\" d=\"M8 10.5L9 14H5l1-3.5L5.25 9h3.5L8 10.5zM10 6H4L2 7h10l-2-1zM9 2L7 3 5 2 4 5h6L9 2zm4.03 7.75L10 9l1 2-2 3h3.22c.45 0 .86-.31.97-.75l.56-2.28c.14-.53-.19-1.08-.72-1.22zM4 9l-3.03.75c-.53.14-.86.69-.72 1.22l.56 2.28c.11.44.52.75.97.75H5l-2-3 1-2z\"></path></svg>",Qa="data:image/svg+xml;base64,"+btoa(Pa),Q="Nothing to preview",na=function(){function t(t,e){var n=this;this.user=t,this.submit=e,this.submitting=!1,this.renderTimeout=0,this.handleInput=function(){la();var t=n.textarea.value,e=/^\s*$/.test(t);n.submitButton.disabled=e,n.textarea.scrollHeight<450&&n.textarea.offsetHeight<n.textarea.scrollHeight&&(n.textarea.style.height=n.textarea.scrollHeight+"px",j()),clearTimeout(n.renderTimeout),e?n.preview.textContent=Q:(n.preview.textContent="Loading preview...",n.renderTimeout=setTimeout(function(){return fa(t).then(function(t){return n.preview.innerHTML=t}).then(function(){return ja(n.preview)}).then(j)},500))},this.handleSubmit=function(t){return Na(n,void 0,void 0,function(){return Oa(this,function(e){switch(e.label){case 0:return t.preventDefault(),this.submitting?[2]:(this.submitting=!0,this.textarea.disabled=!0,this.submitButton.disabled=!0,[4,this.submit(this.textarea.value).catch(function(){return 0})]);case 1:return e.sent(),this.submitting=!1,this.textarea.disabled=!this.user,this.textarea.value="",this.submitButton.disabled=!1,this.handleClick(ma(ma({},t),{target:this.form.querySelector(".tabnav-tab.tab-write")})),this.preview.textContent=Q,[2];}})})},this.handleClick=function(t){var e=t.target;if(e instanceof HTMLButtonElement&&e.classList.contains("tabnav-tab")&&"true"!==e.getAttribute("aria-selected")){n.form.querySelector(".tabnav-tab[aria-selected=\"true\"]").setAttribute("aria-selected","false"),e.setAttribute("aria-selected","true");var r=e.classList.contains("tab-preview");n.textarea.style.display=r?"none":"",n.preview.style.display=r?"":"none",j()}},this.handleKeyDown=function(t){var e=t.which,r=t.ctrlKey;13===e&&r&&!n.submitButton.disabled&&n.form.dispatchEvent(new CustomEvent("submit"))},this.element=document.createElement("article"),this.element.classList.add("timeline-comment"),this.element.innerHTML="\n      <a class=\"avatar\" target=\"_blank\" tabindex=\"-1\">\n        <img height=\"44\" width=\"44\">\n      </a>\n      <form class=\"comment\" accept-charset=\"UTF-8\" action=\"javascript:\">\n        <header class=\"new-comment-header tabnav\">\n          <div class=\"tabnav-tabs\" role=\"tablist\">\n            <button type=\"button\" class=\"tabnav-tab tab-write\"\n                    role=\"tab\" aria-selected=\"true\">\n              Write\n            </button>\n            <button type=\"button\" class=\"tabnav-tab tab-preview\"\n                    role=\"tab\">\n              Preview\n            </button>\n          </div>\n        </header>\n        <div class=\"comment-body\">\n          <textarea class=\"form-control\" placeholder=\"Leave a comment\" aria-label=\"comment\"></textarea>\n          <div class=\"markdown-body\" style=\"display: none\">\n            "+Q+"\n          </div>\n        </div>\n        <footer class=\"new-comment-footer\">\n          <a class=\"text-link markdown-info\" tabindex=\"-1\" target=\"_blank\"\n             href=\"https://guides.github.com/features/mastering-markdown/\">\n            <svg class=\"octicon v-align-bottom\" viewBox=\"0 0 16 16\" version=\"1.1\"\n              width=\"16\" height=\"16\" aria-hidden=\"true\">\n              <path fill-rule=\"evenodd\" d=\"M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15\n                13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4\n                8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z\">\n              </path>\n            </svg>\n            Styling with Markdown is supported\n          </a>\n          <button class=\"btn btn-primary\" type=\"submit\">Comment</button>\n          <a class=\"btn btn-primary\" href=\""+L(b.url)+"\" target=\"_top\">\n            <svg class=\"octicon\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" width=\"16\" height=\"16\"><path fill-rule=\"evenodd\" d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z\"></path></svg>\n            Sign in with GitHub\n          </a>\n        </footer>\n      </form>",this.avatarAnchor=this.element.firstElementChild,this.avatar=this.avatarAnchor.firstElementChild,this.form=this.avatarAnchor.nextElementSibling,this.textarea=this.form.firstElementChild.nextElementSibling.firstElementChild,this.preview=this.form.firstElementChild.nextElementSibling.lastElementChild,this.signInAnchor=this.form.lastElementChild.lastElementChild,this.submitButton=this.signInAnchor.previousElementSibling,this.setUser(t),this.submitButton.disabled=!0,this.textarea.addEventListener("input",this.handleInput),this.form.addEventListener("submit",this.handleSubmit),this.form.addEventListener("click",this.handleClick),this.form.addEventListener("keydown",this.handleKeyDown),Ra(this.textarea)}return t.prototype.setUser=function(t){this.user=t,this.submitButton.hidden=!t,this.signInAnchor.hidden=!!t,t?(this.avatarAnchor.href=t.html_url,this.avatar.alt="@"+t.login,this.avatar.src=t.avatar_url+"?v=3&s=88",this.textarea.disabled=!1,this.textarea.placeholder="Leave a comment"):(this.avatarAnchor.removeAttribute("href"),this.avatar.alt="@anonymous",this.avatar.src=Qa,this.textarea.disabled=!0,this.textarea.placeholder="Sign in to comment")},t.prototype.clear=function(){this.textarea.value=""},t}();function Ra(t){var e=function t(){removeEventListener("mousemove",j),removeEventListener("mouseup",t)};t.addEventListener("mousedown",function(){addEventListener("mousemove",j),addEventListener("mouseup",e)})}B.NewCommentComponent=na;function Sa(e,t){return new Promise(function(s){var n=document.createElement("link");n.rel="stylesheet",n.setAttribute("crossorigin","anonymous"),n.onload=s,n.href="/stylesheets/themes/"+e+"/utterances.css",document.head.appendChild(n),addEventListener("message",function(e){e.origin===t&&"set-theme"===e.data.type&&(n.href="/stylesheets/themes/"+e.data.theme+"/utterances.css")})})}var H=v&&v.__awaiter||function(e,r,t,n){return new(t||(t=Promise))(function(o,s){function i(e){try{a(n.next(e))}catch(r){s(r)}}function u(e){try{a(n.throw(e))}catch(r){s(r)}}function a(e){var r;e.done?o(e.value):(r=e.value,r instanceof t?r:new t(function(e){e(r)})).then(i,u)}a((n=n.apply(e,r||[])).next())})},I=v&&v.__generator||function(e,r){var t,n,o,s,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function u(s){return function(u){return function(s){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,n&&(o=2&s[0]?n.return:s[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,s[1])).done)return o;switch(n=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,n=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===s[0]||2===s[0])){i=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s);break}o[2]&&i.ops.pop(),i.trys.pop();continue;}s=r.call(e,i)}catch(u){s=[6,u],n=0}finally{t=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}};function Ta(){return null!==b.issueNumber?aa(b.issueNumber):_(b.issueTerm)}function Ua(){return H(this,void 0,void 0,function(){var e,r,t,n,o,s,i=this;return I(this,function(u){switch(u.label){case 0:return[4,T()];case 1:return u.sent(),[4,Promise.all([Ta(),ba(),Sa(b.theme,b.origin)])];case 2:return e=u.sent(),r=e[0],t=e[1],Da(b.origin),n=new Ma(t,r),document.body.appendChild(n.element),r&&r.comments>0&&Va(r,n),j(),r&&r.locked?[2]:(ha(!!t),o=function(e){return H(i,void 0,void 0,function(){var t;return I(this,function(o){switch(o.label){case 0:return[4,oa()];case 1:return o.sent(),r?[3,3]:[4,ca(b.issueTerm,b.url,b.title,b.description||"",b.label)];case 2:r=o.sent(),n.setIssue(r),o.label=3;case 3:return[4,da(r.number,e)];case 4:return t=o.sent(),n.insertComment(t,!0),s.clear(),[2];}})})},s=new na(t,o),n.element.insertBefore(s.element,n.element.firstElementChild),[2]);}})})}function Va(e,r){return H(this,void 0,void 0,function(){var t,n,o,s,i,u,a,$,f,c,p=this;return I(this,function(l){switch(l.label){case 0:return t=function(e){for(var t=0,n=e;t<n.length;t++){var o=n[t];r.insertComment(o,!1)}},n=Math.ceil(e.comments/D),o=[F(e.number,1)],n>1&&o.push(F(e.number,n)),n>2&&e.comments%D<3&&o.push(F(e.number,n-1)),[4,Promise.all(o)];case 1:for(s=l.sent(),i=0,u=s;i<u.length;i++)a=u[i],t(a);return $=n-o.length,f=2,(c=function(n){if(0!==$)var o=n.pop(),s=r.insertPageLoader(o,$*D,function(){return H(p,void 0,void 0,function(){var r;return I(this,function(n){switch(n.label){case 0:return s.setBusy(),[4,F(e.number,f)];case 1:return r=n.sent(),s.remove(),t(r),$--,f++,c(r),[2];}})})})})(s[0]),[2];}})})}function oa(){return H(this,void 0,void 0,function(){var e,r,t,n;return I(this,function(o){switch(o.label){case 0:return[4,la()];case 1:if(e=o.sent().origins,r=b.origin,t=b.owner,n=b.repo,-1!==e.indexOf(r))return[2];throw document.querySelector(".timeline").lastElementChild.insertAdjacentHTML("beforebegin","\n  <div class=\"flash flash-error flash-not-installed\">\n    Error: <code>"+r+"</code> is not permitted to post to <code>"+t+"/"+n+"</code>.\n    Confirm this is the correct repo for this site's comments. If you own this repo,\n    <a href=\"https://github.com/"+t+"/"+n+"/edit/master/utterances.json\" target=\"_top\">\n      <strong>update the utterances.json</strong>\n    </a>\n    to include <code>"+r+"</code> in the list of origins.<br/><br/>\n    Suggested configuration:<br/>\n    <pre><code>"+JSON.stringify({origins:[r]},null,2)+"</code></pre>\n  </div>"),j(),new Error("Origin not permitted.");}})})}X(b),Ua(),addEventListener("not-installed",function e(){removeEventListener("not-installed",e),document.querySelector(".timeline").insertAdjacentHTML("afterbegin","\n  <div class=\"flash flash-error\">\n    Error: utterances is not installed on <code>"+b.owner+"/"+b.repo+"</code>.\n    If you own this repo,\n    <a href=\"https://github.com/apps/utterances\" target=\"_top\"><strong>install the app</strong></a>.\n    Read more about this change in\n    <a href=\"https://github.com/utterance/utterances/pull/25\" target=\"_top\">the PR</a>.\n  </div>"),j()}),v.assertOrigin=oa;if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=v}else if(typeof define==="function"&&define.amd){define(function(){return v})}J.__esModule=true;v.__esModule=true;return{"ieWq":J,"fHsu":v};});