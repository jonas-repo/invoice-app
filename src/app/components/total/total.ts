import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'total',
  imports: [],
  templateUrl: './total.html',
  styleUrl: './total.css'
})
export class Total {
  @Input() total : number = 0;
}
