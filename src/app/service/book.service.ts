import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Book from 'src/models/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { 

  }

  getAll(): Observable<any> {
    return this.http.get<Array<Book>>("http://localhost:8080/api/")
  }

  getbyId(id: number): Observable<any> {
    return this.http.get<Book>(`http://localhost:8080/api/${id}`)
  }

  save(book: Book): Observable<any> {
    return this.http.post<Book>("http://localhost:8080/api/", book);
  }
  
  edit(book: Book): Observable<any> {
    return this.http.put<Book>("http://localhost:8080/api/", book);
  }

  deletebyId(id: number): Observable<any> {
    return this.http.delete<void>(`http://localhost:8080/api/${id}`)
  }

}
