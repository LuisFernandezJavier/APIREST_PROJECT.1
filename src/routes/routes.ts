import {Request, Response, Router } from 'express';
import { db } from '../database/database';
import { Empleados,iConductor, iMecanico } from "../model/Sempleado";
import { Vehiculos ,iVan , iConfort } from "../model/Svehiculo";
import { Empleado } from "../clases/empleados/empleado";
import { Mecanico } from "../clases/empleados/mecanico";
import { Conductor } from "../clases/empleados/conductor";
import { Vehiculo } from "../clases/vehiculos/vehiculo";
import { Van } from "../clases/vehiculos/van";
import { Confort } from "../clases/vehiculos/confort";




class DatoRoutes {
    private _router: Router

    constructor() {
        this._router = Router()
    }
    get router() {
        return this._router
    }

    private getVehiculos = async (req: Request, res: Response) => {
    await db.conectarBD()
            .then(async (mensaje) => {
                console.log(mensaje)
                const query = await Vehiculos.find({})
                res.json(query)
            })
            .catch((mensaje) => {
                res.send(mensaje)
            })

        db.desconectarBD()
    }

    private getEmpleados = async (req: Request, res: Response) => {
        await db.conectarBD()
                .then(async (mensaje) => {
                    console.log(mensaje)
                    const query = await Empleados.find({})
                    res.json(query)
                })
                .catch((mensaje) => {
                    res.send(mensaje)
                })
    
            db.desconectarBD()
        }
        private encuentroVehiculo = async (req: Request, res: Response) => {
            const valor = req.params.valor
            await db.conectarBD()
                .then(async (mensaje) => {
                    console.log(mensaje)
                    const query = await Vehiculos.aggregate([
                        {
                            $match: { "_cod": valor }
    
                        }])
                    res.json(query)
                })
                .catch((mensaje) => {
                    res.send(mensaje)
                })
    
        }

        private encuentroEmpleado = async (req: Request, res: Response) => {
            const valor = req.params.valor
            await db.conectarBD()
                .then(async (mensaje) => {
                    console.log(mensaje)
                    const query = await Empleados.aggregate([
                        {
                            $match: { "_cod": valor }
    
                        }])
                    res.json(query)
                })
                .catch((mensaje) => {
                    res.send(mensaje)
                })
    
        }



    private nuevoVan = async (req: Request, res: Response) => {//
    
                let VanpSchema = new Vehiculos({
                    _cod: req.body._cod,
                    _MV: req.body._MV,
                    _tipo: req.body._tipo,
                    _KM_Men: req.body._KM_Men,
                    _plazas: req.body._plazas
                })

                console.log(VanpSchema)

                await db.conectarBD() 
                .then( async () => {
                await VanpSchema.save()
                .then( (mensaje:any) => res.send(`Introducido correctamente en la base de datos ${mensaje}`))
                .catch( (error:any) => res.send(`Error en la subida del documento a ${db}: ${error}`))
        })
        .catch( (error:any) => res.send(`Error conectando a ${db}: ${error}`))
        db.desconectarBD()
    }

