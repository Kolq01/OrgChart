import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OrgChartModule } from 'angular13-organization-chart';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OrgComponent } from './org/org.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GenericoComponent } from './generico/generico.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrgComponent,
    NavbarComponent,
    GenericoComponent,
    NewComponentComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrgChartModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
