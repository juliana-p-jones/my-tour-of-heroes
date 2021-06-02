import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'CarrotTop' },
      { id: 12, name: 'Mom' },
      { id: 13, name: 'Sarah Paulson' },
      { id: 14, name: 'Cats(musical)' },
      { id: 15, name: 'Lizzie' },
      { id: 16, name: 'Gina' },
      { id: 17, name: 'Mr. Bean' },
      { id: 18, name: 'All dogs' },
      { id: 19, name: 'Phoebe Bridgers' },
      { id: 20, name: 'Ziwe' }
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
