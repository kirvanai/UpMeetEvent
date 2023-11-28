import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = "https://localhost:7248/api/User"
  constructor(private http:HttpClient) {}

  GetUser():Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl);
  }
  AddUser(newUser: User):Observable<void>{
    return this.http.post<void>(this.baseUrl, newUser);
  }

  DeleteUser(id: number):Observable<void>{
    return this.http.delete<void>(this.baseUrl+"/"+id);
  }
  EditUser(id: number, editUser: Event):Observable<void>{
    return this.http.put<void>(this.baseUrl+"/"+id, editUser);
  }
}