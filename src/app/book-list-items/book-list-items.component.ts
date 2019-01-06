import { Component, OnInit, Input } from '@angular/core';
import { BookListService } from '../Services/book-list.service';
import { Router, ActivatedRoute } from '@angular/router';
import { EditServiceService } from '../Services/edit-service.service';
import { ParentComponent } from "../parent/parent.component";

@Component({
  selector: 'app-book-list-items',
  templateUrl: './book-list-items.component.html',
  styleUrls: ['./book-list-items.component.scss']
})
export class BookListItemsComponent implements OnInit {
 
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

setClickedRow (index) { 
  this.selectedRow = index;
  this.router.navigate(['library', index]// {relativeTo: this.activatedRoute}
  );
}

// libraryNavigation (id) {
//     this.router.navigateByUrl(id).then(e => {
//       if (e) {
//         console.log("Navigation is successful!");
//       } else {
//         console.log("Navigation has failed!");
//       }
//     });
//   }

// addRow(){
//   this.bookList.push(this.newBookListCode)
//   this.newBookListCode= {}
// }

// deleteRow(index){
//   this.bookList.splice(index,1)
// }

}

