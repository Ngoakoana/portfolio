import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { FooterComponent } from '../../footer/footer.component';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FooterComponent, NgIf, NavbarComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  isModalVisible: boolean = false;
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  // Method to show the modal
  showContactModal(): void {
    this.isModalVisible = true;
  }

  // Method to hide the modal
  closeModal(): void {
    this.isModalVisible = false;
  }

  // Method to handle form submission
  submitForm(): void {
    if (this.contactForm.valid) {
      console.log('Form Data:', this.contactForm.value);
      alert('Message sent successfully!');
      this.contactForm.reset();
    }
  }
}
