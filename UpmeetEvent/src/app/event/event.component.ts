import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { Events } from '../events';
import { FavoritesService } from '../favorites.service';
import { Favorite } from '../favorite';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  events: Events[] = [];
  viewDetails: boolean = true;
  favorite: Favorite = {} as Favorite;
  

  constructor(private eventsService: EventsService, private favoritesService: FavoritesService){ }
      
  ngOnInit(): void {
    this.eventsService.GetEvents().subscribe(
      (eventsResult)=>{
        this.events = eventsResult;        
        console.log(this.events);
      }      
    )
  }

  onClick(){
    this.viewDetails = !this.viewDetails;
    
  }

  saveFavorite(events: Events){
    this.favorite.userId = 1;
    this.favorite.eventId = events.id
    console.log(this.favorite)
    this.favoritesService.AddFavorite(this.favorite).subscribe
    console.log("after")
  }

}
