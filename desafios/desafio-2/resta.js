"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Resta {
    constructor(num1, num2) {
        this.operador1 = num1;
        this.operador2 = num2;
    }
    resultado() {
        return this.operador1 - this.operador2;
    }
}
exports.default = Resta;
