import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  private url: string = 'https://pokeapi.co/api/v2'

  constructor(private httpClient: HttpClient) {}

  getPokemon(pokemon: string | number): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/pokemon/${pokemon}`)
  }

  getPokemonsByType(type: string): Observable<Array<any>> {
    return this.httpClient.get<Array<any>>(`${this.url}/type/${type}`).pipe(
      map((response: any) => response.pokemon)
    )
  }
}
