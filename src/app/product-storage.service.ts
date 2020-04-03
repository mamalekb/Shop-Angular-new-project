import { Injectable } from '@angular/core';
import {Product} from './shop/products/Product';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductStorageService {

  constructor() {
  }

  private products: Product[] = [
    {id: 1, name: 'Product1', price: 9.00, quantity: 250, available: true},
    {id: 2, name: 'Product2', price: 15.00, quantity: 142, available: true},
    {id: 3, name: 'Product3', price: 23.00, quantity: 50, available: false},
  ];

  private idCount = 4;

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  removeProduct(id: number) {
    const productIndex = this.products.findIndex(p => p.id === id);
    this.products.splice(productIndex, 1);
  }

   saveProduct(product: Product) {
    if (product.id) {
      const productIndex = this.products.findIndex(p => p.id === product.id);
      this.products[productIndex] = product;
    } else {
      product.id = this.idCount;
      this.products.push(product);
      this.idCount++;
    }
  }

  getProduct(id: number) {
    const productIndex = this.products.findIndex(p => p.id === id);
    return {...this.products[productIndex]};
  }
}
