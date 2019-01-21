import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.service'; /* renombrar a .module */
import { AppComponent } from './app.component';
import { ArrayDeTareasComponent } from './ArrayDeTareas/ArrayDeTareas.component';
import { RouterModule  } from '@angular/router';
import { RegisterViewComponent } from './register-view.component/register-view.component.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { BoardComponent } from './board/board.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
/*import { ApiService } from './api.service'; */



@NgModule({
  declarations: [
    AppComponent,
    ArrayDeTareasComponent,
    RegisterViewComponent,
    LoginViewComponent,
    BoardComponent,
    NavbarComponent,
    AppComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
    
  ],
  providers: [/*ApiService*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
