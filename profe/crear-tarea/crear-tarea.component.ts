import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'crear-tarea',
  templateUrl: './crear-tarea.component.html',
  styleUrls: ['./crear-tarea.component.css'],
})
export class CrearTareaComponent implements OnInit {
  @Output() nuevaTarea = new EventEmitter();
  newTareaText = '';
  handleKeyup(ev) {
    console.log('keyup event fired!');
    if (ev.keyCode === 13 && this.newTareaText.trim() !== '') {
      console.log('La tarea para añadir es:', this.newTareaText);
      this.nuevaTarea.emit(this.newTareaText.trim());
      this.newTareaText = '';
    }
  }
  constructor() {}

  ngOnInit() {}
}
