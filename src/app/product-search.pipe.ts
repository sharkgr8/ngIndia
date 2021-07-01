import { IProduct } from './data/IProduct';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productSearch'
})
export class ProductSearchPipe implements PipeTransform {

  transform(value: IProduct[], args: string): IProduct[] {
    if(!args) {
      return value;
    } else {
      return value.filter((product: IProduct) => product.productName.toLowerCase().indexOf(args) > -1);
    }
  }

}
