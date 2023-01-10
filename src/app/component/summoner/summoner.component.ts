import { Component, OnInit, Input } from '@angular/core';
import { RiotService } from '../../service/riot.service';
import { MessageService } from '../../service/message.service';
import { Summoner } from 'src/app/model/summoner';
import { CatFact } from 'src/app/model/catFact';
import { League } from 'src/app/model/league';

import { EmblemService } from '../../services/emblem.service';

@Component({
  selector: 'app-summoner',
  templateUrl: './summoner.component.html',
  styleUrls: ['./summoner.component.css'],
})
export class SummonerComponent implements OnInit {
  sumName: string = 'Azureus';
  sumId: string = 'lZzeadU5wYOm4T0-k9KAHoOPRlOsyzEnDQtezUFgnE2TSs0';
  haveSearched: boolean = false;
  ranksGrabbed: boolean = false;
  haveCatFact: boolean = false;
  summoner: Summoner | undefined;
  leagueStats: League[] | undefined;
  catFact: CatFact | undefined;
  leagueColor: string = 'GoldenRod';

  constructor(
    private riotService: RiotService,
    public emblemService: EmblemService
  ) {}

  ngOnInit(): void {}

  lookup(summonerName: string): void {
    this.riotService
      .getSummoner(summonerName)
      .subscribe((summoner) => (this.summoner = summoner));
  }

  getLeagueStats(): void {
    if (this.summoner != undefined) {
      this.riotService
        .getLeague(this.summoner.id)
        .subscribe((leagueStats) => (this.leagueStats = leagueStats));
    }
  }

  getCatFact(): void {
    this.riotService
      .getCatFact()
      .subscribe((catFact) => (this.catFact = catFact));
  }

  capitalizeFirstLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  mapRankQ(string: string): any {
    var rankedQueue = Object();
    rankedQueue = {
      RANKED_FLEX_SR: 'FLEX 5V5',
      RANKED_SOLO_5x5: 'SOLO/DUO',
      RANKED_TFT_PAIRS: 'TFT DOUBLE UP',
    };
    return rankedQueue[string];
  }

  rankedColor(type: string): any {
    var rankedColor = Object();
    rankedColor = {
      IRON: 'LightSlateGray',
      BRONZE: 'SandyBrown',
      SILVER: 'Silver',
      GOLD: 'GoldenRod',
      PLATINUM: 'DarkSeaGreen',
      GRANDMASTER: 'LightCoral',
      CHALLENGER: 'LightSkyBlue',
      UNRANKED: 'LightCyan',
    };
    this.leagueColor = rankedColor[type];
    return rankedColor[type];
  }
}
