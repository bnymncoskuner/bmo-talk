import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  dbName = 'messages';

  constructor(private firebaseService: FirebaseService) { }

  getMessages() {
    return this.firebaseService.list(this.dbName);
  }
  
  sendMessage(message) {
    const newMessage = {
      sender: 'Bunyamin',
      text: message,
      date: new Date().toString()
    };
  
    this.firebaseService.push(this.dbName, newMessage);
  }
}
