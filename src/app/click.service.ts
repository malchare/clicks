import { Injectable } from '@angular/core';
import { Subject, Observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClickService {

  private sumClicks = new Subject<number>();
  sum = 0;

  constructor() { }

  add() {
    this.sum += 1;
    this.sumClicks.next(this.sum);
  }

  getSum(): Observable<number> {
    return this.sumClicks.asObservable();
  }

}
