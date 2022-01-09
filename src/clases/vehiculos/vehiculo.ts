import { Empleado } from "../empleados/empleado";

export class Vehiculo {
    private _cod: string;
    private _MV: [marca:string ,modelo:string];
    private _tipo: string;
    private _KM_Men: number;
    private _empleado: Array<Empleado>;
    constructor(cod: string, MV:[marca:string ,modelo:string],tipo:string,KM_Men:number,empleado: Array<Empleado>) {
        this._cod = cod;
        this._MV = MV;
        this._tipo = tipo;
        this._KM_Men = KM_Men;
        this._empleado = empleado;
    }
    get cod() {
         return this._cod; 
    }
    get MV() {
        return this._MV;
    }
    get tipo(){
        return this._tipo
    }
    get KM_Men() {
        return this._KM_Men;
    }
    get empleado() {
        return this._empleado;
    }


}