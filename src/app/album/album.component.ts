import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from "../spotify.service";
import {Album} from "../../models/Album";
@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  private songs:string
  album:Album[];

  constructor(private spotifyService:SpotifyService,
              private _route:ActivatedRoute) {
  }

  ngOnInit() {

    this._route.params.map(params => params['id'])
      .subscribe((id) => {
        console.log(id)
        this.spotifyService.getAlbum(id)
          .subscribe(albums => {
            console.log(albums)
            this.album = albums
          })
        /*
         this.spotifyService.getSongs(id).subscribe(songs => {
         this.songs = songs
         })
         */
      })
  }

}
