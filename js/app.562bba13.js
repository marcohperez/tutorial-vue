(function(e){function t(t){for(var o,c,l=t[0],i=t[1],s=t[2],u=0,b=[];u<l.length;u++)c=l[u],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&b.push(r[c][0]),r[c]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);d&&d(t);while(b.length)b.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,l=1;l<n.length;l++){var i=n[l];0!==r[i]&&(o=!1)}o&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},a=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/tutorial-vue/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var d=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1b97":function(e,t,n){"use strict";n("505e")},"505e":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r={id:"app",class:"container"},a=Object(o["e"])("div",{class:"row"},[Object(o["e"])("div",{class:"col-md-12"},[Object(o["e"])("h1",null,"Personas")])],-1),c={class:"row"},l={class:"col-md-12"};function i(e,t,n,i,s,d){var u=Object(o["l"])("formulario-persona"),b=Object(o["l"])("tabla-personas");return Object(o["h"])(),Object(o["d"])("div",r,[a,Object(o["e"])("div",c,[Object(o["e"])("div",l,[Object(o["f"])(u,{onAddPersona:d.agregarPersona},null,8,["onAddPersona"]),Object(o["f"])(b,{personas:s.personas,onDeletePersona:d.eliminarPersona,onActualizarPersona:d.actualizarPersona},null,8,["personas","onDeletePersona","onActualizarPersona"])])])])}var s=n("5530"),d=n("2909"),u=(n("99af"),n("4de4"),n("d81d"),{id:"tabla-personas"}),b={key:0,class:"alert alert-info",role:"alert"},p={class:"table"},j=Object(o["e"])("thead",null,[Object(o["e"])("tr",null,[Object(o["e"])("th",null,"Nombre"),Object(o["e"])("th",null,"Apellido"),Object(o["e"])("th",null,"Email")])],-1),m={key:0},O=["onUpdate:modelValue"],f={key:1},h={key:2},v=["onUpdate:modelValue"],y={key:3},g={key:4},P=["onUpdate:modelValue"],k={key:5},E={key:6},w=["onClick"],x=["onClick"],I={key:7},A=["onClick"],C=["onClick"];function U(e,t,n,r,a,c){return Object(o["h"])(),Object(o["d"])("div",u,[n.personas.length?Object(o["c"])("",!0):(Object(o["h"])(),Object(o["d"])("div",b," No se han agregado personas ")),Object(o["e"])("table",p,[j,Object(o["e"])("tbody",null,[(Object(o["h"])(!0),Object(o["d"])(o["a"],null,Object(o["k"])(n.personas,(function(t){return Object(o["h"])(),Object(o["d"])("tr",{key:t.id},[a.editando===t.id?(Object(o["h"])(),Object(o["d"])("td",m,[Object(o["o"])(Object(o["e"])("input",{type:"text",class:"form-control","onUpdate:modelValue":function(e){return t.nombre=e}},null,8,O),[[o["n"],t.nombre]])])):(Object(o["h"])(),Object(o["d"])("td",f,Object(o["m"])(t.nombre),1)),a.editando===t.id?(Object(o["h"])(),Object(o["d"])("td",h,[Object(o["o"])(Object(o["e"])("input",{type:"text",class:"form-control","onUpdate:modelValue":function(e){return t.apellido=e}},null,8,v),[[o["n"],t.apellido]])])):(Object(o["h"])(),Object(o["d"])("td",y,Object(o["m"])(t.apellido),1)),a.editando===t.id?(Object(o["h"])(),Object(o["d"])("td",g,[Object(o["o"])(Object(o["e"])("input",{type:"email",class:"form-control","onUpdate:modelValue":function(e){return t.email=e}},null,8,P),[[o["n"],t.email]])])):(Object(o["h"])(),Object(o["d"])("td",k,Object(o["m"])(t.email),1)),a.editando===t.id?(Object(o["h"])(),Object(o["d"])("td",E,[Object(o["e"])("button",{class:"btn btn-success",onClick:function(e){return c.guardarPersona(t)},style:{"margin-right":"2em"}},"💾 Guardar",8,w),Object(o["e"])("button",{class:"btn btn-secondary ml-2",onClick:function(e){return c.cancelarEdicion(t)}},"❌ Cancelar",8,x)])):(Object(o["h"])(),Object(o["d"])("td",I,[Object(o["e"])("button",{class:"btn btn-info ml-2",onClick:function(e){return c.editarPersona(t)},style:{"margin-right":"2em"}},"✏️ Editar",8,A),Object(o["e"])("button",{class:"btn btn-danger",onClick:function(n){return e.$emit("delete-persona",t.id)}},"🗑️ Eliminar",8,C)]))])})),128))])])])}var V={name:"tabla-personas",props:{personas:Array},methods:{guardarPersona:function(e){e.nombre.length&&e.apellido.length&&e.email.length&&(this.$emit("actualizar-persona",e.id,e),this.editando=null)},cancelarEdicion:function(e){Object.assign(e,this.personaEditada),this.editando=null},editarPersona:function(e){this.personaEditada=Object.assign({},e),this.editando=e.id}},data:function(){return{editando:null}}};V.render=U;var _=V;Object(o["j"])("data-v-c30ae68a");var F={id:"formulario-persona"},S={class:"container"},z={class:"row"},T={class:"col-md-4"},D={class:"form-group"},M=Object(o["e"])("label",null,"Nombre",-1),N={class:"col-md-4"},$={class:"form-group"},J=Object(o["e"])("label",null,"Apellido",-1),L={class:"col-md-4"},G={class:"form-group"},K=Object(o["e"])("label",null,"Email",-1),q=Object(o["e"])("div",{class:"row"},[Object(o["e"])("div",{class:"col-md-4"},[Object(o["e"])("div",{class:"form-group"},[Object(o["e"])("button",{class:"btn btn-primary"},"Añadir persona")])])],-1),B={class:"container"},H={class:"row"},Q={class:"col-md-12"},R={key:0,class:"alert alert-danger",role:"alert"},W={key:1,class:"alert alert-success",role:"alert"};function X(e,t,n,r,a,c){return Object(o["h"])(),Object(o["d"])("div",F,[Object(o["e"])("form",{onSubmit:t[7]||(t[7]=Object(o["p"])((function(){return c.enviarFormulario&&c.enviarFormulario.apply(c,arguments)}),["prevent"]))},[Object(o["e"])("div",S,[Object(o["e"])("div",z,[Object(o["e"])("div",T,[Object(o["e"])("div",D,[M,Object(o["o"])(Object(o["e"])("input",{ref:"nombre","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.persona.nombre=e}),type:"text",class:Object(o["g"])(["form-control",{"is-invalid":a.procesando&&c.nombreInvalido}]),onFocus:t[1]||(t[1]=function(){return c.resetEstado&&c.resetEstado.apply(c,arguments)}),onKeypress:t[2]||(t[2]=function(){return c.resetEstado&&c.resetEstado.apply(c,arguments)})},null,34),[[o["n"],a.persona.nombre]])])]),Object(o["e"])("div",N,[Object(o["e"])("div",$,[J,Object(o["o"])(Object(o["e"])("input",{"onUpdate:modelValue":t[3]||(t[3]=function(e){return a.persona.apellido=e}),type:"text",class:Object(o["g"])(["form-control",{"is-invalid":a.procesando&&c.apellidoInvalido}]),onFocus:t[4]||(t[4]=function(){return c.resetEstado&&c.resetEstado.apply(c,arguments)})},null,34),[[o["n"],a.persona.apellido]])])]),Object(o["e"])("div",L,[Object(o["e"])("div",G,[K,Object(o["o"])(Object(o["e"])("input",{"onUpdate:modelValue":t[5]||(t[5]=function(e){return a.persona.email=e}),type:"email",class:Object(o["g"])(["form-control",{"is-invalid":a.procesando&&c.emailInvalido}]),onFocus:t[6]||(t[6]=function(){return c.resetEstado&&c.resetEstado.apply(c,arguments)})},null,34),[[o["n"],a.persona.email]])])])]),q]),Object(o["e"])("div",B,[Object(o["e"])("div",H,[Object(o["e"])("div",Q,[a.error&&a.procesando?(Object(o["h"])(),Object(o["d"])("div",R," Debes rellenar todos los campos! ")):Object(o["c"])("",!0),a.correcto?(Object(o["h"])(),Object(o["d"])("div",W," La persona ha sido agregada correctamente! ")):Object(o["c"])("",!0)])])])],32)])}Object(o["i"])();var Y={name:"formulario-persona",methods:{enviarFormulario:function(){this.procesando=!0,this.resetEstado(),this.nombreInvalido||this.apellidoInvalido||this.emailInvalido?this.error=!0:(this.$emit("add-persona",this.persona),this.$refs.nombre.focus(),this.error=!1,this.correcto=!0,this.procesando=!1,this.persona={nombre:"",apellido:"",email:""})},resetEstado:function(){this.correcto=!1,this.error=!1}},computed:{nombreInvalido:function(){return this.persona.nombre.length<1},apellidoInvalido:function(){return this.persona.apellido.length<1},emailInvalido:function(){return this.persona.email.length<1}},data:function(){return{procesando:!1,correcto:!1,error:!1,persona:{nombre:"",apellido:"",email:""}}}};n("c299");Y.render=X,Y.__scopeId="data-v-c30ae68a";var Z=Y,ee={name:"App",components:{TablaPersonas:_,FormularioPersona:Z},methods:{agregarPersona:function(e){var t=0;this.personas.length>0&&(t=this.personas[this.personas.length-1].id+1),this.personas=[].concat(Object(d["a"])(this.personas),[Object(s["a"])(Object(s["a"])({},e),{},{id:t})])},eliminarPersona:function(e){this.personas=this.personas.filter((function(t){return t.id!==e}))},actualizarPersona:function(e,t){this.personas=this.personas.map((function(n){return n.id===e?t:n}))}},data:function(){return{personas:[{id:1,nombre:"Jon",apellido:"Nieve",email:"jon@email.com"},{id:2,nombre:"Tyrion",apellido:"Lannister",email:"tyrion@email.com"},{id:3,nombre:"Daenerys",apellido:"Targaryen",email:"daenerys@email.com"}]}}};n("1b97");ee.render=i;var te=ee;Object(o["b"])(te).mount("#app")},c1cb:function(e,t,n){},c299:function(e,t,n){"use strict";n("c1cb")}});
//# sourceMappingURL=app.562bba13.js.map