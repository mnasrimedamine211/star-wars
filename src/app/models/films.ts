import { ICharacters } from "./character";
import { IVehicle } from "./vehicle";
export interface IFilms {
    id: string;
    title: string;
    director: string;
    releaseDate: string;
    producers: string[];
    characterConnection: {
      characters :[ICharacters]
    }
    vehicleConnection: {
      vehicles : [IVehicle]
    }
  }