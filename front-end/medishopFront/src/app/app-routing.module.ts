import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemMenuComponent } from './components/item-menu/item-menu.component'

const routes: Routes = [
  {path:'',component:ItemMenuComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
