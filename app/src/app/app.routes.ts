import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Correct path

import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ActivityComponent } from './activity/activity.component';


// Declare the routes
export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
 {path:'projects', component: ProjectsComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'Activity', component: ActivityComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },  // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Using 'forRoot' to configure the app routing
  exports: [RouterModule]  // Export RouterModule so it can be used in the AppModule
})
export class AppRoutingModule { }
