import { Component, OnInit , Input} from '@angular/core';
import {ITvShow} from '../itv-show';

@Component({
  selector: 'app-tv-show-component',
  templateUrl: './tv-show-component.component.html',
  styleUrls: ['./tv-show-component.component.css']
})
export class TvShowComponentComponent implements OnInit {
 @Input() show: ITvShow
  constructor() {
   
   }

  ngOnInit() {
    
  }

}
