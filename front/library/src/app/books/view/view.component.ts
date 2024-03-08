import { Component, OnInit } from '@angular/core';
import { booksService as booksService } from '../books.service';
import { ActivatedRoute, Router } from '@angular/router';
import { books as books } from '../books';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
     
  id!: string;
  books!: books;
  form!: FormGroup;
 
  constructor(
    public booksService: booksService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
    
 
  ngOnInit(): void {
    this.id = this.route.snapshot.params['Id'];
        
    this.booksService.find(this.books).subscribe((data: books)=>{
      this.books = data;
    });

    this.form = new FormGroup({
    });
  }
}