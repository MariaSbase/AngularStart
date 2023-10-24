import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IProduct} from "./models/product";
import {products as data} from "./data/products";
import {ProductsService} from "./servises/products.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Laravel + Angular App';
  products: IProduct[] = [];

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.productsService.getUsers().subscribe(users => {
      console.log(users)
      this.products = users;
    })
  }

}
