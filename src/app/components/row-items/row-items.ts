import { Component, Input } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'tr [row-items]',
  imports: [],
  templateUrl: './row-items.html',
  styleUrl: './row-items.css'
})
export class RowItems {
  @Input() item!: Item;
}
