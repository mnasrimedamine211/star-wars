import { Injectable } from '@angular/core';
import { IFilms } from '../models/films';
import { Store } from '@ngrx/store';
import { ICharacters } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  data: any;


  constructor() { }

  public getCharactersByFilmId(filmId: string, filmList: IFilms[]): ICharacters[] {
    const film = filmList.filter(f => f.id === filmId);
    return film ? film[0].characterConnection.characters : [];
  }
  public getFilmById(filmId: string, filmList: IFilms[]): IFilms | undefined {
    const film = filmList.filter(f => f.id === filmId);
    return film[0];
  }
}
