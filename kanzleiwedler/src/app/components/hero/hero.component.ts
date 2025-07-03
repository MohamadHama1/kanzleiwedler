import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [MatButtonModule, MatIconModule, RouterModule, CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  standalone: true,
})
export class HeroComponent implements OnInit {
  // Static hero data - German law firm content
  heroData = {
    tagline: 'Unsere Kanzlei',
    title: 'Rechtsanwälte Wedler',
    description: 'Unser Ziel als Kanzlei Rechtsanwälte Wedler ist die umfassende Betreuung unserer Mandanten. Mit Rat und Tat in allen Lebens­situationen. Ohne Wenn und Aber gehen wir für Sie die Sache an!\n\nDie Lösung so genannter »kleiner Probleme« hat für uns dabei den gleichen Stellenwert wie die großer Projekte. Wir setzen dabei auf unsere kompetente Beratung sowie das Vertrauen unserer Mandanten. Denn nur so funktioniert es. Vertrauen gegen Vertrauen.\n\nSieben Anwälte sichern das Know-how, das unsere Mandanten von uns erwarten. Jeder einzelne von uns ist erfahren, kompetent, prozess- und verhandlungssicher.\n\nWir besitzen langjährige, sachkundige Erfahrung in vielen Schwerpunktgebieten. Fragen Sie uns und schauen Sie in die Übersicht unserer Fachgebiete und Interessensschwerpunkte!',
    learnMore: 'Mehr erfahren',
    donateNow: 'Kontakt'
  };

  // Single background image - law firm background
  backgroundImage = 'assets/about-background.jpeg';
  
  // Logo for mobile - law firm logo
  heroMobileLogo = 'assets/images/law-firm-logo.png';

  constructor() {}

  ngOnInit() {
    this.updateBackgroundImage();
  }

  private updateBackgroundImage() {
    const heroBg = document.querySelector('.hero-bg') as HTMLElement;
    if (heroBg) {
      heroBg.style.backgroundImage = `url('${this.backgroundImage}')`;
      heroBg.style.backgroundSize = 'cover';
      heroBg.style.backgroundPosition = 'center';
      heroBg.style.backgroundRepeat = 'no-repeat';
    }
  }

  openContactForm() {
    // Navigate to contact page or open contact form
    // You can modify this to suit your needs
    window.location.href = '/contact';
  }
}