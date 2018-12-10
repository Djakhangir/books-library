import { Component, OnInit } from '@angular/core';
import { BookListService } from '../book-list.service';
import { Router, ActivatedRoute } from '@angular/router';
import { EditServiceService } from '../edit-service.service';

@Component({
  selector: 'app-book-list-items',
  templateUrl: './book-list-items.component.html',
  styleUrls: ['./book-list-items.component.scss']
})
export class BookListItemsComponent implements OnInit {
  title: string;
  //routingEdit: Array<string|number>;
  

  public listOfUsers = [
     {
    id: 1,
    name:'Kyle Likelyhood',
    author: 'Dumas Alex',
    totalAmount:1,
    dates:'Tue Nov 13 2018 16:33:06 GMT-0600 (Eastern Time)',
    category: 'History',
    flag: false,
     }, 
     {
    id: 2,
    name:'Jacob Levinsky',
    author: 'Alexander Dumas',
    totalAmount:2,
    dates:'Tue Nov 13 2018 16:33:06 GMT-0600 (Eastern Time)',
    category: 'Fiction',
    flag: false,
     },
     {
    id: 3,
    name:'Miranda Kerr',
    author: 'Dumas Someone',
    totalAmount:1,
    dates:'Tue Nov 13 2018 16:33:06 GMT-0600 (Eastern Time)',
    category: 'Romance',
    flag: false,
      }
 ]

 public selectlistOfUsers(event: any, list: any) {
  list.flag = !list.flag;
}

public selectedRow: Number;

 
 public bookList = [
   {
  id: 1,
  bookName:'Count of Monte Cristo',
  authorName: 'Alexander Dumas',
  isbnCode:'@12334567',
  availableBooks:'5',
  publishingDate:'1/1/1991',
  category: 'Fiction',
  flag: false,
   }, 
   {
  id: 2,
  bookName:'Monte Cristo in the Count',
  authorName: 'Dumas Alex',
  isbnCode:'@23345678',
  availableBooks:'3',
  publishingDate:'1/2/1991',
  category: 'History',
  flag: false,
   },
   {
  id: 3,
  bookName:'Cristo of the Monte',
  authorName: 'Dumas Someone',
  isbnCode:'@3456789',
  availableBooks:'1',
  publishingDate:'12/1/1991',
  category: 'Romance',
  flag: false,
   }
]
    
 // public selectbookList(event: any, book: any) {
  //   book.flag = !book.flag;
 // }
  
  constructor(
  private router:Router,
  private activatedRoute: ActivatedRoute,
  private editService:EditServiceService,
   
  ) {
    
  }

  ngOnInit(){
    
  }


setClickedRow (index) { 
  this.selectedRow = index;
  //this.routerService.navigateByUrl('/')
}

public libraryNavigation ( id) {
    this.router.navigateByUrl(id).then(e => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
  }
}

