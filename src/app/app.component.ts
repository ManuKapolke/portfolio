import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mainColorA = ['#9747FF', '#4B47FF', '#FF4747'];
  mainColorB = ['#70E61C', '#00BEE8', '#FA7902'];

  ngOnInit(): void {
    this.setColorTheme(2);
  }

  setColorTheme(version: number): void {
    // Set the values of the global CSS custom properties
    document.documentElement.style.setProperty('--mainColorA', this.mainColorA[version - 1]);
    document.documentElement.style.setProperty('--mainColorB', this.mainColorB[version - 1]);
    document.documentElement.style.setProperty('--logoA', `url('assets/logo/v${version}_mk-logo_a.png')`);
    document.documentElement.style.setProperty('--logoB', `url('assets/logo/v${version}_mk-logo_b.png')`);
  }

}
