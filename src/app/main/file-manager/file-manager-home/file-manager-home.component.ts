import { Component, OnInit, NgModule } from '@angular/core';
import { OFileManagerModule } from 'ontimize-web-ngx-filemanager';

@Component({
  selector: 'app-file-manager-home',
  templateUrl: './file-manager-home.component.html',
  styleUrls: ['./file-manager-home.component.scss']
})

@NgModule({
  imports: [
    OFileManagerModule
  ]
})

export class FileManagerHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
