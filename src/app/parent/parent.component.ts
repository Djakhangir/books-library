import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { BookListItemsComponent } from '../book-list-items/book-list-items.component';
import { BookListService } from '../Services/book-list.service';
import { Observable, Subscription } from 'rxjs';



@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor(
    private router:Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() { }
    
  }
