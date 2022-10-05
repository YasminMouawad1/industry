import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms'; 
import { EmployeeItemComponent } from './employee-item/employee-item.component';


@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeeListComponent, 
    EmployeeItemComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    NgxPaginationModule,
    TranslateModule,
    ReactiveFormsModule
  ]
})
export class EmployeesModule { }
