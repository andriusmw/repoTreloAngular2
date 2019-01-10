import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListadoTareasComponent } from './listado-tareas/listado-tareas.component';
import { CrearTareaComponent } from './crear-tarea/crear-tarea.component';
import { FiltrarTareasComponent } from './filtrar-tareas/filtrar-tareas.component';

@NgModule({
  declarations: [AppComponent, ListadoTareasComponent, CrearTareaComponent, FiltrarTareasComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
