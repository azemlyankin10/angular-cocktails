import { Injectable } from '@angular/core';
import {
    BehaviorSubject,
    Subject,
    debounceTime,
    distinctUntilChanged,
    switchMap,
    tap,
} from 'rxjs';
import {
    Cocktail,
    SearchCocktailResponse,
} from '../interfaces/cocktail-result';
import { ApiService } from './api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class CocktailsService {
    constructor(
        private apiService: ApiService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    cocktailsResult$ = new BehaviorSubject<Cocktail[]>([]);
    isLoading$ = new BehaviorSubject(false);
    error$ = new BehaviorSubject('');

    searchTerm$ = new Subject<string>();

    getDataByUrl() {
        const queryParams = this.route.snapshot.queryParams;
        Object.keys(queryParams).forEach((param) => {
            switch (param) {
                case 'letter':
                    return this.getDataByLetter(queryParams[param]);
                case 'search':
                    return this.getDataBySearch(queryParams[param]);
                default:
                    return;
            }
        });
    }

    getDataByLetter(letter: string) {
        this.router.navigate(['/'], { queryParams: { letter } });

        this.isLoading$.next(true);

        this.apiService
            .getDataByFirstLetter(letter)
            .subscribe(this.subscribeHandle());
    }

    getDataBySearch(text: string) {
        this.router.navigate(['/'], { queryParams: { search: text } });

        this.searchTerm$.next(text);

        this.searchTerm$
            .pipe(
                debounceTime(300),
                distinctUntilChanged(),
                switchMap((term) => {
                    this.isLoading$.next(true);
                    return this.apiService.getSearchedData(term);
                })
            )
            .subscribe(this.subscribeHandle());
    }

    private subscribeHandle() {
        const next = (results: SearchCocktailResponse) => {
            this.isLoading$.next(false);
            this.cocktailsResult$.next(results.drinks);

            this.error$.next('');
        };
        const error = (error: any) => {
            this.isLoading$.next(false);
            this.error$.next('Error with getting data from API.');
            console.error(error);
        };

        return { next, error };
    }
}
