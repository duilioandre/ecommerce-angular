import { Injectable } from '@angular/core';
import { Product } from 'src/app/model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems:Product[] =[]

  constructor() { }

  addItemToCart(product: Product){
    this.cartItems.push(product)
  }

  getCartIems(){
    return this.cartItems
  }
}
