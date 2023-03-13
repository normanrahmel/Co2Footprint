import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  direction: string;
  alignment: string;
  reverseOrder: boolean;
  /*
  ngOnInit() {
    const language = navigator.language.toLowerCase();
    if (
      language.startsWith('ab') ||
      language.startsWith('fa') ||
      language.startsWith('he')
    ) {
      this.direction = 'rtl';
    } else {
      this.direction = 'ltr';
    }
  }*/
  /*
  ngOnInit() {
    const language = navigator.language.toLowerCase();
    //if (language.startsWith('ar')) {
    if (language.startsWith('de')) {
      this.direction = 'rtl';
      this.alignment = 'start';
    } else {
      this.direction = 'ltr';
      this.alignment = 'end';
    }
  }*/
  ngOnInit() {
    const language = navigator.language.toLowerCase();
    if (language.startsWith('ar')) {
      //this.direction = 'rtl';
      //this.alignment = 'start';
      this.direction = 'ltr';
      this.alignment = 'start';
    } else {
      //this.direction = 'ltr';
      //this.alignment = 'start';
      this.direction = 'rtl';
      this.alignment = 'start';
    }
  }
}
