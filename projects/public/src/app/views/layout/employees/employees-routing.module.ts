import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeItemComponent } from './employee-item/employee-item.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeesComponent } from './employees/employees.component';

const routes: Routes = [ 
  { path: '', component: EmployeesComponent  , children: [
    { path: '', component: EmployeeListComponent },  
    { path: 'employee-item/:id', component: EmployeeItemComponent },
  ]
  }
   
];



@NgModule({
  imports: [RouterModule.forChild(routes)], 
exports: [RouterModule]
})
export class EmployeesRoutingModule { }
