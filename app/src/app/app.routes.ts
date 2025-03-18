import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';  // Correct path
import { AboutComponent } from './about/about.component';  // Correct path
import { ProjectComponent } from './project/project.component';  // Correct path
import { ContactComponent } from './contact/contact.component';  // Correct path

// Declare the routes
export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },  // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Using 'forRoot' to configure the app routing
  exports: [RouterModule]
})
export class AppRoutingModule { }
