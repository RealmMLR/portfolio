import { Page } from '@/app/core/models/Page';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  @Input() page: Page = { id: '', title: '' };
}
