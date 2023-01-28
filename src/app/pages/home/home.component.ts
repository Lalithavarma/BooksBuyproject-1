import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/book.service';
import Book from 'src/models/Book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allBooks: Array<Book> = [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getAll().subscribe((b) => this.allBooks = b);
  }

  onEdit(){

  }

  onDelete(id: number){
    this.bookService.deletebyId(id).subscribe((res) => console.log("deleted"));
  }

  onCreate(){

  }

  toDate(date: string): string{

    let d = new Date(date);
    return d.getFullYear().toString() + "-" + d.getMonth() + "-" + d.getFullYear();


  }

}
