import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TeamListPageComponent} from "@team-handling/teams/containers/team-list-page/team-list-page.component";
import {MatCardModule} from "@angular/material/card";
import {TeamDetailPageComponent} from "@team-handling/teams/containers/team-detail-page/team-detail-page.component";
import {MatButtonModule} from "@angular/material/button";




@NgModule({
  declarations: [TeamListPageComponent, TeamDetailPageComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class TeamsModule { }
