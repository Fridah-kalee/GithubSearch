import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http:HttpClient) { }
  username='Fridah-kalee'
  GH_API=`https://api.github.com/users/${this.username}`
  getUser():Observable<any>{
    return this.http.get<any>(this.GH_API)
  }
}

