import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/service/book.service';
import Book from 'src/models/Book';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  book_id: number = -1;
  book: Book = new Book(-1, "", "", -1, "", -1, -1, "", "", -1);

  constructor(private route: ActivatedRoute, private bookService: BookService) { }

  ngOnInit(): void {

    let _ = this.route.snapshot.paramMap.get("id");
    if (_ != null) {
      this.book_id = parseInt(_);
    }

    console.log(this.book_id);
      this.bookService.getbyId(this.book_id).subscribe((b) => this.book = b);
  }

  onSubmit(){
    this.bookService.edit(this.book).subscribe((b) => console.log(b));
  }

  toDate(date: string){
    return new Date(date);
  }


}
