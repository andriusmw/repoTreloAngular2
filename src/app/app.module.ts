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
import { AddNewListComponent } from './add-new-list/add-new-list.component';
import { ApiService } from './api.service'; 
import { DataManagerService } from './data-manager.service';
import { ShowListsComponent } from './show-list/show-list.component';
import { ListComponent } from './list/list.component';
import { TaskComponent } from './task/task.component';



@NgModule({
  declarations: [
    AppComponent,
    ArrayDeTareasComponent,
    RegisterViewComponent,
    LoginViewComponent,
    BoardComponent,
    NavbarComponent,
    AppComponent,
    AddNewListComponent,
    ShowListsComponent,
    ListComponent,
    TaskComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
    
  ],
  providers: [ApiService, DataManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
