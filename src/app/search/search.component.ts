import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { getDatabase, ref, child, onValue, get, query, limitToFirst, orderByChild, startAt, startAfter, endAt, endBefore, equalTo, Database, onChildAdded, update } from '@angular/fire/database';
import { AppService } from '../app.service';
import { catalog } from '../catalog/catalog.model';
import { updateSearch } from './search.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
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
  updateSearchFunction: updateSearch[] = []
  constructor(private database: Database, private _databasecalled: AppService) { 
    
  }

  ngOnInit(): void {
  }


  enteredSerchValue: string = '';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged(){
   this.searchTextChanged.emit(this.enteredSerchValue)
  }

  onSearchCalled () {

   
    let num1  = this.enteredSerchValue.length
    
    let charValueNext = String.fromCharCode(this.enteredSerchValue.charCodeAt(0)+1)
    const databaseCatalogRef = query(ref(this.database, 'catalog'), orderByChild('title'), startAt(this.enteredSerchValue.toLowerCase()), endBefore(charValueNext));
    
    get(databaseCatalogRef)
    .then((snapshot)=>{
      
      snapshot.forEach((childSnapshot)=>{
        
        childSnapshot.forEach((grandChildSnapshot)=>{
            if(grandChildSnapshot.key === 'title'){       
              this.title = grandChildSnapshot.val();
              
                             
            }
            else if(grandChildSnapshot.key === 'author'){
                this.author = grandChildSnapshot.val();
                
            }
            else if(grandChildSnapshot.key === 'year'){      
                this.year = grandChildSnapshot.val();
                
            }
            else if(grandChildSnapshot.key === 'imagePath'){                 
                this.imagePath = grandChildSnapshot.val();
               
            }
            else if(grandChildSnapshot.key === 'isbn'){                 
              this.isbn = grandChildSnapshot.val();
             
          }
          else if(grandChildSnapshot.key === 'pageCount'){                 
            this.pageCount = grandChildSnapshot.val();
           
        }
        else if(grandChildSnapshot.key === 'shortDescription'){                 
          this.shortDescription = grandChildSnapshot.val();
         
      }
      else if(grandChildSnapshot.key === 'publishedDate'){                 
        this.publishedDate = grandChildSnapshot.val();
       
    }
    else if(grandChildSnapshot.key === 'type'){                 
      this.type = grandChildSnapshot.val();
     
  }
  else if(grandChildSnapshot.key === 'status'){                 
    this.status = grandChildSnapshot.val();
   
}
        })
        this._databasecalled.catalogArray.push(new catalog(this.title, this.author, this.imagePath, this.year)) 
        this.updateSearchFunction.push(new updateSearch(this.title, this.author, this.imagePath, this.year, this.isbn, this.shortDescription, this.pageCount, this.userYear, this.publishedDate, this.type, this.status))
        
      
      })
      
      });
      this._databasecalled.arrayOfUpdate = this.updateSearchFunction
      
   

this._databasecalled.catalogArray.splice(0)
return this.catalogArray;

  }

}
