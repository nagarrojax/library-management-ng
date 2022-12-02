import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { update } from 'firebase/database';
import { AppService } from 'src/app/app.service';
import { child, Database, get, onValue, ref } from '@angular/fire/database';
import { getDatabase, onChildAdded, onChildChanged, onChildRemoved } from "firebase/database";
import { catalog } from 'src/app/catalog/catalog.model';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-app-books-form',
  templateUrl: './app-books-form.component.html',
  styleUrls: ['./app-books-form.component.css']
})
export class AppBooksFormComponent implements OnInit {
  appBooksForm: FormGroup = new FormGroup ({
    title: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required]),
    imagePath: new FormControl('', [Validators.required, Validators.minLength(5)]),
    year: new FormControl('',[Validators.required]),
    isbn: new FormControl('', [Validators.required]),
    publishedDate: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    pageCount: new FormControl('', [Validators.required]),
    shortDescription: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
  });
  buttonClick:boolean = this._databasecalled.buttonClicked;
  author!: string;
  authorOfForms: string[] = []
  userData = {
    title: this._databasecalled.title,
    imagePath: this._databasecalled.imagePath,
    isbn: this._databasecalled.isbn,
    shortDescription: this._databasecalled.shortDescription,
    pageCount: this._databasecalled.pageCount,
    year: this._databasecalled.year,
    type: this._databasecalled.type,
    publishedDate: this._databasecalled.publishedDate,
    author: this._databasecalled.author,
    status: this._databasecalled.status
  }


  updateObservable = new Observable((observer)=>{
    console.log("Update starting")
    observer.next(this.userData.shortDescription);
    

  });
  
  constructor(private httpClient: HttpClient, private router: Router, private _databasecalled: AppService, private database: Database) { 
    this.onCatalogOfArray();

  }

  ngOnInit(): void {
    
  }

  

  onSubmit() {
    
      this._databasecalled.appBooksForm = this.appBooksForm;
      setTimeout(()=>{
      this._databasecalled.onSubmitCalled();
      }, 3);
  }
  onUpdateButtonClicked(){
    this._databasecalled.buttonClicked = false;
    this.updateObservable.subscribe((val)=>{
      window.alert("Book detail is: "+ val);
    });
  }

    onCatalogOfArray(){
      const databaseCatalogRef = ref(this.database, 'catalog');
      
      onChildAdded(databaseCatalogRef,(snapshot)=>{
        
        snapshot.forEach((childSnapshot)=>{

            if(childSnapshot.key === 'author' ){
                  this.author = childSnapshot.val();
                  
                    
                  
            }
            
          });
          
          
              if(!this.authorOfForms.includes(this.author)){
              
              this.authorOfForms.push(this.author)
                }     
              })
    }

    
}
