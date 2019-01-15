/* declaramos los métodos que vamos a usar importados de la librería angular */
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'arrayDeTareas',
  templateUrl: './arrayDeTareas.component.html',
  styleUrls: ['./arrayDeTareas.css'],
})
export class ArrayDeTareasComponent {
    /* ESTO ES COMO UNA VARIABLE QUE RECIBE LOS DATOS DEL ARRAY SEGÚN HE INDICADO ANTES */
    /* Esto recibe datos de entrada por eso se llama input */
    @Input() arrayData : any ;


    /*-- Esto emite el cambio de  clase desde el hijo al padre */
    @Output() alternarCompletada = new EventEmitter();
    emitirCambioCompletada(id) {
      this.alternarCompletada.emit(id);
    }

    @Output() borrarTarea = new EventEmitter();
    eliminar(id) {
      this.borrarTarea.emit(id);
    }


 
}
