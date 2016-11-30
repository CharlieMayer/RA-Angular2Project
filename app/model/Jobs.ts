import { Job} from './job';
import { iJobs } from './iJobs';


export class Jobs implements iJobs{
    jobs: Job[]

  constructor(allNewJobs: Job[]){
    this.jobs = allNewJobs;

    return this;
  }
}
