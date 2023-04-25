import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CocktailsService } from 'src/app/services/cocktails.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
    constructor(private cocktailService: CocktailsService) {}
    searchFormControl = new FormControl('', [Validators.required]);

    onInput() {
        const value = this.searchFormControl.value ?? '';
        this.cocktailService.getDataBySearch(value);
    }
}
