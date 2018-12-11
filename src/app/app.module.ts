import { AppComponent } from "./app.component";
import { NgModule} from "@angular/core";

import {BrowserModule} from "@angular/platform-browser";
import { ProductListComponent } from "./products/product-list.component";
import {FormsModule} from "@angular/forms";
import { ConvertToSpace } from "./shared/convert-to-space.pipe";
import {StarComponent} from "./shared/star.component";
//import {ProductsService} from "./products/product.service";
import {HttpClientModule} from '@angular/common/http';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './common/welcome.component';
import {RouterModule, Route} from '@angular/router';
import { PagenotfoundComponent } from './common/pagenotfound.component'

@NgModule({
declarations:[AppComponent,ProductListComponent,ConvertToSpace,StarComponent, 
    ProductDetailComponent, WelcomeComponent, PagenotfoundComponent],
imports:[BrowserModule,FormsModule,HttpClientModule,RouterModule.forRoot([
    {path:'products',component:ProductListComponent},
    {path:'product/:id',component:ProductDetailComponent},
    {path:'welcome',component:WelcomeComponent},
    {path:'',redirectTo:'welcome',pathMatch:'full'},
    {path:'**',component:PagenotfoundComponent}

])],
providers:[],//ProductsService
bootstrap:[AppComponent]

})

export class AppModule{}