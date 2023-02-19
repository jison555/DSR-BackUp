import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementComponent } from './management/management.component';
import { StatusReportComponent } from './status-report/status-report.component';

const routes: Routes = [
  { path: '', component: StatusReportComponent },
  { path: 'management', component: ManagementComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
