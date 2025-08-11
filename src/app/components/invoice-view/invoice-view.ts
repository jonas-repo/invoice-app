import { Component, Input } from '@angular/core';

@Component({
  selector: 'invoice-view',
  imports: [],
  templateUrl: './invoice-view.html',
  styleUrl: './invoice-view.css'
})
export class InvoiceView {
  @Input() name!: string;
  @Input() id!: number;
}
