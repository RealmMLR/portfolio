import { Page } from '@/app/core/models/Page';
import { Component, Input, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-skills-page',
  imports: [ChartModule],
  templateUrl: './skills-page.component.html',
  styleUrl: './skills-page.component.scss',
})
export class SkillsPageComponent implements OnInit {

  @Input() page: Page = { id: '', title: '' };

  experiences = [
    { title: 'Concepteur Développeur Fullstack', company: 'ACG-Synergies', date: '2025 - Présent', desc: 'Développement d\'applications Angular et Spring Boot.' },
    { title: 'Stagiaire Développeur Fullstack', company: 'ACG-Synergies', date: 'Acril 2025 - Juin 2025', desc: 'Réécriture du portail interne de l\'entreprise.' }
  ];

  diplomas = [
    { title: 'IUT Lyon 1 - BUT Informatique', school: 'IUT Claude Bernard Lyon 1', date: '2025', desc: 'Option Web.' },
    { title: 'Baccalauréat STI2D', school: 'Lycée de la Plaine de l\'Ain', date: '2023', desc: 'Option Option Sciences et Technologies de l\'Ingénieur et Cinéma Audiovisuel.' }
  ];

  radarData: any;
  radarOptions: any;

  ngOnInit(): void {
    this.initRadarChart();
  }

  initRadarChart() {
    this.radarData = {
      labels: ['C++', 'HTML', 'SCSS/CSS', 'PHP', 'JavaScript', 'Java', 'Typescript', 'Python'],
      datasets: [
        {
          label: 'Niveau de maîtrise',
          borderColor: '#ffffff',
          pointBackgroundColor: '#ffffff',
          pointBorderColor: '#ffffff',
          pointHoverBackgroundColor: '#ffffff',
          pointHoverBorderColor: '#ffffff',
          data: [ 70, 95, 90, 75, 95, 95, 95, 70],
          backgroundColor: 'rgba(199, 199, 199, 0.2)',
        }
      ]
    };

    this.radarOptions = {
      plugins: {
        legend: { display: false }
      },
      scales: {
        r: {
          min: 0,
          max: 100,
          grid: { color: 'rgba(255, 255, 255, 0.2)' },
          angleLines: { color: 'rgba(255, 255, 255, 0.2)' },
          pointLabels: {
            color: '#ffffff',
            font: { size: 20, family: 'Oswald' }
          },
          ticks: { display: false }
        }
      }
    };
  }

}
