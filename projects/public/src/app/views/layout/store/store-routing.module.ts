import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { StoreListComponent } from './store-list/store-list.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
  { path: '', component: StoreComponent  , children: [
    { path: '', component: StoreListComponent },   
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
