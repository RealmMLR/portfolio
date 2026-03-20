import { Routes } from '@angular/router';
import { HomePageComponent } from './templates/features/portfolio/home-page/home-page.component';
import { ContactPageComponent } from './templates/features/portfolio/contact-page/contact-page.component';
import { ProjectsPageComponent } from './templates/features/portfolio/projects-page/projects-page.component';
import { SkillsPageComponent } from './templates/features/portfolio/skills-page/skills-page.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '/home', component: HomePageComponent },
    { path: '/contact', component: ContactPageComponent },
    { path: '/projets', component: ProjectsPageComponent },
    { path: '/competences', component: SkillsPageComponent },
    // {
    //     path: '/admin',
    //     loadChildren: () => import('./templates/features/admin/admin.routes').then(m => m.routes), canActivate: [authGuard]
    // }
];
