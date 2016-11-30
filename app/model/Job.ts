import { iJob } from './iJob';

export class Job implements iJob{
    name: string;
    id: number;
    description: string;

  constructor(newName:string, newID:number, newDescription: string){
    this.name = newName;
    this.id = newId;
    this.description =newDescription;

    return this;
  }
}
