import { Route, RouterModule, Routes } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { RecipiesComponent } from "./recipies/recipies.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { NgModule } from "@angular/core";
import { RecipieListComponent } from "./recipies/recipie-list/recipie-list.component";
import { RecipieItemComponent } from "./recipies/recipie-list/recipie-item/recipie-item.component";
import { RecipieDetailComponent } from "./recipies/recipie-detail/recipie-detail.component";
import { HomeComponent } from "./home/home.component";


const appRoutes: Routes = [
    { path: '', redirectTo: '/recipies', pathMatch: 'full' },
    {
        path: 'recipies', component: RecipiesComponent, children:
            [
                { path: '', component: HomeComponent },
                { path: ':id', component: RecipieDetailComponent },
                // { path: 'recipies-list', component: RecipieListComponent }
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