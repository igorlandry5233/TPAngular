import { Component, OnInit } from '@angular/core';
import {TeamService} from "@team-handling/teams/services/team.service";
import {Team} from "@team-handling/teams/models/team";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-team-list-page',
  templateUrl: './team-list-page.component.html',
  styleUrls: ['./team-list-page.component.scss']
})
export class TeamListPageComponent implements OnInit {

  teams: Team [] | [];

  constructor(private teamService:TeamService,
              private route:ActivatedRoute,
              private router: Router) {
    this.teams = [];
  }
  ngOnInit(): void {
    this.teamService.getAllTeams().subscribe(teams => this.teams =  teams);
  }

  onSelectTeam(team: Team):void{
    this.router.navigate([`teams/${team.id}`]);
  }

}
