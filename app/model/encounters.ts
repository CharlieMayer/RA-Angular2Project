import { Encounter } from './encounter';
import { iEncounters} from './iEncounters';

export class Encounters implements iEncounters{
encounters: Encounter[];

 constructor(allNewEncounters:Encounter[]){
   this.encounters = allNewEncounters;

   return this;

 }

}
