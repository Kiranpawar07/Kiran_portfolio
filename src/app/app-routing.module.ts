import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';

const routes: Routes = [

  {
    path :'home',
    component:HomeComponent
  },
  {
    path :'education',
    component:EducationComponent
  },
  {
    path :'about',
    component:AboutComponent
  },

  {
    path :'projects',
    component:ProjectsComponent
  },
  {
    path :'experience',
    component:ExperienceComponent
  },

  {
    path :'contact',
    component:ContactComponent
  }


]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
