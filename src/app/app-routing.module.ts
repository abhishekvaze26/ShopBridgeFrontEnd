import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductInsertComponent } from './product-insert/product-insert.component';
import { ProductDisplayComponent } from './product-display/product-display.component';

const routes: Routes = [
  {path:'', component:ProductInsertComponent},
  {path:'displayProduct', component:ProductDisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
