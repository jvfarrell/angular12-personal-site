import { Injectable } from '@angular/core';
import { Hero } from '../hero';
import { League } from '../model/league';
import { CatFact } from '../model/catFact';
import { Summoner } from '../model/summoner';
import { riotError } from '../model/riotError';
import { environment } from 'src/environments/environment';

import { HEROES } from '../mock-heroes';
import { Observable, of, throwError } from 'rxjs';
import { MessageService } from './message.service';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpResponse,
} from '@angular/common/http';
import { catchError, retry, map, tap, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RiotService {
  private heroesUrl = 'api/heroes'; // URL to web api https://na1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/wYTpLyRCmf-LQ2vcMPcZmRsjOeBP6nsIAMbSJMggyO9pW7c
  private catUrl = 'https://catfact.ninja/fact';

  private tempSummoner = {
    id: 'lZzeadU5wYOm4T0-k9KAHoOPRlOsyzEnDQtezUFgnE2TSs0',
    accountId: 'Ee1ucHyLwkMNVI-bkuky_cc77mJzZbIAyCC0N9xmEHPPxQ',
    puuid:
      'ZFPvuhcJ8ePhJmJTggZHqrzZPaGH6opflmKXmugq6UdRhi691pNwfbyD94bRhSbJwZfwvAnnfJJetQ',
    name: 'Failed Lookup',
    profileIconId: 1439,
    revisionDate: 1633321672000,
    summonerLevel: 329,
  };

  private tempLeague = {
    leagueId: '0c69175c-26ab-44b7-ab8a-a73d35cee23a',
    queueType: 'RANKED_SOLO_5x5',
    tier: 'GOLD',
    rank: 'IV',
    summonerId: 'lZzeadU5wYOm4T0-k9KAHoOPRlOsyzEnDQtezUFgnE2TSs0',
    summonerName: 'Azureus',
    leaguePoints: 23,
    wins: 148,
    losses: 193,
    veteran: false,
    inactive: false,
    freshBlood: false,
    hotStreak: false,
  };

  private riotUrl = 'https://na1.api.riotgames.com';
  private apikey = '?api_key=RGAPI-49a7fa97-2327-440b-9e53-18f0685079fa';

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  // /** GET summoner from the server */
  // getSummoner(summonerName: string): Observable<Summoner> {
  //   const url = `${environment.riotUrl}/lol/summoner/v4/summoners/by-name/${summonerName}`;
  //   return this.http.get<Summoner>(url, this.httpOptions)
  //     .pipe(
  //       tap(_ => this.log(`fetched summoner id=${summonerName}`)),
  //       catchError(this.handleError<Summoner>(`get summoner=${summonerName}`, this.tempSummoner))
  //     );
  // }

  /** GET summoner from the server */
  getCatFact(): Observable<CatFact> {
    const url = `${this.catUrl}`;
    return this.http.get<CatFact>(url).pipe(
      tap((_) => this.log(`fetched catfact`)),
      catchError(this.handleError<CatFact>(`get catfact failed`))
    );
  }

  /** GET summoner from the server */
  getSummoner(name: string): Observable<Summoner> {
    const url = `${environment.riotUrl}/lol/summoner/v4/summoners/by-name/${name}${environment.apikey}`;
    return this.http.get<Summoner>(url).pipe(
      tap((_) => this.log(`fetched summoner id=${name}`)),
      catchError(
        this.handleError<Summoner>(`get summoner=${name}`, this.tempSummoner)
      )
    );
  }

  /** GET leagues from the server */
  getLeague(encyptedSummonerId: string): Observable<League[]> {
    const url = `${environment.riotUrl}/lol/league/v4/entries/by-summoner/${encyptedSummonerId}${environment.apikey}`;
    return this.http.get<League[]>(url).pipe(
      tap((_) => this.log(`fetched league for=${encyptedSummonerId}`)),
      catchError(
        this.handleError<League[]>(`get league for=${encyptedSummonerId}`, [])
      )
    );
  }

  // private sum: Observable<{}>;

  // getSummoner(name: string) {
  //   const urlsummoner = `${environment.riotUrl}/lol/summoner/v4/summoners/by-name/${name}${environment.apikey}`;
  //   // const urlleague = `${environment.riotUrl}/lol/league/v4/entries/by-summoner/${encyptedSummonerId}${environment.apikey}`;
  //   this.sum = this.http
  //     .get(urlsummoner)
  //     .pipe(mergeMap(sum => this.http.get(`${environment.riotUrl}/lol/league/v4/entries/by-summoner/${this.sum.encyptedSummonerId}${environment.apikey}`)));
  // }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`RiotService: ${message}`);
  }

  private handleHttpError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.status}`);

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
