import { TestBed } from '@angular/core/testing';

import { PokemonSharingService } from './pokemon-sharing.service';

describe('PokemonSharingService', () => {
  let service: PokemonSharingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonSharingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
