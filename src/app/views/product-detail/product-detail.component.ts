import { Component,OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http'

import {Product} from '../../models/product'
import {MyCartService} from '../../services/my-cart.service'


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  
  constructor(
    private route:ActivatedRoute,
    private http:HttpClient,
    private MyCartService:MyCartService
  ){}
  productId:string|null = null;
  product:Product ={
    id:"",
    name:"",
    description:"",
    category:"",
    images:[],
    price:""
  };
  id:string|null="";
  cantidadImagenes =0;
  contadorImagenes = 0;
  arrayCantidadImages:number[]=[]
  

  ngOnInit(): void {
    this.route.paramMap
    .subscribe(params=>{
      this.id = params.get("id")
      if(this.id){
        this.http.get<Product>(`https://localhost:7007/product/get/${this.id}`)
        .subscribe(data => {
          this.product = data;
          this.cantidadImagenes = data.images.length;
          for(let i = 0; i < this.cantidadImagenes; i++){
            this.arrayCantidadImages.push(i)
          }
        })
      }
    })
  }
  nextPicture(){
    if(this.contadorImagenes< this.cantidadImagenes-1){
      this.contadorImagenes++;
      console.log(this.contadorImagenes)
    }
  }
  previousPicture(){
    if(this.contadorImagenes>0){
      this.contadorImagenes--;
      console.log(this.contadorImagenes)
    }
  }
  addToCart(){
    this.MyCartService.addProduct(this.product);
  }
  clickCircle(i:number){
    this.contadorImagenes=i;
  }

}
