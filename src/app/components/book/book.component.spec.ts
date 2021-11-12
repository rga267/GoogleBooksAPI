import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/providers/book.service';
import { BookComponent } from './book.component';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shows the title of a book', () => {
    const labelElement = fixture.debugElement.query(By.css('.title'));
    expect(labelElement.nativeElement.textContent).toContain('Title: '+component.book.title);
  });

  it('shows the description of a book', () => {
    const labelElement = fixture.debugElement.query(By.css('.description'));
    expect(labelElement.nativeElement.textContent).toContain('Description: '+component.book.description);
  });

  it('shows the type of a book', () => {
    const labelElement = fixture.debugElement.query(By.css('.type'));
    expect(labelElement.nativeElement.textContent).toContain('Type: '+component.book.type);
  });

  it('shows the author of a book', () => {
    const labelElement = fixture.debugElement.query(By.css('.author'));
    expect(labelElement.nativeElement.textContent).toContain('Author: '+component.book.author);
  });

  it('shows the thumbnail of a book', () => {
    const labelElement = fixture.debugElement.query(By.css('.thumbnail img'));
    expect(labelElement.nativeElement.getAttribute('src')).toBe(component.book.thumbnail);
  });

});

describe('favorite button', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('has a favorite button when the book is not a favorite', () => {
    component.isFavorite = false;
    fixture.detectChanges();
    const favoriteButton = fixture.debugElement.query(By.css('.favorite'));
    expect(favoriteButton.nativeElement).toBeDefined();
  });
  it('does not have a favorite button when the book is a favorite', () => {
    component.isFavorite = true;
    fixture.detectChanges();
    const favoriteButton = fixture.debugElement.query(By.css('.favorite'));
    expect(favoriteButton).toBeNull();
  });
  it('button should call favorite method when clicked', () => {
    const labelElement = fixture.debugElement.query(By.css(".favorite"));
    spyOn(component, 'favorite');
    labelElement.nativeElement.click();
    expect(component.favorite).toHaveBeenCalled();
  });

  it('emits a favorite event with the current book when the favorite method is invoked', () => {
    spyOn(component.favoriteEvent, 'emit');
    component.favorite();
    expect(component.favoriteEvent.emit).toHaveBeenCalledWith(component.book);
  });
});
