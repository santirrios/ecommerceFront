import { Component,Input, OnInit} from '@angular/core';
import {Product} from '../../../../models/product'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.product.id)
  }
@Input()product:Product ={
  id:'',
  category:'',
  description:'',
  name:'',
  images:[],
  price:""
}


}
