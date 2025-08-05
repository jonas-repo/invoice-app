import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InvoiceComponent } from './components/invoice/invoiceComponent';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,InvoiceComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'invoice-app';
}
