import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserListService } from '../user-list.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

public listOfUsers = []

constructor(
  private router:Router,
  private activatedRoute: ActivatedRoute,
  private userListService:UserListService,
) { console.log(userListService)}

getListOfUsers(): any{
  this.listOfUsers = this.userListService.getListOfUsers();
}

ngOnInit() {
  this.getListOfUsers();
  }

  public selectlistOfUsers(event: any, list: any) {
    list.flag = !list.flag;  }

}
