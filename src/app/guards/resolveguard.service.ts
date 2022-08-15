import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../products/models/product';
import { ProductsService } from '../products/ProductsService';

@Injectable({
  providedIn: 'root'
})
export class ResolveguardService implements Resolve<Product>{

  constructor(private product: ProductsService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Product | Observable<Product> | Promise<Product> {
    // throw new Error('Method not implemented.');
    const id = Number(route.params['productId']);
    return this.product.getProductsById('products', id)
  }
}
