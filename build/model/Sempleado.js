"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
});
