import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Co2TableComponent } from './co2-table/co2-table.component';

const routes: Routes = [{ path: 'co2Table', component: Co2TableComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
