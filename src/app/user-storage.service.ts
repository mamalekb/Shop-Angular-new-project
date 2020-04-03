import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {User} from './shop/users/User';



@Injectable({
  providedIn: 'root'
})
export class UserStorageService {

  constructor() { }

private users: User[] = [
  {id: 1, login: 'User1', email: 'user1@wszib.edu.pl', age: 25, country: 'Tanzania', activity: false},
  {id: 2, login: 'User2', email: 'user2@wszib.edu.pl', age: 18, country: 'Rosja', activity: false},
  {id: 3, login: 'User3', email: 'user2@wszib.edu.pl', age: 42, country: 'USA', activity: true},
];

  private idCount: number = 4;

getUsers(): Observable<User[]> {
  return of(this.users);
}


removeUser(id: number) {
  const userIndex = this.users.findIndex(p => p.id === id);
  this.users.splice(userIndex, 1);
}

  saveUser(user: User) {
    if (user.id) {
      const userIndex = this.users.findIndex(p => p.id === user.id);
      this.users[userIndex] = user;
    } else {
      user.id = this.idCount;
      this.users.push(user);
      this.idCount++;
    }
  }

  getUser(id: number) {
    const userIndex = this.users.findIndex(p => p.id === id);
    return {...this.users[userIndex]};
  }
}



