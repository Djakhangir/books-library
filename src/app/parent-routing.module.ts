import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
//import { CommonModule } from '@angular/common';
import { BookListItemsComponent } from "./book-list-items/book-list-items.component";
//import { UsersComponent } from "./users/users.component";
import { ParentComponent } from "./parent/parent.component";
import { UsersComponent } from './users/users.component';

const parentRoutes: Routes = [
  {
    path:'library',
    component: ParentComponent, 
    pathMatch: 'full'
  },
  {
    path:'library/:id',
    component: ParentComponent, 
  }, 
  { 
    path: 'user/:id',
    component:ParentComponent
  }   
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(parentRoutes)
    //CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class ParentRoutingModule {}
