import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, ReplaySubject, Subject, map, switchMap, tap} from 'rxjs';
import {PokeapiService} from '../shared/services/pokeapi.service';
import { Pokemon } from '../shared/interfaces/pokemon.interface';
import {PokemonSharingService} from '../shared/services/pokemon-sharing.service';

@Component({
  selector: 'app-async-component',
  templateUrl: './async-component.component.html',
  styleUrls: ['./async-component.component.scss']
})
export class AsyncComponent implements OnInit{
  subject$: Subject<string> = new Subject();
  subject2$ = new ReplaySubject<string>(1);
  subject3$ = new BehaviorSubject<string>("string default");
  pokemon?: Pokemon;
  pokemonList?: Array<Pokemon>;

  constructor(
    private pokeApiService: PokeapiService,
    private pokemonSharingService: PokemonSharingService
  ) {}

  ngOnInit(): void {

    this.pokemon = this.pokemonSharingService.getPokemon();
    this.pokemonList = this.pokemonSharingService.getPokemonList();

    // this.subject3$.pipe(
    //   map((x: string) => x.toUpperCase()),
    //   tap((x: string) => {
    //     console.log(x);
    //   })
    // ).subscribe();

    // this.subject3$.next("string");
  }
}
