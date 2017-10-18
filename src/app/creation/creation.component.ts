import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Product } from './../product';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent implements OnInit {
  newProduct: Product = new Product();
  products: Array<Product>;

  constructor(
    private _productService: ProductService,
    private _router: Router
  ) {
    this._productService.productsObservable.subscribe( (products) => {
      this.products = products;
    });
  }

  ngOnInit() {
    this.newProduct = new Product();
  }

  create() {
    if (this.newProduct.imgUrl.length < 1 ||
      this.newProduct.imgUrl === 'null' ||
      this.newProduct.imgUrl === null) {
    this.newProduct.imgUrl = null;
  }
  console.log('clicked');
  this.products.push(this.newProduct);
  this._productService.createProduct(this.products);
  this.newProduct = new Product();
  this._router.navigate(['/products']);
  }
}
