import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  apiUrl: string = environment.apiUrl
  token: string = environment.tokenGoRestApi

  constructor(private http: HttpClient) { }

  getPosts(userId: string): Observable<any> {
    let params = new HttpParams()
        .set('_format', 'json')
        .set('access-token', this.token)
        .set('user_id', userId)
    const url = `${this.apiUrl}posts`;
    return this.http.get<any>(url, {params});
  }

  addPost(postData): Observable<any> {
    let headers = new HttpHeaders()
    .set('Authorization', `Bearer ${this.token}`)
    const url = `${this.apiUrl}posts`;
    return this.http.post<any>(url, postData, {headers});
  }

  editPost(postData): Observable<any> {
    let headers = new HttpHeaders()
    .set('Authorization', `Bearer ${this.token}`)
    const url = `${this.apiUrl}posts/${postData.id}`;
    return this.http.put<any[]>(url, postData, {headers});
  }

  deletePost(postData){
    let headers = new HttpHeaders()
    .set('Authorization', `Bearer ${this.token}`)
    const url = `${this.apiUrl}posts/${postData.id}`;
    return this.http.delete<any>(url, {headers})
  }

}
