import { Component } from '@angular/core';
import { iProduct } from '../../intereface/elementi';
import { GetserviseService } from '../../getservise.service';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrl: './carrello.component.scss',
})
export class CarrelloComponent {
  preferiti: iProduct[] = [];
  constructor(private elementiSvc: GetserviseService) {}

  ngOnInit() {
    this.elementiSvc.elemento$.subscribe((elemento) => {
      this.preferiti.push(elemento);
      console.log(this.preferiti);
    });
  }
}
