import { Component, OnInit } from '@angular/core';
import { booksService } from '../books.service';
import { books } from '../books';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  bookss: books[] = [];

  constructor(public booksService: booksService) { }

  ngOnInit(): void {
    this.booksService.getAll().subscribe((data: books[]) => {
      this.bookss = data;
      console.log(this.bookss);
    })
  }
}