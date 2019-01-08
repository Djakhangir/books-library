//parent routing module needed for parent component to route to its children components. it is done to keep other components lightweight

//imported dependencies
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { ParentComponent } from "./parent/parent.component";


// router outlet to listen which route go after which, sequence matters
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
  },   
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
