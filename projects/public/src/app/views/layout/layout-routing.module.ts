import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { CarReceiptComponent } from './car-receipt/car-receipt.component';
import { CustodyReceiptComponent } from './custody-receipt/custody-receipt.component';
import { LayoutComponent } from './layout.component';
import { MixerReceiptComponent } from './mixer-receipt/mixer-receipt.component';
import { PumpReceiptComponent } from './pump-receipt/pump-receipt.component';
import { ReportReceiptComponent } from './report-receipt/report-receipt.component';

const routes: Routes = [{
  path: '', component: LayoutComponent, children: [
    {
      path: "",
      pathMatch: "full",
      redirectTo: "employees-List"
    },
    { path: 'employees-List', loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule) },  
    { path: 'store-List', loadChildren: () => import('./store/store.module').then(m => m.StoreModule) },  
    { path: 'reports-List', loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule) },  
    { path: 'vehicles-List', loadChildren: () => import('./vehicles/vehicles.module').then(m => m.VehiclesModule) },  
    { path: 'maintenance-List', loadChildren: () => import('./maintenance/maintenance.module').then(m => m.MaintenanceModule) },
    { path: 'pump-receipt', component:PumpReceiptComponent},
    { path: 'mixer-receipt', component:MixerReceiptComponent},
    { path: 'car-receipt', component:CarReceiptComponent},
    {path:'custody-receipt',component:CustodyReceiptComponent},
    {path:'report-receipt',component:ReportReceiptComponent},
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
