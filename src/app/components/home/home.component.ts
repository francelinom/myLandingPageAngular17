import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { NewsletterFormComponent } from "../newsletter-form/newsletter-form.component";
import { PokemonListComponent } from "../pokemon-list/pokemon-list.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [NgOptimizedImage, HeaderComponent, BtnPrimaryComponent, NewsletterFormComponent, PokemonListComponent]
})
export class HomeComponent {

}
