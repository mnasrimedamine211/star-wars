import { Action, createAction, createReducer, on } from '@ngrx/store';

// Define the initial state
export interface AppState {
  filmList: any[];
}

export const initialState: AppState = {
  filmList: []
};

// Define the actions
export const setFilmList = createAction('[FilmList] Set Film List', (filmList: any[]) => ({ filmList }));

// Define the reducer function
export const filmListReducer = createReducer(
  initialState,
  on(setFilmList, (state, { filmList }) => ({ ...state, filmList }))
);
