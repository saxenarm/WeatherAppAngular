import { Component,OnInit} from '@angular/core';

import {FavouriteService} from '../favourite.service';


import { Favourite } from '../favourite';


@Component({
  selector: 'favourite-crud',
  templateUrl: './favouritecrud.component.html',
  styleUrls: ['./favouritecrud.component.css']
})
export class FavouriteComponent implements OnInit{


	MyFav:any =Array<Favourite>();


p=1;
commentline:string;
constructor(private favService: FavouriteService) {}

ngOnInit(){
        this.favService.getFavData()
                 .subscribe(data=>{this.MyFav=data;console.log(this.MyFav)},
                   error=>console.log(error));
}

delete(id:number):void{
	console.log("going to delete");
	this.favService.delete(id);
	console.log("send it to service");
	var ele = this.MyFav.find(f=>f.id==id);
	const index= this.MyFav.indexOf(ele);
	this.MyFav.splice(id,1);
}

comment(object:any,comment:string){
	 object.comment=this.commentline;
	 console.log("updating request....");
	   this.favService.update(object,comment);
}
}


