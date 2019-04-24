import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from "ontimize-web-ngx";
import { InvoicesRoutingModule } from './invoices-routing.module';
import { InvoicesHomeComponent } from './invoices-home/invoices-home.component';
import { InvoicesNewComponent } from './invoices-new/invoices-new.component';

@NgModule({
  imports: [
    CommonModule,
    InvoicesRoutingModule,
    OntimizeWebModule
  ],
  declarations: [
    InvoicesHomeComponent,
    InvoicesNewComponent
  ]
})
export class InvoicesModule { }
