import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './components/login/login.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from '../shared/shared.module';
import { UsernameDialogComponent } from './components/username-dialog/username-dialog.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';

@NgModule({
  declarations: [LoginComponent, UsernameDialogComponent],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    SharedModule,
    MatDialogModule,
    AngularFireDatabaseModule
  ],
  entryComponents: [UsernameDialogComponent],
  exports: [LoginComponent]
})
export class CoreModule { }
