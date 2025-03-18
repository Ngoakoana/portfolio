import { Component } from '@angular/core';
import { FooterComponent } from "../../footer/footer.component";
import { NgModel } from '@angular/forms';
import { NgIf } from '@angular/common';
import { NavbarComponent } from "../../navbar/navbar.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FooterComponent, NgIf, NavbarComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
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
