import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiUrl: string = environment.apiUrl
  token: string = environment.tokenGoRestApi

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    let params = new HttpParams()
        .set('_format', 'json')
        .set('access-token', this.token)
    const url = `${this.apiUrl}users`;
    return this.http.get<any>(url, {params});
  }

  addUser(userData): Observable<any> {
    let headers = new HttpHeaders()
    .set('Authorization', `Bearer ${this.token}`)
    const url = `${this.apiUrl}users`;
    return this.http.post<any>(url, userData, {headers});
  }

  editUser(userData): Observable<any> {
    let headers = new HttpHeaders()
    .set('Authorization', `Bearer ${this.token}`)
    const url = `${this.apiUrl}users/${userData.id}`;
    return this.http.put<any[]>(url, userData, {headers});
  }

  deleteUser(userData){
    let headers = new HttpHeaders()
    .set('Authorization', `Bearer ${this.token}`)
    const url = `${this.apiUrl}users/${userData.id}`;
    return this.http.delete<any>(url, {headers})
  }

}

