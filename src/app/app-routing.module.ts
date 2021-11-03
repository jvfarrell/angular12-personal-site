import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './component/heroes/heroes.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HeroDetailComponent } from './component/hero-detail/hero-detail.component';
import { SummonerComponent } from './component/summoner/summoner.component';
import { ResumeComponent } from './component/resume/resume.component';
import { QuoteComponent } from './component/quote/quote.component';
import { HomeComponent } from './component/home/home.component';
import { CatfactComponent } from './component/catfact/catfact.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent},
  { path: 'summoner', component: SummonerComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'quote', component: QuoteComponent },
  { path: 'home', component: HomeComponent},
  { path: 'catFact', component: CatfactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
