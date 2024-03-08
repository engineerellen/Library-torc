import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
  
const routes: Routes = [
  { path: 'Books', redirectTo: 'Books/index', pathMatch: 'full'},
  { path: 'Books/index', component: IndexComponent },
  { path: 'Books/:book_id/view', component: ViewComponent }
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class booksRoutingModule { }