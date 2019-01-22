import { Injectable } from '@angular/core';

import { List, Task } from './models.interface'; /* Importa las clases List y Task de la interfaz*/
import { ApiService } from './api.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DataManagerService {   
  data: { lists: Array<List> } = {  /*Guarda array de listas en "data" */
    lists: [], /*Crea array vacío para lists por defecto */
  };
  constructor(private api: ApiService, private router: Router) {}

  loadDataFromBackend() { 
    /* función llamar datos del backend: llama la api usando el método getlist()
    después : hace un arrow function donde declara un array en el que guarda la respuesta*/ 
    this.api
      .getLists()
      .then((rawLists: Array<any>) => {
        console.log(rawLists);
        const lists = rawLists.map(rawList => ({
          listId: rawList.id,
          createdAt: rawList.createdAt,
          modifiedAt: rawList.updatedAt,
          name: rawList.name,
          tasks: [],
        }));
        Promise.all(
          lists.map(async (list: List) => {
            list.tasks = await this.api.getTasks(list.listId);
            list.tasks = list.tasks.map((rawTask: any) => ({
              listId: rawTask.idlist,
              taskId: rawTask.id,
              text: rawTask.task,
              completed: false,
              color: 'white',
              createdAt: new Date(rawTask.createdAt),
              modifiedAt: new Date(rawTask.updatedAt),
            }));
            return list;
          }),
        ).then(lists => {
          this.data.lists = lists;
        });
      }) 
      /* sino funciona hace que vayas al login */
      .catch(() => this.router.navigate(['/login']));
  }

  /* llama a la función de arriba pero más corto para poderlo usar fuera */
  getData() {
    this.loadDataFromBackend();
    return this.data;
  }

  /* añade una lista nueva y la muestra */
  addNewList(name: string) {
    // const now = new Date();
    // const newList: List = {
    //   listId: Date.now(),
    //   createdAt: now,
    //   modifiedAt: now,
    //   name,
    //   tasks: [],
    // };
    // this.data.lists.push(newList);

    this.api.newList(name).then(res => {
      console.log(res);
      this.loadDataFromBackend();
    });
  }
  /*borra una lista*/
  deleteList(listId: number) {
    // this.data.lists = this.data.lists.filter(list => list.listId !== listId);
    this.api.deleteList(listId).then(res => {
      this.loadDataFromBackend();
    });
  }
  /* añade una nueva tarea en donde coincida el list.id*/
  addNewTask(text: string, list: List) {
    const now = new Date();
    const newTask: Task = {
      listId: list.listId,
      taskId: Date.now(),
      text,
      completed: false,
      color: 'white',
      createdAt: now,
      modifiedAt: now,
    };
    this.data.lists = this.data.lists.map(listObj => {
      if (listObj.listId === list.listId) {
        listObj.tasks.push(newTask);
      }
      return listObj;
    });
  }
  /* borra tarea donde coincida el list.id pero no funciona porque el backend no coincide o no tiene 
  habilitada la opción. */
  deleteTask(task: Task) {
    this.data.lists = this.data.lists.map(listObj => {
      if (listObj.listId === task.listId) {
        listObj.tasks = listObj.tasks.filter(taskObj => taskObj.taskId !== task.taskId);
      }
      return listObj;
    });
  }
  /*cambia el nombre de la lista donde coincida el id*/
  editListName(list: List) {
    this.data.lists = this.data.lists.map(listObj => (listObj.listId === list.listId ? list : listObj));
  }

  
  editTask(newTask: Task) {
    this.data.lists = this.data.lists.map(list => {
      if (list.listId === newTask.listId) {
        list.tasks = list.tasks.map(task => {
          if (task.taskId === newTask.taskId) {
            return newTask;
          }
          return task;
        });
      }

      return list;
    });
  }
}