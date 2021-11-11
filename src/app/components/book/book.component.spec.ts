import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
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
