import { Empleado } from "../empleados/empleado";
import {Vehiculo } from './vehiculo';

export class Van extends Vehiculo {
private _plazas: number; 
constructor(cod: string, MV:[marca:string ,modelo:string],tipo:string,KM_Men:number,empleado: Array<Empleado>,plazas:number){
    super(cod,MV,tipo,KM_Men,empleado)
    this._plazas=plazas;  
}
get plazas(): number{
    return this._plazas;
}
}