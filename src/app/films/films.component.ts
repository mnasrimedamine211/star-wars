import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FilmsService } from '../services/films.service';


@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent {

  films: any = []
  constructor(private filmsServices: FilmsService,
    private router: Router,

  ) {
    this.filmsServices.getAllFilms().subscribe((filmList: any[]) => {
      this.films = filmList;
    });

  }
  // navigate to list of  characters
  goToCharacters(value: string) {
    console.log(value)
    this.router.navigate(['/characters', value]);
  }
  // navigate to list of  vehicles
  goToVehicles(value: string) {
    console.log(value)
    this.router.navigate(['/vehicles', value]);
  }

}
