import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from './models/product';
import { ProductsService } from './ProductsService';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:Product[]=[];

  constructor(private productSvc: ProductsService, private route: Router) { }

  ngOnInit(): void {
    this.getProductDetails();
  }
  getProductDetails(){
    this.productSvc.getProduct('products').subscribe(el=>{
      console.log(el)
      this.products = el;
    })
  }
  updateProduct(id:number){
    this.route.navigate(['update-product',id])
  }

  deleteProduct(id:number, ind:number){
    this.productSvc.deleteProduct('products', id).subscribe(el=>{
      this.products.splice(ind,1)
    })
  }
}
