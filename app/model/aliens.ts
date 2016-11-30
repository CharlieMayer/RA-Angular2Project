import { Alien } from './alien';
import { iAliens} from './iAliens';

export class Aliens implements iAliens{
aliens: Alien[];

 constructor(allNewAliens:Alien[]){
   this.aliens = allNewAliens;

   return this;

 }

}
