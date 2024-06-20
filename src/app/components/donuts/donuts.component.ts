import { Component } from '@angular/core';
import { DonutsModel } from '../../models/donuts';
import { RouterLink } from '@angular/router';
import { DonutsService } from '../../services/donuts.service';

@Component({
  selector: 'app-donuts',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './donuts.component.html',
  styleUrl: './donuts.component.css'
})
export class DonutsComponent {
  constructor (private _donutsService: DonutsService) {}

  allDonuts: DonutsModel = {} as DonutsModel;
  donutId: number = 1;

  ngOnInit() {
    this._donutsService.getDonuts().subscribe((response: DonutsModel) => {
      console.log(response);
      this.allDonuts = response;
    })
  };
}
