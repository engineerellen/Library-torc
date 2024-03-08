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

  deletecourses(id: number) {
    if (window.confirm("Do you you want to delete this book?")) {
      this.booksService.delete(id).subscribe(res => {
        this.bookss = this.bookss.filter(item => item.book_id !== id);
        console.log('book deleted!');
      })
    }
  }
}