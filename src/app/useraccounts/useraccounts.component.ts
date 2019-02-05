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
  isDisabled:Boolean=false; //defined variable with boolean value to disable the input tag
  editBool;

  constructor( // variable and properties link to components and services used in methods
    private router:Router,
    private activatedRoute: ActivatedRoute,
    private bookListService : BookListService,
  ) { }
  
  //on Inititalization use those methods:
  ngOnInit() {
      //to show the parameter caught by url in input tag of HTML, in this case it is ID
  this.activatedRoute.params.subscribe((params) => {
      //selectedBook method brings the method from the service to select a book and pass the values to input tag
  this.selectedBook=this.bookListService.getSingleBook(+params.id); //plus will convert string into number
      //disables the input tag after selection to avoid unregistered updates
  this.isDisabled=this.selectedBook
  this.isDisabled = params.action!== 'Edit';
});

      //subscribing to change the editBool variable after click button

  // this.bookListService.currentIsEnabled.subscribe(editBool=>{
  //   this.editBool=editBool
  //   this.isDisabled = this.editBool? false: true 
 
  //   console.log(editBool, this.isDisabled)
  // });
      
      
    
}

}
