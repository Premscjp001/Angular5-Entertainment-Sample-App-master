import {Component, OnInit} from '@angular/core';
import {IProduct} from './products';
import {ProductService} from './product.service';

@Component({
    templateUrl:'./product.component.html',
    styleUrls:['./product.component.css']
})

export class ProductComp implements OnInit {

    hideme = [];
    title: String = '****************Product List***************';
    showRow: Boolean = false;
    showImage: Boolean = false;
    filterProduct;
    govil = true;
    imgWidth = 50;
    products: IProduct[];

 
    constructor(private _productService: ProductService) {

    }
    showTabless(i): void {
        console.log(i);
        this.showRow = !this.showRow;
    }
    toggleImage(): void {
        this.showImage = !this.showImage

    }

    ngOnInit():void{
        this._productService.getProducts()
            .subscribe((data) => this.products = data);
    }
    onRatingClicked(message:string){
        this.title = "Product list>>>>"+message
    }
}

/*
a coding apttern in which a class receives the instance of object which it need 
from extrenal source rather than creating it
*/