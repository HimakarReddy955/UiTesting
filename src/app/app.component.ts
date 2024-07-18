import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'UiTesting';

  btnText = 'Subscribe';
  isSubscribed = false;

  calc(a: number, b: number) {
    return a * b;
  }

  subscribe() {
    this.isSubscribed = true;
    this.btnText = 'Subscribed';
  }
}
