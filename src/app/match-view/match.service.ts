import { Injectable } from "@angular/core";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Match } from "./match";
import { filter } from "rxjs/operators";

const url: string = "api/matches"; // assets/matches.json
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

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
      .get<Match>(url+"/"+matchId);
      //.pipe(filter(match => match.matchId === matchId));
  }

  updateMatch(match: Match){
    return this.httpService.put(url, match, httpOptions);
  }
  
}
