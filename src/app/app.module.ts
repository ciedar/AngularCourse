import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipiesComponent } from './recipies/recipies.component';
import { RecipieDetailComponent } from './recipies/recipie-detail/recipie-detail.component';
import { RecipieListComponent } from './recipies/recipie-list/recipie-list.component';
import { RecipieItemComponent } from './recipies/recipie-list/recipie-item/recipie-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirectiveDirective } from './shared/dropdown-directive.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RouterModule } from '@angular/router'
import { AppRouteModule } from './app-route.module';
import { HomeComponent } from './home/home.component';
import { RecipieEditComponent } from './recipies/recipie-edit/recipie-edit.component';
import { NewRecipieComponent } from './new-recipie/new-recipie.component';
import { RecipieService } from './recipies/recipies.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipiesComponent,
    RecipieDetailComponent,
    RecipieListComponent,
    RecipieItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirectiveDirective,
    HomeComponent,
    RecipieEditComponent,
    NewRecipieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouteModule,
    ReactiveFormsModule
  ],
  providers: [ShoppingListService, AppRouteModule, RecipieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
