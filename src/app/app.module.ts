import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing} from './app.routing';
import { ChartsModule } from 'ng2-charts';


import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { ProfileComponent } from './profile/profile.component';
import { WeightComponent } from './weight/weight.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    ProfileComponent,
    WeightComponent
  ],
  imports: [
    BrowserModule,routing,ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
