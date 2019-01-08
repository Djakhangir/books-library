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
  
  public bookList = [];
  private selectedRow=this.bookList.filter(bookList => bookList.id === this.bookListService.getListOfBooks);

  constructor(
    private router:Router,
    private activatedRoute: ActivatedRoute,
    private bookListComponent : BookListItemsComponent,
    private bookListService : BookListService,
  ) { }
  
  ngOnInit() {
   this.selectedRow = this.bookList.filter(
     bookList => bookList.id);

     this.bookList = this.selectedRow;
  }

  getSelectedBook(event: any) {
  console.log(this.bookList)
  }

//setClickedRow (index) { 
//    this.router.navigate(['useraccounts', index]// {relativeTo: this.activatedRoute}
 //   );
//  }

}
