import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  apiUrl: string = "https://gorest.co.in/public-api/"

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    let params = new HttpParams()
        .set('_format', 'json')
        .set('access-token', 'bXvMeI7VMJsvwuWz8p3NdmODhGvorqjDvdtF')
    const url = `${this.apiUrl}posts`;
    return this.http.get<any>(url, {params});
}
}
