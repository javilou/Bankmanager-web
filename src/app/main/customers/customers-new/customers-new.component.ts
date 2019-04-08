import {NgModule ,Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-customers-new',
  templateUrl: './customers-new.component.html',
  styleUrls: ['./customers-new.component.scss']
})

@NgModule({
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})

export class CustomersNewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
