import { Empleado } from "../empleados/empleado";
import {Vehiculo } from './vehiculo';

export class Confort extends Vehiculo {
private _lv_lujo: string; 
constructor(cod: string, MV:[marca:string ,modelo:string],tipo:string,KM_Men:number,empleado: Array<Empleado>,lv_lujo:string){
    super(cod,MV,tipo,KM_Men,empleado)
    this._lv_lujo=lv_lujo;  
}
get lv_lujo(): string{
    return this._lv_lujo;
}
}