import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HttpClientModule } from '@angular/common/http'

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateProductComponent } from './update-product/update-product.component';


@NgModule({
  declarations: [
    ProductsComponent,
    CreateProductComponent,
    UpdateProductComponent
    
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    RouterModule,
    ReactiveFormsModule
    // HttpClientModule
    
  ]

})
export class ProductsModule { }
