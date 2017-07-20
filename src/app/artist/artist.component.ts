import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Artist} from "../../models/Artist";
import {Album} from "../../models/Album";
import {SpotifyService} from "../spotify.service";

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  id:string;
  artist:Artist[];
  albums:Album[];

  constructor(private _spotifyService:SpotifyService,
              private _route:ActivatedRoute) {
  }

  ngOnInit() {
    this._route.params.map(params => params['id']).subscribe((id)=> {
      this._spotifyService.getArtist(id)
        .subscribe(artist => {
          this.artist = artist
        })
      this._spotifyService.getAlbum(id)
        .subscribe(albums => {
          this.albums = albums.items
        })
    })
  }

}
