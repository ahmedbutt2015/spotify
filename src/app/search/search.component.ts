import {Component, OnInit} from '@angular/core';
import {SpotifyService} from "../spotify.service";
import {Artist} from '../../models/Artist';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {

  search:string;
  result:Artist[];

  constructor(private _spotifyService:SpotifyService) {
  }

  searchArtist() {
    this._spotifyService.searchMusic(this.search).subscribe(res => {
      console.log(res)
      this.result = res.artists.items;
    })
  }

  ngOnInit() {
  }

}
