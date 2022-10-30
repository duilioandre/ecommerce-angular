import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product.model';

@Pipe({
  name: 'searchProduct'
})
export class SearchProductPipe implements PipeTransform {

  transform(products: Product[], productInputName: string): any{
    if ( productInputName.length === 0 || productInputName === "" || productInputName === undefined) return products;
    return products.filter(product => product.name.toLowerCase().includes(productInputName.toLowerCase()))
  }

}
