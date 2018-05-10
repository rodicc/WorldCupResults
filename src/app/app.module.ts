import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatCheckboxModule,
  MatGridListModule
} from "@angular/material";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TeamComponent } from "./team/team.component";
import { HttpClientModule } from "@angular/common/http";
import { GroupComponent } from "./group/group.component";
import { AppRoutingModule } from './/app-routing.module';
import { GroupViewComponent } from './group-view/group-view.component';
import { GroupService } from "./group/group.service";
import { MatchViewComponent } from './match-view/match-view.component';


@NgModule({
  declarations: [AppComponent, TeamComponent, GroupComponent, GroupViewComponent, MatchViewComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [GroupService],
  bootstrap: [AppComponent]
})
export class AppModule {}
