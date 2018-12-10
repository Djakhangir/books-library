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
  public selectedRow: Number;
  public bookList = []; 
  
constructor(
  private router:Router,
  private activatedRoute: ActivatedRoute,
  private bookListService:BookListService,
) { }

getListOfBooks(): any{
  this.bookList = this.bookListService.getListOfBooks();
}

  ngOnInit( ){
    this.bookList = this.bookListService.getListOfBooks();
  }

public selectbookList(event: any, book: any) {
  book.flag = !book.flag;
}

setClickedRow (index) { 
  this.selectedRow = index;
  this.router.navigate(['library', index]);
}

libraryNavigation (id) {
    this.router.navigateByUrl(id).then(e => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
  }
}

