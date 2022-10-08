import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store/store.component';
import { StoreListComponent } from './store-list/store-list.component'; 
import { NgxPaginationModule } from 'ngx-pagination';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    StoreComponent,
    StoreListComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    NgxPaginationModule,
    TranslateModule,
    ReactiveFormsModule
  ]
})
export class StoreModule { }
