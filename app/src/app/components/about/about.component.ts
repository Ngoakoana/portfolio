import { Component } from '@angular/core';
import { FooterComponent } from "../../footer/footer.component";
import { NgIf } from '@angular/common';
import { NavbarComponent } from "../../navbar/navbar.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FooterComponent, NgIf, NavbarComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  isModalVisible: boolean = false;

  // Method to show the modal
  showContactModal(): void {
    this.isModalVisible = true;
  }

  // Method to hide the modal
  closeModal(): void {
    this.isModalVisible = false;
  }
}
