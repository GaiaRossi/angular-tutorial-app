/**il servizio di occupa di iniettare i dati tra le varie componenti */
import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Hero[]{
    return HEROES;
  }

}
