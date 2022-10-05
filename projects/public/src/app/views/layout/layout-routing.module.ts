import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { LayoutComponent } from './layout.component';

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
    { path: 'maintenance-List', loadChildren: () => import('./maintenance/maintenance.module').then(m => m.MaintenanceModule) }
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
