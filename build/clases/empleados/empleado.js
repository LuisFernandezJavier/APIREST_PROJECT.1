"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empleado = void 0;
class Empleado {
    constructor(cod, nombre, puesto, horasExt, horasMen, sueldoBase) {
        this._cod = cod;
        this._nombre = nombre;
        this._puesto = puesto;
        this._horasExt = horasExt;
        this._horasMen = horasMen;
        this._sueldoBase = sueldoBase;
    }
    get cod() {
        return this._cod;
    }
    get nombre() {
        return this._nombre;
    }
    get puesto() {
        return this._puesto;
    }
    get horasExt() {
        return this._horasExt;
    }
    get horasMen() {
        return this._horasMen;
    }
    get sueldoBase() {
        return this._sueldoBase;
    }
    mostrarCodNombre() {
        return this._cod, this._nombre;
    }
}
exports.Empleado = Empleado;
