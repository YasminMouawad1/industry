import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReportComponent } from './report/report.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  { path: '', component: ReportComponent  , children: [
    { path: '', component: ReportsComponent },   
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class ReportsRoutingModule { }
