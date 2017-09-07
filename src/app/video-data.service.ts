import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Video } from './dashboard/interfaces';


@Injectable()
export class VideoDataService {

  constructor(private http: Http) { }

  loadVideos(): Observable<Video[]> {
    return this.http
      .get("/api/videos")
      .map((res: Response) => res.json());
  }
}
