import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from './models/product';


@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  BaseUrl: string = "http://localhost:3000/"
  constructor(private http: HttpClient) { }

  insrtProduct(endPoint:string, product:Product):Observable<any>{
    // let headers = new HttpHeaders();
    // headers = headers.set("content-type", "application/json");
    return this.http.post(this.BaseUrl+endPoint, product, {"headers":{}})
  }

  getProduct(endPoint:string):Observable<any>{
    // let headers = new HttpHeaders();
    // headers = headers.set("content-type", "application/json");
    return this.http.get<Product[]>(this.BaseUrl+endPoint, {"headers":{}})
  }

  deleteProduct(endPoint:string, id:number){
    // let headers = new HttpHeaders();
    // headers = headers.set("content-type", "application/json");
    return this.http.delete<Product[]>(this.BaseUrl+endPoint+"/"+id, {"headers":{}})
  }
  getProductsById(endPoint:string, id:number){
    // let headers = new HttpHeaders();
    // headers = headers.set("content-type", "application/json");
    return this.http.get<Product>(this.BaseUrl+endPoint+"/"+id, {"headers":{}})
  }

  updateProduct(endPoint:string,product:Product){
    // let headers = new HttpHeaders();
    // headers = headers.set("content-type", "application/json");
    return this.http.put(this.BaseUrl+endPoint+"/"+product.id,product,{"headers":{}})
  }
}
