import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimHomeComponent } from './sim-home/sim-home.component';
import { SimContactComponent } from './sim-contact/sim-contact.component';
import { SimProjectsComponent } from './sim-projects/sim-projects.component';
import { SimInfosComponent } from './sim-infos/sim-infos.component';
import { SimProjectsMontageComponent } from './sim-projects-montage/sim-projects-montage.component';
import { SimProjectsShortfilmComponent } from './sim-projects-shortfilm/sim-projects-shortfilm.component';
import { SimCreditsComponent } from './sim-credits/sim-credits.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: SimHomeComponent },
  { path: 'contact', component: SimContactComponent },
  { path: 'projects', component: SimProjectsComponent },
  { path: 'projects/shortfilm', component: SimProjectsShortfilmComponent },
  { path: 'projects/montage', component: SimProjectsMontageComponent },
  { path: 'simon', component: SimInfosComponent },
  { path: 'credits', component: SimCreditsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
