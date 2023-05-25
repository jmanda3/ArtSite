import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPortalRoutingModule } from './admin-portal-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { UploadComponent } from './upload/upload.component';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CalendarModule } from 'primeng/calendar';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { DropdownModule } from 'primeng/dropdown';
import { ManageComponent } from './manage/manage.component';

@NgModule({
  declarations: [LoginComponent, HomeComponent, UploadComponent, ManageComponent],
  imports: [
    CommonModule,
    AdminPortalRoutingModule,
    TableModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    ToastModule,
    MessageModule,
    MessagesModule,
    InputTextModule,
    RadioButtonModule,
    CalendarModule,
    FileUploadModule,
    HttpClientModule,
    DropdownModule
  ]
})
export class AdminPortalModule { }
