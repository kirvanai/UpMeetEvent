import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { Favorite } from './favorite';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  baseUrl: string = "https://localhost:7248/api/Favorites"
  constructor(private http:HttpClient) {}

    getEvent(id: number):Observable<Event>{
      return this.http.get<Event>(this.baseUrl+"/"+id);
    }

    getUser(id: number):Observable<User>{
      return this.http.get<User>(this.baseUrl+"/"+id);
    }
  
  AddFavorite(newFavorite: Favorite):Observable<void>{
    console.log(this.baseUrl + newFavorite)
    return this.http.post<void>(this.baseUrl, newFavorite);
  }

  // DeleteUser(id: number):Observable<void>{
  //   return this.http.delete<void>(this.baseUrl+"/"+id);
  // }
  // EditUser(id: number, editUser: Event):Observable<void>{
  //   return this.http.put<void>(this.baseUrl+"/"+id, editUser);
  // }
}