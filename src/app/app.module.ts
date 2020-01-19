import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, 
  MatTableModule 
} from '@angular/material'
import { HomeComponent } from './core/components/home/home.component';
import { UsersComponent } from './core/components/users/users.component';
import { PostsComponent } from './core/components/posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
