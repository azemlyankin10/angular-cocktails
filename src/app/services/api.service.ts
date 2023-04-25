import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
    Cocktail,
    FilteredCategory,
    SearchCocktailResponse,
} from '../interfaces/cocktail-result';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    pipe(arg0: any, arg1: any, arg2: any) {
        throw new Error('Method not implemented.');
    }
    constructor(private http: HttpClient) {}

    getOneCocktail = (id: string) =>
        this.http.get<{ drinks: Cocktail[] }>(
            `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );

    getSearchedData = (term: string) =>
        this.http.get<SearchCocktailResponse>(
            `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${term}`
        );

    getDataByFirstLetter = (letter: string) =>
        this.http.get<SearchCocktailResponse>(
            `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
        );

    getDataByAlcoholic = (value: string) =>
        this.http.get<SearchCocktailResponse>(
            `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${value}`
        );

    getDataByCategory = (category: string) =>
        this.http.get<SearchCocktailResponse>(
            `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`
        );

    getCategoryList = (list: FilteredCategory) =>
        this.http.get(
            `https://www.thecocktaildb.com/api/json/v1/1/list.php?${list}=list`
        );
}
