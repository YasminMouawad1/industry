import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportComponent } from './report/report.component';
import { ReportsComponent } from './reports/reports.component';
import { Report1Component } from './report1/report1.component';
import { Report2Component } from './report2/report2.component';


@NgModule({
  declarations: [
    ReportComponent,
    ReportsComponent,
    Report1Component,
    Report2Component
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
