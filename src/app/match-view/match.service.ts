import { Injectable } from "@angular/core";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Match } from "./match";
import { filter } from "rxjs/operators";
import { JSONP_ERR_NO_CALLBACK } from "@angular/common/http/src/jsonp";

const url: string = "assets/matches.json";

@Injectable({
  providedIn: "root"
})
export class MatchService {
  constructor(private httpService: HttpClient) {}

  getMatches() {
    return this.httpService.get<Match[]>(url);
  }

  getMatchById(matchId: number) {
    return this.httpService
      .get<Match>(url)
      .pipe(filter(match => match.matchId === matchId));
  }

  updateMatch(match: Match) {
    if (!match.finished) {

      if(localStorage.getItem("team_"+match.hostTeam.id)){
        match.hostTeam = JSON.parse(localStorage.getItem("team_"+match.hostTeam.id));
      }
      if(localStorage.getItem("team_"+match.guestTeam.id)){
        match.guestTeam = JSON.parse(localStorage.getItem("team_"+match.guestTeam.id));
      }

      match.finished = true;
      //played
      match.guestTeam.played++;
      match.hostTeam.played++;
      //drawn-won-lost-points
      if (match.goalsByGuest === match.goalsByHost) {
        match.hostTeam.drawn++;
        match.guestTeam.drawn++;
        match.guestTeam.points++;
        match.hostTeam.points++;
      } else if (match.goalsByGuest < match.goalsByHost) {
        match.guestTeam.lost++;
        match.hostTeam.won++;
        match.hostTeam.points += 3;
      } else if (match.goalsByGuest > match.goalsByGuest) {
        match.hostTeam.lost++;
        match.guestTeam.won++;
        match.guestTeam.points += 3;
      }
      //goals for
      match.hostTeam.goalsFor = match.hostTeam.goalsFor + match.goalsByHost;
      match.guestTeam.goalsFor = match.guestTeam.goalsFor + match.goalsByGuest;
      //goals against
      match.hostTeam.goalsAgainst += match.goalsByGuest;
      match.guestTeam.goalsAgainst += match.goalsByHost;
      //goal difference
      match.hostTeam.goalDifference =
        match.hostTeam.goalsFor - match.hostTeam.goalsAgainst;
      match.guestTeam.goalDifference =
        match.guestTeam.goalsFor - match.guestTeam.goalsAgainst;

    localStorage.setItem("match_"+match.matchId.toString(), JSON.stringify(match));
    localStorage.setItem("team_"+match.hostTeam.id, JSON.stringify(match.hostTeam));
    localStorage.setItem("team_"+match.guestTeam.id, JSON.stringify(match.guestTeam));

    } 
  }

}
