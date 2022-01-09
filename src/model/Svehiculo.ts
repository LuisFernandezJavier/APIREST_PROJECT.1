import {Schema, model } from 'mongoose';
import { Vehiculo } from '../clases/vehiculos/vehiculo';
import { Empleado } from '../clases/empleados/empleado';

const vehiculoSchema = new Schema({
    _cod:{
        type: String,
    },
    _MV: {
        type: [],
    },
    _tipo:{
        type:String,
    },
    _KM_Men:{
        type: Number,
    },
    _plazas:{
        type: Number
    },
    _lv_lujo:{
        type: String
    }

})

export type  iVan = {
    _cod: string | null,
    _MV: [] | null,
    _tipo: string | null,
    _KM_Men: number | null,
    _plazas: number | null,
    _empleados: Empleado[] | null
}

export type  iConfort = {
    _cod: string | null,
    _MV: [] | null,
    _tipo: string | null,
    _KM_Men: number | null,
    _lv_lujo: string | null,
    _empleados: Empleado[] | null
}





export const Vehiculos = model('vehiculos', vehiculoSchema)