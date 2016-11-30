import { Component, OnInit  } from '@angular/core';

import { Job }    from './model/Job';
import { Jobs }    from './model/Jobs';
import { JobService }    from './JobService';
import { Colonist } from './model/colonist';
import { ColonistService } from './ColonistService';
import 'rxjs/add/operator/toPromise';

@Component({
  moduleId: module.id,
  selector: 'arrival',
  templateUrl: 'arrival.component.html',
  providers: [JobService, ColonistService],
})
export class ArrivalComponent implements OnInit{
  allJobs: Job[];
  colonist: Colonist;
  job: Job;

constructor(private jobService: JobService){
console.log("I just arrived Yayyy");

  jobService.getJobs().then(this.afterigetjobs)

}

afterigetjobs(response):any{
  console.log("after i get jobs");
}

ngOnInit():void {

this.jobService.getJobs().then((j)=> {this.allJobs=j.jobs ; console.log(this.allJobs)} );
}
}
