
import { Component,Output,EventEmitter,OnInit} from '@angular/core';
import {WeatherService} from '../apidata.service';
import  {FavouriteService} from '../favourite.service';

import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  

  ngOnInit() {
  }

  
	@Output() objJson: EventEmitter<any>= new EventEmitter<any>();
  p: number = 1;
  cityid="";
  cityname="";
  selection="";
  MyWebData:any;
  ErrorMessage='';
   constructor(private WeaService: WeatherService,private route: ActivatedRoute,private favService: FavouriteService) {}

  getWeather(){
    if(this.selection){
      console.log(this.selection);
    this.WeaService.getData(this.selection)
                   .subscribe(data=>{this.MyWebData=data;this.objJson.emit(this.MyWebData);console.log(this.MyWebData.city.name),this.cityname=this.MyWebData.city.name},
                
                     error=>console.log(error))}
                     else{
                      alert("enter city name");}
  }
  

}
