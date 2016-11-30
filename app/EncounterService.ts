import { Injectable } from '@angular/core';
import { Encounter } from './model/encounter';
import { Encounters } from './model/encounters';
import { Http, headrs } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
  export class EncounterService {
    colonistsUrl= 'https://red-wdp-api.herokuapp.com/api/mars/encounters';
response: Colonists;

    constructor(private http: Http){}
  }


getColonists(): Promise<Encounter>{
  return this.http.get(this.EncountersUrl)
  .toPromise()
  .then(response => response.json().Encounters)
  .catch(this.handleError)
}
private handleError(error: any){
  console.error('An error occured', error);
  return Promise.reject(error.message || error);
}
