import { Component } from '@angular/core';
import { FooterComponent } from "../../footer/footer.component";
import { ProjectsComponent } from '../projects/projects.component';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../navbar/navbar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent, ProjectsComponent, RouterLink, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']  // Corrected: 'styleUrl' → 'styleUrls'
})
export class HomeComponent {}  // Ensuring class is properly exported
