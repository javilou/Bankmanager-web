import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-invoices-new',
  templateUrl: './invoices-new.component.html',
  styleUrls: ['./invoices-new.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.invoices-new]': 'true'
  }
})
export class InvoicesNewComponent implements OnInit {


  constructor() { 
  }

  ngOnInit() {
  }

}
