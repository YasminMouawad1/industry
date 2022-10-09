import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReportComponent } from './report/report.component';
import { Report1Component } from './report1/report1.component';
import { Report2Component } from './report2/report2.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  { path: '', component: ReportComponent  , children: [
    { path: '', component: ReportsComponent },   
    { path: 'report1', component: Report1Component },   
    { path: 'report2', component: Report2Component }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class ReportsRoutingModule { }
