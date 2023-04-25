import { Component, OnInit } from '@angular/core';
import { LikedCocktailsService } from './services/liked-cocktails.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    constructor(private likedCocktailsService: LikedCocktailsService) {}

    likedCocktails = 0;

    ngOnInit(): void {
        this.likedCocktailsService.init();

        this.likedCocktailsService.likedCocktailsCollection$.subscribe(
            (data) => {
                this.likedCocktails = data.length;
            }
        );
    }
}
