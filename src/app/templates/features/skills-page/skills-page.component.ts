import { Page } from '@/app/core/models/Page';
import { Component, Input, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-skills-page',
  imports: [ChartModule, TranslateModule],
  templateUrl: './skills-page.component.html',
  styleUrl: './skills-page.component.scss',
})
export class SkillsPageComponent implements OnInit {

  @Input() page: Page = { id: '', title: '' };

  experiences = [
    { title: 'SKILLS.EXP1.TITLE', company: 'SKILLS.EXP1.COMPANY', date: 'SKILLS.EXP1.DATE', desc: 'SKILLS.EXP1.DESC' },
    { title: 'SKILLS.EXP2.TITLE', company: 'SKILLS.EXP2.COMPANY', date: 'SKILLS.EXP2.DATE', desc: 'SKILLS.EXP2.DESC' }
  ];

  diplomas = [
    { title: 'SKILLS.DIP1.TITLE', school: 'SKILLS.DIP1.SCHOOL', date: 'SKILLS.DIP1.DATE', desc: 'SKILLS.DIP1.DESC' },
    { title: 'SKILLS.DIP2.TITLE', school: 'SKILLS.DIP2.SCHOOL', date: 'SKILLS.DIP2.DATE', desc: 'SKILLS.DIP2.DESC' }
  ];

  radarData: any;
  radarOptions: any;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.initRadarChart();
      this.translate.onLangChange.subscribe(() => {
      this.initRadarChart();
    });
  }

  initRadarChart() {
    this.radarData = {
      labels: ['C++', 'HTML', 'SCSS/CSS', 'PHP', 'JavaScript', 'Java', 'Typescript', 'Python'],
      datasets: [
        {
          label: this.translate.instant('SKILLS.CHART_LABEL'),
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
