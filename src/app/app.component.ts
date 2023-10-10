import { Component } from '@angular/core';
import * as AOS from 'aos';
// import AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() { }

  ngOnInit(): void {
    AOS.init(
      {
        once: true
      }
    );
  }


}
