import { Component, OnInit, Input } from '@angular/core';
import { BookListService } from '../book-list.service';
import { Router, ActivatedRoute } from '@angular/router';
import { EditServiceService } from '../edit-service.service';
import { ParentComponent } from "../parent/parent.component";

@Component({
  selector: 'app-book-list-items',
  templateUrl: './book-list-items.component.html',
  styleUrls: ['./book-list-items.component.scss']
})
export class BookListItemsComponent implements OnInit {
 
  public selectedRow: Number;
  public bookList = []; 
 // private newBookListCode: any = {}

 //@Input() parentComponent:ParentComponent;

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

selectbookList(event: any, book: any) {
  book.flag = !book.flag;
}

setClickedRow (index) { 
  this.selectedRow = index;
  this.router.navigate(['/library', index]);
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

// addRow(){
//   this.bookList.push(this.newBookListCode)
//   this.newBookListCode= {}
// }

// deleteRow(index){
//   this.bookList.splice(index,1)
// }

}

