import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../providers/book.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  booksToRead: Book[] = [];


  constructor(public bookService: BookService) { 

  }

  ngOnInit(): void {

    this.booksToRead = this.bookService.getBooksToRead();
  }

  favorite(book: Book): void {
    this.bookService.setFavorite(book);
  }

}
