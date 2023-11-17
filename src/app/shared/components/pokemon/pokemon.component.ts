import { Component, Input, OnInit } from '@angular/core';
import {Pokemon} from '../../interfaces/pokemon.interface';
import { Subject, tap } from 'rxjs';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit{
  @Input() pokemon?: Pokemon;
  @Input() battleControl$?: Subject<number> = new Subject();
  currentHp: number | undefined = 0;

  ngOnInit(): void {
    this.battleControl$?.pipe(
      tap( damage => {
        this.takeDamage(damage);
      }

      )
    ).subscribe();

    this.currentHp = this.pokemon?.currentHp;
  }
 
  takeDamage(damage: number): void {
    if (this.pokemon?.currentHp) {
      this.pokemon.currentHp = this.pokemon.currentHp - damage;
    }
  }
}
