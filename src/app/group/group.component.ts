import { Component, OnInit } from "@angular/core";
import { Group } from "./group";
import { GroupService } from "./group.service";
import { Team } from "../team/team";

@Component({
  selector: "group",
  templateUrl: "./group.component.html",
  styleUrls: ["./group.component.scss"]
})
export class GroupComponent implements OnInit {
  groups: Group[];

  constructor(private groupService: GroupService) {}

  ngOnInit() {
    this.getGroups();
  }

  getGroups(): void {
    this.groupService.getGroups().subscribe(groups => (this.groups = groups));
  }
}
