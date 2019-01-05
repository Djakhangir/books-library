import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListService } from './Services/book-list.service';
import { EditServiceService } from './Services/edit-service.service';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { BookListItemsComponent } from './book-list-items/book-list-items.component';
import { UsersComponent } from './users/users.component';
import { UserListService } from './Services/user-list.service';
import { ParentComponent } from './parent/parent.component';
import { ParentRoutingModule } from './parent-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    BookListItemsComponent,
    LogInComponent,
    RegisterComponent,
    UsersComponent,
    ParentComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    ParentRoutingModule,
    AppRoutingModule
  ],
  providers: [BookListService, UserListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
