import {Schema, model } from 'mongoose';

const empleadoSchema = new Schema({
    _cod:{
        type: String,
    },
    _nombre: {
        type: String,
    },
    _puesto: {
        type: String,
    },
    _horasExt:{
        type:Number,
    },
    _horasMen:{
        type: Number,
    },
    _sueldoBase:{
        type: Number,
    },
    _litroGasolina:{
        type: Number
    },
    _gastosRecambio:{
        type: Number
    }

})

export type  iConductor = {
    _cod: string | null,
    _nombre: string | null,
    _puesto: string | null,
    _horasExt: number | null,
    _horasMen: number | null,
    _sueldoBase: number | null,
    _litroGasolina:number | null, 
}

export type  iMecanico = {
    _cod: string | null,
    _nombre: string | null,
    _puesto: string | null,
    _horasExt: number | null,
    _horasMen: number | null,
    _sueldoBase: number | null,
    _gastosRecambio:number | null, 
}



export const Empleados = model('empleados', empleadoSchema)