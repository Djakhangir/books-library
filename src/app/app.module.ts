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
import { UseraccountsComponent } from './useraccounts/useraccounts.component';
import { FilterPipe } from './filter.pipe';

// app module is the main module and root of the aplication. here we combine everything to work with one another.  
//Declaration sequence matters, that is why we passed parent routing before the components and imported it before the appRouting Module.
@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    BookListItemsComponent,
    LogInComponent,
    RegisterComponent,
    UsersComponent,
    UseraccountsComponent,
    FilterPipe
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    ParentRoutingModule,
    AppRoutingModule
  ], //providers are the services and components which provide different data or methods to another services or components
  providers: [BookListService, UserListService],
  //bootstrap is saying that we use bootstrap in app component (which is the root of all component)
  bootstrap: [AppComponent]
})
export class AppModule { }
