import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent implements OnInit {
  video: object;
  
  constructor() { }

  ngOnInit() {
  }

  chooseVideo(video) {
    this.video = video;
  }
}
