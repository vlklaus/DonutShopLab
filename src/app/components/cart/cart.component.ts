import { Component } from '@angular/core';
import { DonutsService } from '../../services/donuts.service';
import { DonutDetailsModel } from '../../models/donut-details';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor (private _donutsService: DonutsService) {}

  getCart(): DonutDetailsModel [] {
    return this._donutsService.cart;
  }

  deleteItem(d: DonutDetailsModel) {
    this._donutsService.removeFromCart(d);
  }

  resetCart():void {
    this._donutsService.resetCart();
  }

  getCalories(donutCart: DonutDetailsModel []): number {
    let calorieCount: number = 0;
    
    donutCart.forEach((d: DonutDetailsModel) => {
      calorieCount += d.calories;
    });
    return calorieCount;

    //return this._donutService.cart.reduce((total: number, current: DonutDetailsModel) => total + current.calories, 0)
  }

  getCartDistinct(): DonutDetailsModel [] {
    let map = new Map(this._donutsService.cart.map(pos => [pos.id, pos]));
    return [...map.values()];
  }

  getItemQuantity(d: DonutDetailsModel): number {
    return this._donutsService.cart.reduce((total: number, current: DonutDetailsModel) => current == d ? total + 1 : total, 0) // if current item looking at equ alto current item llooiking for, make item go up by one, if not make go up by zero; starting ata 0
  }// ternary operators? ... is spread operator
}
