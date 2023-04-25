import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Cocktail } from 'src/app/interfaces/cocktail-result';
import { CocktailsService } from 'src/app/services/cocktails.service';

@Component({
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
    constructor(private cocktailService: CocktailsService) {}

    data!: Cocktail[];
    isLoading = false;
    error = '';

    chooseLetter = new Subject<string | null>();

    ngOnInit(): void {
        this.cocktailService.getDataByUrl();

        this.cocktailService.isLoading$.subscribe(
            (isLoading) => (this.isLoading = isLoading)
        );
        this.cocktailService.cocktailsResult$.subscribe(
            (result) => (this.data = result)
        );
        this.cocktailService.error$.subscribe((error) => (this.error = error));
    }
}
