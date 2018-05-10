import { Component, OnInit } from "@angular/core";
import { Group } from "../group/group";
import { GroupService } from "../group/group.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { MatchService } from "../match-view/match.service";
import { Match } from "../match-view/match";

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
    //this.getGroupByName("");
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
            result.push(allMatches[i]);
          }
        }
        this.groupMatches = result;
      }
    });
  }
}
