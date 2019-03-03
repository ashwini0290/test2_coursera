import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ITvShow } from './itv-show';
import {map} from 'rxjs/operators';

interface ITvShowData{
  name:string,
  language: string,
  genres: string, 
  rating: number,
  runtime: number,
  network:{name: string},
  summary: string,
  image:{original:string}
}

@Injectable({
  providedIn: 'root'
})
export class TvshowService {

  constructor(private httpClient: HttpClient) { }
  getTvShow(showname: string)
   { 
     return this.httpClient.get<ITvShowData>(`http://api.tvmaze.com/search/shows?q=${showname}`)
     .pipe(
     map(data => this.transformToITvShowData(data))
   )

  }
  private transformToITvShowData(data:ITvShowData): ITvShow{
    return{
      name:data.name,
      language: data.language,
      genre: data.genres,
      rating: data.rating,
      channel: data.network.name,
      runtime: data.runtime,
      summary: data.summary,
      image: data.image.original
    };

  }
}
