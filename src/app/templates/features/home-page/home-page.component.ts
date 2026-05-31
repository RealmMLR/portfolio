import { Page } from '@/app/core/models/Page';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home-page',
  imports: [TranslateModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  @Input() page: Page = { id: '', title: '' };
}
