import { Routes } from '@angular/router';
import { PortfolioComponent } from './templates/features/portfolio.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: PortfolioComponent },
];
