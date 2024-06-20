import { Component } from '@angular/core';
import { DonutsModel, Result } from '../../models/donuts';
import { DonutsService } from '../../services/donuts.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DonutDetailsModel } from '../../models/donut-details';

@Component({
  selector: 'app-donut-details',
  standalone: true,
  imports: [],
  templateUrl: './donut-details.component.html',
  styleUrl: './donut-details.component.css'
})
export class DonutDetailsComponent {
  cart: any;
  constructor(private activatedRoute: ActivatedRoute, private _donutsService: DonutsService) {}

  displayDonut: DonutDetailsModel = {} as DonutDetailsModel;

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      let id: number = Number(paramMap.get("id"));
      //console.log(id);
      this._donutsService.getDonutById(id).subscribe((response: DonutDetailsModel) => {
        //console.log(response);
        this.displayDonut = response;
      });
    });
  }

  addToCart() {
    this._donutsService.addToCart(this.displayDonut);    
  }

}
