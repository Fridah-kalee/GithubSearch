import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class GithubService {
  repo: any;
  

  constructor(private http:HttpClient) { }

  GH_API=`https://api.github.com`
  

  async getUser(username:string){
    const name=this.http.get<any>(`${this.GH_API}/users/${username}`)
    return await lastValueFrom(name).then((response)=>response);
    
  }

  getUserRepo(username:string):Observable<any>{
    return this.http.get<any>(`${this.GH_API}/users/${username}/repos`)
  }
}

