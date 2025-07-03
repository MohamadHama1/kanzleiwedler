// header.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  navItems = [
    { key: 'about', label: 'Über Uns', route: '/about' },
    { key: 'lawyers', label: 'Anwälte', route: '/lawyers' },
    { key: 'services', label: 'Leistungen', route: '/services' },
    { key: 'contact', label: 'Kontakt', route: '/contact' }
  ];
  
  // Router options for exact matching
  exactMatchOptions = {
    paths: 'exact' as const,
    queryParams: 'ignored' as const,
    fragment: 'ignored' as const,
    matrixParams: 'ignored' as const
  };
  
  defaultMatchOptions = {
    paths: 'subset' as const,
    queryParams: 'ignored' as const,
    fragment: 'ignored' as const,
    matrixParams: 'ignored' as const
  };
  
  constructor(private router: Router) {}
  
  navigate(route: string) {
    this.router.navigate([route]);
  }
  
  getRouterOptions(key: string) {
    return key === 'home' ? this.exactMatchOptions : this.defaultMatchOptions;
  }
}