import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreItemComponent } from './store-item/store-item.component';
import { StoreListComponent } from './store-list/store-list.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
  { path: '', component: StoreComponent  , children: [
    { path: '', component: StoreListComponent },  
    { path: 'store-item/:id', component: StoreItemComponent },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
