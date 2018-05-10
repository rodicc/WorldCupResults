import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GroupComponent } from "./group/group.component";
import { GroupViewComponent } from "./group-view/group-view.component";
import { MatchViewComponent } from "./match-view/match-view.component";

const routes: Routes = [
  { path: "", redirectTo:"/groups", pathMatch: "full" },
  { path: "groups", component: GroupComponent },
  { path: "groups/:groupName", component: GroupViewComponent},
  { path: "matches", component: MatchViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule {}
