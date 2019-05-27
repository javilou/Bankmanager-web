import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from "ontimize-web-ngx";
import { InvoicesRoutingModule, INVOICES_MODULE_DECLARATIONS } from './invoices-routing.module';
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
    InvoicesNewComponent,
    INVOICES_MODULE_DECLARATIONS
  ]
})
export class InvoicesModule { }
