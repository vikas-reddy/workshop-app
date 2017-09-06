// This example shows the particular variation of routing syntax
// needed to work with the CLI lazy loading support. The syntax can be
// slightly different if you are using a different tooling approach.

import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions, PreloadAllModules } from '@angular/router';

// Note there is no import of the HrSearchComponent or reference
// to './hr-files-search.component'.

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' }
];

const config: ExtraOptions = {
  enableTracing: false
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// Behind the scenes, Angular converts the above syntax to something like
// this:

// loadChildren: () =>
// System.import('./hr/hr.module').then(({HrModule}) => HrModule)
