import { Component, OnInit } from '@angular/core';
import { MatchService } from '../match-view/match.service';
import { Match } from '../match-view/match';

@Component({
  selector: 'app-bracket',
  templateUrl: './bracket.component.html',
  styleUrls: ['./bracket.component.scss']
})
export class BracketComponent implements OnInit {

  private matches: Match[];
  constructor(private matchService: MatchService) { }

  ngOnInit() {
    this.matchService.getMatches().subscribe(matches => this.matches = matches);

  }

}
