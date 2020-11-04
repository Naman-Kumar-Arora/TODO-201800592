import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoDetailsComponent } from './component/todo-details/todo-details.component';
import { TodoListComponent } from './component/todo-list/todo-list.component';

const routes: Routes = [
  {path: 'list',component: TodoListComponent},
  {path: 'details',component: TodoDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
