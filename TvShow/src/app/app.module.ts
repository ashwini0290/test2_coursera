import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TvShowComponentComponent } from './tv-show-component/tv-show-component.component';
import { TvshowService } from './tvshow.service';
import { HttpClientModule } from '@angular/common/http';
import { TvsearchComponent } from './tvsearch/tvsearch.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';




@NgModule({
  declarations: [
    AppComponent,
    TvShowComponentComponent,
    TvsearchComponent
    
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatToolbarModule, 
    MatIconModule ,
    MatCardModule,
    MatFormFieldModule, MatInputModule
  

    
  ],
  exports : [
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule, 
    MatToolbarModule, 
    MatIconModule,
    MatCardModule,
    MatFormFieldModule, MatInputModule ],
  providers: [TvshowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
