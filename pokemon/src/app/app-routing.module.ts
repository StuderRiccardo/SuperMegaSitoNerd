import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SceptileComponent } from './sceptile/sceptile.component';
import { ArceusComponent } from './arceus/arceus.component';
import { UmbreonComponent } from './umbreon/umbreon.component';
import { GengarComponent } from './gengar/gengar.component';
import { GreninjaComponent } from './greninja/greninja.component';

const routes: Routes = [
  //vanno messi i vari path
  { path: 'sceptile', component: SceptileComponent },
  { path: 'arceus', component: ArceusComponent },
  { path: 'umbreon', component: UmbreonComponent },
  { path: 'gengar', component: GengarComponent },
  { path: 'greninja', component: GreninjaComponent },
  //va messo il path generic che contiene le altre 5 pagine
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
