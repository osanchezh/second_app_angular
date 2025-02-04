/*import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  { path: '', component: HeroesComponent,title: 'heroes' },
  { path: '/heroes', component: HeroesComponent,title: 'heroes' }
];

//export default RouterModule.forRoot(routes);

export default routes;*/
import { Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'details/:id', component: HeroDetailComponent },
    { path: 'heroes', component: HeroesComponent }
];