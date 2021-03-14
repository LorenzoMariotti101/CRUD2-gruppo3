import { Component} from '@angular/core';
import { Prodotto } from './prodotto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';

  prodotto: Prodotto = new Prodotto();
  prodotti: Prodotto[] = [];
  
  add() {
    this.prodotti.push(this.prodotto);
    this.prodotto = new Prodotto();
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

  cerca(criterio: string){
    console.log(criterio);
  }

  seleziona(p: Prodotto){
      this.prodotto = p;
  }
}
