import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Cocktail } from 'src/app/interfaces/cocktail-result';

@Component({
    selector: 'app-card-grid',
    templateUrl: './card-grid.component.html',
    styleUrls: ['./card-grid.component.scss'],
})
export class CardGridComponent {
    @Input() cardsData: Cocktail[] = [];
}
