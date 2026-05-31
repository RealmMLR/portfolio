import { Page } from '@/app/core/models/Page';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-page',
  imports: [TranslateModule],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss',
})
export class AboutPageComponent {
  @Input() page: Page = { id: '', title: '' };
}
