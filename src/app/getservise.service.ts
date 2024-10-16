import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';
import { iProduct, Root } from './intereface/elementi';

@Injectable({
  providedIn: 'root',
})
export class GetserviseService {
  apiUrl: string = 'https://dummyjson.com/products';

  elemento$ = new Subject<iProduct>();

  constructor(private http: HttpClient) {}

  getAllElement() {
    return this.http
      .get<Root>(this.apiUrl)
      .pipe(map((response: Root) => response.products));
  }

  addToCard(prodotto: iProduct) {
    this.elemento$.next(prodotto);
  }
}
