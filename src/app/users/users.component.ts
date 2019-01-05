import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserListService } from '../Services/user-list.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

public selectedUser: Number;
public listOfUsers = []

constructor(
  private router:Router,
  private activatedRoute: ActivatedRoute,
  private userListService:UserListService,
) { }

getListOfUsers(): any{
  this.listOfUsers = this.userListService.getListOfUsers();
}

ngOnInit() {
  this.listOfUsers= this.userListService.getListOfUsers();
  }

  selectedUserList (index) {
    this.selectedUser = index;
    this.router.navigate(['User', index], {relativeTo: this.activatedRoute});
}

userNavigation (index) {
  this.router.navigateByUrl(index).then(e => {
    if(e) {
      console.log("Navigation is successful!");
    } else {
      console.log("Navigation has failed!");
    }
  });
}

}
