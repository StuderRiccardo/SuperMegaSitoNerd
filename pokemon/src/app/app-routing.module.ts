import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SceptileComponent } from './sceptile/sceptile.component';

const routes: Routes = [
  //vanno messi i vari path
  { path: 'sceptile', component: SceptileComponent }
  //va messo il path generic che contiene le altre 5 pagine
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
