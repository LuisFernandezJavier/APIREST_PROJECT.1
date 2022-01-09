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
const Sempleado_1 = require("../model/Sempleado");
const Svehiculo_1 = require("../model/Svehiculo");
class DatoRoutes {
    constructor() {
        this.getVehiculos = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield Svehiculo_1.Vehiculos.find({});
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            database_1.db.desconectarBD();
        });
        this.getEmpleados = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield Sempleado_1.Empleados.find({});
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            database_1.db.desconectarBD();
        });
        this.encuentroVehiculo = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const valor = req.params.valor;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield Svehiculo_1.Vehiculos.aggregate([
                    {
                        $match: { "_cod": valor }
                    }
                ]);
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.encuentroEmpleado = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const valor = req.params.valor;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield Sempleado_1.Empleados.aggregate([
                    {
                        $match: { "_cod": valor }
                    }
                ]);
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
        });
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
                    .then((mensaje) => res.send(`Introducido correctamente en la base de datos ${mensaje}`))
                    .catch((error) => res.send(`Error en la subida del documento a ${database_1.db}: ${error}`));
            }))
                .catch((error) => res.send(`Error conectando a ${database_1.db}: ${error}`));
            database_1.db.desconectarBD();
        });
        this.nuevoConfort = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let ConfortSchema = new Svehiculo_1.Vehiculos({
                _cod: req.body._cod,
                _MV: req.body._MV,
                _tipo: req.body._tipo,
                _KM_Men: req.body._KM_Men,
                _lv_lujo: req.body._lv_lujo
            });
            console.log(ConfortSchema);
            yield database_1.db.conectarBD()
                .then(() => __awaiter(this, void 0, void 0, function* () {
                yield ConfortSchema.save()
                    .then((mensaje) => res.send(`Introducido correctamente en la base de datos ${mensaje}`))
                    .catch((error) => res.send(`Error en la subida del documento a ${database_1.db}: ${error}`));
            }))
                .catch((error) => res.send(`Error conectando a ${database_1.db}: ${error}`));
            database_1.db.desconectarBD();
        });
        this.nuevoConductor = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let ConductorSchema = new Sempleado_1.Empleados({
                _cod: req.body._cod,
                _nombre: req.body._nombre,
                _puesto: req.body._puesto,
                _horasExt: req.body._horasExt,
                _horasMen: req.body._horasMen,
                _sueldoBase: req.body._sueldoBase,
                _litroGasolina: req.body._litroGasolina
            });
            console.log(ConductorSchema);
            yield database_1.db.conectarBD()
                .then(() => __awaiter(this, void 0, void 0, function* () {
                yield ConductorSchema.save()
                    .then((mensaje) => res.send(`Introducido correctamente en la base de datos ${mensaje}`))
                    .catch((error) => res.send(`Error en la subida del documento a ${database_1.db}: ${error}`));
            }))
                .catch((error) => res.send(`Error conectando a ${database_1.db}: ${error}`));
            database_1.db.desconectarBD();
        });
        this.nuevoMecanico = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let MecanicoSchema = new Sempleado_1.Empleados({
                _cod: req.body._cod,
                _nombre: req.body._nombre,
                _puesto: req.body._puesto,
                _horasExt: req.body._horasExt,
                _horasMen: req.body._horasMen,
                _sueldoBase: req.body._sueldoBase,
                _gastosRecambio: req.body._gastosRecambio
            });
            console.log(MecanicoSchema);
            yield database_1.db.conectarBD()
                .then(() => __awaiter(this, void 0, void 0, function* () {
                yield MecanicoSchema.save()
                    .then((mensaje) => res.send(`Introducido correctamente en la base de datos ${mensaje}`))
                    .catch((error) => res.send(`Error en la subida del documento a ${database_1.db}: ${error}`));
            }))
                .catch((error) => res.send(`Error conectando a ${database_1.db}: ${error}`));
            database_1.db.desconectarBD();
        });
        this.modificaVehiculo = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then(() => __awaiter(this, void 0, void 0, function* () {
                const codV = req.params.codV;
                const nuevoKM = req.params.nuevoKM;
                yield Svehiculo_1.Vehiculos.findOneAndUpdate({ _cod: codV }, {
                    _KM_Men: nuevoKM
                }, { new: true })
                    .then((mensaje) => res.send(`Modificado correctamente en la base de datos ${mensaje}`))
                    .catch((error) => res.send(`Error en la subida del documento a ${database_1.db}: ${error}`));
            }))
                .catch((error) => res.send(`Error conectando a ${database_1.db}: ${error}`));
            database_1.db.desconectarBD();
        });
        this.modificaEmpleado = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then(() => __awaiter(this, void 0, void 0, function* () {
                const codV = req.params.codV;
                const nuevoHoras = req.params.nuevoHoras;
                yield Sempleado_1.Empleados.findOneAndUpdate({ _cod: codV }, {
                    _horasMen: nuevoHoras
                }, { new: true })
                    .then((mensaje) => res.send(`Modificado correctamente en la base de datos ${mensaje}`))
                    .catch((error) => res.send(`Error en la subida del documento a ${database_1.db}: ${error}`));
            }))
                .catch((error) => res.send(`Error conectando a ${database_1.db}: ${error}`));
            database_1.db.desconectarBD();
        });
        this.borroVehiculo = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { cod } = req.params;
            yield database_1.db.conectarBD();
            console.log("BORRANDO BORRANDO BORRANDO");
            yield Svehiculo_1.Vehiculos.findOneAndDelete({
                "_cod": cod
            })
                .then((doc) => res.send("Documento borrado " + doc))
                .catch((error) => res.send('Error:  ' + error));
            yield database_1.db.desconectarBD();
        });
        this.borroEmpleado = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { cod } = req.params;
            yield database_1.db.conectarBD();
            console.log("BORRANDO BORRANDO BORRANDO");
            yield Sempleado_1.Empleados.findOneAndDelete({
                "_cod": cod
            })
                .then((doc) => res.send("Documento borrado " + doc))
                .catch((error) => res.send('Error:  ' + error));
            yield database_1.db.desconectarBD();
        });
        this._router = (0, express_1.Router)();
    }
    get router() {
        return this._router;
    }
    misRutas() {
        this._router.get('/muestraVehiculos', this.getVehiculos); // muestra todos los vehiculos
        this._router.get('/muestraEmpleados', this.getEmpleados); // muestra todos los empleados
        this._router.get('/encuentroVehiculo/:valor', this.encuentroVehiculo); //busca un vehiculo
        this._router.get('/encuentroEmpleado/:valor', this.encuentroEmpleado); //busca un empleado
        this._router.post('/vehiculo/Van', this.nuevoVan); // añadir un vehiculo tipo Van
        this._router.post('/vehiculo/Confort', this.nuevoConfort); // añadir un vehiculo tipo Confort
        this._router.post('/empleado/Conductor', this.nuevoConductor); // añadir un Conductor
        this._router.post('/empleado/Mecanico', this.nuevoMecanico); // añadir un Mecanico
        this._router.put('/modificoVehiculo/:codV/:nuevoKM', this.modificaVehiculo); // cambia los km mensuales de un vehiculo
        this._router.put('/modificoEmpleado/:codV/:nuevoHoras', this.modificaEmpleado); // cambia horas mensuales de un empleado
        this._router.delete('/borroVehiculo/:cod', this.borroVehiculo);
        this._router.delete('/borroEmpleado/:cod', this.borroEmpleado);
    }
}
const obj = new DatoRoutes();
obj.misRutas();
exports.routes = obj.router;
