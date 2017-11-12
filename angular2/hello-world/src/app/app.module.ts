import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {View1Component} from './routes/view1.component';
import {View2Component} from './routes/view2.component';
import {EmployeeComponment} from './employee.component';
import {HomeComponent} from './home.component';
import { AppComponent } from './app.component';
import {appRoutes} from './app.routes';

import { AppRoutingModule } from './app.routing.module';
@NgModule({
  declarations: [
    AppComponent,
    View1Component,
    View2Component,
    EmployeeComponment,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    appRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
