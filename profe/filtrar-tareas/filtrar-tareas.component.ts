import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'filtrar-tareas',
  templateUrl: './filtrar-tareas.component.html',
  styleUrls: ['./filtrar-tareas.component.css'],
})
export class FiltrarTareasComponent {
  @Output() nuevaQuery = new EventEmitter();
  @Output() reset = new EventEmitter();
  queryText: string = '';
  buscar() {
    this.nuevaQuery.emit(this.queryText);
  }
  borrar() {
    this.reset.emit();
    this.queryText = '';
  }
}
