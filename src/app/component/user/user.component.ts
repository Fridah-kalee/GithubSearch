import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/github.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user!: any;
  
  constructor(private githubService:GithubService) { }

  ngOnInit(): void {
    this.githubService.getUser().subscribe(
      
      user =>{
        this.user=user
        console.log(user)
      }
        
      
      
    )
    
  }

}
