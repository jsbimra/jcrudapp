import { Injectable } from '@angular/core';
import { fromFetch } from 'rxjs/fetch';
import { switchMap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  fetchUsers = fromFetch('https://jsonplaceholder.typicode.com/users').pipe(
    switchMap(response => {
      if (response.ok) {
        // this.updateLocalStorage(response.json())
        return response.json()
      }
    }),
    catchError(error => error)
  )


  // updateLocalStorage(data: any) {
  //   if (data) {
  //     console.log('updateLocalStorage', data);
  //     localStorage.setItem('myApp.users', JSON.stringify(data));
  //   }
  // }

  // getUsers() {
  //   const data: any = localStorage.getItem('myApp.users') !== null ? JSON.parse(localStorage.getItem('myApp.users')) : [];
  //   return data;
  // }

  constructor() {
    
  }


}
