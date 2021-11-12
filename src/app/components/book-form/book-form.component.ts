import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  title: FormControl = new FormControl('');
  author: FormControl = new FormControl('');
  description: FormControl = new FormControl('');
  type: FormControl = new FormControl('');
  thumbnail: FormControl = new FormControl('');
  bookDetails: FormGroup = this.formBuilder.group({
    title: this.title,
    author: this.author,
    description: this.description,
    type: this.type,
    thumbnail: this.thumbnail

  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  addBook(): void {
    console.log(this.bookDetails.value);
  }

}
