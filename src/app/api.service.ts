
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task, List } from './models.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  jwt: string = localStorage.getItem('jwt');
  constructor(private http: HttpClient) {}

  /*Esto es lo que pasa cuando desde register-view.component.component.ts llama a la API */
  /* El username y la password se pasan aquí y los guarda en el "body" que es el CUERPO que pone
  en la documentación y después mediante protocolo HTTP y método POST hace una llamada al backend
  a la url que pone en la documentación y le pasa el body/CUERPO y lo pone como una promesa para no
  dejar colgado el sistema si tardase.*/
  register(username, password) {
    const body = { username, password };
    return this.http.post('https://apitrello.herokuapp.com/users', body).toPromise();
  }

  login(username, password) {
    /* Recive el usrname y el password de login-view.component.ts y lo guarda en el body/CUERPO*/
    const body = { username, password };

    return new Promise((resolve, reject) => {
      /*Devuelve una nueva Promesa con llamada al BACKEND  mediante POST y protocolo HTTP indicando la
      URL y el body/CUPERO acorde a la documentación*/

      this.http
        .post('https://apitrello.herokuapp.com/users/login', body)
        .toPromise()
        .then(() => { /* Estructura .then .catch que dentro tiene el valor para el caso reject 
          de la promesa.

          PREGUNTA: ¿NO DEBERÍA ESTAR EN EL CATCH?*/
          reject('User not found');
        })
        .catch(maybeNotAndError => { /* ESTRUCTURA IF ELSE con varios casos de "error controlados" en
          el primero es en el caso de que el status de error sea 200 lo que significa que se ha logeado
          correctamente. en tal caso coge el JWT que es un string y lo guarda en local storage y lo pasa
          a la variable jwt QUE SE HA DECLARADO ARRIBA. y a resolve de la promesa le pasa 200

          PREGUNTA: Al ser el caso de succeso ¿no debería estar en el .then? */
          if (maybeNotAndError.status === 200) {
            const jwt = maybeNotAndError.error.text;
            this.jwt = jwt;
            localStorage.setItem('jwt', jwt);
            resolve(200);
          } else if (maybeNotAndError.status === 401) { /* caso de error para el codigo de error 401
            indicamos en el reject que muestre el string "Wrong password"*/
            reject('Wrong password');
          } else { /* caso de error por defecto para cualquiera de los no especificados; mostrar el
            string 'Try again'*/
            reject('Try again');
          }
        });
    });
  }
  getLists(): any {
    const options = { headers: { Authorization: `Bearer ${this.jwt}` } };
    return this.http.get('https://apitrello.herokuapp.com/list', options).toPromise();
  }
  getTasks(idlist: number): any {
    const options = { headers: { Authorization: `Bearer ${this.jwt}` } };
    return new Promise((resolve, reject) => {
      this.http
        .get('https://apitrello.herokuapp.com/list/tasks/' + idlist, options)
        .toPromise()
        .then(tasks => {
          if (tasks) {
            resolve(tasks);
          } else {
            resolve([]);
          }
        })
        .catch(error => {
          console.log(error);
          resolve([]);
        });
    });
  }
  newList(name: string): any {
    const options = { headers: { Authorization: `Bearer ${this.jwt}` } };
    const body = { name };
    return this.http.post('https://apitrello.herokuapp.com/list/', body, options).toPromise();
  }
  deleteList(id: number): any {
    const options = { headers: { Authorization: `Bearer ${this.jwt}` } };
    return this.http.delete('https://apitrello.herokuapp.com/list/' + id, options).toPromise();
  }
}

