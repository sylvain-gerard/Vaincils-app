import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DatatablesComponent } from './datatables/datatables.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  {path: 'datatables', component: DatatablesComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { enableTracing: true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
