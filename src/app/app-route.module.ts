import { Route, RouterModule, Routes } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { RecipiesComponent } from "./recipies/recipies.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { NgModule } from "@angular/core";
import { RecipieListComponent } from "./recipies/recipie-list/recipie-list.component";
import { RecipieItemComponent } from "./recipies/recipie-list/recipie-item/recipie-item.component";
import { RecipieDetailComponent } from "./recipies/recipie-detail/recipie-detail.component";
import { HomeComponent } from "./home/home.component";
import { RecipieEditComponent } from "./recipies/recipie-edit/recipie-edit.component";
import { NewRecipieComponent } from "./new-recipie/new-recipie.component";
import { RecipiesresolverService } from "./recipies/recipiesresolver.service";


const appRoutes: Routes = [
    { path: '', redirectTo: '/recipies', pathMatch: 'full' },
    {
        path: 'recipies', component: RecipiesComponent, resolve: [RecipiesresolverService], children:
            [
                { path: '', component: HomeComponent },
                { path: 'new', component: NewRecipieComponent },
                { path: ':id', component: RecipieDetailComponent },
                { path: ':id/edit', component: RecipieEditComponent }

            ]
    },
    { path: 'shopping-list', component: ShoppingListComponent }
];



@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRouteModule {

}