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
  favorites: Favorite[] = [];
  viewDetails: boolean = true;
  newFavorite: Favorite = {} as Favorite;
  favorite: boolean = true;
  

  constructor(private eventsService: EventsService, private favoritesService: FavoritesService){ }
      
  ngOnInit(): void {
    this.eventsService.GetEvents().subscribe(
      (eventsResult)=>{
        this.events = eventsResult;        
        
        this.favoritesService.getFavorites().subscribe(
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

  changeFavorite(){
    // if (addFavorite){
    //   // this.newFavorite.userId = eventToFavorite.;
    //   this.newFavorite.eventId = eventToFavorite.id
  
    //   this.favoritesService.AddFavorite(this.newFavorite).subscribe( 
    //     () => {
    //     this.eventsService.GetEvents().subscribe(
    //       (eventsResult)=>{
    //         this.events = eventsResult;        
    //         console.log(this.events);
    //       }      
    //     )
    //     }
    //   )
    // }
    // else{

    // }
  }

  saveFavorite(events: Events){
    this.newFavorite.userId = 1;
    this.newFavorite.eventId = events.id

    this.favoritesService.AddFavorite(this.newFavorite).subscribe( 
      () => {
      this.eventsService.GetEvents().subscribe(
        (eventsResult)=>{
          this.events = eventsResult;        
          console.log(this.events);
        }      
      )
      }
    )

  }

}
