import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  repo: any;
  

  constructor(private http:HttpClient) { }
  username='Fridah-kalee'
  GH_API=`https://api.github.com/users/${this.username}`
  REPO_URL=`https://api.github.com/users/${this.username}/repos`

  getUser():Observable<any>{
    return this.http.get<any>(this.GH_API)
  }

  getUserRepo():Observable<any>{
    return this.http.get<any>(this.REPO_URL)
  }
}

