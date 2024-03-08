import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { booksRoutingModule } from './books-routing.module';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    IndexComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    booksRoutingModule,    
    FormsModule,
    ReactiveFormsModule
  ]
})
export class booksModule { }
