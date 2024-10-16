import { Component } from '@angular/core';
import { GetserviseService } from '../../getservise.service';
import { iProduct } from '../../intereface/elementi';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  elemento: iProduct[] = [];

  constructor(private elementiSvc: GetserviseService) {}

  ngOnInit() {
    this.elementiSvc.getAllElement().subscribe((singolEll) => {
      this.elemento = singolEll;
      console.log(this.elemento);
    });
  }
  save(product: iProduct) {
    this.elementiSvc.addToCard(product);
  }
}
