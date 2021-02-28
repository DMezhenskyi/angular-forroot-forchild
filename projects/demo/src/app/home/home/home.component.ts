import { PollingService } from 'polling';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<p>Polling count times: {{ polling.polling$ | async }}</p>`,
})
export class HomeComponent implements OnInit {
  constructor(public polling: PollingService) {}

  ngOnInit(): void {}
}
