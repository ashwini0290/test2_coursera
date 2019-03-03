import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ITvShow } from './itv-show';
import {map} from 'rxjs/operators';

interface ITvShowData{
  score: number,
  show: {
    name: string,
    language: string,
    summary: string 
  }
}


@Injectable({
  providedIn: 'root'
})
export class TvshowService {

  constructor(private httpClient: HttpClient) { }
  getTvShow(showname: string)
   { 
     return this.httpClient
     .get<ITvShowData>(`http://api.tvmaze.com/search/shows?q=${showname}`)
     .pipe(
     map(
       data => this.transformToITvShowData(data)
       )
   )

  }
  private transformToITvShowData(data:ITvShowData): ITvShow{

    console.log(data);
    return{
      name: data[0].show.name,
      language: data[0].show.language,
      summary: data[0].show.summary
      
    };
   
  }
}
