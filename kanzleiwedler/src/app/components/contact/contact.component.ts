import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
 formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  
  submitted = false;
  
  onSubmit() {
    this.submitted = true;
    // Reset form after 3 seconds
    setTimeout(() => {
      this.submitted = false;
      this.formData = { name: '', email: '', subject: '', message: '' };
    }, 3000);
  }
}
