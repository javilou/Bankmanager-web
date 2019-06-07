import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoicesHomeComponent } from './invoices-home/invoices-home.component';
import { InvoicesNewComponent } from './invoices-new/invoices-new.component';
import { InvoicesFormComponent } from './invoices-new/invoices-form/invoices-new-form.component';
import { InvoicesHomeFormComponent } from './invoices-home/invoices-home-form/invoices-home-form.component';
import { InvoicesDetailComponent } from './invoices-detail/invoices-detail.component';
import { InvoicesDetailFormComponent } from './invoices-detail/invoices-detail-form/invoices-detail-form.component';

export const INVOICES_MODULE_DECLARATIONS = [
  InvoicesHomeComponent,
  InvoicesNewComponent,
  InvoicesFormComponent,
  InvoicesHomeFormComponent,
  InvoicesDetailComponent,
  InvoicesDetailFormComponent,
];

const routes: Routes = [{
  path: '',
  component: InvoicesHomeFormComponent
},
{
  path: 'new',
  component: InvoicesNewComponent
},
{
  path: ':INVOICESID',
  component: InvoicesDetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoicesRoutingModule { }
