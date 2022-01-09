"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Van = void 0;
const vehiculo_1 = require("./vehiculo");
class Van extends vehiculo_1.Vehiculo {
    constructor(cod, MV, tipo, KM_Men, empleado, plazas) {
        super(cod, MV, tipo, KM_Men, empleado);
        this._plazas = plazas;
    }
    get plazas() {
        return this._plazas;
    }
}
exports.Van = Van;
