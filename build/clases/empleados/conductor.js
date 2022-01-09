"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conductor = void 0;
const empleado_1 = require("./empleado");
class Conductor extends empleado_1.Empleado {
    constructor(cod, nombre, puesto, horasExt, horasMen, sueldoBase, litroGasolina) {
        super(cod, nombre, puesto, horasExt, horasMen, sueldoBase);
        this._litroGasolina = litroGasolina;
    }
    get horasExtra() {
        return this._litroGasolina;
    }
}
exports.Conductor = Conductor;
