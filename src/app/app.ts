import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputToDo } from './input/input';
import { Show } from './show/show';
import { Data } from './data';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InputToDo, Show],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App  {
  protected readonly title = signal('my-angular-app');

  newTodo: Data[] = [];
  x:number= 0 ;
  
  updateToDo(newValue: string) {
    this.newTodo = [...this.newTodo, { title: newValue, isChecked: false }];
  }

handleProgress(count: number) {
  this.x = count;
}
 

 
}
