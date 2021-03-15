import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
import { Observable, ObservedValuesFromArray } from 'rxjs';
import { Crud } from 'src/crud';
import { RicercaState, VisualizzaState, AggiungiState, ModificaState, RimuoviState } from 'src/stati';
import { DtoCriterio } from './dto-criterio';
import { DtoListaProdotti } from './dto-lista-prodotti';
import { DtoProdotto } from './dto-prodotto';
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

  constructor(private http: HttpClient) {
    console.log(this.crud.getState());
    this.configura();
    let oss: Observable<DtoListaProdotti> = this.http.get<DtoListaProdotti>("http://localhost:8080/seleziona");
    oss.subscribe(d => this.prodotti = d.listaProdotti);
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
    console.log("stato di arrivo: " + this.crud.getState());
    if (this.crud.getState() instanceof AggiungiState){
      console.log("siamo nel conferma dopo add");
      let dto: DtoProdotto = new DtoProdotto();
      dto.prodotto = this.prodotto;
      let oss: Observable<DtoListaProdotti> = this.http.post<DtoListaProdotti>("http://localhost:8080/add", dto);
      oss.subscribe(d => this.prodotti = d.listaProdotti);
      this.prodotto = new Prodotto();
    }else if (this.crud.getState() instanceof ModificaState){
      let dto: DtoProdotto = new DtoProdotto();
      dto.prodotto = this.prodotto;
      let oss: Observable<DtoListaProdotti> = this.http.post<DtoListaProdotti>("http://localhost:8080/modifica", dto);
      oss.subscribe(d => this.prodotti = d.listaProdotti);
      this.prodotto = new Prodotto();
    }else if (this.crud.getState() instanceof RimuoviState){
      let dto: DtoProdotto = new DtoProdotto();
      dto.prodotto = this.prodotto;
      let oss: Observable<DtoListaProdotti> = this.http.post<DtoListaProdotti>("http://localhost:8080/rimuovi", dto);
      oss.subscribe(d => this.prodotti = d.listaProdotti);
      this.prodotto = new Prodotto();
    }
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
    let dto: DtoCriterio = new DtoCriterio();
    dto.criterio = criterio;
    let oss: Observable<DtoListaProdotti> = this.http.post<DtoListaProdotti>("http://localhost:8080/ricerca", dto);
    oss.subscribe(d => this.prodotti = d.listaProdotti);

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
