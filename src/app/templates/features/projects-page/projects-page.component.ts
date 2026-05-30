import { Page } from '@/app/core/models/Page';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-projects-page',
  imports: [],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.scss',
})
export class ProjectsPageComponent {

  @Input() page: Page = { id: '', title: '' };
  @Input() selectedProject: number | null = null;

  @Output() openModal = new EventEmitter<number>();

  onProjectClick(projectId: number): void {
    this.openModal.emit(projectId);
  }

}
