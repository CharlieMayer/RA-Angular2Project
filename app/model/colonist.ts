import { iColonist } from './iColonist';
import { Job } from './Job';


export class Colonist implements iColonist{
    name: string;
    job: Job
    id: number;
    age: number;
    description: string;

  constructor(newName:string, newJob:Job, newID:number, newAge: number, newDescription: string){
    this.name = newName;
    this.job = newJob;
    this.id = newId;
    this.age =newAge;
    this.description = newDescription;

    return this;
  }
}
