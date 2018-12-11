import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import { IProduct } from '../models/product.model'

import { StarComponent } from '../shared/star.component'
import {ProductsService} from './product.service'
@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']

})

export class ProductListComponent implements OnInit {
    
    pageTitle: string = 'Product List';
    imagewidth: number = 50;
    imageMargin: number = 2;
    imageHeight: number = 30;
    showImage: boolean = true;
    products: IProduct[];
    filteredProducts: IProduct[];
    _listFilter :string;
     errorMessage: any;
 
   constructor(private _productService:ProductsService )
   {
     
   }

   ngOnInit(): void {
    let subs =  this._productService.getProducts().subscribe(
        product => {
            this.products=product
            this.filteredProducts = this.products;
        },
        error=> this.errorMessage = <any>error 
        
    );    
    
    this.listFilter = 'cart';
    }

    
    //Type 1 using template reference variable in html
@ViewChild('childref') accessDataFromChildUsingNgViewTest:any //ElementRef

// Type 2 using import child component in the import startement import { StarComponent } from '../shared/star.component'

@ViewChild(StarComponent) accessDataFromChildUsingNgViewTest2:StarComponent


    ngAfterViewInit() {
       //console.log(this.accessDataFromChildUsingNgViewTest.accessChildComponentDirectlyTest);
       console.log(this.accessDataFromChildUsingNgViewTest2.accessChildComponentDirectlyTest2);
      }
      
    get listFilter():string{

        return this._listFilter;
    }
    set listFilter(value:string){
        this._listFilter = value;
        this.filteredProducts =this._listFilter? this.filterProductList(this._listFilter):this.products;
    }

    toggleImage(): void {
        this.showImage = !this.showImage;}

    filterProductList(filterBy:string) :IProduct[] {

        if(this.products)
      return  this.products.filter((product:IProduct)=> 
      product.productName.toLowerCase().indexOf(filterBy.toLowerCase() ) !==-1  );
    }

    messageFromChild(message:string):void{

        this.pageTitle =message;

    }

}