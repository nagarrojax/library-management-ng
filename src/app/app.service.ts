import { Injectable } from '@angular/core';
import { child, Database, get, onValue, ref } from '@angular/fire/database';
import { catalog } from './catalog/catalog.model';
import { getDatabase, onChildAdded, onChildChanged, onChildRemoved } from "firebase/database";
import { updateSearch } from './search/search.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  title!: string;
  author!: string;
  imagePath!: string;
  year!: number;
  isbn!:number;
  shortDescription!: string;
  pageCount!: number;
  publishedDate!: string;
  type!: string;
  status!: string;
  buttonClicked: boolean = false;
  catalogArray: catalog[] = []
  authorArray:string[] = []
  updateString: string = '';
  arrayOfUpdate: any[] = []

  

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

  constructor(private database: Database, private httpClient: HttpClient, private router: Router) { }

  onDatabaseCalled(database: Database) {
    const databaseCatalogRef = ref(this.database, 'catalog');
    
    onChildAdded(databaseCatalogRef,(snapshot)=>{
      
        snapshot.forEach((childSnapshot)=>{
    
            if(childSnapshot.key === 'title'){
             
                this.title = childSnapshot.val()
                
            }
            else if(childSnapshot.key === 'author'){
                
                this.author = childSnapshot.val();
                this.authorArray.push(this.author)
            }
            else if(childSnapshot.key === 'year'){
                 
                this.year = childSnapshot.val();
            }
            else if(childSnapshot.key === 'imagePath'){
               
                this.imagePath = childSnapshot.val();
            }
          });
          this.authorArray.push(this.author)
          
})

return this.catalogArray
  }

  onSubmitCalled(){
    // setTimeout(()=>{
    this.httpClient
    .post(
      'https://frontendnagarro-default-rtdb.firebaseio.com/catalog.json',
      this.appBooksForm.value
    ).subscribe(
      (response) => 
      {
        
        this.appBooksForm.reset();
        
        window.alert("succesfully saved the data");
        this.router.navigate(['/catalog'])
        
      }, 
      (error) => 
      {
        let errorMessage = " Could not save the data: " + error.error.error.message;
        window.alert(errorMessage);
      }
      );
    // }, 3000);
  }
  
  
}
