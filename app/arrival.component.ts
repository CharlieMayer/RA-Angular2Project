
import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { Router } from '@angular/router';
import { AllJobs } from './model/AllJobs';


@Component({
  selector: 'arrival',
  templateUrl: './app/arrival.component.html',
  styleUrls: ['./app/arrival.component.scss']

})
export class ArrivalComponent {
  occupation  = ['Dust Farmer', 'Alien hunter', 'Battery Technician',
'Yoga teacher', 'Front-end developer'];

submitted= false;

onSubmit(){ this.submitted=true;}

}
