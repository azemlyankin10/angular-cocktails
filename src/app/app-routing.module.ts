import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { CardDetailsComponent } from './pages/card-details/card-details.component';

const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'cocktail', component: CardDetailsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
