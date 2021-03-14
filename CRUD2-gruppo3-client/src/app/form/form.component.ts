import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Prodotto } from '../prodotto';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() prodotto: Prodotto = new Prodotto();
  @Output() mod: EventEmitter<Prodotto> = new EventEmitter<Prodotto>();
  @Output() conf: EventEmitter<Prodotto> = new EventEmitter<Prodotto>();
  @Output() ann: EventEmitter<Prodotto> = new EventEmitter<Prodotto>();
  @Output() rim: EventEmitter<Prodotto> = new EventEmitter<Prodotto>();

  constructor() {
    this.prodotto = new Prodotto();
   }

  ngOnInit(): void {
  }
  modifica() {
    this.mod.emit(this.prodotto);
  }

  conferma() {
    this.conf.emit(this.prodotto);
  }

  annulla() {
    this.ann.emit(this.prodotto);
    this.prodotto=new Prodotto();
  }

  rimuovi() {
    this.rim.emit(this.prodotto);
    
  }
}
