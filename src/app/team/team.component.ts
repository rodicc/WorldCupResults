import { Component, OnInit } from '@angular/core';
import { TeamService } from './team.service';
import { Team } from '../team';



@Component({
  selector: 'team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

   teams : Team[];

  constructor(private teamService : TeamService) { }

  ngOnInit() {
    this.getTeams();
  }
  
  getTeams(): void { 
   this.teamService.getTeams()
    .subscribe(teams => this.teams = teams);
    console.log(this.teams);
  }
}
