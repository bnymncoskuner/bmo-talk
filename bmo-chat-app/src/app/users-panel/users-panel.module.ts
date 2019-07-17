import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersPanelComponent } from './users-panel.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { MatIconModule } from '@angular/material/icon';
import { UserCountPipe } from './user-count.pipe';



@NgModule({
  declarations: [UsersPanelComponent, UserInfoComponent, UserCountPipe],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [UsersPanelComponent]
})
export class UsersPanelModule { }
