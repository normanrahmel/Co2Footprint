import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  // Methode zur Überprüfung der Spracheinstellung des Benutzers
  isLanguageEnglish(): boolean {
    return navigator.language.startsWith('en');
  }
}
