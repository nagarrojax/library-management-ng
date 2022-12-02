import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { catalog } from '../../catalog.model';
import { AppService } from 'src/app/app.service';
import { updateSearch } from 'src/app/search/search.model';
import { getDatabase, ref, child, onValue, get, query, limitToFirst, orderByChild, startAt, startAfter, endAt, endBefore, equalTo, Database, onChildAdded, update } from '@angular/fire/database';

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html'
})
export class CatalogItemComponent implements OnInit {
  @Input()
  catalog!: catalog;
  @Output() catalogSelected = new EventEmitter<void>();

  title!: string;
  author!: string;
  imagePath!: string;
  year!: number;
  isbn!: number;
  shortDescription!: string;
  pageCount!: number;
  userYear!: string;
  publishedDate!: string;
  type!: string;
  status!: string;
  catalogArray: catalog[] = []
  constructor(private router: Router,private database: Database, private _databasecalled: AppService) { 
    this._databasecalled.buttonClicked;
  }

 

  ngOnInit(): void {
  }
  
  onUpdateClick(stringValue:string){
    this.router.navigate(['/update']);
    this._databasecalled.buttonClicked = true;
    
   
    this._databasecalled.updateString = stringValue;


    this._databasecalled.arrayOfUpdate.forEach(element => {
        
        if(element.title === stringValue){
        this._databasecalled.isbn = element.isbn
        this._databasecalled.pageCount = element.pageCount
        this._databasecalled.shortDescription = element.shortDescription
        this._databasecalled.year = element.year
        this._databasecalled.title = element.title
        this._databasecalled.imagePath = element.imagePath
        this._databasecalled.publishedDate= element.publishedDate
        this._databasecalled.type = element.type
        this._databasecalled.author = element.author
        this._databasecalled.status = element.status
        }
    
    });
  }
}
