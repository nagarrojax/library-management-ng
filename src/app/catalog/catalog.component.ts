import { Component, OnInit } from '@angular/core';

import { catalog } from './catalog.model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html'
})
export class CatalogComponent implements OnInit {
  selectedCatalog!: catalog;
  constructor() { }

  ngOnInit(): void {
  }

}