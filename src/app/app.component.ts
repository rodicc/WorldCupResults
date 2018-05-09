import { Component } from '@angular/core';

import { Team } from './team/team';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'World Cup Results';
  teams : Team[];
  
  constructor () {}

  ngOnInit() {
   
   }
}
