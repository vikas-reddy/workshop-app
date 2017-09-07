import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Video } from '../interfaces';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  @Input() selectedVideo: Video;
  @Output() selectVideo = new EventEmitter<Video>();
  
  videos: Video[];

  constructor (http: Http) { 
    http
      .get("/api/videos")
      .subscribe((res: Response) => this.videos = res.json());
  }

  ngOnInit() {
  }

  select (video: Video) {
    this.selectVideo.emit(video);
  }
  
  isSelected (video: Video) {
    return (this.selectedVideo === video);
  }
}
