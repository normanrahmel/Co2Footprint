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

  ngOnInit() {
    const language = navigator.language.toLowerCase();
    if (language.startsWith('en')) {
      // Wenn die Sprache mit 'en' beginnt, werden die Elemente in der Kopfzeile von rechts nach links angeordnet.
      this.direction = 'ltl';
      this.alignment = 'start';
    } else {
      // Wenn die Sprache nicht mit 'ar' beginnt, werden die Elemente in der Kopfzeile von links nach rechts angeordnet.
      this.direction = 'rtl';
      this.alignment = 'start';
    }
  }
}
