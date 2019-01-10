import { Component } from '@angular/core';

import { Task } from './task.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tareas: Array<Task> = [{ text: 'prueba', id: 0, completada: true }];
  tareasFiltradas: Array<Task> = this.tareas;
  query: string = '';
  anyadirTarea(text) {
    let newTask: Task = { text, id: Date.now(), completada: false };
    this.tareas.push(newTask);
    this.filtrarTareas(this.query);
  }
  filtrarTareas(query: string) {
    this.query = query;
    this.tareasFiltradas = this.tareas.filter(tarea => tarea.text.match(this.query));
  }
  borrarFiltro() {
    this.tareasFiltradas = this.tareas;
    this.query = '';
  }
  eliminarTarea(id) {
    this.tareas = this.tareas.filter(tarea => tarea.id !== id);
    this.filtrarTareas(this.query);
  }
  alternarCompletada(id) {
    this.tareas = this.tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }

      return tarea;
    });
  }
}