    private nuevoConfort = async (req: Request, res: Response) => {// 
    
        let ConfortSchema = new Vehiculos({
            _cod: req.body._cod,
            _MV: req.body._MV,
            _tipo: req.body._tipo,
            _KM_Men: req.body._KM_Men,
            _lv_lujo: req.body._lv_lujo
        })

        console.log(ConfortSchema)

        await db.conectarBD() 
        .then( async () => {
        await ConfortSchema.save()
        .then( (mensaje:any) => res.send(`Introducido correctamente en la base de datos ${mensaje}`))
        .catch( (error:any) => res.send(`Error en la subida del documento a ${db}: ${error}`))
        })
        .catch( (error:any) => res.send(`Error conectando a ${db}: ${error}`))
        db.desconectarBD()
    }

private nuevoConductor = async (req: Request, res: Response) => {
    
    let ConductorSchema = new Empleados({
        _cod: req.body._cod,
        _nombre: req.body._nombre,
        _puesto: req.body._puesto,
        _horasExt: req.body._horasExt,
        _horasMen: req.body._horasMen,
        _sueldoBase: req.body._sueldoBase,
        _litroGasolina: req.body._litroGasolina

    })

    console.log(ConductorSchema)

    await db.conectarBD() 
    .then( async () => {
    await ConductorSchema.save()
    .then( (mensaje:any) => res.send(`Introducido correctamente en la base de datos ${mensaje}`))
    .catch( (error:any) => res.send(`Error en la subida del documento a ${db}: ${error}`))
    })
    .catch( (error:any) => res.send(`Error conectando a ${db}: ${error}`))
    db.desconectarBD()
}

private nuevoMecanico = async (req: Request, res: Response) => { 
    
    let MecanicoSchema = new Empleados({
        _cod: req.body._cod,
        _nombre: req.body._nombre,
        _puesto: req.body._puesto,
        _horasExt: req.body._horasExt,
        _horasMen: req.body._horasMen,
        _sueldoBase: req.body._sueldoBase,
        _gastosRecambio: req.body._gastosRecambio

    })

    console.log(MecanicoSchema)

    await db.conectarBD() 
    .then( async () => {
    await MecanicoSchema.save()
    .then( (mensaje:any) => res.send(`Introducido correctamente en la base de datos ${mensaje}`))
    .catch( (error:any) => res.send(`Error en la subida del documento a ${db}: ${error}`))
    })
    .catch( (error:any) => res.send(`Error conectando a ${db}: ${error}`))
    db.desconectarBD()
}

private modificaVehiculo = async (req: Request, res: Response) => {

    await db.conectarBD()
        .then(async () => {
            const codV = req.params.codV
            const nuevoKM = req.params.nuevoKM
             await Vehiculos.findOneAndUpdate(
                { _cod: codV },
                {
                    _KM_Men: nuevoKM
                },
                { new: true }
            )
        .then( (mensaje:any) => res.send(`Modificado correctamente en la base de datos ${mensaje}`))
        .catch( (error:any) => res.send(`Error en la subida del documento a ${db}: ${error}`))
    })
        
    .catch( (error:any) => res.send(`Error conectando a ${db}: ${error}`))
    db.desconectarBD()
}



private modificaEmpleado = async (req: Request, res: Response) => {

    await db.conectarBD()
        .then(async () => {
            const codV = req.params.codV
            const nuevoHoras = req.params.nuevoHoras
             await Empleados.findOneAndUpdate(
                { _cod: codV },
                {
                    _horasMen: nuevoHoras
                },
                { new: true }
            )
        .then( (mensaje:any) => res.send(`Modificado correctamente en la base de datos ${mensaje}`))
        .catch( (error:any) => res.send(`Error en la subida del documento a ${db}: ${error}`))
    })
        
    .catch( (error:any) => res.send(`Error conectando a ${db}: ${error}`))
    db.desconectarBD()
}

private borroVehiculo = async (req: Request, res: Response) => {
    const { cod } = req.params

    await db.conectarBD()
    console.log("BORRANDO BORRANDO BORRANDO")
    await Vehiculos.findOneAndDelete(
        {
            "_cod": cod

        }
    )
        .then((doc: any) => res.send("Documento borrado " + doc))
        .catch((error: any) => res.send('Error:  ' + error))
    await db.desconectarBD()
}

private borroEmpleado = async (req: Request, res: Response) => {
    const { cod } = req.params

    await db.conectarBD()
    console.log("BORRANDO BORRANDO BORRANDO")
    await Empleados.findOneAndDelete(
        {
            "_cod": cod

        }
    )
        .then((doc: any) => res.send("Documento borrado " + doc))
        .catch((error: any) => res.send('Error:  ' + error))
    await db.desconectarBD()
}




















































    misRutas() {
        this._router.get('/muestraVehiculos', this.getVehiculos) // muestra todos los vehiculos
        this._router.get('/muestraEmpleados', this.getEmpleados) // muestra todos los empleados
        this._router.get('/encuentroVehiculo/:valor', this.encuentroVehiculo) //busca un vehiculo
        this._router.get('/encuentroEmpleado/:valor', this.encuentroEmpleado) //busca un empleado

        this._router.post('/vehiculo/Van', this.nuevoVan) // añadir un vehiculo tipo Van
        this._router.post('/vehiculo/Confort', this.nuevoConfort) // añadir un vehiculo tipo Confort
        this._router.post('/empleado/Conductor', this.nuevoConductor) // añadir un Conductor
        this._router.post('/empleado/Mecanico', this.nuevoMecanico) // añadir un Mecanico

        this._router.put('/modificoVehiculo/:codV/:nuevoKM', this.modificaVehiculo) // cambia los km mensuales de un vehiculo
        this._router.put('/modificoEmpleado/:codV/:nuevoHoras', this.modificaEmpleado) // cambia horas mensuales de un empleado

        this._router.delete('/borroVehiculo/:cod', this.borroVehiculo)
        this._router.delete('/borroEmpleado/:cod', this.borroEmpleado)
    }






}

const obj = new DatoRoutes()
obj.misRutas()
export const routes = obj.router