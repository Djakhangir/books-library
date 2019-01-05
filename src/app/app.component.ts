import { Component } from '@angular/core';
import { BookListService } from './Services/book-list.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'books-library';

  constructor (){ }
}
