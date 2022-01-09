export class Empleado {
    private _cod: string;
    private _nombre: string;
    private _puesto: string;
    private _horasMen: number;
    private _horasExt: number;
    private _sueldoBase: number;
    constructor(cod: string, nombre: string , puesto:string, horasExt: number,horasMen:number,sueldoBase: number) {
        this._cod = cod;
        this._nombre = nombre;
        this._puesto = puesto;
        this._horasExt = horasExt;
        this._horasMen = horasMen;
        this._sueldoBase = sueldoBase;
    }
    get cod() {
         return this._cod; 
    }
    get nombre() {
        return this._nombre;
    }
    get puesto() {
        return this._puesto;
    }
    get horasExt() {
        return this._horasExt;
    }
    get horasMen() {
        return this._horasMen;
    }
    get sueldoBase() {
        return this._sueldoBase;
    }

    mostrarCodNombre() {
        return this._cod , this._nombre;
        
    }
}