"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empleados = void 0;
const mongoose_1 = require("mongoose");
const empleadoSchema = new mongoose_1.Schema({
    _cod: {
        type: String,
    },
    _nombre: {
        type: String,
    },
    _puesto: {
        type: String,
    },
    _horasExt: {
        type: Number,
    },
    _horasMen: {
        type: Number,
    },
    _sueldoBase: {
        type: Number,
    },
    _litroGasolina: {
        type: Number
    },
    _gastosRecambio: {
        type: Number
    }
});
exports.Empleados = (0, mongoose_1.model)('empleados', empleadoSchema);
