import { Injectable } from '@angular/core';
import {GameFile} from '../model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  startGame(array: GameFile[]) {
    document.getElementById('test') ? document.getElementById('test').remove() : null;
    array.forEach(elt => {
      document.getElementById(elt.id) ? document.getElementById(elt.id).remove() : null;
      const s = document.createElement('script');
      s.setAttribute('src', elt.src);
      s.setAttribute('id', elt.id);
      s.async = false;
      document.getElementById('game').appendChild(s);
    });
  }
}
