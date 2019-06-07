import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from "ontimize-web-ngx";
import { InvoicesRoutingModule, INVOICES_MODULE_DECLARATIONS } from './invoices-routing.module';
import { InvoicesHomeComponent } from './invoices-home/invoices-home.component';
import { InvoicesNewComponent } from './invoices-new/invoices-new.component';
import { InvoicesHomeFormComponent } from './invoices-home/invoices-home-form/invoices-home-form.component';
import { InvoicesDetailComponent } from './invoices-detail/invoices-detail.component';
import { InvoicesDetailFormComponent } from './invoices-detail/invoices-detail-form/invoices-detail-form.component';

@NgModule({
  imports: [
    CommonModule,
    InvoicesRoutingModule,
    OntimizeWebModule
  ],
  declarations: [
    InvoicesHomeComponent,
    InvoicesNewComponent,
    INVOICES_MODULE_DECLARATIONS,
    InvoicesHomeFormComponent,
    InvoicesDetailComponent,
    InvoicesDetailFormComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InvoicesModule { }
