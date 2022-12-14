import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán América'];
  heroeBorrado: string = '';
  get borrado(): boolean { return this.heroeBorrado !== '';}
  borrarHeroe = (): void => {
    this.heroeBorrado = this.heroes.pop() || '';
  }
}
