import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { Favorite } from './favorite';
import { Secret } from './secret';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  key : Secret = new Secret();
  baseUrl : string = this.key.favoriteUrl;
  constructor(private http:HttpClient) {} 
  getFavorites():Observable<Favorite[]>{
    return this.http.get<Favorite[]>(this.baseUrl);
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