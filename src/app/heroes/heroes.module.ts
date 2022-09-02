import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    /* Solo se puede visualizar (Utilizar) en el interior */
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    /* Todo lo que de puede visualizar(Utilisar) al exterior */
    exports: [
        ListadoComponent
    ],
    /* Todas las importaciones que necesitamos utilizar (Using C#) */
    imports: [
        CommonModule
    ]
})

export class HeroesModule {

}