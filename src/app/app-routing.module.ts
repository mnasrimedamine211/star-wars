import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { FilmsComponent } from './films/films.component';
import { VehiclesComponent } from './vehicles/vehicles.component';


const routes: Routes = [
  { path: '', component: FilmsComponent },
  { path: 'films', component: FilmsComponent, pathMatch: "full" },
  { path: 'characters', component: CharactersComponent },
  { path: 'vehicles', component: VehiclesComponent },
  { path: 'characters/:id', component: CharactersComponent },
  { path: 'vehicles/:id', component: VehiclesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
