import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestCountriesComponent } from './rest-countries/rest-countries.component';
import { Seleziona} from './seleziona/seleziona.component'



//Path dove si troverà la pagina del component
const routes: Routes = [
  {path: 'rest-countries', component:RestCountriesComponent},
  {path: 'seleziona', component:Seleziona}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
