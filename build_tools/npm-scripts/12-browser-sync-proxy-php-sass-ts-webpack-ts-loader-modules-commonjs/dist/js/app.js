!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){this.nombre=e,this.apellido=t}return e.prototype.suspender=function(){return"suspendido: "+this.nombre+", "+this.apellido},e}();t.Estudiante=o},function(e,t,n){"use strict";e.exports={activo:!0,titulo:"Opciones globales de la App",id:12345}},function(e,t,n){"use strict";e.exports=function(e){return"Hola soy un alumno node "+e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(2);$("body").append("<hr><h2> Función alumnoSaluda(\"Paco\") importada con import x = require('x') \n                    Devuelve: <br> "+o("Paco")+" </h2>");var r=n(1);$("body").append("<hr><h2>Opciones: "+r.titulo+"</h2>");var u=new(n(0).Estudiante)("Paco","Gomez");$("row").append("<hr><h2> "+u.suspender()+"  </h2>"),$("button").click(function(){console.log("registrado")})}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL0VzdHVkaWFudGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL29wdGlvbnNHbG9iYWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2FsdW1uby50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbWFpbi50cyJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJ2YWx1ZSIsIm4iLCJfX2VzTW9kdWxlIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwiRXN0dWRpYW50ZSIsIm5vbWJyZSIsImFwZWxsaWRvIiwidGhpcyIsInN1c3BlbmRlciIsImFjdGl2byIsInRpdHVsbyIsImlkIiwiYWx1bW5vU2FsdWRhIiwiJCIsImFwcGVuZCIsIm9wdGlvbnNHbG9iYWwiLCJnYXJjaWEiLCJjbGljayIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiJhQUNBLElBQUFBLEtBR0EsU0FBQUMsRUFBQUMsR0FHQSxHQUFBRixFQUFBRSxHQUNBLE9BQUFGLEVBQUFFLEdBQUFDLFFBR0EsSUFBQUMsRUFBQUosRUFBQUUsSUFDQUcsRUFBQUgsRUFDQUksR0FBQSxFQUNBSCxZQVVBLE9BTkFJLEVBQUFMLEdBQUFNLEtBQUFKLEVBQUFELFFBQUFDLElBQUFELFFBQUFGLEdBR0FHLEVBQUFFLEdBQUEsRUFHQUYsRUFBQUQsUUFLQUYsRUFBQVEsRUFBQUYsRUFHQU4sRUFBQVMsRUFBQVYsRUFHQUMsRUFBQVUsRUFBQSxTQUFBUixFQUFBUyxFQUFBQyxHQUNBWixFQUFBYSxFQUFBWCxFQUFBUyxJQUNBRyxPQUFBQyxlQUFBYixFQUFBUyxHQUNBSyxjQUFBLEVBQ0FDLFlBQUEsRUFDQUMsSUFBQU4sS0FNQVosRUFBQW1CLEVBQUEsU0FBQWpCLEdBQ0FZLE9BQUFDLGVBQUFiLEVBQUEsY0FBaURrQixPQUFBLEtBSWpEcEIsRUFBQXFCLEVBQUEsU0FBQWxCLEdBQ0EsSUFBQVMsRUFBQVQsS0FBQW1CLFdBQ0EsV0FBMkIsT0FBQW5CLEVBQUEsU0FDM0IsV0FBaUMsT0FBQUEsR0FFakMsT0FEQUgsRUFBQVUsRUFBQUUsRUFBQSxJQUFBQSxHQUNBQSxHQUlBWixFQUFBYSxFQUFBLFNBQUFVLEVBQUFDLEdBQXNELE9BQUFWLE9BQUFXLFVBQUFDLGVBQUFuQixLQUFBZ0IsRUFBQUMsSUFHdER4QixFQUFBMkIsRUFBQSxHQUlBM0IsSUFBQTRCLEVBQUEsa0NDbEVBZCxPQUFBQyxlQUFBYixFQUFBLGNBQThDa0IsT0FBQSxJQUM5QyxJQUFBUyxFQUFBLFdBQ0EsU0FBQUEsRUFBQUMsRUFBQUMsR0FDQUMsS0FBQUYsU0FDQUUsS0FBQUQsV0FLQSxPQUhBRixFQUFBSixVQUFBUSxVQUFBLFdBQ0EscUJBQUFELEtBQUFGLE9BQUEsS0FBQUUsS0FBQUQsVUFFQUYsRUFSQSxHQVVBM0IsRUFBQTJCLDJDQ05BMUIsRUFBQUQsU0FKQWdDLFFBQUEsRUFDQUMsT0FBQSw4QkFDQUMsR0FBQSxxQ0NBQWpDLEVBQUFELFFBSEEsU0FBQVMsR0FDQSxpQ0FBQUEsaUNDQUFHLE9BQUFDLGVBQUFiLEVBQUEsY0FBOENrQixPQUFBLElBcUI5QyxJQUFBaUIsRUFBQXJDLEVBQUEsR0FHQXNDLEVBQUEsUUFBQUMsT0FBQSxzSEFBQUYsRUFBQSxrQkFFQSxJQUFBRyxFQUFBeEMsRUFBQSxHQUNBc0MsRUFBQSxRQUFBQyxPQUFBLHFCQUFBQyxFQUFBTCxPQUFBLFNBUUEsSUFDQU0sRUFBQSxJQURBekMsRUFBQSxHQUNBNkIsWUFBQSxnQkFDQVMsRUFBQSxPQUFBQyxPQUFBLFlBQUFFLEVBQUFSLFlBQUEsV0FDQUssRUFBQSxVQUFBSSxNQUFBLFdBQ0FDLFFBQUFDLElBQUEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBFc3R1ZGlhbnRlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRXN0dWRpYW50ZShub21icmUsIGFwZWxsaWRvKSB7XHJcbiAgICAgICAgdGhpcy5ub21icmUgPSBub21icmU7XHJcbiAgICAgICAgdGhpcy5hcGVsbGlkbyA9IGFwZWxsaWRvO1xyXG4gICAgfVxyXG4gICAgRXN0dWRpYW50ZS5wcm90b3R5cGUuc3VzcGVuZGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBcInN1c3BlbmRpZG86IFwiICsgdGhpcy5ub21icmUgKyBcIiwgXCIgKyB0aGlzLmFwZWxsaWRvO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBFc3R1ZGlhbnRlO1xyXG59KCkpO1xyXG5leHBvcnRzLkVzdHVkaWFudGUgPSBFc3R1ZGlhbnRlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIG9wdGlvbnNHbG9iYWwgPSB7XHJcbiAgICBcImFjdGl2b1wiOiB0cnVlLFxyXG4gICAgXCJ0aXR1bG9cIjogXCJPcGNpb25lcyBnbG9iYWxlcyBkZSBsYSBBcHBcIixcclxuICAgIFwiaWRcIjogMTIzNDVcclxufTtcclxubW9kdWxlLmV4cG9ydHMgPSBvcHRpb25zR2xvYmFsO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuZnVuY3Rpb24gYWx1bW5vU2FsdWRhKG5hbWUpIHtcclxuICAgIHJldHVybiAnSG9sYSBzb3kgdW4gYWx1bW5vIG5vZGUgJyArIG5hbWU7XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBhbHVtbm9TYWx1ZGE7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG4vLyBMaWJzIEJhc2U6IGpxdWVyeSwgYXhpb3MsIGxvZGFzaCwgdnVlLCBib290c3RyYXBcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKlxyXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxufCAgICAgICAgICAgICAgICAgICAgQ09NTU9OSlMgTk9ERUpTICggV2VicGFjaylcclxufCAgIEVYVEVSTkFMIExJQlMgSU4gbm9kZV9tb2R1bGVzXHJcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG58XHJcbnwgSW5zdGFsbCB0aGUgbGlicyB3aXRoXHJcbnwgbnBtIGkgLS1zYXZlIGpxdWVyeSBheGlvcyBsb2Rhc2ggdnVlIGJvb3RzdHJhcFxyXG58XHJcbiovXHJcbi8vIGltcG9ydCAkID0gcmVxdWlyZShcImpxdWVyeVwiKTtcclxuLy8gd2luZG93LiQgPSB3aW5kb3cualF1ZXJ5ID0gcmVxdWlyZShcImpxdWVyeVwiKTtcclxuLypcclxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbnwgICAgICAgICAgICAgICAgICAgICAgICBDT01NT05KUyBOT0RFSlMgKCBXZWJwYWNrKVxyXG58IElNUE9SVEFORE8gU1VTIFBST1BJT1MgTU9EVUxPUyBDT04gRlVOQ0lPTkVTXHJcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG58XHJcbiovXHJcbi8vRnVuY3Rpb24gXHJcbnZhciBhbHVtbm9TYWx1ZGEgPSByZXF1aXJlKFwiLi9hbHVtbm9cIik7XHJcbi8vIE91dHB1dCBpbiBib2R5XHJcbi8vIE1vc3RyYW5kbyBsYSBzYWxpZGEgcGFyYSB0ZXN0IFxyXG4kKCdib2R5JykuYXBwZW5kKFwiPGhyPjxoMj4gRnVuY2lcXHUwMEYzbiBhbHVtbm9TYWx1ZGEoXFxcIlBhY29cXFwiKSBpbXBvcnRhZGEgY29uIGltcG9ydCB4ID0gcmVxdWlyZSgneCcpIFxcbiAgICAgICAgICAgICAgICAgICAgRGV2dWVsdmU6IDxicj4gXCIgKyBhbHVtbm9TYWx1ZGEoXCJQYWNvXCIpICsgXCIgPC9oMj5cIik7XHJcbi8vIENvbnN0YW50ZSBjb24gb2JqZXRvXHJcbnZhciBvcHRpb25zR2xvYmFsID0gcmVxdWlyZShcIi4vb3B0aW9uc0dsb2JhbFwiKTtcclxuJCgnYm9keScpLmFwcGVuZChcIjxocj48aDI+T3BjaW9uZXM6IFwiICsgb3B0aW9uc0dsb2JhbC50aXR1bG8gKyBcIjwvaDI+XCIpO1xyXG4vKlxyXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxufCAgIEVTMjAxNSAtIEJBQkVMIGltcG9ydFxyXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxufCBsb2FkIGNsYXNzIGluIEVzdHVkaWFudGUudHNcclxufFxyXG4qL1xyXG52YXIgRXN0dWRpYW50ZV8xID0gcmVxdWlyZShcIi4vRXN0dWRpYW50ZVwiKTtcclxudmFyIGdhcmNpYSA9IG5ldyBFc3R1ZGlhbnRlXzEuRXN0dWRpYW50ZShcIlBhY29cIiwgXCJHb21lelwiKTtcclxuJCgncm93JykuYXBwZW5kKFwiPGhyPjxoMj4gXCIgKyBnYXJjaWEuc3VzcGVuZGVyKCkgKyBcIiAgPC9oMj5cIik7XHJcbiQoXCJidXR0b25cIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJyZWdpc3RyYWRvXCIpO1xyXG59KTtcclxuLyogT1VUUFVUUyBTQUxJREFTICovXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=