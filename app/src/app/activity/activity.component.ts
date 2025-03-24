import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [FooterComponent, NavbarComponent],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.css'
})
export class ActivityComponent {

  
  isModalVisible: boolean = false;

  // Method to show the modal
  showContactModal(): void {
    this.isModalVisible = true;
  }

  // Method to hide the modal
  closeModal(): void {
    this.isModalVisible = false;
  }
  message: string;

  constructor() {
    this.message = "I give back to the community through my organization, Rise and Shine Disability Empowerment. We are dedicated to helping and empowering young disabled children, providing them with the resources, support, and opportunities they need to thrive. Our mission is to create a brighter future for them by offering mentorship, education, and advocacy, enabling these children to live fulfilling and independent lives.";
  }

  ngOnInit(): void {
  }


}


