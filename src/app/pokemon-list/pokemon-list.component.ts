import { Component } from '@angular/core';
import { GenericPokemon } from '../pokemon';
import { PokemonApiService } from '../pokemon-api.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent {
  pokemonList: GenericPokemon[] = [];

  constructor(private pokemonService: PokemonApiService) {}

  ngOnInit(): void {
    this.getPokemonList();
  }

  getPokemonList(): void {
    this.pokemonService
      .getPokemonApi()
      .subscribe((pokeapi) => (this.pokemonList = pokeapi.results));
  }

}
