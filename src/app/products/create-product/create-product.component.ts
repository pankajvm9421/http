import { Component, createPlatform, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICanDeactivate } from 'src/app/guards/GuardService';
import { ProductsService } from '../ProductsService';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit, ICanDeactivate {
  id:any=0;
  productForm!: FormGroup;
  actionName: string = '';


  
  constructor(private fb: FormBuilder, private productsvc: ProductsService, 
    private route: Router, private aroute:ActivatedRoute) { }

  ngOnInit(): void {

    
    this.createForm();
    // console.log(this.aroute)
    // this.id = this.aroute.snapshot.params['productId'];
    // console.log('id', this.id);
    // if(this.id){
    //   this.actionName = "update";
    //   this.productsvc.getProductsById('products', this.id).subscribe(
    //     el=>{
    //       this.productForm.setValue(el)
    //     }
    //   )
    // } else {
    //   this.actionName = "create";
    // }

//when component is already loaded
    // this.aroute.data.subscribe(el=>{
    //   if(el['user']){
    //     this.actionName = 'update';
    //     this.productForm.patchValue(el['user'])
    //   }
    // })

    const data = this.aroute.snapshot.data['user'];
    this.productForm.setValue(data)
  }
  createForm(){
    this.productForm = this.fb.group({
      id:[],
      productName:[''],
      productDescription:[''],
      productPrice:[],
      productQuantity:[]
    })
    
  }

  createProduct(){
    console.log(this.actionName)
    if(this.actionName == "create"){
      console.log(this.actionName)
      this.productsvc.insrtProduct('products', this.productForm.value).subscribe(el=>{
        
        this.route.navigate(['/products'])
      })
    }else {
      this.productsvc.updateProduct('products', this.productForm.value).subscribe(el=>{
      this.route.navigate(['/products'])
      })
    }

 
  }
  canDeactivate(){
    if(this.productForm.dirty){
      if(confirm("sure?")){}
    }
    return true;
  }
}
