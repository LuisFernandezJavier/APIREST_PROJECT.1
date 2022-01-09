"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculos = void 0;
const mongoose_1 = require("mongoose");
const vehiculoSchema = new mongoose_1.Schema({
    _cod: {
        type: String,
    },
    _MV: {
        type: [],
    },
    _tipo: {
        type: String,
    },
    _KM_Men: {
        type: Number,
    },
});
exports.Vehiculos = (0, mongoose_1.model)('vehiculos', vehiculoSchema);
