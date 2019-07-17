import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  dbName = 'messages';

  constructor(private firebaseService: FirebaseService, private userService: UserService) { }

  getMessages() {
    return this.firebaseService.list(this.dbName);
  }
  
  sendMessage(message) {
    const newMessage = {
      sender: this.userService.user,
      text: message,
      date: new Date().toString()
    };
  
    this.firebaseService.push(this.dbName, newMessage);
  }
}
