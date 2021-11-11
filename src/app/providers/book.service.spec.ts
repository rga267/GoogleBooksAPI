import { TestBed } from '@angular/core/testing';
import { Book } from '../models/book';
import { BookService } from './book.service';

describe('BookService', () => {
  let service: BookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  describe('getFavorite', () => {
    it('returns a book', () => {
      let result: Book = service.getFavorite();
      expect(result).toBeTruthy();
    });
  });
});


