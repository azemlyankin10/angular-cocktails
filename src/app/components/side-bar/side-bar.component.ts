import { Component, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Cocktail } from 'src/app/interfaces/cocktail-result';
import { LikedCocktailsService } from 'src/app/services/liked-cocktails.service';

@Component({
    selector: 'app-side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
    constructor(
        private likedCocktailsService: LikedCocktailsService,
        private drawer: MatDrawer
    ) {}

    cocktails!: Cocktail[];

    ngOnInit(): void {
        this.likedCocktailsService.likedCocktailsCollection$.subscribe(
            (data) => (this.cocktails = data)
        );
    }

    remove(id: string) {
        this.likedCocktailsService.like(id);
    }

    closeDrawer() {
        this.drawer.close();
    }
}
