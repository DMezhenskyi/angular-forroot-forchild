import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>ForRoot / For Child Pattern</h1>
    <main>
      <router-outlet></router-outlet>
      <button routerLink="/lazy">Load Lazy</button>
    </main>
  `,
})
export class AppComponent {}
