import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  private url:string;
  private artist_url:string;
  private token = 'BQBUBwQ1rwjEsjjOPnmVkHAQuS_QC5RWOTFbFayv8CIrHcQ8zzpPd8CxHj5oxixuDv1xIdlmh5332Ix3-qKctxnIGfyJQ8EzbkkGYjlkfBu6as2isWPTym-pOO1nURVGVlvoxK-VMHuGZ88DoWFlugXWTpgXfMRrpPN15qw-FGkueFARg68';
  private album_url:string;

  constructor(private _http:Http) {
  }

  searchMusic(str:string, type = "artist") {
    this.url = 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=20&type=' + type;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ` + this.token);
    return this._http.get(this.url, new RequestOptions({headers: headers})).map(res => res.json());
  }

  getArtist(id:string) {
    this.artist_url = 'https://api.spotify.com/v1/artists/' + id;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ` + this.token);
    return this._http.get(this.artist_url, new RequestOptions({headers: headers})).map(res => res.json());
  }

  getAlbums(id:string) {
    this.album_url = 'https://api.spotify.com/v1/artists/' + id + "/albums";
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ` + this.token);
    return this._http.get(this.album_url, new RequestOptions({headers: headers})).map(res => res.json());
  }

  getAlbum(id:string) {
    let temp_url = 'https://api.spotify.com/v1/albums/' + id;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ` + this.token);
    return this._http.get(temp_url, new RequestOptions({headers: headers})).map(res => res.json());
  }
}
