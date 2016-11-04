import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { FormsModule }    from '@angular/forms';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home.component';
import { ArrivalComponent} from './arrival.component';


@NgModule({
  imports: [
      BrowserModule,
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

      ])
  ],
  declarations: [
      AppComponent,
      HomeComponent,
      ArrivalComponent,
  ],
  bootstrap: [ AppComponent ]
  })

export class AppModule { }
