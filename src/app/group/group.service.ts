import { Injectable } from "@angular/core";

import { filter } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Group } from "./group";

const url: string = "assets/groups.json";

@Injectable({
  providedIn: "root"
})
export class GroupService {
  constructor(private httpService: HttpClient) {}

  getGroups() {
    return this.httpService.get<Group[]>(url);
  }

  getGroupByName(groupName: string) {
    console.log("usao u servis");

    return this.httpService
      .get<Group>(url)
      .pipe(filter(group => group.name === groupName));
  }
}
