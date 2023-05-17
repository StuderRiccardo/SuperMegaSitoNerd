import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralComponent } from './general/general.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  //vanno messi i vari path
  {path: 'general/:id',component:GeneralComponent},
  {path: '', redirectTo: '/general', pathMatch: 'full'},
  {path: '', component:SearchComponent}
  //va messo il path generic che contiene le altre 5 pagine
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
