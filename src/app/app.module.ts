import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './views/main/main.component';
import { NavComponent } from './generals/nav/nav.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { ConfigureProductsComponent } from './views/configure-products/configure-products.component';
import { ProductComponent } from './views/main/components/product/product.component';
import { ProductDetailComponent } from './views/product-detail/product-detail.component';
import { AddProComponent } from './views/configure-products/components/add-pro/add-pro.component';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeleteProComponent } from './views/configure-products/components/delete-pro/delete-pro.component';
import { UpdateProComponent } from './views/configure-products/components/update-pro/update-pro.component';
import { ListProComponent } from './views/configure-products/components/list-pro/list-pro.component';
import { ShoppingCartComponent } from './views/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavComponent,
    NotFoundComponent,
    ConfigureProductsComponent,
    ProductComponent,
    ProductDetailComponent,
    AddProComponent,
    DeleteProComponent,
    UpdateProComponent,
    ListProComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
