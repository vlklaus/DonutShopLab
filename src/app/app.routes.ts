import { Routes } from '@angular/router';
import { DonutsComponent } from './components/donuts/donuts.component';
import { DonutDetailsComponent } from './components/donut-details/donut-details.component';
import { CartComponent } from './components/cart/cart.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    {path: "", component: DonutsComponent},
    {path: "cart", component: CartComponent},
    {path: ":id", component: DonutDetailsComponent},
    {path: "**", component: NotFoundComponent}

];
