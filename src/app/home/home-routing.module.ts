import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './comp/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations:[HomeComponent],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
