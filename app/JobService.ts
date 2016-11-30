import { Injectable } from '@angular/core';
import { Job } from './model/job';
import { Jobs } from './model/jobs';
import { Http, headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
  export class JobService {
    jobsUrl= 'https://red-wdp-api.herokuapp.com/api/mars/jobs';
response: Jobs;

    constructor(private http: Http){}

getJobsSuccess(response):any{
// response.json().Jobs
console.log ("I am in the job success function")
console.log (response);
console.log (response.json());
}

getJobs(): Promise<any>{
  console.log ("i am trying to get jobs");
  return this.http.get(this.jobsUrl)
  .toPromise()
  .then(this.getJobsSuccess)
  .catch(this.handleError)

}
private handleError(error: any){
  console.error('An error occured', error);
  return Promise.reject(error.message || error);
}
}
