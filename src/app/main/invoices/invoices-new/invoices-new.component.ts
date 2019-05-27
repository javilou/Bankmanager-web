import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OFormComponent, OntimizeService, OListPickerComponent, OTableComponent, ORealPipe } from 'ontimize-web-ngx';

@Component({
  selector: 'app-invoices-new',
  templateUrl: './invoices-new.component.html',
  styleUrls: ['./invoices-new.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.invoices-new]': 'true'
  }
})
export class InvoicesNewComponent implements OnInit {

  constructor() { }

  getData() {

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
        'Size: ' + Math.round(size / 1024) + " KB");
        
    }
  }

  ngOnInit() {
  }

}
