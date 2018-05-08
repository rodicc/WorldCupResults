import { Injectable } from '@angular/core';
//import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Team } from '../team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private httpService: HttpClient) { }

  getTeams() {
    return this.httpService.get<Team[]>('assets/teams.json');
  }

}
