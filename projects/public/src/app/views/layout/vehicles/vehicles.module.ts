import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiclesRoutingModule } from './vehicles-routing.module';
import { VehicleComponent } from './vehicle/vehicle.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    VehicleComponent,
    VehicleListComponent
  ],
  imports: [
    CommonModule,
    VehiclesRoutingModule,
    NgxPaginationModule,
    TranslateModule,
    ReactiveFormsModule
  ]
})
export class VehiclesModule { }
