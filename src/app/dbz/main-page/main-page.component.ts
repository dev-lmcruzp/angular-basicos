import { Component } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  /* Para injectar los servicios y poderlos ocupar */
  //constructor( private dbzService: DbzService ) { }
  constructor() { }

  //personajes: Personaje[] = [];
  //get personajes(): Personaje[] { return this.dbzService.personajes; }

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  // agregarNuevoPersonaje(args: Personaje): void {
  //   this.personajes.push(args);
  // }
}
