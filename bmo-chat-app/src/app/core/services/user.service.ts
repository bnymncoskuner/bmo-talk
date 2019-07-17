import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user;
  tableName = 'users';

  constructor(private fbService: FirebaseService) { }

  getUsers() {
    return this.fbService.object(this.tableName)
      .pipe(map(snapshots => Object.keys(snapshots).map(key => {
        return {
          id: key,
          ...snapshots[key]
        }
      })));
  }

  createUser(name: string) {
    const user = {
      name: name, online: true
    };

    this.fbService.push(this.tableName, user).then(result => {
      this.user = { id: result.key, ...user };
    });
  }

  logout() {
    if (this.user && this.user.id) {
      this.setUserStatus(false);
    }
  }

  setUserStatus(online: boolean) {
    this.fbService.update(`${this.tableName}/${this.user.id}/online`, online);
  }
}
