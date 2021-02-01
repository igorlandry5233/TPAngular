import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Team} from "@team-handling/teams/models/team";
import {environment} from "@team-handling-env/environment";

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http:HttpClient) { }

  getAllTeams() :Observable<Team[]> {
    return this
      .http
      .get<Team[]>(`${environment.backendPoint}/teams`)
  }

  getTeamById(id: number) :Observable<Team> {
    return this
      .http
      .get<Team>(`${environment.backendPoint}/teams/${id}`)
  }
}
