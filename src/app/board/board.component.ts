/*import { Component, OnInit } from '@angular/core';
import { Task } from '../app.tasks.interface';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  title = 'app3';
  /* -- ArrayDeTareas --*/ /*
  arrayDeTareas = [{ text: 'prueba', id: 0, completada: true }];

  /*-- Añadir la tarea  al array de tareas */ /*
  addTarea(textoInput) {
    let newTask = { text: textoInput, id: Date.now(), completada: false };
    this.arrayDeTareas.push(newTask);

  }

  /*-- Falta combinar el comprobar intro con llamar a añadir la tarea  */
/*
  handdleKeyup(ev) {
    console.log('keyup event fired!');
    if (ev.keyCode === 13) {
      console.log('La tarea para añadir es:', ev.target.value.trim());
     this.addTarea(ev.target.value.trim())
     
    }
  }

  /* Alternar completada desde el padre */
  /* el algoritmo cambia la clase de .completa a ""*/
  /*
  alternarCompletadaPadre(id) {
    this.arrayDeTareas = this.arrayDeTareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }

      return tarea;
    });
  }

  /* Filtrar tarea se usa para luego borrar */ /*
  query: string = '';
  
  tareasFiltradas: Array<Task> = this.arrayDeTareas;
  filtrarTareas(query: string) {
    this.query = query;
    this.tareasFiltradas = this.arrayDeTareas.filter(tarea => tarea.text.match(this.query));
  }


  /* Eliminar TareaPdre  */
  /* Requiere Filtrar Tarea NPI del por qué */ /*
  eliminarTareaPadre(id) {
    this.arrayDeTareas = this.arrayDeTareas.filter(tarea => tarea.id !== id);
    this.filtrarTareas(this.query);
  }


  constructor() { }

  ngOnInit() {
  }

}
*/

import { Component, OnInit } from '@angular/core';
import { DataManagerService } from '../data-manager.service';
import { Data } from '../models.interface';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  /*styleUrls: ['./board.component.scss'],*/
})
export class BoardComponent implements OnInit {
  data: Data;
  constructor(private dataManager: DataManagerService) {}

  ngOnInit() {
    this.data = this.dataManager.getData();
  }
}