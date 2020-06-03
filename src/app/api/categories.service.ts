import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  all: any;

  constructor(private API: ConfigService, private http: HttpClient) {
    this.http
      .get(this.API.CATEGORIES.GET())
      .toPromise()
      .then((data) => {
        this.all = data;
      });
  }
}
