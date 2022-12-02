export class updateSearch {
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



    


    constructor(title:string, author:string, imagePath: string, year: number, isbn: number, shortDescription: string, pageCount: number,userYear: string,publishedDate: string, type: string,status: string ){
        this.author = author;
        this.title = title;
        this.imagePath = imagePath;
        this.year = year;
        this.isbn = isbn
        this.pageCount = pageCount
        this.publishedDate = publishedDate
        this.shortDescription = shortDescription
        this.status = status
        this.type = type
        this.userYear = userYear
       
    }
}