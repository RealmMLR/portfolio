import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { DialogModule } from 'primeng/dialog';
import { SelectModule } from 'primeng/select';
import { MeterGroupModule } from 'primeng/metergroup';
import { ImageModule } from 'primeng/image';
import { ProjectsPageComponent } from "./projects-page/projects-page.component";
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { SkillsPageComponent } from './skills-page/skills-page.component';
import { Page } from '@/app/core/models/Page';
import { Project } from '@/app/core/models/Projects';
import { ProjectService } from '@/app/core/services/project.service';
import { trigger, transition, style, animate } from '@angular/animations';

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
    ImageModule,
    HomePageComponent,
    AboutPageComponent,
    ProjectsPageComponent,
    SkillsPageComponent
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  animations: [
    trigger('modalAnimation', [
      transition(':enter', [
        style({ opacity: 0, backdropFilter: 'blur(0px)' }),
        animate('300ms ease-out', style({ opacity: 1, backdropFilter: 'blur(8px)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, backdropFilter: 'blur(0px)' }))
      ])
    ])
  ]
})
export class PortfolioComponent implements OnInit {

  pages: Page[] = [
    { id: '01', title: 'PAGES.PORTFOLIO' },
    { id: '02', title: 'PAGES.ABOUT' },
    { id: '03', title: 'PAGES.PROJECTS' },
    { id: '04', title: 'PAGES.EXPERIENCES' }
  ];
  currentIndex: number = 0;
  isLoaderVisible = false;
  isPageReady = true;

  projects: Project[] = [];
  selectedProject: Project | null = null;

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
    this.translate.use('fr');
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
  }

  closeModal(): void {
    this.selectedProject = null;
  }

  goToPage(index: number) {
    if (this.currentIndex === index) return;

    this.isLoaderVisible = true;
    this.isPageReady = false;

    setTimeout(() => {
      this.currentIndex = index;

      setTimeout(() => {
        this.isLoaderVisible = false;
        setTimeout(() => {
          this.isPageReady = true;
        }, 100);

      }, 700);
    }, 500);
  }

  scrollToSection(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
