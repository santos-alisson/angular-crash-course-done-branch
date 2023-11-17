import { Component, OnInit } from '@angular/core';
import { Subject, map, tap } from 'rxjs';
import { PokemonSharingService } from '../shared/services/pokemon-sharing.service';
import { Pokemon } from '../shared/interfaces/pokemon.interface';
import { PokeapiService } from '../shared/services/pokeapi.service';

@Component({
  selector: 'app-pokemon-battle',
  templateUrl: './pokemon-battle.component.html',
  styleUrls: ['./pokemon-battle.component.scss']
})
export class PokemonBattleComponent implements OnInit{
  
  damageSubject$: Subject<number> = new Subject();
  pokemon?: Pokemon;

  constructor(
    private pokeApiService: PokeapiService
  ){}

  ngOnInit(): void {

    this.pokeApiService.getPokemon(132).pipe(
      map((pokemon) => this.mapToBattlePokemon(pokemon)),
      tap((pokemon) => {
        this.pokemon = pokemon;
      }),
      // switchMap(pokemon => this.pokeApiService.getPokemonsByType(pokemon.type)),
      // mergeMap(pokemonList => pokemonList.map(
      //   ({pokemon}) => this.pokeApiService.getPokemon(pokemon.name)
      // ) ),
      // switchMap(pokemonObservableList => pokemonObservableList),
      // map(pokemonList => pokemonList.map((pokemon:any) => this.mapToPokemon(pokemon)) as Array<Pokemon>),
      // tap((pokemonList) => {
      //   this.pokemonSharingService.setPokemonList(pokemonList);
      // })
    ).subscribe();

    
  }

  onClickHit(damage: number): void {
    this.damageSubject$.next(damage);
  }

  mapToBattlePokemon(pokemon: any): Pokemon {

    let typeArray: Array<any>;
    let typeNameArray: Array<string>;
    typeArray = pokemon.types.map((type: any) => type.type);
    typeNameArray = typeArray.map((type: any) => type.name);

    console.log(typeArray);
    console.log(typeNameArray);

    return {
      name: pokemon.name,
      pokedexIndex: pokemon.id,
      spriteUrl: pokemon.sprites.front_default,
      type: pokemon.types[0].type.name,
      totalHp: pokemon.stats[0].base_stat,
      currentHp: pokemon.stats[0].base_stat,
      types: pokemon.types.map((pokemontype: any) => pokemontype.type.name)
    }
  }
}
