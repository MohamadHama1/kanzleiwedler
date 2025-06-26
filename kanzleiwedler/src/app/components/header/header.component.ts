import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
 @Output() navigationChange = new EventEmitter<string>();
  
  activeItem = 'about';
  
  navItems = [
    { key: 'about', label: 'Über Uns' },
    { key: 'lawyers', label: 'Anwälte' },
    { key: 'services', label: 'Leistungen' },
    { key: 'contact', label: 'Kontakt' }
  ];
  
  navigate(page: string) {
    this.activeItem = page;
    this.navigationChange.emit(page);
  }
}
