import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IFilms } from '../models/films';
import { ENDPOINT } from './endpoints';
@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  filmList: any[] | undefined
  constructor(private http: HttpClient) { }
  public getAll(): Observable<IFilms> {
    const body = { "query": "query Query {\n  allFilms {\n    films {\n  id\n      title\n      director\n      releaseDate\n   producers\n  characterConnection{\n characters {\n      eyeColor\n      gender\n    name\n  skinColor\n  homeworld {\n            name\n          }\n      }\n  }\n  vehicleConnection{\n  vehicles{\n  crew\n      model\n      name\n   vehicleClass\n      }\n  }\n }\n  }\n}\n" };
    return this.http.post<IFilms>(ENDPOINT, body);
  }
  public getAllFilms(): Observable<any> {
    return this.getAll().pipe(
      map((response: any) => {
        this.filmList = response.data.allFilms.films;
        return this.filmList;
      })
    );
  }

  public getFilmById(filmId: string): IFilms | undefined {
    if (this.filmList && this.filmList?.length > 0) {
      const film = this.filmList.find(f => f.id === filmId);
      return film;
    }
    else
      return undefined
  }
}
