import { Component} from '@angular/core';
import { Crud } from 'src/crud';
import { RicercaState, VisualizzaState, AggiungiState, ModificaState, RimuoviState } from 'src/stati';
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
  searchVisible: boolean;
  selezionaVisible: boolean;
  confermaVisible: boolean;
  modificaVisible: boolean;
  rimuoviVisible: boolean;
  annullaVisible: boolean;
  codiceVisible: boolean;
  descrizioneVisible: boolean;

  constructor() {
    console.log(this.crud.getState());
    this.configura();
  }
  
  configura(){
    if (this.crud.getState() instanceof RicercaState){
      this.addVisible = true;
      this.formVisible = false;
      this.searchVisible = true;
      this.selezionaVisible = true;
    } else if (this.crud.getState() instanceof VisualizzaState){
      this.addVisible = false;
      this.formVisible = true;
      this.searchVisible = false;
      this.selezionaVisible = true;
      this.modificaVisible = true;
      this.rimuoviVisible = true;
      this.confermaVisible = false;
      this.annullaVisible = false;
      this.codiceVisible = false;
      this.descrizioneVisible = false;
    } else if (this.crud.getState() instanceof AggiungiState){
      this.addVisible = true;
      this.searchVisible = false;
      this.formVisible = true;
      this.prodotto = new Prodotto;
      this.selezionaVisible = false;
      this.modificaVisible = false;
      this.rimuoviVisible = false;
      this.confermaVisible = true;
      this.annullaVisible = true;
      this.codiceVisible = true;
      this.descrizioneVisible = true;
    } else if (this.crud.getState() instanceof ModificaState){
      this.addVisible = false;
      this.formVisible = true;
      this.searchVisible = false;
      this.selezionaVisible = true;
      this.modificaVisible = false;
      this.rimuoviVisible =false;
      this.confermaVisible = true;
      this.annullaVisible = true;
      this.codiceVisible = true;
      this.descrizioneVisible = true;
    } else if (this.crud.getState() instanceof RimuoviState){
      this.addVisible = false;
      this.formVisible = true;
      this.searchVisible = false;
      this.selezionaVisible = true;
      this.modificaVisible = false;
      this.rimuoviVisible = false;
      this.confermaVisible = true;
      this.annullaVisible = true;
      this.codiceVisible = false;
      this.descrizioneVisible = false;
    }
  }

  add() {
    //this.prodotti.push(this.prodotto);
    //this.prodotto = new Prodotto();
    this.crud.add();
    this.configura();
  }

  modifica(p: Prodotto) {
    console.log(p);
    console.log("siamo in modifica");
    this.crud.modifica();
    this.configura();
  }

  conferma(p: Prodotto) {
    console.log(p);
    console.log("siamo in conferma");
    this.crud.conferma();
    this.configura();
  }

  annulla(p: Prodotto) {
    console.log("siamo in annulla");
    this.crud.annulla();
    this.configura();
  }

  rimuovi(p: Prodotto) {
    console.log(p);
    console.log("siamo in rimuovi");
    this.crud.rimuovi();
    this.configura();
  }

  ricerca(criterio: string){
    console.log(criterio);
    console.log("siamo in ricerca");
    this.crud.ricerca();
    this.configura();
  }

  seleziona(p: Prodotto){
      this.prodotto = p;
      console.log("siamo in seleziona");
      this.crud.seleziona();
      this.configura();
  }
}
