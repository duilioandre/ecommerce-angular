import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductsService } from '../service/products.service';
import { CartService } from '../shared/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = []
  productInputName = ""
  productNameSelected = ""

  constructor(private productService: ProductsService, private cartService: CartService) {
    this.products = this.productService.products
   }

  ngOnInit(): void {
  }

  setProductNameSelected(pn: string){
    this.productNameSelected = pn
  }

  addToCart(product: Product){
    this.cartService.addItemToCart(product)
  }

}
