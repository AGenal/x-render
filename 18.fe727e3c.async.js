(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"6cGi":function(H,R,r){"use strict";r.d(R,"a",function(){return m});var E=r("ODXe"),e=r("q1tI"),y=r.n(e);function m(s,g){var h=g||{},O=h.defaultValue,o=h.value,z=h.onChange,b=h.postState,U=e.useState(function(){return o!==void 0?o:O!==void 0?typeof O=="function"?O():O:typeof s=="function"?s():s}),A=Object(E.a)(U,2),K=A[0],W=A[1],v=o!==void 0?o:K;b&&(v=b(v));var C=e.useRef(z);C.current=z;var S=e.useCallback(function(j){W(j),v!==j&&C.current&&C.current(j,v)},[v,C]),D=e.useRef(!0);return e.useEffect(function(){if(D.current){D.current=!1;return}o===void 0&&W(o)},[o]),[v,S]}},bT9E:function(H,R,r){"use strict";r.d(R,"a",function(){return e});var E=r("VTBJ");function e(y,m){var s=Object(E.a)({},y);return Array.isArray(m)&&m.forEach(function(g){delete s[g]}),s}},t23M:function(H,R,r){"use strict";r.r(R);var E=r("wx14"),e=r("q1tI"),y=r("Zm9Q"),m=r("Kwbf"),s=r("VTBJ"),g=r("c+Xe"),h=r("m+aA"),O=r("bdgK"),o=new Map;function z(t){t.forEach(function(i){var n,a=i.target;(n=o.get(a))===null||n===void 0||n.forEach(function(f){return f(a)})})}var b=new O.a(z),U=null,A=null;function K(t,i){o.has(t)||(o.set(t,new Set),b.observe(t)),o.get(t).add(i)}function W(t,i){o.has(t)&&(o.get(t).delete(i),o.get(t).size||(b.unobserve(t),o.delete(t)))}var v=r("1OyB"),C=r("vuIU"),S=r("Ji7U"),D=r("LK+K"),j=function(t){Object(S.a)(n,t);var i=Object(D.a)(n);function n(){return Object(v.a)(this,n),i.apply(this,arguments)}return Object(C.a)(n,[{key:"render",value:function(){return this.props.children}}]),n}(e.Component),T=e.createContext(null);function w(t){var i=t.children,n=t.onBatchResize,a=e.useRef(0),f=e.useRef([]),u=e.useContext(T),I=e.useCallback(function(l,d,M){a.current+=1;var P=a.current;f.current.push({size:l,element:d,data:M}),Promise.resolve().then(function(){P===a.current&&(n==null||n(f.current),f.current=[])}),u==null||u(l,d,M)},[n,u]);return e.createElement(T.Provider,{value:I},i)}function k(t){var i=t.children,n=t.disabled,a=e.useRef(null),f=e.useRef(null),u=e.useContext(T),I=typeof i=="function",l=I?i(a):i,d=e.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),M=!I&&e.isValidElement(l)&&Object(g.c)(l),P=M?l.ref:null,_=e.useMemo(function(){return Object(g.a)(P,a)},[P,a]),$=e.useRef(t);$.current=t;var N=e.useCallback(function(c){var V=$.current,X=V.onResize,ee=V.data,F=c.getBoundingClientRect(),L=F.width,x=F.height,p=c.offsetWidth,B=c.offsetHeight,G=Math.floor(L),Q=Math.floor(x);if(d.current.width!==G||d.current.height!==Q||d.current.offsetWidth!==p||d.current.offsetHeight!==B){var Y={width:G,height:Q,offsetWidth:p,offsetHeight:B};d.current=Y;var te=p===Math.round(L)?L:p,re=B===Math.round(x)?x:B,Z=Object(s.a)(Object(s.a)({},Y),{},{offsetWidth:te,offsetHeight:re});u==null||u(Z,c,ee),X&&Promise.resolve().then(function(){X(Z,c)})}},[]);return e.useEffect(function(){var c=Object(h.a)(a.current)||Object(h.a)(f.current);return c&&!n&&K(c,N),function(){return W(c,N)}},[a.current,n]),e.createElement(j,{ref:f},M?e.cloneElement(l,{ref:_}):l)}var q="rc-observer-key";function J(t){var i=t.children,n=typeof i=="function"?[i]:Object(y.a)(i);return n.map(function(a,f){var u=(a==null?void 0:a.key)||"".concat(q,"-").concat(f);return e.createElement(k,Object(E.a)({},t,{key:u}),a)})}J.Collection=w;var ne=R.default=J}}]);
