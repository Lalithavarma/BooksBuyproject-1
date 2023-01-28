import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/book.service';
import Book from 'src/models/Book';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  book: Book = new Book(-1, "", "", -1, "", -1, -1, "", "", -1);

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.book);
    this.bookService.save(this.book).subscribe((b) => console.log(b));
  }

}
