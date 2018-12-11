import {Injectable} from '@angular/core';
import { IProduct } from '../models/product.model';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError,tap} from 'rxjs/operators'

@Injectable({
    providedIn:'root' // Registring serivice here itself new way in angular 6 , this will regrister this serve in app.module.ts
  })
export class ProductsService{

  productsUrl:string ='api/products/products.json';


constructor(private _httpClient:HttpClient){}


 getProducts():Observable <IProduct[]>{

return this._httpClient.get<IProduct[]>(this.productsUrl).pipe(
  tap(data => console.log('All: '+  JSON.stringify(data))),
   catchError(this.handleAnyErrors));

 }

 private handleAnyErrors(err: HttpErrorResponse){

  console.error(err.message)
  return throwError(err.message);

 }


}