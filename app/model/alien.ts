import { iAlien} from './iAlien';




export class Alien implements iAlien{
        type: string;
        submitted_by: number;
        id: number;
        description: string;




  constructor(newType:string, newSubmitted_by:number, newId:number, newDescription: string){
    this.type = newType;
    this.submitted_by = newSubmitted_by;
    this.id = newId;
    this.description =newDescription;

    return this;
  }
}
