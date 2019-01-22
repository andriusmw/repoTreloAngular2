import { Component } from '@angular/core';
import { ApiService } from '../api.service';
/* 2: Llama a ApiService para saber como interactuar con el backend y prosigue con las lineas de abajo*/
/* 3: Después de lo de abajo Ver Api.service.ts*/
/* 4: Después ir a Login */

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.component.html',
  styleUrls: ['./register-view.component.component.css'],
})
export class RegisterViewComponent {
  username: string;
  password: string;
  error: any;
  valid: any;
  constructor(private api: ApiService) {} /* Recibe el valor la clase ApiService y lo asigna a api*/
                                          /* en verdad es más bien como si renombrara a la classe */

  register() {
    /*recive un parametro commo username y otro como password*/
    const { username, password } = this;
    /*si el trimeo del parametro guardado como nombre es distinto de vacío y el de
    password también llama a la api */
    if (username.trim() !== '' && password.trim() !== '') {
      this.api
        /*le pasa a la propiedad register el username y el pasword trimeado*/
        .register(username.trim(), password.trim())
        .then(res => {
            /* si lo puede hacer le pasa a .valid el valor "res"*/
          this.valid = res;
        })
        .catch(error => {
          /* sino puede le pasa error al error*/
          this.error = error;
        });
    }
  }
}