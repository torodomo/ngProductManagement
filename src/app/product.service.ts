import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product';


@Injectable()
export class ProductService {

  productsObservable = new BehaviorSubject(null);

  constructor() { }

  createProduct(products: Array<Product>) {
    this.productsObservable.next(products);
  }

}
