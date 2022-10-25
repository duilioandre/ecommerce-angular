import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product.model';

@Pipe({
  name: 'searchProduct'
})
export class SearchProductPipe implements PipeTransform {

  transform(products: Product[], productName: string): any{
    if ( productName.length === 0 || productName === "" || productName === undefined) return products;
    return products.filter(product => product.name.toLowerCase().includes(productName.toLowerCase()))
  }

}
