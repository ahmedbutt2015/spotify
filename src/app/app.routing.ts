import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {SearchComponent} from "./search/search.component";
import {AboutComponent} from "./about/about.component";
import {ArtistComponent} from "./artist/artist.component";

const routes:Routes = [
  {
    path: '',
    component: SearchComponent
  }, {
    path: 'about',
    component: AboutComponent
  }, {
    path: 'artist/:id',
    component: ArtistComponent
  },
]
export const routing:ModuleWithProviders = RouterModule.forRoot(routes);
