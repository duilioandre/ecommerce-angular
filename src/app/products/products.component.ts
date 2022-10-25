import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = []
  productName = ""

  constructor(private productService: ProductsService) {
    this.products = this.productService.products
   }

  ngOnInit(): void {
  }

}
