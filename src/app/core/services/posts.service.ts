import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs'
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  apiUrl: string = environment.apiUrl
  token: string = environment.tokenGoRestApi

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    let params = new HttpParams()
        .set('_format', 'json')
        .set('access-token', this.token)
    const url = `${this.apiUrl}posts`;
    return this.http.get<any>(url, {params});
}
}
