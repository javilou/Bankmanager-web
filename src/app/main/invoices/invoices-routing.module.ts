import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoicesHomeComponent } from './invoices-home/invoices-home.component';
import { InvoicesNewComponent } from './invoices-new/invoices-new.component';
import { InvoicesFormComponent } from './invoices-new/invoices-form/invoices-new-form.component';

export const INVOICES_MODULE_DECLARATIONS = [
  InvoicesHomeComponent,
  InvoicesNewComponent,
  InvoicesFormComponent
];

const routes: Routes = [{
  path: '',
  component: InvoicesHomeComponent
},
{
  path: 'new',
  component: InvoicesNewComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoicesRoutingModule { }
