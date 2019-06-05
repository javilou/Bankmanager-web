import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoices-detail',
  templateUrl: './invoices-detail.component.html',
  styleUrls: ['./invoices-detail.component.scss']

})
export class InvoicesDetailComponent implements OnInit {
  invoiceId: any;
  constructor() { 
    this.invoiceId = null;
  }

  ngOnInit() {
  }

}
