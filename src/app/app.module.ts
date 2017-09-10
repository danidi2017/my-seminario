import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{RouterModule,Routes} from '@angular/router';
import{IndexComponent}from './customers/index/index.component';
import{AddComponent as OrderAddComponet}from './orders/add/add.component';

import{CustomersModule } from './customers/customers.module';
import{OrdersModule}from './orders/orders.module';

import { AppComponent } from './app.component';
import{MenuComponent} from './menu/menu.component';
import {CurrentOptionComponent} from './current-option/current-option.component';

 const appRoutes: Routes = [
   {path:'customers/index', component:IndexComponent},
   {path:'orders/add', component: OrderAddComponet},


 ];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CurrentOptionComponent
    
  ],
  imports: [
    BrowserModule,
    CustomersModule,
    OrdersModule,
    RouterModule.forRoot(
      appRoutes
    ) 
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
