import { Component } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from 'rxjs/operators';
import { Author } from '../books/model/book';

@Component({
  selector: 'app-authors',
  standalone: true,
  imports: [],
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.css'
})
const Url = 'http://localhost:8080/books-api/';

@Injectable({
  providedIn: 'root'
})

export class AuthorsComponent {
  authorId: string = '';
  author: any = null;
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  public getAuthor(id: string): Observable<Author> {
    return this.http.get<Author>(Url + 'auhtors/' + id);
  }
  }


