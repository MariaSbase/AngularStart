import {Injectable} from '@angular/core'
import {HttpClient} from "@angular/common/http";
import {IProduct} from "../models/product";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('http://angularlara/auth')
  }
}
