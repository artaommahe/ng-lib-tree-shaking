import { Component } from '@angular/core';
import { smth1 } from 'common-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = smth1('main-app');
}
