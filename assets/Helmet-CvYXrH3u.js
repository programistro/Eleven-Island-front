import{m as V,n as T,o as U,r as C}from"./index-DMbPzMn2.js";function B(){return B=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)({}).hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},B.apply(null,arguments)}function K(t,e){if(t==null)return{};var i={};for(var n in t)if({}.hasOwnProperty.call(t,n)){if(e.includes(n))continue;i[n]=t[n]}return i}function X(t,e){return X=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,n){return i.__proto__=n,i},X(t,e)}function ee(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,X(t,e)}var fe={exports:{}},Se="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ae=Se,Oe=Ae;function pe(){}function de(){}de.resetWarningCache=pe;var xe=function(){function t(n,r,o,s,a,u){if(u!==Oe){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var i={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:de,resetWarningCache:pe};return i.PropTypes=i,i};fe.exports=xe();var Pe=fe.exports;const h=V(Pe);function Ne(t,e){return t.classList?!!e&&t.classList.contains(e):(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")!==-1}function we(t,e){t.classList?t.classList.add(e):Ne(t,e)||(typeof t.className=="string"?t.className=t.className+" "+e:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+e))}function re(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function Re(t,e){t.classList?t.classList.remove(e):typeof t.className=="string"?t.className=re(t.className,e):t.setAttribute("class",re(t.className&&t.className.baseVal||"",e))}const ie={disabled:!1},q=T.createContext(null);var ve=function(e){return e.scrollTop},F="unmounted",P="exited",N="entering",L="entered",z="exiting",x=function(t){ee(e,t);function e(n,r){var o;o=t.call(this,n,r)||this;var s=r,a=s&&!s.isMounting?n.enter:n.appear,u;return o.appearStatus=null,n.in?a?(u=P,o.appearStatus=N):u=L:n.unmountOnExit||n.mountOnEnter?u=F:u=P,o.state={status:u},o.nextCallback=null,o}e.getDerivedStateFromProps=function(r,o){var s=r.in;return s&&o.status===F?{status:P}:null};var i=e.prototype;return i.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},i.componentDidUpdate=function(r){var o=null;if(r!==this.props){var s=this.state.status;this.props.in?s!==N&&s!==L&&(o=N):(s===N||s===L)&&(o=z)}this.updateStatus(!1,o)},i.componentWillUnmount=function(){this.cancelNextCallback()},i.getTimeouts=function(){var r=this.props.timeout,o,s,a;return o=s=a=r,r!=null&&typeof r!="number"&&(o=r.exit,s=r.enter,a=r.appear!==void 0?r.appear:s),{exit:o,enter:s,appear:a}},i.updateStatus=function(r,o){if(r===void 0&&(r=!1),o!==null)if(this.cancelNextCallback(),o===N){if(this.props.unmountOnExit||this.props.mountOnEnter){var s=this.props.nodeRef?this.props.nodeRef.current:U.findDOMNode(this);s&&ve(s)}this.performEnter(r)}else this.performExit();else this.props.unmountOnExit&&this.state.status===P&&this.setState({status:F})},i.performEnter=function(r){var o=this,s=this.props.enter,a=this.context?this.context.isMounting:r,u=this.props.nodeRef?[a]:[U.findDOMNode(this),a],c=u[0],l=u[1],f=this.getTimeouts(),d=a?f.appear:f.enter;if(!r&&!s||ie.disabled){this.safeSetState({status:L},function(){o.props.onEntered(c)});return}this.props.onEnter(c,l),this.safeSetState({status:N},function(){o.props.onEntering(c,l),o.onTransitionEnd(d,function(){o.safeSetState({status:L},function(){o.props.onEntered(c,l)})})})},i.performExit=function(){var r=this,o=this.props.exit,s=this.getTimeouts(),a=this.props.nodeRef?void 0:U.findDOMNode(this);if(!o||ie.disabled){this.safeSetState({status:P},function(){r.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:z},function(){r.props.onExiting(a),r.onTransitionEnd(s.exit,function(){r.safeSetState({status:P},function(){r.props.onExited(a)})})})},i.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},i.safeSetState=function(r,o){o=this.setNextCallback(o),this.setState(r,o)},i.setNextCallback=function(r){var o=this,s=!0;return this.nextCallback=function(a){s&&(s=!1,o.nextCallback=null,r(a))},this.nextCallback.cancel=function(){s=!1},this.nextCallback},i.onTransitionEnd=function(r,o){this.setNextCallback(o);var s=this.props.nodeRef?this.props.nodeRef.current:U.findDOMNode(this),a=r==null&&!this.props.addEndListener;if(!s||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var u=this.props.nodeRef?[this.nextCallback]:[s,this.nextCallback],c=u[0],l=u[1];this.props.addEndListener(c,l)}r!=null&&setTimeout(this.nextCallback,r)},i.render=function(){var r=this.state.status;if(r===F)return null;var o=this.props,s=o.children;o.in,o.mountOnEnter,o.unmountOnExit,o.appear,o.enter,o.exit,o.timeout,o.addEndListener,o.onEnter,o.onEntering,o.onEntered,o.onExit,o.onExiting,o.onExited,o.nodeRef;var a=K(o,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return T.createElement(q.Provider,{value:null},typeof s=="function"?s(r,a):T.cloneElement(T.Children.only(s),a))},e}(T.Component);x.contextType=q;x.propTypes={};function _(){}x.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:_,onEntering:_,onEntered:_,onExit:_,onExiting:_,onExited:_};x.UNMOUNTED=F;x.EXITED=P;x.ENTERING=N;x.ENTERED=L;x.EXITING=z;var _e=function(e,i){return e&&i&&i.split(" ").forEach(function(n){return we(e,n)})},Y=function(e,i){return e&&i&&i.split(" ").forEach(function(n){return Re(e,n)})},he=function(t){ee(e,t);function e(){for(var n,r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return n=t.call.apply(t,[this].concat(o))||this,n.appliedClasses={appear:{},enter:{},exit:{}},n.onEnter=function(a,u){var c=n.resolveArguments(a,u),l=c[0],f=c[1];n.removeClasses(l,"exit"),n.addClass(l,f?"appear":"enter","base"),n.props.onEnter&&n.props.onEnter(a,u)},n.onEntering=function(a,u){var c=n.resolveArguments(a,u),l=c[0],f=c[1],d=f?"appear":"enter";n.addClass(l,d,"active"),n.props.onEntering&&n.props.onEntering(a,u)},n.onEntered=function(a,u){var c=n.resolveArguments(a,u),l=c[0],f=c[1],d=f?"appear":"enter";n.removeClasses(l,d),n.addClass(l,d,"done"),n.props.onEntered&&n.props.onEntered(a,u)},n.onExit=function(a){var u=n.resolveArguments(a),c=u[0];n.removeClasses(c,"appear"),n.removeClasses(c,"enter"),n.addClass(c,"exit","base"),n.props.onExit&&n.props.onExit(a)},n.onExiting=function(a){var u=n.resolveArguments(a),c=u[0];n.addClass(c,"exit","active"),n.props.onExiting&&n.props.onExiting(a)},n.onExited=function(a){var u=n.resolveArguments(a),c=u[0];n.removeClasses(c,"exit"),n.addClass(c,"exit","done"),n.props.onExited&&n.props.onExited(a)},n.resolveArguments=function(a,u){return n.props.nodeRef?[n.props.nodeRef.current,a]:[a,u]},n.getClassNames=function(a){var u=n.props.classNames,c=typeof u=="string",l=c&&u?u+"-":"",f=c?""+l+a:u[a],d=c?f+"-active":u[a+"Active"],v=c?f+"-done":u[a+"Done"];return{baseClassName:f,activeClassName:d,doneClassName:v}},n}var i=e.prototype;return i.addClass=function(r,o,s){var a=this.getClassNames(o)[s+"ClassName"],u=this.getClassNames("enter"),c=u.doneClassName;o==="appear"&&s==="done"&&c&&(a+=" "+c),s==="active"&&r&&ve(r),a&&(this.appliedClasses[o][s]=a,_e(r,a))},i.removeClasses=function(r,o){var s=this.appliedClasses[o],a=s.base,u=s.active,c=s.done;this.appliedClasses[o]={},a&&Y(r,a),u&&Y(r,u),c&&Y(r,c)},i.render=function(){var r=this.props;r.classNames;var o=K(r,["classNames"]);return T.createElement(x,B({},o,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},e}(T.Component);he.defaultProps={classNames:""};he.propTypes={};function Ie(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function te(t,e){var i=function(o){return e&&C.isValidElement(o)?e(o):o},n=Object.create(null);return t&&C.Children.map(t,function(r){return r}).forEach(function(r){n[r.key]=i(r)}),n}function Le(t,e){t=t||{},e=e||{};function i(l){return l in e?e[l]:t[l]}var n=Object.create(null),r=[];for(var o in t)o in e?r.length&&(n[o]=r,r=[]):r.push(o);var s,a={};for(var u in e){if(n[u])for(s=0;s<n[u].length;s++){var c=n[u][s];a[n[u][s]]=i(c)}a[u]=i(u)}for(s=0;s<r.length;s++)a[r[s]]=i(r[s]);return a}function w(t,e,i){return i[e]!=null?i[e]:t.props[e]}function Me(t,e){return te(t.children,function(i){return C.cloneElement(i,{onExited:e.bind(null,i),in:!0,appear:w(i,"appear",t),enter:w(i,"enter",t),exit:w(i,"exit",t)})})}function je(t,e,i){var n=te(t.children),r=Le(e,n);return Object.keys(r).forEach(function(o){var s=r[o];if(C.isValidElement(s)){var a=o in e,u=o in n,c=e[o],l=C.isValidElement(c)&&!c.props.in;u&&(!a||l)?r[o]=C.cloneElement(s,{onExited:i.bind(null,s),in:!0,exit:w(s,"exit",t),enter:w(s,"enter",t)}):!u&&a&&!l?r[o]=C.cloneElement(s,{in:!1}):u&&a&&C.isValidElement(c)&&(r[o]=C.cloneElement(s,{onExited:i.bind(null,s),in:c.props.in,exit:w(s,"exit",t),enter:w(s,"enter",t)}))}}),r}var De=Object.values||function(t){return Object.keys(t).map(function(e){return t[e]})},He={component:"div",childFactory:function(e){return e}},me=function(t){ee(e,t);function e(n,r){var o;o=t.call(this,n,r)||this;var s=o.handleExited.bind(Ie(o));return o.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},o}var i=e.prototype;return i.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},i.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(r,o){var s=o.children,a=o.handleExited,u=o.firstRender;return{children:u?Me(r,a):je(r,s,a),firstRender:!1}},i.handleExited=function(r,o){var s=te(this.props.children);r.key in s||(r.props.onExited&&r.props.onExited(o),this.mounted&&this.setState(function(a){var u=B({},a.children);return delete u[r.key],{children:u}}))},i.render=function(){var r=this.props,o=r.component,s=r.childFactory,a=K(r,["component","childFactory"]),u=this.state.contextValue,c=De(this.state.children).map(s);return delete a.appear,delete a.enter,delete a.exit,o===null?T.createElement(q.Provider,{value:u},c):T.createElement(q.Provider,{value:u},T.createElement(o,a,c))},e}(T.Component);me.propTypes={};me.defaultProps=He;function Fe(t){return t&&typeof t=="object"&&"default"in t?t.default:t}var Te=C,ke=Fe(Te);function oe(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function Ue(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var $e=!!(typeof window<"u"&&window.document&&window.document.createElement);function Be(t,e,i){if(typeof t!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof e!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof i<"u"&&typeof i!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function n(r){return r.displayName||r.name||"Component"}return function(o){if(typeof o!="function")throw new Error("Expected WrappedComponent to be a React component.");var s=[],a;function u(){a=t(s.map(function(l){return l.props})),c.canUseDOM?e(a):i&&(a=i(a))}var c=function(l){Ue(f,l);function f(){return l.apply(this,arguments)||this}f.peek=function(){return a},f.rewind=function(){if(f.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var g=a;return a=void 0,s=[],g};var d=f.prototype;return d.UNSAFE_componentWillMount=function(){s.push(this),u()},d.componentDidUpdate=function(){u()},d.componentWillUnmount=function(){var g=s.indexOf(this);s.splice(g,1),u()},d.render=function(){return ke.createElement(o,this.props)},f}(Te.PureComponent);return oe(c,"displayName","SideEffect("+n(o)+")"),oe(c,"canUseDOM",$e),c}}var qe=Be;const Ge=V(qe);var Ve=typeof Element<"u",Ye=typeof Map=="function",We=typeof Set=="function",Xe=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function $(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var i,n,r;if(Array.isArray(t)){if(i=t.length,i!=e.length)return!1;for(n=i;n--!==0;)if(!$(t[n],e[n]))return!1;return!0}var o;if(Ye&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(o=t.entries();!(n=o.next()).done;)if(!e.has(n.value[0]))return!1;for(o=t.entries();!(n=o.next()).done;)if(!$(n.value[1],e.get(n.value[0])))return!1;return!0}if(We&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(o=t.entries();!(n=o.next()).done;)if(!e.has(n.value[0]))return!1;return!0}if(Xe&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(i=t.length,i!=e.length)return!1;for(n=i;n--!==0;)if(t[n]!==e[n])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf&&typeof t.valueOf=="function"&&typeof e.valueOf=="function")return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString&&typeof t.toString=="function"&&typeof e.toString=="function")return t.toString()===e.toString();if(r=Object.keys(t),i=r.length,i!==Object.keys(e).length)return!1;for(n=i;n--!==0;)if(!Object.prototype.hasOwnProperty.call(e,r[n]))return!1;if(Ve&&t instanceof Element)return!1;for(n=i;n--!==0;)if(!((r[n]==="_owner"||r[n]==="__v"||r[n]==="__o")&&t.$$typeof)&&!$(t[r[n]],e[r[n]]))return!1;return!0}return t!==t&&e!==e}var ze=function(e,i){try{return $(e,i)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}};const Qe=V(ze);/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var ae=Object.getOwnPropertySymbols,Je=Object.prototype.hasOwnProperty,Ze=Object.prototype.propertyIsEnumerable;function Ke(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function et(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var e={},i=0;i<10;i++)e["_"+String.fromCharCode(i)]=i;var n=Object.getOwnPropertyNames(e).map(function(o){return e[o]});if(n.join("")!=="0123456789")return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(o){r[o]=o}),Object.keys(Object.assign({},r)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var tt=et()?Object.assign:function(t,e){for(var i,n=Ke(t),r,o=1;o<arguments.length;o++){i=Object(arguments[o]);for(var s in i)Je.call(i,s)&&(n[s]=i[s]);if(ae){r=ae(i);for(var a=0;a<r.length;a++)Ze.call(i,r[a])&&(n[r[a]]=i[r[a]])}}return n};const nt=V(tt);var R={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},p={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"};Object.keys(p).map(function(t){return p[t]});var m={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},G={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},k={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},rt=Object.keys(G).reduce(function(t,e){return t[G[e]]=e,t},{}),it=[p.NOSCRIPT,p.SCRIPT,p.STYLE],y="data-react-helmet",ot=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},at=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},st=function(){function t(e,i){for(var n=0;n<i.length;n++){var r=i[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),E=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},ut=function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},se=function(t,e){var i={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n]);return i},ct=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t},Q=function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return i===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},lt=function(e){var i=M(e,p.TITLE),n=M(e,k.TITLE_TEMPLATE);if(n&&i)return n.replace(/%s/g,function(){return Array.isArray(i)?i.join(""):i});var r=M(e,k.DEFAULT_TITLE);return i||r||void 0},ft=function(e){return M(e,k.ON_CHANGE_CLIENT_STATE)||function(){}},W=function(e,i){return i.filter(function(n){return typeof n[e]<"u"}).map(function(n){return n[e]}).reduce(function(n,r){return E({},n,r)},{})},pt=function(e,i){return i.filter(function(n){return typeof n[p.BASE]<"u"}).map(function(n){return n[p.BASE]}).reverse().reduce(function(n,r){if(!n.length)for(var o=Object.keys(r),s=0;s<o.length;s++){var a=o[s],u=a.toLowerCase();if(e.indexOf(u)!==-1&&r[u])return n.concat(r)}return n},[])},D=function(e,i,n){var r={};return n.filter(function(o){return Array.isArray(o[e])?!0:(typeof o[e]<"u"&&mt("Helmet: "+e+' should be of type "Array". Instead found type "'+ot(o[e])+'"'),!1)}).map(function(o){return o[e]}).reverse().reduce(function(o,s){var a={};s.filter(function(d){for(var v=void 0,g=Object.keys(d),b=0;b<g.length;b++){var S=g[b],A=S.toLowerCase();i.indexOf(A)!==-1&&!(v===m.REL&&d[v].toLowerCase()==="canonical")&&!(A===m.REL&&d[A].toLowerCase()==="stylesheet")&&(v=A),i.indexOf(S)!==-1&&(S===m.INNER_HTML||S===m.CSS_TEXT||S===m.ITEM_PROP)&&(v=S)}if(!v||!d[v])return!1;var j=d[v].toLowerCase();return r[v]||(r[v]={}),a[v]||(a[v]={}),r[v][j]?!1:(a[v][j]=!0,!0)}).reverse().forEach(function(d){return o.push(d)});for(var u=Object.keys(a),c=0;c<u.length;c++){var l=u[c],f=nt({},r[l],a[l]);r[l]=f}return o},[]).reverse()},M=function(e,i){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(i))return r[i]}return null},dt=function(e){return{baseTag:pt([m.HREF,m.TARGET],e),bodyAttributes:W(R.BODY,e),defer:M(e,k.DEFER),encode:M(e,k.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:W(R.HTML,e),linkTags:D(p.LINK,[m.REL,m.HREF],e),metaTags:D(p.META,[m.NAME,m.CHARSET,m.HTTPEQUIV,m.PROPERTY,m.ITEM_PROP],e),noscriptTags:D(p.NOSCRIPT,[m.INNER_HTML],e),onChangeClientState:ft(e),scriptTags:D(p.SCRIPT,[m.SRC,m.INNER_HTML],e),styleTags:D(p.STYLE,[m.CSS_TEXT],e),title:lt(e),titleAttributes:W(R.TITLE,e)}},J=function(){var t=Date.now();return function(e){var i=Date.now();i-t>16?(t=i,e(i)):setTimeout(function(){J(e)},0)}}(),ue=function(e){return clearTimeout(e)},vt=typeof window<"u"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||J:global.requestAnimationFrame||J,ht=typeof window<"u"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ue:global.cancelAnimationFrame||ue,mt=function(e){return console&&typeof console.warn=="function"&&console.warn(e)},H=null,Tt=function(e){H&&ht(H),e.defer?H=vt(function(){ce(e,function(){H=null})}):(ce(e),H=null)},ce=function(e,i){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,s=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,f=e.styleTags,d=e.title,v=e.titleAttributes;Z(p.BODY,r),Z(p.HTML,o),Et(d,v);var g={baseTag:I(p.BASE,n),linkTags:I(p.LINK,s),metaTags:I(p.META,a),noscriptTags:I(p.NOSCRIPT,u),scriptTags:I(p.SCRIPT,l),styleTags:I(p.STYLE,f)},b={},S={};Object.keys(g).forEach(function(A){var j=g[A],ne=j.newTags,be=j.oldTags;ne.length&&(b[A]=ne),be.length&&(S[A]=g[A].oldTags)}),i&&i(),c(e,b,S)},Ee=function(e){return Array.isArray(e)?e.join(""):e},Et=function(e,i){typeof e<"u"&&document.title!==e&&(document.title=Ee(e)),Z(p.TITLE,i)},Z=function(e,i){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(y),o=r?r.split(","):[],s=[].concat(o),a=Object.keys(i),u=0;u<a.length;u++){var c=a[u],l=i[c]||"";n.getAttribute(c)!==l&&n.setAttribute(c,l),o.indexOf(c)===-1&&o.push(c);var f=s.indexOf(c);f!==-1&&s.splice(f,1)}for(var d=s.length-1;d>=0;d--)n.removeAttribute(s[d]);o.length===s.length?n.removeAttribute(y):n.getAttribute(y)!==a.join(",")&&n.setAttribute(y,a.join(","))}},I=function(e,i){var n=document.head||document.querySelector(p.HEAD),r=n.querySelectorAll(e+"["+y+"]"),o=Array.prototype.slice.call(r),s=[],a=void 0;return i&&i.length&&i.forEach(function(u){var c=document.createElement(e);for(var l in u)if(u.hasOwnProperty(l))if(l===m.INNER_HTML)c.innerHTML=u.innerHTML;else if(l===m.CSS_TEXT)c.styleSheet?c.styleSheet.cssText=u.cssText:c.appendChild(document.createTextNode(u.cssText));else{var f=typeof u[l]>"u"?"":u[l];c.setAttribute(l,f)}c.setAttribute(y,"true"),o.some(function(d,v){return a=v,c.isEqualNode(d)})?o.splice(a,1):s.push(c)}),o.forEach(function(u){return u.parentNode.removeChild(u)}),s.forEach(function(u){return n.appendChild(u)}),{oldTags:o,newTags:s}},ge=function(e){return Object.keys(e).reduce(function(i,n){var r=typeof e[n]<"u"?n+'="'+e[n]+'"':""+n;return i?i+" "+r:r},"")},gt=function(e,i,n,r){var o=ge(n),s=Ee(i);return o?"<"+e+" "+y+'="true" '+o+">"+Q(s,r)+"</"+e+">":"<"+e+" "+y+'="true">'+Q(s,r)+"</"+e+">"},yt=function(e,i,n){return i.reduce(function(r,o){var s=Object.keys(o).filter(function(c){return!(c===m.INNER_HTML||c===m.CSS_TEXT)}).reduce(function(c,l){var f=typeof o[l]>"u"?l:l+'="'+Q(o[l],n)+'"';return c?c+" "+f:f},""),a=o.innerHTML||o.cssText||"",u=it.indexOf(e)===-1;return r+"<"+e+" "+y+'="true" '+s+(u?"/>":">"+a+"</"+e+">")},"")},ye=function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(n,r){return n[G[r]||r]=e[r],n},i)},Ct=function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(n,r){return n[rt[r]||r]=e[r],n},i)},bt=function(e,i,n){var r,o=(r={key:i},r[y]=!0,r),s=ye(n,o);return[T.createElement(p.TITLE,s,i)]},St=function(e,i){return i.map(function(n,r){var o,s=(o={key:r},o[y]=!0,o);return Object.keys(n).forEach(function(a){var u=G[a]||a;if(u===m.INNER_HTML||u===m.CSS_TEXT){var c=n.innerHTML||n.cssText;s.dangerouslySetInnerHTML={__html:c}}else s[u]=n[a]}),T.createElement(e,s)})},O=function(e,i,n){switch(e){case p.TITLE:return{toComponent:function(){return bt(e,i.title,i.titleAttributes)},toString:function(){return gt(e,i.title,i.titleAttributes,n)}};case R.BODY:case R.HTML:return{toComponent:function(){return ye(i)},toString:function(){return ge(i)}};default:return{toComponent:function(){return St(e,i)},toString:function(){return yt(e,i,n)}}}},Ce=function(e){var i=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,s=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.scriptTags,l=e.styleTags,f=e.title,d=f===void 0?"":f,v=e.titleAttributes;return{base:O(p.BASE,i,r),bodyAttributes:O(R.BODY,n,r),htmlAttributes:O(R.HTML,o,r),link:O(p.LINK,s,r),meta:O(p.META,a,r),noscript:O(p.NOSCRIPT,u,r),script:O(p.SCRIPT,c,r),style:O(p.STYLE,l,r),title:O(p.TITLE,{title:d,titleAttributes:v},r)}},At=function(e){var i,n;return n=i=function(r){ut(o,r);function o(){return at(this,o),ct(this,r.apply(this,arguments))}return o.prototype.shouldComponentUpdate=function(a){return!Qe(this.props,a)},o.prototype.mapNestedChildrenToProps=function(a,u){if(!u)return null;switch(a.type){case p.SCRIPT:case p.NOSCRIPT:return{innerHTML:u};case p.STYLE:return{cssText:u}}throw new Error("<"+a.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},o.prototype.flattenArrayTypeChildren=function(a){var u,c=a.child,l=a.arrayTypeChildren,f=a.newChildProps,d=a.nestedChildren;return E({},l,(u={},u[c.type]=[].concat(l[c.type]||[],[E({},f,this.mapNestedChildrenToProps(c,d))]),u))},o.prototype.mapObjectTypeChildren=function(a){var u,c,l=a.child,f=a.newProps,d=a.newChildProps,v=a.nestedChildren;switch(l.type){case p.TITLE:return E({},f,(u={},u[l.type]=v,u.titleAttributes=E({},d),u));case p.BODY:return E({},f,{bodyAttributes:E({},d)});case p.HTML:return E({},f,{htmlAttributes:E({},d)})}return E({},f,(c={},c[l.type]=E({},d),c))},o.prototype.mapArrayTypeChildrenToProps=function(a,u){var c=E({},u);return Object.keys(a).forEach(function(l){var f;c=E({},c,(f={},f[l]=a[l],f))}),c},o.prototype.warnOnInvalidChildren=function(a,u){return!0},o.prototype.mapChildrenToProps=function(a,u){var c=this,l={};return T.Children.forEach(a,function(f){if(!(!f||!f.props)){var d=f.props,v=d.children,g=se(d,["children"]),b=Ct(g);switch(c.warnOnInvalidChildren(f,v),f.type){case p.LINK:case p.META:case p.NOSCRIPT:case p.SCRIPT:case p.STYLE:l=c.flattenArrayTypeChildren({child:f,arrayTypeChildren:l,newChildProps:b,nestedChildren:v});break;default:u=c.mapObjectTypeChildren({child:f,newProps:u,newChildProps:b,nestedChildren:v});break}}}),u=this.mapArrayTypeChildrenToProps(l,u),u},o.prototype.render=function(){var a=this.props,u=a.children,c=se(a,["children"]),l=E({},c);return u&&(l=this.mapChildrenToProps(u,l)),T.createElement(e,l)},st(o,null,[{key:"canUseDOM",set:function(a){e.canUseDOM=a}}]),o}(T.Component),i.propTypes={base:h.object,bodyAttributes:h.object,children:h.oneOfType([h.arrayOf(h.node),h.node]),defaultTitle:h.string,defer:h.bool,encodeSpecialCharacters:h.bool,htmlAttributes:h.object,link:h.arrayOf(h.object),meta:h.arrayOf(h.object),noscript:h.arrayOf(h.object),onChangeClientState:h.func,script:h.arrayOf(h.object),style:h.arrayOf(h.object),title:h.string,titleAttributes:h.object,titleTemplate:h.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=e.peek,i.rewind=function(){var r=e.rewind();return r||(r=Ce({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),r},n},Ot=function(){return null},xt=Ge(dt,Tt,Ce)(Ot),le=At(xt);le.renderStatic=le.rewind;export{he as C,le as H,me as T};
