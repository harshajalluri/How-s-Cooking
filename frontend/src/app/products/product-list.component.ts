import { Component, OnInit } from '@angular/core';
import { Iproduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector : 'pm-products',
    templateUrl : './product-list.component.html',
    styleUrls : ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
    pageTitle: string = 'Restraunts List';
    imageWidth : number=40;
    imageMargin : number=2;
    showImage : boolean = false;
    _listFilter : string;
    errorMessage: string;
    filteredproducts : Iproduct[];
    products : Iproduct[] = [] ;
    
    get listFilter() : string{
        return this._listFilter;
    }
    set listFilter(value:string){
        this._listFilter = value;
        this.filteredproducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    constructor(private productService : ProductService){
        
    }
    performFilter(filterBy : string): Iproduct[]{
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product :Iproduct) =>
        product.ProductName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    ngOnInit():void{
         this.productService.getProducts().subscribe(data=>{
             console.log(data);
                this.products = data;
                console.log(this.products);
                this.filteredproducts=this.products;
            });
        
    }

    onRatingClicked(message:string): void {
        this.pageTitle = message;
    }
}