import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cocktail } from 'src/app/interfaces/cocktail-result';
import { ApiService } from 'src/app/services/api.service';
import { getIngredients } from 'src/app/utils/functions/getIngredients';

@Component({
    templateUrl: './card-details.component.html',
    styleUrls: ['./card-details.component.scss'],
})
export class CardDetailsComponent implements OnInit {
    isLoading = false;
    result!: Cocktail;
    error = '';
    ingredients: string[] = [];

    constructor(
        private route: ActivatedRoute,
        private apiService: ApiService
    ) {}

    ngOnInit(): void {
        this.route.queryParams.subscribe((params) => {
            this.isLoading = true;
            this.apiService.getOneCocktail(params['cocktail']).subscribe(
                (results) => {
                    this.isLoading = false;
                    this.result = {
                        ...results.drinks[0],
                        ingredients: getIngredients(results.drinks[0]),
                    };
                },
                (error) => {
                    this.isLoading = false;
                    this.error = 'Error with getting data from API.';
                    console.error(error);
                }
            );
        });
    }
}
