import { forwardRef, Injector, ChangeDetectorRef, NgZone, ElementRef, Component, ViewEncapsulation} from '@angular/core';
import { dataServiceFactory, OFormComponent, OntimizeService } from 'ontimize-web-ngx';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-invoices-home-form',
  templateUrl: './invoices-home-form.component.html',
  styleUrls: ['./invoices-home-form.component.scss'],
  providers: [
    {
      provide: OntimizeService,
      useFactory: dataServiceFactory,
      deps: [Injector]
    }, {
      provide: OFormComponent,
      useExisting: forwardRef(() => InvoicesHomeFormComponent)
    }
  ],
  inputs: OFormComponent.DEFAULT_INPUTS_O_FORM,
  outputs: OFormComponent.DEFAULT_OUTPUTS_O_FORM,
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.invoices-home]': 'true',
    '[class.fill]': 'layoutFill'
  }
})
export class InvoicesHomeFormComponent extends OFormComponent {
  protected recaptchaResponseToken: string;
  invoiceId: any;
  constructor(
    _actRoute: ActivatedRoute, _zone: NgZone,
    _router: Router, cd: ChangeDetectorRef,
    injector: Injector,elRef: ElementRef) {
      super(_router, _actRoute,_zone, cd, injector,elRef);
      this.recaptchaResponseToken = undefined;
      this.invoiceId = null;
    }

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

  getId() {
    this.invoiceId = this.getFieldValue("INVOICESID");
    console.log("invice id: " + this.invoiceId);
  }

}
