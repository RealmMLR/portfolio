import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'ptf-menu-component',
  imports: [CommonModule, RouterModule, FormsModule, SelectModule, TranslateModule],
  templateUrl: './ptf-menu.component.html',
  styleUrl: './ptf-menu.component.scss',
})
export class PtfMenuComponent {

  navItems = [
    { label: 'menu.home', path: '/home' },
    { label: 'menu.projects', path: '/projets' },
    { label: 'menu.skills', path: '/competences' },
    { label: 'menu.contact', path: '/contact' }
  ];

  languages = [
    { name: 'Français', code: 'fr', flag: 'https://flagcdn.com/w20/fr.png' },
    { name: 'English', code: 'en', flag: 'https://flagcdn.com/w20/gb.png' }
  ];
  selectedLang = this.languages[0];

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('fr');
  }

  onLangChange(event: any) {
    this.translate.use(event.value.code);
  }
}
