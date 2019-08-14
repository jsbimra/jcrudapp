import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
//import { ToastController } from 'ionic-angular';
import { UserService } from '../user.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  usersData = [];
  newUser = false;

  constructor(private service: UserService, public toastCtrl: ToastController) { }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Your settings have been saved.',
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
    this.service.fetchUsers.subscribe(
      data => {
        console.log(data);
        // this.service.updateLocalStorage(data);
        this.usersData = data.slice();
      },
      err => new Error(err),
      () => console.log('users data fetched!'))
  }

  onAddNewUser() {
    console.log('ADd New user fired!');
    this.newUser = !this.newUser;
  }

  onEdit(id: number) {
    console.log(`Edit user of ${id}!`);
  }

  onDelete(id: number) {
    console.log(`Delete user of ${id}!`);
    const fIndex = this.usersData.findIndex(user => user.id === id);
    this.usersData.splice(fIndex, 1)
  }

  onPullList() {
    // console.log('Pull list fired! ' , this.service.getUsers());
    // this.usersData = this.service.getUsers()
  }

}
