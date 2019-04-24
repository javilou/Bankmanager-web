import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OntimizeWebModule } from "ontimize-web-ngx";
import { CustomersRoutingModule } from "./customers-routing.module";
import { CustomersHomeComponent } from "./customers-home/customers-home.component";
import { CustomersDetailComponent } from "./customers-detail/customers-detail.component";
import { CustomersNewComponent } from "./customers-new/customers-new.component";
import { InvoicesNewComponent } from "./invoices-new/invoices-new.component";

@NgModule({
  imports: [
    CommonModule,
    OntimizeWebModule,
    CustomersRoutingModule
  ],
  declarations: [
    CustomersHomeComponent,
    CustomersDetailComponent,
    CustomersNewComponent,
    InvoicesNewComponent
  ], 
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class CustomersModule {}