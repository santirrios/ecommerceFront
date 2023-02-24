import { Component} from '@angular/core';
import {HttpClient} from '@angular/common/http'

import {CreateProduct} from'../../../../models/product'
import { ToastrService } from 'ngx-toastr';

import {UpdateProductService} from '../../../../services/update-product.service'

@Component({
  selector: 'app-add-pro',
  templateUrl: './add-pro.component.html',
  styleUrls: ['./add-pro.component.css']
})
export class AddProComponent {
  constructor(
    private ToastrService:ToastrService,
    private http:HttpClient,
    private UpdateProductService:UpdateProductService
  ){}

  cantidadImagenes = 1;
  cantidad: number[] = [0];
  product:CreateProduct={
    images:[],
    name:'',
    description:'',
    category:'',
    price:'',
  }
  incrementImage(){
    if (this.cantidadImagenes < 10) {
      this.cantidadImagenes++;
      this.cantidad = [];
      for (let i = 0; i < this.cantidadImagenes; i++) {
        this.cantidad.push(i)
      }
    }
    
  }
  decreaseImage(){
    if (this.cantidadImagenes > 1) {
      this.cantidadImagenes--;
      this.cantidad = [];
      for (let i = 0; i < this.cantidadImagenes; i++) {
        this.cantidad.push(i)
      }
    }
  }

  sendData(){
    if(this.product.name!='' && this.product.category!='' && this.product.description!='' && this.product.price!='' && this.product.images.length!=0){
      this.product.price = this.product.price.toString();
      this.product.images = this.product.images.slice(0,this.cantidadImagenes);
      this.http.post('https://localhost:7007/product/post',this.product)
      .subscribe(data => {
        console.log('CREATED',data)
        this.ToastrService.success('Se agrego el producto correctamente','SUCCESS')
        this.product={
          images:[],
          name:'',
          description:'',
          category:'',
          price:'',
        }
        this.cantidadImagenes=1;
        this.cantidad=[0];
        this.UpdateProductService.reloadData();
        
      })
      
    }else{
      this.ToastrService.warning('llene todos los campos por favor')
    }

  }
}
