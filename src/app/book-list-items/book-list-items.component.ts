// Imported dependencies for this component

import { Component, OnInit, Input } from '@angular/core';
import { BookListService } from '../Services/book-list.service';
import { Router, ActivatedRoute } from '@angular/router'; 
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-book-list-items',
  templateUrl: './book-list-items.component.html',
  styleUrls: ['./book-list-items.component.scss']
})
export class BookListItemsComponent implements OnInit {

  // custom variables to use and to refer to;
  private subscription : Subscription;
  public selectedRow: Number;
  public bookList = []; 
 
  constructor(
    // varibales to use in constructor meaning related to other components, methods, services etc.
  private router:Router,
  private activatedRoute: ActivatedRoute,
  private bookListService:BookListService,
) { }

//method called from bookservice
getListOfBooks(): any{
  this.bookList = this.bookListService.getListOfBooks();
}

ngOnInit( ){ //on initialization call methods: 
  //method from the book service which provides the list of mock data to the table from the service
    this.bookList = this.bookListService.getListOfBooks();

 //show Id of each element in url upon selection by activated route-subscription for parameters by selected row...
 //... where selected row equals to paramenter as an ID
    this.subscription = this.activatedRoute.params.subscribe((params) => {
      this.selectedRow=params.id;

  });
};

//search button method to loop through and filter by type element name in the book service mock data
// submitFilter(): any{
//   this.searchBook = this.searchBook;
// }

//method which show the id (index) and name of the component in url, pseudo url navigation
setClickedRow (index) { 
  this.router.navigate(['library', index]// {relativeTo: this.activatedRoute}
  );
}

//add data method through add button

// addRow(){
//   this.bookList.push(this.newBookListCode)
//   this.newBookListCode= {}
// }

// delete method through delete button

// deleteRow(index){
//   this.bookList.splice(index,1)
// }

}

