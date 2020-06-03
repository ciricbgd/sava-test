import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  // Endpoints
  public BASEURL;

  CATEGORIES = {
    GET: () => {
      return `${this.BASEURL}/products/categories`;
    },
  };

  PRODUCTS = {
    SEARCH: (q) => {
      return `${this.BASEURL}/products/search?query=${q}`;
    },
  };

  constructor() {
    this.BASEURL = `https://pcsa57ebsj.execute-api.us-east-1.amazonaws.com/api`;
  }
}
