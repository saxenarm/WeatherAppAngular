import { Injectable } from '@angular/core';
import { Favourite } from './Favourite';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class FavouriteService {

private durl='http://localhost:52609/api/Home/';
private headers = new Headers({'Content-Type': 'application/json'});
constructor(private http: Http) { }
 
create(Favourite:Favourite){
  console.log("hsagds");
	console.log(Favourite.DateTime);
      return this.http
        .post(this.durl,Favourite,{headers: this.headers})
        .toPromise()
        .catch(this.handleError);
    }

getFavData(){
console.log("getting my favourite list");
return this.http
             .get(this.durl)
             .map((response)=>response.json());
             
}

update(obj:any,comment:string){
  let id=obj.id;
  obj.comment=comment;
	console.log("service: i recieved the obj"+obj.comment+id);
	this.http
			.put(this.durl+id,obj,{headers: this.headers}).subscribe();


}

delete(id:number){
	console.log(id);
	this.http
	     .delete(this.durl + id,{headers:this.headers}).subscribe();
	     console.log("deleted my favourite");
}


  private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}

}