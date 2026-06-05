import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.html',
  styleUrl: './input.css',
})
export class InputToDo {
  @Output() create = new EventEmitter<string>();

  updateValue(newValue: string) {
    this.create.emit(newValue);
  }
}
