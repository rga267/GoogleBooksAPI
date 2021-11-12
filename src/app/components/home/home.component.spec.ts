import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/providers/book.service';
import { BookComponent } from '../book/book.component';
import { SearchComponent } from '../search/search.component';

import { HomeComponent } from './home.component';

let service: BookService;
class MockBookService{
  getFavorite(): Book {
    return new Book();
  }
  getBooksToRead(): Book[]{
    return [];
  }
}


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule, FormsModule ],
      declarations: [ HomeComponent, BookComponent, SearchComponent ],
      providers: [{
        provide: BookService,
        useClass: MockBookService
      }]
    })
    .compileComponents().then(() => {
      service = TestBed.inject(BookService);
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('sets the book to be the favorite from the BookService', () => {
      let book: Book = new Book();
      book.title = 'test book';
      spyOn(service, 'getFavorite').and.returnValue(book);
      component.ngOnInit();
      fixture.detectChanges();
      expect(service.getFavorite).toHaveBeenCalled();
      expect(component.favoriteBook).toBe(book);
    });
    it('sets the booksToRead to be the booksToRead from the BookService', () => {
      const booksToRead: Book[] = [new Book(), new Book(), new Book()];
      spyOn(service, 'getBooksToRead').and.returnValue(booksToRead);
      component.ngOnInit();
      fixture.detectChanges();
      expect(service.getBooksToRead).toHaveBeenCalled();
      expect(component.booksToRead).toBe(booksToRead);
    });
  });

  describe('addToFavoriteEvent', () => {
    it('sets the favoriteBook property to be the passed value', () => {
      let oldFavorite: Book = new Book();
      let newFavorite: Book = new Book();
      newFavorite.title = 'new title';
      component.favoriteBook = oldFavorite;
      component.favorite(newFavorite);
      expect(component.favoriteBook).toBe(newFavorite);
    });
  });

  describe('template', () => {
    it('calls favorite when the book component emits a favoriteBookEvent', () => {
      spyOn(component, 'favorite');
      const bookElement = fixture.debugElement.query(By.css('gb-book'));
      bookElement.nativeElement.dispatchEvent(new Event('favoriteEvent'));
      expect(component.favorite).toHaveBeenCalled();
    });
    describe('booksToRead section', () => {
      it('renders a book object for each book in booksToRead', () => {
        component.booksToRead = [new Book(), new Book(), new Book()];
        fixture.detectChanges();
        const booksToRead = fixture.debugElement.queryAll(By.css(".booksToRead gb-book"))
        expect(booksToRead.length).toBe(3);
      });
      it('has a "Add Book" link', () => {
        const anchorElement = fixture.debugElement.query(By.css('.booksToRead .addNewBook'));
        expect(anchorElement.nativeElement).toBeDefined();
      });
    });
  });

});
