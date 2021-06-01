import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Leslie' },
      { id: 12, name: 'Jeff' },
      { id: 13, name: 'Greg' },
      { id: 14, name: 'Other Jeff' },
      { id: 15, name: 'Lizzie' },
      { id: 16, name: 'Gina' },
      { id: 17, name: 'Morgan' },
      { id: 18, name: 'Lightning' },
      { id: 19, name: 'Ali' },
      { id: 20, name: 'Me' }
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