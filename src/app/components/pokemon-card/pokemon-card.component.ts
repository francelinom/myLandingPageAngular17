import { NgOptimizedImage } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges, signal } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss'
})
export class PokemonCardComponent implements OnChanges {

  @Input()
  pokemon: any;

  @Input()
  id!: number;

  urlImagePokemon = signal('');

  ngOnChanges(changes: SimpleChanges): void {
    const numeroFormatado = this.id.toString().padStart(3, '0');
    this.urlImagePokemon.set(`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numeroFormatado}.png`);
  }
}
