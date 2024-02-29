import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss'
})
export class PokemonCardComponent {

  @Input()
  pokemon: any;

  @Input()
  id!: number;

  getImagePokemon() {
    const numeroFormatado = this.id.toString().padStart(3, '0');
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numeroFormatado}.png`;
  }
}
