import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../providers/book.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  favoriteBook: Book;
  booksToRead: Book[] = [];


  constructor(private bookService: BookService) { 
    this.favoriteBook = new Book();
  }

  ngOnInit(): void {
    this.favoriteBook = this.bookService.getFavorite();
    this.booksToRead = this.bookService.getBooksToRead();
  }

  favorite(book: Book): void {
    this.favoriteBook = book;
  }

}
