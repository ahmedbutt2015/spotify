import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  private url:string;

  constructor(private _http:Http) {
  }

  searchMusic(str:string, type = "artist") {
    this.url = 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=20&type=' + type;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer BQDNMJmJFVxp8HYprk68BU7jOjfooQXY--rZXm61-LCQC5JG-4q1PDs3S_0JmrzWQM9DvC5UgtLtqIs7-TEp7lnevkeQeTPLAHlTlsCPHFVR_ktFxDNrI2y5DlkpwjXzHx9KNpSm6RgQCjpkNbWPvag9ZcR3DOQ9uwxCrv3IXznXi78LyA8`);
    return this._http.get(this.url, new RequestOptions({headers: headers})).map(res => res.json());
  }
}
