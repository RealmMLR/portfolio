import { Page } from '@/app/core/models/Page';
import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects-page',
  imports: [NgClass, TranslateModule],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.scss',
})
export class ProjectsPageComponent {

  @Input() page: Page = { id: '', title: '' };
  @Input() isPageReady: boolean = false;
  @Input() selectedProject: number | null = null;

  @Output() openModal = new EventEmitter<number>();

  onProjectClick(projectId: number): void {
    this.openModal.emit(projectId);
  }

}
