import { Component, Input } from '@angular/core';
import { Item } from '../../models/item';
import { RowItems } from '../row-items/row-items';

@Component({
  selector: 'list-items',
  imports: [RowItems],
  templateUrl: './list-items.html',
  styleUrl: './list-items.css'
})
export class ListItems {
  @Input() items: Item[] = [];
}
