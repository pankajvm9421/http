import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../ProductsService';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  // updateProductForm!: FormGroup;
  // id: any= 0;
  constructor(private productsvc: ProductsService, private fb:FormBuilder, private route:ActivatedRoute) { }

  ngOnInit(): void {
    // this.updateProduct();
    // this.createupdateProductForm();
    // this.id= this.route.snapshot.params['productId'];
  }
  // createupdateProductForm(){
  //   this.updateProductForm = this.fb.group({
  //     productName:[''],
  //     productDescription:[''],
  //     productPrice:[],
  //     productQuantity:[]

  //   })
  // }


  // updateProduct(id:number){
  //   this.productsvc.updateProduct('update-product',this.id)
  // }


}
