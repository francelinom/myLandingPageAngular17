import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonCardComponent } from "../pokemon-card/pokemon-card.component";

@Component({
    selector: 'app-pokemon-list',
    standalone: true,
    templateUrl: './pokemon-list.component.html',
    styleUrl: './pokemon-list.component.scss',
    imports: [NgOptimizedImage, PokemonCardComponent]
})
export class PokemonListComponent {

  pokemons: any[] = [];

  constructor(private service: PokemonService) {
    service.sendData().subscribe({
      next: (res) => this.pokemons = res.results,
    });
  }

}
