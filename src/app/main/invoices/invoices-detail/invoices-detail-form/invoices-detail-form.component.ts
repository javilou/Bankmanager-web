import { forwardRef, Injector, ChangeDetectorRef, NgZone, ElementRef, Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { dataServiceFactory, OFormComponent, OntimizeService } from 'ontimize-web-ngx';
import { ActivatedRoute, Router, ChildActivationEnd } from '@angular/router';
import { OFileInputComponent } from 'ontimize-web-ngx/ontimize/components/input/file-input/o-file-input.component';



@Component({
  selector: 'app-invoices-detail-form',
  templateUrl: './invoices-detail-form.component.html',
  styleUrls: ['./invoices-detail-form.component.scss'],
  providers: [
    {
      provide: OntimizeService,
      useFactory: dataServiceFactory,
      deps: [Injector]
    }, {
      provide: OFormComponent,
      useExisting: forwardRef(() => InvoicesDetailFormComponent)
    }
  ],
  inputs: OFormComponent.DEFAULT_INPUTS_O_FORM,
  outputs: OFormComponent.DEFAULT_OUTPUTS_O_FORM,
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.invoices-detail]': 'true',
    '[class.fill]': 'layoutFill'
  },
})
export class InvoicesDetailFormComponent extends OFormComponent {
  protected recaptchaResponseToken: string;

  @ViewChild(OFileInputComponent) child;

  invoiceId: any;
  constructor(
    _actRoute: ActivatedRoute, _zone: NgZone,
    _router: Router, cd: ChangeDetectorRef,
    injector: Injector,elRef: ElementRef) {
      super(_router, _actRoute,_zone, cd, injector,elRef);
      this.recaptchaResponseToken = undefined;
      this.invoiceId = null;
    }

  onUploadFile(event) {
    if (event.target.files.lenght == 0) {
      console.log("----- NO SE HA SELECCIONADO NINGUN ARCHIVO -----");
    } else {
      let file: File = event.target.files[0];
      console.log("----- SE HA SELECCIONADO UN ARCHIVO -----");
    }
    for (var i = 0; i < event.target.files.length; i++) { 
      var name = event.target.files[i].name;
      var type = event.target.files[i].type;
      var size = event.target.files[i].size;
      var modifiedDate = event.target.files[i].lastModifiedDate;
      
      console.log ('Name: ' + name + "\n" + 
        'Type: ' + type + "\n" +
        'Last-Modified-Date: ' + modifiedDate + "\n" +
        'Size: ' + Math.round(size / 1024) + " KB" );
        
      }
      this.invoiceId = this.getFieldValue("INVOICESID");
      console.log("invice id: " + this.invoiceId);

      this.child.uploader.data = {invoiceId: this.invoiceId};
      


  }

}
