import { NgModule } from '@angular/core';
import { RouterModule,Routes }   from '@angular/router';
import {SearchComponent} from './search/search.component';
import { SearchBarComponent } from'./Search-bar/Search-bar.component';
import {ListResultComponent} from './ListResult/ListResult.component';
import {DetailSearchComponent} from './DetailSearch-Result/DetailSearchResult.component'
import {FavouriteComponent} from './FavouriteCurd/favouritecrud.component';
import {RegisterComponent} from './register/register.component';
import {JumboComponent} from './jumbo/jumbo.component';

const routes: Routes = [
  {path:"",redirectTo:'Home',pathMatch:'full'},
  {path:'Home', component:JumboComponent},
  { path: 'search',  component: SearchComponent},
    { path: 'app-list',  component: ListResultComponent},
   {  path:'searchdetail' ,component:DetailSearchComponent},
   {  path:'favourite',component:FavouriteComponent},
   {path:'register',component:RegisterComponent}
];

@NgModule({
 
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
