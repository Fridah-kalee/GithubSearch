import { Component, OnInit } from '@angular/core';
import { Username } from 'src/app/username';
import { Repo } from 'src/app/repo';
import { GithubService } from 'src/app/github.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  username='Fridah-kalee'
  user!: any;
  repo!: any;
  
  constructor(private githubService:GithubService) {
    this.user = new Username("","",0,0,0,"","");
    this.repo = new Repo("","","",0,new Date());
   }
   getOutput(newGituser:any):void{
     this.username=newGituser
     this.getRepo=(newGituser)
     this.getUsers=(newGituser)
     this.githubService.getUser(this.username).then((user)=>(this.user=user))
     this.githubService.getUserRepo(this.username).subscribe((repo)=>{this.repo=repo})
   }
   getUsers(username: string):void{
     this.githubService.getUser(username).then((user)=>(this.user=user))
   }
   getRepo(username: string):void{
     this.githubService.getUserRepo(username).subscribe((repo)=>{this.repo=repo})
   }

  

  ngOnInit(): void {
    this.getUsers(this.username)
    this.getRepo(this.username)
   }
}
