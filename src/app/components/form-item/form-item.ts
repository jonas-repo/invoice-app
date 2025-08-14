import { Component, EventEmitter, Output } from '@angular/core';
import { Item } from '../../models/item';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'form-item',
  imports: [FormsModule],
  templateUrl: './form-item.html',
  styleUrl: './form-item.css'
})
export class FormItem {
  @Output() addItemEventEmmiter = new EventEmitter();

  private counterId = 4;

  item: any = {
    product: '',
    price: '',
    quantity: ''
  }
}
