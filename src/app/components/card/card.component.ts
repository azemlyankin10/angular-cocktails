import { Component, Input, OnInit } from '@angular/core';
import { Cocktail } from 'src/app/interfaces/cocktail-result';
import { LikedCocktailsService } from 'src/app/services/liked-cocktails.service';
import { getIngredients } from 'src/app/utils/functions/getIngredients';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
    constructor(private likedCocktailsService: LikedCocktailsService) {}

    @Input() cardData!: Cocktail;

    ingredients: string[] = [];
    isLiked = false;

    ngOnInit(): void {
        if (!this.cardData) return;
        this.ingredients = getIngredients(this.cardData);

        this.likedCocktailsService.likedCocktailsCollection$.subscribe(
            (data) => {
                this.isLiked = !!data.find(
                    (c) => c.idDrink === this.cardData.idDrink
                );
            }
        );
    }

    onLike(id: string) {
        this.likedCocktailsService.like(id);
    }
}
