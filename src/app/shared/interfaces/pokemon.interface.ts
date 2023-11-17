export interface Pokemon {
  name: string;
  pokedexIndex: number;
  spriteUrl: string;
  totalHp?: number;
  currentHp?: number;
  type: string;
  types?: Array<string>;
}