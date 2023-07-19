import { Component } from '@angular/core';
import { GenericPokemon } from '../pokemon';
import { PokemonApiService } from '../pokemon-api.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent {
  search: string = '';
  pokemonList: GenericPokemon[] = [];
  filteredPokemonList: GenericPokemon[] = [];

  constructor(private pokemonService: PokemonApiService) {}

  ngOnInit(): void {
    this.getPokemonList();
  }

  getPokemonList(): void {
    this.pokemonService
      .getPokemonApi()
      .subscribe((pokeapi) => {
        this.pokemonList = pokeapi.results;
        this.filteredPokemonList = pokeapi.results;
      });
  }

  onSearch(): void {
    if (this.search) {
      this.filteredPokemonList = this.pokemonList.filter((p) =>
        p.name.toLocaleLowerCase().includes(this.search)
      );
    } else {
      this.filteredPokemonList = this.pokemonList;
    }
  }
}
