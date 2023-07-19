import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { PokemonApi, PokemonDetail } from './pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonApiService {
  private pokemonUrl = 'https://pokeapi.co/api/v2/pokemon';
  constructor(private _http: HttpClient) {}

  getPokemonApi(): Observable<PokemonApi> {
    return this._http.get<PokemonApi>(this.pokemonUrl);
  }

  getPokemonDetail(url: string): Observable<PokemonDetail> {
    return this._http.get<PokemonDetail>(url);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }

  getPokemonDetailByName(name: string): Observable<PokemonDetail> {
    return this._http
      .get<PokemonDetail>(`${this.pokemonUrl}/${name}`)
      .pipe(catchError(this.handleError));
  }
}
