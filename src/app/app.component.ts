import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { PrimeNG } from 'primeng/config';
import { PtfMenuComponent } from './templates/shared/ptf-menu/ptf-menu.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PtfMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Portfolio';

  translate = inject(TranslateService);
  private primeng = inject(PrimeNG);

  ngOnInit() {
    const browserLang = navigator.language.split('-')[0];
    const supportedLangs = ['fr', 'en'];
    const langToUse = supportedLangs.includes(browserLang) ? browserLang : 'fr';
    this.translate.use(langToUse);
    this.translate.stream('primeng').subscribe((translations) => {
      this.primeng.setTranslation(translations);
    });
  }
}
