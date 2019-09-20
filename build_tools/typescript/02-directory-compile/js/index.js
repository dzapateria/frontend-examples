"use strict";
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
;
var greeter = new Greeter("Hola mundo");
document.write(greeter.greet());
//# sourceMappingURL=index.ts.map