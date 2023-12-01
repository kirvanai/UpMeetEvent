import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Events } from '../events';
import { FavoritesService } from '../favorites.service';
import { Favorite } from '../favorite';


@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent {
newEvent: any;
addEvent() {
throw new Error('Method not implemented.');
}
setViewing(arg0: string) {
throw new Error('Method not implemented.');
}

  viewDetails: boolean = false;
  
  @Output() newEventsEvent = new EventEmitter<Events>();
  @Input()event: Events = {} as Events;
  favorites: Favorite[] = [];
  newFavorite: Favorite = {} as Favorite;

  constructor(private favoritesService: FavoritesService){ 

  }

  changeFavorite(){
    this.event.favorite = !this.event.favorite;
    
    this.newFavorite.userId=1;
    this.newFavorite.eventId = this.event.id;
    
    if (this.event.favorite){
      this.favoritesService.DeleteFavorite(this.newFavorite).subscribe(() => {this.favoritesService.getFavorites(1).subscribe(
        (favoritesResult)=>{this.favorites = favoritesResult;})})
    }
    else{
      console.log(this.favorites)
      this.newFavorite.userId = 1;
      this.newFavorite.eventId = this.event.id;
      this.favoritesService.AddFavorite(this.newFavorite).subscribe(() => {this.favoritesService.getFavorites(1).subscribe(
        (favoritesResult)=>{this.favorites = favoritesResult; this.newFavorite = this.favorites[this.favorites.length-1];})})
        
        console.log(this.favorites);
    }
    
  }

   

  switchViewDetails(){
    this.viewDetails = ! this.viewDetails;
  }
}