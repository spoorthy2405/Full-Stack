import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../todo-service';
import { Todo } from '../models/todo.model';


@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.html',
  styleUrls: ['./todo.css'],
})
export class TodoComponent {

  private todoService = inject(TodoService);

  todos = signal<Todo[]>([]);
  newTodoTitle = signal<string>('');

  constructor() {
    this.loadTodos();
  }

  loadTodos() {
    this.todoService.getTodos().subscribe(data => {
      this.todos.set(data);   // ✅ FIXED
    });
  }

  addTodo() {
    const title = this.newTodoTitle().trim(); // ✅ FIXED
    if (!title) return;

    this.todoService.addTodo({
      title,
      completed: false
    }).subscribe(() => {
      this.newTodoTitle.set('');
      this.loadTodos();
    });
  }

  toggleTodo(todo: Todo) {
    const updatedTodo = {
      ...todo,
      completed: !todo.completed
    };

    this.todoService.updateTodo(updatedTodo).subscribe(() => {
      this.loadTodos();
    });
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.loadTodos();
    });
  }
}
