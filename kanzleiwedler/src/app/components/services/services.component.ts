import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
 services = [
    {
      title: 'Wirtschaftsrecht',
      icon: '🏛️',
      items: [
        'Unternehmensrechtliche Beratung',
        'Mergers & Acquisitions',
        'Joint Ventures',
        'Compliance Management',
        'Kartellrecht'
      ]
    },
    {
      title: 'Steuerrecht',
      icon: '📊',
      items: [
        'Steuerliche Gestaltungsberatung',
        'Vermögensnachfolgeplanung',
        'Internationale Steuerplanung',
        'Betriebsprüfungen',
        'Steuerstreitigkeiten'
      ]
    },
    {
      title: 'Gesellschaftsrecht',
      icon: '🤝',
      items: [
        'Gesellschaftsgründungen',
        'Umstrukturierungen',
        'Gesellschafterstreitigkeiten',
        'Corporate Governance',
        'Hauptversammlungen'
      ]
    },
    {
      title: 'Prozessführung',
      icon: '⚖️',
      items: [
        'Zivilprozesse',
        'Schiedsverfahren',
        'Internationale Rechtsdurchsetzung',
        'Insolvenzverfahren',
        'Vollstreckungsmaßnahmen'
      ]
    }
  ];
}
