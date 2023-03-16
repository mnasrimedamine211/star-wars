import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICharacters } from '../models/character';
import { CharactersService } from '../services/characters.service';
import { FilmsService } from '../services/films.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {
  films: any
  list_characters: any = <ICharacters><unknown>[];
  characters: any = <ICharacters><unknown>[];
  inputValue: string = '';
  title: string = "list characters of "
  constructor(
    private charactersService: CharactersService,
    private route: ActivatedRoute,
    private filmsServices: FilmsService
  ) {
    this.filmsServices.getAllFilms().subscribe((filmList: any[]) => {
      console.log(filmList);
      this.films = filmList;
      let filmId = this.route.snapshot.params['id'];
      let film = this.charactersService.getFilmById(filmId, this.films);
      this.list_characters = this.charactersService.getCharactersByFilmId(filmId, this.films);
      this.characters = this.charactersService.getCharactersByFilmId(filmId, this.films);
      this.title = this.title.concat(film ? film.title : "");
    });
  }
  

  onValueChange(value: string) {
    this.inputValue = value;
    if (value === '') {
      this.characters = this.list_characters;
    } else {
      this.characters = this.list_characters.filter((character: ICharacters) => {
        return character.name.toLowerCase().includes(value.toLowerCase());
      });

    }
  }

}
