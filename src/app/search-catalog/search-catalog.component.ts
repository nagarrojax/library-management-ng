import { Component, OnInit } from '@angular/core';
import { Database } from 'firebase/database';
import { AppService } from '../app.service';
import { catalog } from '../catalog/catalog.model';
import { getDatabase, ref, child, onValue, get, query, limitToFirst, orderByChild, startAt, startAfter, endAt, endBefore, equalTo  } from '@angular/fire/database';
@Component({
  selector: 'app-search-catalog',
  templateUrl: './search-catalog.component.html',
  styleUrls: ['./search-catalog.component.css']
})
export class SearchCatalogComponent implements OnInit {
  catalog: catalog[] =[];
  constructor(private database: Database, private _databasecalled: AppService){}

  ngOnInit(): void {this.catalog = this._databasecalled.onDatabaseCalled(this.database)}


  

  getTotalCourses(){
    return this.catalog.length;
  }
  // getTotalFreeCourses(){
  //   return this.courses.filter(course => course.type === 'Free').length;
  // }
  // getTotalPremiumCourses(){
  //   return this.courses.filter(course => course.type === 'Premium').length;
  // }

  courseCountRadioButton: string = 'All';
  searchText: string = '';



  onFilterRadioButtonChanged(data: string){
    this.courseCountRadioButton = data;
    
  }

  

  onSearchTextEntered(searchValue: string){
   
    this.searchText = searchValue;
   
  }




}
