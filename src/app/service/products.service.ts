import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor() { }

  private _products: Product[] = [
    {code:"001", category:1, name:"prodotto 1", description:"description 1", picture:"", price:100},
    {code:"002", category:2, name:"prodotto 2", description:"description 2", picture:"", price:200},
    {code:"003", category:1, name:"prodotto 3", description:"description 3", picture:"", price:300},
    {code:"004", category:2, name:"prodotto 4", description:"description 4", picture:"", price:400},
    {code:"005", category:2, name:"prodotto 5", description:"description 5", picture:"", price:500},
    {code:"006", category:1, name:"prodotto 6", description:"description 6", picture:"", price:250},
  ]

  get products() {
    return [...this._products]
  }
}
