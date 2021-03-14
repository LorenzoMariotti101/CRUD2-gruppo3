import { Component} from '@angular/core';
import { Crud } from 'src/crud';
import { RicercaState } from 'src/stati';
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
  crud: Crud = new Crud();
  addVisible: boolean;
  formVisible: boolean;

  constructor() {
    console.log(this.crud.getState());
    this.configura();
  }
  
  configura(){
    if (this.crud.getState() instanceof RicercaState){
      this.addVisible = true;
      this.formVisible = false;
    }
  }

  add() {
    //this.prodotti.push(this.prodotto);
    //this.prodotto = new Prodotto();
    this.crud.add();
  }

  modifica(p: Prodotto) {
    console.log(p);
    console.log("siamo in modifica");
    this.crud.modifica();
  }

  conferma(p: Prodotto) {
    console.log(p);
    console.log("siamo in conferma");
    this.crud.conferma();
  }

  annulla(p: Prodotto) {
    console.log("siamo in annulla");
    this.crud.annulla();
  }

  rimuovi(p: Prodotto) {
    console.log(p);
    console.log("siamo in rimuovi");
    this.crud.rimuovi();
  }

  ricerca(criterio: string){
    console.log(criterio);
    console.log("siamo in ricerca");
    this.crud.ricerca();
  }

  seleziona(p: Prodotto){
      this.prodotto = p;
      console.log("siamo in seleziona");
      this.crud.seleziona();
  }
}
