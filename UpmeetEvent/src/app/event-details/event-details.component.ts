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

  changeFavorite(eventFavorite: Events ){
  
    if (eventFavorite.favorite){
      this.favoritesService.DeleteFavorite(eventFavorite).subscribe(() => {this.favoritesService.getFavorites(1).subscribe(
        (favoritesResult)=>{this.favorites = favoritesResult;})})
    }
    else{
      console.log(this.favorites)
      this.newFavorite.userId = 1;
      this.newFavorite.eventId = eventFavorite.id;
      this.favoritesService.AddFavorite(this.newFavorite).subscribe(() => {})
        console.log(this.favorites);
    }
  }

   

  switchViewDetails(){
    this.viewDetails = ! this.viewDetails;
  }
}