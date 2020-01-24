import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatNativeDateModule,
  MatOptionModule,
  MatProgressBarModule,
  MatSelectModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './core/components/home/home.component';
import { UsersComponent } from './core/components/users/users.component';
import { PostsComponent } from './core/components/posts/posts.component';
import { UsersFormComponent } from './core/components/users/users-form/users-form.component';
import { ModalConfirmarComponent } from './shared/components/modal-confirmar/modal-confirmar.component';
import { PostsFormComponent } from './core/components/posts/posts-form/posts-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    PostsComponent,
    UsersFormComponent,
    ModalConfirmarComponent,
    PostsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatNativeDateModule,
    MatOptionModule,
    MatProgressBarModule,
    MatSelectModule,
    MatTableModule,
    MatToolbarModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    UsersFormComponent,
    ModalConfirmarComponent,
    PostsFormComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
