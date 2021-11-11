import { componentFactoryName } from '@angular/compiler';
import { Component } from '@angular/core';
import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BookComponent } from './components/book/book.component';
import { Book } from './models/book';
import { BookService } from './providers/book.service';

let service: BookService;

class MockBookService{
  getFavorite(): Book {
    return new Book();
  }
}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        BookComponent
      ],
      providers: [{
        provide: BookService,
        useClass: MockBookService
      }]
    }).compileComponents().then(() => {
      service = TestBed.inject(BookService);
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
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
  });

});
