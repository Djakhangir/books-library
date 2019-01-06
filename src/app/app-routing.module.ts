import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { BookListItemsComponent } from './book-list-items/book-list-items.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { ParentComponent } from "../app/parent/parent.component";


const routes: Routes = [
  {
    path:'',
    component: LogInComponent,
    pathMatch:'full'
  },  
  {
    path: 'library',
    component:ParentComponent,
  }, 
  {
    path:'register',
    component: RegisterComponent,
  },
  // {
  //   path:'**',
  //   redirectTo:'',
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
