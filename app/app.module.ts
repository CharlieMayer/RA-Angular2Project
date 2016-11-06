import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { FormsModule }    from '@angular/forms';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home.component';
import { ArrivalComponent} from './arrival.component';
import {ColonistFormComponent } from './colonist-form.component';
import { ReportComponent } from './report.component';
import { EncountersComponent } from './encounters.component';


@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
      RouterModule.forRoot([
        {
          path: 'home',
          component: HomeComponent,
        },

        {
            path: '',
            redirectTo: '/home',
            pathMatch: 'full'
        },
        {
            path: 'arrival',
            component: ArrivalComponent,
        },
        {
            path: 'report',
            component: ReportComponent,
        },
        {
            path: 'encounters',
            component: EncountersComponent,
        }

      ])
  ],
  declarations: [
      AppComponent,
      HomeComponent,
      ArrivalComponent,
      ColonistFormComponent,
      ReportComponent,
      EncountersComponent,
  ],
  bootstrap: [
    AppComponent ]
  })

export class AppModule { }
