import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { child, Database, get, onValue, ref } from '@angular/fire/database';
import { catalog } from '../catalog.model';
import { getDatabase, onChildAdded, onChildChanged, onChildRemoved } from "firebase/database";
import { AppService } from 'src/app/app.service';
import { SearchCatalogComponent } from 'src/app/search-catalog';
import { SearchComponent } from 'src/app/search/search.component';





@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css']
})
export class CatalogListComponent implements OnInit {
  
  @Output() catalogWasSelected = new EventEmitter<catalog>();
  catalog: catalog[] =[];
  
  constructor(private database: Database, private _databasecalled: AppService ){}

  ngOnInit(): void {
    this.catalog = this._databasecalled.onDatabaseCalled(this.database)
  }
  oncatalogSelected(catalog: catalog){this.catalogWasSelected.emit(catalog);}
  courseCountRadioButton: string = 'All';
  searchText: string = '';

  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
    
  }
}
