import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/providers/book.service';

@Component({
  selector: 'gb-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input()
  book: Book = new Book;

  constructor() { 
  }

  ngOnInit(): void {}

  favorite(): void {
    console.log('was added to favorites');
  }

}
