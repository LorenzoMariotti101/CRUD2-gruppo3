import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Prodotto } from '../prodotto';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() prodotto: Prodotto = new Prodotto();
  @Input() prodotti: Prodotto[] = [];
  @Output() sel: EventEmitter<Prodotto> = new EventEmitter<Prodotto>();

  constructor() { }

  ngOnInit(): void {
  }

  seleziona(){
    this.sel.emit(this.prodotto);
  }

}
