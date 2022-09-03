import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {
    /*
        Convención del orde de declaraciones
        1.- propiedades
        2.- gets
        3.- constructor
        4.- functiones
    */

    // Convención para nombrar propiedades privada debese "_nameProperty"
    private _personajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 15000
        },
        {
            nombre: 'Vegeta',
            poder: 8500
        },
        {
            nombre: 'Krilin',
            poder: 700
        }
    ];

    // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    // [...nameArray] ==> para crear un nuevo arreglo a partir de uno existente
    get personajes(): Personaje[] { return [...this._personajes]; }

    constructor() { }

    agregarPersonaje(model: Personaje) {
        this._personajes.push(model)
    }
}