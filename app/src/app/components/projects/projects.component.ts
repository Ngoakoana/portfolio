import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../footer/footer.component";
import { NavbarComponent } from "../../navbar/navbar.component";  // Import CommonModule for *ngFor

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  standalone: true,
  imports: [CommonModule, FooterComponent, NavbarComponent] // Add CommonModule to imports
 // Add CommonModule to imports
  // Add CommonModule to imports
})
export class ProjectsComponent {
  projects = [
    {
      name: "Cart Easy",
      description: "An efficient e-commerce cart management system.",
      link: "https://github.com/The-DigitalAcademy/cart_easy.git"
    },
    {
      name: "Group Budget Expense",
      description: "A financial management tool for tracking group expenses.",
      link: "https://github.com/The-DigitalAcademy/Group-Budget-Expense.git"
    },
    {
      name: "Yoni Saloon",
      description: "A salon appointment booking and management system.",
      link: "https://github.com/The-DigitalAcademy/Yoni_Saloon.git"
    },
    {
      name: "Life's Insurance",
      description: "A digital insurance management system.",
      link: "https://github.com/The-DigitalAcademy/Life-s-insurance.git"
    },
    {
      name: "Group B Gym",
      description: "A gym membership and workout tracking application.",
      link: "https://github.com/The-DigitalAcademy/Group-B_Gym.git"
    }
  ];
}
