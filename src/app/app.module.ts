import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{RouterModule,Routes} from '@angular/router';
import{IndexComponent}from './customers/index/index.component';
import{AddComponent as OrderAddComponet}from './orders/add/add.component';

import{CustomersModule } from './customers/customers.module';
import{OrdersModule}from './orders/orders.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule, 
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdCoreModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule, 
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTableModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
  
  } from'@angular/material';

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
    BrowserAnimationsModule,
    CustomersModule,
    OrdersModule,
    RouterModule.forRoot(
      appRoutes),
      MdAutocompleteModule,
      MdButtonModule,
      MdButtonToggleModule, 
      MdCardModule,
      MdCheckboxModule,
      MdChipsModule,
      MdCoreModule,
      MdDatepickerModule,
      MdDialogModule,
      MdExpansionModule,
      MdGridListModule,
      MdIconModule,
      MdInputModule,
      MdListModule,
      MdMenuModule,
      MdNativeDateModule,
      MdPaginatorModule,
      MdProgressBarModule,
      MdProgressSpinnerModule, 
      MdRadioModule,
      MdRippleModule,
      MdSelectModule,
      MdSidenavModule,
      MdSliderModule,
      MdSlideToggleModule,
      MdSnackBarModule,
      MdSortModule,
      MdTableModule,
      MdTabsModule,
      MdToolbarModule,
      MdTooltipModule, 

    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
