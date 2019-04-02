import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseraccountsComponent } from './useraccounts.component';

describe('UseraccountsComponent', () => {
  let component: UseraccountsComponent;
  let fixture: ComponentFixture<UseraccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseraccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseraccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
