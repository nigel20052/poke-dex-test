import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { PokemonApiService } from '../pokemon-api.service';
import { PokemonDetail } from '../pokemon';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css'],
})
export class PokemonDetailComponent {
  @Input() pokemon?: PokemonDetail;
  onBackHome(): void {
    this.router.navigate(['/']);
  }
  onBack(): void {
    this.location.back();
  }

  constructor(
    private routerActivated: ActivatedRoute,
    private pokemonApi: PokemonApiService,
    private router: Router,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(): void {
    const name = this.routerActivated.snapshot.paramMap.get('name');
    if (name) {
      this.pokemonApi
        .getPokemonDetailByName(name)
        .subscribe((pokemon) => (this.pokemon = pokemon));
    }
  }
}
