import { Component, OnInit } from '@angular/core';
import { Prodotto } from '../prodotto';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  prodotti: Prodotto[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  seleziona(){

  }

}
