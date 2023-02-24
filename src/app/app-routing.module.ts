import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './views/main/main.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { ConfigureProductsComponent } from './views/configure-products/configure-products.component';
import { ProductDetailComponent } from './views/product-detail/product-detail.component';
import { ShoppingCartComponent } from './views/shopping-cart/shopping-cart.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/main',
    pathMatch:'full'
  },
  {
    path:'main',
    component:MainComponent
  },
  {
    path:'configureproducts',
    component:ConfigureProductsComponent
  },
  {
    path:'shoppingcart',
    component:ShoppingCartComponent
  },
  {
    path:'product/:id',
    component:ProductDetailComponent
  },
  {
    path:'**',
    component:NotFoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
