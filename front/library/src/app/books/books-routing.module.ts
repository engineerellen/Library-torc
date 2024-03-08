import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
  
const routes: Routes = [
  { path: 'books', redirectTo: 'books/index', pathMatch: 'full'},
  { path: 'books/index', component: IndexComponent },
  { path: 'books/:Id/view', component: ViewComponent }
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class booksRoutingModule { }