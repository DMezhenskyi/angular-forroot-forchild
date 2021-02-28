import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { timer } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

export interface PollingConfig {
  interval: number;
}

export const INTERVAL = new InjectionToken<number>('interval');
@Injectable()
export class PollingService {
  public polling$ = timer(0, this.interval || 1000).pipe(shareReplay());
  constructor(@Optional() @Inject(INTERVAL) private interval: number) {}
}
