"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
class Vehiculo {
    constructor(cod, MV, tipo, KM_Men, empleado) {
        this._cod = cod;
        this._MV = MV;
        this._tipo = tipo;
        this._KM_Men = KM_Men;
        this._empleado = empleado;
    }
    get cod() {
        return this._cod;
    }
    get MV() {
        return this._MV;
    }
    get tipo() {
        return this._tipo;
    }
    get KM_Men() {
        return this._KM_Men;
    }
    get empleado() {
        return this._empleado;
    }
}
exports.Vehiculo = Vehiculo;
