(this["webpackJsonpreact-client-pw"]=this["webpackJsonpreact-client-pw"]||[]).push([[0],{27:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(15),o=n.n(a),i=(n(27),n(8)),s=n.n(i),l=n(10),u=n(9),j=n(3),d=n(0),b=function(e){var t=e.text,n=e.onClickx,r=e.color;return Object(d.jsx)("div",{children:Object(d.jsx)("button",{className:"btn",style:{backgroundColor:r},onClick:n,children:t})})};b.defaultProps={color:"steelblue",text:"Button"};var p,h,f,O=b,v=function(e){var t=e.title,n=e.onClickx,r=e.show;return Object(d.jsxs)("div",{className:"header",children:[Object(d.jsxs)("h2",{children:[" ",t," "]}),Object(d.jsx)(O,{onClickx:n,text:r?"Hide":"Show",color:r?"blue":"green"})]})},x=n(2),g=n(16),y=[],m=[],w=400,E=400;function C(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return 0===e?16735760:1===e?16744096:2===e?14515712:16777215}function S(e,t){e.push(e[0]);for(var n=0;n<e.length-1;n++)for(var r=[new x.t(e[n].x,e[n].y,e[n].z),new x.t(e[n+1].x,e[n+1].y,e[n+1].z)],c=(new x.c).setFromPoints(r),a=new x.h({color:0}),o=new x.g(c,a),i=0;i<t;i+=3){var s=o.clone();s.position.z=i,y.push(s)}}function k(e,t){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.75,r=arguments.length>4?arguments[4]:void 0,c=arguments.length>5?arguments[5]:void 0;"site"!==c&&S(e,t);var a=0;"peripheral"===c?a=C(0):"partition"===c?a=C(1):"courtyard"===c?a=C(2):"site"===c&&(a=C(3));var o=new x.o;o.moveTo(e[0].x,e[0].y);for(var i=1;i<e.length;i++)o.lineTo(e[i].x,e[i].y);o.autoClose=!0;var s={steps:1,depth:t,bevelEnabled:!1},l=new x.f(o,s),u=new x.k({color:a,opacity:n,transparent:!0,wireframe:r}),j=new x.j(l,u);m.push(j)}var F,D,_,T=function(e){var t=e.getDbData,n=Object(r.useState)(t),c=Object(j.a)(n,2),a=(c[0],c[1],Object(r.useState)(0)),o=Object(j.a)(a,2),i=o[0],s=o[1];Object(r.useEffect)((function(){u(),l()}),[i]);var l=function(){var e=document.getElementById("dbIndexSlider").value;s(e),console.log("db index",i)},u=function(){for(var e=document.getElementById("viewerDBDiv3d");e.children.length>0;)e.removeChild(e.firstChild);(p=new x.n).background=new x.d("#ffffff"),(h=new x.l(45,1,.01,1e5)).position.set(250,250,550),h.up=new x.t(0,0,1),(f=new x.u).setSize(w,E),e.appendChild(f.domElement),function(){var e=new x.a(16777215);p.add(e)}(),function(e){m.forEach((function(e){e.geometry.dispose(),e.material.dispose(),p.remove(e)})),y.forEach((function(e){e.geometry.dispose(),e.material.dispose(),p.remove(e)})),y=[],m=[],console.log(e);var t=0;try{var n=e.partitions,r=0,c=0,a=0;n.forEach((function(e){r+=e.parcel.area,c+=e.parcel.building_height,a++}));var o=10*c/a,i=.1*r/a;n.forEach((function(e){n[t];var r=e.parcel.area,c=e.parcel.building_height,a=e.parcel.type;try{("peripheral"===a||"courtyard"===a||"partition"===a&&c<o&&r>i)&&k(e.parcel.footprint_poly_points,c,0,.75,!1,a)}catch(s){}t++}))}catch(h){}try{var s=e.site;console.log(s);var l=new x.o;l.moveTo(s[0].x,s[0].y);for(var u=1;u<s.length;u++)l.lineTo(s[u].x,s[u].y);l.autoClose=!0;var j=new x.f(l,{steps:1,depth:12.5,bevelEnabled:!1}),d=new x.k({color:7827456,opacity:.5,transparent:!0,wireframe:!1}),b=new x.j(j,d);b.position.z=-12.5,m.push(b)}catch(h){}m.forEach((function(e){p.add(e)})),y.forEach((function(e){p.add(e)}))}(t[i].data);var n=new x.b(150);p.add(n);new g.a(h,f.domElement).addEventListener("onchange",(function(){h.aspect=1,h.updateProjectionMatrix(),f.setSize(w,E)})),b()},b=function e(){requestAnimationFrame(e),f.render(p,h)};return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Review Entries in Database "}),Object(d.jsx)("br",{}),Object(d.jsx)("table",{children:Object(d.jsx)("tbody",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("label",{children:" Select Database Entry to Display"})}),Object(d.jsx)("td",{children:Object(d.jsx)("input",{id:"dbIndexSlider",type:"range",min:"0",max:i.length,value:i,onChange:function(e){s(e.target.value),console.log(i)}})})]})})}),Object(d.jsx)("br",{})]})},z=[],N=[],B=400,I=400;function P(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return 0===e?16735760:1===e?16744096:2===e?14515712:16777215}function L(e,t){e.push(e[0]);for(var n=0;n<e.length-1;n++)for(var r=[new x.t(e[n].x,e[n].y,e[n].z),new x.t(e[n+1].x,e[n+1].y,e[n+1].z)],c=(new x.c).setFromPoints(r),a=new x.h({color:0}),o=new x.g(c,a),i=0;i<t;i+=3){var s=o.clone();s.position.z=i,z.push(s)}}function R(e,t){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.75,r=arguments.length>4?arguments[4]:void 0,c=arguments.length>5?arguments[5]:void 0;"site"!==c&&L(e,t);var a=0;"peripheral"===c?a=P(0):"partition"===c?a=P(1):"courtyard"===c?a=P(2):"site"===c&&(a=P(3));var o=new x.o;o.moveTo(e[0].x,e[0].y);for(var i=1;i<e.length;i++)o.lineTo(e[i].x,e[i].y);o.autoClose=!0;var s={steps:1,depth:t,bevelEnabled:!1},l=new x.f(o,s),u=new x.k({color:a,opacity:n,transparent:!0,wireframe:r}),j=new x.j(l,u);N.push(j)}var G=function(e){var t=e.dataFromServerInp,n=Object(r.useState)(t),c=Object(j.a)(n,2),a=(c[0],c[1]);Object(r.useEffect)((function(){a(t),o()}),[t]);var o=function(){a(t);for(var e=document.getElementById("viewerDiv3d");e.children.length>0;)e.removeChild(e.firstChild);(F=new x.n).background=new x.d("#ffffff"),(D=new x.l(45,1,.01,1e5)).position.set(250,250,550),D.up=new x.t(0,0,1),(_=new x.u).setSize(B,I),e.appendChild(_.domElement),function(){var e=new x.a(16777215);F.add(e)}(),function(e,t){N.forEach((function(e){e.geometry.dispose(),e.material.dispose(),F.remove(e)})),z.forEach((function(e){e.geometry.dispose(),e.material.dispose(),F.remove(e)})),z=[],N=[],console.log(e[t]);var n=0;try{var r=e.partitions,c=0,a=0,o=0;r.forEach((function(e){c+=e.parcel.area,a+=e.parcel.building_height,o++}));var i=10*a/o,s=.1*c/o;r.forEach((function(e){r[n];var t=e.parcel.area,c=e.parcel.building_height,a=e.parcel.type;try{("peripheral"===a||"courtyard"===a||"partition"===a&&c<i&&t>s)&&R(e.parcel.footprint_poly_points,c,0,.75,!1,a)}catch(o){}n++}))}catch(h){}try{var l=e.site;console.log(l);var u=new x.o;u.moveTo(l[0].x,l[0].y);for(var j=1;j<l.length;j++)u.lineTo(l[j].x,l[j].y);u.autoClose=!0;var d=new x.f(u,{steps:1,depth:12.5,bevelEnabled:!1}),b=new x.k({color:7827456,opacity:.5,transparent:!0,wireframe:!1}),p=new x.j(d,b);p.position.z=-12.5,N.push(p)}catch(h){}N.forEach((function(e){F.add(e)})),z.forEach((function(e){F.add(e)}))}(t);var n=new x.b(150);F.add(n);new g.a(D,_.domElement).addEventListener("onchange",(function(){D.aspect=1,D.updateProjectionMatrix(),_.setSize(B,I)})),u()},i=function(){var e=Object(l.a)(s.a.mark((function e(){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"http://127.0.0.1:5000/api/post/output",e.next=3,fetch("http://127.0.0.1:5000/api/post/output",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,console.log(r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function e(){requestAnimationFrame(e),_.render(F,D)};return Object(d.jsx)("div",{children:Object(d.jsx)("button",{className:"btn btn-block",onClick:i,children:"Send to remote DB"})})},A=function(e){var t=e.onGetConstraints,n=Object(r.useState)(!0),c=Object(j.a)(n,2),a=c[0],o=c[1],i=Object(r.useState)(!0),s=Object(j.a)(i,2),l=s[0],u=s[1],b=Object(r.useState)(5),p=Object(j.a)(b,2),h=p[0],f=p[1],O=Object(r.useState)(1.25),v=Object(j.a)(O,2),x=v[0],g=v[1],y=Object(r.useState)(3),m=Object(j.a)(y,2),w=m[0],E=m[1],C=Object(r.useState)(52),S=Object(j.a)(C,2),k=S[0],F=S[1],D=Object(r.useState)(7),_=Object(j.a)(D,2),T=_[0],z=_[1],N=Object(r.useState)(0),B=Object(j.a)(N,2),I=B[0],P=B[1],L=Object(r.useState)(35),R=Object(j.a)(L,2),G=R[0],A=R[1],M=Object(r.useState)(3),H=Object(j.a)(M,2),J=H[0],q=H[1];Object(r.useEffect)((function(){}),[a]),Object(r.useEffect)((function(){}),[l]),Object(r.useEffect)((function(){}),[h]),Object(r.useEffect)((function(){}),[x]),Object(r.useEffect)((function(){}),[w]),Object(r.useEffect)((function(){}),[k]),Object(r.useEffect)((function(){}),[T]),Object(r.useEffect)((function(){}),[I]),Object(r.useEffect)((function(){}),[G]),Object(r.useEffect)((function(){}),[J]);return Object(d.jsx)("div",{children:Object(d.jsx)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),t({peripheral:a,subdivision:l,number:parseInt(h),fsr:parseFloat(x),floorHeight:parseFloat(w),peripheralDepth:parseFloat(k),setback:parseFloat(T),deviation:parseFloat(I),courtyard_depth:parseFloat(G),courtyard_number:parseFloat(J)}),o(!0),u(!0),f(parseInt(h)),g(parseFloat(x)),E(parseFloat(w)),F(parseFloat(k)),z(parseFloat(T)),P(I),A(parseFloat(G)),q(parseFloat(J))},children:Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("table",{children:Object(d.jsxs)("tbody",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsxs)("label",{children:["Floor Area Ratio (FAR) or Floor Space Ratio (FSR)"," "]})}),Object(d.jsx)("td",{children:Object(d.jsx)("input",{type:"text",placeholder:"3",value:x,onChange:function(e){return g(e.target.value)}})})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("label",{children:"Floor Height (partition)"})}),Object(d.jsx)("td",{children:Object(d.jsx)("input",{type:"text",placeholder:"3",value:w,onChange:function(e){return E(e.target.value)}})})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("label",{children:"Setback "})}),Object(d.jsx)("td",{children:Object(d.jsx)("input",{type:"text",placeholder:"1.0",value:T,onChange:function(e){return z(e.target.value)}})})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("label",{children:"Number of internal subdivisions "})}),Object(d.jsx)("td",{children:Object(d.jsx)("input",{type:"text",placeholder:"5",value:h,onChange:function(e){return f(e.target.value)}})})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("label",{children:"Depth of Peripheral Arrangement "})}),Object(d.jsx)("td",{children:Object(d.jsx)("input",{type:"text",placeholder:"3",value:k,onChange:function(e){return F(e.target.value)}})})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("label",{children:"Deviation in subdivision/partitions "})}),Object(d.jsx)("td",{children:Object(d.jsx)("input",{type:"text",placeholder:"3",value:I,onChange:function(e){return P(e.target.value)}})})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("label",{children:"Number of Courtyard-Type "})}),Object(d.jsx)("td",{children:Object(d.jsx)("input",{type:"text",placeholder:"3",value:J,onChange:function(e){return q(e.target.value)}})})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("label",{children:"Depth of Bays in Courtyard-Type "})}),Object(d.jsx)("td",{children:Object(d.jsx)("input",{type:"text",placeholder:"3",value:G,onChange:function(e){return A(e.target.value)}})})]})]})}),Object(d.jsx)("div",{children:Object(d.jsx)("input",{type:"submit",value:"submit",className:"btn btn-block",onClick:function(){f(h),g(x),E(w),F(k),z(T),P(I),A(G),q(J)}})})]})})})},M=function(e){var t=e.title,n=e.onClickx,r=e.btnTitle;return Object(d.jsxs)("div",{className:"header",children:[Object(d.jsxs)("h2",{children:[" ",t," "]}),Object(d.jsx)(O,{onClickx:n,text:r,color:"blue"})]})},H=n(21),J=n(38),q=n(39),U=n(40),V=n(6),K=n.n(V),Q=n(22);n(33),n(34);var W=function(e){var t=e.onGetMapPolyCoords,n=Object(r.useState)([]),c=Object(j.a)(n,2),a=(c[0],c[1]),o=Object(r.useState)([{x:-200,y:-200},{x:200,y:-200},{x:200,y:200},{x:-200,y:200}]),i=Object(j.a)(o,2),s=i[0],l=i[1],u=Object(r.useState)({lat:48.864716,lng:2.349}),b=Object(j.a)(u,2),p=b[0];b[1];Object(r.useEffect)((function(){console.log(s)}),[s]);var h=function(e){var t=[],n=e[0],r=0,c=0;e.forEach((function(e){var a=[parseFloat(e[0])-parseFloat(n[0]),parseFloat(e[1])-parseFloat(n[1])];t.push({x:a[0].toFixed(4),y:a[1].toFixed(4)}),r+=a[0],c+=a[1]})),console.log("created map",e);var a=r/e.length,o=c/e.length,i=[];t.forEach((function(e){var t=[parseFloat(e.x)-a,parseFloat(e.y)-o];i.push({x:t[0],y:t[1]})}));var s=[],u=100,j=0,d=u*u+j*j;i.forEach((function(e){var t=e.x-u,n=e.y-j,r=(u*t+j*n)/d,c={x:2*u*r-e.x,y:2*j*r-e.y};s.push(c)})),l(s)};return Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"map_container",children:Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(s)},children:[Object(d.jsxs)(J.a,{center:p,zoom:13,children:[Object(d.jsx)(q.a,{children:Object(d.jsx)(Q.a,{position:"topright",onCreated:function(e){var t=[],n=e.layerType,r=e.layer;if("polygon"===n){var c=r._leaflet_id;a((function(e){return[].concat(Object(H.a)(e),[{id:c,latlngs:r.getLatLngs()[0]}])})),console.log(r.getLatLngs()[0]),r.getLatLngs()[0].forEach((function(e){var n=K.a.CRS.EPSG3857.project(K.a.latLng(e));t.push([n.y,n.x])})),t.push(t[0])}h(t)},onEdited:function(e){var t=e.layers._layers,n=Object.values(t)[0].editing.latlngs[0][0],r=[];n.forEach((function(e){var t=K.a.CRS.EPSG3857.project(K.a.latLng(e));r.push([t.y,t.x])})),h(r)},onDeleted:function(e){var t=e.layers._layers;Object.values(t).map((function(e){var t=e._leaflet_id;a((function(e){return e.filter((function(e){return e.id!==t}))}))})),l([{x:-200,y:-200},{x:200,y:-200},{x:200,y:200},{x:-200,y:200}])},draw:{rectangle:!1,polyline:!1,circle:!1,marker:!1,circlemarker:!1}})}),Object(d.jsx)(U.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"})]}),Object(d.jsx)("div",{children:Object(d.jsx)("input",{type:"submit",value:"submit",className:"btn btn-block",onClick:function(){l(s)}})})]})})})};var X=function(){var e=Object(r.useState)(),t=Object(j.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(!1),o=Object(j.a)(a,2),i=o[0],b=o[1],p=Object(r.useState)(!1),h=Object(j.a)(p,2),f=h[0],O=h[1],x=Object(r.useState)(!1),g=Object(j.a)(x,2),y=g[0],m=g[1],w=Object(r.useState)(!1),E=Object(j.a)(w,2),C=E[0],S=E[1],k=Object(r.useState)(!1),F=Object(j.a)(k,2),D=F[0],_=F[1],z=Object(r.useState)({peripheral:!0,subdivision:!0,number:5,fsr:1.25,floorHeight:3,peripheralDepth:52,setback:7,deviation:.5,courtyard_depth:35,courtyard_number:3}),N=Object(j.a)(z,2),B=N[0],I=N[1],P=Object(r.useState)([{x:-200,y:-200},{x:200,y:-200},{x:200,y:200},{x:-200,y:200}]),L=Object(j.a)(P,2),R=L[0],H=L[1],J=Object(r.useState)(Object(u.a)(Object(u.a)({},B),{},{polygon:R})),q=Object(j.a)(J,2),U=q[0],V=q[1];Object(r.useEffect)((function(){K()}),[]),Object(r.useEffect)((function(){Q(),S(C)}),[U]);var K=function(){X()},Q=function(){var e=Object(l.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"http://localhost:5000/api/get/partitions",e.next=3,fetch("http://localhost:5000/api/get/partitions",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(U)});case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,c(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X=function(){var e=Object(l.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"http://127.0.0.1:5000/api/get/output",e.next=3,fetch("http://127.0.0.1:5000/api/get/output",{method:"get"});case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,b(n),console.log(i);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("h1",{children:[Object(d.jsx)("b",{children:"Architecture & Urban Design Client"}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{})]}),Object(d.jsx)("br",{}),Object(d.jsx)(v,{title:"Input constraints",show:f,onClickx:function(){O(!f)}}),f&&Object(d.jsx)(A,{onGetConstraints:function(e){I(e)}}),Object(d.jsx)(v,{title:"Draw the site on a map",show:y,onClickx:function(){m(!y)}}),y&&Object(d.jsx)(W,{onGetMapPolyCoords:function(e){H(e)}}),Object(d.jsx)(M,{title:"Generate a solution",btnTitle:"Process",onClickx:function(){V(Object(u.a)(Object(u.a)({},B),{},{polygon:R})),Q()}}),Object(d.jsx)(v,{title:"View results",show:C,onClickx:function(){S(!C);for(var e=document.getElementById("viewerDiv3d");e.children.length>0;)e.removeChild(e.firstChild)}}),C&&Object(d.jsx)(G,{dataFromServerInp:n}),Object(d.jsx)("div",{id:"viewerDiv3d"}),Object(d.jsx)(v,{title:"Review DB",show:D,onClickx:function(){_(!D);for(var e=document.getElementById("viewerDBDiv3d");e.children.length>0;)e.removeChild(e.firstChild);K()}}),D&&Object(d.jsx)(T,{getDbData:i}),Object(d.jsx)("div",{id:"viewerDBDiv3d"})]})};o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(X,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.dae1bae7.chunk.js.map