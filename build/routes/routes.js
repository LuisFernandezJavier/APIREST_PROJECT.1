"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const database_1 = require("../database/database");
const Svehiculo_1 = require("../model/Svehiculo");
class DatoRoutes {
    constructor() {
        this.nuevoVan = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let VanpSchema = new Svehiculo_1.Vehiculos({
                _cod: req.body._cod,
                _MV: req.body._MV,
                _tipo: req.body._tipo,
                _KM_Men: req.body._KM_Men,
                _plazas: req.body._plazas
            });
            console.log(VanpSchema);
            yield database_1.db.conectarBD()
                .then(() => __awaiter(this, void 0, void 0, function* () {
                yield VanpSchema.save()
                    .then((mensaje) => res.send(`El documento se ha introducido correctamente en la base de datos ${mensaje}`))
                    .catch((error) => res.send(`Error en la subida del documento a ${database_1.db}: ${error}`));
            }))
                .catch((error) => res.send(`Error conectando a ${database_1.db}: ${error}`));
            database_1.db.desconectarBD();
        });
        this._router = (0, express_1.Router)();
    }
    get router() {
        return this._router;
    }
    misRutas() {
        this._router.post('/vehiculo/Van', this.nuevoVan); // añadir un vehiculo tipo Van
        //this._router.put('/autos/:matriculax/:cambio', this.updatePm)
    }
}
const obj = new DatoRoutes();
obj.misRutas();
exports.routes = obj.router;
