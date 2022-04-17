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
  user!: any;
  repo!: any;
  
  constructor(private githubService:GithubService) {
    this.user = new Username("","",0,0,0,"","");
    this.repo = new Repo("","","",0,new Date());
   }

  ngOnInit(): void {
    this.githubService.getUser().subscribe(
      
      user =>{
        this.user=user
        console.log(user)
      }
      )
      this.githubService.getUserRepo().subscribe(
        repo =>{
          this.repo=repo
          console.log(repo)
        }
      )
   }
}
