import { child, Database, get, onValue, ref } from '@angular/fire/database';

import { getDatabase, onChildAdded, onChildChanged, onChildRemoved } from "firebase/database";


export class catalog {
    public title!: string;
    public author!: string;
    public imagePath!: string;
    public year!: number;


    


    constructor(title:string, author:string, imagePath: string, year: number ){
        this.author = author;
        this.title = title;
        this.imagePath = imagePath;
        this.year = year;
       
    }
}