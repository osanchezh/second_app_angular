import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { IDetailProduct, IProduct } from './models/cart.interface';
import { IApiResponseProduct } from './models/product-api. interface.';

@Injectable({ providedIn: 'root' })
export class CartService {
	private _productsDetail: IDetailProduct[] = [];
	private _count = 0;

	cartObservable$ = new Subject<number>();

	products$=new  Subject<IProduct>;
 
	addToCard(product: IProduct) {
		const idProduct = product.id;
		const index = this._productsDetail.findIndex(({ product }) => product.id === idProduct);

		if (index === -1) {
			this._productsDetail.push({ product, count: 1, total: product.price });
			this._updateCount();
		} else {
			this._updateProduct(index);
		}

		this.products$.next(product);
	}

	private _updateProduct(index: number) {
		const detailProduct = this._productsDetail[index];
		detailProduct.count = detailProduct.count++;
		detailProduct.total = detailProduct.count * detailProduct.product.price;

		this._updateCount();
	}

	private _updateCount() {
		this._count = this._count + 1;
		this.cartObservable$.next(this._count);
	}

	public getProductsDetail():Observable<IProduct[]>{
		let arr:IProduct[]=[]; 
		this._productsDetail.forEach((product) => {
			arr.push(product.product);
			console.log(product.product,"ejemplo");
		});
		return of(arr);

	}
}
