import { Component, OnInit } from '@angular/core';
import { Video } from '../interfaces';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent implements OnInit {
  video: Video;
  
  constructor() { }

  ngOnInit() {
  }

  chooseVideo(video: Video) {
    this.video = video;
  }
}
