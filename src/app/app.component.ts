import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DonutsComponent } from './components/donuts/donuts.component';
import { DonutDetailsComponent } from './components/donut-details/donut-details.component';
import { DonutsService } from './services/donuts.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DonutShop';

  constructor(private _donutService: DonutsService) {}

  getCartCount(): number {
    return this._donutService.cart.length;
  }

}
