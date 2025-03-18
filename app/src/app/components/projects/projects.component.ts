import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../footer/footer.component";
import { NavbarComponent } from "../../navbar/navbar.component";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  standalone: true,
  imports: [CommonModule, FooterComponent, NavbarComponent]
})
export class ProjectsComponent {
  projects = [
    {
      name: "Cart Easy",
      description: "An efficient e-commerce cart management system.",
      link: "https://github.com/The-DigitalAcademy/cart_easy.git",
      image: "cut.png" // Update with actual image path
    },
    {
      name: "Group Budget Expense",
      description: "A financial management tool for tracking group expenses.",
      link: "https://github.com/The-DigitalAcademy/Group-Budget-Expense.git",
      image: "https://i.pinimg.com/736x/a6/81/27/a6812795365734d0076b58a1fbb9f5d7.jpg"
    },
    {
      name: "Yoni Saloon",
      description: "A salon appointment booking and management system.",
      link: "https://github.com/The-DigitalAcademy/Yoni_Saloon.git",
      image: "https://i.pinimg.com/736x/b6/fc/37/b6fc3740d0a1e49741d9b077126b1593.jpg"
    },
    {
      name: "Life's Insurance",
      description: "A digital insurance management system.",
      link: "https://github.com/The-DigitalAcademy/Life-s-insurance.git",
      image: "https://i.pinimg.com/736x/68/92/d4/6892d4fbc0a3dd20ab053ef2333853d3.jpg"
    },
    {
      name: "Group B Gym",
      description: "A gym membership and workout tracking application.",
      link: "https://github.com/The-DigitalAcademy/Group-B_Gym.git",
      image: "https://i.pinimg.com/736x/44/1e/85/441e8559a94328a48d7149fd645eb10b.jpg"
    }
  ];
}
