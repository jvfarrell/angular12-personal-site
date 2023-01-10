import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './service/in-memory-data.service';

import { AppComponent } from './app.component';
import { HeroesComponent } from './component/heroes/heroes.component';
import { HeroDetailComponent } from './component/hero-detail/hero-detail.component';
import { MessagesComponent } from './component/messages/messages.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HeroSearchComponent } from './component/hero-search/hero-search.component';
import { SummonerComponent } from './component/summoner/summoner.component';
import { QuoteComponent } from './component/quote/quote.component';
import { ChampionMasteryComponent } from './component/champion-mastery/champion-mastery.component';
import { ChampionPanelComponent } from './component/champion-panel/champion-panel.component';
import { ResumeComponent } from './component/resume/resume.component';
import { HomeComponent } from './component/home/home.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CatfactComponent } from './component/catfact/catfact.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { WifeComponent } from './component/wife/wife.component';
import { SkillsComponent } from './component/skills/skills.component';
import { SoftskillsComponent } from './component/softskills/softskills.component';
import { SuiteskillsComponent } from './component/suiteskills/suiteskills.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideRemoteConfig(() => getRemoteConfig()),

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    SummonerComponent,
    QuoteComponent,
    ChampionMasteryComponent,
    ChampionPanelComponent,
    ResumeComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    CatfactComponent,
    WifeComponent,
    SkillsComponent,
    SoftskillsComponent,
    SuiteskillsComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
