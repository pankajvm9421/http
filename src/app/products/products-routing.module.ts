import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardService } from '../guards/GuardService';
import { ResolveguardService } from '../guards/resolveguard.service';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductsComponent } from './products.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  { path: '', component: ProductsComponent, pathMatch:'full' },
  { path: 'create-product', component: CreateProductComponent },
  { path: 'update-product/:productId', canDeactivate: [GuardService],
  resolve: {user: ResolveguardService},
  component: CreateProductComponent }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
