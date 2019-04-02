//parent routing module needed for parent component to route to its children components. it is done to keep other components lightweight

//imported dependencies
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { ParentComponent } from "./parent/parent.component";
import { BookListItemsComponent } from './parent/book-list-items/book-list-items.component';


// router outlet to listen which route go after which, sequence matters
const parentRoutes: Routes = [
  {
    path:'library',
    component: ParentComponent, 
  pathMatch:'full'
  },
  {
    path:'library/:id',
    component: ParentComponent, 
//   children:[  {
//     path:'library/:id/:action', //register edit button link to enable the input tag
//     component:ParentComponent,
//   }, 
// ],
},
{
  path:'library/:id/:action',
  component:ParentComponent,
},

  // { 
  //   path: 'user/:id',
  //   component:ParentComponent
  // },  
  // {
  //   path:'useraccounts/:id',
  //   component:ParentComponent
  // }
];

@NgModule({
  declarations: [],
  imports: [ //instead of forRoot with indicate that this routing module is helper to the app.routing module (not sure)
    RouterModule.forChild(parentRoutes)
    //CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class ParentRoutingModule {}
