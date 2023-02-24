import { Component,OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Product} from '../../models/product'

import { UpdateProductService } from '../../services/update-product.service'
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(
    private http:HttpClient,
    private UpdateProductService:UpdateProductService
  ){}
  products:Product[] = [];
  lenghtProducts = 0;

  ngOnInit(): void {
    this.UpdateProductService.myProducts$.subscribe(products => {
      this.products = products;
    })
    this.UpdateProductService.reloadData();
    this.lenghtProducts = this.products.length;

  }


}
