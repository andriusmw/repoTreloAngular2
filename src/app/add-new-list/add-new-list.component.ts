import { Component } from '@angular/core';
import { DataManagerService } from '../data-manager.service';
/* Este servicio maneja lo que se recibe del backend y lo que se envía*/

/*10. ver data-manager.service.ts*/

@Component({
  selector: 'app-add-new-list',
  templateUrl: './add-new-list.component.html',
  
})
export class AddNewListComponent {
  constructor(private dataService: DataManagerService) {} /*asigna el nombre dataService a la clase 
  DataManaferService de importada en la linea 2*/
  addList(ev) { /*Se llama a esta función cuando detecta un ENTER en el input */
    if (ev.target.value.trim() !== '') { /*si el trimeo del valor del evento no es vacío 
      llama al dataServiice a la función addNewList y le pasa el trimeo del valor del evento ( lo que hay
        en el input de crear lista ) */
      this.dataService.addNewList(ev.target.value.trim());
      ev.target.value = ''; /*resetea el input */
    }
  }
}
