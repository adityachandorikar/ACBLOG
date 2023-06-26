import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { HeaderFooterComponent } from './components/header-footer/header-footer.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddBlogComponent } from './components/add-blog/add-blog.component';
import { NavMainComponent } from './components/index/nav-main/nav-main.component';
import { MaincontentComponent } from './components/maincontent/maincontent.component';
import { EditBlogComponent } from './components/edit-blog/edit-blog.component';
import { AppComponent } from './app.component';
import { ScienceComponent } from './components/science/science.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { HealthComponent } from './components/health/health.component';
import { TravelComponent } from './components/travel/travel.component';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  {path:"",component:AppComponent,children:[
    {path:"",component:HeaderFooterComponent},
  {path:"registration",component:RegistrationFormComponent},
  {path:"login",component:SignupFormComponent},
  {path:"dashboard",canActivate:[AuthGuard],component:DashboardComponent,
  children:[
    {path:"",component:MaincontentComponent},
 {path:"add",component:AddBlogComponent},
 {path:"edit/:id",component:EditBlogComponent},
 {path:"science",component:ScienceComponent},
 {path:"technology",component:TechnologyComponent},
 {path:"health",component:HealthComponent},
 {path:"travel",component:TravelComponent}
 ]
},]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
