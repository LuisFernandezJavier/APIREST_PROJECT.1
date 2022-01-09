"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mecanico = void 0;
const empleado_1 = require("./empleado");
class Mecanico extends empleado_1.Empleado {
    constructor(cod, nombre, puesto, horasExt, horasMen, sueldoBase, gastosRecambio) {
        super(cod, nombre, puesto, horasExt, horasMen, sueldoBase);
        this._gastosRecambio = gastosRecambio;
    }
    get horasExtra() {
        return this._gastosRecambio;
    }
}
exports.Mecanico = Mecanico;
