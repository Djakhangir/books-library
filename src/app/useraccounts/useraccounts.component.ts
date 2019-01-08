import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms'; 
import { BookListItemsComponent } from '../book-list-items/book-list-items.component';
import { BookListService } from '../Services/book-list.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-useraccounts',
  templateUrl: './useraccounts.component.html',
  styleUrls: ['./useraccounts.component.scss']
})
export class UseraccountsComponent implements OnInit {
  //reference to bookList array of objects
  public bookList = [];
  //selected Book with any type of value
  selectedBook;

  constructor( // variable and properties link to components and services used in methods
    private router:Router,
    private activatedRoute: ActivatedRoute,
    private bookListService : BookListService,
  ) { }
  
  //on Inititalization use those methods:
  ngOnInit() {
  //to show the parameter caught by url in input tag of HTML, in this case it is ID
    this.activatedRoute.params.subscribe((params) => {
      //plus will convert string into number
      this.selectedBook=this.bookListService.getSingleBook(+params.id);
    });

  
  
  }

}
