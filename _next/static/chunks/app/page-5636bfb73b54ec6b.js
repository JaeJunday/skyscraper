(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8793:function(e,t,n){Promise.resolve().then(n.bind(n,7132))},7132:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var o=n(7090),a=n(3882),i=n(7486);let r={type:"change"},s={type:"start"},c={type:"end"},l=new i.zHn,u=new i.JOQ,m=Math.cos(70*i.M8C.DEG2RAD);class p extends i.pBf{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new i.Pa4,this.cursor=new i.Pa4,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:i.RsA.ROTATE,MIDDLE:i.RsA.DOLLY,RIGHT:i.RsA.PAN},this.touches={ONE:i.QmN.ROTATE,TWO:i.QmN.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return d.phi},this.getAzimuthalAngle=function(){return d.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(e){e.addEventListener("keydown",J),this._domElementKeyEvents=e},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",J),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(r),n.update(),a=o.NONE},this.update=function(){let t=new i.Pa4,s=new i._fP().setFromUnitVectors(e.up,new i.Pa4(0,1,0)),c=s.clone().invert(),g=new i.Pa4,E=new i._fP,y=new i.Pa4,P=2*Math.PI;return function(w=null){let O=n.object.position;t.copy(O).sub(n.target),t.applyQuaternion(s),d.setFromVector3(t),n.autoRotate&&a===o.NONE&&_(null!==w?2*Math.PI/60*n.autoRotateSpeed*w:2*Math.PI/60/60*n.autoRotateSpeed),n.enableDamping?(d.theta+=h.theta*n.dampingFactor,d.phi+=h.phi*n.dampingFactor):(d.theta+=h.theta,d.phi+=h.phi);let j=n.minAzimuthAngle,v=n.maxAzimuthAngle;isFinite(j)&&isFinite(v)&&(j<-Math.PI?j+=P:j>Math.PI&&(j-=P),v<-Math.PI?v+=P:v>Math.PI&&(v-=P),j<=v?d.theta=Math.max(j,Math.min(v,d.theta)):d.theta=d.theta>(j+v)/2?Math.max(j,d.theta):Math.min(v,d.theta)),d.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,d.phi)),d.makeSafe(),!0===n.enableDamping?n.target.addScaledVector(f,n.dampingFactor):n.target.add(f),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&R||n.object.isOrthographicCamera?d.radius=F(d.radius):d.radius=F(d.radius*b),t.setFromSpherical(d),t.applyQuaternion(c),O.copy(n.target).add(t),n.object.lookAt(n.target),!0===n.enableDamping?(h.theta*=1-n.dampingFactor,h.phi*=1-n.dampingFactor,f.multiplyScalar(1-n.dampingFactor)):(h.set(0,0,0),f.set(0,0,0));let T=!1;if(n.zoomToCursor&&R){let o=null;if(n.object.isPerspectiveCamera){let e=t.length();o=F(e*b);let a=e-o;n.object.position.addScaledVector(A,a),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let e=new i.Pa4(N.x,N.y,0);e.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/b)),n.object.updateProjectionMatrix(),T=!0;let a=new i.Pa4(N.x,N.y,0);a.unproject(n.object),n.object.position.sub(a).add(e),n.object.updateMatrixWorld(),o=t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;null!==o&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(o).add(n.object.position):(l.origin.copy(n.object.position),l.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(l.direction))<m?e.lookAt(n.target):(u.setFromNormalAndCoplanarPoint(n.object.up,n.target),l.intersectPlane(u,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/b)),n.object.updateProjectionMatrix(),T=!0);return b=1,R=!1,!!(T||g.distanceToSquared(n.object.position)>p||8*(1-E.dot(n.object.quaternion))>p||y.distanceToSquared(n.target)>0)&&(n.dispatchEvent(r),g.copy(n.object.position),E.copy(n.object.quaternion),y.copy(n.target),!0)}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ee),n.domElement.removeEventListener("pointerdown",G),n.domElement.removeEventListener("pointercancel",q),n.domElement.removeEventListener("wheel",$),n.domElement.removeEventListener("pointermove",Q),n.domElement.removeEventListener("pointerup",q),null!==n._domElementKeyEvents&&(n._domElementKeyEvents.removeEventListener("keydown",J),n._domElementKeyEvents=null)};let n=this,o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},a=o.NONE,p=1e-6,d=new i.$V,h=new i.$V,b=1,f=new i.Pa4,g=new i.FM8,E=new i.FM8,y=new i.FM8,P=new i.FM8,w=new i.FM8,O=new i.FM8,j=new i.FM8,v=new i.FM8,T=new i.FM8,A=new i.Pa4,N=new i.FM8,R=!1,M=[],x={};function L(e){let t=Math.abs(e)/(100*(0|window.devicePixelRatio));return Math.pow(.95,n.zoomSpeed*t)}function _(e){h.theta-=e}function k(e){h.phi-=e}let S=function(){let e=new i.Pa4;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),f.add(e)}}(),C=function(){let e=new i.Pa4;return function(t,o){!0===n.screenSpacePanning?e.setFromMatrixColumn(o,1):(e.setFromMatrixColumn(o,0),e.crossVectors(n.object.up,e)),e.multiplyScalar(t),f.add(e)}}(),I=function(){let e=new i.Pa4;return function(t,o){let a=n.domElement;if(n.object.isPerspectiveCamera){let i=n.object.position;e.copy(i).sub(n.target);let r=e.length();S(2*t*(r*=Math.tan(n.object.fov/2*Math.PI/180))/a.clientHeight,n.object.matrix),C(2*o*r/a.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(S(t*(n.object.right-n.object.left)/n.object.zoom/a.clientWidth,n.object.matrix),C(o*(n.object.top-n.object.bottom)/n.object.zoom/a.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function z(e){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?b/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function D(e){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?b*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(e,t){if(!n.zoomToCursor)return;R=!0;let o=n.domElement.getBoundingClientRect(),a=e-o.left,i=t-o.top,r=o.width,s=o.height;N.x=a/r*2-1,N.y=-(i/s*2)+1,A.set(N.x,N.y,1).unproject(n.object).sub(n.object.position).normalize()}function F(e){return Math.max(n.minDistance,Math.min(n.maxDistance,e))}function H(e){g.set(e.clientX,e.clientY)}function K(e){P.set(e.clientX,e.clientY)}function X(e){if(1===M.length)g.set(e.pageX,e.pageY);else{let t=en(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);g.set(n,o)}}function Z(e){if(1===M.length)P.set(e.pageX,e.pageY);else{let t=en(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);P.set(n,o)}}function U(e){let t=en(e),n=e.pageX-t.x,o=e.pageY-t.y;j.set(0,Math.sqrt(n*n+o*o))}function V(e){if(1==M.length)E.set(e.pageX,e.pageY);else{let t=en(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);E.set(n,o)}y.subVectors(E,g).multiplyScalar(n.rotateSpeed);let t=n.domElement;_(2*Math.PI*y.x/t.clientHeight),k(2*Math.PI*y.y/t.clientHeight),g.copy(E)}function W(e){if(1===M.length)w.set(e.pageX,e.pageY);else{let t=en(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);w.set(n,o)}O.subVectors(w,P).multiplyScalar(n.panSpeed),I(O.x,O.y),P.copy(w)}function B(e){let t=en(e),o=e.pageX-t.x,a=e.pageY-t.y;v.set(0,Math.sqrt(o*o+a*a)),T.set(0,Math.pow(v.y/j.y,n.zoomSpeed)),z(T.y),j.copy(v),Y((e.pageX+t.x)*.5,(e.pageY+t.y)*.5)}function G(e){!1!==n.enabled&&(0===M.length&&(n.domElement.setPointerCapture(e.pointerId),n.domElement.addEventListener("pointermove",Q),n.domElement.addEventListener("pointerup",q)),M.push(e.pointerId),"touch"===e.pointerType?function(e){switch(et(e),M.length){case 1:switch(n.touches.ONE){case i.QmN.ROTATE:if(!1===n.enableRotate)return;X(e),a=o.TOUCH_ROTATE;break;case i.QmN.PAN:if(!1===n.enablePan)return;Z(e),a=o.TOUCH_PAN;break;default:a=o.NONE}break;case 2:switch(n.touches.TWO){case i.QmN.DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;n.enableZoom&&U(e),n.enablePan&&Z(e),a=o.TOUCH_DOLLY_PAN;break;case i.QmN.DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;n.enableZoom&&U(e),n.enableRotate&&X(e),a=o.TOUCH_DOLLY_ROTATE;break;default:a=o.NONE}break;default:a=o.NONE}a!==o.NONE&&n.dispatchEvent(s)}(e):function(e){let t;switch(e.button){case 0:t=n.mouseButtons.LEFT;break;case 1:t=n.mouseButtons.MIDDLE;break;case 2:t=n.mouseButtons.RIGHT;break;default:t=-1}switch(t){case i.RsA.DOLLY:if(!1===n.enableZoom)return;Y(e.clientX,e.clientX),j.set(e.clientX,e.clientY),a=o.DOLLY;break;case i.RsA.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enablePan)return;K(e),a=o.PAN}else{if(!1===n.enableRotate)return;H(e),a=o.ROTATE}break;case i.RsA.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enableRotate)return;H(e),a=o.ROTATE}else{if(!1===n.enablePan)return;K(e),a=o.PAN}break;default:a=o.NONE}a!==o.NONE&&n.dispatchEvent(s)}(e))}function Q(e){!1!==n.enabled&&("touch"===e.pointerType?function(e){switch(et(e),a){case o.TOUCH_ROTATE:if(!1===n.enableRotate)return;V(e),n.update();break;case o.TOUCH_PAN:if(!1===n.enablePan)return;W(e),n.update();break;case o.TOUCH_DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;n.enableZoom&&B(e),n.enablePan&&W(e),n.update();break;case o.TOUCH_DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;n.enableZoom&&B(e),n.enableRotate&&V(e),n.update();break;default:a=o.NONE}}(e):function(e){switch(a){case o.ROTATE:if(!1===n.enableRotate)return;!function(e){E.set(e.clientX,e.clientY),y.subVectors(E,g).multiplyScalar(n.rotateSpeed);let t=n.domElement;_(2*Math.PI*y.x/t.clientHeight),k(2*Math.PI*y.y/t.clientHeight),g.copy(E),n.update()}(e);break;case o.DOLLY:if(!1===n.enableZoom)return;v.set(e.clientX,e.clientY),T.subVectors(v,j),T.y>0?z(L(T.y)):T.y<0&&D(L(T.y)),j.copy(v),n.update();break;case o.PAN:if(!1===n.enablePan)return;w.set(e.clientX,e.clientY),O.subVectors(w,P).multiplyScalar(n.panSpeed),I(O.x,O.y),P.copy(w),n.update()}}(e))}function q(e){(function(e){delete x[e.pointerId];for(let t=0;t<M.length;t++)if(M[t]==e.pointerId){M.splice(t,1);return}})(e),0===M.length&&(n.domElement.releasePointerCapture(e.pointerId),n.domElement.removeEventListener("pointermove",Q),n.domElement.removeEventListener("pointerup",q)),n.dispatchEvent(c),a=o.NONE}function $(e){!1!==n.enabled&&!1!==n.enableZoom&&a===o.NONE&&(e.preventDefault(),n.dispatchEvent(s),Y(e.clientX,e.clientY),e.deltaY<0?D(L(e.deltaY)):e.deltaY>0&&z(L(e.deltaY)),n.update(),n.dispatchEvent(c))}function J(e){!1!==n.enabled&&!1!==n.enablePan&&function(e){let t=!1;switch(e.code){case n.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?k(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,n.keyPanSpeed),t=!0;break;case n.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?k(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,-n.keyPanSpeed),t=!0;break;case n.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?_(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(n.keyPanSpeed,0),t=!0;break;case n.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?_(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(-n.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),n.update())}(e)}function ee(e){!1!==n.enabled&&e.preventDefault()}function et(e){let t=x[e.pointerId];void 0===t&&(t=new i.FM8,x[e.pointerId]=t),t.set(e.pageX,e.pageY)}function en(e){return x[e.pointerId===M[0]?M[1]:M[0]]}n.domElement.addEventListener("contextmenu",ee),n.domElement.addEventListener("pointerdown",G),n.domElement.addEventListener("pointercancel",q),n.domElement.addEventListener("wheel",$,{passive:!1}),this.update()}}var d=function(){let e=(0,a.useRef)(null),t=(0,a.useRef)(new i.xsS),n=(0,a.useRef)(null),r=(0,a.useRef)(null),s=(0,a.useRef)(null),c=(0,a.useRef)([]),[l,u]=(0,a.useState)(4),[m,d]=(0,a.useState)(b(4));(0,a.useEffect)(()=>{n.current=new i.cPb(75,window.innerWidth/window.innerHeight,.1,1e3),r.current=new i.CP7({canvas:e.current}),s.current=new p(n.current,r.current.domElement),r.current.setSize(window.innerWidth,window.innerHeight),n.current.position.z=5;for(let e=0;e<m.length;e++)for(let n=0;n<m[e].length;n++){let o=new i.DvJ(1,1*m[e][n],1),a=new i.vBJ({color:h(m[e][n])}),r=new i.Kj0(o,a);r.position.set(1*e,m[e][n]/2*1,1*n),t.current.add(r),c.current.push(r)}let o=()=>{requestAnimationFrame(o),s.current&&s.current.update(),r.current&&n.current&&r.current.render(t.current,n.current)};o()},[m]);let h=e=>({1:13369344,2:52224,3:204,4:13421568,5:11141290,6:43690,7:10066329,8:5592405,9:3355443})[e]||8947848;function b(e){return[[1,2,3,4],[4,3,2,1],[2,1,4,3],[3,4,1,2]]}return(0,o.jsxs)("div",{children:[(0,o.jsx)("canvas",{ref:e,className:"w-full h-screen"}),(0,o.jsx)("button",{onClick:()=>{let e=prompt("Enter puzzle size:");if(e){let t=parseInt(e.trim(),10);t>0?(u(t),d(b(t))):alert("Invalid size. Please enter a positive integer.")}},children:"Change Puzzle Size"})]})}},9122:function(e,t,n){"use strict";var o=n(3882),a=Symbol.for("react.element"),i=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),r=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var o,c={},l=null,u=null;for(o in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,o)&&!s.hasOwnProperty(o)&&(c[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===c[o]&&(c[o]=t[o]);return{$$typeof:a,type:e,key:l,ref:u,props:c,_owner:r.current}}t.jsx=c,t.jsxs=c},7090:function(e,t,n){"use strict";e.exports=n(9122)}},function(e){e.O(0,[116,546,538,744],function(){return e(e.s=8793)}),_N_E=e.O()}]);