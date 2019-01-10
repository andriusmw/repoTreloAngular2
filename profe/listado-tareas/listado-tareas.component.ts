import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'listado-tareas',
  templateUrl: './listado-tareas.component.html',
  styleUrls: ['./listado-tareas.component.css'],
})
export class ListadoTareasComponent {
  @Input() arrData;
  @Output() borrarTarea = new EventEmitter();
  @Output() alternarCompletada = new EventEmitter();
  eliminar(id) {
    this.borrarTarea.emit(id);
  }
  emitirCambioCompletada(id) {
    this.alternarCompletada.emit(id);
  }
}
