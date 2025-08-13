import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoiceService';
import { Invoice } from '../../models/invoice';
import { ClientView } from '../client-view/client-view';
import { CompanyView } from '../company-view/company-view';
import { InvoiceView } from '../invoice-view/invoice-view';
import { ListItems } from '../list-items/list-items';
import { RowItems } from '../row-items/row-items';
import { Total } from '../total/total';

@Component({
  selector: 'app-invoice',
  imports: [ClientView, 
    CompanyView, 
    InvoiceView, 
    ListItems, 
    Total],
  templateUrl: './invoice.html',
  styleUrl: './invoice.css'
})
export class InvoiceComponent implements OnInit {

invoice!: Invoice;

constructor(private service: InvoiceService){}

  ngOnInit(): void {
    this.invoice = this.service.getInvoice();
  }
  
  removeItem(id:number){
    this.invoice = this.service.remove(id);
  }

}
