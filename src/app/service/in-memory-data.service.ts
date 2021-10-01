import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Garen' },
      { id: 12, name: 'Malphite' },
      { id: 13, name: 'Syndra' },
      { id: 14, name: 'Yasuo' },
      { id: 15, name: 'Shaco' },
      { id: 16, name: 'Mordekaiser' },
      { id: 17, name: 'VelKoz' },
      { id: 18, name: 'Zed' },
      { id: 19, name: 'LeBlanc' },
      { id: 20, name: 'Thresh' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
