import { Injectable } from '@angular/core';

import { List, Task } from './models.interface'; /* Importa las clases List y Task de la interfaz*/
import { ApiService } from './api.service';
import { Router } from '@angular/router';

/*11. ver addNewList()
  12. ver loadDataFromBackend
  13. ver ApiService  var "res" */

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
    this.api /* llama a la api */
      .getLists() /* llama a getLists del api.servive.ts*/
      .then((rawLists: Array<any>) => { /*Recive el GET del backend y crea un array*/
        console.log(rawLists);
        const lists = rawLists.map(rawList => ({ /*Estructura de datos de las listas en el array*/
          /*Hace un Mapeo del GET y asigna esos valores a la estructura de datos de abajo importada
          del nodels.interface.ts*/
          listId: rawList.id,
          createdAt: rawList.createdAt,
          modifiedAt: rawList.updatedAt,
          name: rawList.name,
          tasks: [],
        }));
        Promise.all(
          lists.map(async (list: List) => { /* cada lista tiene un mapeo que hace que pueda tener un array
            de tareas con los datos de abajo. Necesita pasarle el listId para que vaya enlazado*/
            list.tasks = await this.api.getTasks(list.listId); /*list.task espera a que se haga la llamada
            a la api con el getTasks pasandole el list.listId*() id de la lista)/ */
            list.tasks = list.tasks.map((rawTask: any) => ({ /* a lo que recibe de arriba le hace un mapeo
              para ponerle los datos a la siguiente estructura de models.interface.ts*/
              listId: rawTask.idlist,
              taskId: rawTask.id,
              text: rawTask.task,
              completed: false,
              color: 'white',
              createdAt: new Date(rawTask.createdAt),
              modifiedAt: new Date(rawTask.updatedAt),
            }));
            return list; /*Devuelve la lista*/
          }),
        ).then(lists => { /* .then de la promesa line:36*/
          this.data.lists = lists; /* devuelve las listas*/
        }); /* no hay .catch por sino hay tareas*/
      }) 
      /* CUANDO no funciona getLists() del api.service  hace que vayas al login */
      .catch(() => this.router.navigate(['/login']));
  }

  /* llama a la función de arriba pero más corto para poderlo usar fuera */
  getData() {
    this.loadDataFromBackend();
    return this.data;
  }

  /* añade una lista nueva y la muestra */
  addNewList(name: string) {/*recibe el trimeo del valor del evento (ref.add-new-list.component.ts line:16)

    /*Datos desfasados de como se pensaba que era la api*/
    // const now = new Date();  IGNORAR
    // const newList: List = {  IGNORAR
    //   listId: Date.now(),    IGNORAR
    //   createdAt: now,        IGNORAR
    //   modifiedAt: now,       IGNNORAR
    //   name,                  IGNORAR
    //   tasks: [],             IGNORAR
     // };                            ""
    // this.data.lists.push(newList);  ""

    this.api.newList(name).then(res => { /*Llama a la api y le pasa el name en el caso then muetsra
      por consola el valor de res (que es el loadDataFromBackend ??) y ejecuta la función loadDataFromBackend() que muestra listas.*/
      console.log(res);
      this.loadDataFromBackend();
    });
  }
  /*borra una lista*/
  deleteList(listId: number) { /* Viene aquí desde list.component.ts cuando se hace click en delete*/
    // this.data.lists = this.data.lists.filter(list => list.listId !== listId);
    this.api.deleteList(listId).then(res => { /* Llama a la api y hace deleteList( con el id de la lista)*/
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