import { Component } from '@angular/core';
import { ITvShow } from './itv-show';
import { TvshowService } from './tvshow.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tv-app-show';
  TvShow: ITvShow;
  constructor(private tvshowService: TvshowService) {
   
  }
  doSearch(searchValue){
    const UserInput = searchValue.trim();
    this.tvshowService.getTvShow(UserInput).subscribe(data =>{ this.TvShow = data;

    } );

  }
}
