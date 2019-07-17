import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db: AngularFireDatabase) { }

  list(dbName: string) {
    return this.db.list(dbName).valueChanges();
  }

  push(dbName: string, object) {
    this.db.list(dbName).push(object);
  }
}
