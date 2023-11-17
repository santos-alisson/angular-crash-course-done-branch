import {Component, OnInit} from '@angular/core';
import {PokeapiService} from '../shared/services/pokeapi.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {delay, map, mergeMap, switchMap, tap} from 'rxjs';
import {PokemonSharingService} from '../shared/services/pokemon-sharing.service';
import {Pokemon} from '../shared/interfaces/pokemon.interface';

@Component({
  selector: 'app-form-sample',
  templateUrl: './form-sample.component.html',
  styleUrls: ['./form-sample.component.scss']
})
export class FormSampleComponent implements OnInit{

  form?: FormGroup;
  isLoading = false;

  constructor(
    private pokeApiService: PokeapiService,
    private pokemonSharingService: PokemonSharingService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      pokemonName: '',
      pokemonIndex: null
    })
  }

  onSubmit(): void {
    // console.log(this.form?.value.);

    let pokemon = {
      index: this.form?.get("pokemonIndex")?.value, 
      name: this.form?.get("pokemonName")?.value 
    };

    if (!pokemon.index && !pokemon.name) {
      return;
    }

    this.isLoading = true;

    this.pokeApiService.getPokemon(pokemon.index || pokemon.name).pipe(
      map((pokemon) => this.mapToPokemon(pokemon)),
      tap((pokemon) => {
        this.pokemonSharingService.setPokemon(pokemon);
        this.isLoading = false;

        return pokemon;
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

  mapToPokemon(pokemon: any): Pokemon {
    return {
      name: pokemon.name,
      pokedexIndex: pokemon.id,
      spriteUrl: pokemon.sprites.front_default,
      type: pokemon.types[0].type.name
    }
  }

}
