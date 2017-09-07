import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-list-item',
  templateUrl: './video-list-item.component.html',
  styleUrls: ['./video-list-item.component.css']
})
export class VideoListItemComponent implements OnInit {

  @Input() video: object;
  isSelected = false;

  constructor() { }

  ngOnInit() {
  }
  
  selectVideo() {
    this.isSelected = !this.isSelected;
  }
  
}
