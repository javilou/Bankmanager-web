import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { OFileManagerModule } from 'ontimize-web-ngx-filemanager';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    MainRoutingModule,
    OFileManagerModule
  ],
  declarations: [
    MainComponent
  ]
})
export class MainModule { }
