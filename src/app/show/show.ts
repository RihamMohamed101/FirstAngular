import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Data } from '../data';

@Component({
  selector: 'app-show',
  imports: [],
  templateUrl: './show.html',
  styleUrl: './show.css',
})
export class Show {
  @Input() ArrayTodo: Data[] = [];
  @Output() numberOFProgress = new EventEmitter<number>();

  
  updateChecked(i: number) {
    this.ArrayTodo[i].isChecked = !this.ArrayTodo[i].isChecked;
    this.updateProgress();
  }

  updateProgress() {
    let count = 0;
    this.ArrayTodo.forEach((item) => {
      if (item.isChecked) {
        count++;
      }
    });

    this.numberOFProgress.emit(count);
  }
}
