import { Component, OnInit,Output , EventEmitter } from '@angular/core';
import { GithubService } from '../github.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() newGituser=new EventEmitter()
  username:string=""
  getOutput(username:string){
    this.newGituser.emit(username)
  }

  constructor(private githubService:GithubService) { }

  ngOnInit(): void {
  }

}
