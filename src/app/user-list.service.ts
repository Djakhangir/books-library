import { Injectable } from '@angular/core';

@Injectable()
export class UserListService {

  public listOfUsers = [
    {
   id: 1,
   name:'Kyle Likelyhood',
   author: 'Dumas Alex',
   totalAmount:1,
   dates:'Tue Nov 13 2018 16:33:06 GMT-0600 (Eastern Time)',
   category: 'History',
   flag: false,
    }, 
    {
   id: 2,
   name:'Jacob Levinsky',
   author: 'Alexander Dumas',
   totalAmount:2,
   dates:'Tue Nov 13 2018 16:33:06 GMT-0600 (Eastern Time)',
   category: 'Fiction',
   flag: false,
    },
    {
   id: 3,
   name:'Miranda Kerr',
   author: 'Dumas Someone',
   totalAmount:1,
   dates:'Tue Nov 13 2018 16:33:06 GMT-0600 (Eastern Time)',
   category: 'Romance',
   flag: false,
     }
]
  constructor() { }

getListOfUsers() {
  return this.listOfUsers
}
}
