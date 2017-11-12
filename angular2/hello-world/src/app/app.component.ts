import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    
    <div class="container">
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/view1" routerLinkActive="active~">Limk to view 1</a>
      <a routerLink="/view2" routerLinkActive="active">Limk to view 2</a>
    </nav>
    <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  title = 'app works!';
}
