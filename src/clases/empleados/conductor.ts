import { Empleado } from './empleado';
export class Conductor extends Empleado {
private _litroGasolina: number; 
constructor(cod: string, nombre: string,puesto:string, horasExt:number,horasMen:number,sueldoBase: number,litroGasolina: number){
    super(cod,nombre,puesto,horasExt,horasMen,sueldoBase)
    this._litroGasolina = litroGasolina;  
}
get horasExtra(){
    return this._litroGasolina;
}
}