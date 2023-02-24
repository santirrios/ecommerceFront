import { Injectable } from '@angular/core';
import { Product } from '../models/product'
import { BehaviorSubject } from 'rxjs'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UpdateProductService {

  constructor(
    private http: HttpClient
  ) { }

  products: Product[] = []
  private myProducts = new BehaviorSubject<Product[]>([])
  myProducts$ = this.myProducts.asObservable()

  reloadData() {
    this.http.get<Product[]>("https://localhost:7007/product/get")
      .subscribe(data => {
        this.products =data;
        this.myProducts.next(this.products);
        console.log(this.products)
      })
  }
}
