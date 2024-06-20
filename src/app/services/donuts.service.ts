import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DonutsModel } from '../models/donuts';
import { DonutDetailsModel } from '../models/donut-details';

@Injectable({
  providedIn: 'root'
})
export class DonutsService {

  constructor(private http:HttpClient) { }
  
  getDonuts(): Observable<DonutsModel> {
    return this.http.get<DonutsModel>("https://grandcircusco.github.io/demo-apis/donuts.json")
  }
  
  getDonutById(id: number): Observable<DonutDetailsModel> {
    return this.http.get<DonutDetailsModel>(`https://grandcircusco.github.io/demo-apis/donuts/${id}.json`)
  }
  
  cart: DonutDetailsModel [] = [];

  addToCart(d: DonutDetailsModel) {
    this.cart.push(d);
    console.log(this.cart); 
  }

  removeFromCart(d: DonutDetailsModel) {
    let index: number = this.cart.findIndex(x => x.id == d.id);
    this.cart.splice(index,1);
  }

  resetCart(): void {
    this.cart = [];
  }


}
