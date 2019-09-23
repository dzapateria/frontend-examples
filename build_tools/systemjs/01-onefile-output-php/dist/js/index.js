"use strict";
System.register("Foo", [], function (exports_1, context_1) {
    "use strict";
    var Foo;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Foo = /** @class */ (function () {
                function Foo(name) {
                    this.name = name;
                    console.log("Es una clase exportada cargada");
                }
                ;
                return Foo;
            }());
            exports_1("Foo", Foo);
        }
    };
});
System.register("numeros", [], function (exports_2, context_2) {
    "use strict";
    var PI;
    var __moduleName = context_2 && context_2.id;
    function restar(num1, num2) {
        return num1 - num2;
    }
    exports_2("restar", restar);
    return {
        setters: [],
        execute: function () {
            exports_2("PI", PI = 5651456415);
        }
    };
});
System.register("index", ["numeros", "Foo"], function (exports_3, context_3) {
    "use strict";
    var numeros_1, Foo_1, algo;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [
            function (numeros_1_1) {
                numeros_1 = numeros_1_1;
            },
            function (Foo_1_1) {
                Foo_1 = Foo_1_1;
            }
        ],
        execute: function () {
            console.log(numeros_1.PI);
            algo = new Foo_1.Foo("pacos");
            console.log("Hola desde index de typescript");
            document.write("ESTO DESDE TS FUNCIONA BIEN");
        }
    };
});
var MENSAJES = [
    "el texto es muy corto",
    "El texto es demasiado largo"
];
function obtenerError(numError) {
    return MENSAJES[numError];
}
//# sourceMappingURL=index.js.map