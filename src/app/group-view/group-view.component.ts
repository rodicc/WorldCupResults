import { Component, OnInit } from "@angular/core";
import { Group } from "../group/group";
import { GroupService } from "../group/group.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { MatchService } from "../match-view/match.service";
import { Match } from "../match-view/match";
import { HttpHeaders } from "@angular/common/http";

const url: string = "assets/images/2x/edit.png";
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Component({
  selector: "group-view",
  templateUrl: "./group-view.component.html",
  styleUrls: ["./group-view.component.scss"]
})
export class GroupViewComponent implements OnInit {
  group: Group;
  groupMatches: Match[];

  constructor(
    private groupService: GroupService,
    private route: ActivatedRoute,
    private matchService: MatchService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getGroupByName(params.groupName);
    });
  }

  getGroupByName(groupName: string) {
    var groups: Group[];
    this.groupService.getGroups().subscribe(group => {
      groups = group;
      for (let i = 0; i < groups.length; i++) {
        if (groups[i].name === groupName) this.group = groups[i];
      }
      this.setGroupMatches(this.group.matches);
      for(let i=0; i < this.group.teams.length; i++){
        if(localStorage.getItem("team_"+this.group.teams[i].id)){
          this.group.teams[i] = JSON.parse(localStorage.getItem("team_"+this.group.teams[i].id));
        }
      }
    });
  }

  setGroupMatches(matchIds: number[]) {
    var allMatches;
    var result: Match[] = [];
    this.matchService.getMatches().subscribe(matches => {
      allMatches = matches;

      for (var j = 0; j < matchIds.length; j++) {
        for (let i = 0; i < allMatches.length; i++) {
          if (allMatches[i].matchId === matchIds[j]) {
            if(localStorage.getItem("match_"+matchIds[j])){
              result.push(JSON.parse(localStorage.getItem("match_"+matchIds[j])));
            }
            else{
              result.push(allMatches[i]);
            }
          }
        }
      }
      this.groupMatches = result;
    });
  }

  editResult(matchToEdit: Match) {
    //zbog input type="text"
    matchToEdit.goalsByGuest = parseInt(matchToEdit.goalsByGuest.toString());
    matchToEdit.goalsByHost = parseInt(matchToEdit.goalsByHost.toString());
    this.matchService.updateMatch(matchToEdit);
  }

  clearLocalStorage(){
    localStorage.clear();
  }
}
