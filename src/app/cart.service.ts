import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products';

// 依存性の注入
// 'root': クラスはアプリケーション全体で単一のインスタンスが共有されるように提供されます。つまり、クラスのインスタンスはアプリケーション全体で共有され、どこからでもアクセス可能です。
// 'any': クラスはAngularコンポーネントやサービスのモジュール内で提供されます。つまり、そのモジュール内でインスタンスが共有され、そのモジュール内のコンポーネントやサービスからのみアクセス可能です。
@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];
  constructor(private http: HttpClient) {}

  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      './assets/shipping.json'
    );
  }

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
