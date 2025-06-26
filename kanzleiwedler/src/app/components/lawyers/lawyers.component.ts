import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lawyers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lawyers.component.html',
  styleUrl: './lawyers.component.scss'
})
export class LawyersComponent implements OnInit, OnDestroy {
  lawyers = [
     {
      name: 'Manfred Wedler†',
      title: 'Rechtsanwalt und Notar a. D. (bis November 2023)',
      specialization: '',
      experience: 28,
      initials: '',
      image: 'assets/m_wedler.jpg',
      image2: 'assets/m_wedler (1).jpg',
      achievements: [
        
      ]
    },
  {
    
    name: 'Bernhard Wedler',
    title: 'Rechtsanwalt und Notar a. D.',
    specialization: 'Erbrecht, Schuldrecht, Gesellschaftsrecht',
    experience: 52,
    initials: 'BW',
    image: 'assets/b_wedler.jpg',
    image2: 'assets/b_wedler (1).jpg',
    achievements: [
      'Geboren 1942 in Hannover, verheiratet, 2 Kinder',
      'Studium an der Albert-Ludwigs-Universität Freiburg und der Georg-August-Universität Göttingen',
      'Zulassung zur Anwaltschaft 1973',
      'Notar von 1978 bis 2012',
      'Mitglied im Deutschen Anwaltsverein',
      'Justiziar der Zahntechniker-Innung Niedersachsen-Bremen (ZINB)',
      'Fremdsprachen: Englisch, Französisch'
    ],
    personal: 'Der gebürtige Hannoveraner, ehemals Ratsherr in Hannover, begeistert sich für Oldtimer und Motorräder.'
  },
  {
    name: 'Udo Borchardt',
    title: 'Rechtsanwalt, Fachanwalt für Arbeitsrecht, Fachanwalt für Bank- und Kapitalmarktrecht',
    specialization: 'Arbeitsrecht, Bankrecht, Factoring, Erbrecht, Verkehrsrecht',
    experience: 33,
    initials: 'UB',
    image: 'assets/borchardt_u.jpg',
    image2: 'assets/borchardt_u (1).jpg',
    achievements: [
      'Geboren 1957',
      'Zulassung zur Anwaltschaft 1992',
      'Mitglied des Rechts- und Wirtschaftsausschusses des Bundesverbandes Factoring für den Mittelstand mit Sitz in Berlin',
      'Fremdsprache: Englisch',
      'Erfolg für Lehman-Opfer (HAZ-Artikel vom 23.08.2012)'
    ],
    personal: 'Auch Herr Borchardt hofft Woche für Woche auf einen Sieg für die "Roten".'
  },
  {
    name: 'Gerald Müller',
    title: 'Rechtsanwalt, Fachanwalt für Arbeitsrecht',
    specialization: 'Arbeitsrecht, Handels- und Gesellschaftsrecht, Handelsvertreterrecht',
    experience: 32,
    initials: 'GM',
    image: 'assets/mueller_g.jpg',
    image2: 'assets/mueller_g (1).jpg',
    achievements: [
      'Geboren 1961',
      'Ausbildung zum Bankkaufmann bei der NORD/LB Hannover 1980-1982',
      'Zulassung zur Anwaltschaft 1993',
      'Mitglied des Niedersächsischen Ministeriums der Justiz und für Europaangelegenheiten - Landesjustizprüfungsamt - seit 1997',
      'Honorardozent an der Europa Fachakademie Dr. Buhmann',
      'Mitglied im Rat der Stadt Ronnenberg sowie Ortsverbandsvorsitzender der CDU Benthe',
      'Fremdsprache: Englisch'
    ],
    personal: 'Herr Müller teilt die Leidenschaft fürs Rennradfahren mit Herrn Schulz. Zudem drückt er regelmäßig dem Team von Hannover 96 die Daumen.'
  },
   {       name: 'Helge Schulz',       title: 'Rechtsanwalt, Fachanwalt für Miet- und Wohnungseigentumsrecht, Fachanwalt für Bau- und Architektenrecht',       specialization: 'Mietrecht, Wohnungseigentumsrecht, privates Baurecht',       experience: 23,       initials: 'HS',       image: 'assets/schulz_h.jpg',       image2: 'assets/schulz_h (1).jpg',       achievements: [         'Geboren 1973 in Bad Segeberg',         'Studium an der Universität Hannover',         'Zulassung zur Anwaltschaft 2001',         'Mitglied der Arbeitsgemeinschaft Mietrecht und Immobilien im Deutschen Anwaltsverein',         'Referententätigkeit im Mietrecht und Wohnungseigentumsrecht',         'Justiziar des Verbandes der Immobilienverwalter Niedersachsen/Bremen e.V.',         'Fremdsprache: Englisch'       ],       personal: 'Herr Schulz ist leidenschaftlicher Rennradfahrer.'     },
  {
    name: 'Wolf Peter Brennecke',
    title: 'Rechtsanwalt, Fachanwalt für Verkehrsrecht & Fachanwalt für Miet- und Wohnungseigentumsrecht',
    specialization: 'Verkehrsrecht, Mietrecht, allg. Zivilrecht, Forderungseinzug',
    experience: 20,
    initials: 'WPB',
    image: 'assets/brennecke_p (1).jpg',
    image2: 'assets/brennecke_p.jpg',
    achievements: [
      'Geboren 1975 in Lübeck',
      'Studium an der Georg-August-Universität Göttingen',
      'Referendariat im Bezirk OLG Hamm',
      'Zulassung zur Anwaltschaft 2005',
      '2005-2010 Tätigkeit in einer Magdeburger Rechtsanwaltskanzlei',
      'Seit 2013 Fachanwalt für Verkehrsrecht',
      'Mitglied der Arbeitsgemeinschaft Verkehrsrecht im Deutschen Anwaltsverein',
      'Seit 2020 Fachanwalt für Miet- und Wohnungseigentumsrecht',
      'Justiziar der Zahntechniker-Innung Niedersachen-Bremen (ZINB)',
      'Vorstandsmitglied Dr. Buhmann Stiftung für interreligiöse Verständigung',
      'Fremdsprache: Englisch'
    ],
    personal: 'Herr Brennecke ist Mitglied einer Rudergemeinschaft auf dem Maschsee und - wie alle Kanzleikollegen/innen - großer Fußballfan.'
  }
]
  
  
  
  

  selectedLawyerIndex = 0;
  selectedLawyer = this.lawyers[0];
  autoRotateInterval: any;
  userHasSelected = false;

  ngOnInit() {
    this.startAutoRotation();
  }

  ngOnDestroy() {
    this.stopAutoRotation();
  }

  selectLawyer(index: number) {
    this.selectedLawyerIndex = index;
    this.selectedLawyer = this.lawyers[index];
    this.userHasSelected = true;
    this.stopAutoRotation();
  }

  private startAutoRotation() {
    this.autoRotateInterval = setInterval(() => {
      if (!this.userHasSelected) {
        this.selectedLawyerIndex = (this.selectedLawyerIndex + 1) % this.lawyers.length;
        this.selectedLawyer = this.lawyers[this.selectedLawyerIndex];
      }
    }, 15000);
  }

  private stopAutoRotation() {
    if (this.autoRotateInterval) {
      clearInterval(this.autoRotateInterval);
      this.autoRotateInterval = null;
    }
  }
}
