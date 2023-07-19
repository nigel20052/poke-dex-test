import { Component, Input } from '@angular/core';
import { PokemonDetail } from '../pokemon';
import { PokemonApiService } from '../pokemon-api.service';

@Component({
  selector: 'app-pokemon-preview',
  templateUrl: './pokemon-preview.component.html',
  styleUrls: ['./pokemon-preview.component.css'],
})
export class PokemonPreviewComponent {
  @Input() pokemonUrl?: string;
  pokemon?: PokemonDetail;

  constructor(private pokemonApi: PokemonApiService) {}

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(): void {
    if (this.pokemonUrl) {
      this.pokemonApi
        .getPokemonDetail(this.pokemonUrl)
        .subscribe((pokemon) => (this.pokemon = pokemon));
    }
  }
}
