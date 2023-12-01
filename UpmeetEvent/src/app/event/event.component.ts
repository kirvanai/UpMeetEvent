import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  favorites: Favorite[] = [];
  viewDetails: boolean = true;
  newFavorite: Favorite = {} as Favorite;
  favorite: boolean = true;
  

  constructor(private eventsService: EventsService, private favoritesService: FavoritesService){ }
      
  ngOnInit(): void {
    this.eventsService.GetEvents().subscribe(
      (eventsResult)=>{
        this.events = eventsResult;        
        console.log(this.events)
        this.favoritesService.getFavorites(1).subscribe(
          (favoritesResult)=>{
            this.favorites = favoritesResult;        
            console.log(this.favorites);
            this.favorites.forEach( favorite => {
              let event = this.events.find(e => e.id === favorite.eventId)
              if (event != undefined){
                event.favorite = true;
              }
            })
          }      
        )
      }      
    )

  }

  onClick(){
    this.viewDetails = !this.viewDetails;
    
  }

}
