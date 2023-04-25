import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject, Subject, filter, switchMap } from 'rxjs';
import { Cocktail } from '../interfaces/cocktail-result';

const LIKED_STORAGE_KEY = 'liked';

@Injectable({
    providedIn: 'root',
})
export class LikedCocktailsService {
    constructor(private apiService: ApiService) {
        this.addLikedElemToCollection();
    }

    likedCollection: Cocktail[] = [];
    likedCocktailsCollection$ = new BehaviorSubject<Cocktail[]>([]);
    likedIds$ = new Subject<string>();

    init() {
        const localData = JSON.parse(
            localStorage.getItem(LIKED_STORAGE_KEY) ?? '[]'
        );
        this.likedCollection = localData;
        this.likedCocktailsCollection$.next(localData);
    }

    like(id: string) {
        this.likedIds$.next(id);
    }

    private addLikedElemToCollection() {
        this.likedIds$
            .pipe(switchMap((id) => this.apiService.getOneCocktail(id)))
            .subscribe((data) => {
                const existedElem = this.likedCollection.filter(
                    (el) => el.idDrink === data.drinks[0].idDrink
                );

                if (existedElem.length > 0) {
                    this.removeLikedElemFromCollection(data.drinks[0].idDrink);
                    return;
                }
                this.likedCollection.push(data.drinks[0]);
                this.pushLikedCollection();
            });
    }

    private removeLikedElemFromCollection(id: string) {
        this.likedCollection = this.likedCollection.filter(
            (el) => el.idDrink !== id
        );
        this.pushLikedCollection();
    }

    private pushLikedCollection() {
        this.likedCocktailsCollection$.next(this.likedCollection);

        localStorage.setItem(
            LIKED_STORAGE_KEY,
            JSON.stringify(this.likedCollection)
        );
    }
}
