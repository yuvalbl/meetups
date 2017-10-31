import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-some-component',
  template: `<h2>
    some-component works!
  </h2>
  <p *ngIf='clicks > 0'>{{clicks}}</p>
  <button (click)="foo($event)">CLICK ME</button>
  `,
  styles: ['h2 {background-color: antiquewhite}']
})
export class SomeComponent implements OnInit {
  clicks = 0;
  // private clicks = 0;
  constructor() { }

  ngOnInit() {
    const arrow = () => {console.warn('I am an arrow function')};
    arrow();
  }

  foo() {
    console.log('clicked!');
    this.clicks++;
  }
}
