import { Injectable } from '@angular/core';
import { BookListItemsComponent } from '../book-list-items/book-list-items.component'
import { ActivatedRoute } from '@angular/router';

@Injectable()

export class BookListService {

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

  constructor( ) { }

     // to get the list of books for bookListItemComponent table...
getListOfBooks()
{
  return this.bookList
}
    //to get the single book by unique value...
getSingleBook(bookId : number) { 

  //code below is the same as: 
  
  // abook= null;
    // for (let index = 0; index, index<this.bookList.length; index++) {
    // if (this.bookList[index].id === bookId) { 
      // aBook = this.bookList [index] }};

  const aBook = this.bookList.filter(bookList => bookList.id === bookId);
  return aBook;
};

}