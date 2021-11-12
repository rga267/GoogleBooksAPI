import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  favorite: Book;

  constructor() { this.favorite = new Book(); }

  getFavorite(): Book {
    return this.favorite;
  }

  setFavorite(book: Book): void {
    this.favorite = book;
  }

  getSearchResults(term: string): Book[] {
    let results: Book[] = [];
    for(let i=0; i<10; i++){
      let result: Book = new Book();
      result.title = 'Search Result '+i;
      results.push(result);
    }

    return results;
  }

  getBooksToRead(): Book[] {
    let results: Book[] = [];
    for(let i=0; i<3; i++){
      let result: Book = new Book();
      result.title = 'To Read '+i;
      results.push(result);
    }

    return results;
  }


}
