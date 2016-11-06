import { Component } from '@angular/core';
import { Colonist }    from './hero';
@Component({
  moduleId: module.id,
  selector: 'colonist-form',
  templateUrl: 'colonist-form.component.html'
})
export class ColonistFormComponent {
  occupations = ['Dust farmer', 'Alien hunter', 'Battery technician','Yoga teacher', 'Front-end developer';
  model = new Colonist('Charlie',  29, this.occupations[0]);
  submitted = false;
  onSubmit() { this.submitted = true; }

}
