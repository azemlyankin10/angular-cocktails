import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CocktailsService } from 'src/app/services/cocktails.service';

@Component({
    selector: 'app-alphabet-buttons',
    templateUrl: './alphabet-buttons.component.html',
    styleUrls: ['./alphabet-buttons.component.scss'],
})
export class AlphabetButtonsComponent {
    constructor(private cocktailService: CocktailsService) {}

    alphabet = [
        { letter: 'A', color: '#ff0000' },
        { letter: 'B', color: '#00ff00' },
        { letter: 'C', color: '#0000ff' },
        { letter: 'D', color: '#ff00ff' },
        { letter: 'E', color: '#00ffff' },
        { letter: 'F', color: '#ffff00' },
        { letter: 'G', color: '#ff8000' },
        { letter: 'H', color: '#0080ff' },
        { letter: 'I', color: '#8000ff' },
        { letter: 'J', color: '#ff0080' },
        { letter: 'K', color: '#80ff00' },
        { letter: 'L', color: '#008000' },
        { letter: 'M', color: '#800000' },
        { letter: 'N', color: '#800080' },
        { letter: 'O', color: '#008080' },
        { letter: 'P', color: '#808000' },
        { letter: 'Q', color: '#804000' },
        { letter: 'R', color: '#408000' },
        { letter: 'S', color: '#804080' },
        { letter: 'T', color: '#808080' },
        { letter: 'U', color: '#c0c0c0' },
        { letter: 'V', color: '#ff8080' },
        { letter: 'W', color: '#80ff80' },
        { letter: 'X', color: '#80c0ff' },
        { letter: 'Y', color: '#ff80ff' },
        { letter: 'Z', color: '#c0c0ff' },
    ];

    onClick(letter: string) {
        this.cocktailService.getDataByLetter(letter);
    }
}
