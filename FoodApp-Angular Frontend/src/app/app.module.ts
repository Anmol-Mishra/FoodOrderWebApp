import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialog, MatFormFieldModule, MatInputModule, MatIconModule, MatCardModule, MatProgressSpinnerModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatListModule, MatMenuModule, MatTableModule, MatSnackBarModule, MatSlideToggleModule } from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExistingUserDialogBoxComponent } from './existing-user-dialog-box/existing-user-dialog-box.component';
import { NewUserDialogBoxComponent } from './new-user-dialog-box/new-user-dialog-box.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrorPageComponent } from './error-page/error-page.component';
import { DialogComponent } from './dialog/dialog.component';
import { SuccessComponent } from './success/success.component';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    ExistingUserDialogBoxComponent,
    NewUserDialogBoxComponent,
    OrderPageComponent,
    WelcomeComponent,
    ErrorPageComponent,
    DialogComponent,
    SuccessComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatTableModule,
    MatSnackBarModule,
    MatSlideToggleModule
    
    
  ],
  providers: [MatDialog],
  bootstrap: [AppComponent],
  entryComponents : [DialogComponent]
})
export class AppModule { }
