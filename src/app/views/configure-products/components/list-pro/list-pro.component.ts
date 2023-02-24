import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Product, CreateProduct } from '../../../../models/product'
import { ToastrService } from 'ngx-toastr';

import { UpdateProductService } from '../../../../services/update-product.service'

@Component({
  selector: 'app-list-pro',
  templateUrl: './list-pro.component.html',
  styleUrls: ['./list-pro.component.css']
})
export class ListProComponent implements OnInit {
  constructor(
    private ToastrService: ToastrService,
    private http: HttpClient,
    private UpdateProductService: UpdateProductService
  ) { }
  products: Product[] = []
  cantidadImagenes = 1;
  cantidad: number[] = [0];
  product: CreateProduct = {
    images: [],
    name: '',
    description: '',
    category: '',
    price: '',
  }
  id = "";

  ngOnInit(): void {
    this.UpdateProductService.myProducts$.subscribe(products => {
      this.products = products;
    })
    this.UpdateProductService.reloadData();
  }
  deleteProduct(id: string) {
    if (id != "") {
      this.http.delete(`https://localhost:7007/product/delete/${id}`)
        .subscribe(data => {
          console.log(data);
          id = "";
          this.ToastrService.success('se elimino el producto')
          this.UpdateProductService.reloadData();
        })
    } else {
      this.ToastrService.warning("por favor ingrese el id para eliminar")
    }
  }
  incrementImage() {
    if (this.cantidadImagenes < 10) {
      this.cantidadImagenes++;
      this.cantidad = [];
      for (let i = 0; i < this.cantidadImagenes; i++) {
        this.cantidad.push(i)
      }
    }

  }
  decreaseImage() {
    if (this.cantidadImagenes > 1) {
      this.cantidadImagenes--;
      this.cantidad = [];
      for (let i = 0; i < this.cantidadImagenes; i++) {
        this.cantidad.push(i)
      }
    }
  }
  updateData() {
    if (this.product.name != '' && this.product.category != '' && this.product.description != '' && this.product.price != '' && this.product.images.length != 0) {
      this.product.price = this.product.price.toString();
      this.product.images = this.product.images.slice(0,this.cantidadImagenes);
      this.http.put(`https://localhost:7007/product/put/${this.id}`, this.product)
        .subscribe(data => {
          console.log('updated', data)
          this.ToastrService.success('Se actualizo el producto correctamente')
          this.product = {
            images: [],
            name: '',
            description: '',
            category: '',
            price: '',
          }
          this.cantidadImagenes = 1;
          this.UpdateProductService.reloadData();
        })

    } else {
      this.ToastrService.warning('llene todos los campos por favor')
    }
  }

  openModal(product: Product) {
    this.id = product.id;
    this.product = product;
    this.cantidadImagenes = this.product.images.length;
    this.cantidad = [];
    for (let i = 0; i < this.cantidadImagenes; i++) {
      this.cantidad.push(i)
    }
  }

}
