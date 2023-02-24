import { Component, OnInit} from '@angular/core';
import {MyCartService} from '../../services/my-cart.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor(
    private MyCartService:MyCartService
  ){}
  length = 0;
  ngOnInit(): void {
    this.MyCartService.myProducts$.subscribe(products => {
      this.length = products.length;
    })
  }
}
