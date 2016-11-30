import { Colonist } from './colonist';
import { iColonists} from './iColonists';

export class Colonists implements iColonists{
colonists: Colonist[];

 constructor(allNewColonists:Colonist[]){
   this.colonists = allNewColonists;

   return this;

 }

}
