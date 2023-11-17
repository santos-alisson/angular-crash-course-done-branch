import { Injectable } from '@angular/core';
import {Pokemon} from '../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonSharingService {

  pokemon?: Pokemon;
  pokemonList?: Array<Pokemon>;

  setPokemon(pokemon: Pokemon): void {
    this.pokemon = pokemon;
  }

  getPokemon(): Pokemon | undefined {
    return this.pokemon;
  }

  setPokemonList(pokemonList: Array<Pokemon>): void {
    this.pokemonList = pokemonList;
  }
  
  getPokemonList(): Array<Pokemon> | undefined {
    return this.pokemonList;
  }
}
