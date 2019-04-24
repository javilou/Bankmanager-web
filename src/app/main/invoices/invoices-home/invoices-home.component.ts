import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoices-home',
  templateUrl: './invoices-home.component.html',
  styleUrls: ['./invoices-home.component.scss']
})
export class InvoicesHomeComponent implements OnInit {

  constructor() { }

  editionStarted(arg: any) {
    console.log('editionStarted');
    console.log(arg);
  }

  editionCancelled(arg: any) {
    console.log('editionCancelled');
    console.log(arg);
  }

  editionCommitted(arg: any) {
    console.log('editionCommitted');
    console.log(arg);
  }

  ngOnInit() {
  }

}
