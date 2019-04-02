import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListItemsComponent } from './book-list-items.component';

describe('BookListItemsComponent', () => {
  let component: BookListItemsComponent;
  let fixture: ComponentFixture<BookListItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookListItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
