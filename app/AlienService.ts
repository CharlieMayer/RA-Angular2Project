import { Injectable } from '@angular/core';
import { Alien } from './model/alien';
import { Aliens } from './model/aliens';
import { Http, headrs } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
  export class AlienService {
    colonistsUrl= 'https://red-wdp-api.herokuapp.com/api/mars/aliens';

    constructor(private http: Http){}
  }


getAliens(): Promise<IAlien[]>{
  return this.http.get(this.aliensUrl)
  .toPromise()
  .then(response => response.json().aliens)
  .catch(this.handleError)
}
private handleError(error: any) {
  console.error('An error occured', error);
  return Promise.reject(error.message || error);
}
