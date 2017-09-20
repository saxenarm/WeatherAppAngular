import { Component,Input,OnChanges} from '@angular/core';
import { Favourite } from '../favourite';

@Component({
  selector: 'app-list',
  templateUrl: './ListResult.component.html',
  styleUrls: ['./ListResult.component.css']
})
export class ListResultComponent implements OnChanges{
@Input() json:any={};
weblist:Favourite[]=[];  
constructor(){}
ngOnChanges(){
	
	this.filldata();
//	console.log("filldata secon");
}

filldata(){

		for(let item of this.json.list)
		{
			console.log("filldata secon");
				let fav=new Favourite(this.json.city.id,this.json.city.name,item.dt_txt,item.main.humidity,item.main.temp,item.main.pressure,item.wind.speed,item.weather[0].description,item.weather[0].icon,"new");
				this.weblist.push(fav);
				
			}
	

}

}