import { Component,Input} from '@angular/core';

import {FavouriteService} from '../favourite.service';




import { Favourite } from '../favourite';


@Component({
  selector: 'search-detail',
  templateUrl: './DetailSearchResult.component.html',
  styleUrls: ['./DetailSearchResult.component.css']
})
export class DetailSearchComponent  {
  @Input('json') Data:Favourite;
p: number = 1;
cityid="";
cityname="";
 
//  ngOnInit() {console.log(this.Data);
//  }

constructor(private favService: FavouriteService) {console.log(this.Data);
  //console.log(this.Data);
  // this.Data.icon
  // console.log(this.Data.icon);
  console.log("hello");
}


addfavourite(favelement:any){
       this.favService.create(favelement);
}

}
