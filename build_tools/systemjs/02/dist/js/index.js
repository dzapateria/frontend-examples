System.register("funciones/numeros", [], function (exports_1, context_1) {
    "use strict";
    var PI;
    var __moduleName = context_1 && context_1.id;
    function restar(num1, num2) {
        return num1 - num2;
    }
    exports_1("restar", restar);
    return {
        setters: [],
        execute: function () {
            exports_1("PI", PI = 5651456415);
        }
    };
});
System.register("clases/Foo", [], function (exports_2, context_2) {
    "use strict";
    var Foo;
    var __moduleName = context_2 && context_2.id;
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
            exports_2("Foo", Foo);
        }
    };
});
System.register("funciones/textos", [], function (exports_3, context_3) {
    "use strict";
    var txt;
    var __moduleName = context_3 && context_3.id;
    function imprimir(msg) {
        console.log(msg);
    }
    exports_3("imprimir", imprimir);
    return {
        setters: [],
        execute: function () {
            console.log("textos.ts modulo cargado");
            exports_3("txt", txt = "variable exportada");
        }
    };
});
System.register("index", ["funciones/numeros", "clases/Foo", "funciones/textos"], function (exports_4, context_4) {
    "use strict";
    var numeros_1, Foo_1, algo, textos_1, textos_2;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [
            function (numeros_1_1) {
                numeros_1 = numeros_1_1;
            },
            function (Foo_1_1) {
                Foo_1 = Foo_1_1;
            },
            function (textos_1_1) {
                textos_1 = textos_1_1;
                textos_2 = textos_1_1;
            }
        ],
        execute: function () {
            console.log(numeros_1.PI);
            algo = new Foo_1.Foo("pacos");
            textos_1.imprimir("texto imprime el mensaje funcion");
            console.log("Hola desde index de typescript");
            document.write("ESTO DESDE TS FUNCIONA BIEN");
            console.log(textos_2.txt);
        }
    };
});
//# sourceMappingURL=index.js.map