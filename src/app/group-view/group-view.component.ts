import { Component, OnInit } from "@angular/core";
import { Group } from "../group/group";
import { GroupService } from "../group/group.service";
import { Router, ActivatedRoute, ParamMap  } from '@angular/router';
import { switchMap } from "rxjs/operators";

@Component({
  selector: "group-view",
  templateUrl: "./group-view.component.html",
  styleUrls: ["./group-view.component.scss"]
})
export class GroupViewComponent implements OnInit {
  group: Group;

  constructor(private groupService: GroupService, private route: ActivatedRoute) {
    
  }

  ngOnInit() {
    //this.getGroupByName("");
    this.route.params.subscribe( params =>
        this.getGroupByName(params.groupName));
  }

  getGroupByName(groupName: string) {
    var groups: Group[];
    this.groupService.getGroups().subscribe(group => {
      groups = group;
      for (let i = 0; i < groups.length; i++) {
        if (groups[i].name === groupName) this.group = groups[i];
      }
    });
  }
}
