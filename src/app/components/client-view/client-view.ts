import { Component, Input } from '@angular/core';
import { Client } from '../../models/client';

@Component({
  selector: 'client-view',
  imports: [],
  templateUrl: './client-view.html',
  styleUrl: './client-view.css'
})
export class ClientView {
  @Input() client: Client = new Client();
}
