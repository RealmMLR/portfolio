import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { DialogModule } from 'primeng/dialog';
import { SelectModule } from 'primeng/select';
import { MeterGroupModule } from 'primeng/metergroup';
import { ProjectsPageComponent } from "./projects-page/projects-page.component";
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { SkillsPageComponent } from './skills-page/skills-page.component';
import { Page } from '@/app/core/models/Page';
import { Project } from '@/app/core/models/Projects';
import { ProjectService } from '@/app/core/services/project.service';

@Component({
  selector: 'app-portfolio',
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    TranslateModule,
    DialogModule,
    SelectModule,
    MeterGroupModule,
    HomePageComponent,
    AboutPageComponent,
    ProjectsPageComponent,
    SkillsPageComponent
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent implements OnInit {

  pages: Page[] = [
    { id: '01', title: 'PORTFOLIO' },
    { id: '02', title: 'A PROPOS' },
    { id: '03', title: 'PROJETS' },
    { id: '04', title: 'EXPERIENCES' }
  ];
  currentIndex: number = 0;

  projects: Project[] = [];
  selectedProject: Project | null = null;
  displayModal: boolean = false;

  languages = [
    { name: 'Français', code: 'fr', flag: 'https://flagcdn.com/w20/fr.png' },
    { name: 'English', code: 'en', flag: 'https://flagcdn.com/w20/gb.png' }
  ];
  selectedLang = this.languages[0];

  constructor(
    private projectService: ProjectService,
    private translate: TranslateService
  ) {
    this.translate.setFallbackLang('fr');
  }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe({
      next: (data) => {
        this.projects = data;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des projets du JSON :', err);
      }
    });
  }

  onLangChange(event: any) {
    this.translate.use(event.value.code);
  }

  openModal(projectId: number): void {
    this.selectedProject = this.projects.find(p => p.id === projectId) || null;
    // document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.selectedProject = null;
    // document.body.style.overflow = 'auto';
  }

  goToPage(index: number) {
    this.currentIndex = index;
  }
}
