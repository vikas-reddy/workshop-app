import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { VideoDataService } from '../../video-data.service';
import { Video } from '../interfaces';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  @Input() selectedVideo: Video;
  @Output() selectVideo = new EventEmitter<Video>();
  
  videos: Observable<Video[]>;

  constructor (videoService: VideoDataService) { 
    this.videos = videoService.loadVideos();
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
