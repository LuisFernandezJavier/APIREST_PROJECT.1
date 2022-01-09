import { Empleado } from './empleado';
export class Mecanico extends Empleado {
private _gastosRecambio: number; 
constructor(cod: string, nombre: string,puesto: string,horasExt:number,horasMen:number,sueldoBase: number,gastosRecambio: number){
    super(cod,nombre,puesto,horasExt,horasMen,sueldoBase)
    this._gastosRecambio = gastosRecambio;  
}
get horasExtra(){
    return this._gastosRecambio;
}
}