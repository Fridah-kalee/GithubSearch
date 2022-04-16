import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private username ='Fridah-kalee'
  constructor(private http : HttpClient) { }

  getUsers():Observable<userInterface> {
    const url = `https://api.github.com/users/${this.username}/users`;
    return this.http.get<any>(url);
  }
  getRepos():Observable<userInterface>{
    const url = `https://api.github.com/posts/${this.username}/repos`;
    return this.http.get<any>(url);
  }
}
