import { Injectable } from '@angular/core';
import { Colonist } from './model/colonist';
import { Colonists } from './model/colonists'
import { Http, headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
  export class ColonistService {
    colonistsUrl= 'https://red-wdp-api.herokuapp.com/api/mars/colonists';
response: Colonists;

    constructor(private http: Http){}



getColonists(): Promise<Colonist>{
  return this.http.get(this.colonistsUrl)
  .toPromise()
  .then(response => response.json().colonists)
  .catch(this.handleError)
}
private handleError(error: any){
  console.error('An error occured', error);
  return Promise.reject(error.message || error);
}
