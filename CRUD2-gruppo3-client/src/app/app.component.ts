import { Component } from '@angular/core';
import { Prodotto } from './prodotto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  

  add() {

  }
  modifica(p: Prodotto) {
    console.log(p);
  }

  conferma(p: Prodotto) {
    console.log(p);
  }

  annulla(p: Prodotto) {
  }

  rimuovi(p: Prodotto) {
    console.log(p);
  }
}
