import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/product.model';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product?: Product;
  productCode?: string | null


  constructor(private activeRoute: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productCode = this.activeRoute.snapshot.paramMap.get('code')
    this.product = this.productsService.products.find(p => p.code == this.productCode)
  }

}
