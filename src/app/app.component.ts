import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Chrono', url: '/page-chrono', icon: 'paper-plane' },
    { title: 'Laps', url: '/page-laps', icon: 'paper-plane' },
    { title: 'Records', url: '/page-records', icon: 'paper-plane' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
