import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { Match } from "./match";
import { filter } from "rxjs/operators";

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

  updateMatch(match: Match){
  }
  
}
