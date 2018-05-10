import { Component, OnInit } from "@angular/core";
import { MatchService } from "./match.service";
import { Match } from "./match";

@Component({
  selector: "app-match-view",
  templateUrl: "./match-view.component.html",
  styleUrls: ["./match-view.component.scss"]
})
export class MatchViewComponent implements OnInit {
  matches: Match[];
  time : string;
  constructor(private matchService: MatchService) {}

  ngOnInit() {
    this.getMatches();
  }

  getMatches(): void {
    this.matchService
      .getMatches()
      .subscribe(matches => (this.matches = matches));
  }

  getMatchById(matchId : number) : Match{
    for(let i=0; i<this.matches.length; i++){
      if(this.matches[i].matchId === matchId )
        return this.matches[i];
    }
  }

  updateMatch(match: Match){
    
  }
}
