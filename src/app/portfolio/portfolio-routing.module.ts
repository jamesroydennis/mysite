import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from './comp/portfolio.component';

const routes: Routes = [
  { path: '', component: PortfolioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations:[PortfolioComponent]
})
export class PortfolioRoutingModule { }
