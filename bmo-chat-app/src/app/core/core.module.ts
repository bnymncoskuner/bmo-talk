import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireDatabase } from '@angular/fire/database';
import { LoginComponent } from './components/login/login.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from '../shared/shared.module';
import { UsernameDialogComponent } from './components/username-dialog/username-dialog.component';

@NgModule({
  declarations: [LoginComponent, UsernameDialogComponent],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    SharedModule,
    MatDialogModule
  ],
  providers: [AngularFireDatabase],
  entryComponents: [UsernameDialogComponent],
  exports: [LoginComponent]
})
export class CoreModule { }
