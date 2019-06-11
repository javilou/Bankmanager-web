import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileManagerRoutingModule } from './file-manager-routing.module';
import { FileManagerHomeComponent } from './file-manager-home/file-manager-home.component';

@NgModule({
  imports: [
    CommonModule,
    FileManagerRoutingModule
  ],
  declarations: [FileManagerHomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FileManagerModule { }
