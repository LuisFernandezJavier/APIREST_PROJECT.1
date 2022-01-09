"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Confort = void 0;
const vehiculo_1 = require("./vehiculo");
class Confort extends vehiculo_1.Vehiculo {
    constructor(cod, MV, tipo, KM_Men, empleado, lv_lujo) {
        super(cod, MV, tipo, KM_Men, empleado);
        this._lv_lujo = lv_lujo;
    }
    get lv_lujo() {
        return this._lv_lujo;
    }
}
exports.Confort = Confort;
