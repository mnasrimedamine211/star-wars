import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IVehicle } from '../models/vehicle';
import { FilmsService } from '../services/films.service';
import { VehiculesService } from '../services/vehicules.service';


@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {
  vehicles: any
  title: string = "list vehicles of "
  inputValue: string = '';
  list_vehicles: any = <IVehicle><unknown>[];
  films: any
  constructor(
    private vehiculesService: VehiculesService,
    private route: ActivatedRoute,
    private filmsServices: FilmsService) {

    this.filmsServices.getAllFilms().subscribe((filmList: any[]) => {
      console.log(filmList);
      this.films = filmList;
      let filmId = this.route.snapshot.params['id'];
      let film = this.vehiculesService.getFilmById(filmId, this.films);
      this.list_vehicles = this.vehiculesService.getCharactersByFilmId(filmId, this.films);
      this.vehicles = this.vehiculesService.getCharactersByFilmId(filmId, this.films);
      this.title = this.title.concat(film ? film.title : "");
    });
  }
  onValueChange(value: string) {
    this.inputValue = value;
    if (value === '') {
      this.vehicles = this.list_vehicles;
    } else {
      this.vehicles = this.list_vehicles.filter((character: IVehicle) => {
        return character.name.toLowerCase().includes(value.toLowerCase());
      });

    }
  }
}
