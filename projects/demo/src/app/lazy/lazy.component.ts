import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy',
  template: ` <p>lazy works!</p> `,
})
export class LazyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
