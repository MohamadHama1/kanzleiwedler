// app.routes.ts
import { Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { LawyersComponent } from './components/lawyers/lawyers.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  { path: '', component: AboutComponent }, // Home page with hero section
  { path: 'about', component: AboutComponent },
  { path: 'lawyers', component: LawyersComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' } // Wildcard route - keep this as the last route
];