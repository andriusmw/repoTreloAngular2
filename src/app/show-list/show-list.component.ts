import { Component, OnInit, Input } from '@angular/core';
import { List } from '../models.interface';

@Component({
  selector: 'app-show-lists',
  templateUrl: './show-lists.component.html',
  /*styleUrls: ['./show-lists.component.scss'],*/
})
/* tiene un input que coge las clases listas del array de listas */
export class ShowListsComponent implements OnInit {
  @Input() lists: Array<List>;
  constructor() {}

  ngOnInit() {}
}