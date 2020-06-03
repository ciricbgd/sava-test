import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../api/config.service';
import { CategoriesService } from '../api/categories.service';
import { ProductsService } from '../api/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public query = '';

  public searchInput() {
    let oldQuery = this.query;
    setTimeout(() => {
      if (oldQuery === this.query) {
        //Stopped typing for a second (then send API call)
        this.product.search(this.query);
      }
    }, 1000);
  }

  constructor(
    public product: ProductsService,
    private categories: CategoriesService
  ) {}

  ngOnInit(): void {}
}
