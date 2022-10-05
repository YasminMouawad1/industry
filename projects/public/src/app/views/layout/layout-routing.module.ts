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
    { path: 'users-approval', loadChildren: () => import('./users-approval/users-approval.module').then(m => m.UsersApprovalModule) },  
    { path: 'system-configuration', loadChildren: () => import('./system-configuration/system-configuration.module').then(m => m.SystemConfigurationModule) },
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
