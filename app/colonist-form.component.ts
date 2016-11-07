import { Component } from '@angular/core';
import { Colonist }    from './colonist';
@Component({
  moduleId: module.id,
  selector: 'colonist-form',
  templateUrl: 'arrival.component.html'
})
export class ColonistFormComponent {
  occupations = ['Dust farmer', 'Alien hunter', 'Battery technician','Yoga teacher', 'Front-end developer'];
  model = new Colonist('Charlie',  29, this.occupations[0]);

  submitted = false;

  onSubmit() { this.submitted = true; }

active = true;

newColonist() {
  this.model = new Colonist('', 29, '');
  this.active = false;
  setTimeout(() => this.active = true, 0);
}
}
