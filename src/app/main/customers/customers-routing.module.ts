import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersHomeComponent } from "./customers-home/customers-home.component";
import { CustomersDetailComponent } from "./customers-detail/customers-detail.component";
import { CustomerDetailFormComponent } from "./customers-detail/form/customers-detail-form.component"
import { CustomersNewComponent } from "./customers-new/customers-new.component";
import { InvoicesNewComponent } from "./invoices-new/invoices-new.component";

export const CUSTOMERS_MODULE_DECLARATIONS = [
  CustomersDetailComponent,
  CustomersHomeComponent,
  CustomersNewComponent,
  CustomerDetailFormComponent
];

const routes: Routes = [{
  path : '',
  component: CustomersHomeComponent
},
{
  path: ":CUSTOMERID/invoicesnew",
  component: InvoicesNewComponent 
},
{
  path: "new",
  component: CustomersNewComponent
},
{
  path: ":CUSTOMERID",
  component: CustomersDetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }