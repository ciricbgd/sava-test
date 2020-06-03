import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient } from '@angular/common/http';
import { Product, ResultItem } from '../common/interfaces';

declare function handle(product: any): any;

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  searchResult = [];
  public emptySearch() {
    this.searchResult = [];
  }

  search(q) {
    this.searchResult = [];
    this.http
      .get<Product[]>(this.API.PRODUCTS.SEARCH(q))
      .toPromise()
      .then((data) => {
        const searchRes = [];

        data.forEach((product) => {
          if (searchRes[product.categoryId] === undefined) {
            searchRes[product.categoryId] = [];
          }
          searchRes[product.categoryId].push(product);
        });

        searchRes.forEach((res) => {
          //For each result category

          const newRes = [];

          res.forEach((product) => {
            newRes.push(handle(product));
          });

          if (this.searchResult[res[0].categoryId] === undefined) {
            const newResult = {
              categoryId: res[0].categoryId,
              category: res[0].categoy,
              products: newRes,
            };
            this.searchResult[res[0].categoryId] = newResult;
          }
        });
      });
  }

  constructor(private API: ConfigService, private http: HttpClient) {}
}
