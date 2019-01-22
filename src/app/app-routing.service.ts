import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BoardComponent } from './board/board.component';
import { LoginViewComponent } from './login-view/login-view.component'; 
import { RegisterViewComponent } from './register-view.component/register-view.component.component'; /*crearlo component*/
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  /*definir las rutas de navegación de la pag*/
  {
    path: 'board',
    component: BoardComponent,
  },
  {
    path: 'login',
    component: LoginViewComponent, /* clase del login */
  },
  {
    path: 'register',
    component: RegisterViewComponent,
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}