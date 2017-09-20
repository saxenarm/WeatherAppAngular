import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppRoutingModule }     from './app-routing.module';
import { FormsModule }   from '@angular/forms'; 
import {NgxPaginationModule} from 'ngx-pagination';  

import{WeatherService} from './apidata.service';
import{FavouriteService} from './favourite.service';
import { SearchBarComponent } from'./Search-bar/Search-bar.component';
import {ListResultComponent} from './ListResult/ListResult.component';
import {DetailSearchComponent} from './DetailSearch-Result/DetailSearchResult.component';
import {FavouriteComponent} from './FavouriteCurd/favouritecrud.component';




import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { JumboComponent } from './jumbo/jumbo.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ListResultComponent,
    DetailSearchComponent,
    FavouriteComponent,
    RegisterComponent,
    SearchComponent,
    JumboComponent
  ],
  imports: [
    BrowserModule,
     HttpModule,
     AppRoutingModule,
     FormsModule,
     NgxPaginationModule
  ],
  providers: [WeatherService,FavouriteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
