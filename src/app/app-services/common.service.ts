import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CommonService {
  url = 'https://uxproducts-67664.firebaseio.com/productsNew.json';
  constructor(private http: HttpClient) { }

  saveProducts(products: any[]){
    return this.http.post(this.url, products);
  }

















}
