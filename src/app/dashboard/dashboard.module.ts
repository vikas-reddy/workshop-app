import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { VideoDashboardComponent } from './video-dashboard/video-dashboard.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoListItemComponent } from './video-list-item/video-list-item.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { StatFiltersComponent } from './stat-filters/stat-filters.component';

const dashboardRoutes: Routes = [
  { path: '', component: VideoDashboardComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes)
  ],
  exports: [VideoDashboardComponent],
  declarations: [VideoDashboardComponent,
                 VideoListComponent,
                 VideoListItemComponent,
                 VideoPlayerComponent,
                 StatFiltersComponent]
})
export class DashboardModule { }