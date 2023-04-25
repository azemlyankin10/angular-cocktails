import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MainComponent } from './pages/main/main.component';
import { SearchComponent } from './components/search/search.component';
import { CardComponent } from './components/card/card.component';
import { CardGridComponent } from './components/card-grid/card-grid.component';
import { MatListModule } from '@angular/material/list';
import { NgForm } from '@angular/forms';
import { AlphabetButtonsComponent } from './components/categories/alphabet-buttons/alphabet-buttons.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CategoriesComponent } from './components/categories/categories.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardDetailsComponent } from './pages/card-details/card-details.component';
import { MatBadgeModule } from '@angular/material/badge';
import { RouterModule } from '@angular/router';
@NgModule({
    declarations: [
        AppComponent,
        SideBarComponent,
        MainComponent,
        SearchComponent,
        CardComponent,
        CardGridComponent,
        AlphabetButtonsComponent,
        CategoriesComponent,
        CardDetailsComponent,
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        HttpClientModule,
        AppRoutingModule,
        MatSidenavModule,
        MatCardModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatListModule,
        MatButtonModule,
        MatIconModule,
        MatButtonToggleModule,
        MatBadgeModule,
        RouterModule,
    ],
    providers: [NgForm],
    bootstrap: [AppComponent],
})
export class AppModule {}
