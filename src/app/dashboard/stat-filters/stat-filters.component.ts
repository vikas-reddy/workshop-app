import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stat-filters',
  templateUrl: './stat-filters.component.html',
  styleUrls: ['./stat-filters.component.css']
})
export class StatFiltersComponent implements OnInit {
  videoFg: FormGroup;

  constructor(fb: FormBuilder) {
    this.videoFg = fb.group({
      title: ['', [Validators.minLength(3)]],
      author: ['', [Validators.minLength(1)]]
    })
  }

  ngOnInit() {
  }

  filterVideos() {
    console.log('Form Submitted', this.videoFg.value);
  }
}
