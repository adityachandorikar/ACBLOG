import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMainComponent } from './components/index/nav-main/nav-main.component';
import { MaincontentComponent } from './components/maincontent/maincontent.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderFooterComponent } from './components/header-footer/header-footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { AddBlogComponent } from './components/add-blog/add-blog.component';
import { EditBlogComponent } from './components/edit-blog/edit-blog.component';
import { ScienceComponent } from './components/science/science.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { HealthComponent } from './components/health/health.component';
import { TravelComponent } from './components/travel/travel.component';
@NgModule({
  declarations: [
    AppComponent,
    NavMainComponent,
    MaincontentComponent,
    RegistrationFormComponent,
    HeaderFooterComponent,
    SignupFormComponent,
    DashboardComponent,
    AddBlogComponent,
    EditBlogComponent,
    ScienceComponent,
    TechnologyComponent,
    HealthComponent,
    TravelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
