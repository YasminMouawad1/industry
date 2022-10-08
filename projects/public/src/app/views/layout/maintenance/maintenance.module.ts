import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintenanceRoutingModule } from './maintenance-routing.module';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { MaintenanceListComponent } from './maintenance-list/maintenance-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    MaintenanceComponent,
    MaintenanceListComponent
  ],
  imports: [
    CommonModule,
    MaintenanceRoutingModule,
    NgxPaginationModule,
    TranslateModule,
    ReactiveFormsModule
  ]
})
export class MaintenanceModule { }
