import { Injectable } from '@angular/core';
import {  Http, Response} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/do'; 
import 'rxjs/add/operator/catch'; 

import { Iproduct } from './product';

@Injectable()
export class ProductService{

    private productURL = 'api/products/products.json';
    constructor (private http : Http){    }
    
    getProducts(): Observable<Iproduct[]> { 
        return this.http.get(this.productURL) 
        .map((response: Response) => <Iproduct[]> response.json()) 
        .do(data => console.log(JSON.stringify(data))); 
     }  


    /*private handleError(err : HttpErrorResponse){
        let errorMessage = err.message
        console.error(errorMessage);
        return throwError(errorMessage);
    }*/
}