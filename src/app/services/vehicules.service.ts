import { Injectable } from '@angular/core';

import { IFilms } from '../models/films';
import { IVehicle } from '../models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehiculesService {
  data: any;

  constructor() { }
  public getCharactersByFilmId(filmId: string, filmList: IFilms[]): IVehicle[] {
    const film = filmList.filter(f => f.id === filmId);
    return film ? film[0].vehicleConnection.vehicles : [];
  }
  public getFilmById(filmId: string, filmList: IFilms[]): IFilms | undefined {
    const film = filmList.filter(f => f.id === filmId);
    return film[0];
  }

}


